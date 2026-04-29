// Sistema de pontuação
let score = 0;
const scoreEl = document.getElementById('score');

function addScore(points) {
    score += points;
    scoreEl.textContent = score;
}

// Banco de explicações elaboradas para os cards de estudo
const studyContent = {
    origem: {
        emoji: "🌍",
        title: "Origem da Humanidade",
        content: "A África é considerada o <strong>berço da humanidade</strong> porque foi lá que os primeiros seres humanos surgiram há milhões de anos. " +
        "<h3>Por que a África?</h3>" +
        "<p>Os cientistas encontraram fósseis e evidências de que os primeiros humanos viveram na África. Com o tempo, eles se espalharam pelo mundo todo.</p>" +
        "<h3>Características dos primeiros humanos:</h3>" +
        "<ul>" +
        "<li>👀 <strong>Olhos semelhantes</strong> - Todos os humanos têm olhos com a mesma estrutura básica</li>" +
        "<li>🎨 <strong>Tons de pele variados</strong> - A cor da pele varia de pessoa para pessoa</li>" +
        "<li>🦶 <strong>Bípedes</strong> - Andavam sobre duas pernas</li>" +
        "<li>🧠 <strong>Cérebro desenvolvido</strong> - Capazes de pensar e criar ferramentas</li>" +
        "</ul>" +
        "<h3>Curiosidade:</h3>" +
        "<p>Embora vivessem em condições muito diferentes, já eram muito inteligentes!</p>"
    },
    
    pinturas: {
        emoji: "🖼️",
        title: "Pinturas Rupestres",
        content: "Antes da escrita, os seres humanos usavam <strong>desenhos nas paredes das cavernas</strong> para se comunicar. " +
        "<h3>O que são pinturas rupestres?</h3>" +
        "<p>São desenhos feitos com pigmentos naturais nas paredes das cavernas. O termo vem do latim 'rupes' (rocha).</p>" +
        "<h3>Para que serviam?</h3>" +
        "<ul>" +
        "<li>📖 Contar histórias</li>" +
        "<li>🎯 Mostrar animais que caçavam</li>" +
        "<li>👨‍👩‍👧 Representar pessoas e rituais</li>" +
        "<li>🌟 Expressar criatividade</li>" +
        "</ul>" +
        "<h3>Curiosidade:</h3>" +
        "<p>Algumas pinturas têm mais de 40 mil anos!</p>"
    },
    
    prehistoria: {
        emoji: "📜",
        title: "O que é Pré-História?",
        content: "A <strong>Pré-História</strong> é o período antes da invenção da escrita. Por isso não temos registros em papel! " +
        "<h3>Quando começou?</h3>" +
        "<p>Começa com os primeiros humanos, há cerca de 3 milhões de anos, e vai até cerca de 3.000 a.C.</p>" +
        "<h3>Os historiadores usam vestígios</h3>" +
        "<ul>" +
        "<li>🪨 Pinturas em cavernas</li>" +
        "<li>🪓 Objetos de pedra</li>" +
        "<li>🦴 Ossos e utensílios</li>" +
        "<li>🏠 Fossos de moradia</li>" +
        "</ul>" +
        "<h3>Por que é importante?</h3>" +
        "<p>Nos ajuda a entender como os humanos evoluíram e desenvolveram civilizações!</p>"
    },
    
    paleolitico: {
        emoji: "🪨",
        title: "Paleolítico - Idade da Pedra Lascada",
        content: "O <strong>Paleolítico</strong> (pedra antiga) é o primeiro período da Pré-História, durando cerca de 2,5 milhões de anos! " +
        "<h3>Características principais:</h3>" +
        "<ul>" +
        "<li>📢 Ferramentas de pedra lascada</li>" +
        "<li>🦌 Caça e coleta de alimentos</li>" +
        "<li>🚶 Vida nômade (sempre se mudando)</li>" +
        "<li>🔥 Descoberta do fogo</li>" +
        "</ul>" +
        "<h3>Como viviam?</h3>" +
        "<p>Viviam em pequenos grupos e se mudavam para encontrar comida. Caçavam animais e coletavam frutas e raízes.</p>" +
        "<h3>Curiosidade:</h3>" +
        "<p>Foi no Paleolítico que aprendemos a fazer fogo!</p>"
    },
    
    neolitico: {
        emoji: "🌾",
        title: "Neolítico - Idade da Pedra Polida",
        content: "O <strong>Neolítico</strong> (pedra nova) foi uma revolução na história humana! " +
        "<h3>A grande mudança:</h3>" +
        "<p>A principal novidade foi a <strong>agricultura</strong>. Antes, precisavam procurar comida. Agora podiam plantar!</p>" +
        "<h3>Características principais:</h3>" +
        "<ul>" +
        "<li>🌱 Agricultura</li>" +
        "<li>🏠 Morar em lugar fixo</li>" +
        "<li>🪓 Ferramentas mais elaboradas</li>" +
        "<li>🐄 Criação de animais</li>" +
        "</ul>" +
        "<h3>O que cultivavam?</h3>" +
        "<p>Trigo, cevada, milho e legumes.</p>" +
        "<h3>Curiosidade:</h3>" +
        "<p>Por causa da agricultura, a população aumentou muito!</p>"
    },
    
    metais: {
        emoji: "⚙️",
        title: "Idade dos Metais",
        content: "A <strong>Idade dos Metais</strong> é o terceiro e último período da Pré-História. " +
        "<h3>A grande descoberta:</h3>" +
        "<p>Como usar metais para fazer ferramentas ainda melhores!</p>" +
        "<h3>Metais usados:</h3>" +
        "<ul>" +
        "<li>⚫ Cobre (primeiro metal)</li>" +
        "<li>🟤 Bronze (cobre + estanho)</li>" +
        "<li>⚫ Ferro (mais forte)</li>" +
        "</ul>" +
        "<h3>Características principais:</h3>" +
        "<ul>" +
        "<li>🔩 Ferramentas mais resistentes</li>" +
        "<li>⚒️ Metalurgia</li>" +
        "<li>🏛️ Sociedades mais organizadas</li>" +
        "<li>🏺 Comércio entre povos</li>" +
        "</ul>" +
        "<h3>Curiosidade:</h3>" +
        "<p>O uso do ferro foi tão importante que demos nome a eras históricas!</p>"
    }
};

