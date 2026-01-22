# feat: Interactive Design Theme Preview Site

Build an interactive single-page site that lets users toggle through 11 different design aesthetics from `designs.md` while viewing the landing page copy from `copy.md`.

## Overview

DarkWebIQ has 11 distinct design directions for their landing page. This tool enables rapid visual comparison by allowing instant theme switching while viewing the actual marketing copy. The site must work completely offline as a single HTML file.

## Problem Statement / Motivation

Evaluating design aesthetics requires seeing them applied to real content. Currently, the 11 design directions exist only as written descriptions in `designs.md`. The user needs to:
- Visually compare how each aesthetic applies to their actual copy
- Quickly toggle between options without rebuilding
- Share the preview with stakeholders (single file, no server needed)

## Proposed Solution

A single self-contained HTML file with:
- **11 CSS themes** defined using CSS custom properties
- **Fixed sidebar** for instant theme switching
- **Landing page sections** populated with copy from `copy.md`
- **localStorage persistence** for remembering the selected theme

---

## Technical Approach

### Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     index.html                          │
├─────────────────────────────────────────────────────────┤
│  <head>                                                 │
│    ├── FOUC prevention script (inline)                  │
│    └── <style> All CSS (themes + components)            │
│  </head>                                                │
│  <body data-theme="swiss-intelligence">                 │
│    ├── Theme Sidebar (fixed)                            │
│    │     └── 11 radio buttons with color swatches       │
│    └── Main Content (scrollable)                        │
│          ├── Hero Section                               │
│          ├── Stats Section                              │
│          ├── Brokered Access Section                    │
│          ├── Kill Chain Section                         │
│          ├── Service Comparison Table                   │
│          ├── How It Works (7 steps)                     │
│          ├── Solutions Grid (4 cards)                   │
│          ├── Testimonials                               │
│          └── CTA Section                                │
│    <script> Theme switching logic (inline)              │
│  </body>                                                │
└─────────────────────────────────────────────────────────┘
```

### CSS Custom Properties Structure

Each theme defines 15+ variables:

```css
[data-theme="swiss-intelligence"] {
  /* Backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: #fafafa;
  --bg-tertiary: #f0f0f0;

  /* Text */
  --text-primary: #000000;
  --text-secondary: #333333;
  --text-muted: #666666;

  /* Accent */
  --accent-primary: #ff4400;
  --accent-hover: #cc3300;

  /* Typography */
  --font-heading: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-body: system-ui, -apple-system, sans-serif;

  /* Effects */
  --border-radius: 0px;
  --shadow: none;
}
```

### Theme Definitions (11 Themes)

| # | Theme | Primary Colors | Accent | Typography | Vibe |
|---|-------|---------------|--------|------------|------|
| 1 | **Digital Topography** | Slate Grey, Deep Indigo, Sand | Copper | Sans-serif (geometric) | Exploration, scientific |
| 2 | **Swiss Intelligence** | Black, White | International Orange | Bold Helvetica | Editorial, factual |
| 3 | **Forensic Cleanroom** | Off-white, Silver | Mint/Teal | Modern sans | Sterile, safe |
| 4 | **Bioluminescent Deep** | Navy, Abyssal Blue | Glowing Purple/Cyan | Rounded sans | Organic, mysterious |
| 5 | **Intelligence Dossier** | Off-white, Navy | Vermillion/Gold | Strong serifs | CIA briefing, journalistic |
| 6 | **Public Health** | Clinical white, Sage | Warm Amber | Humanist sans | CDC dashboard |
| 7 | **Art Deco Detective** | Black, Cream, Gold | Burgundy | Geometric Deco | 1920s private eye |
| 8 | **Nature Documentary** | Earth tones, Forest Green | Midnight Blue | Grounded sans | National Geographic |
| 9 | **Mission Control** | Space Blue, Grays | Signal Green/Orange | Monospace accents | NASA/Aviation |
| 10 | **Bright Confidence** | Electric Blue, Coral, Yellow | White | Rounded geometric | Stripe/Mailchimp |
| 11 | **Luxury Concierge** | Cream, Charcoal | Gold, Forest Green | Classic serifs | High-end insurance |

### System Font Stacks (No External Dependencies)

```css
/* Geometric Sans (Swiss, Bright Confidence) */
--font-geometric: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;

/* Humanist Sans (Public Health, Nature) */
--font-humanist: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;

/* Serif (Dossier, Art Deco, Luxury) */
--font-serif: Georgia, Cambria, 'Times New Roman', Times, serif;

