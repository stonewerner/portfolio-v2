import { aboutPoints, personalityLine } from "@/data/site";

import SectionLabel from "./SectionLabel";

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
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-[15px] italic text-muted">{personalityLine}</p>
    </section>
  );
}
