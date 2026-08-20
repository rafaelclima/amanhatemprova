// ===== BANCO DE QUESTÕES (60) =====
// tipo: 'quem_somos' (Cap. 5.1), 'povos_formadores' (Cap. 5.2),
//       'contribuicoes' (Cap. 6.1) ou 'asia' (Cap. 6.2)
const bancoQuestoes = [
  // ===== CAPÍTULO 5 — QUEM SÃO OS BRASILEIROS (15) =====
  { id: 1, tipo: 'quem_somos', q: 'O que é miscigenação?',
    alternativas: [
      { texto: 'A mistura de povos diferentes', correta: true, explicacao: 'Miscigenação é a mistura de povos. Foi assim que o povo brasileiro se formou!' },
      { texto: 'A separação dos povos', correta: false, explicacao: 'Separar povos é o contrário! Miscigenação é a MISTURA de povos diferentes.' },
      { texto: 'A língua falada por um povo', correta: false, explicacao: 'A língua é uma herança cultural. Miscigenação é a mistura de povos!' }
    ] },
  { id: 2, tipo: 'quem_somos', q: 'O povo brasileiro é formado por...',
    alternativas: [
      { texto: 'pessoas de muitas origens diferentes', correta: true, explicacao: 'O Brasil tem mais de 200 milhões de pessoas com origens, costumes e culturas diferentes!' },
      { texto: 'um único povo, sem misturas', correta: false, explicacao: 'Não! O Brasil é um país de muita mistura: indígenas, portugueses, africanos e imigrantes.' },
      { texto: 'apenas pessoas que vieram da Europa', correta: false, explicacao: 'A Europa trouxe muitos imigrantes, mas o Brasil é feito de povos de vários continentes!' }
    ] },
  { id: 3, tipo: 'quem_somos', q: 'O que é diversidade?',
    alternativas: [
      { texto: 'Muitas diferenças juntas', correta: true, explicacao: 'Diversidade é ter muitas diferenças juntas: cores, costumes, comidas e tradições variadas!' },
      { texto: 'Todas as pessoas iguais', correta: false, explicacao: 'Se todos fossem iguais não haveria diversidade! Diversidade é exatamente a mistura de diferenças.' },
      { texto: 'Um tipo de comida', correta: false, explicacao: 'Comida é cultura! Diversidade é a presença de muitas diferenças juntas.' }
    ] },
  { id: 4, tipo: 'quem_somos', q: 'A maioria dos brasileiros descende da mistura de quais povos?',
    alternativas: [
      { texto: 'Indígenas, portugueses e africanos', correta: true, explicacao: 'Esses são os povos formadores: indígenas, portugueses e africanos, que se misturaram!' },
      { texto: 'Apenas portugueses', correta: false, explicacao: 'Os portugueses são um dos povos formadores, mas indígenas e africanos também fazem parte!' },
      { texto: 'Apenas imigrantes asiáticos', correta: false, explicacao: 'Os asiáticos chegaram depois! Os povos formadores são indígenas, portugueses e africanos.' }
    ] },
  { id: 5, tipo: 'quem_somos', q: 'O que é população?',
    alternativas: [
      { texto: 'O conjunto de pessoas que vivem em um lugar', correta: true, explicacao: 'População é o conjunto de todas as pessoas que vivem em um lugar, como o Brasil!' },
      { texto: 'A capital de um país', correta: false, explicacao: 'A capital é uma cidade! População é o conjunto de pessoas que vivem em um lugar.' },
      { texto: 'Um tipo de festa popular', correta: false, explicacao: 'Festa popular é diferente! População são as pessoas que vivem em um lugar.' }
    ] },
  { id: 6, tipo: 'quem_somos', q: 'Quantas pessoas vivem aproximadamente no Brasil?',
    alternativas: [
      { texto: 'Mais de 200 milhões', correta: true, explicacao: 'O Brasil tem mais de 200 milhões de habitantes — muita gente diferente!' },
      { texto: 'Menos de 1 milhão', correta: false, explicacao: 'O Brasil é muito populoso: são mais de 200 milhões de pessoas!' },
      { texto: 'Exatamente 50 milhões', correta: false, explicacao: 'São muito mais! O Brasil tem mais de 200 milhões de habitantes.' }
    ] },
  { id: 7, tipo: 'quem_somos', q: 'Qual língua falamos principalmente no Brasil?',
    alternativas: [
      { texto: 'Português', correta: true, explicacao: 'Falamos o português, língua trazida pelos portugueses — mas com muitas palavras de outros povos!' },
      { texto: 'Inglês', correta: false, explicacao: 'O inglês é estudado na escola, mas a língua principal do Brasil é o português!' },
      { texto: 'Japonês', correta: false, explicacao: 'O japonês veio com os imigrantes, mas a língua principal do Brasil é o português!' }
    ] },
  { id: 8, tipo: 'quem_somos', q: 'A diversidade do Brasil é motivo de...',
    alternativas: [
      { texto: 'orgulho', correta: true, explicacao: 'Ter muitas culturas juntas nos enriquece: é um orgulho sermos um povo tão diverso!' },
      { texto: 'vergonha', correta: false, explicacao: 'Nada disso! A diversidade é uma riqueza e um motivo de orgulho!' },
      { texto: 'tristeza', correta: false, explicacao: 'A mistura de culturas é uma festa! A diversidade é motivo de orgulho.' }
    ] },
  { id: 9, tipo: 'quem_somos', q: 'Nossos antepassados vieram...',
    alternativas: [
      { texto: 'de lugares diferentes', correta: true, explicacao: 'Nossos avós e bisavós vieram de vários lugares, por isso cada família tem uma história!' },
      { texto: 'todos do mesmo lugar', correta: false, explicacao: 'Não! Os brasileiros têm antepassados vindos de vários lugares do mundo.' },
      { texto: 'apenas do espaço', correta: false, explicacao: 'Haha, não! Nossos antepassados vieram de lugares diferentes aqui da Terra!' }
    ] },
  { id: 10, tipo: 'quem_somos', q: 'Quem são os antepassados?',
    alternativas: [
      { texto: 'Os avós, bisavós e pessoas que vieram antes de nós', correta: true, explicacao: 'Antepassados são as pessoas da nossa família que viveram antes de nós!' },
      { texto: 'As pessoas que moram ao nosso lado', correta: false, explicacao: 'Os vizinhos não são antepassados! Antepassados são os que vieram antes de nós.' },
      { texto: 'Somente os professores', correta: false, explicacao: 'Antepassados são da nossa família: avós, bisavós e quem veio antes de nós!' }
    ] },
  { id: 11, tipo: 'quem_somos', q: 'As comidas, festas e músicas do Brasil...',
    alternativas: [
      { texto: 'são uma mistura de várias culturas', correta: true, explicacao: 'Nossa cultura é uma mistura: comidas, festas e músicas de vários povos juntas!' },
      { texto: 'vieram todas de um único povo', correta: false, explicacao: 'Nada disso! Cada povo contribuiu com um pedacinho da nossa cultura.' },
      { texto: 'não têm relação com os povos', correta: false, explicacao: 'Têm total relação! As comidas, festas e músicas vieram dos povos que formaram o Brasil.' }
    ] },
  { id: 12, tipo: 'quem_somos', q: 'O que a miscigenação fez com a cultura brasileira?',
    alternativas: [
      { texto: 'Tornou a cultura mais rica e variada', correta: true, explicacao: 'A mistura de povos deixou a cultura brasileira muito rica e variada!' },
      { texto: 'Acabou com todas as tradições', correta: false, explicacao: 'Ao contrário! A mistura juntou muitas tradições e criou uma cultura riquíssima.' },
      { texto: 'Deixou o Brasil sem cultura', correta: false, explicacao: 'O Brasil tem uma das culturas mais ricas do mundo, justamente por causa da mistura!' }
    ] },
  { id: 13, tipo: 'quem_somos', q: 'A palavra "população" serve para...',
    alternativas: [
      { texto: 'falar de todas as pessoas que vivem em um lugar', correta: true, explicacao: 'Quando falamos da população do Brasil, falamos de todos que vivem aqui!' },
      { texto: 'falar apenas das crianças', correta: false, explicacao: 'População inclui todo mundo: crianças, jovens, adultos e idosos!' },
      { texto: 'falar só dos animais', correta: false, explicacao: 'População é sobre pessoas! O conjunto de pessoas que vivem em um lugar.' }
    ] },
  { id: 14, tipo: 'quem_somos', q: 'Por que cada brasileiro tem uma história diferente?',
    alternativas: [
      { texto: 'Porque nossas famílias vieram de origens diferentes', correta: true, explicacao: 'Cada família tem uma origem: alguns vieram de Portugal, outros da África, do Japão...' },
      { texto: 'Porque todos nasceram no mesmo lugar', correta: false, explicacao: 'Se todos tivessem a mesma origem, as histórias seriam parecidas! Nossas origens são diferentes.' },
      { texto: 'Porque histórias não existem', correta: false, explicacao: 'Toda família tem história! E no Brasil elas são diferentes porque nossas origens também são.' }
    ] },
  { id: 15, tipo: 'quem_somos', q: 'O que é ser diverso?',
    alternativas: [
      { texto: 'Ter diferenças: cores, costumes e tradições diferentes', correta: true, explicacao: 'Ser diverso é ter diferenças — e o Brasil é um país muito diverso!' },
      { texto: 'Ser igual a todo mundo', correta: false, explicacao: 'Ser igual não é diversidade! Diverso é ter diferenças.' },
      { texto: 'Morar em outro planeta', correta: false, explicacao: 'Diverso tem a ver com diferenças entre pessoas, não com planetas!' }
    ] },

  // ===== CAPÍTULO 5 — TERRITÓRIO DOS POVOS FORMADORES (15) =====
  { id: 16, tipo: 'povos_formadores', q: 'Quais são os três povos formadores do Brasil?',
    alternativas: [
      { texto: 'Indígenas, portugueses e africanos', correta: true, explicacao: 'Os povos formadores são indígenas, portugueses e africanos — a base do nosso povo!' },
      { texto: 'Japoneses, chineses e coreanos', correta: false, explicacao: 'Esses povos vieram da Ásia depois! Os formadores são indígenas, portugueses e africanos.' },
      { texto: 'Italianos, alemães e espanhóis', correta: false, explicacao: 'Esses são imigrantes europeus que chegaram depois! Os formadores são indígenas, portugueses e africanos.' }
    ] },
  { id: 17, tipo: 'povos_formadores', q: 'Qual povo já vivia no Brasil antes de 1500?',
    alternativas: [
      { texto: 'Os indígenas', correta: true, explicacao: 'Os indígenas já habitavam o território brasileiro muito antes dos portugueses chegarem!' },
      { texto: 'Os portugueses', correta: false, explicacao: 'Os portugueses chegaram em 1500! Quem já vivia aqui eram os indígenas.' },
      { texto: 'Os japoneses', correta: false, explicacao: 'Os japoneses chegaram só em 1908! Antes de 1500, quem vivia aqui eram os indígenas.' }
    ] },
  { id: 18, tipo: 'povos_formadores', q: 'De qual continente vieram os portugueses?',
    alternativas: [
      { texto: 'Europa', correta: true, explicacao: 'Portugal fica na Europa! Foi de lá que os portugueses navegaram até o Brasil.' },
      { texto: 'África', correta: false, explicacao: 'Da África vieram os africanos! Os portugueses vieram da Europa.' },
      { texto: 'Ásia', correta: false, explicacao: 'Da Ásia vieram japoneses, chineses e coreanos! Portugal fica na Europa.' }
    ] },
  { id: 19, tipo: 'povos_formadores', q: 'Como os portugueses chegaram ao Brasil?',
    alternativas: [
      { texto: 'Em caravelas, navegando pelo mar', correta: true, explicacao: 'Os portugueses vieram em caravelas, navios a vela que aguentavam viagens longas!' },
      { texto: 'De avião', correta: false, explicacao: 'Em 1500 não existia avião! Eles vieram de caravelas, navegando pelo mar.' },
      { texto: 'Andando pelo continente', correta: false, explicacao: 'Portugal é separado do Brasil pelo oceano! Eles vieram navegando em caravelas.' }
    ] },
  { id: 20, tipo: 'povos_formadores', q: 'De qual continente vieram os africanos?',
    alternativas: [
      { texto: 'África', correta: true, explicacao: 'Os africanos vieram do continente africano, que fica do outro lado do oceano!' },
      { texto: 'Europa', correta: false, explicacao: 'Da Europa vieram os portugueses! Os africanos vieram da África.' },
      { texto: 'América', correta: false, explicacao: 'Os indígenas são da América! Os africanos vieram do continente África.' }
    ] },
  { id: 21, tipo: 'povos_formadores', q: 'Como os africanos vieram para o Brasil?',
    alternativas: [
      { texto: 'Trazidos à força, em navios', correta: true, explicacao: 'Os africanos foram trazidos à força, em navios — isso foi a escravidão, algo muito injusto.' },
      { texto: 'Vieram passear de avião', correta: false, explicacao: 'Não foi um passeio! Eles foram trazidos à força, em navios, para trabalhar.' },
      { texto: 'Vieram de carona', correta: false, explicacao: 'Nada disso! Os africanos foram trazidos à força, em navios, na escravidão.' }
    ] },
  { id: 22, tipo: 'povos_formadores', q: 'Para que os africanos foram trazidos ao Brasil?',
    alternativas: [
      { texto: 'Para trabalhar nas fazendas e engenhos', correta: true, explicacao: 'Eles foram forçados a trabalhar nas fazendas e engenhos — um trabalho escravo e cruel.' },
      { texto: 'Para ensinar nas escolas', correta: false, explicacao: 'Não! Eles foram trazidos à força para trabalhar nas fazendas e engenhos.' },
      { texto: 'Para governar o país', correta: false, explicacao: 'Os africanos não vieram para governar! Foram forçados ao trabalho escravo.' }
    ] },
  { id: 23, tipo: 'povos_formadores', q: 'O que é escravidão?',
    alternativas: [
      { texto: 'Tirar a liberdade das pessoas e tratá-las como mercadoria', correta: true, explicacao: 'A escravidão tirou a liberdade de milhões de pessoas — algo muito triste e injusto.' },
      { texto: 'Um tipo de festa', correta: false, explicacao: 'Escravidão não é festa! É tirar a liberdade das pessoas, algo muito injusto.' },
      { texto: 'Uma forma de ajudar as pessoas', correta: false, explicacao: 'Escravidão não ajuda ninguém: é tratar pessoas como mercadoria, sem liberdade.' }
    ] },
  { id: 24, tipo: 'povos_formadores', q: 'Quais são exemplos de povos indígenas do Brasil?',
    alternativas: [
      { texto: 'Tupi e Guarani', correta: true, explicacao: 'Tupi e Guarani são exemplos de povos indígenas que já viviam no Brasil!' },
      { texto: 'Portugueses e espanhóis', correta: false, explicacao: 'Portugueses e espanhóis vieram da Europa! Tupi e Guarani são povos indígenas.' },
      { texto: 'Italianos e alemães', correta: false, explicacao: 'Italianos e alemães são imigrantes europeus! Tupi e Guarani são povos indígenas.' }
    ] },
  { id: 25, tipo: 'povos_formadores', q: 'O que os portugueses trouxeram para o Brasil?',
    alternativas: [
      { texto: 'A língua portuguesa e costumes europeus', correta: true, explicacao: 'Os portugueses trouxeram a língua portuguesa e costumes da Europa, que se misturaram com os indígenas!' },
      { texto: 'O sushi e o origami', correta: false, explicacao: 'Sushi e origami vieram com os japoneses! Os portugueses trouxeram a língua portuguesa.' },
      { texto: 'A festa do Bon Odori', correta: false, explicacao: 'O Bon Odori é uma festa japonesa! Os portugueses trouxeram a língua e costumes europeus.' }
    ] },
  { id: 26, tipo: 'povos_formadores', q: 'Onde viviam os povos indígenas?',
    alternativas: [
      { texto: 'Espalhados por todo o território brasileiro', correta: true, explicacao: 'Os indígenas viviam em todo o território, cada povo com sua língua e costumes!' },
      { texto: 'Apenas em uma cidade', correta: false, explicacao: 'Não! Os indígenas estavam espalhados por todo o território brasileiro.' },
      { texto: 'Somente em Portugal', correta: false, explicacao: 'Portugal é outro país! Os indígenas já viviam por todo o território brasileiro.' }
    ] },
  { id: 27, tipo: 'povos_formadores', q: 'A mistura dos povos formadores deu origem a...',
    alternativas: [
      { texto: 'ao povo brasileiro', correta: true, explicacao: 'Indígenas + portugueses + africanos se misturaram e deram origem ao povo brasileiro!' },
      { texto: 'ao povo japonês', correta: false, explicacao: 'O povo japonês vive no Japão! A mistura dos formadores deu origem ao povo brasileiro.' },
      { texto: 'aos povos da Lua', correta: false, explicacao: 'A mistura aconteceu aqui na Terra: indígenas, portugueses e africanos formaram o povo brasileiro!' }
    ] },
  { id: 28, tipo: 'povos_formadores', q: 'As contribuições dos africanos aparecem em...',
    alternativas: [
      { texto: 'músicas, danças, comidas e palavras', correta: true, explicacao: 'Os africanos deixaram músicas, danças, comidas e palavras que usamos até hoje!' },
      { texto: 'apenas em caravelas', correta: false, explicacao: 'Caravelas vieram com os portugueses! Os africanos contribuíram com músicas, danças e comidas.' },
      { texto: 'somente em festas japonesas', correta: false, explicacao: 'As festas japonesas vieram do Japão! Os africanos deixaram músicas, danças, comidas e palavras.' }
    ] },
  { id: 29, tipo: 'povos_formadores', q: 'Em que ano os portugueses chegaram ao Brasil?',
    alternativas: [
      { texto: '1500', correta: true, explicacao: 'Os portugueses chegaram em 1500, navegando em caravelas!' },
      { texto: '1908', correta: false, explicacao: '1908 foi quando o Kasato Maru chegou com os japoneses! Os portugueses chegaram em 1500.' },
      { texto: '1822', correta: false, explicacao: '1822 foi a independência do Brasil! Os portugueses chegaram em 1500.' }
    ] },
  { id: 30, tipo: 'povos_formadores', q: 'O que significa "povos formadores"?',
    alternativas: [
      { texto: 'Os povos que deram origem à população brasileira', correta: true, explicacao: 'Povos formadores são os que formaram nossa população: indígenas, portugueses e africanos!' },
      { texto: 'Os povos que moram em outros planetas', correta: false, explicacao: 'Nada de planetas! Povos formadores são os que deram origem à população brasileira.' },
      { texto: 'As pessoas que constroem casas', correta: false, explicacao: 'Não é construção de casas! Povos formadores formaram a nossa população.' }
    ] },

  // ===== CAPÍTULO 6 — CONTRIBUIÇÕES DE OUTROS POVOS (15) =====
  { id: 31, tipo: 'contribuicoes', q: 'O que é um imigrante?',
    alternativas: [
      { texto: 'Uma pessoa que sai do seu país para morar em outro', correta: true, explicacao: 'Imigrante é quem sai do seu país para viver em outro, como os italianos que vieram ao Brasil!' },
      { texto: 'Uma pessoa que viaja de férias', correta: false, explicacao: 'Viajar de férias é diferente! Imigrante é quem muda de país para morar.' },
      { texto: 'Uma pessoa que nunca sai de casa', correta: false, explicacao: 'Imigrante faz o contrário: sai do seu país para morar em outro!' }
    ] },
  { id: 32, tipo: 'contribuicoes', q: 'Quais comidas os italianos trouxeram?',
    alternativas: [
      { texto: 'Pizza e macarrão', correta: true, explicacao: 'Pizza e macarrão são contribuições italianas que amamos até hoje!' },
      { texto: 'Quibe e esfiha', correta: false, explicacao: 'Quibe e esfiha vieram com os sírios e libaneses! Os italianos trouxeram pizza e macarrão.' },
      { texto: 'Sushi e yakisoba', correta: false, explicacao: 'Sushi e yakisoba são comidas asiáticas! Os italianos trouxeram pizza e macarrão.' }
    ] },
  { id: 33, tipo: 'contribuicoes', q: 'Qual povo trouxe o quibe e a esfiha?',
    alternativas: [
      { texto: 'Sírios e libaneses', correta: true, explicacao: 'O quibe e a esfiha vieram com os imigrantes sírios e libaneses!' },
      { texto: 'Os italianos', correta: false, explicacao: 'Os italianos trouxeram pizza e macarrão! Quibe e esfiha vieram dos sírios e libaneses.' },
      { texto: 'Os japoneses', correta: false, explicacao: 'Os japoneses trouxeram sushi e judô! O quibe e a esfiha vieram dos sírios e libaneses.' }
    ] },
  { id: 34, tipo: 'contribuicoes', q: 'Os alemães trouxeram...',
    alternativas: [
      { texto: 'a Oktoberfest e os enfeites de Natal', correta: true, explicacao: 'A festa Oktoberfest e os enfeites de Natal são contribuições dos imigrantes alemães!' },
      { texto: 'a pizza e o macarrão', correta: false, explicacao: 'Pizza e macarrão vieram com os italianos! Os alemães trouxeram a Oktoberfest e o Natal.' },
      { texto: 'o judô e o caratê', correta: false, explicacao: 'Judô e caratê vieram do Japão! Os alemães trouxeram a Oktoberfest e os enfeites de Natal.' }
    ] },
  { id: 35, tipo: 'contribuicoes', q: 'De qual continente vieram os italianos?',
    alternativas: [
      { texto: 'Europa', correta: true, explicacao: 'A Itália fica na Europa! Foi de lá que os italianos vieram para o Brasil.' },
      { texto: 'Ásia', correta: false, explicacao: 'Da Ásia vieram japoneses e chineses! A Itália fica na Europa.' },
      { texto: 'África', correta: false, explicacao: 'Da África vieram os africanos! A Itália fica na Europa.' }
    ] },
  { id: 36, tipo: 'contribuicoes', q: 'As contribuições dos imigrantes aparecem em...',
    alternativas: [
      { texto: 'comidas, festas, palavras e músicas', correta: true, explicacao: 'Os imigrantes deixaram marcas nas comidas, festas, palavras e músicas do Brasil!' },
      { texto: 'somente em navios', correta: false, explicacao: 'Navios trouxeram os imigrantes, mas as contribuições estão nas comidas, festas e palavras!' },
      { texto: 'apenas em caravelas', correta: false, explicacao: 'Caravelas foram usadas pelos portugueses! As contribuições aparecem nas comidas, festas e músicas.' }
    ] },
  { id: 37, tipo: 'contribuicoes', q: 'A Oktoberfest é uma festa de qual cultura?',
    alternativas: [
      { texto: 'Alemã', correta: true, explicacao: 'A Oktoberfest é uma festa da cultura alemã, celebrada no Brasil com muita música e dança!' },
      { texto: 'Japonesa', correta: false, explicacao: 'Festas japonesas são o Bon Odori e a Tanabata! A Oktoberfest é alemã.' },
      { texto: 'Indígena', correta: false, explicacao: 'A Oktoberfest não é indígena! Ela vem da cultura alemã.' }
    ] },
  { id: 38, tipo: 'contribuicoes', q: 'Imigrar significa...',
    alternativas: [
      { texto: 'mudar de país para morar', correta: true, explicacao: 'Imigrar é mudar de país para morar em outro lugar — foi o que muitos povos fizeram!' },
      { texto: 'ficar no mesmo lugar para sempre', correta: false, explicacao: 'Imigrar é o contrário: mudar de país para morar!' },
      { texto: 'plantar uma árvore', correta: false, explicacao: 'Plantar árvore é outra coisa! Imigrar é mudar de país.' }
    ] },
  { id: 39, tipo: 'contribuicoes', q: 'Quais povos vieram da Europa para o Brasil?',
    alternativas: [
      { texto: 'Italianos, alemães e espanhóis', correta: true, explicacao: 'Italianos, alemães e espanhóis são imigrantes que vieram da Europa para o Brasil!' },
      { texto: 'Japoneses, chineses e coreanos', correta: false, explicacao: 'Esses povos vieram da Ásia! Da Europa vieram italianos, alemães e espanhóis.' },
      { texto: 'Tupi e Guarani', correta: false, explicacao: 'Tupi e Guarani são povos indígenas do Brasil! Da Europa vieram italianos, alemães e espanhóis.' }
    ] },
  { id: 40, tipo: 'contribuicoes', q: 'O quibe é uma comida típica de quais imigrantes?',
    alternativas: [
      { texto: 'Sírios e libaneses', correta: true, explicacao: 'O quibe veio com os imigrantes sírios e libaneses, e virou uma comida amada no Brasil!' },
      { texto: 'Italianos', correta: false, explicacao: 'Os italianos trouxeram pizza e macarrão! O quibe é dos sírios e libaneses.' },
      { texto: 'Japoneses', correta: false, explicacao: 'Os japoneses trouxeram o sushi! O quibe veio com os sírios e libaneses.' }
    ] },
  { id: 41, tipo: 'contribuicoes', q: 'Por que a cultura brasileira é tão rica?',
    alternativas: [
      { texto: 'Porque recebeu contribuições de muitos povos', correta: true, explicacao: 'Nosso país juntou contribuições de povos do mundo inteiro — por isso a cultura é tão rica!' },
      { texto: 'Porque nunca recebeu ninguém', correta: false, explicacao: 'Foi o contrário! O Brasil recebeu muitos povos, e cada um deixou sua contribuição.' },
      { texto: 'Porque só tem uma festa', correta: false, explicacao: 'O Brasil tem festas de todo tipo! Isso acontece porque recebemos muitos povos.' }
    ] },
  { id: 42, tipo: 'contribuicoes', q: 'As palavras de outros idiomas no nosso dia a dia são...',
    alternativas: [
      { texto: 'heranças dos imigrantes', correta: true, explicacao: 'Muitas palavras que usamos vieram dos imigrantes — são heranças deles para nós!' },
      { texto: 'palavras inventadas agora', correta: false, explicacao: 'Não! Essas palavras vieram com os imigrantes e ficaram no nosso dia a dia.' },
      { texto: 'erros de escrita', correta: false, explicacao: 'Não são erros! São heranças dos povos imigrantes que formaram nossa língua.' }
    ] },
  { id: 43, tipo: 'contribuicoes', q: 'Além de comidas, o que os imigrantes trouxeram?',
    alternativas: [
      { texto: 'Costumes, festas e tradições', correta: true, explicacao: 'Os imigrantes trouxeram comidas, costumes, festas e tradições que misturamos às nossas!' },
      { texto: 'Apenas roupas', correta: false, explicacao: 'Eles trouxeram muito mais! Costumes, festas, tradições e comidas.' },
      { texto: 'Somente dinheiro', correta: false, explicacao: 'O mais importante foi a cultura: costumes, festas, comidas e tradições!' }
    ] },
  { id: 44, tipo: 'contribuicoes', q: 'Qual festa alemã é famosa no Brasil?',
    alternativas: [
      { texto: 'Oktoberfest', correta: true, explicacao: 'A Oktoberfest é a festa alemã mais famosa do Brasil, com muita música e dança!' },
      { texto: 'Bon Odori', correta: false, explicacao: 'O Bon Odori é uma festa japonesa! A festa alemã famosa é a Oktoberfest.' },
      { texto: 'Tanabata', correta: false, explicacao: 'A Tanabata é uma festa japonesa! A festa alemã famosa é a Oktoberfest.' }
    ] },
  { id: 45, tipo: 'contribuicoes', q: 'Os espanhóis vieram de qual país?',
    alternativas: [
      { texto: 'Espanha', correta: true, explicacao: 'Os espanhóis vieram da Espanha, um país da Europa!' },
      { texto: 'Japão', correta: false, explicacao: 'Do Japão vieram os japoneses! Os espanhóis vieram da Espanha.' },
      { texto: 'Portugal', correta: false, explicacao: 'De Portugal vieram os portugueses! Os espanhóis vieram da Espanha.' }
    ] },

  // ===== CAPÍTULO 6 — DA ÁSIA PARA O BRASIL (15) =====
  { id: 46, tipo: 'asia', q: 'Qual navio trouxe os primeiros japoneses ao Brasil?',
    alternativas: [
      { texto: 'Kasato Maru', correta: true, explicacao: 'O navio Kasato Maru chegou em 1908 trazendo os primeiros imigrantes japoneses!' },
      { texto: 'Santa Maria', correta: false, explicacao: 'Santa Maria foi uma caravela de Colombo! O navio dos japoneses foi o Kasato Maru.' },
      { texto: 'Titanic', correta: false, explicacao: 'O Titanic naufragou em 1912! O navio que trouxe os japoneses foi o Kasato Maru.' }
    ] },
  { id: 47, tipo: 'asia', q: 'Em que ano o Kasato Maru chegou ao Brasil?',
    alternativas: [
      { texto: '1908', correta: true, explicacao: 'O Kasato Maru chegou ao Brasil em 1908, com os primeiros imigrantes japoneses!' },
      { texto: '1500', correta: false, explicacao: 'Em 1500 chegaram os portugueses! O Kasato Maru chegou em 1908.' },
      { texto: '2000', correta: false, explicacao: 'Em 2000 os japoneses já estavam no Brasil há quase 100 anos! O Kasato Maru chegou em 1908.' }
    ] },
  { id: 48, tipo: 'asia', q: 'Onde os imigrantes japoneses trabalharam?',
    alternativas: [
      { texto: 'Nas fazendas de café de São Paulo', correta: true, explicacao: 'Os japoneses vieram principalmente para trabalhar nas fazendas de café de São Paulo!' },
      { texto: 'Nas minas de ouro', correta: false, explicacao: 'As minas de ouro foram exploradas por bandeirantes! Os japoneses trabalharam no café.' },
      { texto: 'Nos engenhos de açúcar', correta: false, explicacao: 'Os engenhos de açúcar eram do Nordeste colonial! Os japoneses trabalharam nas fazendas de café.' }
    ] },
  { id: 49, tipo: 'asia', q: 'Qual bairro de São Paulo é famoso pela cultura japonesa?',
    alternativas: [
      { texto: 'Bairro da Liberdade', correta: true, explicacao: 'O bairro da Liberdade, em São Paulo, é famoso pelas lanternas, lojas e festas japonesas!' },
      { texto: 'Bairro de Copacabana', correta: false, explicacao: 'Copacabana fica no Rio de Janeiro! O bairro japonês de SP é a Liberdade.' },
      { texto: 'Bairro de Higienópolis', correta: false, explicacao: 'O bairro da cultura japonesa é a Liberdade, com suas lanternas e festas!' }
    ] },
  { id: 50, tipo: 'asia', q: 'Quais contribuições os japoneses trouxeram?',
    alternativas: [
      { texto: 'Judô, caratê, origami e sushi', correta: true, explicacao: 'Os japoneses trouxeram o judô, o caratê, o origami (dobraduras) e o sushi!' },
      { texto: 'Pizza e macarrão', correta: false, explicacao: 'Pizza e macarrão vieram com os italianos! Os japoneses trouxeram judô, origami e sushi.' },
      { texto: 'Quibe e esfiha', correta: false, explicacao: 'Quibe e esfiha vieram com os sírios e libaneses! Os japoneses trouxeram judô, origami e sushi.' }
    ] },
  { id: 51, tipo: 'asia', q: 'O que é origami?',
    alternativas: [
      { texto: 'A arte de dobrar papel', correta: true, explicacao: 'Origami é a arte japonesa de dobrar papel para criar formas, como grous e flores!' },
      { texto: 'Uma comida japonesa', correta: false, explicacao: 'Origami não é comida! É a arte de dobrar papel, trazida pelos japoneses.' },
      { texto: 'Um tipo de navio', correta: false, explicacao: 'Origami não é navio! É a arte japonesa de dobrar papel.' }
    ] },
  { id: 52, tipo: 'asia', q: 'De qual continente vieram os japoneses?',
    alternativas: [
      { texto: 'Ásia', correta: true, explicacao: 'O Japão fica na Ásia, o continente mais populoso do mundo!' },
      { texto: 'Europa', correta: false, explicacao: 'Da Europa vieram portugueses e italianos! O Japão fica na Ásia.' },
      { texto: 'América', correta: false, explicacao: 'Os indígenas são da América! O Japão fica na Ásia.' }
    ] },
  { id: 53, tipo: 'asia', q: 'O que é o Bon Odori?',
    alternativas: [
      { texto: 'Uma festa japonesa com dança tradicional', correta: true, explicacao: 'O Bon Odori é uma festa japonesa celebrada com danças tradicionais em círculo!' },
      { texto: 'Uma festa alemã', correta: false, explicacao: 'Festa alemã é a Oktoberfest! O Bon Odori é uma festa japonesa.' },
      { texto: 'Uma comida italiana', correta: false, explicacao: 'Bon Odori não é comida! É uma festa japonesa com danças tradicionais.' }
    ] },
  { id: 54, tipo: 'asia', q: 'Além do Japão, quais países da Ásia enviaram imigrantes ao Brasil?',
    alternativas: [
      { texto: 'China e Coreia', correta: true, explicacao: 'Da Ásia também vieram imigrantes da China e da Coreia, com suas comidas e tradições!' },
      { texto: 'Itália e Espanha', correta: false, explicacao: 'Itália e Espanha ficam na Europa! Da Ásia vieram chineses e coreanos.' },
      { texto: 'Portugal e Alemanha', correta: false, explicacao: 'Portugal e Alemanha ficam na Europa! Da Ásia vieram chineses e coreanos.' }
    ] },
  { id: 55, tipo: 'asia', q: 'O que é sushi?',
    alternativas: [
      { texto: 'Uma comida típica japonesa', correta: true, explicacao: 'O sushi é uma comida japonesa feita com arroz e peixe, muito popular no Brasil!' },
      { texto: 'Uma dança brasileira', correta: false, explicacao: 'Sushi não é dança! É uma comida típica japonesa.' },
      { texto: 'Uma festa alemã', correta: false, explicacao: 'Sushi é comida, não festa! É uma comida típica japonesa.' }
    ] },
  { id: 56, tipo: 'asia', q: 'A festa Tanabata é...',
    alternativas: [
      { texto: 'uma festa japonesa', correta: true, explicacao: 'A Tanabata é uma festa japonesa das estrelas, celebrada no bairro da Liberdade!' },
      { texto: 'uma festa alemã', correta: false, explicacao: 'Festa alemã é a Oktoberfest! A Tanabata é uma festa japonesa.' },
      { texto: 'uma festa italiana', correta: false, explicacao: 'A Tanabata não é italiana! É uma festa japonesa das estrelas.' }
    ] },
  { id: 57, tipo: 'asia', q: 'O continente mais populoso do mundo é...',
    alternativas: [
      { texto: 'a Ásia', correta: true, explicacao: 'A Ásia é o continente mais populoso do mundo, com países como Japão, China e Coreia!' },
      { texto: 'a Europa', correta: false, explicacao: 'A Europa tem muitos países, mas o continente mais populoso é a Ásia!' },
      { texto: 'a Antártida', correta: false, explicacao: 'A Antártida quase não tem moradores! O continente mais populoso é a Ásia.' }
    ] },
  { id: 58, tipo: 'asia', q: 'Os imigrantes asiáticos enriqueceram a cultura brasileira com...',
    alternativas: [
      { texto: 'artes marciais, comidas e festas', correta: true, explicacao: 'Os asiáticos trouxeram artes marciais, comidas e festas que fazem parte do nosso país!' },
      { texto: 'apenas caravelas', correta: false, explicacao: 'Caravelas foram dos portugueses! Os asiáticos trouxeram artes marciais, comidas e festas.' },
      { texto: 'somente o futebol', correta: false, explicacao: 'O futebol veio da Inglaterra! Os asiáticos trouxeram artes marciais, comidas e festas.' }
    ] },
  { id: 59, tipo: 'asia', q: 'O que os imigrantes chineses trouxeram?',
    alternativas: [
      { texto: 'Comidas típicas e tradições milenares', correta: true, explicacao: 'Os chineses trouxeram comidas típicas e tradições milenares para o Brasil!' },
      { texto: 'A Oktoberfest', correta: false, explicacao: 'A Oktoberfest é alemã! Os chineses trouxeram comidas típicas e tradições milenares.' },
      { texto: 'As caravelas', correta: false, explicacao: 'Caravelas foram dos portugueses! Os chineses trouxeram comidas e tradições milenares.' }
    ] },
  { id: 60, tipo: 'asia', q: 'Como a cultura japonesa aparece no bairro da Liberdade?',
    alternativas: [
      { texto: 'Lanternas, lojas, comidas e festas japonesas', correta: true, explicacao: 'No bairro da Liberdade vemos lanternas, lojas, comidas e festas japonesas!' },
      { texto: 'Casas de madeira alemãs', correta: false, explicacao: 'Casas alemãs aparecem no Sul do Brasil! Na Liberdade vemos lanternas e festas japonesas.' },
      { texto: 'Estátuas de futebol', correta: false, explicacao: 'A Liberdade é famosa pela cultura japonesa: lanternas, lojas, comidas e festas!' }
    ] }
];

