import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions",
  description: `The terms governing the use of the ${SITE.name} website and our puppy enquiries and reservations.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="June 2026"
      crumbLabel="Terms & Conditions"
      crumbHref="/terms"
      intro={`These terms govern your use of the ${SITE.name} website and the process of enquiring about and reserving our German Shepherd puppies. By using this site, you agree to these terms.`}
      sections={[
        {
          heading: "Use of this website",
          body: [
            "The content on this website is provided for general information about our kennel and our dogs. While we strive for accuracy, availability, descriptions and details may change without notice.",
          ],
        },
        {
          heading: "Enquiries & reservations",
          body: [
            "Submitting an enquiry or waiting-list form does not constitute a binding reservation. A puppy is reserved only once a deposit has been received and confirmed by us.",
            "Deposits secure a puppy and, unless otherwise agreed in writing, are non-refundable. The remaining balance is due before collection.",
          ],
        },
        {
          heading: "Health guarantee",
          body: [
            "Each puppy is provided with a written health guarantee and up-to-date health records. The specific terms of the guarantee are provided at the time of reservation.",
          ],
        },
        {
          heading: "Buyer responsibilities",
          body: [
            "Buyers agree to provide a safe, caring home and appropriate veterinary care, nutrition and training for their puppy, and to follow the guidance provided at collection.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            `${SITE.name} is not liable for any indirect or consequential loss arising from the use of this website. Nothing in these terms limits liability that cannot be excluded by law.`,
          ],
        },
        {
          heading: "Contact",
          body: [
            `Questions about these terms? Contact ${SITE.name} at ${CONTACT.email} or ${CONTACT.phoneDisplay}.`,
          ],
        },
      ]}
    />
  );
}
