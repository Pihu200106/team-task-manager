# Team Task Management System

A full-stack Team Task Management System built using React, Node.js, Express, Prisma, and MySQL. The application allows admins to manage projects and tasks while members can track and update their assigned tasks.

---

# Features

## Authentication
- User Signup & Login
- JWT Authentication
- Protected Routes

---

# Role-Based Access Control

## Admin
- Create Projects
- Create Tasks
- Assign Tasks to Members
- Delete Projects
- Delete Tasks
- View All Tasks
- View All Members

## Member
- View Only Assigned Tasks
- Update Task Status
- Track Progress

---

# Dashboard Features
- Total Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks

---

# Task Features
- Task Assignment
- Task Status Tracking
- Due Dates
- Priority Levels
  - LOW
  - MEDIUM
  - HIGH

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- Prisma ORM
- MySQL
- JWT Authentication

---

# Database Schema

## User
- id
- name
- email
- password
- role

## Project
- id
- title
- description
- createdById

## Task
- id
- title
- description
- status
- priority
- dueDate
- projectId
- assignedTo

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Pihu200106/Team-Task-Management-system.git
```

---

# Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the server folder:

```env
DATABASE_URL="your_mysql_database_url"
JWT_SECRET="your_secret_key"
```

Run Prisma Migration:

```bash
npx prisma migrate dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

Start Backend Server:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd client
npm install
npm start
```

# Future Improvements
- Toast Notifications
- Search & Filters
- Profile Section
- Better Error Handling
- Mobile Responsive Design

Pihu Bhardwaj
