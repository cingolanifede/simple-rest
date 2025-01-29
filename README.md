# Task Management API

A simple RESTful API to manage a list of tasks using Node.js and Express with TypeScript. This API allows users to create, update, retrieve, and delete tasks. Each task has the following properties:
- `id` (number): Unique identifier for the task
- `title` (string): Title of the task
- `completed` (boolean): Indicates whether the task is completed

## Installation Guide

### 1. Clone the Repository
First, open your terminal and clone the repository:

```bash
git clone https://github.com/cingolanifede/task-management-api.git
cd task-management-api
```

If you don’t have Git installed, you can download the project as a ZIP file from GitHub and extract it.

---

### 2. Install Dependencies
Make sure you have **Node.js (v18 or later) and npm** installed. You can check by running:

```bash
node -v
npm -v
```

Then, install the necessary dependencies:

```bash
npm install
```

---

### 3. Run the Application
#### Development Mode (with Hot Reloading)
To start the application in development mode:

```bash
npm run dev
```

This will use `ts-node-dev` to monitor changes and restart the server automatically.

#### Production Mode (Compiled JavaScript)
For production, first build the TypeScript files:

```bash
npm run build
```

Then, run the compiled JavaScript files:

```bash
npm start
```

---

### 4. Test the API
Once the server is running, test the API using **Postman** or **curl**.

#### Check all tasks
```bash
curl -X GET http://localhost:3000/tasks
```

#### Add a new task
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "New Task", "completed": false}'
```

#### Update an existing task
```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Task", "completed": true}'
```

#### Delete a task
```bash
curl -X DELETE http://localhost:3000/tasks/1
```

---

## Environment Variables (Optional)
If you want to configure the port or other settings, create a `.env` file:

```bash
touch .env
```

And add:

```
PORT=3000
```

Then install `dotenv` to load environment variables:

```bash
npm install dotenv
```

Modify `index.ts` to load environment variables:

```typescript
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
```

---

## Project Structure
```
/task-management-api
│── src/
│   ├── index.ts      # Main server file
│   ├── routes.ts     # API Routes
│   ├── middleware.ts # Validation middleware
│── package.json
│── tsconfig.json
│── README.md
```

---

## Uninstalling
If you want to remove the project:

```bash
cd ..
rm -rf task-management-api
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

