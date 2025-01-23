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


### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd tasklyfront
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will run at `http://localhost:5300`.

---



## Assumptions
- Only logged-in users can manage their tasks.
- Admin role is optional and used for viewing all user tasks.
- Frontend communicates with the backend through Axios.

---

## Development Guidelines
- Ensure RESTful API conventions.
- Follow clean and modular coding practices.
- Implement proper error handling and validation for user input.
- Use React Context for authentication state management.

---

## Additional Notes
- Customize styles using Tailwind CSS or other CSS frameworks.
- Test the application thoroughly for edge cases.
- Document additional configurations or decisions made during development in this README.

---

## Testing
1. **Backend Tests**:
   - Use tools like Postman or Thunder Client to test API endpoints.
   - Write unit and integration tests for critical backend functionality using a testing library like Mocha or Jest.

2. **Frontend Tests**:
   - Test components with React Testing Library.
   - Ensure the application is responsive on multiple devices and browsers.

3. **Manual Testing**:
   - Test the app end-to-end for common user flows like login, task creation, and deletion.

---

## Future Enhancements
- Add user profile management.
- Enable push notifications for task reminders.
- Implement sorting and searching for tasks.
- Add a dashboard with task analytics (e.g., pie chart for task status distribution).

---

## Authors
(https://github.com/RIDHIJAIN1))

---

## License
This project is licensed under the MIT License.