/* Monospace (Mission Control accents) */
--font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
```

---

## Implementation Phases

### Phase 1: Foundation

**Tasks:**
- [ ] Create `index.html` with basic HTML structure
- [ ] Add FOUC prevention script in `<head>`
- [ ] Define base CSS reset and layout (sidebar + main content)
- [ ] Implement theme switching JavaScript
- [ ] Add localStorage persistence

**Files:**
- `index.html` (single file)

**Success Criteria:**
- Page loads with default theme
- Theme can be changed via JavaScript console
- Selection persists across page reloads

### Phase 2: Theme Definitions

**Tasks:**
- [ ] Define CSS variables for all 11 themes
- [ ] Create theme selector sidebar with radio buttons
- [ ] Add color swatches for visual preview
- [ ] Style active theme indicator

**Success Criteria:**
- All 11 themes selectable from sidebar
- Each theme has distinct, recognizable aesthetic
- Current theme clearly indicated

### Phase 3: Content Sections

**Tasks:**
- [ ] Build Hero section with headline and CTA
- [ ] Build Stats section (3 metrics)
- [ ] Build Brokered Access explanation section
- [ ] Build Kill Chain diagram section
- [ ] Build Service Comparison table
- [ ] Build How It Works section (7 steps)
- [ ] Build Solutions grid (4 cards)
- [ ] Build Testimonials section
- [ ] Build CTA section

**Success Criteria:**
- All sections display correctly
- Content matches `copy.md`
- Sections adapt to all themes

### Phase 4: Polish & Responsive

**Tasks:**
- [ ] Add responsive styles for mobile (sidebar collapses)
- [ ] Add hover/focus states for interactive elements
- [ ] Add smooth theme transition (0.2s on colors)
- [ ] Test all 11 themes at all breakpoints
- [ ] Validate contrast ratios for accessibility

**Success Criteria:**
- Works on mobile (375px) through desktop (1920px)
- Meets WCAG AA contrast requirements
- Keyboard navigable

---

## Acceptance Criteria

### Core Functionality
- [ ] Single HTML file under 500KB
- [ ] Works via `file://` protocol (no server required)
- [ ] All 11 themes selectable and visually distinct
- [ ] Theme persists across browser sessions
- [ ] No flash of unstyled content on load

### Theme Selector
- [ ] Fixed sidebar visible on desktop
- [ ] Collapsible/overlay on mobile
- [ ] Color swatches preview each theme
- [ ] Active theme clearly indicated
- [ ] Keyboard accessible (Tab, Arrow, Enter)

### Content
- [ ] Hero with headline: "Stay Off Tomorrow's Leak Site"
- [ ] Stats: 72 interceptions, $50MM prevented, 690K+ protected
- [ ] How It Works: 7 steps clearly displayed
- [ ] Solutions: 4 product cards
- [ ] Testimonials: 4+ quotes with attribution
- [ ] CTA section with prominent button

### Design Quality
- [ ] Each theme matches description from `designs.md`
- [ ] Typography appropriate per theme
- [ ] Colors consistent throughout each theme
- [ ] WCAG AA contrast compliance

---

## MVP Implementation

### index.html

