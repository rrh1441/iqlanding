import { content as baseContent } from '../content';

export const publicHealthContent = {
  hero: {
    headline: "Stop Breaches Before They Spread",
    subheadline: "Access to your company is being sold. We detect it early, stop it fast, and tell you exactly what to fix.",
    cta: "Check My Risk Level"
  },
  stats: baseContent.stats,
  statsHeadline: "Q1 Threat Data",
  statsFootnote: "*Data verified through insurance claims analysis",
  howItWorks: {
    headline: "Response Process",
    subheadline: "7 Steps to Threat Containment",
    steps: [
      { title: "Register Your Assets", description: "Share your domains. Monitoring begins immediately." },
      { title: "Monitor Threat Sources", description: "We operate where access brokers sell company credentials." },
      { title: "Detect Active Threats", description: "Your organization is being targeted. We catch it early." },
      { title: "Confirm the Threat", description: "Multi-source verification eliminates false positives." },
      { title: "Contain the Risk", description: "We intervene directly. The sale is stopped." },
      { title: "Issue Guidance", description: "Clear remediation steps delivered while there's time to act." },
      { title: "Document Everything", description: "Full evidence trail for compliance and your records." }
    ]
  },
  solutions: {
    headline: "Protection Programs",
    subheadline: "Comprehensive Coverage",
    items: [
      { title: "Ransomware Prevention", description: "Stop ransomware groups before they deploy. Prevention beats recovery." },
      { title: "Credential Monitoring", description: "One in four attacks starts with stolen credentials. We catch what matters." },
      { title: "Supply Chain Watch", description: "Know when vendors are compromised before it affects you." },
      { title: "Portfolio Coverage", description: "Protect multiple organizations at scale. Built for insurers and MSSPs." }
    ]
  },
  comparison: {
    headline: "Filling Security Gaps",
    subheadline: "What Traditional Tools Miss",
    capabilities: [
      "Stops attacks before data loss occurs",
      "Catches threats after initial access",
      "Monitors where access brokers operate",
      "Detects supply chain risks early",
      "Deploys fast—no complex setup"
    ]
  },
  testimonials: baseContent.testimonials,
  cta: {
    headline: "Ready to Reduce Your Risk?",
    subheadline: "See what threats are active against your organization.",
    button: "Get My Assessment"
  }
};