// Adicionar event listeners aos cards de estudo (apenas os botões)
document.querySelectorAll('.study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent duplicate click
        const studyId = btn.dataset.study;
        const info = studyContent[studyId];
        
        if (info) {
            document.getElementById('modal-emoji').textContent = info.emoji;
            document.getElementById('modal-title').textContent = info.title;
            document.getElementById('modal-text').innerHTML = info.content;
            
            document.getElementById('modal-stats').style.display = 'none';
            document.getElementById('close-modal-btn').textContent = 'Fechar';
            document.getElementById('close-modal-btn').style.display = 'inline-block';
            
            document.getElementById('overlay').classList.add('show');
            document.getElementById('modal-feedback').classList.add('show');
        }
    });
});

// Remover click dos cards (agora só os botões abrem o modal)
document.querySelectorAll('.card[data-study]').forEach(card => {
    card.style.cursor = 'default';
});

// Função para fechar modal de estudio (reutiliza o mesmo listener)

// Trocar abas
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Quiz - Banco de todas as questões
const allQuestions = [
    // Origem da humanidade
    {
        question: "Por que a África é chamada de 'berço da humanidade'?",
        options: ["Porque os dinossauros surgiram lá", "Porque os primeiros seres humanos surgiram na África", "Porque é o maior continente", "Porque tem mais museus"],
        correct: 1,
        explanation: "Isso mesmo! Os primeiros seres humanos surgiram na África, por isso ela é chamada de 'berço da humanidade'.",
        wrongExplanation: ["Os dinossauros não têm relação com a origem humana. Berço significa o local onde algo começa!", "", "Não é pelo tamanho. A África é berço porque os primeiros humanos nasceram lá!", "Museus não têm relação com a origem da humanidade."]
    },
    {
        question: "Qual é uma característica que todos os seres humanos possuem em comum?",
        options: ["Olhos cor de azul", "Olhos semelhantes", "Cabelo loiro", "Pele exatamente igual"],
        correct: 1,
        explanation: "Todos os seres humanos têm olhos semelhantes, com formato e estrutura iguais!",
        wrongExplanation: ["A cor dos olhos varia entre as pessoas.", "", "Nem todos têm cabelo loiro.", "A pele varia em diferentes tons."]
    },
    {
        question: "Como eram os primeiros seres humanos?",
        options: ["Andavam de quatro", "Eram bípedes", "Rastejavam", "Voavam"],
        correct: 1,
        explanation: "Os primeiros humanos já andavam sobre duas pernas, eram bípedes!",
        wrongExplanation: ["Andar de quatro é característico de animais, não de humanos.", "", "Os humanos não rastejavam.", "Os humanos nunca puderam voar."]
    },
    {
        question: "Os tons de pele dos seres humanos são:",
        options: ["Todos iguais", "Variados", "Apenas claros", "Apenas escuros"],
        correct: 1,
        explanation: "Isso mesmo! Existem diferentes tons de pele ao redor do mundo.",
        wrongExplanation: ["Cada pessoa tem um tom diferente de pele.", "", "Existem tons claros, médios e escuros.", "Existem tons claros, médios e escuros."]
    },
    // Pinturas rupestres
    {
        question: "O que são pinturas rupestres?",
        options: ["Pinturas em quadros", "Desenhos nas paredes das cavernas", "Pinturas em tecidos", "Livros com imagens"],
        correct: 1,
        explanation: "Exatamente! As pinturas rupestres são desenhos feitos nas paredes das cavernas para se comunicar.",
        wrongExplanation: ["Elas não eram em quadros, mas sim pintadas diretamente nas paredes das cavernas!", "", "Elas eram feitas em rochas, não em tecidos!", "Livros não existiam na Pré-História, pois não havia escrita!"]
    },
    {
        question: "Antes da escrita, como os seres humanos se comunicavam?",
        options: ["Por teléfono", "Por desenhos nas paredes", "Por e-mail", "Por cartas"],
        correct: 1,
        explanation: "Usavam desenhos chamados pinturas rupestres nas cavernas!",
        wrongExplanation: ["Teléfono não existia na Pré-História.", "", "Não existia e-mail antigamente.", "Cartas precisam de escrita!"]
    },
    {
        question: "As pinturas rupestres eram feitas em:",
        options: ["Papel", "Cavernas e rochas", "Tecido", "Madeira"],
        correct: 1,
        explanation: "Eram pintadas diretamente nas paredes das cavernas e rochas!",
        wrongExplanation: ["Papel não existia na Pré-História.", "", "Tecido também não existia.", "Algumas eram em madeira, mas o mais comum era em rochas!"]
    },
    // Pré-História
    {
        question: "O que significa Pré-História?",
        options: ["História muito antiga", "Período antes da invenção da escrita", "História sem importância", "História dos dinossauros"],
        correct: 1,
        explanation: "Pré-História é o período antes da invenção da escrita!",
        wrongExplanation: ["Não é só história antiga, é especificamente antes da escrita.", "", "Toda história é importante.", "Dinossauros são do período pré-histórico, mas não são história humana."]
    },
    {
        question: "Como os historiadores estudam a Pré-História?",
        options: ["Usando livros antigos", "Usando vestígios como pinturas e objetos", "Assistindo vídeos", "Lendo jornais"],
        correct: 1,
        explanation: "Usam vestígios como pinturas rupestres, objetos de pedra e ossos!",
        wrongExplanation: ["Não existiam livros na Pré-História.", "", "Não existiam vídeos.", "Jornais precisam de escrita!"]
    },
    {
        question: "O que são vestígios?",
        options: ["Restos de comida", "Sinais e objetos deixados pelo passado", "Roupas velhas", "Casa abandonada"],
        correct: 1,
        explanation: "Vestígios são sinais e objetos que as pessoas deixaram no passado!",
        wrongExplanation: ["Restos de comida são um tipo de vestígio, mas não o principal.", "", "Roupas são vestígios também, mas o termo é mais amplo.", "Uma casa abandonada pode ser um vestígio."]
    },
    // Paleolítico
    {
        question: "O que significa 'vida nômade'?",
        options: ["Viver em casas fixas", "Viver em cavernas", "Não ter moradia fixa, sempre se mudar", "Viver perto do mar"],
        correct: 2,
        explanation: "Isso mesmo! Vida nômade é não ter moradia fixa, sempre se mudar de lugar em busca de alimento.",
        wrongExplanation: ["O oposto! Quem vive em casas fixas não é nômade.", "Viver em cavernas não define se alguém é nômade ou sedentário.", "", "Nômade significa se mudar o tempo todo, não importa o lugar."]
    },
    {
        question: "No Paleolítico, as pessoas usavam para se alimentar:",
        options: ["Agricultura", "Caça e coleta", "Criação de animais", "Compras no mercado"],
        correct: 1,
        explanation: "No Paleolítico, as pessoas caçavam animais e coletavam frutos selvagens!",
        wrongExplanation: ["Agricultura começou no Neolítico.", "", "Criação de animais também veio depois.", "Não existiam mercados!"]
    },
    {
        question: "Qual é outro nome do Paleolítico?",
        options: ["Idade da Pedra Polida", "Idade da Pedra Lascada", "Idade dos Metais", "Idade Média"],
        correct: 1,
        explanation: "Paleolítico significa Idade da Pedra Lascada!",
        wrongExplanation: ["Idade da Pedra Polida é o Neolítico.", "", "Idade dos Metais veio depois.", "Idade Média é outro período histórico."]
    },
    {
        question: "No Paleolítico, as ferramentas eram feitas de:",
        options: ["Plástico", "Metal", "Pedra lascada", "Vidro"],
        correct: 2,
        explanation: "As ferramentas eram feitas de pedra lascada, simples e afiadas!",
        wrongExplanation: ["Plástico não existia.", "Metais começaram a ser usados na Idade dos Metais.", "", "Vidro também não existia."]
    },
    {
        question: "As pessoas do Paleolítico viviam em:",
        options: ["Casas de alvenaria", "Cavernas e abrigos naturais", "Castelos", "Sob pontes"],
        correct: 1,
        explanation: "Viviam em cavernas e abrigos naturais!",
        wrongExplanation: ["Alvenaria não existia.", "", "Castelos são medievais.", "Sob pontes é moderno."]
    },
    {
        question: "Qual atividade era comum no Paleolítico?",
        options: ["Assistir TV", "Nadar", "Caçar animais", "Jogar vídeo game"],
        correct: 2,
        explanation: "Caçar animais era uma atividade essencial para sobreviver!",
        wrongExplanation: ["TV não existia.", "Nadar pode ter sido praticado, mas não era principal.", "", "Vídeo game é moderno."]
    },
    // Neolítico
    {
        question: "Qual período começou a praticar a agricultura?",
        options: ["Paleolítico", "Neolítico", "Idade dos Metais", "Nenhum deles"],
        correct: 1,
        explanation: "Correto! No Neolítico, os seres humanos aprenderam a cultivar plantas e praticar a agricultura.",
        wrongExplanation: ["No Paleolítico, as pessoas caçavam e coletavam alimentos selvagens, não cultivavam!", "", "A Idade dos Metais veio depois do Neolítico e usa metais, não agricultura.", "A agricultura foi inventada sim, no período Neolítico!"]
    },
    {
        question: "O que significa 'sedentarismo'?",
        options: ["Viver em uma casa fixa", "Sempre mudar de lugar", "Viver em cavernas", "Não usar ferramentas"],
        correct: 0,
        explanation: "Sedentarismo é viver em um lugar fixo, sem se mudar!",
        wrongExplanation: ["", "Sempre mudar é vida nômade.", "Cavernas podem ser usadas por nômades também.", "Usar ferramentas continua!"]
    },
    {
        question: "Qual é outro nome do Neolítico?",
        options: ["Idade da Pedra Lascada", "Idade da Pedra Polida", "Idade dos Metais", "Idade do Ferro"],
        correct: 1,
        explanation: "Neolítico significa Idade da Pedra Polida!",
        wrongExplanation: ["Idade da Pedra Lascada é o Paleolítico.", "", "Idade dos Metais veio depois.", "Idade do Ferro é parte da Idade dos Metais."]
    },
    {
        question: "No Neolítico, as ferramentas eram:",
        options: ["Feitas de madeira", "Simples como no Paleolítico", "Mais elaboradas e polidas", "Feitas de plástico"],
        correct: 2,
        explanation: "Eram mais elaboradas e polidas que no Paleolítico!",
        wrongExplanation: ["Madeira era usada, mas não era o principal material.", "Eram mais elaboradas!", "", "Plástico não existia."]
    },
    {
        question: "No Neolítico, as pessoas começaram a:",
        options: ["Viver nas árvores", "Cultivar alimentos", "Viajar de avião", "Usar telefone"],
        correct: 1,
        explanation: "Começaram a cultivar alimentos!",
        wrongExplanation: ["Ninguém vivia nas árvores.", "", "Aviões não existiam.", "Telefone não existia."]
    },
    {
        question: "O que os seres humanos do Neolítico cultivavam?",
        options: ["Apenas flores", "Trigo e outros cereais", "Apenas vegetais", "Nada"],
        correct: 1,
        explanation: "Cultivavam trigo e outros cereais!",
        wrongExplanation: ["Flores eram cultivadas depois.", "", "Vegetais também, mas principalmente cereais.", "Cultivavam sim!"]
    },
    // Idade dos Metais
    {
        question: "Qual material começou a ser usado na Idade dos Metais?",
        options: ["Pedra", "Madeira", "Cobre, bronze e ferro", "Plástico"],
        correct: 2,
        explanation: "Exatamente! Na Idade dos Metais, as pessoas começaram a usar cobre, bronze e ferro para fazer ferramentas.",
        wrongExplanation: ["Pedra já era usada antes, nos períodos anteriores. A Idade dos Metais é especificamente sobre metais!", "Madeira foi usada desde sempre. A Idade dos Metais é sobre cobre, bronze e ferro!", "", "Plástico é um material moderno, inventado há pouquíssimo tempo!"]
    },
    {
        question: "A Idade dos Metais veio depois de:",
        options: ["Hoje", "Neolítico", "Não veio depois de nenhum", "Dos dinossauros"],
        correct: 1,
        explanation: "Veio depois do Neolítico!",
        wrongExplanation: ["Veio muito antes de hoje.", "", "Veio depois do Neolítico.", "Os dinossauros eram muito antes."]
    },
    {
        question: "As ferramentas de metal eram:",
        options: ["Mais fracas", "Iguais às de pedra", "Mais resistentes", "Feitas de madeira"],
        correct: 2,
        explanation: "Ferramentas de metal duravam mais e eram mais resistentes!",
        wrongExplanation: ["Eram mais fortes, não mais fracas.", "Eram melhores que as de pedra.", "", "Metal é diferente de madeira."]
    },
    {
        question: "Na Idade dos Metais, as sociedades ficaram:",
        options: ["Mais simples", "Mais organizadas", "Mais primitivas", "Menores"],
        correct: 1,
        explanation: "As sociedades ficaram mais organizadas e complexas!",
        wrongExplanation: ["Elas ficaram mais complexas, não mais simples.", "", "Mais primitivas seria voltar no tempo.", "Ficaram maiores."]
    },
    {
        question: "Qual metal foi usado primeiro?",
        options: ["Ferro", "Cobre", "Ouro", "Alumínio"],
        correct: 1,
        explanation: "O cobre foi o primeiro metal a ser usado!",
        wrongExplanation: ["Ferro veio depois do cobre.", "", "Ouro também foi usado, mas depois do cobre.", "Alumínio é moderno."]
    },
    {
        question: "O bronze é feito de:",
        options: ["Só ferro", "Cobre e estanho", "Só cobre", "Ferro e aço"],
        correct: 1,
        explanation: "Bronze é uma mistura de cobre e estanho!",
        wrongExplanation: ["Bronze não é ferro.", "", "Bronze tem mais de um metal.", "Aço é diferente."]
    },
    // Características gerais
    {
        question: "Quantos períodos tem a Pré-História?",
        options: ["Um", "Três", "Cinco", "Dez"],
        correct: 1,
        explanation: "São três: Paleolítico, Neolítico e Idade dos Metais!",
        wrongExplanation: ["É mais de um.", "", "Não são cinco.", "Não são dez."]
    },
    {
        question: "O que as pessoas pré-históricas comiam?",
        options: ["Fast food", "Carne de animais e frutos", "Apenas vegetais", "Somente peixe"],
        correct: 1,
        explanation: "Comiam carne de animais e frutos selvagens!",
        wrongExplanation: ["Fast food não existia.", "", "Comiam também vegetais.", "Comiam de tudo um pouco."]
    },
    {
        question: "As primeiras ferramentas eram feitas de:",
        options: ["Plástico", "Pedra", "Metal", "Vidro"],
        correct: 1,
        explanation: "As primeiras ferramentas eram de pedra!",
        wrongExplanation: ["Plástico não existia.", "", "Metal veio depois.", "Vidro também não existia."]
    },
    {
        question: "Para que servem as pinturas rupestres?",
        options: ["Apenas decoração", "Contar histórias e registrar a vida", "Apenas para brincar", "Para escrever"],
        correct: 1,
        explanation: "Eram usadas para contar histórias e registrar a vida diária!",
        wrongExplanation: ["Decoração era um benefício adicional.", "", "Eram sério, não era brincadeira.", "Elas substituíam a escrita!"]
    },
    {
        question: "Os historiadores são:",
        options: ["Médicos", "Profissionais que estudam o passado", "Professores de matemática", "Agricultores"],
        correct: 1,
        explanation: "Estudam o passado da humanidade!",
        wrongExplanation: ["Médicos tratam doenças.", "", "Professores ensinam várias matérias.", "Agricultores cultivam alimentos."]
    },
    // Ferramentas
    {
        question: "No Paleolítico, as pessoas usavam:",
        options: ["Lanças e foices", "Apenas as mãos", "Tratores", "Computadores"],
        correct: 0,
        explanation: "Usavam lanças para caçar e foices para cortar!",
        wrongExplanation: ["", "Usavam ferramentas também.", "Tratores não existiam.", "Computadores são modernos."]
    },
    {
        question: "Uma ferramenta do Paleolítico era:",
        options: ["Smartphone", "Machado de pedra", "Carro", "Geladeira"],
        correct: 1,
        explanation: "O machado de pedra era uma ferramenta comum!",
        wrongExplanation: ["Smartphone é moderno.", "", "Carro não existia.", "Geladeira também não."]
    },
    {
        question: "O que as mulheres do Neolítico cultivavam?",
        options: ["Apenas flores ornamentais", "Trigo, milho e legumes", "Apenas árvores", "Nada"],
        correct: 1,
        explanation: "Cultivavam trigo, milho e outros legumes!",
        wrongExplanation: ["Flores vinham depois.", "", "Cultivavam de tudo um pouco.", "Cultivavam sim!"]
    }
];

