import { site } from "@/data/site";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-content gap-2 px-4 py-3">
        <a
          href={site.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-lg bg-foreground px-3 py-3 text-sm font-medium text-surface transition-opacity active:opacity-80"
        >
          Instagram
        </a>
        <a
          href={site.links.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-lg bg-foreground px-3 py-3 text-sm font-medium text-surface transition-opacity active:opacity-80"
        >
          TikTok
        </a>
        <a
          href={site.links.bookCall}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-lg border border-border px-3 py-3 text-sm font-medium text-foreground transition-opacity active:opacity-80"
        >
          Book
        </a>
      </div>
    </div>
  );
}
