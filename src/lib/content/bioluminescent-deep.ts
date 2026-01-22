import { content as baseContent } from '../content';

export const bioluminescentDeepContent = {
  hero: {
    headline: "See What's Coming Before It Hits",
    subheadline: "Attackers trade access to companies in the dark. We operate there too—intercepting threats before they reach your network.",
    cta: "Illuminate My Risk"
  },
  stats: baseContent.stats,
  statsHeadline: "Q1 Threat Data",
  statsFootnote: "*Data verified through insurance claims",
  howItWorks: {
    headline: "How It Works",
    subheadline: "7 Stages of Protection",
    steps: [
      { title: "Share Your Assets", description: "Tell us your domains. We start monitoring immediately." },
      { title: "Go Where Threats Originate", description: "Our team embeds in criminal networks where access is sold." },
      { title: "Detect Targeting Activity", description: "We identify when your organization becomes a target." },
      { title: "Validate Every Threat", description: "No false positives. Each alert is verified through multiple sources." },
      { title: "Intercept the Attack", description: "We stop the sale. The attacker loses access." },
      { title: "Deliver Actionable Fixes", description: "Clear remediation steps arrive while you can still act." },
      { title: "Document the Threat", description: "Full evidence trail for your records and stakeholders." }
    ]
  },
  solutions: {
    headline: "Protection Options",
    subheadline: "Defense That Works",
    items: [
      { title: "Ransomware Interception", description: "Catch ransomware operators before they deploy anything." },
      { title: "Credential Theft Monitoring", description: "One in four attacks starts with stolen credentials. We catch the dangerous ones." },
      { title: "Supply Chain Visibility", description: "See vendor compromises before they become your problem." },
      { title: "Portfolio Defense", description: "Protect multiple companies at once. Perfect for insurers and MSSPs." }
    ]
  },
  comparison: {
    headline: "Beyond the Visible",
    subheadline: "Gaps in Traditional Security",
    capabilities: [
      "Stops attacks before data exfiltration",
      "Catches threats post-initial access",
      "Monitors real access broker activity",
      "Detects supply chain threats early",
      "Deploys fast—no complex setup"
    ]
  },
  testimonials: baseContent.testimonials,
  cta: {
    headline: "Ready to See What Others Miss?",
    subheadline: "Get visibility into threats targeting your organization.",
    button: "Start My Assessment"
  }
};
