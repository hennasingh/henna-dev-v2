export default function ProjectCard({ props }) {
  const { title, overview, image, techStack, githubUrl, demoUrl } = props;

  return (
    <article className="project">
      <div className="text">
        <h3>{title}</h3>
        <p>{overview}</p>
        <ul>
          {techStack.map((tech, idx) => {
            return <li key={idx}>{tech}</li>;
          })}
        </ul>
        <div className="links">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            Github Repo
          </a>
          <a href={demoUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>
      <img src={image} alt={title} />
    </article>
  );
}
