import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Abdul Rafay. All rights reserved.</p>
        <p className="font-mono">{profile.site} · {profile.location}</p>
      </div>
    </footer>
  );
}