// Função para embaralhar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para selecionar 10 questões aleatórias
function getRandomQuestions(allQs, n) {
    const shuffled = shuffleArray([...allQs]);
    return shuffled.slice(0, n);
}

// Inicializa com 10 questões aleatórias
let quizQuestions = getRandomQuestions(allQuestions, 10);

let currentQuestion = 0;

function loadQuestion() {
    const q = quizQuestions[currentQuestion];
    document.getElementById('question-text').textContent = q.question;
    document.getElementById('current-q').textContent = currentQuestion + 1;
    document.getElementById('total-q').textContent = quizQuestions.length;
    document.getElementById('progress').style.width = ((currentQuestion + 1) / quizQuestions.length * 100) + '%';
    
    const optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = opt;
        btn.addEventListener('click', () => selectOption(index, btn));
        optionsEl.appendChild(btn);
    });
    
    document.getElementById('feedback').classList.remove('show');
    document.getElementById('next-btn').style.display = 'none';
}

function selectOption(index, btn) {
    const q = quizQuestions[currentQuestion];
    const isCorrect = index === q.correct;
    
    document.querySelectorAll('.option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    if (isCorrect) {
        btn.classList.add('correct');
        document.getElementById('feedback').className = 'feedback correct show';
        document.getElementById('feedback-title').textContent = '✅ Muito Bem!';
        document.getElementById('feedback-text').textContent = q.explanation;
        addScore(10);
        showFeedback('🎉', 'Muito Bem!', 'Você acertou! +10 pontos');
    } else {
        btn.classList.add('wrong');
        const wrongExp = q.wrongExplanation[index];
        document.getElementById('feedback').className = 'feedback wrong show';
        document.getElementById('feedback-title').textContent = '❌ Quase conseguiu!';
        document.getElementById('feedback-text').textContent = wrongExp;
        showFeedback('💪', 'Quase conseguiu!', 'A próxima você acerta!');
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
        document.getElementById('restart-btn').style.display = 'none';
    } else {
        document.getElementById('next-btn').style.display = 'none';
        setTimeout(() => {
            showQuizResult();
        }, 1600);
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showQuizResult();
    }
});

