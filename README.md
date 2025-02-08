
# Clean Architecture - Project Overview

This project follows **Clean Architecture** principles to ensure a modular, scalable, and maintainable codebase. The architecture is designed around the separation of concerns, allowing easy testing and flexibility in handling business logic, external frameworks, and user interfaces.

## 📂 Folder Structure

```
src/
├── entities/                # Core business models and logic
├── interactors/             # Application-specific business rules
├── adapters/                # Controllers, presenters, repositories
├── frameworks/              # Express, DB, and external integrations
└── index.ts                 # Application entry point

```

## 🔄 Code Flow

1.   **Request Entry (Frameworks Layer):**  
    Incoming HTTP requests are handled by Express routes in `frameworks/express/routes`.
    
2.  **Controllers (Adapters Layer):**  
    Routes forward requests to controllers in `adapters/controllers`, which act as intermediaries between the external request and the business logic.
    
3.   **Use Cases (Interactors Layer):**  
    Controllers invoke interactors (use cases) from `interactors/` to execute application-specific business rules.
    
4.   **Repositories (Adapters Layer):**  
    Interactors communicate with repositories in `adapters/repositories` to handle data persistence and retrieval from external data sources like databases.
    
5.  **Entities (Entities Layer):**  
    Repositories return data that interactors process using core business entities defined in `entities/`, ensuring business logic consistency.
    
6.   **Response Handling:**  
    The processed data is returned via presenters in `adapters/presenters` and sent back as an HTTP response.

----------

## 🗂️ Layer Descriptions

### 1. **Entities (`src/entities/`)**

-   **Purpose:** Contains core business models and enterprise-wide logic.
-   **Example:** `User.ts` defines the User entity, independent of external systems.

### 2. **Interactors (`src/interactors/`)**

-   **Purpose:** Handles application-specific business rules (Use Cases).
-   **Example:** `AuthInteractor.ts` defines the logic for user authentication.

### 3. **Adapters (`src/adapters/`)**

-   **Purpose:** Connects the business logic with the external world (controllers, presenters, repositories).
-   **Subfolders:**
    -   `controllers/`: Manages HTTP requests.
    -   `presenters/`: Formats responses.
    -   `repositories/`: Implements data access logic.

### 4. **Frameworks (`src/frameworks/`)**

-   **Purpose:** Handles external frameworks (Express, MongoDB, etc.).
-   **Example:** `express/server.ts` bootstraps the Express app.

----------

## 🗃️ Repository Pattern

-   **Purpose:** Abstracts data access logic from the business layer.
-   **Structure:**
    -   `interfaces/IUserRepository.ts` defines the contract.
    -   `implements/UserRepository.ts` provides the actual implementation.

This decouples the database logic from the business logic, making it easy to swap databases without affecting core functionality.

----------

## ⚙️ Dependency Injection (DI)

-   **Tool:** `InversifyJS` (Implemented in the `frameworks` layer)
-   **Purpose:** Manages dependencies between classes, enhancing flexibility and testability.
-   **Usage:** Dependencies like repositories are injected into interactors or controllers via DI, reducing tight coupling.

----------

## 🚀 Application Entry Point

-   `index.ts` initializes the app, sets up the server, and wires all components together.

----------

## 📝 Conclusion

This architecture ensures:

-   High **modularity** and **testability**
-   Easy **maintenance** and **scalability**
-   Clear **separation of concerns**

Happy coding! 🎯