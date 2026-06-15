# AGENTS.md — Amanhã Tem Prova

Static study platform for **Lara** (15, high school) and **Liz** (9, elementary). Pure HTML/CSS/JS, **no build step**, no tests, no lint/typecheck.

## Commands

There are no dev commands, package scripts, or tests. The only operation is committing to `main` — GitHub Pages auto-deploys via `.github/workflows/deploy.yml`.

## Architecture

```
index.html              → Landing → Lara/ or Liz/
Lara/index.html         → Subject list (Matemática, Física, Biologia, Português)
Lara/{Materia}/         → Subject index → topic leaf pages
Liz/index.html          → Cards link directly to topic pages (no subject index)
template/               → Gen 2 topic page template (assets/css/ + assets/js/)
```

- **Lara nav depth**: root → Lara/ → subject/ → topic/index.html
- **Liz nav depth**: root → Liz/ → topic/index.html (skips subject index)
- All pages are self-contained (inline styles Gen 1, external `assets/css/*` Gen 2), `lang="pt-BR"`, relative paths only.

## Two Page Generations

| Gen | Location | Style | Font |
|-----|----------|-------|------|
| 1 | Most existing Lara/Liz pages | Inline `<style>`, dark gradient `#0f172a→#1e293b`, glassmorphism | Nunito |
| 2 | Newer pages (e.g., `gandezas_medidas/`) | `assets/css/base.css` + `components.css`, `assets/js/app.js` (module), BEM `ds-*` classes, ARIA, skip links | Inter |

Gen 1 accent: Lara purple `#6366f1`, Liz pink `#f472b6`.

## Adding New Content

1. Create `student/subject/topic_name/` directory
2. Copy `index.html` from same-generation topic (or `template/` for Gen 2)
3. Include `prompt.md` (references `@orchestrator.md`) + `.gitignore` (ignores `/prompt.md` and `/.claude`)
4. **Update parent index page**: fix "X assunto(s) disponível(is)" count and add topic link card
5. **Verify relative paths**: back buttons, favicon, and asset links must match the new depth

## Deployment

Push to `main` → workflow `pages build and deployment` triggers. No manual steps. Commit directly to `main`.

## .gitignore (root)

Ignores `site/`, `opencode.json`, `prompt.md` (dev artifacts). Topic `.gitignore` adds `/.claude`.
