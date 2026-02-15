# React CRUD – User Management System

A scalable React-based CRUD application with configuration-driven dynamic form rendering, robust validation, and modular API architecture. Designed for extensibility and maintainability.

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AkashBharangar/react-crud
cd react-crud
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start Mock API (JSON Server)

```bash
npx json-server --watch db.json --port 3000
```

### 4️⃣ Start Frontend

```bash
npm run dev
```

### Application URLs

Frontend:  
http://localhost:5173  

Mock API:  
http://localhost:3000/users  

---

## ➕ How to Add New Fields

The form is configuration-driven.

Open:

```
src/config/userFormConfig.js
```

Add a new field object:

```js
{
  name: "address",
  label: "Address",
  type: "text",
  required: false,
}
```

No other UI or backend changes are required.

The validation schema is generated dynamically based on this configuration.

---

## 🏗 Assumptions & Design Decisions

- The application uses JSON Server as a mock backend.
- Form rendering is configuration-driven to ensure extensibility.
- Validation is handled using Yup + React Hook Form.
- Uniqueness checks (email & phone) are enforced at the application level.
- API logic is separated into a dedicated module for maintainability.
- Designed with clean component separation and scalability in mind.
