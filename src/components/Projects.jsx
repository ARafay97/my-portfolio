import styles from './Projects.module.css';

const projects = [
  {
    title: "Study AI",
    description: "A powerful study tool built using React and Tailwind CSS.",
    link: "https://github.com/ARafay97/StudyAI"
  },
  {
    title: "Swipe",
    description: "A social media app powered with algorithms and latest react libraries",
    link: "https://github.com/yourusername/train-management"
  },
  {
    title: "Calculator",
    description: "Simple React Powered Calculator",
    link: "https://github.com/ARafay97/Calculator"
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
