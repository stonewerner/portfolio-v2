"use client";

import Image from "next/image";
import { useState } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  initials: string;
};

export default function Avatar({ src, alt, initials }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-border bg-surface font-mono text-lg font-medium text-muted"
        aria-hidden
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={80}
      height={80}
      priority
      className="h-20 w-20 shrink-0 rounded-xl border border-border object-cover"
      onError={() => setFailed(true)}
    />
  );
}
