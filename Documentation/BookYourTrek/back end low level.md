# Back-End Low-Level Documentation

## Overview
The back-end of BookYourTrek is built using Node.js with Express.js framework, following a monolithic architecture. The application uses MySQL as its database system and implements server-side rendering with EJS templating.

## Server Configuration

### Main Server File (`index.js`)
- **Purpose**: Application entry point and route configuration
- **Key Components**:
  - Express server setup
  - Database connection configuration
  - Route definitions
  - Middleware configuration
- **Configuration Details**:
  ```javascript
  const app = express();
  const port = process.env.PORT || 8080;
  ```
- **Middleware Setup**:
  - Body-parser for request parsing
  - Static file serving
  - EJS view engine configuration
  - JSON parsing

### Database Configuration
- **Connection Setup**:
  ```javascript
  const mysql = require('mysql');
  const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "byt",
      multipleStatements: true
  });
  ```
- **Features**:
  - Multiple statement support
  - Local MySQL instance
  - Connection error handling

## API Routes and Endpoints

### Authentication Routes
- **Login Endpoint**
  - Method: POST
  - Purpose: User authentication
  - Data Flow:
    1. Receives credentials
    2. Validates against database
    3. Creates session
    4. Returns authentication status

- **Signup Endpoint**
  - Method: POST
  - Purpose: User registration
  - Data Flow:
    1. Validates user input
    2. Checks for existing users
    3. Creates new user record
    4. Returns registration status

### Trek Management Routes
- **Trek Listing**
  - Method: GET
  - Purpose: Retrieve trek information
  - Data Flow:
    1. Fetches trek data from database
    2. Processes trek details
    3. Renders trek pages

- **Trek Details**
  - Method: GET
  - Purpose: Display specific trek information
  - Data Flow:
    1. Retrieves trek details
    2. Fetches related reviews
    3. Renders detailed view

### Booking Management Routes
- **Create Booking**
  - Method: POST
  - Purpose: Handle new bookings
  - Data Flow:
    1. Validates booking data
    2. Checks availability
    3. Creates booking record
    4. Updates inventory

- **View Bookings**
  - Method: GET
  - Purpose: Display user bookings
  - Data Flow:
    1. Retrieves user's bookings
    2. Fetches related trek details
    3. Renders booking list

### Review Management Routes
- **Create Review**
  - Method: POST
  - Purpose: Add new reviews
  - Data Flow:
    1. Validates review data
    2. Creates review record
    3. Updates trek ratings

- **Update Review**
  - Method: PUT
  - Purpose: Modify existing reviews
  - Data Flow:
    1. Validates update data
    2. Updates review record
    3. Recalculates ratings

## Database Models

### User Model
- **Fields**:
  - User ID (Primary Key)
  - Username
  - Password (Hashed)
  - Email
  - Registration Date
- **Relationships**:
  - One-to-Many with Bookings
  - One-to-Many with Reviews

### Trek Model
- **Fields**:
  - Trek ID (Primary Key)
  - Name
  - Description
  - Location
  - Price
  - Availability
- **Relationships**:
  - One-to-Many with Bookings
  - One-to-Many with Reviews

### Booking Model
- **Fields**:
  - Booking ID (Primary Key)
  - User ID (Foreign Key)
  - Trek ID (Foreign Key)
  - Booking Date
  - Status
  - Number of People
- **Relationships**:
  - Many-to-One with User
  - Many-to-One with Trek

### Review Model
- **Fields**:
  - Review ID (Primary Key)
  - User ID (Foreign Key)
  - Trek ID (Foreign Key)
  - Rating
  - Comment
  - Review Date
- **Relationships**:
  - Many-to-One with User
  - Many-to-One with Trek

## Authentication and Authorization

### Session Management
- Server-side session storage
- Session timeout handling
- Secure session creation

### Security Measures
- Password hashing
- Input validation
- SQL injection prevention
- XSS protection

## Error Handling

### Global Error Handler
- Error logging
- User-friendly error messages
- HTTP status code management

### Specific Error Cases
- Database connection errors
- Authentication failures
- Validation errors
- Resource not found

## External Services Integration

### Database Service
- MySQL connection management
- Query optimization
- Connection pooling

### File System
- Static file serving
- Image upload handling
- File type validation

## Business Rules and Validation

### Data Validation
- Input sanitization
- Required field checking
- Data type validation
- Format validation

### Business Logic
- Booking availability checks
- Price calculation
- Review rating updates
- User permission management

## Performance Considerations

### Database Optimization
- Indexed queries
- Connection pooling
- Query caching
- Batch operations

### Server Optimization
- Response compression
- Static file caching
- Route optimization
- Memory management

## Dependencies
- Express.js (Web framework)
- MySQL (Database)
- Body-parser (Request parsing)
- EJS (Templating)
- Alert (Notifications) 