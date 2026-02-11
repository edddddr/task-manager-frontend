import { useEffect, useState } from "react";
import { fetchProjects } from "../../api/projects";

export default function ProjectList({ onSelect }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button onClick={() => onSelect(project)}>
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
