import { Fragment } from "react";

import { aboutPoints, personalityLine, site } from "@/data/site";

import SectionLabel from "./SectionLabel";

function renderPoint(point: string) {
  const parts = point.split("Maintouch");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={site.links.maintouch}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Maintouch
        </a>
      )}
    </Fragment>
  ));
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20">
      <SectionLabel id="about-heading">About</SectionLabel>
      <ul className="space-y-5">
        {aboutPoints.map((point) => (
          <li
            key={point}
            className="text-[16px] leading-relaxed text-foreground"
          >
            {renderPoint(point)}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-[15px] italic text-muted">{personalityLine}</p>
    </section>
  );
}
