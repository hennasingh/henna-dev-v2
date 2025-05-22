import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await supabase
          .from("portfolio_projects")
          .select("*")
          .order("created_at");
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <h2>Loading Projects....</h2>;

  const projectList = projects?.map((project, idx) => {
    return <ProjectCard key={idx} props={project} />;
  });

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my projects
      </p>
      <div className="projects">{projectList}</div>
    </section>
  );
}
