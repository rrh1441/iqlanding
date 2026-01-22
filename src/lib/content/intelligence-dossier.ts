import { content as baseContent } from '../content';

export const intelligenceDossierContent = {
  hero: {
    headline: "Know What Attackers Know",
    subheadline: "Someone is selling access to your systems right now. We find them, stop them, and give you the evidence—before the breach happens.",
    cta: "Request My Briefing"
  },
  stats: baseContent.stats,
  statsHeadline: "Q1 Intelligence Summary",
  statsFootnote: "*Findings verified through insurance claims data",
  howItWorks: {
    headline: "Intelligence Process",
    subheadline: "7 Steps: Detection to Neutralization",
    steps: [
      { title: "Asset Registration", description: "Provide your domains and critical infrastructure details." },
      { title: "Network Infiltration", description: "Our analysts maintain access to criminal networks where access trades happen." },
      { title: "Threat Identification", description: "We detect when your organization is being targeted." },
      { title: "Source Verification", description: "Every threat is validated through multiple intelligence sources." },
      { title: "Active Intervention", description: "We neutralize the transaction. The sale doesn't complete." },
      { title: "Intelligence Delivery", description: "Actionable findings reach you with clear remediation priorities." },
      { title: "Full Documentation", description: "Complete evidence package for legal, compliance, and records." }
    ]
  },
  solutions: {
    headline: "Intelligence Services",
    subheadline: "Focused Protection",
    items: [
      { title: "Ransomware Prevention", description: "Intercept ransomware groups before deployment begins." },
      { title: "Credential Intelligence", description: "25% of attacks start with stolen credentials. We identify the critical ones." },
      { title: "Vendor Threat Monitoring", description: "Early warning when your supply chain faces compromise." },
      { title: "Portfolio Intelligence", description: "Multi-organization coverage for insurers, MSSPs, and PE firms." }
    ]
  },
  comparison: {
    headline: "Intelligence Gaps Filled",
    subheadline: "What Standard Tools Cannot Deliver",
    capabilities: [
      "Prevents attacks before data is compromised",
      "Detects threats after initial access occurs",
      "Operates inside access broker networks",
      "Provides early supply chain warnings",
      "Deploys immediately—no integration delays"
    ]
  },
  testimonials: baseContent.testimonials,
  cta: {
    headline: "Ready for Real Intelligence?",
    subheadline: "Get a threat briefing specific to your organization.",
    button: "Request My Briefing"
  }
};
