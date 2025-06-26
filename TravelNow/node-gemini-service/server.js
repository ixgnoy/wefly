// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config()
const cors = require('cors');

// Ensure you have a .env file with API_KEY set
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
const MODEL_NAME = "gemini-2.0-flash";
const API_KEY = process.env.API_KEY?.trim();

async function runChat(userInput, systemPrompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 1000,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        // ... other safety settings
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
            {
                role: "user",
                parts: [{ text: "You are Ray, a friendly assistant who works for WEFLY. WEFLY is an online platform allows user to book for their next traveling plan within 1 minute. Your job is to capture user's name. thank the user and output their name in the following conversation. Answer user's questions related to WEFLY.\n."}],
            },
            {
                role: "model",
                parts: [{ text: "Hello! Welcome to WEFLY. My name is Ray. What's your name?"}],
            },
            {
                role: "user",
                parts: [{ text: "Hi"}],
            },
            {
                role: "model",
                parts: [{ text: "Hi there! Thanks for reaching out to WEFLY. Before I can answer your question, can you please provide your name for documentation purpose?"}],
            },
        ],
    });

    const result = await chat.sendMessage(userInput, systemPrompt);
    const text = await result.response.text();  // Await the text() Promise here
    return text;

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/loader.gif', (req, res) => {
    res.sendFile(__dirname + '/loader.gif');
});
const sessionStore = {}; // Key: IP or session ID, Value: { name, email, confirmed }

app.post('/chat', async (req, res) => {
    try {
        const userInput = req.body?.userInput;
        const userId = req.ip;

        if (!sessionStore[userId]) {
            sessionStore[userId] = { name: null };
        }
        const userSession = sessionStore[userId];

        // Basic name recognition (you can improve this regex)
        const nameMatch = userInput.match(/i am (\w+)/i) || userInput.match(/my name is (\w+)/i);

        if (nameMatch && !userSession.name) {
            userSession.name = nameMatch[1];
        }

        let systemPrompt = "";

        if (!userSession.name) {
            systemPrompt = `You are Ray, a friendly assistant at WEFLY. Please ask the user for their name in a friendly way.`;
        } else {
            systemPrompt = `You are Ray, a helpful assistant at WEFLY. The user has told me their name is ${userSession.name}. Please answer their questions and use their name (${userSession.name}) naturally in your replies.`;
        }

        const response = await runChat(userInput, systemPrompt);
        res.json({ response });

    } catch (error) {
        console.error('Error in chat endpoint:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});