import { profile } from '../data';
import { Reveal, ArrowIcon } from './ui';

const inputClass =
  'w-full rounded-xl border border-neutral-800 bg-transparent px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-white';

export default function Contact() {
  const socials = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', value: 'ARafay97', href: profile.github },
    { label: 'LinkedIn', value: 'Abdul Rafay', href: profile.linkedin },
  ];

  return (
    <section id="contact" className="bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <Reveal>
          <span className="font-mono text-xs text-neutral-500">05</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build
            <br />
            something.
          </h2>
          <p className="mt-6 max-w-sm text-neutral-400">
            Open to graduate roles, freelance builds and collaborations across cloud, AI and full-stack.
          </p>
          <ul className="mt-10 border-t border-neutral-800">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-neutral-800 py-4"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">{s.label}</span>
                  <span className="flex items-center gap-2 text-sm transition-colors group-hover:text-neutral-300">
                    {s.value} <ArrowIcon />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="space-y-4" action="https://formspree.io/f/your-form-id" method="POST">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={inputClass} type="text" name="name" placeholder="Name" required />
              <input className={inputClass} type="email" name="_replyto" placeholder="Email" required />
            </div>
            <textarea className={`${inputClass} resize-none`} name="message" rows="7" placeholder="Message" required />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Send message <ArrowIcon />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
