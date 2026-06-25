import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects your personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 2026"
      crumbLabel="Privacy Policy"
      crumbHref="/privacy-policy"
      intro={`${SITE.name} ("we", "us") respects your privacy. This policy explains what information we collect when you contact us or use this website, and how we use and protect it.`}
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you submit an enquiry, waiting-list or contact form, we collect the details you provide — such as your name, phone number, email address and message.",
            "When you visit the site, basic, non-identifying technical data (such as browser type and pages viewed) may be collected to help us improve the website.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use your information solely to respond to your enquiries, manage waiting-list reservations, and provide support relating to our German Shepherds.",
            "We may contact you about your enquiry via WhatsApp, phone or email using the details you provide.",
          ],
        },
        {
          heading: "Sharing your information",
          body: [
            "We do not sell, rent or trade your personal information. We do not share it with third parties except where necessary to respond to your enquiry or where required by law.",
          ],
        },
        {
          heading: "Data retention & security",
          body: [
            "We keep your information only for as long as needed to assist you, and we take reasonable measures to keep it secure.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            `You may request access to, correction of, or deletion of your personal information at any time by contacting us at ${CONTACT.email}.`,
          ],
        },
        {
          heading: "Contact",
          body: [
            `For any privacy questions, contact ${SITE.name} at ${CONTACT.email} or ${CONTACT.phoneDisplay}.`,
          ],
        },
      ]}
    />
  );
}
