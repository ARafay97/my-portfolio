import { certifications, profile } from '../data';
import { Section, Reveal, ArrowIcon } from './ui';

export default function Certifications() {
  return (
    <Section id="certifications" index="02" title="Certifications">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.code} delay={i * 0.08}>
            <article className="relative overflow-hidden rounded-2xl border border-neutral-200 p-7 transition-colors hover:border-neutral-950">
              <span
                className="pointer-events-none absolute -right-4 -top-6 select-none font-mono text-8xl font-bold text-neutral-100"
                aria-hidden="true"
              >
                AWS
              </span>
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">{c.issuer}</p>
                <h3 className="mt-3 max-w-sm text-xl font-bold tracking-tight">{c.name}</h3>
                <p className="mt-6 inline-flex rounded-full bg-neutral-950 px-3 py-1 font-mono text-xs text-white">{c.code}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <a
          href={profile.credly}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
        >
          Verify on Credly <ArrowIcon />
        </a>
      </Reveal>
    </Section>
  );
}
