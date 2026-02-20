# pSEO Strategy for DarkWebIQ

## Overview

Programmatic SEO strategy to create **2,500+ pages** at scale using public data sources. Modeled after HaveIBeenPwned (951 breach pages), Snyk (1M+ vulnerability pages), and CrowdStrike (257 threat actor profiles).

**Homepage Theme:** Swiss Intelligence V3

---

## Page Scale Summary

| pSEO Category | Page Count | Data Source |
|---------------|------------|-------------|
| Company Breach Pages | 1,000+ | HIBP API, State AGs, HHS OCR |
| Ransomware Group Profiles | 500+ | Ransomware.live, RansomLook |
| Threat Actor/APT Profiles | 300+ | MITRE ATT&CK, ETDA |
| State Breach Law Pages | 54 | IAPP, State AG sites |
| Compliance x Industry | 200+ | Framework/industry matrix |
| Tool Comparisons | 500+ | Competitor research |
| Glossary/Definition Pages | 300+ | Cybersecurity terms |
| **TOTAL** | **~2,850+** | |

---

## pSEO Categories

### 1. Company Breach Pages (HaveIBeenPwned Model)

**URL Pattern:** `/breach/{company-slug}/`
**Scale:** 1,000+ pages

**Example URLs:**
- `/breach/facebook/`
- `/breach/linkedin/`
- `/breach/equifax/`
- `/breach/t-mobile/`

**Content per page:**
- Breach date
- Records affected
- Data types exposed (emails, passwords, SSNs, etc.)
- What to do if affected
- Related breaches
- CTA: "Check if your data was exposed"

