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

- **Nav depth**: root → {Lara|Liz}/ → subject/ → topic/index.html
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

## ⚠️ MUST: Always Use the Template

**Every new topic page MUST start from `template/`.** This is the only source of truth for new content.

```
template/
├── index.html              → Copy as topic/index.html, then replace content
├── assets/
│   ├── css/base.css        → Copy as topic/assets/css/base.css
│   ├── css/components.css  → Copy as topic/assets/css/components.css
│   └── js/app.js           → Copy as topic/assets/js/app.js (Gen 2) OR
│                              replace with custom script.js (Liz Gen 1)
├── data/
│   └── questions.json      → Copy as topic/data/questions.json, replace questions
├── prompt.md               → Copy as topic/prompt.md, fill placeholders
└── .claude/                → Copy as topic/.claude/
```

Steps:
1. `mkdir -p student/subject/topic_name/assets/css student/subject/topic_name/assets/js student/subject/topic_name/data`
2. Copy `template/index.html` → `topic/index.html`
3. Copy `template/assets/css/base.css` → `topic/assets/css/base.css`
4. Copy `template/assets/css/components.css` → `topic/assets/css/components.css`
5. Copy `template/assets/js/app.js` → `topic/assets/js/app.js` (Lara Gen 2 topics)
6. Copy `template/data/questions.json` → `topic/data/questions.json`, replace with 10+ questions
7. Copy `template/prompt.md` → `topic/prompt.md`, fill `[PLACEHOLDERS]`
8. Copy `template/.claude/` → `topic/.claude/` (dev tooling config, gitignored)
9. Create `topic/.gitignore`:
   ```
   /prompt.md
   /.claude
   ```
10. **Update parent index page**: fix "X assunto(s) disponível(is)" count and add topic link card
11. **Verify relative paths**: back button in topic page → `../index.html` (subject index), assets at `assets/css/*`

### Liz Variation

For Liz topic pages (Gen 1, child-friendly), **still start from the template** — then adapt:
- `index.html`: replace with Liz inline-style tab-nav pattern (Nunito, dark gradient, glassmorphism, 4 tabs: Resumo/Quiz/Simulado/Jogo)
- `assets/css/`: remove; all styles go inline in `index.html` or a single `styles.css`
- `assets/js/app.js`: replace with custom `script.js` (questions embedded, no external JSON, includes game section)
- `data/questions.json`: remove; embed questions directly in `script.js`
- Keep `prompt.md`, `.claude/`, `.gitignore` from template

**Quiz behavior**: Questions appear one at a time. User clicks an answer → immediate feedback shows (correct/incorrect + explanation) before advancing. Progress indicator shows current question. After last question, results screen appears. See `script.js` → `responderQuiz()` / `proximaQuestaoQuiz()`.

**Simulado behavior**: All 10 questions shown at once with "Finalizar" button. No immediate feedback — results appear after submission. See `finalizarSimulado()`.

**Jogo behavior**: Timed-response game. Random multiplication questions with score, streak counter, and points system. See `responderJogo()`.

## Deployment

Push to `master` → GitHub Actions (`.github/workflows/deploy.yml`) deploys to Pages. Commit directly to `master`.

## .gitignore (root)

Ignores `site/`, `opencode.json`, `prompt.md`. Topic `.gitignore` adds `/.claude`.
