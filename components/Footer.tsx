import Link from "next/link";
import { Wordmark } from "./Header";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-12 text-sm text-slate-400">
      <div className="wrap flex flex-col justify-between gap-8 sm:flex-row">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-xs">Lykan Cloud &amp; AI Services. Complex products, quietly delivered.</p>
        </div>
        <ul className="flex gap-6">
          {[["Services", "/services"], ["Solutions", "/solutions"], ["Approach", "/approach"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
            <li key={h}><Link href={h} className="hover:text-white">{l}</Link></li>
          ))}
        </ul>
      </div>
      <p className="wrap mt-8 text-xs text-slate-500">Solutions shown on this site are illustrative examples of systems Lykan can design. They are not client engagements.</p>
    </footer>
  );
}
