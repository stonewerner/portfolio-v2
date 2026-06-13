type RowLinkProps = {
  title: string;
  description?: string;
  meta?: string;
  href: string;
  external?: boolean;
};

export default function RowLink({
  title,
  description,
  meta,
  href,
  external = true,
}: RowLinkProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group block border-b border-border py-5 transition-opacity hover:opacity-80"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-medium text-foreground">{title}</span>
            {meta && (
              <span className="font-mono text-sm text-muted">{meta}</span>
            )}
          </div>
          {description && (
            <p className="mt-1 text-[15px] leading-relaxed text-muted">
              {description}
            </p>
          )}
        </div>
        <span
          className="mt-0.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5"
          aria-hidden
        >
          →
        </span>
      </div>
    </a>
  );
}
