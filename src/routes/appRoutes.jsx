import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import ProjectList from "../features/projects/ProjectList";
import { useProject } from "../features/projects/UseProject";
// import TaskList from "../features/tasks/TaskList";

function Dashboard() {
  const { project, setProject } = useProject();

  if (!project) {
    return <ProjectList onSelect={setProject} />;
  }

  // return <TaskList projectId={project.id} />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
