const bancoQuestoes = [
  // ===== MULTIPLICAÇÃO BÁSICA =====
  {
    id: 1, tipo: 'multiplicacao',
    q: 'Quanto é 3 × 4?',
    alternativas: [
      { texto: '12', correta: true, explicacao: '3 × 4 = 12. É como somar 3 + 3 + 3 + 3!' },
      { texto: '7', correta: false, explicacao: '7 é 3 + 4, não 3 × 4. Multiplicar é diferente de somar!' },
      { texto: '10', correta: false, explicacao: '10 é 3 + 7. 3 × 4 = 12!' }
    ]
  },
  {
    id: 2, tipo: 'multiplicacao',
    q: 'Quanto é 5 × 6?',
    alternativas: [
      { texto: '30', correta: true, explicacao: '5 × 6 = 30. Na tabuada do 5, 5 × 6 = 30!' },
      { texto: '11', correta: false, explicacao: '11 é 5 + 6. Multiplicar é diferente de somar!' },
      { texto: '25', correta: false, explicacao: '25 é 5 × 5. 5 × 6 = 30!' }
    ]
  },
  {
    id: 3, tipo: 'multiplicacao',
    q: 'Quanto é 7 × 8?',
    alternativas: [
      { texto: '56', correta: true, explicacao: '7 × 8 = 56. Essa é uma das mais difíceis da tabuada!' },
      { texto: '48', correta: false, explicacao: '48 é 6 × 8. 7 × 8 = 56!' },
      { texto: '63', correta: false, explicacao: '63 é 7 × 9. 7 × 8 = 56!' }
    ]
  },
  {
    id: 4, tipo: 'multiplicacao',
    q: 'Quanto é 9 × 3?',
    alternativas: [
      { texto: '27', correta: true, explicacao: '9 × 3 = 27. 9 + 9 + 9 = 27!' },
      { texto: '12', correta: false, explicacao: '12 é 4 × 3. 9 × 3 = 27!' },
      { texto: '18', correta: false, explicacao: '18 é 6 × 3 ou 9 × 2. 9 × 3 = 27!' }
    ]
  },
  // ===== TABUADA =====
  {
    id: 5, tipo: 'tabuada',
    q: 'Quanto é 4 × 7?',
    alternativas: [
      { texto: '28', correta: true, explicacao: '4 × 7 = 28. Na tabuada do 4: 4, 8, 12, 16, 20, 24, 28!' },
      { texto: '21', correta: false, explicacao: '21 é 3 × 7. 4 × 7 = 28!' },
      { texto: '32', correta: false, explicacao: '32 é 4 × 8. 4 × 7 = 28!' }
    ]
  },
  {
    id: 6, tipo: 'tabuada',
    q: 'Qual é o resultado de 6 × 6?',
    alternativas: [
      { texto: '36', correta: true, explicacao: '6 × 6 = 36. É o quadrado de 6, um número especial!' },
      { texto: '30', correta: false, explicacao: '30 é 5 × 6 ou 6 × 5. 6 × 6 = 36!' },
      { texto: '42', correta: false, explicacao: '42 é 6 × 7. 6 × 6 = 36!' }
    ]
  },
  {
    id: 7, tipo: 'tabuada',
    q: 'Quanto é 8 × 5?',
    alternativas: [
      { texto: '40', correta: true, explicacao: '8 × 5 = 40. A tabuada do 5 sempre termina em 0 ou 5!' },
      { texto: '35', correta: false, explicacao: '35 é 7 × 5. 8 × 5 = 40!' },
      { texto: '45', correta: false, explicacao: '45 é 9 × 5. 8 × 5 = 40!' }
    ]
  },
  // ===== PROPRIEDADES =====
  {
    id: 8, tipo: 'propriedade',
    q: 'Qual é o resultado de 2 × 9?',
    alternativas: [
      { texto: '18', correta: true, explicacao: '2 × 9 = 18. E 9 × 2 também é 18, porque a ordem não importa na multiplicação (propriedade comutativa)!' },
      { texto: '11', correta: false, explicacao: '11 é 2 + 9. 2 × 9 = 18!' },
      { texto: '16', correta: false, explicacao: '16 é 2 × 8. 2 × 9 = 18!' }
    ]
  },
  {
    id: 9, tipo: 'propriedade',
    q: 'Quanto é 10 × 1?',
    alternativas: [
      { texto: '10', correta: true, explicacao: '10 × 1 = 10. O 1 é o elemento neutro da multiplicação: qualquer número × 1 é ele mesmo!' },
      { texto: '0', correta: false, explicacao: '0 seria 10 × 0. 10 × 1 = 10!' },
      { texto: '11', correta: false, explicacao: '11 é 10 + 1. 10 × 1 = 10!' }
    ]
  },
  {
    id: 10, tipo: 'propriedade',
    q: 'Complete: 3 × (4 + 2) = (3 × 4) + (3 × ___)',
    alternativas: [
      { texto: '2', correta: true, explicacao: '3 × (4 + 2) = (3 × 4) + (3 × 2) = 12 + 6 = 18. É a propriedade distributiva (chuveirinho)!' },
      { texto: '4', correta: false, explicacao: 'O 4 já está fora. Falta o 2! 3 × (4 + 2) = (3 × 4) + (3 × 2)!' },
      { texto: '6', correta: false, explicacao: 'O resultado dentro dos parênteses é 6, mas o número que falta é o 2!' }
    ]
  },
  {
    id: 11, tipo: 'propriedade',
    q: 'Quanto é (2 × 3) × 4?',
    alternativas: [
      { texto: '24', correta: true, explicacao: '(2 × 3) × 4 = 6 × 4 = 24. E 2 × (3 × 4) = 2 × 12 = 24. O resultado é o mesmo! Isso é a propriedade associativa.' },
      { texto: '20', correta: false, explicacao: '20 é 5 × 4. (2 × 3) × 4 = 6 × 4 = 24!' },
      { texto: '30', correta: false, explicacao: '30 é 5 × 6. (2 × 3) × 4 = 24!' }
    ]
  },
  // ===== DIVISÃO =====
  {
    id: 12, tipo: 'divisao',
    q: 'Quanto é 20 ÷ 4?',
    alternativas: [
      { texto: '5', correta: true, explicacao: '20 ÷ 4 = 5. Pois 4 × 5 = 20. Divisão é o inverso da multiplicação!' },
      { texto: '4', correta: false, explicacao: '4 × 4 = 16, não 20. 20 ÷ 4 = 5!' },
      { texto: '6', correta: false, explicacao: '4 × 6 = 24. 20 ÷ 4 = 5!' }
    ]
  },
  {
    id: 13, tipo: 'divisao',
    q: 'Na conta 15 ÷ 3 = 5, qual é o dividendo?',
    alternativas: [
      { texto: '15', correta: true, explicacao: 'O dividendo é o número que está sendo dividido, ou seja, o 15!' },
      { texto: '3', correta: false, explicacao: '3 é o divisor (quem divide). O dividendo é 15!' },
      { texto: '5', correta: false, explicacao: '5 é o quociente (o resultado). O dividendo é 15!' }
    ]
  },
  {
    id: 14, tipo: 'divisao',
    q: 'Quanto é 18 ÷ 6?',
    alternativas: [
      { texto: '3', correta: true, explicacao: '18 ÷ 6 = 3. Pois 6 × 3 = 18!' },
      { texto: '4', correta: false, explicacao: '6 × 4 = 24. 18 ÷ 6 = 3!' },
      { texto: '2', correta: false, explicacao: '6 × 2 = 12. 18 ÷ 6 = 3!' }
    ]
  },
  {
    id: 15, tipo: 'divisao',
    q: 'Na conta 17 ÷ 5, qual é o resto?',
    alternativas: [
      { texto: '2', correta: true, explicacao: '5 × 3 = 15, e 17 − 15 = 2. Então 17 ÷ 5 = 3 e resto 2. A divisão não é exata!' },
      { texto: '3', correta: false, explicacao: 'O quociente é 3. O que sobra (resto) é 17 − 15 = 2!' },
      { texto: '5', correta: false, explicacao: '5 é o divisor. O que sobra é 2!' }
    ]
  },
  {
    id: 16, tipo: 'divisao',
    q: 'Quanto é 24 ÷ 8?',
    alternativas: [
      { texto: '3', correta: true, explicacao: '24 ÷ 8 = 3. Pois 8 × 3 = 24!' },
      { texto: '4', correta: false, explicacao: '8 × 4 = 32. 24 ÷ 8 = 3!' },
      { texto: '2', correta: false, explicacao: '8 × 2 = 16. 24 ÷ 8 = 3!' }
    ]
  },
  {
    id: 17, tipo: 'divisao',
    q: 'Se 7 × 4 = 28, então 28 ÷ 7 é igual a:',
    alternativas: [
      { texto: '4', correta: true, explicacao: 'Se 7 × 4 = 28, então 28 ÷ 7 = 4 e 28 ÷ 4 = 7. A divisão é o inverso da multiplicação!' },
      { texto: '7', correta: false, explicacao: '28 ÷ 7 = 4, não 7. Se fosse 28 ÷ 4 aí daria 7!' },
      { texto: '21', correta: false, explicacao: '21 é 28 − 7. 28 ÷ 7 = 4!' }
    ]
  },
  {
    id: 18, tipo: 'distributiva',
    q: 'Quanto é 4 × (3 + 2)? Use a propriedade distributiva.',
    alternativas: [
      { texto: '20', correta: true, explicacao: '4 × (3 + 2) = (4 × 3) + (4 × 2) = 12 + 8 = 20. O "chuveirinho"!' },
      { texto: '14', correta: false, explicacao: 'Você fez 4 + 3 + 2 + 5? 4 × (3 + 2) = 4 × 5 = 20!' },
      { texto: '24', correta: false, explicacao: '24 é 4 × 6. 4 × (3 + 2) = 20!' }
    ]
  },
  {
    id: 19, tipo: 'multiplicacao',
    q: 'Quanto é 0 × 8?',
    alternativas: [
      { texto: '0', correta: true, explicacao: '0 × 8 = 0. Qualquer número multiplicado por 0 dá 0!' },
      { texto: '8', correta: false, explicacao: '8 × 1 = 8. 0 × 8 = 0!' },
      { texto: '1', correta: false, explicacao: 'O 1 é o elemento neutro. 0 × 8 = 0!' }
    ]
  },
  {
    id: 20, tipo: 'tabuada',
    q: 'Quanto é 9 × 9?',
    alternativas: [
      { texto: '81', correta: true, explicacao: '9 × 9 = 81. É o quadrado de 9! Dica: 9 × 9 = 81 (o 8 e o 1 são vizinhos na tabuada do 9)!' },
      { texto: '72', correta: false, explicacao: '72 é 8 × 9. 9 × 9 = 81!' },
      { texto: '90', correta: false, explicacao: '90 é 9 × 10. 9 × 9 = 81!' }
    ]
  },
  {
    id: 21, tipo: 'multiplicacao',
    q: 'João tem 5 caixas com 6 brinquedos cada. Quantos brinquedos ele tem no total?',
    alternativas: [
      { texto: '30 brinquedos', correta: true, explicacao: '5 × 6 = 30. São 5 grupos de 6 brinquedos!' },
      { texto: '11 brinquedos', correta: false, explicacao: '11 é 5 + 6. É multiplicação, não adição!' },
      { texto: '25 brinquedos', correta: false, explicacao: '25 é 5 × 5. 5 caixas com 6 brinquedos = 30!' }
    ]
  },
  {
    id: 22, tipo: 'divisao',
    q: 'Uma professora quer dividir 30 lápis igualmente entre 6 alunos. Quantos lápis cada aluno ganha?',
    alternativas: [
      { texto: '5 lápis', correta: true, explicacao: '30 ÷ 6 = 5. Cada aluno ganha 5 lápis!' },
      { texto: '6 lápis', correta: false, explicacao: '6 × 6 = 36. 30 ÷ 6 = 5 lápis para cada!' },
      { texto: '4 lápis', correta: false, explicacao: '6 × 4 = 24. 30 ÷ 6 = 5!' }
    ]
  },
  {
    id: 23, tipo: 'multiplicacao',
    q: 'Quanto é 4 × 0?',
    alternativas: [
      { texto: '0', correta: true, explicacao: '4 × 0 = 0. Qualquer número vezes 0 é 0. Pense: 4 grupos de nada é nada!' },
      { texto: '4', correta: false, explicacao: '4 × 1 = 4. 4 × 0 = 0!' },
      { texto: '1', correta: false, explicacao: '1 × 4 = 4. 4 × 0 = 0!' }
    ]
  },
  {
    id: 24, tipo: 'propriedade',
    q: 'Quanto é 5 × (10 − 3)? Use a propriedade distributiva.',
    alternativas: [
      { texto: '35', correta: true, explicacao: '5 × (10 − 3) = (5 × 10) − (5 × 3) = 50 − 15 = 35. O chuveirinho também funciona com subtração!' },
      { texto: '25', correta: false, explicacao: '25 é 5 × 5. 5 × (10 − 3) = 5 × 7 = 35!' },
      { texto: '45', correta: false, explicacao: '45 é 5 × 9. 5 × (10 − 3) = 35!' }
    ]
  },
  {
    id: 25, tipo: 'divisao',
    q: 'Na conta 12 ÷ 4 = 3, qual é o quociente?',
    alternativas: [
      { texto: '3', correta: true, explicacao: 'O quociente é o resultado da divisão, que é 3!' },
      { texto: '12', correta: false, explicacao: '12 é o dividendo (o total que está sendo dividido)!' },
      { texto: '4', correta: false, explicacao: '4 é o divisor (por quanto estamos dividindo)!' }
    ]
  },
  {
    id: 26, tipo: 'tabuada',
    q: 'Complete a sequência da tabuada do 3: 3, 6, 9, __, 15',
    alternativas: [
      { texto: '12', correta: true, explicacao: 'Tabuada do 3: 3, 6, 9, 12, 15. O 4º termo é 3 × 4 = 12!' },
      { texto: '10', correta: false, explicacao: '10 não está na tabuada do 3. O próximo depois de 9 é 12!' },
      { texto: '14', correta: false, explicacao: '14 não está na tabuada do 3. 3 × 4 = 12!' }
    ]
  },
  {
    id: 27, tipo: 'multiplicacao',
    q: 'Quanto é 6 × 3?',
    alternativas: [
      { texto: '18', correta: true, explicacao: '6 × 3 = 18. E 3 × 6 também é 18 (comutativa)!' },
      { texto: '9', correta: false, explicacao: '9 é 3 × 3. 6 × 3 = 18!' },
      { texto: '21', correta: false, explicacao: '21 é 7 × 3. 6 × 3 = 18!' }
    ]
  },
  {
    id: 28, tipo: 'divisao',
    q: 'Quanto é 36 ÷ 9?',
    alternativas: [
      { texto: '4', correta: true, explicacao: '36 ÷ 9 = 4. Pois 9 × 4 = 36!' },
      { texto: '6', correta: false, explicacao: '9 × 6 = 54. 36 ÷ 9 = 4!' },
      { texto: '3', correta: false, explicacao: '9 × 3 = 27. 36 ÷ 9 = 4!' }
    ]
  },
  {
    id: 29, tipo: 'multiplicacao',
    q: 'Quanto é 2 × 2 × 2?',
    alternativas: [
      { texto: '8', correta: true, explicacao: '2 × 2 = 4, e 4 × 2 = 8. Três vezes o número 2!' },
      { texto: '6', correta: false, explicacao: '6 é 2 + 2 + 2. 2 × 2 × 2 = 8!' },
      { texto: '4', correta: false, explicacao: '4 é 2 × 2. 2 × 2 × 2 = 8!' }
    ]
  },
  {
    id: 30, tipo: 'divisao',
    q: 'Se 35 ÷ 7 = 5, quanto é 7 × 5?',
    alternativas: [
      { texto: '35', correta: true, explicacao: '7 × 5 = 35. A divisão e a multiplicação são operações inversas: 35 ÷ 7 = 5, então 7 × 5 = 35!' },
      { texto: '12', correta: false, explicacao: '12 é 7 + 5. 7 × 5 = 35!' },
      { texto: '30', correta: false, explicacao: '30 é 6 × 5. 7 × 5 = 35!' }
    ]
  }
];

