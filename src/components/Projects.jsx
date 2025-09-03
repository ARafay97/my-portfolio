import styles from './Projects.module.css';

const projects = [
  { title: "Study AI", description: "A powerful study tool built using React and Tailwind CSS.", link: "https://github.com/ARafay97/StudyAI" },
  { title: "Swipe", description: "A social media app powered with algorithms and latest react libraries.", link: "https://github.com/yourusername/train-management" },
  { title: "Calculator", description: "Simple React Powered Calculator.", link: "https://github.com/ARafay97/Calculator" }
  
];

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {projects.map(p => (
            <article key={p.title} className={styles.card}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} on GitHub`}>View on GitHub</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