document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = 0;
    document.getElementById('restart-btn').style.display = 'none';
    quizQuestions = getRandomQuestions(allQuestions, 10);
    loadQuestion();
});

function showQuizResult() {
    const totalQuestions = quizQuestions.length;
    const correctAnswers = score / 10;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentage = (correctAnswers / totalQuestions) * 100;
    
    let title, text, emoji;
    
    if (percentage >= 80) {
        emoji = '🏆';
        title = 'Parabéns, Genial!';
        text = 'Você está pronto para a prova!';
    } else if (percentage >= 60) {
        emoji = '🌟';
        title = 'Muito Bem!';
        text = 'Continue estudando para ficar perfeito!';
    } else {
        emoji = '📚';
        title = 'Continue Estudando!';
        text = 'Pratique mais para melhorar!';
    }
    
    document.getElementById('modal-emoji').textContent = emoji;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').textContent = text;
    
    document.getElementById('stat-correct').textContent = correctAnswers;
    document.getElementById('stat-wrong').textContent = wrongAnswers;
    document.getElementById('stat-percent').textContent = Math.round(percentage) + '%';
    
    document.getElementById('modal-stats').style.display = 'block';
    document.getElementById('close-modal-btn').style.display = 'inline-block';
    
    document.getElementById('overlay').classList.add('show');
    document.getElementById('modal-feedback').classList.add('show');
}

