# Back-End Low-Level Documentation

## Core Server Components

### Main Server (`server-files.js`)
- **Purpose**: Core server implementation and file handling
- **Key Functions**:
  - Server initialization and configuration
  - File system operations
  - Request handling
- **Endpoints**: N/A (core server functionality)
- **Dependencies**:
  - Node.js
  - Express.js
  - File system modules
- **Error Handling**: Custom error handling middleware
- **Performance Considerations**: File system caching

### Authentication Server (`server-auth.js`)
- **Purpose**: Handles user authentication and authorization
- **Key Functions**:
  - User authentication
  - Session management
  - Token validation
- **Endpoints**:
  - POST /auth/login
  - POST /auth/logout
  - GET /auth/verify
- **Security Features**:
  - JWT token-based authentication
  - Session management
  - Password hashing
- **Error Handling**: Authentication-specific error handling

### Socket Server (`server-socket.js`)
- **Purpose**: Real-time communication handling
- **Key Functions**:
  - WebSocket connection management
  - Real-time event handling
  - Socket.io implementation
- **Endpoints**: WebSocket endpoints
- **Dependencies**: Socket.io
- **Error Handling**: Connection error handling

### Upload Server (`server-upload.js`)
- **Purpose**: File upload handling and management
- **Key Functions**:
  - File upload processing
  - File validation
  - Storage management
- **Endpoints**:
  - POST /upload
  - GET /upload/:id
  - DELETE /upload/:id
- **Security Features**:
  - File type validation
  - Size limits
  - Virus scanning
- **Error Handling**: Upload-specific error handling

### Backup Server (`server-backup.js`)
- **Purpose**: System backup and recovery
- **Key Functions**:
  - Database backup
  - File system backup
  - Backup restoration
- **Endpoints**:
  - POST /backup/create
  - GET /backup/list
  - POST /backup/restore
- **Dependencies**: Backup storage systems
- **Error Handling**: Backup-specific error handling

### PHP Server (`server-php.js`)
- **Purpose**: PHP processing integration
- **Key Functions**:
  - PHP script execution
  - PHP-FPM integration
  - PHP configuration
- **Endpoints**: PHP-specific endpoints
- **Dependencies**: PHP-FPM
- **Error Handling**: PHP execution error handling

### Logger Server (`server-logger.js`)
- **Purpose**: Application logging system
- **Key Functions**:
  - Log generation
  - Log rotation
  - Log analysis
- **Endpoints**: N/A (internal logging)
- **Dependencies**: Logging libraries
- **Performance Considerations**: Log buffering and rotation

## Route Handlers

### Cache Management Routes
#### Static Assets Cache (`routes/cache-static-assets.js`)
- **Purpose**: Static asset caching
- **Endpoints**:
  - POST /cache/static-assets
  - GET /cache/static-assets
- **Key Functions**:
  - Cache creation
  - Cache invalidation
  - Cache retrieval

#### Cache Deletion (`routes/cache-delete-static-assets.js`)
- **Purpose**: Cache deletion management
- **Endpoints**:
  - DELETE /cache/static-assets
- **Key Functions**:
  - Cache cleanup
  - Selective cache deletion

### HTML/CSS/JS Parser (`routes/parse-htmlcssjs.js`)
- **Purpose**: Code parsing and analysis
- **Endpoints**:
  - POST /parse/html
  - POST /parse/css
  - POST /parse/js
- **Key Functions**:
  - Code parsing
  - Syntax validation
  - Code analysis
- **Dependencies**: Parsing libraries

### Example Route (`routes/example.js`)
- **Purpose**: Example route implementation
- **Endpoints**:
  - GET /example
- **Key Functions**:
  - Example functionality
  - Route demonstration

## Core Components

### Utils Directory (`utils/`)
- **Purpose**: Utility functions and helpers
- **Contents**:
  - Helper functions
  - Common utilities
  - Shared logic

### Plugins Directory (`plugins/`)
- **Purpose**: Plugin system
- **Contents**:
  - Plugin implementations
  - Plugin management
  - Extension points

### Core Directory (`core/`)
- **Purpose**: Core system functionality
- **Contents**:
  - Core services
  - System components
  - Base functionality

### Call Directory (`call/`)
- **Purpose**: API call handling
- **Contents**:
  - API call implementations
  - Request handling
  - Response processing

## Security Features

### Authentication
- JWT-based authentication
- Session management
- Role-based access control
- Password hashing and salting

### File Security
- File upload validation
- Virus scanning
- Size limits
- Type restrictions

### API Security
- Rate limiting
- Request validation
- CORS configuration
- Input sanitization

## Performance Optimizations

### Caching
- Static asset caching
- Response caching
- Database query caching
- Cache invalidation strategies

### Resource Management
- Connection pooling
- Memory management
- Process optimization
- Load balancing

## Error Handling

### Global Error Handler
- Centralized error handling
- Error logging
- Error response formatting
- Error tracking

### Specific Error Handlers
- Authentication errors
- Validation errors
- Database errors
- File system errors

## Database Integration

### Models
- User model
- File model
- Cache model
- Backup model

### Relationships
- User-File relationships
- Cache-Asset relationships
- Backup-System relationships

## External Services

### Storage Services
- File storage
- Backup storage
- Cache storage

### Authentication Services
- OAuth providers
- SSO integration
- Identity providers

### Monitoring Services
- Logging services
- Performance monitoring
- Error tracking 