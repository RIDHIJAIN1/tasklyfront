Frontend Setup (React.js)
Prerequisites:
Node.js (v14 or higher)
Steps:
Change directory to the frontend folder:

bash
Copy
Edit
cd frontend
Install the frontend dependencies:

bash
Copy
Edit
npm install
Create a .env file in the frontend folder with the following:

env
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
Run the frontend application:

bash
Copy
Edit
npm start
The frontend should now be running at http://localhost:3000.

API Endpoints
Authentication:
POST /api/users/register: Register a new user.

Request body:

json
Copy
Edit
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}
Response:

json
Copy
Edit
{ "message": "User registered successfully" }
POST /api/users/login: Login a user and get a JWT token.

Request body:

json
Copy
Edit
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

json
Copy
Edit
{ "token": "JWT_TOKEN" }
Task Management:
GET /api/tasks: Get all tasks for the logged-in user.

Headers: Authorization: Bearer <JWT_TOKEN>
Response:
json
Copy
Edit
[
  {
    "title": "Task 1",
    "description": "Description of Task 1",
    "dueDate": "2025-01-30",
    "status": "Pending",
    "userId": "user_id"
  },
  ...
]
POST /api/tasks: Create a new task.

Request body:

json
Copy
Edit
{
  "title": "New Task",
  "description": "Task description",
  "dueDate": "2025-01-30",
  "status": "Pending"
}
Response:

json
Copy
Edit
{ "message": "Task created successfully" }
PUT /api/tasks/:id: Update an existing task.

Request body:
json
Copy
Edit
{
  "title": "Updated Task",
  "description": "Updated description",
  "dueDate": "2025-01-31",
  "status": "In Progress"
}
DELETE /api/tasks/:id: Delete a task.

Response:
json
Copy
Edit
{ "message": "Task deleted successfully" }
Frontend Structure
Pages:
Login Page: Allows users to log in using email and password.
Register Page: Allows users to register by providing name, email, and password.
Dashboard Page: Displays tasks for the logged-in user with options to create, update, delete, and filter tasks.
Task Form Page: A form to create or edit tasks.
Components:
LoginForm: Handles user login form.
RegisterForm: Handles user registration form.
TaskList: Displays the list of tasks.
TaskCard: Represents each task in a card.
TaskForm: Handles creating and editing tasks.
Services:
AuthService: Handles user authentication logic (register, login, token management).
TaskService: Manages API calls related to task management (create, read, update, delete tasks).
CRUD Operations for Tasks
Create Task:
The user can add a new task through the task form. The task is then sent to the backend using the POST /api/tasks API.
Read Tasks:
The user can view all their tasks in a list. The tasks are fetched from the backend using the GET /api/tasks API.
Update Task:
The user can update task details. After editing, the changes are sent to the backend using the PUT /api/tasks/:id API.
Delete Task:
The user can delete a task by clicking on a delete button. The task is deleted from the backend using the DELETE /api/tasks/:id API.
Authentication Flow
User Registration: Users sign up by providing their details. A hashed password is saved in the database.
User Login: Users log in by providing their email and password. If the credentials match, a JWT token is generated and sent to the frontend.
Authenticated Requests: The frontend sends the JWT token in the Authorization header for every API request to ensure the user is authenticated.
Error Handling
Frontend: All API errors are caught and displayed with appropriate messages to the user.
Backend: Proper error handling for missing fields, invalid credentials, and database errors. Errors are sent with a status code and descriptive message.
