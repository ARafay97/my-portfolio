import styles from './Projects.module.css';

const projects = [
  {
    title: "Instagram Clone",
    description: "A social media front-end built using React and Tailwind CSS.",
    link: "https://github.com/yourusername/instagram-clone"
  },
  {
    title: "Train Management System",
    description: "Java project simulating train operations and bookings using databases.",
    link: "https://github.com/yourusername/train-management"
  },
  {
    title: "Veterinary Management System",
    description: "Java & MySQL-based system with SOLID principles applied.",
    link: "https://github.com/yourusername/vet-system"
  }
];

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