document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('modal-feedback').classList.remove('show');
    document.getElementById('modal-stats').style.display = 'none';
    document.getElementById('close-modal-btn').style.display = 'none';
    
    // Verificar se é modal de estudo (tem stats oculto = estudo)
    if (document.getElementById('modal-stats').style.display === 'none' && 
        document.getElementById('modal-title').textContent !== 'Parabéns, Genial!' &&
        document.getElementById('modal-title').textContent !== 'Muito Bem!' &&
        document.getElementById('modal-title').textContent !== 'Continue Estudando!' &&
        !document.getElementById('modal-title').textContent.includes('Perfeito')) {
        // É modal de estudo - apenas fechar
        return;
    }
    
    // É modal de quiz - reiniciar
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = 0;
    quizQuestions = getRandomQuestions(allQuestions, 10);
    
    document.getElementById('restart-btn').style.display = 'inline-block';
    loadQuestion();
});

// Jogo de arrastar - Banco de itens
const gameItemsBank = [
    // Paleolítico (Pedra Lascada) - 8 itens
    { text: "🔪 Lança de pedra", period: "paleolitico" },
    { text: "🦌 Caça de animais", period: "paleolitico" },
    { text: "🪓 Machado de pedra", period: "paleolitico" },
    { text: "🍖 Carne assada", period: "paleolitico" },
    { text: "🏕️ Abrigo na caverna", period: "paleolitico" },
    { text: "🥩 Alimentação coletada", period: "paleolitico" },
    { text: "🔥 Fogo rudimentar", period: "paleolitico" },
    { text: "🎣 Armas de caça", period: "paleolitico" },
    
    // Neolítico (Pedra Polida / Agricultura) - 8 itens
    { text: "🌾 Plantação de trigo", period: "neolitico" },
    { text: "🏠 Casa fixa", period: "neolitico" },
    { text: "🪓 Ferramenta polida", period: "neolitico" },
    { text: "🌱 Agricultura", period: "neolitico" },
    { text: "🥘 Pizzaoleiras", period: "neolitico" },
    { text: "🐄 Criação de animais", period: "neolitico" },
    { text: "🏡 Aldeia", period: "neolitico" },
    { text: "🪺 Artefatos trabalhados", period: "neolitico" },
    
    // Idade dos Metais - 8 itens
    { text: "⛏️ Ferramenta de ferro", period: "metais" },
    { text: "⚔️ Espada de bronze", period: "metais" },
    { text: "🛡️ Escudo de metal", period: "metais" },
    { text: "🔨 Machado de ferro", period: "metais" },
    { text: "⚒️ Forja", period: "metais" },
    { text: "🏺 Objetos de bronze", period: "metais" },
    { text: "🔩 Metalurgia", period: "metais" },
    { text: "🗡️ Armas de ferro", period: "metais" }
];

