const quizData = [
    {
        question: "Qual é a finalidade de um mapa político?",
        options: [
            "Mostrar países, estados e cidades",
            "Mostrar o clima de uma região",
            "Mostrar as montanhas e rios",
            "Mostrar as atividades econômicas"
        ],
        correct: 0,
        explanation: "O mapa político é usado para mostrar a divisão política do território, como países, estados, municípios e suas fronteiras. É o tipo de mapa mais usado no dia a dia!"
    },
    {
        question: "Qual elemento do mapa nos ajuda a entender os símbolos usados?",
        options: [
            "Título",
            "Legenda",
            "Escala",
            "Orientação"
        ],
        correct: 1,
        explanation: "A legenda é muito importante! Ela explica o significado das cores, símbolos e sinais usados no mapa. Sem a legenda, seria impossível entender o mapa!"
    },
    {
        question: "O que a escala de um mapa mostra?",
        options: [
            "A direção norte-sul",
            "A proporção entre o mapa e a realidade",
            "O título do mapa",
            "As cores do mapa"
        ],
        correct: 1,
        explanation: "A escala mostra a relação entre o tamanho real do lugar e o tamanho no mapa. Por exemplo, 1 cm no mapa pode representar 1 km na realidade. É fundamental para calcular distâncias!"
    },
    {
        question: "Qual ponto cardeal indica onde o sol nasce?",
        options: [
            "Sul",
            "Norte",
            "Leste",
            "Oeste"
        ],
        correct: 2,
        explanation: "O sol sempre nasce no Leste (ou Este) e se põe no Oeste. É assim em todo o mundo! Por isso, o Leste também é chamado de Oriente."
    },
    {
        question: "Qual é o ponto cardeal principal da rosa dos ventos?",
        options: [
            "Sul",
            "Leste",
            "Norte",
            "Oeste"
        ],
        correct: 2,
        explanation: "O Norte é o ponto cardeal principal da rosa dos ventos. Ele indica a direção para o Polo Norte e geralmente fica na parte de cima dos mapas."
    },
    {
        question: "Qual região do Brasil possui a maior parte da Floresta Amazônica?",
        options: [
            "Nordeste",
            "Sudeste",
            "Norte",
            "Centro-Oeste"
        ],
        correct: 2,
        explanation: "A região Norte do Brasil abriga a maior parte da Floresta Amazônica, que é a maior floresta tropical do mundo! É uma das regiões mais importantes para o meio ambiente."
    },
    {
        question: "Quantas regiões o Brasil possui?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 2,
        explanation: "O Brasil possui 5 regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. Cada uma tem características próprias de clima, vegetação e economia."
    },
    {
        question: "Qual é a capital do Brasil?",
        options: [
            "Rio de Janeiro",
            "São Paulo",
            "Brasília",
            "Belo Horizonte"
        ],
        correct: 2,
        explanation: "Brasília é a capital do Brasil desde 1960. É uma cidade planejada localizada na região Centro-Oeste, exatamente no Distrito Federal."
    },
    {
        question: "O que são Capitanias Hereditárias?",
        options: [
            "Estados do Brasil",
            "Terras divididas para colonização",
            "Cidades importantes",
            "Países vizinhos"
        ],
        correct: 1,
        explanation: "As Capitanias Hereditárias foram a primeira forma de divisão das terras brasileiras, criadas pelo rei de Portugal no século XVI. Cada capitania era dada a um nobre para explorar."
    },
    {
        question: "Qual tratado dividiu as terras entre Espanha e Portugal?",
        options: [
            "Tratado de São Vicente",
            "Tratado de Tordesilhas",
            "Tratado de Paz",
            "Tratado de Fronteiras"
        ],
        correct: 1,
        explanation: "O Tratado de Tordesilhas, assinado em 1494, dividiu as terras descobertas entre Portugal e Espanha, definindo os limites das colônias. Foi muito importante para a formação do Brasil!"
    },
    {
        question: "Qual é a diferença entre o globo terrestre e o planisfério?",
        options: [
            "São iguais",
            "O globo é esférico e o planisfério é plano",
            "O planisfério é maior",
            "O globo é de plástico"
        ],
        correct: 1,
        explanation: "O globo terrestre tem forma arredondada (esférica) e mostra a Terra como ela realmente é. O planisfério é um mapa plano de todo o mundo, mais prático para guardar e usar."
    },
    {
        question: "Para que serve o título de um mapa?",
        options: [
            "Mostrar as cores",
            "Indicar o tema ou assunto do mapa",
            "Mostrar a legenda",
            "Indicar a escala"
        ],
        correct: 1,
        explanation: "O título é muito importante! Ele nos diz sobre o que é o mapa, como 'Mapa do Brasil', 'Mapa das Regiões' ou 'Mapa Climático'. Sempre devemos ler o título primeiro!"
    },
    {
        question: "Qual tipo de mapa mostra as atividades econômicas de uma região?",
        options: [
            "Mapa político",
            "Mapa físico",
            "Mapa econômico",
            "Mapa turístico"
        ],
        correct: 2,
        explanation: "O mapa econômico mostra as atividades produtivas de uma região, como indústria, agricultura, pecuária e comércio. Ajuda a entender como as pessoas trabalham em cada lugar."
    },
    {
        question: "Qual região do Brasil é conhecida por suas fazendas e produção de gado?",
        options: [
            "Norte",
            "Nordeste",
            "Centro-Oeste",
            "Sudeste"
        ],
        correct: 2,
        explanation: "O Centro-Oeste é muito conhecido pela pecuária (criação de gado) e pela agricultura, especialmente soja e milho. É uma região de grandes fazendas!"
    },
    {
        question: "O que a orientação do mapa indica?",
        options: [
            "As cores do mapa",
            "As direções (norte, sul, leste, oeste)",
            "O título",
            "A legenda"
        ],
        correct: 1,
        explanation: "A orientação nos ajuda a saber as direções do mapa. Geralmente, o mapa é orientado com o Norte para cima, o Sul para baixo, o Leste para a direita e o Oeste para a esquerda."
    },
    {
        question: "Qual é o maior estado do Brasil em extensão territorial?",
        options: [
            "São Paulo",
            "Minas Gerais",
            "Amazonas",
            "Mato Grosso"
        ],
        correct: 2,
        explanation: "O Amazonas é o maior estado do Brasil em extensão territorial, com mais de 1,5 milhão de km²! É maior que muitos países do mundo!"
    },
    {
        question: "Qual ponto colateral está entre o Norte e o Leste?",
        options: [
            "Nordeste",
            "Noroeste",
            "Sudeste",
            "Sudoeste"
        ],
        correct: 0,
        explanation: "O Nordeste está localizado entre o Norte e o Leste. É um ponto colateral muito importante da rosa dos ventos!"
    },
    {
        question: "O que são pontos cardeais?",
        options: [
            "Cidades do Brasil",
            "As quatro direções principais: Norte, Sul, Leste, Oeste",
            "Estados do país",
            "Países vizinhos"
        ],
        correct: 1,
        explanation: "Os pontos cardeais são as quatro direções principais: Norte (N), Sul (S), Leste (E) e Oeste (O). São usados para nos orientar em qualquer lugar do mundo!"
    },
    {
        question: "Qual instrumento nos ajuda a encontrar o Norte?",
        options: [
            "Relógio",
            "Bússola",
            "Termômetro",
            "Calculadora"
        ],
        correct: 1,
        explanation: "A bússola é um instrumento que indica a direção do Norte magnético. É muito usada por exploradores, viajantes e navegantes há séculos!"
    },
    {
        question: "Qual é a função da legenda em um mapa?",
        options: [
            "Dar título ao mapa",
            "Explicar os símbolos e cores usados",
            "Mostrar a escala",
            "Indicar as direções"
        ],
        correct: 1,
        explanation: "A legenda explica o significado de cada símbolo, cor e sinal usado no mapa. Sem ela, seria muito difícil entender o que o mapa está mostrando!"
    },
    {
        question: "Quantos estados o Brasil possui?",
        options: [
            "25",
            "26",
            "27",
            "28"
        ],
        correct: 2,
        explanation: "O Brasil possui 26 estados e 1 Distrito Federal, totalizando 27 unidades da federação. Cada estado tem sua própria administração!"
    },
    {
        question: "Qual região do Brasil é conhecida por sua produção de café?",
        options: [
            "Norte",
            "Nordeste",
            "Centro-Oeste",
            "Sudeste"
        ],
        correct: 3,
        explanation: "O Sudeste, especialmente São Paulo e Minas Gerais, é a principal região produtora de café do Brasil! O Brasil é um dos maiores produtores de café do mundo."
    },
    {
        question: "O que representa a cor verde em um mapa de relevo?",
        options: [
            "Regiões altas",
            "Regiões de altitude média",
            "Regiões baixas ou planas",
            "Regiões com água"
        ],
        correct: 2,
        explanation: "No mapa de relevo, o verde geralmente representa áreas baixas ou planas (planícies), enquanto o marrom representa áreas elevadas (montanhas e planaltos)."
    },
    {
        question: "Qual é o ponto oposto ao Norte na rosa dos ventos?",
        options: [
            "Leste",
            "Oeste",
            "Sul",
            "Nordeste"
        ],
        correct: 2,
        explanation: "O Sul é o ponto oposto ao Norte na rosa dos ventos. Se você sabe onde está o Norte, automaticamente sabe onde está o Sul (é do outro lado)!"
    },
    {
        question: "Qual tipo de mapa usamos para encontrar caminhos em uma cidade?",
        options: [
            "Mapa político",
            "Mapa de ruas e avenidas",
            "Mapa físico",
            "Mapa climático"
        ],
        correct: 1,
        explanation: "Para encontrar caminhos na cidade, usamos mapas de ruas e avenidas, que mostram as estradas, bairros, pontos de referência e ajudam a chegar ao destino."
    },
    {
        question: "O que é um município?",
        options: [
            "Um país",
            "Uma cidade com administração própria",
            "Um estado",
            "Um continente"
        ],
        correct: 1,
        explanation: "Um município é uma cidade com administração própria, liderada pelo prefeito (eleito pela população). É a menor unidade política do Brasil. O Brasil tem mais de 5.500 municípios!"
    },
    {
        question: "Qual região do Brasil é a mais populosa?",
        options: [
            "Norte",
            "Sul",
            "Nordeste",
            "Sudeste"
        ],
        correct: 3,
        explanation: "O Sudeste é a região mais populosa do Brasil, com mais de 80 milhões de habitantes, incluindo as grandes cidades de São Paulo e Rio de Janeiro!"
    },
    {
        question: "Para que servem os mapas no nosso dia a dia?",
        options: [
            "Apenas para escolas",
            "Para encontrar lugares, planejar viagens e conhecer novos lugares",
            "Para decoration ambientes",
            "Para jogar videogame"
        ],
        correct: 1,
        explanation: "Usamos mapas todos os dias! No GPS, para ir a lugares novos, planejar viagens, usar mapas de metrô e ônibus, e até para ver a previsão do tempo!"
    },
    {
        question: "Qual tipo de mapa mostra as montanhas e rios?",
        options: [
            "Mapa político",
            "Mapa físico",
            "Mapa econômico",
            "Mapa turístico"
        ],
        correct: 1,
        explanation: "O mapa físico (ou físico-natural) mostra as características da natureza, como montanhas, rios, lagos e oceanos. Também é chamado de mapa hipsométrico quando mostra o relevo."
    },
    {
        question: "O que é o planisfério?",
        options: [
            "Um instrumento musical",
            "Um mapa plano de todo o mundo",
            "Um tipo de relógio",
            "Um animal"
        ],
        correct: 1,
        explanation: "O planisfério é um mapa plano que mostra todo o planeta Terra de uma vez. É como desenhar o mundo em uma superfície plana. Também é chamado de mapa-múndi!"
    },
    {
        question: "Qual país faz fronteira com o Brasil pelo lado leste?",
        options: [
            "Argentina",
            "Não há país",
            "Venezuela",
            "Colômbia"
        ],
        correct: 1,
        explanation: "O Brasil não tem fronteira com nenhum país pelo lado leste! O Oceano Atlântico separa o Brasil dos outros países daquele lado. O Brasil só faz fronteira com países na América do Sul!"
    },
    {
        question: "Qual estado brasileiro é famoso pelas Cataratas do Iguaçu?",
        options: [
            "São Paulo",
            "Mato Grosso",
            "Paraná",
            "Bahia"
        ],
        correct: 2,
        explanation: "As Cataratas do Iguaçu estão no Paraná, na fronteira com a Argentina. É uma das maiores quedas d'água do mundo e um dos pontos turísticos mais importantes do Brasil!"
    },
    {
        question: "O que significa a expressão 'expandir o território'?",
        options: [
            "Diminuir o país",
            "Aumentar as terras de um país",
            "Fechar as fronteiras",
            "Mudar a capital"
        ],
        correct: 1,
        explanation: "Expandir o território significa aumentar as terras de um país. O Brasil cresceu muito ao longo da história, ocupando novas terras além dos limites originais."
    },
    {
        question: "Qual dessas NÃO é uma região do Brasil?",
        options: [
            "Norte",
            "Sudeste",
            "Centro-Oeste",
            "Noroeste"
        ],
        correct: 3,
        explanation: "O Brasil NÃO tem uma região chamada Noroeste! As 5 regiões oficiais são: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. Noroeste é apenas um ponto colateral!"
    },
    {
        question: "Qual instrumento antigo os navegantes usavam para se orientar pelo sol e pelas estrelas?",
        options: [
            "Bússola",
            "GPS",
            "Astrolábio",
            "Termômetro"
        ],
        correct: 2,
        explanation: "O astrolábio é um instrumento antigo usado por navegadores para se orientar no mar, observando as estrelas e o sol. Foi muito importante nas grandes navegações!"
    },
    {
        question: "Qual é a função da escala gráfica em um mapa?",
        options: [
            "Mostrar cores",
            "Medir distâncias no mapa",
            "Dar título",
            "Indicar a direção"
        ],
        correct: 1,
        explanation: "A escala gráfica é uma linha que mostra a proporção do mapa. Ela nos ajuda a medir distâncias reais entre lugares. É muito útil para planejar viagens!"
    },
    {
        question: "Qual região do Brasil possui a maior diversidade de povos indígenas?",
        options: [
            "Sudeste",
            "Sul",
            "Norte",
            "Nordeste"
        ],
        correct: 2,
        explanation: "A região Norte do Brasil possui a maior diversidade de povos indígenas, especialmente na Floressa Amazônica. Eles vivem lá há milhares de anos!"
    },
    {
        question: "O que é um mapa temático?",
        options: [
            "Um mapa sem informações",
            "Um mapa que aborda um tema específico",
            "Um mapa antigo",
            "Um mapa de países"
        ],
        correct: 1,
        explanation: "Um mapa temático fala sobre um assunto específico, como mapa do clima, mapa da população, mapa de vegetação, mapa econômico, etc. Cada um aborda um tema diferente!"
    },
    {
        question: "Qual ponto colateral está entre o Sul e o Leste?",
        options: [
            "Nordeste",
            "Noroeste",
            "Sudeste",
            "Sudoeste"
        ],
        correct: 2,
        explanation: "O Sudeste está localizado entre o Sul e o Leste. É um ponto colateral muito importante e também o nome de uma região do Brasil!"
    },
    {
        question: "Qual foi a primeira capital do Brasil?",
        options: [
            "Brasília",
            "Rio de Janeiro",
            "Salvador",
            "Recife"
        ],
        correct: 2,
        explanation: "Salvador foi a primeira capital do Brasil, desde 1549 até 1763, quando a capital foi transferida para o Rio de Janeiro. Brasília tornou-se a capital em 1960."
    },
    {
        question: "O que é o Distrito Federal?",
        options: [
            "Um estado",
            "Uma região especial onde está a capital Brasília",
            "Uma cidade comum",
            "Um município"
        ],
        correct: 1,
        explanation: "O Distrito Federal é uma região especial onde está localizada a capital Brasília. Não é um estado, mas tem características semelhantes. É onde fica o governo federal!"
    },
    {
        question: "Qual mapa usamos para saber o clima de uma região?",
        options: [
            "Mapa político",
            "Mapa climático",
            "Mapa físico",
            "Mapa de turismo"
        ],
        correct: 1,
        explanation: "O mapa climático mostra as condições de clima de uma região, como temperatura, chuvas e tipos de clima. É muito usado na previsão do tempo!"
    },
    {
        question: "O que são pontos colaterais?",
        options: [
            "Os 4 pontos principais",
            "Pontos entre os pontos cardeais",
            "Cidades importantes",
            "Estados do Brasil"
        ],
        correct: 1,
        explanation: "Os pontos colaterais estão entre os pontos cardeais: Nordeste (entre Norte e Leste), Sudeste (entre Sul e Leste), Sudoeste (entre Sul e Oeste), Noroeste (entre Norte e Oeste)."
    },
    {
        question: "Qual estado brasileiro é famoso pelo turismo de inverno e serras?",
        options: [
            "Bahia",
            "Pernambuco",
            "Santa Catarina",
            "Amazonas"
        ],
        correct: 2,
        explanation: "Santa Catarina é famosa pelas serras e turismo de inverno, especialmente em cidades como Gramado e São Joaquim. Neve é comum там no inverno!"
    },
    {
        question: "O que são coordenadas geográficas?",
        options: [
            "Endereços de cidades",
            "Números que mostram a posição de um lugar no planeta",
            "Nomes de países",
            "Cores do mapa"
        ],
        correct: 1,
        explanation: "As coordenadas geográficas são números (latitude e longitude) que mostram a posição exata de qualquer lugar na Terra. São usadas pelo GPS!"
    },
    {
        question: "Qual tipo de representação da Terra é mais precisa?",
        options: [
            "Mapa plano",
            "Planisfério",
            "Globo terrestre",
            "Fotografia"
        ],
        correct: 2,
        explanation: "O globo terrestre é a representação mais precisa da Terra porque tem formato arredondado, igual ao planeta de verdade. Não distorce as formas dos continentes!"
    },
    {
        question: "O que significa a expressão 'ler um mapa'?",
        options: [
            "Escrever no mapa",
            "Entender as informações do mapa",
            "Desenhar um mapa",
            "Guardar o mapa"
        ],
        correct: 1,
        explanation: "Ler um mapa significa entender todas as suas informações: título, legenda, escala, orientação e símbolos. É uma habilidade muito importante!"
    },
    {
        question: "Qual região do Brasil é conhecida pela produção de petróleo?",
        options: [
            "Norte",
            "Centro-Oeste",
            "Sudeste",
            "Sul"
        ],
        correct: 2,
        explanation: "O Sudeste, especialmente o Rio de Janeiro e Espírito Santo, é conhecido pela produção de petróleo e gás natural no Brasil. É uma região muito importante para a economia!"
    },
    {
        question: "O que é a linha do Equador?",
        options: [
            "Um rio",
            "Uma linha imaginária que divide a Terra em Norte e Sul",
            "Uma estrada",
            "Uma montanha"
        ],
        correct: 1,
        explanation: "A linha do Equador é uma linha imaginária que divide a Terra em dois hemisférios: Norte e Sul. Passa pelo Brasil, cortando o país ao meio! locais próximos à linha são mais quentes."
    },
    {
        question: "Qual mapa usamos para planejar viagens turísticas?",
        options: [
            "Mapa político",
            "Mapa turístico",
            "Mapa climático",
            "Mapa econômico"
        ],
        correct: 1,
        explanation: "O mapa turístico mostra pontos turísticos, hotéis, restaurantes, estradas e atrações de uma região. É muito útil para quem está planejando viagens e passeios!"
    }
];

