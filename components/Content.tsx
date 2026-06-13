import { contentPillars, reelLinks } from "@/data/site";

import SectionLabel from "./SectionLabel";

export default function ContentSection() {
  return (
    <section id="content" aria-labelledby="content-heading" className="py-20">
      <SectionLabel id="content-heading">Content</SectionLabel>

      <div className="mb-8 flex flex-wrap gap-2">
        {contentPillars.map((pillar) => (
          <span
            key={pillar}
            className="rounded-md border border-border px-3 py-1 font-mono text-xs text-muted"
          >
            {pillar}
          </span>
        ))}
      </div>

      <ul className="divide-y divide-border">
        {reelLinks.map((reel) => (
          <li key={reel.href + reel.title}>
            <a
              href={reel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-5 transition-opacity hover:opacity-80"
            >
              <span className="text-[15px] text-link">{reel.title}</span>
              <span className="shrink-0 font-mono text-xs text-muted">
                {reel.platform} →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
