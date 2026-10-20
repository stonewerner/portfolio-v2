import type { Metadata } from "next";

import LegalPage, { LegalSection } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: "Privacy policy for Stone Werner's TikTok publishing tool.",
};

export default function TikTokPrivacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 19, 2026">
      <LegalSection heading="Overview">
        <p>
          This policy covers a personal video publishing tool built and operated
          by {site.name} (&ldquo;the tool&rdquo;). The tool connects to TikTok
          through the TikTok Content Posting API so that {site.name} can send
          videos he has made to the draft inbox of his own TikTok account. It is
          not a public app and is not offered to other people.
        </p>
      </LegalSection>

      <LegalSection heading="Information the tool accesses">
        <p>When the account owner authorizes the tool, it receives:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>A TikTok access token and refresh token for the authorizing account.</li>
          <li>The account&rsquo;s TikTok open ID.</li>
          <li>
            Basic posting settings returned by TikTok&rsquo;s creator info
            endpoint, such as maximum video length.
          </li>
        </ul>
        <p>
          The tool only uses the video upload scope. It does not read your
          followers, messages, watch history, or other people&rsquo;s content.
        </p>
      </LegalSection>

      <LegalSection heading="How information is used">
        <p>
          Tokens are used only to upload the account owner&rsquo;s own videos to
          his TikTok inbox as drafts. He then reviews and publishes each post in
          the TikTok app himself. Nothing is used for advertising, profiling, or
          analytics about other people.
        </p>
      </LegalSection>

      <LegalSection heading="Storage and retention">
        <p>
          Tokens are stored on the account owner&rsquo;s own computer in a local
          configuration file and are not placed on a public server. Uploaded
          videos are sent directly to TikTok. Tokens are deleted when access is
          revoked or the tool is no longer used.
        </p>
      </LegalSection>

      <LegalSection heading="Sharing">
        <p>
          Information is not sold, rented, or shared with third parties. It is
          sent only to TikTok, as required to perform the upload.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          Access can be revoked at any time in TikTok under Settings and
          privacy, then Security and permissions, then Apps and services. You
          can also email{" "}
          <a href={`mailto:${site.email}`} className="text-link hover:underline">
            {site.email}
          </a>{" "}
          to ask what, if anything, is stored about you.
        </p>
      </LegalSection>

      <LegalSection heading="Changes and contact">
        <p>
          This policy may be updated; the date above shows the latest revision.
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