const simuladoData = [
    {
        question: "Qual desses é um elemento obrigatório de um mapa?",
        options: ["Título", "Fotografia", "Cor rosa", "Música"],
        correct: 0,
        explanation: "Todo mapa precisa ter um título que indica o tema ou assunto representado. É o primeiro elemento que devemos ler!"
    },
    {
        question: "O Brasil possui quantas regiões?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "O Brasil é dividido em 5 regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. Cada uma tem características próprias!"
    },
    {
        question: "A rosa dos ventos serve para:",
        options: [
            "Decoração do mapa",
            "Nos orientar no espaço",
            "Colorir o mapa",
            "Dar nome aos países"
        ],
        correct: 1,
        explanation: "A rosa dos ventos nos ajuda a nos orientar, indicando as direções principais: Norte, Sul, Leste e Oeste, e também os pontos colaterais!"
    },
    {
        question: "Qual região do Brasil tem maior extensão territorial?",
        options: ["Sudeste", "Sul", "Norte", "Nordeste"],
        correct: 2,
        explanation: "A região Norte é a maior em extensão territorial, ocupando quase metade do território brasileiro. É a região da Floresta Amazônica!"
    },
    {
        question: "O que a legenda de um mapa explica?",
        options: [
            "O título do mapa",
            "Os símbolos e cores usados",
            "O nome do autor",
            "A data de criação"
        ],
        correct: 1,
        explanation: "A legenda explica o significado de cada símbolo, cor e sinal usado no mapa, sendo fundamental para entendê-lo. Sempre consulte a legenda!"
    },
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
        correct: 2,
        explanation: "Brasília é a capital do Brasil desde 1960. Está localizada na região Centro-Oeste, dentro do Distrito Federal."
    },
    {
        question: "O mapa político mostra:",
        options: [
            "Montanhas e rios",
            "Países, estados e cidades",
            "Clima e temperatura",
            "Atividades econômicas"
        ],
        correct: 1,
        explanation: "O mapa político mostra a divisão política do território: países, estados, municípios e suas fronteiras. É o tipo de mapa mais usado!"
    },
    {
        question: "O que é um município?",
        options: [
            "Um país",
            "Uma cidade com administração própria",
            "Um continente",
            "Um oceano"
        ],
        correct: 1,
        explanation: "Um município é uma cidade com administração própria, liderada pelo prefeito (eleito pela população). É a menor unidade política do Brasil. O Brasil tem mais de 5.500 municípios!"
    },
    {
        question: "O Tratado de Tordesilhas foi assinado entre:",
        options: [
            "Brasil e Argentina",
            "Portugal e Espanha",
            "Brasil e Portugal",
            "Espanha e Argentina"
        ],
        correct: 1,
        explanation: "O Tratado de Tordesilhas foi assinado em 1494 entre Portugal e España, dividindo as terras descobertas entre os dois países. Foi fundamental para a formação do Brasil!"
    },
    {
        question: "Para que usamos o GPS?",
        options: [
            "Para cozinhar",
            "Para encontrar caminhos e locais",
            "Para escrever",
            "Para dormir"
        ],
        correct: 1,
        explanation: "O GPS (Sistema de Posicionamento Global) nos ajuda a encontrar caminhos e locais usando mapas e satélites no espaço. É usado em celulares e carros!"
    }
];

