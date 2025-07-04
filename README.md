# 📘 DevConnect – User Management Application (Next.js + Redux Toolkit)

This project is a user management and project management system built with **Next.js 14 App Router**, **Redux Toolkit**, and **Tailwind CSS**, fully written in **TypeScript**. It allows users and projects to be listed, added, updated, and optionally deleted. It features a modern, responsive interface with a mobile-friendly hamburger menu.

---

## 🚀 Technologies Used

- **Next.js 14 (App Router)**
- **TypeScript**
- **Redux Toolkit & Thunks**
- **Tailwind CSS**
- **Lucide React** (for icons)
- **React Hooks** (`useState`, `useEffect`, `useDispatch`, `useSelector`)

---

## 📂 Folder Structure

```
src/
│
├── app/
│   ├── __tests__/          # Testing files which is written by Jest
│   ├── about_project/      # Giving informations about the project
│   ├── users/              # UsersPage (list, add, edit users)
│   ├── store/              # Redux store & thunks
│   ├── type/               # Type definitions (e.g., User)
│   └── components/         # Shared components (e.g., Navbar)
│
└── public/                 # Assets such as images
```

---

## ✨ Features

### ✅ User Listing & Project Listing

- User data and project data are fetched from the API and listed when the app loads.

### ➕ Add User & Add Project

- A form modal opens via the "Add User" or "Add Project" button to create new users or projects.

### ✏️ Edit User & Edit Project

- Each user and project has an "Edit" button to update their information via the same form.

### 🗑️ Delete User & Delete Project (Optional)

- A delete feature can be planned or added if needed.

### 📱 Mobile-Friendly Hamburger Menu

- A hamburger menu appears on small screens, while a horizontal menu is shown on larger ones.

---

## 🔢 Pagination

- Users & projects are listed in groups of five.
- Navigation between pages is possible via "Prev" and "Next" buttons.

---

## 🧠 Redux Toolkit Logic

- All async actions (`fetchUsers`, `addUser`, `updateUser`) are handled via thunk functions.
- Each thunk has `pending`, `fulfilled`, and `rejected` states managed globally with `.addMatcher()`.
- User state & project state are managed through `createSlice` reducers.

---

## 🧪 Development Process

### 1. Project Planning & Design

- Requirements gathering and feature planning
- User-focused UI design
- Implementing responsive design principles (e.g., mobile menu)

### 2. Technology Stack Selection

- Project setup with Next.js and React
- Global state management with Redux Toolkit
- Type safety with TypeScript
- Consistent, fast UI design using Tailwind CSS

### 3. CRUD Development

- Integrating user operations (list, add, update, delete) with a backend using MockAPI
- Using `createAsyncThunk` for async calls
- Implementing `.addMatcher()` to handle repetitive thunk logic cleanly

### 4. Form Management & User Interaction

- Managing form states with React
- Validation and error handling
- Modal-based form UI for better user experience

### 5. Navigation & UI Improvements

- Creating a responsive navbar using Next.js routing
- Mobile support via hamburger menu
- Tailwind-based visual enhancements and animations

### 6. Debugging & Performance Optimization

- Debugging API calls and displaying user-friendly messages
- Ensuring effective state updates
- Avoiding unnecessary re-renders using best practices

### 7. Code Quality & Type Safety

- Catching bugs early with TypeScript
- Writing clean, functional, and readable code
- Adding helpful comments
- Modularizing shared logic and Redux state

## 8. Testing with Jest

This project includes unit and component tests written using **Jest** and **@testing-library/react**.

### ✅ What is Tested?

- Form components such as `UserForm`, `EditUser`, `EditProject`,`ProjectList`,`ProjectForm`.
- Button clicks (e.g., "Submit", "Cancel", "Edit")
- Input field changes and event handling
- Dispatching Redux actions via thunks (`addUser`, `updateUser`, etc.)
- Rendering behavior of components based on props

### 🧩 Example Libraries Used

- `@testing-library/react` – For rendering components and simulating user interactions
- `@testing-library/jest-dom` – For better DOM assertions (e.g., `toBeInTheDocument()`)
- `jest.fn()` – To mock callback functions like `onSubmit`, `onCancel`, etc.

---

---

## 👨‍💻 Developer

**H. Furkan Yaman**
Front-End Developer
🇹🇷 Turkey
💼 [LinkedIn](https://www.linkedin.com/in/h%C3%BCseyin-furkan-yaman-3775a22b7)
