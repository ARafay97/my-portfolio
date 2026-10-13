import { achievements } from '../data';
import { Section, Reveal } from './ui';

export default function Achievements() {
  return (
    <Section id="achievements" index="03" title="Achievements" className="bg-neutral-50">
      <ol className="border-t border-neutral-200">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={Math.min(i * 0.04, 0.2)}>
            <li className="grid grid-cols-[4rem_1fr] gap-4 border-b border-neutral-200 py-6 sm:grid-cols-[6rem_1fr_auto] sm:items-baseline">
              <span className="font-mono text-sm text-neutral-400">{a.year}</span>
              <span className="text-base font-semibold tracking-tight sm:text-lg">{a.title}</span>
              <span className="col-start-2 text-sm text-neutral-500 sm:col-start-3 sm:text-right">{a.org}</span>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
