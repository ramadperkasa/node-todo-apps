# Todo API Project

## 1. Project Description

This is a RESTful API built using **Node.js**, **Express**, **MySQL**, and **Sequelize**. The API provides user authentication using **JWT** and allows users to manage their **To-Do** activities. The following functionalities are available:
- User Registration and Login.
- CRUD operations for managing To-Do activities.
- JWT-based authentication for securing endpoints.

## 2. How to Install

### Prerequisites
- Node.js
- MySQL

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/todo-api.git
    cd todo-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the `.env` file with your environment variables for MySQL and JWT secret:

    ```
    DB_USERNAME=root
    DB_PASSWORD=your_password
    DB_NAME=todo-app
    DB_HOST=localhost

    JWT_SECRET=your_secret_key
    ```

4. Ensure that MySQL is running and you have a database configured for the project.

## 3. How to Run Migration & Seeders

To create the necessary database tables and seed initial data, follow these steps:

1. Run the migrations to create the tables:

    ```bash
    npx sequelize-cli db:migrate
    ```

2. Run the seeders to insert initial data:

    ```bash
    npx sequelize-cli db:seed:all
    ```

## 4. Folder Structure

The project structure is organized as follows:

todo-api/
│
├── src/
│   ├── controllers/            # Contains the API controllers (Auth, Todo)
│   ├── database/               # Sequelize configurations, migrations, models, seeders
│   │   ├── config/             # Configuration for database connection
│   │   ├── migrations/         # Database migrations
│   │   ├── models/             # Sequelize models for 'users' and 'todos'
│   │   ├── seeders/            # Seeder files for populating initial data
│   ├── middleware/             # Middleware for authentication, error handling, etc.
│   ├── routes/                 # API routes (authRoutes, todoRoutes)
│   ├── services/               # Services for handling business logic
│   └── utils/                  # Utility files, like database connection
│
├── .sequelizerc                # Sequelize CLI configuration for custom paths
├── app.js                      # Main entry point of the application
├── package.json                # Project dependencies and scripts
├── README.md                   # Project documentation
└── .env                        # Environment variables (not included in repo)


## 5. API Endpoints and Methods

### **Authentication:**

| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| POST   | `/api/auth/register`    | Register a new user        |
| POST   | `/api/auth/login`       | Login and receive a JWT    |

### **To-Do Management:**

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| GET    | `/api/todos`               | Get a list of all todos              |
| POST   | `/api/todos`               | Create a new todo                   |
| PUT    | `/api/todos/:id`           | Update a todo by its ID             |
| PATCH  | `/api/todos/:id/mark`      | Mark a todo as Done, Canceled, etc. |
| DELETE | `/api/todos/:id`           | Delete a todo by its ID             |

## 6. cURL Requests

Here are the cURL commands to interact with the API:

### 1. **Register User**

```bash
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
    "user_id": "user001",
    "password": "password123",
    "name": "John Doe"
}'
```

### 2. **Login User**

```bash
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
    "user_id": "user001",
    "password": "password123"
}'
```

### 3. **Get all Todo**

```bash
curl -X GET http://localhost:3000/api/todos \
-H "Authorization: Bearer <your_token_here>"
```

### 4. **Create a Todo**

```bash
curl -X POST http://localhost:3000/api/todos \
-H "Authorization: Bearer <your_token_here>" \
-H "Content-Type: application/json" \
-d '{
    "subject": "Learn Sequelize",
    "description": "Understand how to use Sequelize ORM"
}'
```

### 5. **Update a Todo**

```bash
curl -X PUT http://localhost:3000/api/todos/1 \
-H "Authorization: Bearer <your_token_here>" \
-H "Content-Type: application/json" \
-d '{
    "subject": "Learn Node.js",
    "description": "Update todo to learn Node.js"
}'
```

### 6. **Mark a Todo**

```bash
curl -X PATCH http://localhost:3000/api/todos/1/mark \
-H "Authorization: Bearer <your_token_here>" \
-H "Content-Type: application/json" \
-d '{
    "status": "Done"
}'
```

### 7. **Delete a Todo**

```bash
curl -X PATCH http://localhost:3000/api/todos/1/mark \
-H "Authorization: Bearer <your_token_here>" \
-H "Content-Type: application/json" \
-d '{
    "status": "Done"
}'

```