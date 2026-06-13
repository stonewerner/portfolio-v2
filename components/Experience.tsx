import { experienceItems, site } from "@/data/site";

import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="py-20">
      <SectionLabel id="experience-heading">Experience</SectionLabel>
      <div className="divide-y divide-border">
        {experienceItems.map((item) => (
          <div key={item.role + item.company} className="py-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="font-medium text-foreground">{item.role}</span>
              <span className="font-mono text-sm text-muted">{item.period}</span>
            </div>
            <p className="mt-1 font-mono text-sm text-muted">{item.company}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <a
        href={site.links.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        Resume (PDF) →
      </a>
    </section>
  );
}
