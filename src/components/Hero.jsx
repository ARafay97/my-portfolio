import { motion } from 'framer-motion';
import { profile, certifications, projects } from '../data';
import { ArrowIcon } from './ui';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const stats = [
    { value: `${projects.length}`, label: 'Projects shipped' },
    { value: `${certifications.length}×`, label: 'AWS certified' },
    { value: 'Founder', label: 'PANECCI LTD' },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 md:pb-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-950 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-950" />
          </span>
          {profile.location} · Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="text-[clamp(3rem,11vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em]"
        >
          Abdul
          <br />
          Rafay<span className="text-neutral-300">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">{profile.role}</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
              >
                View projects
                <ArrowIcon />
              </a>
              <a
                href={profile.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition-colors hover:border-neutral-950"
              >
                Verify certifications
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-3 border-t border-neutral-200 md:border-t-0">
            {stats.map((s, i) => (
              <div key={s.label} className={`pt-5 md:pt-0 ${i > 0 ? 'border-l border-neutral-200 pl-4' : ''}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold tracking-tight sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-neutral-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