const gameData = [
    {
        item: "Mapa Político",
        target: "Mostra países, estados e cidades",
        category: "Tipos de Mapa"
    },
    {
        item: "Legenda",
        target: "Explica os símbolos do mapa",
        category: "Elementos do Mapa"
    },
    {
        item: "Norte",
        target: "Ponto cardeal principal",
        category: "Rosa dos Ventos"
    },
    {
        item: "Escala",
        target: "Mostra a proporção do mapa",
        category: "Elementos do Mapa"
    },
    {
        item: "Brasil",
        target: "País dividido em 5 regiões",
        category: "Brasil"
    }
];

let currentQuizQuestion = 0;
let quizQuestions = [];
let quizCorrect = 0;
let quizWrong = 0;
let selectedOption = null;
let answered = false;

let simuladoAnswers = [];
let simuladoCurrentQuestion = 0;

let gameItems = [];
let gameTargets = [];
let gameCorrectCount = 0;

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initQuiz() {
    quizQuestions = shuffleArray(quizData).slice(0, 10);
    currentQuizQuestion = 0;
    quizCorrect = 0;
    quizWrong = 0;
    showQuizQuestion();
}

function showQuizQuestion() {
    const question = quizQuestions[currentQuizQuestion];
    document.getElementById('current-question').textContent = currentQuizQuestion + 1;
    document.getElementById('quiz-progress-fill').style.width = ((currentQuizQuestion + 1) / 10 * 100) + '%';
    
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('question-card').style.display = 'block';
    document.getElementById('feedback-container').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    
    selectedOption = null;
    answered = false;
}

