# Expense Tracker - Back-End Low-Level Documentation

## Codebase Initialization

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQLite (via Prisma ORM or SQLite3 package)
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Management**: dotenv
- **Validation**: express-validator

---

## Modules / Routes / Services

---

### 1. Module/File: `server.js`

#### Purpose and Functionality
- Entry point of the backend
- Sets up Express server, middleware, and mounts routes

#### Key Functions
- `app.listen(PORT)`
- Middleware: JSON parser, CORS, error handler

#### Dependencies
- express, cors, dotenv

---

### 2. Module/File: `routes/authRoutes.js`

#### Purpose and Functionality
- User registration and login

#### Endpoints
- `POST /api/register`: Register a new user
- `POST /api/login`: Authenticate and return JWT

#### Key Functions
- `registerUser(req, res)`
- `loginUser(req, res)`

#### Dependencies
- bcrypt, JWT, express-validator

#### Authentication
- JWT issued on login

#### Validation
- Validate email format, password length

---

### 3. Module/File: `routes/expenseRoutes.js`

#### Purpose and Functionality
- Manage expense CRUD operations

#### Endpoints
- `GET /api/expenses`: Get all expenses for user
- `POST /api/expenses`: Add new expense
- `PUT /api/expenses/:id`: Update expense by ID
- `DELETE /api/expenses/:id`: Delete expense by ID

#### Authentication
- Protected by JWT middleware

#### Validation
- Check required fields: title, amount, category, date

---

### 4. Module/File: `controllers/authController.js`

#### Purpose and Functionality
- Business logic for auth

#### Key Functions
- `registerUser(req, res)`
  - Creates user after hashing password
- `loginUser(req, res)`
  - Validates credentials and signs token

---

### 5. Module/File: `controllers/expenseController.js`

#### Purpose and Functionality
- Business logic for handling expenses

#### Key Functions
- `getExpenses(req, res)`
- `addExpense(req, res)`
- `updateExpense(req, res)`
- `deleteExpense(req, res)`

---

### 6. Module/File: `middleware/authMiddleware.js`

#### Purpose and Functionality
- Protect routes with JWT validation

#### Key Functions
- `authenticateToken(req, res, next)`

---

### 7. Module/File: `models/db.js`

#### Purpose and Functionality
- Initializes SQLite DB and schema

#### Tables
- `User` (id, email, passwordHash)
- `Expense` (id, userId, title, amount, category, date)

#### Relationships
- `User` has many `Expense`

---

## Authentication / Authorization

- JWT token stored in front end
- Required for all expense routes
- Passwords hashed with bcrypt

---

## Error Handling

- Global error middleware
- Custom status codes and messages
- Try/catch in all controllers

---

## External Dependencies

- `express`, `bcrypt`, `jsonwebtoken`, `sqlite3`
- `express-validator`, `cors`, `dotenv`

---

## Business Rules and Validation

- Email must be unique
- Amount must be numeric and > 0
- Title/category required
- Cannot edit/delete other users' expenses

---

## Performance Considerations

- Indexes on `userId` and `date`
- Use pagination for large datasets (future)
- Avoid joins by denormalizing where needed

---