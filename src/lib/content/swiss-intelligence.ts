import { content as baseContent } from '../content';

export const swissIntelligenceContent = {
  hero: {
    headline: "The Signal. Not the Noise.",
    subheadline: "Criminals sell your access in private deals. We intercept them. No false positives. No delays. Just threats that matter.",
    cta: "Request My Briefing"
  },
  stats: baseContent.stats,
  statsHeadline: "Q1 Intelligence Report",
  statsFootnote: "*Verified through insurance claims analysis",
  howItWorks: {
    headline: "The Process",
    subheadline: "7 Steps: Threat Detected to Threat Stopped",
    steps: [
      { title: "Define Your Perimeter", description: "Share your domains. We begin monitoring immediately." },
      { title: "Access Criminal Networks", description: "We maintain presence where access brokers trade company credentials." },
      { title: "Identify Threats", description: "A credible threat targeting your organization has been detected." },
      { title: "Validate Authenticity", description: "Multi-source verification eliminates noise. Only real threats reach you." },
      { title: "Neutralize the Sale", description: "We intervene. The transaction is stopped. Your exposure ends." },
      { title: "Deliver Actionable Intel", description: "You receive specific remediation steps with clear priorities." },
      { title: "Provide Full Documentation", description: "Complete evidence package for your team and stakeholders." }
    ]
  },
  solutions: {
    headline: "Coverage Options",
    subheadline: "Precision Protection",
    items: [
      { title: "Pre-Ransomware Defense", description: "Intercept ransomware operators before encryption begins." },
      { title: "Credential Monitoring", description: "One in four breaches starts with stolen credentials. We prioritize the high-risk ones." },
      { title: "Vendor Risk Intelligence", description: "Early warning when partners face compromise. Act before the cascade." },
      { title: "Portfolio Coverage", description: "Multi-organization protection for insurers, MSSPs, and investment firms." }
    ]
  },
  comparison: {
    headline: "Beyond Standard Tools",
    subheadline: "Where EDR and MFA Fall Short",
    capabilities: [
      "Prevents attacks before data exfiltration",
      "Detects threats after initial access is gained",
      "Operates inside access broker networks",
      "Provides advance notice of supply chain compromise",
      "Deploys instantly—no infrastructure changes"
    ]
  },
  testimonials: baseContent.testimonials,
  cta: {
    headline: "Ready for Intelligence That Matters?",
    subheadline: "Get a threat assessment tailored to your organization.",
    button: "Request My Assessment"
  }
};