function selectOption(index) {
    if (answered) return;
    
    selectedOption = index;
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) {
            btn.classList.add('selected');
        }
    });
    
    const question = quizQuestions[currentQuizQuestion];
    const isCorrect = index === question.correct;
    
    answered = true;
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === question.correct) {
            btn.classList.add('correct');
        } else if (i === index && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    if (isCorrect) {
        quizCorrect++;
        document.getElementById('feedback-icon').textContent = '✅';
        document.getElementById('feedback-text').textContent = 'Muito bem! Você acertou!';
        document.getElementById('feedback-text').className = 'feedback-text correct';
    } else {
        quizWrong++;
        document.getElementById('feedback-icon').textContent = '❌';
        document.getElementById('feedback-text').textContent = 'Ops! Não foi dessa vez.';
        document.getElementById('feedback-text').className = 'feedback-text wrong';
    }
    
    document.getElementById('explanation-box').innerHTML = `<p><strong>Explicação:</strong> ${question.explanation}</p>`;
    
    const isLastQuestion = currentQuizQuestion === 9;
    document.getElementById('next-button').textContent = isLastQuestion ? 'Ver Resultado' : 'Próxima Questão';
    
    document.getElementById('question-card').style.display = 'none';
    document.getElementById('feedback-container').style.display = 'block';
}

