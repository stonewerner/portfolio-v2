import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 pb-28 md:pb-10">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} {site.name} · NYC
      </p>
    </footer>
  );
}
