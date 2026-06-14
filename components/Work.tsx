import { workItems } from "@/data/site";

import RowLink from "./RowLink";
import SectionLabel from "./SectionLabel";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-20">
      <SectionLabel id="work-heading">Work</SectionLabel>
      <div>
        {workItems.map((item) => (
          <RowLink
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
            external
          />
        ))}
      </div>
    </section>
  );
}
