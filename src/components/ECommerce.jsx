import styles from "./ECommerce.module.css"

const sites = [
  { title: "Panecci", description: "A powerful study tool built using React and Tailwind CSS.", link: "https://www.tiktok.com/@panecci" },
  { title: "AurakizStudio", description: "A social media app powered with algorithms and latest react libraries.", link: "https://www.etsy.com/shop/AURAKIZStudio" },
  { title: "Panecci Perfumes", description: "Simple React Powered Calculator.", link: "https://www.tiktok.com/@panecci" }
];

function Sites() {
  return (
    <section className={styles.sites} id="sites">
      <div className="container">
        <h2 className={styles.heading}>E Commerce Websites</h2>
        <div className={styles.grid}>
          {sites.map(p => (
            <article key={p.title} className={styles.card}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} `}>View</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Sites;