// Função para embaralhar array
function shuffleGameArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Função para selecionar itens aleatórios para o jogo
function getRandomGameItems(bank, numItems = 8) {
    const shuffled = shuffleGameArray(bank);
    return shuffled.slice(0, numItems);
}

// Função para inicializar o jogo
function initGame() {
    const items = getRandomGameItems(gameItemsBank, 8);
    const container = document.getElementById('items-container');
    
    // Limpar container e slots
    container.innerHTML = '';
    document.querySelectorAll('.period-slot').forEach(slot => {
        const title = slot.querySelector('.slot-title');
        slot.innerHTML = '';
        if (title) slot.appendChild(title);
    });
    
    // Criar elementos arrastáveis
    items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'draggable';
        el.draggable = true;
        el.textContent = item.text;
        el.dataset.correct = item.period;
        container.appendChild(el);
    });
    
    // Inicializar event listeners
    initDragAndDrop();
    
    // Reset UI elements
    document.getElementById('game-result').classList.remove('show');
    document.getElementById('game-result').classList.remove('perfect', 'partial');
    document.getElementById('check-game').style.display = 'block';
    document.getElementById('restart-game-btn').style.display = 'none';
    
    // Atualizar draggables
    window.draggables = document.querySelectorAll('.draggable');
}