// ===== BANCO DO JOGO DAS ORIGENS (30) =====
const jogoBanco = [
  { q: 'Quem já vivia no Brasil antes de 1500?', opcoes: ['os indígenas', 'os japoneses', 'os italianos'], correta: 'os indígenas' },
  { q: 'De qual continente vieram os portugueses?', opcoes: ['Europa', 'África', 'Ásia'], correta: 'Europa' },
  { q: 'De qual continente vieram os africanos?', opcoes: ['África', 'Europa', 'Oceania'], correta: 'África' },
  { q: 'Como se chama a mistura de povos?', opcoes: ['miscigenação', 'separação', 'população'], correta: 'miscigenação' },
  { q: 'Qual navio trouxe os primeiros japoneses?', opcoes: ['Kasato Maru', 'Santa Maria', 'Titanic'], correta: 'Kasato Maru' },
  { q: 'Qual comida os italianos trouxeram?', opcoes: ['pizza', 'sushi', 'quibe'], correta: 'pizza' },
  { q: 'Qual comida os sírios e libaneses trouxeram?', opcoes: ['quibe', 'macarrão', 'sushi'], correta: 'quibe' },
  { q: 'Qual festa alemã é famosa no Brasil?', opcoes: ['Oktoberfest', 'Bon Odori', 'Tanabata'], correta: 'Oktoberfest' },
  { q: 'Qual bairro de SP é famoso pela cultura japonesa?', opcoes: ['Liberdade', 'Copacabana', 'Centro Histórico'], correta: 'Liberdade' },
  { q: 'Qual é a arte japonesa de dobrar papel?', opcoes: ['origami', 'judô', 'sushi'], correta: 'origami' },
  { q: 'Qual arte marcial veio do Japão?', opcoes: ['judô', 'capoeira', 'futebol'], correta: 'judô' },
  { q: 'Em que ano o Kasato Maru chegou ao Brasil?', opcoes: ['1908', '1500', '2000'], correta: '1908' },
  { q: 'Onde os japoneses trabalharam no Brasil?', opcoes: ['fazendas de café', 'minas de ouro', 'engenhos de açúcar'], correta: 'fazendas de café' },
  { q: 'Qual língua falamos principalmente no Brasil?', opcoes: ['português', 'japonês', 'inglês'], correta: 'português' },
  { q: 'Quem sai do seu país para morar em outro?', opcoes: ['imigrante', 'viajante', 'visitante'], correta: 'imigrante' },
  { q: 'Qual comida japonesa é feita com arroz e peixe?', opcoes: ['sushi', 'esfiha', 'pizza'], correta: 'sushi' },
  { q: 'Em qual continente fica o Japão?', opcoes: ['Ásia', 'Europa', 'América'], correta: 'Ásia' },
  { q: 'Tupi e Guarani são povos...?', opcoes: ['indígenas', 'portugueses', 'asiáticos'], correta: 'indígenas' },
  { q: 'Os africanos foram trazidos à força por causa da...?', opcoes: ['escravidão', 'amizade', 'festa'], correta: 'escravidão' },
  { q: 'Como se chama o conjunto de pessoas que vivem em um lugar?', opcoes: ['população', 'diversidade', 'miscigenação'], correta: 'população' },
  { q: 'Qual festa japonesa tem danças em círculo?', opcoes: ['Bon Odori', 'Oktoberfest', 'Carnaval'], correta: 'Bon Odori' },
  { q: 'Qual palavra significa muitas diferenças juntas?', opcoes: ['diversidade', 'população', 'imigrante'], correta: 'diversidade' },
  { q: 'A esfiha é comida de quais imigrantes?', opcoes: ['sírios e libaneses', 'italianos', 'alemães'], correta: 'sírios e libaneses' },
  { q: 'Qual é o continente mais populoso do mundo?', opcoes: ['Ásia', 'Europa', 'África'], correta: 'Ásia' },
  { q: 'Os enfeites de Natal vieram com os...?', opcoes: ['alemães', 'japoneses', 'africanos'], correta: 'alemães' },
  { q: 'Quantas pessoas vivem aproximadamente no Brasil?', opcoes: ['mais de 200 milhões', '1 milhão', '50 milhões'], correta: 'mais de 200 milhões' },
  { q: 'O macarrão é uma contribuição de quem?', opcoes: ['italianos', 'japoneses', 'sírios'], correta: 'italianos' },
  { q: 'As tradições milenares chegaram com os...?', opcoes: ['chineses', 'portugueses', 'espanhóis'], correta: 'chineses' },
  { q: 'Quem chegou ao Brasil em 1500?', opcoes: ['os portugueses', 'os japoneses', 'os italianos'], correta: 'os portugueses' },
  { q: 'A capoeira e o samba são contribuições de quem?', opcoes: ['dos africanos', 'dos alemães', 'dos japoneses'], correta: 'dos africanos' }
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

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function selecionarQuestoes() {
  const qs = [...bancoQuestoes];
  const sel = [];
  for (let i = 0; i < 20; i++) {
    const idx = Math.floor(Math.random() * qs.length);
    const q = qs.splice(idx, 1)[0];
    sel.push({ ...q, alternativas: shuffleArray(q.alternativas) });
  }
  return sel;
}

function selecionarQuestoesSimulado() {
  const qs = [...bancoQuestoes];
  const sel = [];
  for (let i = 0; i < 10; i++) {
    const idx = Math.floor(Math.random() * qs.length);
    const q = qs.splice(idx, 1)[0];
    sel.push({ ...q, alternativas: shuffleArray(q.alternativas) });
  }
  return sel;
}

// ===== QUIZ =====
let quizIndex = 0;
let quizAcertos = 0;

function carregarQuiz() {
  if (questoesQuiz.length === 0) questoesQuiz = selecionarQuestoes();
  quizIndex = 0;
  quizAcertos = 0;
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-next-btn').classList.add('hidden');
  mostrarQuestaoQuiz();
}

function mostrarQuestaoQuiz() {
  const q = questoesQuiz[quizIndex];
  const container = document.getElementById('quiz-container');
  document.getElementById('quiz-progress').textContent = `Questão ${quizIndex + 1}/${questoesQuiz.length}`;
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-next-btn').classList.add('hidden');

  let html = `<div class="questao-card">
    <p><strong>${q.q}</strong></p>
    <div class="alternativas-container">`;
  q.alternativas.forEach((alt, j) => {
    html += `<label class="alternativa-item" onclick="responderQuiz(${j})">
      <span class="alternativa-texto">${alt.texto}</span>
    </label>`;
  });
  html += `</div></div>`;
  container.innerHTML = html;
}

function responderQuiz(respostaIdx) {
  const q = questoesQuiz[quizIndex];
  const labels = document.querySelectorAll('.alternativa-item');
  labels.forEach(l => l.style.pointerEvents = 'none');

  const certa = q.alternativas[respostaIdx].correta;
  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.remove('acertou', 'errou', 'hidden');

  if (certa) {
    quizAcertos++;
    labels[respostaIdx].classList.add('correta');
    feedback.className = 'feedback-area acertou';
    feedback.innerHTML = `<span class="feedback-emoji">✅</span>
      <strong>Correto!</strong>
      <div class="feedback-explicacao">${q.alternativas[respostaIdx].explicacao}</div>`;
  } else {
    labels[respostaIdx].classList.add('incorreta');
    q.alternativas.forEach((alt, j) => {
      if (alt.correta) labels[j].classList.add('correta');
    });
    feedback.className = 'feedback-area errou';
    feedback.innerHTML = `<span class="feedback-emoji">❌</span>
      <strong>Errado!</strong>
      <div class="feedback-explicacao">${q.alternativas[respostaIdx].explicacao}</div>`;
  }

  document.getElementById('quiz-next-btn').classList.remove('hidden');
  if (quizIndex >= questoesQuiz.length - 1) {
    document.getElementById('quiz-next-btn').textContent = '📊 Ver Resultado';
  } else {
    document.getElementById('quiz-next-btn').textContent = '➡️ Próxima';
  }
}

function proximaQuestaoQuiz() {
  if (quizIndex >= questoesQuiz.length - 1) {
    document.getElementById('quiz-container').innerHTML = '';
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('quiz-next-btn').classList.add('hidden');
    document.getElementById('quiz-progress').textContent = '';
    const pct = Math.round((quizAcertos / questoesQuiz.length) * 100);
    let msg = '';
    if (pct === 100) msg = '🎉 Incrível! Você acertou tudo!';
    else if (pct >= 70) msg = '👍 Muito bem! Continue assim!';
    else if (pct >= 50) msg = '📚 Bom! Continue estudando!';
    else msg = '💪 Não desanime! Tente de novo!';
    document.getElementById('quiz-result').classList.remove('hidden');
    document.querySelector('#quiz-result .score-text').textContent = `${quizAcertos}/${questoesQuiz.length} (${pct}%)`;
    document.querySelector('#quiz-result .message-text').textContent = msg;
  } else {
    quizIndex++;
    mostrarQuestaoQuiz();
  }
}

function reiniciarQuiz() {
  questoesQuiz = selecionarQuestoes();
  document.getElementById('quiz-result').classList.add('hidden');
  carregarQuiz();
}

// ===== SIMULADO =====
function carregarSimulado() {
  if (questoesSimulado.length === 0) questoesSimulado = selecionarQuestoesSimulado();
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
  const pct = Math.round((acertos / questoesSimulado.length) * 100);
  let msg = '';
  if (pct === 100) msg = '🏆 Perfeito! Você arrasou!';
  else if (pct >= 70) msg = '👏 Muito bem! Nota boa!';
  else if (pct >= 50) msg = '📖 Bom trabalho! Continue!';
  else msg = '📝 Revise e tente novamente!';
  document.getElementById('simulado-result').classList.remove('hidden');
  document.querySelector('#simulado-result .score-text').textContent = `${acertos}/${questoesSimulado.length} (${pct}%)`;
  document.querySelector('#simulado-result .message-text').textContent = msg;
}

function reiniciarSimulado() {
  questoesSimulado = selecionarQuestoesSimulado();
  document.getElementById('simulado-result').classList.add('hidden');
  carregarSimulado();
}

// ===== JOGO DAS ORIGENS =====
let jogoAcertos = 0;
let jogoPontos = 0;
let jogoSequencia = 0;
let jogoBancoAtual = [];

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
  if (jogoBancoAtual.length === 0) jogoBancoAtual = shuffleArray(jogoBanco);
  const item = jogoBancoAtual.pop();

  const opcoes = shuffleArray(item.opcoes);
  document.getElementById('jogo-pergunta').textContent = item.q;
  const container = document.getElementById('jogo-opcoes');
  container.innerHTML = opcoes.map(v =>
    `<button class="jogo-opcao" data-resposta="${v}" onclick="responderJogo(this, '${item.correta}')">${v}</button>`
  ).join('');
  document.getElementById('jogo-mensagem').textContent = '';
}

function responderJogo(btn, respostaCorreta) {
  const valor = btn.dataset.resposta;
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
    btns.forEach(b => { if (b.dataset.resposta === respostaCorreta) b.classList.add('correta'); });
    jogoSequencia = 0;
    document.getElementById('jogo-mensagem').textContent = `❌ Era "${respostaCorreta}". Tente a próxima!`;
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