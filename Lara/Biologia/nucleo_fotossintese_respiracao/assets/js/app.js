/**
 * 📘 APP.JS - Core Routing & State Management
 * Este arquivo gerencia navegação, estado e expõe hooks para injeção de conteúdo pela LLM.
 */

const DS = {
  state: {
    currentSection: 'resumo',
    quiz: { index: 0, total: 0, answered: [], score: 0, locked: false },
    exam: { timeLeft: 2700, timerId: null, answers: {}, currentIndex: 0, total: 0, paused: false }
  },

  init() {
    this.setupRouter();
    this.setupReadingProgress();
    this.setupExamTimer();
    this.restoreProgress();
    this.initQuiz();
    this.initExam();
    window.addEventListener('hashchange', () => this.handleRouteChange());
  },

  setupRouter() {
    const hash = window.location.hash.slice(1) || 'resumo';
    this.navigateTo(hash, false);
  },

  navigateTo(sectionId, pushState = true) {
    if (!['resumo', 'quiz', 'simulado'].includes(sectionId)) sectionId = 'resumo';
    this.state.currentSection = sectionId;

    document.querySelectorAll('.ds-section').forEach(sec => sec.hidden = sec.id !== sectionId);
    document.querySelectorAll('.ds-nav__link').forEach(link => {
      const isActive = link.dataset.section === sectionId;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });

    if (pushState) history.pushState({}, '', `#${sectionId}`);
    this.focusActiveSection();
  },

  focusActiveSection() {
    const target = document.getElementById(this.state.currentSection);
    if (target) target.focus({ preventScroll: true });
  },

  setupReadingProgress() {
    const bar = document.querySelector('.ds-progress-bar__fill');
    if (!bar) return;
    const update = () => {
      const scroll = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const percent = max > 0 ? (scroll / max) * 100 : 0;
      bar.style.width = `${Math.min(100, percent)}%`;
      bar.parentElement.setAttribute('aria-valuenow', Math.round(percent));
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  },

  setupExamTimer() {
    const timerEl = document.getElementById('exam-timer');
    if (!timerEl) return;

    this.startTimer = (seconds = this.state.exam.timeLeft) => {
      if (this.state.exam.timerId) clearInterval(this.state.exam.timerId);
      this.state.exam.timeLeft = seconds;

      this.state.exam.timerId = setInterval(() => {
        if (this.state.exam.paused) return;
        if (this.state.exam.timeLeft <= 0) {
          clearInterval(this.state.exam.timerId);
          this.finishExam();
          return;
        }
        this.state.exam.timeLeft--;
        const m = Math.floor(this.state.exam.timeLeft / 60);
        const s = this.state.exam.timeLeft % 60;
        timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        timerEl.classList.toggle('warning', this.state.exam.timeLeft < 300);
        timerEl.classList.toggle('critical', this.state.exam.timeLeft < 60);
      }, 1000);
    };

    document.getElementById('exam-pause')?.addEventListener('click', () => {
      this.state.exam.paused = !this.state.exam.paused;
      document.getElementById('exam-pause').textContent = this.state.exam.paused ? 'Continuar' : 'Pausar';
    });

    document.getElementById('exam-finish')?.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja finalizar o simulado?')) this.finishExam();
    });
  },

  finishExam() {
    clearInterval(this.state.exam.timerId);
    alert('Simulado finalizado! Em produção, redirecionaria para o painel de revisão.');
    localStorage.removeItem('ds_exam_progress');
  },

  // ========== QUIZ LOGIC ==========
  async initQuiz() {
    if (!document.getElementById('quiz')) return;
    await this.loadQuestions();
    this.startQuiz();
  },

  async loadQuestions() {
    try {
      if (window.location.protocol === 'file:') {
        this.showDevWarning();
        this.questions = [];
        return;
      }
      const res = await fetch('data/questions.json');
      const data = await res.json();
      this.questions = data.questions;
    } catch (e) {
      console.error('Erro ao carregar questões:', e);
      this.questions = [];
    }
  },

  showDevWarning() {
    const existing = document.getElementById('dev-warning');
    if (existing) return;
    const warn = document.createElement('div');
    warn.id = 'dev-warning';
    warn.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#ff9800;color:#000;padding:8px;text-align:center;font-size:12px;z-index:9999;';
    warn.textContent = '⚠️ Modo desenvolvimento (file://): as questões são carregadas via servidor local. Use um servidor HTTP.';
    document.body.appendChild(warn);
  },

  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  startQuiz() {
    if (!this.questions || this.questions.length === 0) return;
    const shuffled = this.shuffleArray(this.questions).slice(0, 10);
    this.state.quiz = { index: 0, total: shuffled.length, questions: shuffled, answered: [], score: 0, locked: false };
    this.renderQuizQuestion();
    document.getElementById('quiz-next')?.addEventListener('click', () => this.nextQuizQuestion());
  },

  renderQuizQuestion() {
    const { quiz } = this.state;
    if (!quiz.questions || quiz.index >= quiz.total) {
      this.showQuizResults();
      return;
    }
    const q = quiz.questions[quiz.index];
    const container = document.getElementById('current-question');
    if (!container) return;

    const optionsHtml = q.alternativas.map(alt =>
      `<button class="ds-option-btn" data-letter="${alt.id}" role="radio" aria-checked="false">${alt.id}) ${alt.texto}</button>`
    ).join('');

    container.innerHTML = `
      <div class="ds-question-header">
        <span class="ds-question-number">Questão ${quiz.index + 1} de ${quiz.total}</span>
        <span class="ds-question-topic">${q.assunto}</span>
      </div>
      <p class="ds-question-text">${q.enunciado}</p>
      <div class="ds-options" role="radiogroup" aria-label="Alternativas">
        ${optionsHtml}
      </div>
      <div class="ds-feedback-panel" id="quiz-feedback" aria-live="assertive" hidden></div>
      <div style="margin-top: var(--space-6); text-align: right;">
        <button class="ds-btn ds-btn--primary" id="quiz-next" disabled>Próxima Questão</button>
      </div>
    `;

    container.querySelectorAll('.ds-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleQuizAnswer(e, q));
    });
  },

  handleQuizAnswer(e, question) {
    if (this.state.quiz.locked) return;
    this.state.quiz.locked = true;

    const selectedBtn = e.target;
    const selectedLetter = selectedBtn.dataset.letter;
    const isCorrect = selectedLetter === question.correta;

    selectedBtn.classList.add('selected');
    selectedBtn.classList.add(isCorrect ? 'correct' : 'incorrect');

    if (!isCorrect) {
      const correctBtn = selectedBtn.parentElement.querySelector(`[data-letter="${question.correta}"]`);
      correctBtn?.classList.add('correct');
    }

    this.state.quiz.answered.push({
      questionId: question.id,
      selected: selectedLetter,
      correct: isCorrect
    });

    if (isCorrect) this.state.quiz.score++;

    const feedback = document.getElementById('quiz-feedback');
    if (feedback) {
      feedback.hidden = false;
      feedback.className = `ds-feedback-panel ${isCorrect ? 'ds-feedback-panel--correct' : 'ds-feedback-panel--incorrect'}`;
      feedback.innerHTML = isCorrect
        ? `<strong>Correto!</strong> ${question.explicacao}`
        : `<strong>Incorreto.</strong> A resposta correta é ${question.correta}. ${question.explicacao}`;
    }

    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.focus();
    }
  },

  nextQuizQuestion() {
    this.state.quiz.index++;
    this.state.quiz.locked = false;
    this.renderQuizQuestion();
  },

  showQuizResults() {
    const container = document.getElementById('current-question');
    const { quiz } = this.state;
    if (!container) return;

    const percent = Math.round((quiz.score / quiz.total) * 100);
    container.innerHTML = `
      <div class="ds-results">
        <h2>Resultado do Quiz</h2>
        <p class="ds-score">${quiz.score}/${quiz.total} questões corretas (${percent}%)</p>
        <p>${percent >= 70 ? 'Parabéns! Você mandou bem!' : 'Continue estudando para melhorar!'}</p>
        <button class="ds-btn ds-btn--primary" id="quiz-restart">Refazer Quiz</button>
      </div>
    `;

    document.getElementById('quiz-restart')?.addEventListener('click', () => this.startQuiz());
  },

  // ========== SIMULADO LOGIC ==========
  async initExam() {
    if (!document.getElementById('simulado')) return;
    if (!this.questions) await this.loadQuestions();
    this.startExam();
  },

  startExam() {
    const shuffled = this.shuffleArray(this.questions).slice(0, 10);
    this.state.exam = {
      ...this.state.exam,
      questions: shuffled,
      currentIndex: 0,
      total: shuffled.length,
      answers: {},
      paused: false
    };
    this.renderExamNavigator();
    this.renderExamQuestion();

    const timerEl = document.getElementById('exam-timer');
    if (timerEl) this.startTimer(this.state.exam.timeLeft);

    document.getElementById('exam-pause')?.addEventListener('click', () => {
      this.state.exam.paused = !this.state.exam.paused;
      const btn = document.getElementById('exam-pause');
      if (btn) btn.textContent = this.state.exam.paused ? 'Continuar' : 'Pausar';
    });

    document.getElementById('exam-finish')?.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja finalizar o simulado?')) this.finishExam();
    });
  },

  renderExamNavigator() {
    const nav = document.getElementById('question-navigator');
    const { exam } = this.state;
    if (!nav || !exam.questions) return;

    nav.innerHTML = exam.questions.map((q, i) =>
      `<button class="ds-question-nav__btn" data-index="${i}" aria-label="Questão ${i + 1}">${i + 1}</button>`
    ).join('');

    nav.querySelectorAll('.ds-question-nav__btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index);
        this.state.exam.currentIndex = idx;
        this.renderExamQuestion();
      });
    });
  },

  renderExamQuestion() {
    const container = document.getElementById('exam-question-view');
    const { exam } = this.state;
    if (!container || !exam.questions) return;

    const q = exam.questions[exam.currentIndex];
    const savedAnswer = exam.answers[q.id];

    const optionsHtml = q.alternativas.map(alt => {
      const isSelected = savedAnswer === alt.id;
      return `<button class="ds-option-btn ${isSelected ? 'selected' : ''}" data-letter="${alt.id}" role="radio" aria-checked="${isSelected}">${alt.id}) ${alt.texto}</button>`;
    }).join('');

    container.innerHTML = `
      <div class="ds-question-header">
        <span class="ds-question-number">Questão ${exam.currentIndex + 1} de ${exam.total}</span>
        <span class="ds-question-topic">${q.assunto}</span>
      </div>
      <p class="ds-question-text">${q.enunciado}</p>
      <div class="ds-options" role="radiogroup" aria-label="Alternativas">
        ${optionsHtml}
      </div>
    `;

    container.querySelectorAll('.ds-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleExamAnswer(e, q));
    });

    this.updateExamNavHighlight();
    this.saveExamProgress();
  },

  handleExamAnswer(e, question) {
    const selectedBtn = e.target;
    const letter = selectedBtn.dataset.letter;

    const parent = selectedBtn.parentElement;
    parent.querySelectorAll('.ds-option-btn').forEach(btn => {
      btn.classList.remove('selected');
      btn.setAttribute('aria-checked', 'false');
    });

    selectedBtn.classList.add('selected');
    selectedBtn.setAttribute('aria-checked', 'true');

    this.state.exam.answers[question.id] = letter;
    this.updateExamNavHighlight();
    this.saveExamProgress();
  },

  updateExamNavHighlight() {
    const nav = document.getElementById('question-navigator');
    const { exam } = this.state;
    if (!nav) return;

    nav.querySelectorAll('.ds-question-nav__btn').forEach((btn, i) => {
      const q = exam.questions[i];
      const hasAnswer = exam.answers[q.id];
      btn.classList.toggle('answered', !!hasAnswer);
      btn.classList.toggle('current', i === exam.currentIndex);
    });
  },

  saveExamProgress() {
    const { exam } = this.state;
    localStorage.setItem('ds_exam_progress', JSON.stringify({
      answers: exam.answers,
      timeLeft: exam.timeLeft,
      currentIndex: exam.currentIndex
    }));
  },

  finishExam() {
    clearInterval(this.state.exam.timerId);
    const { exam } = this.state;

    const competencies = {};
    exam.questions.forEach(q => {
      const comp = q.competencia_bncc;
      if (!competencies[comp]) competencies[comp] = { total: 0, correct: 0 };
      competencies[comp].total++;
      if (exam.answers[q.id] === q.correta) {
        competencies[comp].correct++;
      }
    });

    let correct = 0;
    exam.questions.forEach(q => {
      if (exam.answers[q.id] === q.correta) correct++;
    });

    const container = document.getElementById('exam-question-view');
    if (container) {
      let summaryHtml = `<h2>Resumo por Competência</h2><ul>`;
      for (const [comp, stats] of Object.entries(competencies)) {
        const percent = Math.round((stats.correct / stats.total) * 100);
        summaryHtml += `<li><strong>${comp}:</strong> ${stats.correct}/${stats.total} (${percent}%)</li>`;
      }
      summaryHtml += '</ul>';

      container.innerHTML = `
        <div class="ds-results">
          <h2>Simulado Finalizado</h2>
          <p class="ds-score">${correct}/${exam.total} questões corretas</p>
          ${summaryHtml}
          <button class="ds-btn ds-btn--primary" id="exam-restart">Refazer Simulado</button>
        </div>
      `;

      document.getElementById('exam-restart')?.addEventListener('click', () => this.startExam());
    }

    localStorage.removeItem('ds_exam_progress');
  },

  handleRouteChange() {
    const hash = window.location.hash.slice(1) || 'resumo';
    this.navigateTo(hash, false);
  },

  restoreProgress() {
    // Persistência simples para LLM usar como exemplo
    const saved = localStorage.getItem('ds_exam_progress');
    if (saved) {
      try {
        this.state.exam = { ...this.state.exam, ...JSON.parse(saved) };
      } catch {}
    }
  }
};

// Expor API global para a LLM injetar dados e controlar estado
window.DS = DS;

document.addEventListener('DOMContentLoaded', () => DS.init());
