# Expense Tracker - Front-End Low-Level Documentation

## Codebase Initialization

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks, Context API
- **Routing**: Next.js pages directory
- **HTTP Client**: Axios
- **Charts**: Recharts

---

## Pages and Components

---

### 1. Page: `pages/index.jsx` (Dashboard)

#### Purpose and Functionality
- Landing page after login.
- Shows overview of total expenses, charts (by category/month), recent entries.

#### Key Functions
- `fetchExpenses()`: Retrieves all user expenses
- `groupExpensesByCategory(expenses)`: Prepares data for category chart
- `groupExpensesByMonth(expenses)`: Prepares data for monthly trend

#### State Management
- Local: `expenses`, `loading`, `error`
- Context: Auth context for user

#### API Calls
- `GET /api/expenses`

#### Data Flow
- Fetches data on page load and renders charts.

#### Dependencies
- Recharts, Axios, Tailwind, useEffect, Context API

#### Business Logic
- Only fetch and display data if user is authenticated.

#### Performance
- Cache chart calculations with `useMemo`.
- Lazy load chart components.

---

### 2. Page: `pages/login.jsx`

#### Purpose and Functionality
- Basic login form for authentication

#### Key Functions
- `handleLogin(email, password)`: Sends credentials to backend

#### State
- `email`, `password`, `error`, `loading`

#### API Calls
- `POST /api/login`

#### Data Flow
- On success, stores token in context and redirects to `/`

#### Business Logic
- Prevent access to dashboard unless logged in.

#### Performance
- Minimal logic; optimized rendering.

---

### 3. Page: `pages/register.jsx`

#### Purpose and Functionality
- Signup page for creating a user account

#### Key Functions
- `handleRegister(email, password)`

#### API Calls
- `POST /api/register`

#### Data Flow
- On success, redirect to login

#### Validation
- Basic client-side validation for email/password

---

### 4. Page: `pages/expenses.jsx`

#### Purpose and Functionality
- View, edit, and delete all expenses in a table view.

#### Key Functions
- `fetchExpenses()`, `deleteExpense(id)`

#### State
- `expenses[]`, `loading`, `error`

#### API Calls
- `GET /api/expenses`
- `DELETE /api/expenses/:id`

#### Business Logic
- Confirm before delete

---

### 5. Component: `components/ExpenseForm.jsx`

#### Purpose and Functionality
- Add or edit expense via form

#### Props
- `initialValues`, `onSubmit`, `isEdit`

#### State
- `title`, `amount`, `category`, `date`

#### API Calls
- `POST /api/expenses`
- `PUT /api/expenses/:id`

#### Business Logic
- Validate fields (required, amount > 0)

---

### 6. Component: `components/Navbar.jsx`

#### Purpose and Functionality
- Navigation across pages
- Logout button

#### State
- None

#### API Calls
- None

#### Business Logic
- Show different links based on auth status

---

### 7. Component: `components/CategoryChart.jsx`

#### Purpose and Functionality
- Pie chart of expense distribution by category

#### Props
- `expenses[]`

#### Dependencies
- Recharts

---

### 8. Component: `components/MonthlyChart.jsx`

#### Purpose and Functionality
- Bar/line chart showing expenses over months

#### Props
- `expenses[]`

#### Dependencies
- Recharts

---

### 9. Context: `contexts/AuthContext.js`

#### Purpose and Functionality
- Auth provider for tracking login state

#### Key Functions
- `login()`, `logout()`, `isAuthenticated`

#### Dependencies
- React Context, useState

---

### Dependencies and External Libraries

- `next`, `react`, `axios`, `recharts`, `tailwindcss`
- `clsx` (optional), `react-hook-form` (optional)

---

### Performance Considerations

- Memoization for chart calculations
- Debounced inputs for forms (optional)
- Lazy loading components and charts

---