// Inicializar drag and drop
function initDragAndDrop() {
    const draggables = document.querySelectorAll('.draggable');
    const slots = document.querySelectorAll('.period-slot');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });
        
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    slots.forEach(slot => {
        slot.addEventListener('dragover', e => {
            e.preventDefault();
            slot.classList.add('drag-over');
        });
        
        slot.addEventListener('dragleave', () => {
            slot.classList.remove('drag-over');
        });
        
        slot.addEventListener('drop', e => {
            e.preventDefault();
            slot.classList.remove('drag-over');
            
            const draggable = document.querySelector('.dragging');
            if (draggable && !draggable.classList.contains('matched')) {
                slot.appendChild(draggable);
            }
        });
    });
}

document.getElementById('check-game').addEventListener('click', checkGame);

function checkGame() {
    const draggables = document.querySelectorAll('.draggable');
    let correct = 0;
    
    draggables.forEach(draggable => {
        const parentSlot = draggable.parentElement;
        if (parentSlot.classList.contains('period-slot')) {
            const correctPeriod = draggable.dataset.correct;
            const slotPeriod = parentSlot.dataset.period;
            
            if (correctPeriod === slotPeriod) {
                draggable.classList.add('matched');
                correct++;
            }
        }
    });
    
    const total = draggables.length;
    const percentage = (correct / total) * 100;
    const resultEl = document.getElementById('game-result');
    const titleEl = document.getElementById('result-title');
    const textEl = document.getElementById('result-text');
    
    resultEl.classList.remove('perfect', 'partial');
    
    if (percentage >= 70) {
        resultEl.classList.add('perfect', 'show');
        titleEl.textContent = '🎉 Perfeito!';
        textEl.textContent = `Você acertou ${correct} de ${total} itens!`;
        addScore(20);
        showFeedback('🎉', 'Incrível!', 'Você é um expert em Pré-História!');
    } else if (percentage >= 31) {
        resultEl.classList.add('partial', 'show');
        titleEl.textContent = '🌟 Muito Bem!';
        textEl.textContent = `Você acertou ${correct} de ${total} itens. Continue melhorando para alcançar um melhor resultado!`;
        addScore(10);
    } else {
        resultEl.classList.add('show');
        titleEl.textContent = '📚 Continue Estudando!';
        textEl.textContent = `Você acertou apenas ${correct} de ${total}. Estude mais os períodos para melhorar!`;
        showFeedback('💪', 'Quase conseguiu!', 'Estude mais os períodos e tente novamente!');
    }
    
    document.getElementById('check-game').style.display = 'none';
    document.getElementById('restart-game-btn').style.display = 'block';
}

// Botão Jogar Novamente
document.getElementById('restart-game-btn').addEventListener('click', () => {
    initGame();
});

// Inicializar jogo quando a aba for selecionada
const gameTabBtn = document.querySelector('[data-tab="game"]');
gameTabBtn.addEventListener('click', () => {
    setTimeout(initGame, 100);
});

// Feedback
function showFeedback(emoji, title, text) {
    document.getElementById('modal-emoji').textContent = emoji;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').textContent = text;
    document.getElementById('overlay').classList.add('show');
    document.getElementById('modal-feedback').classList.add('show');
    
    setTimeout(() => {
        document.getElementById('overlay').classList.remove('show');
        document.getElementById('modal-feedback').classList.remove('show');
    }, 1500);
}

// Inicializar
document.getElementById('restart-btn').style.display = 'none';
document.getElementById('modal-stats').style.display = 'none';
document.getElementById('close-modal-btn').style.display = 'none';
loadQuestion();