let questoesQuiz = [];
let questoesSimulado = [];

document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      const el = document.getElementById(target);
      if (el) el.classList.add('active');
      if (target === 'quiz' && questoesQuiz.length === 0) carregarQuiz();
      else if (target === 'simulado' && questoesSimulado.length === 0) carregarSimulado();
      else if (target === 'jogo') iniciarJogo();
    });
  });
  tabBtns[0].click();
});

function selecionarQuestoes() {
  const qs = [...bancoQuestoes];
  const sel = [];
  for (let i = 0; i < 10; i++) {
    const idx = Math.floor(Math.random() * qs.length);
    sel.push(qs.splice(idx, 1)[0]);
  }
  return sel;
}

// ===== QUIZ =====
function carregarQuiz() {
  if (questoesQuiz.length === 0) questoesQuiz = selecionarQuestoes();
  const container = document.getElementById('quiz-container');
  let html = '';
  questoesQuiz.forEach((q, i) => {
    html += `<div class="questao-card" data-questao="${i}">
      <p><strong>Questão ${i + 1}:</strong> ${q.q}</p>
      <div class="alternativas-container">
        ${q.alternativas.map((alt, j) => `
          <label class="alternativa-item">
            <input type="radio" name="quiz-${i}" value="${j}" data-correta="${alt.correta}">
            <span class="alternativa-texto">${alt.texto}</span>
          </label>
        `).join('')}
      </div>
    </div>`;
  });
  container.innerHTML = html;
}

