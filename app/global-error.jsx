"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#FAFAFA] font-sans text-[#111111] antialiased">
        <main className="mx-auto flex min-h-screen max-w-[640px] flex-col items-start justify-center px-6">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 rounded-lg bg-[#111111] px-5 py-2.5 text-sm font-medium text-white"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
