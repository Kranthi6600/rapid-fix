import Breadcrumb from "@/components/Breadcrumb";
import FooterArea from "@/components/FooterArea";
import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import Preloader from "@/helper/Preloader";
import styles from "./privacy.module.scss";

export const metadata = {
  title: "Privacy Policy | RapidFix",
  description:
    "Read the RapidFix Privacy Policy to learn how we collect, use, and protect your personal information when you use our website and auto repair services.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Generic privacy & policy content.
// Edit the values below to customize for your business.
// ─────────────────────────────────────────────────────────────────────────────
const LAST_UPDATED = "August 21, 2026";

const SECTIONS = [
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: [
      "We may collect information that you voluntarily provide to us when you use our website, request a quote, book a service, or contact us. This may include:",
    ],
    list: [
      "Personal identification information (name, email address, phone number, mailing address).",
      "Vehicle information (make, model, year, VIN, license plate, mileage, and service history).",
      "Billing and payment information required to process transactions.",
      "Communications and correspondence you send to us (e.g., emails, messages, form submissions).",
    ],
    after: "We also automatically collect certain non-personal data, such as browser type, device information, IP address, pages visited, and usage statistics, to help us improve our website and services.",
  },
  {
    id: "how-we-use-information",
    heading: "How We Use Your Information",
    body: [
      "We use the information we collect for the following purposes:",
    ],
    list: [
      "To provide, operate, and maintain our services and website.",
      "To process bookings, quotes, payments, and service requests.",
      "To communicate with you about your appointments, services, and updates.",
      "To respond to your inquiries and provide customer support.",
      "To improve our website, services, and customer experience.",
      "To send promotional materials and newsletters (only if you have opted in).",
      "To comply with legal obligations and protect our rights.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies and Tracking Technologies",
    body: [
      "Our website may use cookies and similar tracking technologies (such as web beacons and pixel tags) to enhance your browsing experience and analyze website traffic. Cookies are small data files stored on your device that help us recognize you and remember your preferences.",
      "You can choose to disable cookies through your browser settings. However, some features of our website may not function properly without cookies.",
    ],
  },
  {
    id: "information-sharing",
    heading: "Sharing Your Information",
    body: [
      "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
    ],
    list: [
      "With service providers who help us operate our website and business (e.g., payment processors, hosting providers), under confidentiality agreements.",
      "With automotive parts suppliers and partners as needed to fulfill your service requests.",
      "When required by law, court order, or government regulation.",
      "In connection with a merger, acquisition, or sale of all or part of our business.",
      "With your explicit consent to share the information for a specific purpose.",
    ],
  },
  {
    id: "data-security",
    heading: "Data Security",
    body: [
      "We implement reasonable technical, administrative, and physical safeguards designed to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    body: [
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, to comply with legal obligations, resolve disputes, and enforce our agreements. Service records and vehicle history may be retained for longer periods as required by law or for warranty and liability purposes.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your Privacy Rights",
    body: [
      "Depending on your location, you may have the following rights regarding your personal information:",
    ],
    list: [
      "The right to access the personal information we hold about you.",
      "The right to request correction of inaccurate or incomplete information.",
      "The right to request deletion of your personal information (subject to legal exceptions).",
      "The right to opt out of marketing communications at any time.",
      "The right to withdraw consent to data processing where consent was given.",
    ],
    after: "To exercise any of these rights, please contact us using the details provided at the bottom of this page.",
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links",
    body: [
      "Our website may contain links to third-party websites or services that we do not control. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    body: [
      "Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us so we can take appropriate action.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. We will post the updated version on this page and revise the \"Last updated\" date at the top. We encourage you to review this page periodically.",
    ],
  },
];

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb
        title="Privacy Policy"
        img="/assets/img/about/about-us.jpeg"
      />

      {/* Privacy Content */}
      <section className={styles.privacyArea}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={styles.privacyCard}>
                <span className={styles.privacyUpdated}>
                  Last updated: <strong>{LAST_UPDATED}</strong>
                </span>

                <p className={styles.privacyIntro}>
                  This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website or
                  use our services. Please read this policy carefully to
                  understand our practices regarding your personal data.
                </p>

                {/* Table of Contents */}
                <nav className={styles.privacyToc}>
                  <div className={styles.tocTitle}>On This Page</div>
                  <ul>
                    {SECTIONS.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`}>{section.heading}</a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Sections */}
                {SECTIONS.map((section) => (
                  <div
                    key={section.id}
                    className={styles.privacySection}
                    id={section.id}
                  >
                    <h2 className={styles.privacyHeading}>{section.heading}</h2>
                    {section.body.map((paragraph, i) => (
                      <p key={i} className={styles.privacyText}>
                        {paragraph}
                      </p>
                    ))}
                    {section.list && (
                      <ul className={styles.privacyList}>
                        {section.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.after && (
                      <p className={styles.privacyText}>{section.after}</p>
                    )}
                  </div>
                ))}

                {/* Contact */}
                <div className={styles.privacyContact}>
                  <div className={styles.contactTitle}>Contact Us</div>
                  <p className={styles.contactText}>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or our data practices, please contact
                    us:
                  </p>
                  <p className={styles.contactText}>
                    Email:{" "}
                    <a href="mailto:info@rapidfix.ca">info@rapidfix.ca</a>
                  </p>
                  <p className={styles.contactText}>
                    Phone: <a href="tel:4378364848">(437) 836-4848</a>
                  </p>
                  <p className={styles.contactText}>
                    Address: 112 Sinnott Rd, Scarborough, ON M1L 4S6
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <Subscribe />

      {/* Footer Area */}
      <FooterArea />
    </>
  );
};

export default page;