function finalizarQuiz() {
  const container = document.getElementById('quiz-container');
  const cartoes = container.querySelectorAll('.questao-card');
  let acertos = 0;
  cartoes.forEach((cartao, i) => {
    const selecionado = cartao.querySelector(`input[name="quiz-${i}"]:checked`);
    const alternativas = cartao.querySelectorAll('.alternativa-item');
    const questao = questoesQuiz[i];
    alternativas.forEach((alt, j) => {
      alt.classList.remove('correta', 'incorreta');
      if (questao.alternativas[j].correta) {
        alt.classList.add('correta');
        alt.innerHTML += `<div class="explicacao">✓ ${questao.alternativas[j].explicacao}</div>`;
      } else if (input && selecionado && selecionado.getAttribute('data-correta') === 'false' && selecionado.value == j) {
        alt.classList.add('incorreta');
        alt.innerHTML += `<div class="explicacao">✗ ${questao.alternativas[j].explicacao}</div>`;
      }
    });
    if (selecionado && selecionado.getAttribute('data-correta') === 'true') acertos++;
  });
  const pct = Math.round((acertos / 10) * 100);
  let msg = '';
  if (pct === 100) msg = '🎉 Incrível! Você acertou tudo!';
  else if (pct >= 70) msg = '👍 Muito bem! Continue assim!';
  else if (pct >= 50) msg = '📚 Bom! Continue estudando!';
  else msg = '💪 Não desanime! Tente de novo!';
  document.getElementById('quiz-result').classList.remove('hidden');
  document.querySelector('#quiz-result .score-text').textContent = `${acertos}/10 (${pct}%)`;
  document.querySelector('#quiz-result .message-text').textContent = msg;
}

