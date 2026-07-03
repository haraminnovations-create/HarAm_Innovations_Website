import SEOHead from '../components/SEOHead'

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you use our website, including:
    - Contact form submissions (name, email, subject, message)
    - Newsletter subscriptions (email address)
    - Career applications (name, email, role, cover note)
    We also collect certain information automatically when you visit our website, including your IP address, browser type, and pages visited.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:
    - Respond to your inquiries and provide customer support
    - Send newsletters and updates (only if you've opted in)
    - Review job applications
    - Improve our website and services
    - Comply with legal obligations`,
  },
  {
    title: '3. Data Storage & Security',
    content: `Your data is stored securely in Supabase (PostgreSQL), hosted on infrastructure with industry-standard security controls. We implement technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.`,
  },
  {
    title: '4. Cookies',
    content: `We use cookies to improve your experience on our website. You can control cookie settings through our cookie consent banner. Essential cookies are necessary for the website to function and cannot be disabled. Analytics cookies help us understand how visitors use our site.`,
  },
  {
    title: '5. Third-Party Services',
    content: `We may use third-party services including Google Analytics for website analytics. These services may collect information about your use of our website in accordance with their own privacy policies.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to:
    - Access personal data we hold about you
    - Request correction of inaccurate data
    - Request deletion of your data
    - Withdraw consent at any time
    - Lodge a complaint with a supervisory authority
    To exercise these rights, contact us at hello@heraminnovations.com.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain personal data for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Contact form submissions are retained for 2 years. Newsletter subscriptions are retained until you unsubscribe.`,
  },
  {
    title: '8. Contact',
    content: `For privacy-related inquiries, contact us at:
    HarAm Innovations Pvt. Ltd.
    Email: hello@heraminnovations.com
    Address: Tech Hub, Bengaluru, Karnataka - 560001, India`,
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="HarAm Innovations Privacy Policy — how we collect, use, and protect your personal data."
      />

      <section className="pt-32 pb-12 bg-navy">
        <div className="max-w-3xl mx-auto container-padding">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: June 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto container-padding">
          <p className="text-gray leading-relaxed mb-10">
            HarAm Innovations Pvt. Ltd. ("we", "our", or "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and protect your personal information when
            you visit our website or use our services.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">{section.title}</h2>
                <p className="text-gray leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