document.getElementById('next-button').addEventListener('click', () => {
    if (currentQuizQuestion < 9) {
        currentQuizQuestion++;
        showQuizQuestion();
    } else {
        showQuizResult();
    }
});

function showQuizResult() {
    document.getElementById('feedback-container').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    
    const percentage = (quizCorrect / 10) * 100;
    document.getElementById('correct-count').textContent = quizCorrect;
    document.getElementById('wrong-count').textContent = quizWrong;
    document.getElementById('percentage').textContent = percentage + '%';
    
    let message = '';
    if (percentage === 100) {
        message = '🎉 Incrível! Você acertou todas as questões! Você é um expert em geografia!';
    } else if (percentage >= 70) {
        message = '🌟 Muito bem! Você conhece muito bem o conteúdo! Continue assim!';
    } else if (percentage >= 50) {
        message = '👍 Bom trabalho! Você está no caminho certo. Revise o resumo e tente novamente!';
    } else {
        message = '💪 Não desanime! Assista o resumo novamente e tente mais uma vez. Você consegue!';
    }
    document.getElementById('result-message').textContent = message;
}

document.getElementById('restart-quiz').addEventListener('click', initQuiz);

function initSimulado() {
    simuladoCurrentQuestion = 0;
    simuladoAnswers = new Array(10).fill(null);
    renderSimuladoQuestions();
    document.getElementById('simulado-result').style.display = 'none';
    document.getElementById('submit-simulado').disabled = true;
}