function reiniciarQuiz() {
  questoesQuiz = selecionarQuestoes();
  document.getElementById('quiz-result').classList.add('hidden');
  carregarQuiz();
}

// ===== SIMULADO =====
function carregarSimulado() {
  if (questoesSimulado.length === 0) questoesSimulado = selecionarQuestoes();
  const container = document.getElementById('simulado-container');
  let html = '';
  questoesSimulado.forEach((q, i) => {
    html += `<div class="questao-simulado" data-questao="${i}">
      <p><strong>Questão ${i + 1}:</strong> ${q.q}</p>
      <div class="alternativas-container">
        ${q.alternativas.map((alt, j) => `
          <label class="alternativa-item">
            <input type="radio" name="simulado-${i}" value="${j}" data-correta="${alt.correta}">
            <span class="alternativa-texto">${alt.texto}</span>
          </label>
        `).join('')}
      </div>
    </div>`;
  });
  container.innerHTML = html;
}

function finalizarSimulado() {
  const container = document.getElementById('simulado-container');
  const cartoes = container.querySelectorAll('.questao-simulado');
  let acertos = 0;
  cartoes.forEach((cartao, i) => {
    const selecionado = cartao.querySelector(`input[name="simulado-${i}"]:checked`);
    const alternativas = cartao.querySelectorAll('.alternativa-item');
    const questao = questoesSimulado[i];
    alternativas.forEach((alt, j) => {
      alt.classList.remove('correta', 'incorreta');
      if (questao.alternativas[j].correta) {
        alt.classList.add('correta');
        alt.innerHTML += `<div class="explicacao">✓ ${questao.alternativas[j].explicacao}</div>`;
      } else if (selecionado && selecionado.getAttribute('data-correta') === 'false' && selecionado.value == j) {
        alt.classList.add('incorreta');
        alt.innerHTML += `<div class="explicacao">✗ ${questao.alternativas[j].explicacao}</div>`;
      }
    });
    if (selecionado && selecionado.getAttribute('data-correta') === 'true') acertos++;
  });
  const pct = Math.round((acertos / 10) * 100);
  let msg = '';
  if (pct === 100) msg = '🏆 Perfeito! Você arrasou!';
  else if (pct >= 70) msg = '👏 Muito bem! Nota boa!';
  else if (pct >= 50) msg = '📖 Bom trabalho! Continue!';
  else msg = '📝 Revise e tente novamente!';
  document.getElementById('simulado-result').classList.remove('hidden');
  document.querySelector('#simulado-result .score-text').textContent = `${acertos}/10 (${pct}%)`;
  document.querySelector('#simulado-result .message-text').textContent = msg;
}

