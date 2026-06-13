import { bookCallCopy, site } from "@/data/site";

import SectionLabel from "./SectionLabel";

export default function BookCall() {
  return (
    <section id="book" aria-labelledby="book-heading" className="py-20">
      <SectionLabel id="book-heading">{bookCallCopy.title}</SectionLabel>
      <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
        <p className="text-[16px] leading-relaxed text-foreground">
          {bookCallCopy.description}
        </p>
        <a
          href={site.links.bookCall}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-foreground px-5 py-2.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-80"
        >
          {bookCallCopy.cta}
        </a>
      </div>
    </section>
  );
}
