import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, index, title, children, className = '' }) {
  return (
    <section id={id} className={`border-t border-neutral-200 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-4">
            <span className="font-mono text-xs text-neutral-400">{index}</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
