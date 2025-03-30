# Expense Tracker - Back-End High-Level Documentation

## 1. Back-End Architecture and Flow

### Architecture Type
- **Monolithic** API server built with **Express.js**

### Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQLite (using `sqlite3` or Prisma ORM)
- **Authentication**: JWT (JSON Web Token)
- **Validation**: express-validator
- **Environment Management**: dotenv

---

### Key Services / Modules

| Module              | Description                                    |
|---------------------|------------------------------------------------|
| `authRoutes.js`     | Login and registration endpoints               |
| `expenseRoutes.js`  | CRUD for user expenses                         |
| `authMiddleware.js` | JWT token validation for protected routes      |
| `db.js`             | Initializes SQLite DB connection and tables    |
| `tokenService.js`   | Signs and verifies JWTs                        |

---

### API Flow and Endpoint Summary

| Endpoint                    | Method | Auth | Description                         |
|-----------------------------|--------|------|-------------------------------------|
| `/api/register`             | POST   | ❌   | Registers a new user                |
| `/api/login`                | POST   | ❌   | Logs in user and returns JWT        |
| `/api/expenses`             | GET    | ✅   | Gets all expenses for logged user   |
| `/api/expenses`             | POST   | ✅   | Creates new expense                 |
| `/api/expenses/:id`         | PUT    | ✅   | Updates specific expense            |
| `/api/expenses/:id`         | DELETE | ✅   | Deletes specific expense            |

---

### Database Structure

#### Tables

```text
User
- id (PK)
- email (unique)
- password_hash

Expense
- id (PK)
- user_id (FK to User)
- title
- amount
- category
- date

---
### Mermaid diagram
graph TD
  A[Client App] -->|POST /login| B[authRoutes.js]
  A -->|POST /register| B
  A -->|GET/POST/PUT/DELETE /expenses| C[expenseRoutes.js]
  B --> D[authController.js]
  C --> E[expenseController.js]

  B --> F[tokenService.js]
  C --> F

  E --> G[authMiddleware.js]
  D --> H[db.js]
  E --> H
```

### Running the Backend

To start the backend, navigate to the backend directory and run the following command:

```bash
cd backend
npm run dev
```

The backend will be available at http://localhost:3001.