function renderSimuladoQuestions() {
    const container = document.getElementById('simulado-questions');
    container.innerHTML = '';
    
    simuladoData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'simulado-question';
        
        let optionsHTML = '';
        q.options.forEach((opt, optIndex) => {
            const isSelected = simuladoAnswers[index] === optIndex;
            optionsHTML += `
                <button class="simulado-option ${isSelected ? 'selected' : ''}" 
                        onclick="selectSimuladoOption(${index}, ${optIndex})">
                    ${opt}
                </button>
            `;
        });
        
        questionDiv.innerHTML = `
            <h4>${index + 1}. ${q.question}</h4>
            <div class="simulado-options">${optionsHTML}</div>
        `;
        
        container.appendChild(questionDiv);
    });
}

function selectSimuladoOption(questionIndex, optionIndex) {
    simuladoAnswers[questionIndex] = optionIndex;
    renderSimuladoQuestions();
    
    const allAnswered = simuladoAnswers.every(a => a !== null);
    document.getElementById('submit-simulado').disabled = !allAnswered;
}

document.getElementById('submit-simulado').addEventListener('click', () => {
    let correct = 0;
    let wrong = 0;
    
    const reviewHTML = simuladoData.map((q, index) => {
        const userAnswer = simuladoAnswers[index];
        const isCorrect = userAnswer === q.correct;
        
        if (isCorrect) correct++;
        else wrong++;
        
        return `
            <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
                <h5>Questão ${index + 1}: ${isCorrect ? '✅ Correto' : '❌ Incorreto'}</h5>
                <p><strong>Sua resposta:</strong> ${q.options[userAnswer]}</p>
                <p><strong>Correta:</strong> ${q.options[q.correct]}</p>
                <p><strong>Explicação:</strong> ${q.explanation}</p>
            </div>
        `;
    }).join('');
    
    document.getElementById('simulado-correct').textContent = correct;
    document.getElementById('simulado-wrong').textContent = wrong;
    document.getElementById('simulado-percentage').textContent = (correct * 10) + '%';
    document.getElementById('simulado-review').innerHTML = reviewHTML;
    document.getElementById('simulado-result').style.display = 'block';
});

