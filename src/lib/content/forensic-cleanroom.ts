import { content as baseContent } from '../content';

export const forensicCleanroomContent = {
  hero: {
    headline: "Find Threats Before They Find You",
    subheadline: "Access to your company is being sold right now. We detect it, verify it, and stop it—before the attacker makes their move.",
    cta: "Check My Exposure"
  },
  stats: baseContent.stats,
  statsHeadline: "Q1 Performance",
  statsFootnote: "*Validated through insurance claims methodology",
  howItWorks: {
    headline: "Our Process",
    subheadline: "7 Steps from Detection to Resolution",
    steps: [
      { title: "Onboard Your Assets", description: "Provide your domains and critical assets. Setup is fast." },
      { title: "Monitor Criminal Markets", description: "Our analysts operate inside networks where access brokers trade." },
      { title: "Detect Active Threats", description: "We identify credible threats targeting your organization." },
      { title: "Verify Before Alerting", description: "Multi-source validation ensures no false positives waste your time." },
      { title: "Stop the Transaction", description: "We intervene directly. The sale doesn't happen." },
      { title: "Deliver Clear Guidance", description: "Actionable remediation steps arrive while the window is open." },
      { title: "Document for Compliance", description: "Complete evidence trail for audits and legal needs." }
    ]
  },
  solutions: {
    headline: "What We Protect",
    subheadline: "Coverage for Real Threats",
    items: [
      { title: "Ransomware Prevention", description: "Stop ransomware before it starts. Intercept operators pre-attack." },
      { title: "Credential Theft Detection", description: "25% of breaches begin with stolen credentials. We find the ones that matter." },
      { title: "Supply Chain Intelligence", description: "Know when your vendors are compromised before they notify you." },
      { title: "Portfolio Monitoring", description: "Protect multiple organizations simultaneously. Built for scale." }
    ]
  },
  comparison: {
    headline: "Closing Detection Gaps",
    subheadline: "What Other Tools Cannot See",
    capabilities: [
      "Stops active threats before data loss",
      "Catches attackers after initial access",
      "Monitors access broker marketplaces continuously",
      "Detects supply chain risks early",
      "Deploys quickly—no system changes needed"
    ]
  },
  testimonials: baseContent.testimonials,
  cta: {
    headline: "Ready to Get Ahead of Attackers?",
    subheadline: "See what threats are targeting your organization right now.",
    button: "Get My Assessment"
  }
};
