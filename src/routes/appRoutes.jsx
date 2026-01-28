import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login";
// import ProtectedRoute from "../features/auth/ProtectedRoute";
// import TaskList from "../features/tasks/TaskList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route
        path="/"
        element={
          <ProtectedRoute>
            <TaskList />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}