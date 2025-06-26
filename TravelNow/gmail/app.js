// Import required libraries
const express = require('express');
const { google } = require('googleapis');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Gmail API setup
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

// Set refresh token (stored securely in .env)
oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

// Function to refresh access token when needed
async function getAccessToken() {
    const { credentials } = await oauth2Client.refreshAccessToken();
    oauth2Client.setCredentials(credentials);
    return credentials.access_token;
}

// POST /send-email - Send booking confirmation email
app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    // Validate request body
    if (!to || !subject || !text) {
        return res.status(400).json({ error: 'Missing required fields: to, subject, or text' });
    }

    try {
        // Get a fresh access token
        const accessToken = await getAccessToken();

        // Configure Gmail API client
        const gmail = google.gmail({ version: 'v1', auth: { ...oauth2Client, accessToken } });

        // Create raw email message
        const rawMessage = [
            `To: ${to}`,
            `From: WEFLY <${process.env.GOOGLE_USER_EMAIL}>`,
            `Subject: ${subject}`,
            '',
            text
        ].join('\r\n');

        // Encode message as base64
        const encodedMessage = Buffer.from(rawMessage).toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        // Send the email via Gmail API
        const response = await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: encodedMessage
            }
        });

        console.log('Email sent successfully:', response.data);
        res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error.message);
        console.error('Stack trace:', error.stack);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

// Optional: Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({ status: 'Chatbot Email Service Running' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Email service running at http://localhost:${PORT}`);
});