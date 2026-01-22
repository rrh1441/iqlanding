import { content as baseContent } from '../content';

export const artDecoContent = {
  hero: {
    headline: "Catch Them Before They Catch You",
    subheadline: "Criminals are selling access to your systems. We find the deals, stop the sales, and tell you exactly how to lock them out.",
    cta: "Start My Investigation"
  },
  stats: baseContent.stats,
  statsHeadline: "Q1 Case Results",
  statsFootnote: "*Results verified through insurance claims",
  howItWorks: {
    headline: "The Process",
    subheadline: "7 Steps from Discovery to Resolution",
    steps: [
      { title: "Open Your Case", description: "Provide your domains. We begin surveillance immediately." },
      { title: "Work the Networks", description: "Our team operates inside criminal circles where access gets traded." },
      { title: "Find the Threat", description: "Someone is selling access to your organization. We catch it." },
      { title: "Verify the Evidence", description: "Every finding is confirmed through multiple sources. No false leads." },
      { title: "Stop the Deal", description: "We intervene. The transaction fails. Your exposure ends." },
      { title: "Deliver the Findings", description: "Clear remediation steps with priorities. Act while the window is open." },
      { title: "Close the Case", description: "Full documentation for your records, legal, and compliance." }
    ]
  },
  solutions: {
    headline: "Coverage Options",
    subheadline: "Protection That Works",
    items: [
      { title: "Ransomware Prevention", description: "Catch ransomware operators before they make their move." },
      { title: "Credential Theft Detection", description: "25% of attacks start with stolen credentials. We find the ones that matter." },
      { title: "Supply Chain Monitoring", description: "Know when your vendors are compromised before it reaches you." },
      { title: "Portfolio Protection", description: "Cover multiple organizations at once. Built for insurers and MSSPs." }
    ]
  },
  comparison: {
    headline: "What Others Miss",
    subheadline: "Gaps in Standard Security",
    capabilities: [
      "Stops attacks before data leaves your network",
      "Catches threats after initial access occurs",
      "Monitors where access brokers actually work",
      "Detects supply chain problems early",
      "Deploys quickly—no complex setup"
    ]
  },
  testimonials: baseContent.testimonials,
  cta: {
    headline: "Ready to Get Ahead of the Threat?",
    subheadline: "See what's being planned against your organization.",
    button: "Start My Case"
  }
};
