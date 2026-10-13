import { projects } from '../data';
import { Section, Reveal, ArrowIcon } from './ui';

function Tags({ items, inverted }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li
          key={t}
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${
            inverted ? 'border-neutral-700 text-neutral-300' : 'border-neutral-200 text-neutral-600'
          }`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ p, i }) {
  return (
    <Reveal delay={i * 0.08} className="h-full">
      <article className="group flex h-full flex-col rounded-2xl bg-neutral-950 p-7 text-white transition-transform duration-300 hover:-translate-y-1">
        <div className="mb-6 flex items-center justify-between font-mono text-xs text-neutral-500">
          <span>0{i + 1}</span>
          {p.year && <span>{p.year}</span>}
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-400">
          {p.points.map((pt) => (
            <p key={pt}>{pt}</p>
          ))}
        </div>
        <div className="mt-auto pt-8">
          <Tags items={p.stack} inverted />
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              View code <ArrowIcon />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function Row({ p }) {
  const content = (
    <div className="grid gap-4 py-7 md:grid-cols-[1fr_1.4fr_auto] md:items-start md:gap-10">
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
        {p.year && <p className="mt-1 font-mono text-xs text-neutral-400">{p.year}</p>}
      </div>
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-neutral-600">{p.points.join(' ')}</p>
        <Tags items={p.stack} />
      </div>
      <span className={`hidden h-9 w-9 items-center justify-center rounded-full border border-neutral-200 transition-colors md:flex ${p.link ? 'group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white' : 'opacity-0'}`}>
        <ArrowIcon />
      </span>
    </div>
  );

  return (
    <Reveal>
      <li className="group border-b border-neutral-200">
        {p.link ? (
          <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`}>
            {content}
          </a>
        ) : (
          content
        )}
      </li>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" index="01" title="Selected projects">
      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((p, i) => (
          <FeaturedCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <ul className="mt-16 border-t border-neutral-200">
        {rest.map((p) => (
          <Row key={p.title} p={p} />
        ))}
      </ul>
    </Section>
  );
}
