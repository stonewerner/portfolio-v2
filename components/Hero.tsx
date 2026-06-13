import { site } from "@/data/site";

import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section className="pb-20 pt-12 md:pt-16">
      <div className="flex items-start gap-5">
        <Avatar src={site.photo} alt={site.name} initials="SW" />
        <div className="min-w-0 pt-1">
          <h1 className="text-[32px] font-semibold leading-tight tracking-tight text-foreground md:text-[40px]">
            {site.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-muted">{site.meta}</p>
        </div>
      </div>

      <p className="mt-8 max-w-[540px] text-[17px] leading-relaxed text-foreground">
        {site.tagline}
      </p>

      <div className="mt-8 hidden flex-wrap gap-3 md:flex">
        <a
          href={site.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-2.5 text-[15px] font-medium text-surface transition-opacity hover:opacity-85"
        >
          Follow on Instagram
        </a>
        <a
          href={site.links.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-2.5 text-[15px] font-medium text-surface transition-opacity hover:opacity-85"
        >
          Follow on TikTok
        </a>
      </div>

      <a
        href={site.links.bookCall}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1 text-[15px] text-foreground underline-offset-4 transition-opacity hover:underline hover:opacity-80"
      >
        Book a call →
      </a>
    </section>
  );
}