**Data Sources:**
| Source | Access | Volume |
|--------|--------|--------|
| [HIBP API](https://haveibeenpwned.com/api/v3) | Paid API | 951 breaches |
| [HHS OCR Breach Portal](https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf) | Free/Public | 5,000+ healthcare breaches |
| [California AG](https://oag.ca.gov/privacy/databreach/list) | Free/Public | Thousands |
| [Washington AG](https://www.atg.wa.gov/data-breach-notifications) | Free/Public | Since 2015 |
| [SEC 8-K Cyber Filings](https://www.debevoisedatablog.com/2024/03/06/cybersecurity-form-8-k-tracker/) | Free/Public | Public companies |

**Target Keywords:**
- "[company] data breach"
- "[company] hack"
- "was [company] breached"
- "[company] breach 2025"

---

### 2. Ransomware Group Profiles

**URL Pattern:** `/ransomware/{group-slug}/`
**Scale:** 500+ pages

**Example URLs:**
- `/ransomware/lockbit/`
- `/ransomware/blackcat/`
- `/ransomware/clop/`
- `/ransomware/play/`

**Content per page:**
- Group overview & origin
- Attack methodology
- Industries targeted
- Notable victims
- Bitcoin wallet tracking (if available)
- MITRE ATT&CK mapping
- Defense recommendations
- CTA: "Monitor for ransomware threats"

**Data Sources:**
| Source | Access | Groups Tracked |
|--------|--------|----------------|
| [Ransomware.live](https://www.ransomware.live/) | Free API | 100+ groups |
| [RansomLook](https://www.ransomlook.io/) | Free API | 504 groups |
| [Ransomwhere](https://ransomwhe.re/) | Free API | Payment data |
| [Ransom-DB](https://www.ransom-db.com/) | Web scrape | Real-time victims |

**Target Keywords:**
- "[group name] ransomware"
- "[group name] victims"
- "[group name] attack"
- "companies hacked by [group]"

---

### 3. Threat Actor/APT Profiles (CrowdStrike Model)

**URL Pattern:** `/threat-actor/{actor-slug}/`
**Scale:** 300+ pages

**Example URLs:**
- `/threat-actor/apt29-cozy-bear/`
- `/threat-actor/apt28-fancy-bear/`
- `/threat-actor/lazarus-group/`
- `/threat-actor/fin7/`

**Content per page:**
- Attribution (nation-state/criminal)
- Active since
- Target industries
- TTPs (Tactics, Techniques, Procedures)
- MITRE ATT&CK mapping
- Known tools/malware
- IOCs (Indicators of Compromise)
- CTA: "Get threat intelligence alerts"

**Data Sources:**
| Source | Access | Actors Tracked |
|--------|--------|----------------|
| [MITRE ATT&CK Groups](https://attack.mitre.org/groups/) | Free | All known APTs |
| [ETDA Threat Group Cards](https://apt.etda.or.th/) | Free | 504 groups |
| [Malpedia](https://malpedia.caad.fkie.fraunhofer.de/) | Invite | Attribution data |

**Target Keywords:**
- "[APT name] attacks"
- "[APT name] indicators"
- "[nation] hackers"
- "[APT name] malware"

---

### 4. State Data Breach Law Pages

**URL Pattern:** `/breach-laws/{state-slug}/`
**Scale:** 54 pages (50 states + DC + territories)

**Example URLs:**
- `/breach-laws/california/`
- `/breach-laws/new-york/`
- `/breach-laws/texas/`
- `/breach-laws/florida/`

**Content per page:**
- Notification requirements
- Timeline (e.g., "72 hours")
- Who must be notified (AG, individuals, credit bureaus)
- Penalties for non-compliance
- Recent enforcement actions
- Covered data types
- CTA: "Ensure compliance with breach monitoring"

**Data Source:** [IAPP State Breach Notification Chart](https://iapp.org/resources/article/state-data-breach-notification-chart/)

**Target Keywords:**
- "[state] data breach notification law"
- "[state] breach reporting requirements"
- "data breach notification [state]"

---

### 5. Compliance x Industry Matrix

**URL Pattern:** `/compliance/{framework}/{industry}/`
**Scale:** 200+ pages

**Framework x Industry Grid:**

| Framework | Industries |
|-----------|------------|
| HIPAA | Healthcare, Telehealth, Medical Devices, Health Tech |
| PCI DSS | Retail, E-commerce, Fintech, Payments |
| SOC 2 | SaaS, Cloud, MSPs, Tech |
| GDPR | Any EU-serving |
| CCPA | California businesses |
| CMMC | Defense contractors |
| NIST | Government contractors |
| ISO 27001 | Enterprise, Global |

**Example URLs:**
- `/compliance/hipaa/healthcare/`
- `/compliance/pci-dss/retail/`
- `/compliance/soc-2/saas/`
- `/compliance/gdpr/fintech/`

**Content per page:**
- Framework requirements overview
- Industry-specific obligations
- Common violations
- Breach implications
- Audit preparation
- CTA: "Monitor for compliance gaps"

**Target Keywords:**
- "[framework] compliance [industry]"
- "[industry] [framework] requirements"
- "[framework] for [industry]"

---

### 6. Tool/Competitor Comparison Pages

**URL Pattern:** `/compare/{tool-a}-vs-{tool-b}/` and `/alternatives/{tool}/`
**Scale:** 500+ pages

**Comparison Pages:**
- `/compare/recorded-future-vs-mandiant/`
- `/compare/crowdstrike-vs-sentinelone/`
- `/compare/proofpoint-vs-mimecast/`

**Alternatives Pages:**
- `/alternatives/recorded-future/`
- `/alternatives/crowdstrike/`
- `/alternatives/flashpoint/`

**Content per page:**
- Feature comparison table
- Pricing comparison (if public)
- Pros/cons
- Best for [use case]
- DarkWebIQ positioning
- CTA: "See how DarkWebIQ compares"

**Target Keywords:**
- "[tool a] vs [tool b]"
- "[tool] alternative"
- "[tool] competitors"
- "best [tool category]"

---

### 7. Cybersecurity Glossary

**URL Pattern:** `/glossary/{term}/`
**Scale:** 300+ pages

**Example URLs:**
- `/glossary/ransomware/`
- `/glossary/phishing/`
- `/glossary/zero-day/`
- `/glossary/credential-stuffing/`
- `/glossary/infostealer/`

**Content per page:**
- Definition
- How it works
- Real-world examples
- How to protect
- Related terms
- CTA: "Protect against [term]"

**Target Keywords:**
- "what is [term]"
- "[term] meaning"
- "[term] definition"
- "[term] explained"

---

## Technical Implementation

### File Structure

```
src/
├── app/
│   ├── page.tsx                              # Homepage (Swiss Intelligence V3)
│   ├── breach/
│   │   ├── page.tsx                          # Breach index
│   │   └── [company]/page.tsx                # 1,000+ pages
│   ├── ransomware/
│   │   ├── page.tsx                          # Ransomware index
│   │   └── [group]/page.tsx                  # 500+ pages
│   ├── threat-actor/
│   │   ├── page.tsx                          # Threat actor index
│   │   └── [actor]/page.tsx                  # 300+ pages
│   ├── breach-laws/
│   │   ├── page.tsx                          # State laws index
│   │   └── [state]/page.tsx                  # 54 pages
│   ├── compliance/
│   │   ├── page.tsx                          # Compliance index
│   │   └── [framework]/
│   │       └── [industry]/page.tsx           # 200+ pages
│   ├── compare/
│   │   ├── page.tsx                          # Comparison index
│   │   └── [comparison]/page.tsx             # 500+ pages
│   ├── alternatives/
│   │   └── [tool]/page.tsx                   # 50+ pages
│   ├── glossary/
│   │   ├── page.tsx                          # Glossary index
│   │   └── [term]/page.tsx                   # 300+ pages
│   ├── sitemap.ts
│   └── robots.ts
└── lib/
    └── pseo/
        ├── breaches.ts                       # Breach data
        ├── ransomware.ts                     # Ransomware group data
        ├── threat-actors.ts                  # APT data
        ├── state-laws.ts                     # State breach laws
        ├── compliance.ts                     # Compliance frameworks
        ├── competitors.ts                    # Competitor data
        ├── glossary.ts                       # Glossary terms
        └── metadata.ts                       # SEO metadata factory
```

### Data Ingestion Strategy (Fully Automated)

#### Breaches (1,000+ pages)

| Source | Access | Cost | Data |
|--------|--------|------|------|
| [HIBP API](https://haveibeenpwned.com/api/v3) `/breaches` | Free endpoint | $0 | 951 breaches with full details |
| [HHS OCR Portal](https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf) | Playwright scrape | $0 | 5,000+ healthcare breaches |
| [Maine AG Excel](https://www.maine.gov/ag) | Direct download | $0 | Historical breach data |
| [California AG](https://oag.ca.gov/privacy/databreach/list) | BeautifulSoup scrape | $0 | CA breach notifications |

```typescript
// Free HIBP breaches endpoint - no API key needed
const breaches = await fetch('https://haveibeenpwned.com/api/v3/breaches').then(r => r.json());
// Returns 951 breaches with: Name, Domain, BreachDate, PwnCount, DataClasses, etc.
```

#### Ransomware Groups (500+ pages)

| Source | Access | Data |
|--------|--------|------|
| [Ransomware.live API](https://api.ransomware.live/v2) | Free, no auth | 100+ groups, victims, YARA rules |
| [RansomLook API](https://www.ransomlook.io/api) | Free, CC BY 4.0 | 541 groups, 28,800+ posts |
| [data.ransomware.live](https://data.ransomware.live) | Bulk JSON download | Full database |

```typescript
// Get all ransomware groups
const groups = await fetch('https://api.ransomware.live/v2/groups').then(r => r.json());
// Get recent victims
const victims = await fetch('https://api.ransomware.live/v2/recentvictims').then(r => r.json());
```

#### Threat Actors/APTs (300+ pages)

| Source | Access | Data |
|--------|--------|------|
| [MITRE ATT&CK STIX](https://github.com/mitre-attack/attack-stix-data) | GitHub download | All APTs in STIX 2.1 JSON |
| [ETDA Threat Cards](https://apt.etda.or.th/) | Web scrape | 504 threat groups |

```typescript
// Download enterprise ATT&CK bundle
const attackData = await fetch(
  'https://raw.githubusercontent.com/mitre-attack/attack-stix-data/master/enterprise-attack/enterprise-attack.json'
).then(r => r.json());

// Filter for threat groups
const groups = attackData.objects.filter(obj => obj.type === 'intrusion-set');
// Returns ~130 APT groups with aliases, TTPs, targets
```

#### State Breach Laws (54 pages)

| Source | Access | Data |
|--------|--------|------|
| [NCSL Breach Laws](https://www.ncsl.org/technology-and-communication/security-breach-notification-laws) | Scrape | All 50 states + DC |

```typescript
// Scrape NCSL - they have structured state-by-state data
// Check robots.txt first - NCSL is public legislative data
```

#### Compliance Frameworks (200+ pages)

| Source | Access | Data |
|--------|--------|------|
| [NIST CSF 2.0 JSON](https://csrc.nist.gov/extensions/nudp/services/json/csf/download?olirids=all) | Direct download | Full framework in JSON |
| [NIST OSCAL SP 800-53](https://github.com/usnistgov/oscal-content) | GitHub | All controls in JSON/YAML |
| [SOC 2 TSC JSON](https://github.com/CyberRiskGuy/aicpa-soc-tsc-json) | GitHub | Trust Services Criteria |
| [CIS Controls OSCAL](https://www.cisecurity.org/insights/blog/introducing-the-cis-controls-oscal-repository) | GitHub | CIS v8 in OSCAL |

```typescript
// NIST CSF 2.0 - direct JSON download
const nistCsf = await fetch(
  'https://csrc.nist.gov/extensions/nudp/services/json/csf/download?olirids=all'
).then(r => r.json());
```

#### Glossary Terms (300+ pages)

| Source | Access | Data |
|--------|--------|------|
| [NIST Glossary](https://csrc.nist.gov/glossary) | JSON download | 10,000+ terms |
| [MITRE ATT&CK](https://attack.mitre.org/) | STIX JSON | Tactics, techniques terminology |

```typescript
// NIST Glossary - download button on page provides JSON
// 10,000+ cybersecurity terms with definitions, sources
```

#### Competitors/Tools (500+ pages)

| Source | Access | Data |
|--------|--------|------|
| [sbilly/awesome-security](https://github.com/sbilly/awesome-security) | GitHub | 500+ tools in Markdown |
| [MITRE ATT&CK Software](https://attack.mitre.org/software/) | STIX JSON | Threat actor tools |
| G2/Capterra | [Apify scraper](https://apify.com/vivid_astronaut/g2-capterra-scraper) | Ratings, reviews ($$) |

```typescript
// Parse awesome-security README.md to extract tool names/URLs
// Convert markdown lists to JSON programmatically
```

### Automation Scripts

Create `/scripts/sync-pseo-data.ts`:

```typescript
// Run daily via cron or GitHub Actions
import { syncBreaches } from './sync/breaches';
import { syncRansomware } from './sync/ransomware';
import { syncThreatActors } from './sync/threat-actors';
import { syncGlossary } from './sync/glossary';

async function syncAll() {
  console.log('Syncing pSEO data...');

  await Promise.all([
    syncBreaches(),      // HIBP API + HHS scrape
    syncRansomware(),    // Ransomware.live API
    syncThreatActors(),  // MITRE ATT&CK STIX
    syncGlossary(),      // NIST Glossary JSON
  ]);

  console.log('Done! Triggering rebuild...');
}
```

### Update Schedule

| Data Type | Frequency | Trigger |
|-----------|-----------|---------|
| Breaches | Daily | New breaches announced |
| Ransomware victims | Daily | Groups post constantly |
| Threat actors | Quarterly | ATT&CK releases quarterly |
| State laws | Monthly | Legislative changes |
| Compliance | Annually | Framework updates rare |
| Glossary | Quarterly | Terms stable |
| Competitors | Monthly | Market changes |

### Build Strategy (ISR for Scale)

```typescript
// For 2,500+ pages, use ISR instead of full SSG
export const dynamicParams = true;
export const revalidate = 86400; // Revalidate daily

export async function generateStaticParams() {
  // Only pre-generate top 100 pages at build time
  const topBreaches = await getTopBreaches(100);
  return topBreaches.map(b => ({ company: b.slug }));
}
```

---

## Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Set up Swiss Intelligence V3 as homepage at `/`
- [ ] Create sitemap.ts and robots.ts
- [ ] Build metadata factory for dynamic SEO
- [ ] Create shared pSEO page template component

### Phase 2: Quick Wins (Week 3-4)
- [ ] State breach law pages (54 pages, static data)
- [ ] Glossary pages (start with 100 terms)
- [ ] Compliance hub pages (10 frameworks)

### Phase 3: Breach Database (Week 5-8)
- [ ] Integrate HIBP API or scrape State AG data
- [ ] Build breach page template
- [ ] Generate 500+ breach pages
- [ ] Create breach index with search/filter

### Phase 4: Threat Intelligence (Week 9-12)
- [ ] Ransomware group pages (Ransomware.live API)
- [ ] Threat actor pages (MITRE ATT&CK)
- [ ] Internal linking between related entities

### Phase 5: Competitive Content (Week 13-16)
- [ ] Tool comparison pages
- [ ] Alternatives pages
- [ ] Expand glossary to 300+ terms

---

## SEO Infrastructure

### Meta Title Templates

| Page Type | Template |
|-----------|----------|
| Breach | `{Company} Data Breach: What Was Exposed | DarkWebIQ` |
| Ransomware | `{Group} Ransomware: Victims, Tactics & Defense | DarkWebIQ` |
| Threat Actor | `{Actor}: APT Profile & Attack Patterns | DarkWebIQ` |
| State Law | `{State} Data Breach Notification Law | DarkWebIQ` |
| Compliance | `{Framework} Compliance for {Industry} | DarkWebIQ` |
| Compare | `{Tool A} vs {Tool B}: 2026 Comparison | DarkWebIQ` |
| Glossary | `What is {Term}? Definition & Examples | DarkWebIQ` |

### JSON-LD Schema

| Page Type | Schema Types |
|-----------|--------------|
| Breach | Article, Organization, BreadcrumbList |
| Ransomware | Article, Organization, BreadcrumbList |
| Threat Actor | Article, BreadcrumbList |
| State Law | Article, FAQPage, BreadcrumbList |
| Compliance | Service, FAQPage, BreadcrumbList |
| Compare | Article, ItemList, BreadcrumbList |
| Glossary | DefinedTerm, FAQPage, BreadcrumbList |

### Internal Linking Strategy

```
Homepage
├── /breach/ (index) ─────────────────────────┐
│   └── /breach/{company}/ ←──────────────────┼── Cross-link to related breaches
├── /ransomware/ (index) ─────────────────────┤
│   └── /ransomware/{group}/ ←────────────────┼── Link to victim breaches
├── /threat-actor/ (index) ───────────────────┤
│   └── /threat-actor/{actor}/ ←──────────────┼── Link to ransomware groups
├── /breach-laws/ (index) ────────────────────┤
│   └── /breach-laws/{state}/ ←───────────────┼── Link to relevant breaches
├── /compliance/ (index) ─────────────────────┤
│   └── /compliance/{framework}/{industry}/ ──┤
├── /compare/ (index) ────────────────────────┤
│   └── /compare/{comparison}/ ───────────────┤
└── /glossary/ (index)
    └── /glossary/{term}/ ←───────────────────┴── Link terms throughout all pages
```

---

## Success Metrics

| Metric | 6-Month Target | 12-Month Target |
|--------|----------------|-----------------|
| Indexed Pages | 1,500+ | 2,500+ |
| Organic Impressions | 500K/month | 2M/month |
| Organic Clicks | 25K/month | 100K/month |
| Keywords Top 10 | 500+ | 2,000+ |
| Backlinks (earned) | 100+ | 500+ |

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Thin content penalty | Ensure 500+ words unique content per page |
| Data freshness | Daily/weekly automated updates via APIs |
| Build time too long | Use ISR, pre-generate only top 100 pages |
| Duplicate content | Unique intro, stats, recommendations per page |
| API rate limits | Cache aggressively, use multiple sources |

---

## Questions to Resolve

1. **HIBP API access** - Do we pay for API or scrape State AG data instead?
2. **Competitor sensitivity** - How aggressive on `/compare/` and `/alternatives/` pages?
3. **Content creation** - Who writes unique intros for 2,500+ pages? (AI + human review?)
4. **Domain** - What's the production domain for sitemap URLs?

---

## References

### Data Sources
- [HaveIBeenPwned API](https://haveibeenpwned.com/api/v3)
- [HHS OCR Breach Portal](https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf)
- [Ransomware.live API](https://www.ransomware.live/)
- [RansomLook API](https://www.ransomlook.io/)
- [MITRE ATT&CK](https://attack.mitre.org/)
- [IAPP State Breach Laws](https://iapp.org/resources/article/state-data-breach-notification-chart/)

### pSEO Examples
- [HaveIBeenPwned](https://haveibeenpwned.com/PwnedWebsites) - 951 breach pages
- [Snyk Vulnerability DB](https://security.snyk.io) - 1M+ package pages
- [CrowdStrike Adversary Universe](https://www.crowdstrike.com/en-us/adversaries/) - 257 threat actor profiles
- [Tenable CVE Database](https://www.tenable.com/cve) - 333,926 CVE pages

---

*Generated with [Claude Code](https://claude.com/claude-code)*
