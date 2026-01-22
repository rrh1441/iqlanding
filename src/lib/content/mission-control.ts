import { content as baseContent } from '../content';

export const missionControlContent = {
  hero: {
    headline: "Intercept Threats Before Impact",
    subheadline: "Attackers are trading access to your systems. We detect these transactions, stop them, and protect your mission.",
    cta: "Run My Systems Check"
  },
  stats: baseContent.stats,
  statsHeadline: "Q1 Mission Data",
  statsFootnote: "*Data verified through insurance claims",
  howItWorks: {
    headline: "Defense Protocol",
    subheadline: "7-Step Threat Response",
    steps: [
      { title: "Asset Registration", description: "Provide your domains and infrastructure. Monitoring begins immediately." },
      { title: "Threat Monitoring", description: "We maintain presence in networks where access sales occur." },
      { title: "Threat Detection", description: "Incoming threat targeting your systems confirmed." },
      { title: "Signal Verification", description: "Multi-source validation. No false positives." },
      { title: "Threat Neutralization", description: "We intervene. Access sale disrupted." },
      { title: "Status Report", description: "Clear remediation guidance. Time-critical window." },
      { title: "Full Documentation", description: "Complete evidence archived for your records." }
    ]
  },
  solutions: {
    headline: "Defense Modules",
    subheadline: "Select Your Coverage",
    items: [
      { title: "Ransomware Intercept", description: "Detect and neutralize ransomware operators before deployment." },
      { title: "Credential Tracking", description: "25% of breaches start with stolen credentials. We track priority signals." },
      { title: "Supply Chain Monitoring", description: "Early warning when connected systems show compromise." },
      { title: "Fleet Operations", description: "Multi-organization coverage for insurers, MSSPs, and portfolio managers." }
    ]
  },
  comparison: {
    headline: "Systems Check",
    subheadline: "Gaps in Standard Defenses",
    capabilities: [
      "Intercepts active threats before data breach",
      "Neutralizes threats post-initial access",
      "Monitors access broker channels",
      "Detects supply chain anomalies early",
      "Deploys instantly—no reconfiguration"
    ]
  },
  testimonials: baseContent.testimonials,
  cta: {
    headline: "Ready for Launch?",
    subheadline: "Run a systems check on your organization's threat exposure.",
    button: "Initialize My Scan"
  }
};
