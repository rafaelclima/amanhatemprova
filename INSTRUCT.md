# Amanhã Tem Prova — Guia de Desenvolvimento

Este documento orienta a criação de novas páginas de revisão para o projeto "Amanhã Tem Prova", mesclando as diretrizes do prompt original com a identidade visual estabelecida.

---

## 1. Estrutura de Diretórios

```
/amanhatemprova
├── index.html              # Página inicial (seleção de alunas)
├── favicon.svg             # Favicon do projeto
├── Lara/
│   └── index.html          # Página de materiais da Lara
├── Liz/
│   └── index.html          # Página de materiais da Liz
└── [disciplina]/
    └── [assunto]/
        ├── index.html      # Página de revisão
        ├── styles.css      # Estilos específicos
        └── script.js       # Lógica (quiz, simulado, etc)
```

---

## 2. Identidade Visual

### 2.1 Paleta de Cores

```css
:root {
  --primary: #6366f1;       /* Roxo indigo */
  --primary-dark: #4f46e5; /* Roxo mais escuro */
  --secondary: #f472b6;     /* Rosa */
  --accent: #22d3ee;       /* Ciano */
  --dark: #1e293b;         /* Azul escuro (fundo principal) */
  --light: #f8fafc;        /* Branco suave (texto) */
}
```

### 2.2 Tipografia

- **Fonte principal**: Nunito (Google Fonts)
- **Peso**: 400 (regular), 600 (semi-bold), 700 (bold), 800 (extra-bold)
- **Link**: `https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap`

### 2.3 Fundo e Efeitos

- **Background**: Gradiente escuro moderno
  ```css
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  background-attachment: fixed;
  ```

- **Padrão de fundo** (opcional,animado):
  ```css
  .bg-pattern::before {
    background-image: 
      radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(244, 114, 182, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%);
    animation: pulse 8s ease-in-out infinite;
  }
  ```

- **Formas flutuantes** (opcional):
  ```css
  .shape {
    position: absolute;
    border-radius: 50%;
    animation: float 20s ease-in-out infinite;
  }
  ```

### 2.4 Componentes Visuais

#### Cards
```css
.card {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(99, 102, 241, 0.6);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(99, 102, 241, 0.2);
}
```

#### Botões
```css
.btn {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #fff;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: all 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}
```

#### Textos com Gradiente
```css
.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #f472b6 50%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 2.5 Animações

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### 2.6 Responsividade

```css
@media (max-width: 600px) {
  .container { padding: 1rem; }
  .grid { flex-direction: column; align-items: center; }
  .card { width: 100%; max-width: 300px; }
}
```

---

## 3. Estrutura HTML Base

Para novas páginas de revisão, use esta estrutura:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Disciplina] - [Assunto] | Amanhã Tem Prova</title>
  <link rel="icon" type="image/svg+xml" href="../../favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="floating-shapes">
    <div class="shape"></div>
    <div class="shape"></div>
    <div class="shape"></div>
  </div>

  <div class="container">
    <!-- Header com voltar -->
    <a href="../../index.html" class="back-btn">
      <svg>...</svg>
      Voltar
    </a>

    <!-- Título da página -->
    <div class="header">
      <h1 class="gradient-text">[Assunto]</h1>
      <p class="subtitle">[Disciplina] • [Ano/Série]</p>
    </div>

    <!-- Seções: Resumo, Quiz, Simulado -->
    <nav class="tabs">...</nav>
    <section id="resumo" class="tab-content">...</section>
    <section id="quiz" class="tab-content">...</section>
    <section id="simulado" class="tab-content">...</section>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 4. Diretrizes Pedagógicas (do prompt original)

### 4.1 Estrutura Obrigatória

Cada página de revisão deve conter:

1. **Resumo** — Explicação progressiva, linguagem adequada ao nível, exemplos práticos
2. **Quiz** — Mínimo 50 questões, seleção aleatória de 10, feedback imediato com explicação
3. **Simulado** — 10 questões, correção completa ao final
4. **Gamificação** — Para Fundamental: interação (drag/drop, associação ou classificação)

### 4.2 Requisitos

- **Questões**: Todas com explicação completa
- **Resultado Final**: Acertos, erros, percentual, mensagem personalizada
- **Linguagem**: Adaptar ao nível do aluno (Fundamental = mais lúdico, Médio = mais sóbrio)
- **Misturar**: Teoria + prática

### 4.3 Níveis de Ensino

| Nível | Abordagem |
|-------|-----------|
| Fundamental I | Lúdico, cores mais vibrantes, emojis, gamificação |
| Fundamental II | Moderado, equilibrio entre lúdico e profissional |
| Ensino Médio | Profissional, design sóbrio, foco em conteúdo |

---

## 5. Fluxo de Desenvolvimento

Siga as etapas do prompt original:

1. **Coleta de Dados**: Nível, série, disciplina, assuntos, objetivo
2. **Planejamento**: Estrutura, componentes, estratégia pedagógica
3. **HTML**: Estrutura completa (sem CSS/JS)
4. **CSS**: Estilização seguindo esta identidade visual
5. **JavaScript**: Lógica (quiz, simulado, gamificação)
6. **Conteúdo**: Resumo e questões pedagógicas
7. **Revisão Final**: Integração e testes

---

## 6. Exemplos de Uso

### Cor por Tipo de Aluno

Para Lara (Ensino Médio):
- Usar gradiente roxo/violeta: `#6366f1` → `#8b5cf6`

Para Liz (Ensino Fundamental):
- Usar gradiente rosa/laranja: `#f472b6` → `#f97316`

### Ícones Sugeridos

| Disciplina | Emoji |
|------------|-------|
| Matemática | 📐 ➕ 📊 |
| História | 🏛️ 📜 ⚔️ |
| Ciências | 🔬 🌿 🧬 |
| Português | 📖 ✏️ 📝 |
| Geografia | 🌍 🗺️ 🌋 |

---

## 7. Meta Tags Obrigatórias

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Revisão interativa de [Disciplina] — [Assunto] para [Ano] do [Nível]." />
```

---

## 8. Arquivos de Referência

- `index.html` — Página inicial com seleção de alunas
- `Lara/index.html` — Página de materiais da Lara
- `Liz/index.html` — Página de materiais da Liz
- `favicon.svg` — Favicon do projeto
- `.github/workflows/deploy.yml` — Workflow do GitHub Pages

---

**Mantenha sempre a identidade visual consistente com este guia ao criar novas páginas de revisão.**