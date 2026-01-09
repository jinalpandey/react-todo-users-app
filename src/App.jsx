import { Routes, Route, NavLink } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import UsersPage from "./pages/UsersPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Todos
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Users
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;