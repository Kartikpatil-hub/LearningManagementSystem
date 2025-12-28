📚 Learning Management System (LMS)

A Full Stack Learning Management System built using React, Node.js, Express, MongoDB, and JWT Authentication.
This project allows users to register, login, access a dashboard, view courses, and enroll in courses securely.

🚀 Features

🔐 User Registration & Login

🔑 JWT Authentication

🛡️ Protected Routes (Dashboard & Courses)

📊 User Dashboard

📚 Course Listing & Enrollment

🚪 Logout Functionality

🌐 RESTful API

📦 Full Stack Architecture

🛠️ Tech Stack
Frontend

React (Vite)

React Router DOM

Axios

HTML, CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (jsonwebtoken)

bcryptjs

dotenv

CORS

📂 Project Structure
LearningManagementSystem/
│
├── lms-frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Courses.jsx
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.jsx
│   └── package.json
│
├── lms-backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── courseRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── .gitignore

⚙️ Environment Variables

Create a .env file inside lms-backend:

JWT_SECRET=myjwtsecretkey

▶️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/Kartikpatil-hub/LearningManagementSystem.git
cd LearningManagementSystem

2️⃣ Run Backend
cd lms-backend
npm install
npx nodemon server.js


Backend runs on:

http://localhost:5000

3️⃣ Run Frontend
cd lms-frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔐 Authentication Flow (JWT)

User registers → password hashed using bcrypt

User logs in → backend validates credentials

JWT token is generated

Token stored in browser localStorage

Protected routes check token

Logout removes token

🧪 API Endpoints
Auth

POST /api/auth/register → Register user

POST /api/auth/login → Login user & get JWT

Courses

GET /api/courses → Fetch available courses (protected)

📸 Screens / Pages

Register Page

Login Page

Dashboard

Courses Page

🧠 Learning Outcomes

Full Stack development

JWT authentication

Secure password handling

REST API design

React routing & state management

Git & GitHub workflow

Debugging real-world issues

📌 Future Improvements

Save enrolled courses to database

Role-based access (Admin / Student)

Course details page

UI enhancement

Deployment (Vercel + Render)

👨‍💻 Author

Kartik Patil
GitHub: https://github.com/Kartikpatil-hub

⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork it!
