import { content as baseContent } from '../content';

export const natureDocumentaryContent = {
  hero: {
    headline: "See the Attack Before It Happens",
    subheadline: "Attackers trade access to companies like yours. We track these transactions and stop them—before you become the target.",
    cta: "Show Me My Risks"
  },
  stats: baseContent.stats,
  statsHeadline: "Q1 Findings",
  statsFootnote: "*Findings validated through insurance claims",
  howItWorks: {
    headline: "How We Work",
    subheadline: "7 Steps of Protection",
    steps: [
      { title: "Define Your Territory", description: "Share your domains and assets. We begin watching immediately." },
      { title: "Enter Their World", description: "Our team operates inside criminal networks where access trades occur." },
      { title: "Spot the Threat", description: "We identify when your organization is being targeted." },
      { title: "Confirm It's Real", description: "Multi-source validation. No false positives reach your team." },
      { title: "Stop the Attack", description: "We intervene directly. The sale fails." },
      { title: "Alert Your Team", description: "Actionable remediation guidance arrives while you can still act." },
      { title: "Document Everything", description: "Complete evidence for your records and compliance needs." }
    ]
  },
  solutions: {
    headline: "What We Track",
    subheadline: "Focused Protection",
    items: [
      { title: "Ransomware Groups", description: "We intercept ransomware operators before they deploy anything." },
      { title: "Credential Thieves", description: "One in four breaches starts with stolen credentials. We catch the dangerous ones." },
      { title: "Supply Chain Threats", description: "See when your vendors face compromise before they notify you." },
      { title: "Portfolio Threats", description: "Monitor multiple companies at once. Built for insurers and MSSPs." }
    ]
  },
  comparison: {
    headline: "Beyond Standard Tools",
    subheadline: "What Others Cannot See",
    capabilities: [
      "Stops active threats before data loss",
      "Catches attackers post-initial access",
      "Monitors real access broker activity",
      "Detects supply chain risks early",
      "Deploys instantly—no disruption"
    ]
  },
  testimonials: baseContent.testimonials,
  cta: {
    headline: "Ready to See What's Targeting You?",
    subheadline: "Get visibility into threats against your organization.",
    button: "Start My Assessment"
  }
};
