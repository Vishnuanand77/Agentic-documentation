# Frontend Low-Level Documentation

## Components and Pages

### Home Page (`src/app/page.tsx`)
- **Purpose**: Main dashboard displaying expense statistics and charts
- **Functionality**:
  - Displays total expenses
  - Shows expense distribution by category
  - Shows monthly expense trends
- **Key Functions**:
  - `fetchExpenses()`: Retrieves all expenses from the API
  - `totalExpenses`: Calculates sum of all expenses
- **State Management**:
  - `expenses`: Array of expense objects
  - `loading`: Boolean for loading state
  - `error`: String for error messages
- **API Calls**:
  - Uses `expenseApi.getAll()` to fetch expenses
- **Dependencies**:
  - `CategoryChart`: Component for category distribution
  - `MonthlyChart`: Component for monthly trends
  - `expenseApi`: Service for API interactions

### API Service (`src/services/api.ts`)
- **Purpose**: Centralized API communication layer
- **Key Interfaces**:
  ```typescript
  interface Expense {
    id: string;
    title: string;
    amount: number;
    category: string;
    date: string;
    createdAt: string;
    updatedAt: string;
  }
  ```
- **API Methods**:
  - `getAll()`: Fetches all expenses
  - `create(data)`: Creates new expense
  - `update(data)`: Updates existing expense
  - `delete(id)`: Deletes expense by ID
- **Authentication**:
  - Uses axios interceptors to add JWT token to requests
  - Token stored in localStorage

### CategoryChart Component
- **Purpose**: Visualizes expense distribution by category
- **Props**:
  - `expenses`: Array of expense objects
- **Dependencies**:
  - Chart.js or similar visualization library

### MonthlyChart Component
- **Purpose**: Shows monthly expense trends
- **Props**:
  - `expenses`: Array of expense objects
- **Dependencies**:
  - Chart.js or similar visualization library

## Data Flow
1. Home page loads and calls `expenseApi.getAll()`
2. API service adds authentication token and makes request
3. Backend returns expense data
4. Data is stored in component state
5. Charts are rendered with processed data

## Performance Considerations
- Uses client-side state management
- Implements loading states for better UX
- Error handling for failed API calls
- Responsive design with grid layout

## Dependencies and External Libraries
- Next.js for framework
- React for UI components
- Axios for API calls
- Chart.js for data visualization
- Tailwind CSS for styling 