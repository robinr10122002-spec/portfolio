export function Projects() {
  const projects = [
    {
      title: "E-Commerce Shoe Website",
      desc: "A full-stack shoe shopping website with product listing, cart and admin panel.",
      tech: "React, Flask, PostgreSQL",
      github: "https://github.com/yourusername/shoe-website",
      live: "https://your-live-link.com"
    },
    {
      title: "Movie website like netflix",
      desc: "CRUD application to manage movies with search and filter.",
      tech: "React, Flask, PostgreSQL",
      github: "https://github.com/yourusername/student-db",
      live: "https://your-live-link.com"
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <p><b>Tech:</b> {proj.tech}</p>

            <div className="buttons">
              <a href={proj.github} target="_blank">GitHub</a>
              <a href={proj.live} target="_blank">Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}