function reiniciarSimulado() {
  questoesSimulado = selecionarQuestoes();
  document.getElementById('simulado-result').classList.add('hidden');
  carregarSimulado();
}

// ===== JOGO DA TABUADA =====
let jogoAcertos = 0;
let jogoPontos = 0;
let jogoSequencia = 0;

function iniciarJogo() {
  jogoAcertos = 0;
  jogoPontos = 0;
  jogoSequencia = 0;
  document.getElementById('jogo-acertos').textContent = '0';
  document.getElementById('jogo-pontos').textContent = '0';
  document.getElementById('jogo-sequencia').textContent = '0';
  document.getElementById('jogo-mensagem').textContent = '';
  gerarPergunta();
}

function gerarPergunta() {
  const a = Math.floor(Math.random() * 9) + 2;
  const b = Math.floor(Math.random() * 9) + 2;
  const resposta = a * b;

  const opcoes = [resposta];
  while (opcoes.length < 4) {
    const fake = resposta + (Math.floor(Math.random() * 10) - 5);
    if (fake >= 0 && !opcoes.includes(fake)) opcoes.push(fake);
  }

  for (let i = opcoes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
  }

  document.getElementById('jogo-pergunta').textContent = `${a} × ${b} = ?`;
  const container = document.getElementById('jogo-opcoes');
  container.innerHTML = opcoes.map(v =>
    `<button class="jogo-opcao" data-resposta="${v}" onclick="responderJogo(this, ${resposta})">${v}</button>`
  ).join('');
  document.getElementById('jogo-mensagem').textContent = '';
}

