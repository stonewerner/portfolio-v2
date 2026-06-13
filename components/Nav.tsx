import { navItems, site } from "@/data/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#"
          className="text-sm font-medium text-foreground transition-opacity hover:opacity-70"
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-sm text-muted [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            className="absolute right-0 top-full mt-2 min-w-[140px] rounded-lg border border-border bg-surface py-2 shadow-sm"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