document.getElementById('restart-simulado').addEventListener('click', initSimulado);

function initGame() {
    gameItems = shuffleArray([...gameData]);
    gameTargets = shuffleArray([...gameData]);
    gameCorrectCount = 0;
    
    renderGame();
    document.getElementById('game-result').style.display = 'none';
    document.getElementById('check-answers').disabled = true;
}

function renderGame() {
    const itemsContainer = document.getElementById('game-items');
    const targetsContainer = document.getElementById('game-targets');
    
    itemsContainer.innerHTML = gameItems.map((item, index) => `
        <div class="draggable-item" draggable="true" data-index="${index}" id="item-${index}">
            ${item.item}
        </div>
    `).join('');
    
    targetsContainer.innerHTML = gameTargets.map((target, index) => `
        <div class="drop-target" data-index="${index}" id="target-${index}">
            <span class="target-label">${target.target}</span>
        </div>
    `).join('');
    
    document.getElementById('game-progress-fill').style.width = '0%';
    document.getElementById('game-correct-count').textContent = '0';
    
    setupDragAndDrop();
}

function setupDragAndDrop() {
    const draggables = document.querySelectorAll('.draggable-item');
    const targets = document.querySelectorAll('.drop-target');
    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
            e.target.classList.add('dragging');
        });
        
        draggable.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });
    
    targets.forEach(target => {
        target.addEventListener('dragover', (e) => {
            e.preventDefault();
            target.classList.add('drag-over');
        });
        
        target.addEventListener('dragleave', (e) => {
            target.classList.remove('drag-over');
        });
        
        target.addEventListener('drop', (e) => {
            e.preventDefault();
            target.classList.remove('drag-over');
            
            const draggableId = e.dataTransfer.getData('text/plain');
            const draggable = document.getElementById(draggableId);
            
            if (target.querySelector('.dropped-item')) return;
            
            const droppedItem = document.createElement('span');
            droppedItem.className = 'dropped-item';
            droppedItem.id = `dropped-${draggableId}`;
            droppedItem.textContent = draggable.textContent;
            target.appendChild(droppedItem);
            
            draggable.classList.add('matched');
            draggable.setAttribute('draggable', 'false');
            
            gameCorrectCount++;
            document.getElementById('game-correct-count').textContent = gameCorrectCount;
            document.getElementById('game-progress-fill').style.width = (gameCorrectCount / 5 * 100) + '%';
            
            if (gameCorrectCount === 5) {
                document.getElementById('check-answers').disabled = false;
            }
        });
    });
}

