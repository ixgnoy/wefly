# 🌍 WEFLY

*Empowering seamless travel bookings with modern web technologies.*

![last-commit](https://img.shields.io/github/last-commit/ixgnoy/TravelNow)
![repo-top-language](https://img.shields.io/github/languages/top/ixgnoy/TravelNow)
![repo-language-count](https://img.shields.io/github/languages/count/ixgnoy/TravelNow)
![Visitors](https://visitor-badge.laobi.icu/badge?page_id=ixgnoy.TravelNow)
![License](https://img.shields.io/github/license/ixgnoy/wefly) 

---

## ✨ Features

- ✅ User Authentication & Authorization  
- 🛠️ Admin-side CRUD for:  
  - Packages  
  - Bookings  
  - Users  
- ✏️ User-side CRUD for:
  - Booking  
  - Payment  
- 🧩 Package Listings  
- 🕒 Booking Sessions  
- 💳 Payment Integration
- 📬 Automatic downloadable receipt after checkout  
- 🤖 Smart AI assistant chatbot (`Ray`) using **Gemini API**  
- 🚀 Microservices architecture for scalability  

---

## 🧠 Skills & Tech Stack

### 🧑‍💻 Front-End
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-336699?style=for-the-badge&logo=font-awesome&logoColor=white)  
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)  
![Swiper.js](https://img.shields.io/badge/Swiper-2196F3?style=for-the-badge&logo=javascript&logoColor=white)  
![GLightbox](https://img.shields.io/badge/GLightbox-FF5555?style=for-the-badge&logo=html5&logoColor=white)  
  

### ☕ Back-End
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![Spring Web](https://img.shields.io/badge/Spring_Web-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/JPA-007396?style=for-the-badge&logo=hibernate&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
![Microservice Architecture](https://img.shields.io/badge/Microservice-blue?style=for-the-badge&logo=microsoftvisualstudio&logoColor=white)

### 🗃️ Database
![H2](https://img.shields.io/badge/H2-1F4E79?style=for-the-badge&logo=h2&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

### 🛠️ Tools & Utilities
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Validation API](https://img.shields.io/badge/Validation_API-000000?style=for-the-badge)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

---

## 🧩 System Design & Architecture

- 🧬 **Database Design (ERD)**  
- 🏗 **Application Design using MVC Architecture**


- <h3>ERD is as below:</h3>
  <img src="https://github.com/ixgnoy/CSC3402_Project/blob/main/ERD/ERD.png" />
  <hr>

<h3>The Architecture Diagram:</h3>
<img src="Architecture Diagram/diagram (travel.Now).png"/><br>
  
Relationship is as below:

- One-to-Many Relationship between User and Book (one user can make multiple bookings).
- One-to-One Relationship between Book and Payment (one booking can have only one payment).
- One-to-One Relationship between Book and Package (one booking can be within only one package).

Demonstration is as below:
https://www.youtube.com/watch?v=KJgQoqapFkc

