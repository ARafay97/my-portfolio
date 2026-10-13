import { ventures } from '../data';
import { Section, Reveal, ArrowIcon } from './ui';

export default function ECommerce() {
  return (
    <Section id="ventures" index="04" title="Ventures">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-3">
        {ventures.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08} className="bg-white">
            <a
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col p-7 transition-colors hover:bg-neutral-950 hover:text-white"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold tracking-tight">{v.title}</h3>
                <ArrowIcon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 text-sm text-neutral-500 group-hover:text-neutral-400">{v.description}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