```html
<!DOCTYPE html>
<html lang="en" data-theme="swiss-intelligence">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DarkWebIQ Design Preview</title>

  <!-- FOUC Prevention -->
  <script>
    (function() {
      const theme = localStorage.getItem('dwiq-preview-theme');
      if (theme) document.documentElement.dataset.theme = theme;
    })();
  </script>

  <style>
    /* === RESET === */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* === THEME VARIABLES === */
    :root {
      --sidebar-width: 280px;
    }

    /* Theme 1: Digital Topography */
    [data-theme="digital-topography"] {
      --bg-primary: #1a1a2e;
      --bg-secondary: #16213e;
      --bg-tertiary: #0f3460;
      --text-primary: #e8e8e8;
      --text-secondary: #b8b8b8;
      --text-muted: #888888;
      --accent-primary: #b87333;
      --accent-hover: #d4894a;
      --font-heading: system-ui, sans-serif;
      --font-body: system-ui, sans-serif;
      --border-radius: 4px;
    }

    /* Theme 2: Swiss Intelligence */
    [data-theme="swiss-intelligence"] {
      --bg-primary: #ffffff;
      --bg-secondary: #fafafa;
      --bg-tertiary: #f5f5f5;
      --text-primary: #000000;
      --text-secondary: #333333;
      --text-muted: #666666;
      --accent-primary: #ff4400;
      --accent-hover: #e63e00;
      --font-heading: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      --font-body: system-ui, sans-serif;
      --border-radius: 0px;
    }

    /* ... continue for all 11 themes ... */

    /* === BASE STYLES === */
    body {
      font-family: var(--font-body);
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.6;
      transition: background-color 0.2s, color 0.2s;
    }

    /* === LAYOUT === */
    .app-layout {
      display: flex;
      min-height: 100vh;
    }

    .theme-sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: var(--sidebar-width);
      height: 100vh;
      background: var(--bg-secondary);
      border-right: 1px solid var(--text-muted);
      padding: 1.5rem;
      overflow-y: auto;
    }

    .main-content {
      margin-left: var(--sidebar-width);
      flex: 1;
    }

    /* === THEME SELECTOR === */
    .theme-option {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      margin-bottom: 0.5rem;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: background 0.15s;
    }

    .theme-option:hover {
      background: var(--bg-tertiary);
    }

    .theme-option input[type="radio"] {
      accent-color: var(--accent-primary);
    }

    .color-swatch {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid var(--text-muted);
    }

    /* === SECTIONS === */
    .hero { /* styles */ }
    .stats { /* styles */ }
    /* ... etc ... */

    /* === RESPONSIVE === */
    @media (max-width: 768px) {
      .theme-sidebar {
        transform: translateX(-100%);
        z-index: 100;
      }
      .theme-sidebar.open {
        transform: translateX(0);
      }
      .main-content {
        margin-left: 0;
      }
      .mobile-toggle {
        display: block;
      }
    }
  </style>
</head>
<body>
  <div class="app-layout">
    <!-- Theme Sidebar -->
    <aside class="theme-sidebar">
      <h2>Design Themes</h2>
      <div class="theme-list" role="radiogroup">
        <label class="theme-option">
          <input type="radio" name="theme" value="digital-topography">
          <span class="color-swatch" style="background: linear-gradient(135deg, #1a1a2e 50%, #b87333 50%)"></span>
          <span>Topography</span>
        </label>
        <!-- ... 10 more themes ... -->
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <section class="hero">
        <h1>Stay Off Tomorrow's Leak Site</h1>
        <p>Ransomware gangs don't break in—they buy their way in...</p>
        <a href="#" class="btn-primary">Book a Call</a>
      </section>

      <section class="stats">
        <div class="stat"><span class="number">72</span><span class="label">Ransomware Attack Interceptions</span></div>
        <div class="stat"><span class="number">$50MM</span><span class="label">Losses Prevented</span></div>
        <div class="stat"><span class="number">690,000+</span><span class="label">Organizations Protected</span></div>
      </section>

      <!-- ... more sections ... -->
    </main>
  </div>

  <script>
    const STORAGE_KEY = 'dwiq-preview-theme';
    const DEFAULT_THEME = 'swiss-intelligence';

    function setTheme(theme) {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem(STORAGE_KEY, theme);
      document.querySelectorAll('input[name="theme"]').forEach(input => {
        input.checked = input.value === theme;
      });
    }

    // Initialize
    const savedTheme = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    setTheme(savedTheme);

    // Event listeners
    document.querySelectorAll('input[name="theme"]').forEach(input => {
      input.addEventListener('change', () => setTheme(input.value));
    });
  </script>
</body>
</html>
```

---

## References

### Internal References
- Design specifications: `designs.md:1-184`
- Landing page copy: `copy.md:1-377`

### External References
- [CSS Custom Properties Theming - CSS-Tricks](https://css-tricks.com/css-custom-properties-theming/)
- [The Perfect Theme Switch](https://www.aleksandrhovhannisyan.com/blog/the-perfect-theme-switch/)
- [Modern Font Stacks](https://modernfontstacks.com/)
- [daisyUI Theme Controller](https://daisyui.com/components/theme-controller/)

### Best Practices Applied
- FOUC prevention via inline script in `<head>`
- `data-theme` attribute on `<html>` for CSS cascade
- Semantic color variable names
- localStorage with graceful fallback
- System font stacks for offline support
- WCAG AA contrast compliance target

---

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Default theme | Swiss Intelligence | Clean, professional, safe first impression |
| Image handling | CSS-only decorative elements | Enables true offline support without bloating file size |
| Sidebar behavior on mobile | Collapsible overlay | Preserves screen real estate while keeping themes accessible |
| Theme transitions | 0.2s on color properties | Fast enough for comparison, smooth enough for polish |
| Font loading | System font stacks only | Zero external dependencies, instant loading |
