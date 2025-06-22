# Ikkashin LMS

A modern, clean, and responsive Learning Management System for students to manage assignments, submissions, and academic progress.  
Built with **React**, **Node.js**, **Express**, **MongoDB**,**Multer**,**Cloudnary**, **TailwindCSS**, and **JWT authentication**.

---

## 🚀 Live Demo

- **Frontend:** [URL](https://ikkashin-lms.vercel.app/login)
- **Backend:** [URL](https://ikkashin-lms.onrender.com/)

---

## ✨ Features

- **User Authentication:** Secure login and signup using JWT.
- **Assignment Submission:** Upload assignments with title, description, file (PDF/image), student name, and student ID.
- **View Submissions:** See all your submissions in a beautiful, paginated card layout.
- **Responsive UI:** Looks great on all devices, powered by TailwindCSS.
- **Role-based Navigation:** Assignment upload only visible to logged-in users.
- **Logout:** Securely log out and clear your session.
- **MongoDB Database:** Robust and scalable data storage.

---

## 🖼️ Screenshots

### Login Page
[![ikkashin-login.png](https://i.postimg.cc/9MMS31Bb/ikkashin-login.png)](https://postimg.cc/Ny3bm6S2)

### Signup Page
[![ikkashin-signup.png](https://i.postimg.cc/W4bj3GnF/ikkashin-signup.png)](https://postimg.cc/cvjPk8P0)

### Home Page (After Login)
[![ikkashin-home-after-login.png](https://i.postimg.cc/VsbwdLjR/ikkashin-home-after-login.png)](https://postimg.cc/kD9zHCY6)

### Upload Assignment Page
[![ikkashin-assignment-upload-page.png](https://i.postimg.cc/J4VLJVxW/ikkashin-assignment-upload-page.png)](https://postimg.cc/mhwJfnKd)

### Submissions Page
[![ikkashin-submission-page.png](https://i.postimg.cc/cJHyZsxf/ikkashin-submission-page.png)](https://postimg.cc/w1SbQYsB)

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (jsonwebtoken)
- **File Uploads:** Multer (for handling file uploads)
- **Deployment:** Render

---

## 📁 Folder Structure

```
Ikkashin-LMS/
│
├── backend/
│   ├── controllers/
│   │   └── submissionController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── submissionModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   └── submissionRoutes.js
│   │   └── userRoutes.js
│   ├── uploads/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── SubmissionCard.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── SubmissionForm.jsx
│   │   │   ├── Home.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   ├── tailwind.config.js
│   └── package.json
│
├── README.md
└── package.json
```

---

## 📦 Submission Model

```js
{
  title: String,           // Assignment title
  description: String,     // Assignment description
  fileUrl: String,         // Uploaded file (PDF/image) URL
  studentName: String,     // Name of the student
  studentId: String,       // Student ID
  submittedBy: ObjectId    // Reference to User
}
```

---

## 🔑 Authentication

- **JWT** is used for secure login and logout.
- Protected routes for assignment upload and viewing submissions.
- Logout clears the JWT token from localStorage.

---

## 📝 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Ikkashin-LMS.git
   cd Ikkashin-LMS
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   # Set up your .env file for MongoDB URI and JWT secret
   npm run dev 
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Visit:**  
   - Frontend: `https://ikkashin-lms.vercel.app/login`
   - Backend: `https://ikkashin-lms.onrender.com/`

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📧 Contact

For any queries or feedback, please contact [Email](mailto:badri.singh8090@gmail.com).

---

**Made with ❤️ using React, Node.js, MongoDB,multer,cloudnary and TailwindCSS**