function responderJogo(btn, respostaCorreta) {
  const valor = parseInt(btn.dataset.resposta);
  const btns = document.querySelectorAll('.jogo-opcao');
  btns.forEach(b => b.style.pointerEvents = 'none');

  if (valor === respostaCorreta) {
    btn.classList.add('correta');
    jogoAcertos++;
    jogoSequencia++;
    const pts = 10 + (jogoSequencia > 1 ? jogoSequencia * 2 : 0);
    jogoPontos += pts;
    document.getElementById('jogo-mensagem').textContent = `✅ Correto! +${pts} pontos`;
    document.getElementById('jogo-mensagem').style.color = '#4ade80';
  } else {
    btn.classList.add('incorreta');
    btns.forEach(b => { if (parseInt(b.dataset.resposta) === respostaCorreta) b.classList.add('correta'); });
    jogoSequencia = 0;
    document.getElementById('jogo-mensagem').textContent = `❌ Era ${respostaCorreta}. Tente a próxima!`;
    document.getElementById('jogo-mensagem').style.color = '#f87171';
  }

  document.getElementById('jogo-acertos').textContent = jogoAcertos;
  document.getElementById('jogo-pontos').textContent = jogoPontos;
  document.getElementById('jogo-sequencia').textContent = jogoSequencia;

  setTimeout(() => {
    btns.forEach(b => { b.classList.remove('correta', 'incorreta'); b.style.pointerEvents = 'auto'; });
    gerarPergunta();
  }, 1200);
}
