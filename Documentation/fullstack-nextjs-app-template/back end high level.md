# Back-End High-Level Documentation

## Architecture Overview

### System Type
- **Type**: Monolithic with Microservices Architecture
- **Core Framework**: Node.js with Express.js
- **Language**: JavaScript/TypeScript
- **Database**: Multiple database support
- **Real-time**: WebSocket integration

### Tech Stack
- **Runtime**: Node.js
- **Web Framework**: Express.js
- **Real-time**: Socket.io
- **Authentication**: JWT
- **File Processing**: Custom file handlers
- **Logging**: Custom logger
- **Backup**: Custom backup system
- **PHP Integration**: PHP-FPM

## System Architecture

### Core Components
```mermaid
graph TD
    A[Main Server] --> B[Auth Server]
    A --> C[Socket Server]
    A --> D[Upload Server]
    A --> E[Backup Server]
    A --> F[PHP Server]
    A --> G[Logger Server]
    
    subgraph "Core Services"
        A
        B
        C
        D
        E
        F
        G
    end
```

### Service Interactions
```mermaid
sequenceDiagram
    participant Client
    participant Main Server
    participant Auth Server
    participant Upload Server
    participant Database
    
    Client->>Main Server: Request
    Main Server->>Auth Server: Validate
    Auth Server-->>Main Server: Auth Status
    Main Server->>Upload Server: Process
    Upload Server->>Database: Store
    Database-->>Upload Server: Confirmation
    Upload Server-->>Main Server: Result
    Main Server-->>Client: Response
```

## Directory Structure

```
backend/
├── core/           # Core system functionality
├── routes/         # API route handlers
├── utils/          # Utility functions
├── plugins/        # Plugin system
├── call/           # API call handlers
├── server-*.js     # Server components
└── Dockerfile      # Container configuration
```

## API Architecture

### Route Structure
```mermaid
graph TD
    A[API Routes] --> B[Cache Routes]
    A --> C[Parse Routes]
    A --> D[Example Routes]
    
    B --> E[Static Assets]
    B --> F[Cache Management]
    
    C --> G[HTML Parser]
    C --> H[CSS Parser]
    C --> I[JS Parser]
    
    subgraph "Route Categories"
        B
        C
        D
    end
```

### API Flow
```mermaid
sequenceDiagram
    participant Client
    participant Route Handler
    participant Service Layer
    participant Database
    
    Client->>Route Handler: HTTP Request
    Route Handler->>Service Layer: Process Request
    Service Layer->>Database: Data Operation
    Database-->>Service Layer: Result
    Service Layer-->>Route Handler: Response
    Route Handler-->>Client: HTTP Response
```

## Security Architecture

### Authentication Flow
```mermaid
sequenceDiagram
    participant User
    participant Auth Server
    participant Token Service
    participant Protected Resource
    
    User->>Auth Server: Login Request
    Auth Server->>Token Service: Validate Credentials
    Token Service-->>Auth Server: Token
    Auth Server-->>User: JWT Token
    User->>Protected Resource: Request with Token
    Protected Resource->>Token Service: Validate Token
    Token Service-->>Protected Resource: Valid
    Protected Resource-->>User: Response
```

### Security Layers
```mermaid
graph TD
    A[Client] --> B[Rate Limiter]
    B --> C[Auth Middleware]
    C --> D[Request Validator]
    D --> E[Resource Handler]
    
    subgraph "Security Stack"
        B
        C
        D
    end
```

## Data Management

### Database Structure
```mermaid
erDiagram
    USER ||--o{ FILE : has
    USER ||--o{ BACKUP : creates
    FILE ||--o{ CACHE : has
    BACKUP ||--o{ FILE : contains
```

### Caching Strategy
```mermaid
graph LR
    A[Request] --> B{Cache Check}
    B -->|Hit| C[Return Cache]
    B -->|Miss| D[Fetch Data]
    D --> E[Update Cache]
    E --> F[Return Data]
```

## Performance Architecture

### Load Balancing
```mermaid
graph TD
    A[Load Balancer] --> B[Server 1]
    A --> C[Server 2]
    A --> D[Server 3]
    
    B --> E[Database]
    C --> E
    D --> E
```

### Resource Management
```mermaid
graph LR
    A[Request] --> B[Resource Pool]
    B --> C[Process Request]
    C --> D[Release Resource]
    D --> B
```

## Monitoring and Logging

### Logging Architecture
```mermaid
graph TD
    A[Application] --> B[Logger]
    B --> C[File Storage]
    B --> D[Monitoring Service]
    D --> E[Alert System]
```

### Health Checks
```mermaid
sequenceDiagram
    participant Monitor
    participant Service
    participant Database
    
    Monitor->>Service: Health Check
    Service->>Database: Connection Check
    Database-->>Service: Status
    Service-->>Monitor: Health Status
```

## Deployment Architecture

### Container Structure
```mermaid
graph TD
    A[Docker Compose] --> B[App Container]
    A --> C[Database Container]
    A --> D[Cache Container]
    A --> E[PHP Container]
```

### Scaling Strategy
```mermaid
graph LR
    A[Load] --> B{Threshold Check}
    B -->|High| C[Scale Up]
    B -->|Low| D[Scale Down]
    C --> E[New Instance]
    D --> F[Remove Instance]
```

## Development Guidelines

### Code Organization
- Modular architecture
- Service-based design
- Plugin system
- Utility functions

### Best Practices
- Error handling
- Logging standards
- Security protocols
- Performance optimization

## Deployment Considerations

### Environment Setup
- Development
- Staging
- Production
- Testing

### Monitoring
- Performance metrics
- Error tracking
- Resource usage
- Health monitoring 