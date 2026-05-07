# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## Overview

**Amanhã Tem Prova** — A static study platform for two students: **Lara** (age 15, high school) and **Liz** (age 9, elementary school). The site is pure HTML/CSS/JS with no build step, deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Architecture

```
index.html              → Landing page (student selection: Lara / Liz)
Lara/                   → Lara's study materials
  index.html            → Subject list (Matemática, Física, Biologia)
  Matematica/           → Subject index → topic pages
  Fisica/               → Subject index → topic pages
  Biologia/             → Subject index → topic pages
Liz/                    → Liz's study materials
  index.html            → Subject cards linking directly to topic pages
  matematica/           → Topic pages
  historia/             → Topic pages
  geografia/            → Topic pages
site/                   → Secondary/alternate landing page
.github/workflows/      → GitHub Pages deploy (pushes on merge to main)
```

### Navigation hierarchy

- **Lara**: Home → Lara index → Subject index (e.g., Matemática) → Topic page (e.g., gandezas_medidas)
- **Liz**: Home → Liz index → Topic page directly (subject index pages are skipped; cards link straight to topics)

### Topic page structure (leaf pages)

Each topic is a directory containing:
- `index.html` — The study page with summary content, quiz, and/or simulado
- `prompt.md` — Orchestrator prompt used to generate the page (references `@orchestrator.md`)
- `.gitignore` — Ignores `.claude/` directory
- Optional: `script.js`, `styles.css` (for simpler pages like Liz's)
- Optional: `assets/` directory (for newer pages with design-system CSS like `assets/css/base.css`, `assets/css/components.css`, `assets/js/app.js`)

## Two Page Generations

### Generation 1 (older pages — most Lara/Liz pages)
- Inline `<style>` in `index.html`
- Inline `<script>` or separate `script.js` + `styles.css`
- Nunito font, dark gradient background (`#0f172a → #1e293b`), glassmorphism cards
- Lara: purple/indigo accent (`#6366f1`), Liz: pink/orange accent (`#f472b6`)

### Generation 2 (newer pages — e.g., `Lara/Matematica/gandezas_medidas/`)
- External CSS: `assets/css/base.css`, `assets/css/components.css`
- External JS: `assets/js/app.js` (loaded as `type="module"`)
- Inter font, design-system CSS variables (`--ds-*` tokens)
- BEM-style class names (e.g., `ds-header`, `ds-nav__brand`, `ds-card`)
- Skip link, ARIA attributes, semantic HTML

### Style conventions (both generations)
- All pages are self-contained — no shared external stylesheets across pages
- Portuguese language (`lang="pt-BR"`), meta viewport for mobile
- Relative paths for internal links (e.g., `../index.html`, `../../favicon.svg`)

## Deployment

GitHub Pages deploys automatically on push to `main` via `.github/workflows/deploy.yml`. Repository is auto-deployed — commit directly to `main` when content is ready.

## Adding New Content

1. Create a new directory under the correct student/subject/ path
2. Copy an existing `index.html` from the same generation as a template
3. Update navigation links in parent index pages (subject count badges, topic cards)
4. Include a `prompt.md` with orchestrator instructions for reproducibility
5. Add `.gitignore` ignoring `.claude/`

**Important**: When adding a new topic page, update the "X assunto(s) disponível(is)" count in the parent subject's `index.html`, and ensure back-button links use the correct relative path depth.