document.getElementById('check-answers').addEventListener('click', () => {
    const targets = document.querySelectorAll('.drop-target');
    
    targets.forEach((target, targetIndex) => {
        const droppedItem = target.querySelector('.dropped-item');
        if (!droppedItem) return;
        
        const itemText = droppedItem.textContent;
        const targetData = gameTargets[targetIndex];
        
        const matchingItem = gameData.find(g => g.item === itemText);
        
        if (matchingItem && matchingItem.target === targetData.target) {
            target.classList.add('correct');
        } else {
            target.classList.add('incorrect');
        }
    });
    
    const correctCount = document.querySelectorAll('.drop-target.correct').length;
    const resultTitle = document.getElementById('game-result-title');
    const resultMessage = document.getElementById('game-result-message');
    
    if (correctCount >= 4) {
        resultTitle.textContent = '🌟 Excelente!';
        resultMessage.textContent = `Você acertou ${correctCount} de 5! Você é muito bom em geografia!`;
    } else if (correctCount >= 2) {
        resultTitle.textContent = '👍 Bom trabalho!';
        resultMessage.textContent = `Você acertou ${correctCount} de 5! Continue praticando!`;
    } else {
        resultTitle.textContent = '💪 Continue tentando!';
        resultMessage.textContent = `Você acertou ${correctCount} de 5. Revise o resumo e tente novamente!`;
    }
    
    document.getElementById('game-result').style.display = 'block';
    document.getElementById('check-answers').disabled = true;
});

document.getElementById('restart-game').addEventListener('click', initGame);

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        
        if (tabId === 'quiz' && quizQuestions.length === 0) {
            initQuiz();
        } else if (tabId === 'simulado' && simuladoAnswers.length === 0) {
            initSimulado();
        } else if (tabId === 'gamificacao' && gameItems.length === 0) {
            initGame();
        }
    });
});

initQuiz();