# Expense Tracker - Front-End High-Level Documentation

## 1. Front-End Architecture and Flow

### Application Type
- **SPA (Single Page Application)** via **Next.js App Router**

### Tech Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: React Hooks, Context API
- **Authentication**: JWT-based auth using `AuthContext`
- **Charting**: Recharts

---

### Major Pages and Components

| File/Component       | Purpose                                      |
|----------------------|----------------------------------------------|
| `page.jsx`           | Dashboard with overview, charts, recent      |
| `login/page.jsx`     | User login                                   |
| `register/page.jsx`  | User registration                            |
| `expenses/page.jsx`  | View/edit/delete expenses                    |
| `Navbar.jsx`         | Navigation links + logout                    |
| `ExpenseForm.jsx`    | Reusable form for add/edit expenses          |
| `CategoryChart.jsx`  | Chart by category using Recharts             |
| `MonthlyChart.jsx`   | Monthly trend using Recharts                 |

---

### Communication Patterns

- **Props**: Used for passing data into charts and forms
- **Context**: Auth context handles user login/logout status
- **Local state**: `useState` for form inputs and fetched data

---

### API Interaction

- API requests handled via `services/api.js` using Axios
- Includes token in headers for protected routes
- Handles auth (`/login`, `/register`) and expense CRUD (`/expenses`)

---

### User Flow Through Components

```text
1. User lands on /login
2. On success, redirect to /
3. Dashboard loads with total + charts
4. User can navigate to /expenses to view/edit/delete
5. User can add new expense using form
6. User can logout via navbar

--- 
### Mermaid diagram
graph TD
  A[Login Page] -->|Success| B[Dashboard (/)]
  B --> C[Navbar]
  B --> D[CategoryChart]
  B --> E[MonthlyChart]
  B --> F[Recent Expenses]

  C --> G[Logout]
  C --> H[Expenses Page]

  H --> I[ExpenseForm]
  H --> J[Delete/Edit Buttons]

  A -->|Click register| K[Register Page]
  K -->|Success| A