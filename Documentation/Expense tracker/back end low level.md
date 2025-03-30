# Back-End Low-Level Documentation

## API Routes

### 1. Expenses Routes (`/api/expenses`)
**Purpose**: Handle all expense-related operations
**Endpoints**:

#### GET `/`
- **Purpose**: Retrieve all expenses for the authenticated user
- **Authentication**: Required
- **Response**: Array of expense objects
- **Error Handling**: 500 for server errors

#### POST `/`
- **Purpose**: Create a new expense
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "title": string,
    "amount": number,
    "category": string,
    "date": string (ISO date)
  }
  ```
- **Response**: Created expense object (201)
- **Error Handling**: 
  - 400 for validation errors
  - 500 for server errors

#### PUT `/:id`
- **Purpose**: Update an existing expense
- **Authentication**: Required
- **Parameters**: 
  - `id`: Expense ID
- **Request Body**: Same as POST
- **Response**: Updated expense object
- **Error Handling**:
  - 400 for validation errors
  - 404 for not found
  - 500 for server errors

#### DELETE `/:id`
- **Purpose**: Delete an expense
- **Authentication**: Required
- **Parameters**:
  - `id`: Expense ID
- **Response**: 204 No Content
- **Error Handling**:
  - 404 for not found
  - 500 for server errors

## Controllers

### 1. Expense Controller
**Purpose**: Handle expense-related business logic
**Functions**:

#### `getExpenses(req, res)`
- **Purpose**: Fetch all expenses for a user
- **Authentication**: Required
- **Database Operation**: 
  - Query: `prisma.expense.findMany()`
  - Filter: `userId: req.user.userId`
  - Sort: `date: 'desc'`

#### `createExpense(req, res)`
- **Purpose**: Create a new expense
- **Authentication**: Required
- **Validation**: Uses express-validator
- **Database Operation**:
  - Query: `prisma.expense.create()`
  - Data: Includes userId from authenticated user

#### `updateExpense(req, res)`
- **Purpose**: Update an existing expense
- **Authentication**: Required
- **Validation**: Uses express-validator
- **Database Operations**:
  1. Check existence and ownership
  2. Update expense if authorized

#### `deleteExpense(req, res)`
- **Purpose**: Delete an expense
- **Authentication**: Required
- **Database Operations**:
  1. Check existence and ownership
  2. Delete expense if authorized

### 2. Auth Controller
**Purpose**: Handle user authentication and registration
**Functions**:

#### `register(req, res)`
- **Purpose**: Register a new user
- **Authentication**: Not required
- **Validation**: Uses express-validator
- **Process**:
  1. Check for existing user
  2. Hash password using bcrypt
  3. Create user record
  4. Generate JWT token
- **Response**: User data and JWT token

#### `login(req, res)`
- **Purpose**: Authenticate existing user
- **Authentication**: Not required
- **Validation**: Uses express-validator
- **Process**:
  1. Find user by email
  2. Verify password using bcrypt
  3. Generate JWT token
- **Response**: User data and JWT token

## Database Models

### User Model
```prisma
model User {
  id           String    @id @default(uuid())
  email        String    @unique
  passwordHash String
  expenses     Expense[]
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
}
```

### Expense Model
```prisma
model Expense {
  id        String   @id @default(uuid())
  title     String
  amount    Float
  category  String
  date      DateTime
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Authentication & Authorization

### JWT Implementation
- **Secret**: Stored in environment variables
- **Expiration**: 24 hours
- **Payload**: 
  ```json
  {
    "userId": string,
    "email": string
  }
  ```

### Security Measures
- Password hashing using bcrypt
- JWT for stateless authentication
- Input validation using express-validator
- User-specific data access control

## Error Handling

### Common Error Types
1. Validation Errors (400)
2. Authentication Errors (401)
3. Not Found Errors (404)
4. Server Errors (500)

### Error Response Format
```json
{
  "message": "Error message",
  "errors": [] // For validation errors
}
```

## Dependencies

### Core Dependencies
- express: Web framework
- @prisma/client: Database ORM
- bcrypt: Password hashing
- jsonwebtoken: JWT implementation
- express-validator: Input validation

### Development Dependencies
- prisma: Database schema management
- nodemon: Development server

## Performance Considerations

### Database Operations
- Efficient queries using Prisma
- Proper indexing on frequently queried fields
- User-specific data filtering

### Security
- Password hashing with appropriate salt rounds
- JWT token expiration
- Input validation and sanitization

### Error Handling
- Proper error logging
- Client-friendly error messages
- Graceful error recovery 