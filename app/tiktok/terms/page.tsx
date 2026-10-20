import type { Metadata } from "next";

import LegalPage, { LegalSection } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Terms of Service — ${site.name}`,
  description: "Terms of service for Stone Werner's TikTok publishing tool.",
};

export default function TikTokTerms() {
  return (
    <LegalPage title="Terms of Service" updated="October 19, 2026">
      <LegalSection heading="About the tool">
        <p>
          This is a personal video publishing tool built and operated by{" "}
          {site.name}. It uses the TikTok Content Posting API to upload videos
          to the draft inbox of the account owner&rsquo;s own TikTok account.
          It is not offered to the public, and these terms apply to anyone who
          authorizes it.
        </p>
      </LegalSection>

      <LegalSection heading="Use of the tool">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            The tool uploads videos as drafts only. Each post is reviewed and
            published manually in the TikTok app by the account owner.
          </li>
          <li>
            You may only authorize the tool for a TikTok account you own and
            only upload content you have the right to post.
          </li>
          <li>
            Use of the tool must follow the{" "}
            <a
              href="https://www.tiktok.com/legal/page/global/terms-of-service/en"
              className="text-link hover:underline"
            >
              TikTok Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://www.tiktok.com/community-guidelines"
              className="text-link hover:underline"
            >
              Community Guidelines
            </a>
            .
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Your content">
        <p>
          You keep all rights to the videos you upload. The tool does not claim
          ownership of any content and does not publish anything on its own.
        </p>
      </LegalSection>

      <LegalSection heading="Data">
        <p>
          How account information is handled is described in the{" "}
          <a href="/tiktok/privacy" className="text-link hover:underline">
            Privacy Policy
          </a>
          . You can revoke the tool&rsquo;s access at any time in TikTok&rsquo;s
          app settings.
        </p>
      </LegalSection>

      <LegalSection heading="No warranty and liability">
        <p>
          The tool is provided as is, without warranties of any kind, and may
          change or stop working at any time, including if TikTok changes its
          API. To the extent permitted by law, {site.name} is not liable for
          losses arising from its use.
        </p>
      </LegalSection>

      <LegalSection heading="Changes and contact">
        <p>
          These terms may be updated; the date above shows the latest revision.
          Questions go to{" "}
          <a href={`mailto:${site.email}`} className="text-link hover:underline">
            {site.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
