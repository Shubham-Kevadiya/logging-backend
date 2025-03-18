# logging-backend

This is a Node.js project that implements logging using **Winston** and **Morgan** for HTTP requests. The project provides two main APIs: **Register** and **Login**.

## Features

- **APIs**:

  - **Register API**: Accepts user details like name, email, password, and age. Returns the same details in the response.
  - **Login API**: Accepts email and password. Returns user details including name, email, password, and age in the response.

## Logging

This project uses **Winston** for error logging. Errors such as user registration issues, invalid credentials, or database issues are logged with relevant details.

### Winston Logging

- Winston is used for logging important events and errors in the application. Logs can be customized for different log levels (info, error, warn, etc.).

### Morgan Logging

- Morgan is used for logging HTTP requests. It logs basic request details such as method, URL, status code, and response time.

- **Logging level**: Error
- **Log details**: The error logs contain information about the error type and the data involved in the operation.

## Dependencies

- `express`: Web framework for Node.js.
- `winston`: A versatile logging library.
- `morgan`: HTTP request logger middleware for Node.js.
- `dotenv`: For managing environment variables.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   ```

2. Install dependencies:

   ```bash
    cd your-repository-name
   ```

   ```bash
   npm install
   ```

3. Create a .env file in the root of your project and add necessary configurations, e.g., database connection details if required.

## API Endpoints

### 1. Register API

**Endpoint :** POST api/users/register

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "age": 30
}
```

**Response Body:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "age": 30
}
```

**Description:** This API allows you to register a new user by sending the required details in the body. The same data is returned as the response.

### Example Logs

#### Example log output for Register API (user already exists):

- winston

```bash
combined.log file

2025-03-18T09:55:21.766Z, error, USER_ALREADY_EXIST, {"name":"John Doe","email":"john.doe@example.com","password":"securePassword123","age":"30"}
```

- morgen

```bash
shell

POST /api/users/register 401 2.536 ms - 60
```

### 2. Login API

**Endpoint :** POST api/users/login

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Response Body:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "age": 30
}
```

**Description:** This API allows a user to login using their email and password. It returns the user details including name, email, password, and age if the login is successful.

### Example Logs

#### Example log output for Register API (user already exists):

- winston

```bash
combined.log file

2025-03-18T10:03:36.073Z, error, USER_NOT_FOUND, {"name":"John Doe","email":"john.doe@example.com","password":"securePassword123","age":"30"}
```

- morgen

```bash
shell

POST /api/users/login 404 18.330 ms - 52
```
