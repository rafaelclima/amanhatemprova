# AGENTS.md — Amanhã Tem Prova

Static study platform for **Lara** (15, high school) and **Liz** (9, elementary). Pure HTML/CSS/JS, **no build step**, no tests, no lint/typecheck.

## Commands

No package scripts, no dev server. The only operation is committing to `master` — GitHub Pages auto-deploys via `.github/workflows/deploy.yml`.

## Architecture

```
index.html              → Landing → Lara/ or Liz/
Lara/index.html         → Subject list (Matemática, Física, Biologia, Português, Literatura)
Lara/{Materia}/         → Subject index → topic leaf pages
Liz/index.html          → Cards link directly to topic pages (no subject index)
template/               → Gen 2 topic page template
```

- **Lara nav depth**: root → Lara/ → subject/ → topic/index.html
- **Liz nav depth**: root → Liz/ → topic/index.html (no subject index)
- All pages `lang="pt-BR"`, relative paths only.

## Two Page Generations

| Gen | Location | Style | Font |
|-----|----------|-------|------|
| 1 (old) | Most Lara/Liz pages | Inline `<style>`, dark gradient `#0f172a→#1e293b`, glassmorphism | Nunito |
| 2 (new) | Most topic pages | `assets/css/base.css` + `components.css`, `assets/js/app.js` (ES module), BEM `ds-*`, ARIA, skip links | Inter |

Gen 1 accent: Lara purple `#6366f1`, Liz pink `#f472b6`.

## Topic Page Features (Gen 2)

Each Gen 2 topic page has 3 sections toggled by JS hash routing (`assets/js/app.js`):

```
section#resumo    → visible by default (study content)
section#quiz      → hidden by default, activated via JS
section#simulado  → hidden by default, activated via JS
```

### Resumo (study content)

- Sections with `.ds-study-block` for each subtopic
- `.ds-highlight.ds-highlight--formula` for key formulas/concepts
- `<details class="ds-collapsible">` for "Erros comuns & pegadinhas"
- Checklist + final tip at the end

### Quiz

- Loads questions from `data/questions.json` via `fetch()`
- Shuffles and picks 10 random questions
- Multiple choice; shows correct/incorrect + explanation after each answer
- Results screen with per-subject performance breakdown

### Simulado

- 45-minute countdown timer with pause/resume
- Question navigator bar (numbered buttons)
- Free navigation between questions; saves to `localStorage`
- Results with per-subject breakdown, auto-finish when timer hits 0

**Important**: Quiz/Simulado will not work when opened via `file://` protocol (CORS). The app shows a dev warning. Use a local HTTP server or GitHub Pages.

### `data/questions.json` format

```json
{
  "serie": "...",
  "disciplina": "...",
  "assuntos": ["..."],
  "questoes": [
    {
      "id": 1,
      "assunto": "subtopic name",
      "enunciado": "question text",
      "alternativas": [
        { "letra": "A", "texto": "option A", "correta": false },
        { "letra": "B", "texto": "option B", "correta": true }
      ],
      "explicacao": "explanation text"
    }
  ]
}
```

## Adding New Content

1. Create `student/subject/topic_name/` directory
2. Copy `index.html` from `template/` (Gen 2) or same-generation topic
3. Copy `assets/` from template (`css/base.css`, `css/components.css`, `js/app.js`)
4. Create `data/questions.json` with at least 10 questions
5. Include `prompt.md` (references `@orchestrator.md`) + `.gitignore` (ignores `/prompt.md` and `/.claude`)
6. **Update parent index page**: fix "X assunto(s) disponível(is)" count and add topic link card
7. **Verify relative paths**: back button in topic page → `../index.html` (subject index), assets at `assets/css/*`

## Deployment

Push to `master` → GitHub Actions (`.github/workflows/deploy.yml`) deploys to Pages. Commit directly to `master`.

## .gitignore (root)

Ignores `site/`, `opencode.json`, `prompt.md`. Topic `.gitignore` adds `/.claude`.
