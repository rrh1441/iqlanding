import { content as baseContent } from '../content';

export const digitalTopographyContent = {
  hero: {
    headline: "Stop Attacks Before They Start",
    subheadline: "Criminals sell access to your systems in private deals. We find those deals and shut them down—before you become the victim.",
    cta: "See My Exposure"
  },
  stats: baseContent.stats,
  statsHeadline: "Q1 Results",
  statsFootnote: "*Verified through insurance claims data",
  howItWorks: {
    headline: "How We Protect You",
    subheadline: "7 Steps from Threat to Resolution",
    steps: [
      { title: "Tell Us What to Watch", description: "Share your domains and IP ranges. Setup takes minutes, not weeks." },
      { title: "We Go Where Attackers Are", description: "Our team operates inside criminal networks where access gets bought and sold." },
      { title: "We Spot Threats to You", description: "Someone is selling access to your systems. We catch it." },
      { title: "We Verify It's Real", description: "Multi-source validation ensures no false positives reach your team." },
      { title: "We Stop the Sale", description: "We intervene directly. The attacker walks away empty." },
      { title: "You Get Actionable Intel", description: "Clear alert with exactly what to fix and how to fix it." },
      { title: "We Document Everything", description: "Full evidence trail for compliance, legal, and your records." }
    ]
  },
  solutions: {
    headline: "What We Stop",
    subheadline: "Protection That Actually Works",
    items: [
      { title: "Ransomware Prevention", description: "We intercept ransomware operators before they encrypt your first file." },
      { title: "Credential Theft Response", description: "25% of breaches start with stolen credentials. We catch the ones that matter." },
      { title: "Supply Chain Monitoring", description: "Know when your vendors are compromised—before they tell you." },
      { title: "Portfolio Protection", description: "Cover multiple companies at once. Built for insurers and MSSPs." }
    ]
  },
  comparison: {
    headline: "What Your Tools Miss",
    subheadline: "Closing the Gaps in Your Stack",
    capabilities: [
      "Stops attacks before data leaves your network",
      "Catches threats after attackers get initial access",
      "Monitors where access brokers actually operate",
      "Detects supply chain risks before cascade",
      "Deploys in hours—no complex integration"
    ]
  },
  testimonials: baseContent.testimonials,
  cta: {
    headline: "Ready to Stop Waiting for the Breach?",
    subheadline: "See what attackers are planning against your organization.",
    button: "Get My Assessment"
  }
};
