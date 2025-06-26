# 🌍 WEFLY

*Empowering seamless travel bookings with modern web technologies.*

![last-commit](https://img.shields.io/github/last-commit/ixgnoy/TravelNow)
![repo-top-language](https://img.shields.io/github/languages/top/ixgnoy/TravelNow)
![repo-language-count](https://img.shields.io/github/languages/count/ixgnoy/TravelNow)
![Visitors](https://visitor-badge.laobi.icu/badge?page_id=ixgnoy.TravelNow)


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

---

## 🧠 Skills & Tech Stack

### 🧑‍💻 Front-End
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)

### ☕ Back-End
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![Spring Web](https://img.shields.io/badge/Spring_Web-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/JPA-007396?style=for-the-badge&logo=hibernate&logoColor=white)

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
1. Login when you're a registered user:<br>
   [![Db Web Dev Demo Video](https://i9.ytimg.com/vi_webp/umv8zJHvv3A/mqdefault.webp?v=66fa4d82&sqp=CPCY6bcG&rs=AOn4CLDwdFfDD1fSb5pAtk71AqN6ZufOlw)](https://youtu.be/umv8zJHvv3A "Database Web Dev Demo Video")

2. Register a new account when you're a new user of Travel.Now: <br>
   [![Db Web Dev Register New Acc Demo Video](https://i9.ytimg.com/vi/Gby6tjzD_EU/mqdefault.jpg?v=66fa54c7&sqp=CKSp6bcG&rs=AOn4CLAvo7shPrSI4oCarMBuwTN3f_OyrA)](https://youtu.be/Gby6tjzD_EU "Database Web Dev Demo Video of Register A New Account")

3. Accessing the H2 Database: <br>
   [![Db Web Dev Register New Acc Demo Video](https://i9.ytimg.com/vi_webp/7N39x59Ddkw/mqdefault.webp?v=66fa58b8&sqp=CKiw6bcG&rs=AOn4CLDSnfxoYGMcxTdx5EAlwMLuwq6J1A)](https://youtu.be/7N39x59Ddkw "Database Web Dev Demo Video of Accessing H2 Db")

