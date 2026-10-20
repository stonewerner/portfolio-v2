import { site } from "@/data/site";

type LegalPageProps = {
  title: string;
  updated?: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-8">
          <a
            href="/"
            className="text-sm font-medium text-foreground transition-opacity hover:opacity-70"
          >
            {site.name}
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-content px-6 py-16 md:px-8">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-muted">
          TikTok publishing tool
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        {updated && (
          <p className="mt-2 font-mono text-xs text-muted">Last updated {updated}</p>
        )}
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground">
          {children}
        </div>
        <footer className="mt-16 border-t border-border py-10">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {site.name} ·{" "}
            <a href={`mailto:${site.email}`} className="hover:text-foreground">
              {site.email}
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted">
        {heading}
      </h2>
      {children}
    </section>
  );
}
