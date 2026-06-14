import { contactLinks } from "@/data/site";

import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20">
      <SectionLabel id="contact-heading">Contact</SectionLabel>
      <ul className="space-y-3">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-[15px] text-foreground underline-offset-4 transition-opacity hover:underline hover:opacity-80"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
