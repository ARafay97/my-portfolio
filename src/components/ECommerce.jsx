import styles from "./Ecommerce.module.css"

const sites = [
  { title: "Panecci", description: "An E Commerce website and Tiktok Shop.", link: "https://www.tiktok.com/@panecci" },
  { title: "AurakizStudio", description: "Etsy Shop specialising in various products", link: "https://www.etsy.com/shop/AURAKIZStudio" },
  { title: "Panecci Perfumes", description: "A sub branch from Panecci, specialising in perfumes", link: "https://www.tiktok.com/@panecci" }
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
