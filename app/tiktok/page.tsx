import type { Metadata } from "next";

import LegalPage, { LegalSection } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `TikTok Publishing Tool — ${site.name}`,
  description:
    "A personal tool that sends Stone Werner's finished videos to his TikTok drafts inbox.",
};

export default function TikTokHome() {
  return (
    <LegalPage title="TikTok Publishing Tool">
      <LegalSection heading="What it is">
        <p>
          A personal tool built by {site.name} to move finished short-form
          videos from his editing workflow into the draft inbox of his own
          TikTok account, using the TikTok Content Posting API. It saves
          manually copying files to a phone.
        </p>
      </LegalSection>

      <LegalSection heading="How it works">
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            {site.name} connects his TikTok account once through TikTok&rsquo;s
            official sign-in and approves the video upload permission.
          </li>
          <li>The tool uploads a finished video to his TikTok drafts inbox.</li>
          <li>
            He opens the TikTok app, reviews the draft, and publishes it
            himself. The tool never posts anything on its own.
          </li>
        </ol>
      </LegalSection>

      <LegalSection heading="Permissions">
        <p>
          Only the video upload permission is requested. The tool does not read
          your followers, messages, or other people&rsquo;s content. Access can
          be revoked at any time in the TikTok app.
        </p>
      </LegalSection>

      <LegalSection heading="Policies and contact">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <a href="/tiktok/terms" className="text-link hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/tiktok/privacy" className="text-link hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="text-link hover:underline">
              {site.email}
            </a>
          </li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
