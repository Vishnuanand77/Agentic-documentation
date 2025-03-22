# Front-End Low-Level Documentation

## Overview
The front-end of BookYourTrek is built using EJS (Embedded JavaScript) templating engine, which is a server-side rendering solution. The application follows a traditional server-rendered architecture rather than a modern SPA (Single Page Application) approach.

## Components/Pages Analysis

### 1. Authentication Pages

#### Login Page (`login.ejs`)
- **Purpose**: User authentication and login functionality
- **Key Functions**:
  - Form submission handling
  - User validation
  - Session management
- **Data Flow**:
  - Accepts user credentials
  - Validates against database
  - Redirects to appropriate page based on authentication status
- **Dependencies**:
  - Express.js
  - MySQL database connection
  - Body-parser for form data handling

#### Signup Page (`signup.ejs`)
- **Purpose**: New user registration
- **Key Functions**:
  - User registration form handling
  - Data validation
  - Database insertion
- **Data Flow**:
  - Collects user information
  - Validates input
  - Creates new user record in database
- **Dependencies**:
  - Express.js
  - MySQL database connection
  - Body-parser

### 2. Trek Pages

#### Trek Detail Pages
Files: `skandagiri.ejs`, `wayanad.ejs`, `kumta.ejs`, `narasimha.ejs`, `nethravathi.ejs`, `gokarna.ejs`

Each trek page follows a similar structure:
- **Purpose**: Display detailed information about specific trek locations
- **Key Functions**:
  - Display trek information
  - Booking functionality
  - Review system integration
- **Data Flow**:
  - Fetches trek details from database
  - Displays static content (images, descriptions)
  - Handles user interactions (bookings, reviews)
- **Dependencies**:
  - Express.js
  - MySQL database
  - Static assets (images, CSS)

### 3. User Management Pages

#### Bookings Page (`bookings.ejs`)
- **Purpose**: Display and manage user bookings
- **Key Functions**:
  - List user's bookings
  - Booking management
  - Status updates
- **Data Flow**:
  - Fetches user's booking history
  - Displays booking details
  - Handles booking modifications
- **Dependencies**:
  - Express.js
  - MySQL database
  - User session data

#### Reviews Page (`reviews.ejs`)
- **Purpose**: Display and manage trek reviews
- **Key Functions**:
  - Show trek reviews
  - Add new reviews
  - Update existing reviews
- **Data Flow**:
  - Fetches reviews from database
  - Handles review submission
  - Updates review display
- **Dependencies**:
  - Express.js
  - MySQL database
  - User authentication

### 4. Utility Pages

#### Update Page (`update.ejs`)
- **Purpose**: Handle data updates
- **Key Functions**:
  - Form data processing
  - Database updates
  - Validation
- **Data Flow**:
  - Accepts update requests
  - Validates changes
  - Updates database records
- **Dependencies**:
  - Express.js
  - MySQL database
  - Form validation

#### Delete Page (`delete.ejs`)
- **Purpose**: Handle data deletion
- **Key Functions**:
  - Confirmation handling
  - Database deletion
  - Redirect management
- **Data Flow**:
  - Confirms deletion
  - Removes records from database
  - Redirects to appropriate page
- **Dependencies**:
  - Express.js
  - MySQL database
  - User authentication

## Common Features Across Components

### State Management
- Server-side session management
- Database-driven state
- Form-based data submission

### API Integration
- Direct database queries through MySQL
- RESTful endpoints for data operations
- Form submission handling

### Security Considerations
- Input validation
- SQL injection prevention
- Session management
- Authentication checks

### Performance Considerations
- Server-side rendering
- Static asset optimization
- Database query optimization
- Caching strategies

## Dependencies and External Libraries
- Express.js (Web framework)
- EJS (Templating engine)
- MySQL (Database)
- Body-parser (Request parsing)
- Alert (User notifications)

## Business Logic
- User authentication and authorization
- Booking management
- Review system
- Trek information management
- Data validation and sanitization

## Performance Optimization
- Server-side rendering for initial page load
- Static asset caching
- Database query optimization
- Form validation optimization 