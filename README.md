# Taskly - Task Management System

## Objective
Taskly is a full-stack web application for managing tasks. Users can register, log in, and manage their tasks effectively. The application follows modern web development standards and uses the following technologies:

- **Backend**: Node.js and Express.js
- **Database**: MongoDB
- **Frontend**: React.js

---

## Features
### User Management:
- **Register**: Users can create an account.
- **Login**: Users can log in securely.
- **Password Security**: Passwords are hashed using bcrypt.

### Task Management:
- **Create Tasks**: Users can create tasks with a title, description, due date, and status (Pending, In Progress, Completed).
- **View Tasks**: Users can view all their tasks.
- **Update Tasks**: Users can update task details.
- **Delete Tasks**: Users can delete their tasks.

### Role-Based Access (Optional):
- Admins can view tasks from all users.

### Additional Features:
- Responsive UI for mobile and desktop users.
- Filter tasks by status or due date.

---

## Tech Stack
- **Backend**: Node.js + Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT) + bcrypt for hashing passwords
- **Styling**: Tailwind CSS (optional, customizable)

---

## Project Structure
```
root
├── backend
│   ├── models
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── controllers
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── config
│   │   └── db.js
│   ├── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── TaskDashboard.js
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   ├── context
│   │   │   └── AuthContext.js
│   │   ├── services
│   │   │   ├── authService.js
│   │   │   └── taskService.js
│   │   ├── App.js
│   │   └── index.js
```

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or through a service like MongoDB Atlas)
- npm or yarn

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `backend` directory with the following variables:
     ```env
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     PORT=5000
     ```
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend API will run at `http://localhost:5000`.

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will run at `http://localhost:3000`.

---

## API Documentation

### Authentication Endpoints
- **Register**: `POST /api/auth/register`
  - Request body: `{ "name": "John Doe
