# Course Management Backend
This project is a backend system for managing courses, user enrollment, and progress tracking. The backend is built using Node.js, Express.js, and MongoDB. The system supports user authentication (with JWT), course CRUD operations (admin only), user enrollment in courses, and lesson completion tracking.

## Features:
User authentication (register, login, password reset) using JWT.
Course CRUD operations restricted to admin users.
User enrollment in courses.
Lesson completion tracking for enrolled users.
MongoDB for data persistence.
Role-based access control for admin and regular users.

## Set up environment variables:
Create a .env file in the root of the project and add the following variables:

MONGO_URI= mongodb+srv://rjparsana8:5alHBn9bxsGDVBj9@cluster0.sk6kd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET= RJ_SECRET
PORT=5000

## Start the server:
node server.js

## API Documentation

http://localhost:5000/api

### Authentication:
#### Register a new user:
URL: /auth/register
Method: POST

#### Login a user:
URL: /auth/login
Method: POST

#### Reset password:
URL: /auth/reset-password
Method: POST

### Courses:
#### Create a course (Admin only):
URL: /courses
Method: POST

#### Get all courses:
URL: /courses
Method: GET

#### Update a course (Admin only):
URL: /courses/:id
Method: PUT

#### Delete a course (Admin only):
URL: /courses/:id
Method: DELETE

### Enrollment:
#### Enroll in a course:
URL: /courses/:courseId/enroll
Method: POST

#### Mark lesson as complete:
URL: /courses/:courseId/lessons/:lessonId/complete
Method: POST

## Running Tests
Testing can be done using Postman or Insomnia. You can test each API endpoint by sending the appropriate requests and verifying the response.
