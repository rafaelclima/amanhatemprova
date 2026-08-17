const bancoQuestoes = [
  // ===== GÊNEROS TEXTUAIS: CRÔNICA, NOTÍCIA E TEATRO =====
  {
    id: 1, tipo: 'genero',
    q: 'Um texto que conta um fato do dia a dia de um jeito leve e engraçado. Qual é esse gênero?',
    alternativas: [
      { texto: 'Crônica', correta: true, explicacao: 'A crônica conta coisas simples do dia a dia com um toque de humor e sentimentos!' },
      { texto: 'Notícia', correta: false, explicacao: 'A notícia conta fatos reais de forma objetiva, sem humor. A crônica é leve e engraçada!' },
      { texto: 'Texto teatral', correta: false, explicacao: 'O texto teatral é feito para ser encenado no palco, com falas de personagens e rubricas!' }
    ]
  },
  {
    id: 2, tipo: 'genero',
    q: 'Qual texto tem uma MANCHETE, que é o título grande que chama atenção?',
    alternativas: [
      { texto: 'Notícia', correta: true, explicacao: 'A notícia sempre começa com uma manchete grande, que chama a atenção para o fato!' },
      { texto: 'Crônica', correta: false, explicacao: 'A crônica tem título, mas a manchete é característica da notícia!' },
      { texto: 'Texto teatral', correta: false, explicacao: 'No texto teatral aparecem falas e rubricas, não manchetes como na notícia!' }
    ]
  },
  {
    id: 3, tipo: 'genero',
    q: 'Qual texto é escrito para ser ENCENADO no palco?',
    alternativas: [
      { texto: 'Texto teatral', correta: true, explicacao: 'O texto teatral é um roteiro para os atores encenarem no palco!' },
      { texto: 'Crônica', correta: false, explicacao: 'A crônica é um texto para ser LIDO, contando fatos do dia a dia!' },
      { texto: 'Notícia', correta: false, explicacao: 'A notícia é um texto informativo sobre fatos reais, não é para encenar!' }
    ]
  },
  {
    id: 4, tipo: 'genero',
    q: 'Na notícia, o primeiro parágrafo que responde às perguntas "o quê? quem? onde? quando?" se chama:',
    alternativas: [
      { texto: 'Lide', correta: true, explicacao: 'O lide é o primeiro parágrafo da notícia e já responde as perguntas principais sobre o fato!' },
      { texto: 'Rubrica', correta: false, explicacao: 'Rubrica é uma indicação do texto teatral, entre parênteses, que diz como o ator deve agir!' },
      { texto: 'Manchete', correta: false, explicacao: 'A manchete é o título grande. O parágrafo inicial que responde as perguntas é o lide!' }
    ]
  },
  {
    id: 5, tipo: 'genero',
    q: 'O que são as RUBRICAS no texto teatral?',
    alternativas: [
      { texto: 'Indicações entre parênteses de como o ator deve agir ou falar', correta: true, explicacao: 'As rubricas ficam entre parênteses e ensinam ao ator: (bravo), (sai correndo), (baixinho)...' },
      { texto: 'Os títulos grandes que chamam atenção', correta: false, explicacao: 'Títulos grandes que chamam atenção são as manchetes, da notícia!' },
      { texto: 'As falas dos personagens', correta: false, explicacao: 'As falas são os diálogos dos personagens. As rubricas são as indicações entre parênteses!' }
    ]
  },
  {
    id: 6, tipo: 'genero',
    q: 'Quem escreve as notícias?',
    alternativas: [
      { texto: 'O jornalista', correta: true, explicacao: 'O jornalista procura os fatos reais, investiga e escreve a notícia!' },
      { texto: 'O cronista', correta: false, explicacao: 'O cronista escreve crônicas, textos leves sobre o dia a dia!' },
      { texto: 'O ator', correta: false, explicacao: 'O ator encena o texto teatral no palco, não escreve notícias!' }
    ]
  },
  {
    id: 7, tipo: 'genero',
    q: 'Uma crônica pode falar sobre...',
    alternativas: [
      { texto: 'A fila do pão, o trânsito ou uma conversa na escola', correta: true, explicacao: 'A crônica observa pequenas coisas do dia a dia e escreve sobre elas com humor!' },
      { texto: 'Apenas fatos de outros planetas', correta: false, explicacao: 'A crônica fala do cotidiano, bem aqui pertinho de nós!' },
      { texto: 'Somente receitas de bolo', correta: false, explicacao: 'Receitas têm outro formato, com ingredientes e modo de fazer. A crônica conta histórias do dia a dia!' }
    ]
  },
  {
    id: 8, tipo: 'genero',
    q: 'Você quer saber se a escola da sua cidade ganhou a gincana. Qual texto você leria?',
    alternativas: [
      { texto: 'Uma notícia', correta: true, explicacao: 'A notícia conta fatos reais e recentes, como uma escola que ganhou a gincana!' },
      { texto: 'Uma crônica', correta: false, explicacao: 'A crônica fala do dia a dia com humor, mas o jornal publica o resultado da gincana como notícia!' },
      { texto: 'Um texto teatral', correta: false, explicacao: 'O texto teatral é para encenar no palco, não para contar um fato real como a gincana!' }
    ]
  },
  {
    id: 9, tipo: 'genero',
    q: 'Em um texto teatral, o nome do personagem aparece...',
    alternativas: [
      { texto: 'Antes da fala dele', correta: true, explicacao: 'No teatro, escrevemos o nome do personagem e depois os dois pontos e a fala: LEO: (alegre) Eu ganhei!' },
      { texto: 'Depois da fala dele', correta: false, explicacao: 'O nome vem ANTES da fala, para sabermos quem está falando!' },
      { texto: 'Somente no final da história', correta: false, explicacao: 'Os nomes aparecem o tempo todo, antes de cada fala, não só no final!' }
    ]
  },
  {
    id: 10, tipo: 'genero',
    q: 'Qual gênero mistura humor e sentimentos sobre a vida cotidiana?',
    alternativas: [
      { texto: 'Crônica', correta: true, explicacao: 'A crônica mistura observação do dia a dia, humor e sentimentos do cronista!' },
      { texto: 'Notícia', correta: false, explicacao: 'A notícia é objetiva e não mistura sentimentos do jornalista!' },
      { texto: 'Texto teatral', correta: false, explicacao: 'O teatro conta histórias pelas falas, mas quem mistura humor e cotidiano é a crônica!' }
    ]
  },
  {
    id: 11, tipo: 'genero',
    q: 'A notícia conta fatos...',
    alternativas: [
      { texto: 'Reais, que aconteceram de verdade', correta: true, explicacao: 'A notícia nunca inventa: ela informa sobre fatos que aconteceram de verdade!' },
      { texto: 'Inventados, criados pelo autor', correta: false, explicacao: 'Fatos inventados são histórias de ficção. A notícia relata a realidade!' },
      { texto: 'Mágicos, cheios de fantasia', correta: false, explicacao: 'Magia e fantasia aparecem em contos, não em notícias!' }
    ]
  },
  {
    id: 12, tipo: 'genero',
    q: 'O texto teatral usa...',
    alternativas: [
      { texto: 'Diálogos e rubricas', correta: true, explicacao: 'O teatro é feito de falas de personagens (diálogos) e rubricas que orientam os atores!' },
      { texto: 'Tabelas e gráficos', correta: false, explicacao: 'Tabelas e gráficos organizam informações, como em textos científicos ou notícias!' },
      { texto: 'Manchetes e lide', correta: false, explicacao: 'Manchete e lide são partes da notícia, não do texto teatral!' }
    ]
  },
  {
    id: 13, tipo: 'genero',
    q: 'Quem escreve crônicas?',
    alternativas: [
      { texto: 'O cronista', correta: true, explicacao: 'O cronista observa o dia a dia e escreve crônicas com humor e leveza!' },
      { texto: 'O jornalista', correta: false, explicacao: 'O jornalista escreve notícias sobre fatos reais, sem humor!' },
      { texto: 'O diretor de teatro', correta: false, explicacao: 'O diretor dirige a peça. Quem escreve crônicas é o cronista!' }
    ]
  },
  {
    id: 14, tipo: 'genero',
    q: 'Uma notícia deve ser...',
    alternativas: [
      { texto: 'Objetiva, contando somente fatos reais', correta: true, explicacao: 'A notícia informa de forma clara e objetiva, sem invenções!' },
      { texto: 'Engraçada e cheia de invenções', correta: false, explicacao: 'Humor e invenções são da crônica e da ficção. A notícia relata os fatos!' },
      { texto: 'Escrita apenas com rimas', correta: false, explicacao: 'Rimas aparecem em poemas, não em notícias!' }
    ]
  },
  {
    id: 15, tipo: 'genero',
    q: '"O pequeno Bento olhava pela janela enquanto a chuva caía devagarinho, e pensou que aquele tinha sido o dia mais engraçado da vida." Esse trecho parece de uma:',
    alternativas: [
      { texto: 'Crônica', correta: true, explicacao: 'O trecho mostra um momento simples do dia a dia, com leveza e sentimentos: cara de crônica!' },
      { texto: 'Notícia', correta: false, explicacao: 'Uma notícia seria objetiva e diria o que, quem, onde e quando, sem esse tom sentimental!' },
      { texto: 'Receita', correta: false, explicacao: 'Receitas têm ingredientes e modo de fazer, não histórias com sentimentos!' }
    ]
  },

  // ===== ADJETIVOS E O "S" NA FORMAÇÃO DOS ADJETIVOS =====
  {
    id: 16, tipo: 'adjetivo',
    q: 'Qual destas palavras é um ADJETIVO?',
    alternativas: [
      { texto: 'Gostoso', correta: true, explicacao: 'Gostoso diz COMO é o alimento. Adjetivo dá qualidade ao substantivo!' },
      { texto: 'Sorvete', correta: false, explicacao: 'Sorvete é um substantivo, o nome do alimento!' },
      { texto: 'Comer', correta: false, explicacao: 'Comer é um verbo, indica uma ação!' }
    ]
  },
  {
    id: 17, tipo: 'adjetivo',
    q: 'O adjetivo serve para...',
    alternativas: [
      { texto: 'Dizer como é a pessoa, o animal ou a coisa', correta: true, explicacao: 'O adjetivo dá características: bonito, alto, cheiroso, feliz...' },
      { texto: 'Contar fatos reais', correta: false, explicacao: 'Contar fatos reais é a função da notícia!' },
      { texto: 'Indicar ações', correta: false, explicacao: 'Indicar ações é a função do verbo, não do adjetivo!' }
    ]
  },
  {
    id: 18, tipo: 'adjetivo',
    q: 'Complete com um adjetivo: "O menino está ______."',
    alternativas: [
      { texto: 'Feliz', correta: true, explicacao: 'Feliz é um adjetivo que diz como o menino está!' },
      { texto: 'Brinca', correta: false, explicacao: 'Brinca é um verbo, indica uma ação, não uma característica!' },
      { texto: 'Escola', correta: false, explicacao: 'Escola é um substantivo, o nome de um lugar!' }
    ]
  },
  {
    id: 19, tipo: 'adjetivo',
    q: 'Qual é a escrita CORRETA do adjetivo que vem de "gosto" (sabor)?',
    alternativas: [
      { texto: 'Gostoso', correta: true, explicacao: 'Adjetivos terminados em -oso se escrevem com S: gostoso!' },
      { texto: 'Gostozo', correta: false, explicacao: 'Aqui não usamos Z. O sufixo -oso e -osa sempre usam S!' },
      { texto: 'Gostoço', correta: false, explicacao: 'O Ç não aparece em adjetivos com esse final. Escrevemos gostoso com S!' }
    ]
  },
  {
    id: 20, tipo: 'adjetivo',
    q: 'O cheiro da flor é muito ______.',
    alternativas: [
      { texto: 'Cheiroso', correta: true, explicacao: 'Cheiroso vem de cheiro e recebe o sufixo -oso, escrito com S!' },
      { texto: 'Cheirozo', correta: false, explicacao: 'Com Z estaria errado. O sufixo -oso usa S: cheiroso!' },
      { texto: 'Cheiroço', correta: false, explicacao: 'Ç não se usa nesse sufixo. O certo é cheiroso, com S!' }
    ]
  },
  {
    id: 21, tipo: 'adjetivo',
    q: 'Marque a alternativa com um ADJETIVO que caracteriza o cachorro:',
    alternativas: [
      { texto: 'Brincalhão', correta: true, explicacao: 'Brincalhão diz como é o cachorro: é um adjetivo!' },
      { texto: 'Corre', correta: false, explicacao: 'Corre é um verbo, indica a ação de correr!' },
      { texto: 'Parque', correta: false, explicacao: 'Parque é um substantivo, o nome de um lugar!' }
    ]
  },
  {
    id: 22, tipo: 'adjetivo',
    q: 'Adjetivos terminados em -OSO e -OSA se escrevem com:',
    alternativas: [
      { texto: 'S', correta: true, explicacao: 'O S é usado no sufixo -oso/-osa: amoroso, carinhoso, bondosa...' },
      { texto: 'Z', correta: false, explicacao: 'O Z aparece em palavras como beleza e tristeza, mas os adjetivos -oso usam S!' },
      { texto: 'Ç', correta: false, explicacao: 'O Ç não aparece em adjetivos com esse final. Usamos S: cheiroso!' }
    ]
  },
  {
    id: 23, tipo: 'adjetivo',
    q: 'Qual é o adjetivo na frase: "A professora carinhosa entregou os desenhos."?',
    alternativas: [
      { texto: 'Carinhosa', correta: true, explicacao: 'Carinhosa diz como é a professora: é o adjetivo da frase!' },
      { texto: 'Professora', correta: false, explicacao: 'Professora é o substantivo, o nome da pessoa!' },
      { texto: 'Entregou', correta: false, explicacao: 'Entregou é o verbo, indica a ação!' }
    ]
  },
  {
    id: 24, tipo: 'adjetivo',
    q: 'Complete: "Nina é uma cachorra muito ______." (que tem coragem)',
    alternativas: [
      { texto: 'Corajosa', correta: true, explicacao: 'Corajosa é o adjetivo no feminino, combinando com "cachorra"!' },
      { texto: 'Corajoso', correta: false, explicacao: 'Corajoso é o masculino. Como falamos de uma cachorra, usamos corajosa!' },
      { texto: 'Coragem', correta: false, explicacao: 'Coragem é um substantivo, o nome da qualidade. O adjetivo é corajosa!' }
    ]
  },
  {
    id: 25, tipo: 'adjetivo',
    q: 'Qual é o feminino de "brincalhão"?',
    alternativas: [
      { texto: 'Brincalhona', correta: true, explicacao: 'Brincalhão (masculino) vira brincalhona no feminino, concordando com o substantivo!' },
      { texto: 'Brincalhão', correta: false, explicacao: 'Brincalhão é o masculino. No feminino fica brincalhona!' },
      { texto: 'Brincalhonas', correta: false, explicacao: 'Brincalhonas é o plural feminino. No singular, uma menina é brincalhona!' }
    ]
  },
  {
    id: 26, tipo: 'adjetivo',
    q: 'Qual destas palavras NÃO é um adjetivo?',
    alternativas: [
      { texto: 'Escola', correta: true, explicacao: 'Escola é um substantivo, o nome de um lugar. Ela não diz como algo é!' },
      { texto: 'Bonita', correta: false, explicacao: 'Bonita é um adjetivo, dá uma qualidade!' },
      { texto: 'Alta', correta: false, explicacao: 'Alta é um adjetivo, diz o tamanho de algo!' }
    ]
  },
  {
    id: 27, tipo: 'adjetivo',
    q: 'Na frase "O amigo amoroso abraçou o colega.", o adjetivo "amoroso" caracteriza:',
    alternativas: [
      { texto: 'O amigo', correta: true, explicacao: 'Amoroso combina com "amigo": diz como o amigo é!' },
      { texto: 'O abraço', correta: false, explicacao: 'O abraço é o que acontece, mas quem recebe a qualidade amoroso é o amigo!' },
      { texto: 'O colega', correta: false, explicacao: 'O colega é quem recebe o abraço. O adjetivo amoroso fala do amigo!' }
    ]
  },
  {
    id: 28, tipo: 'adjetivo',
    q: 'Como fica o plural de "menino bonito"?',
    alternativas: [
      { texto: 'Meninos bonitos', correta: true, explicacao: 'No plural, substantivo e adjetivo ganham S: meninos bonitos!' },
      { texto: 'Menino bonitos', correta: false, explicacao: 'Se o substantivo é plural, o adjetivo também precisa ser: meninos bonitos!' },
      { texto: 'Meninos bonito', correta: false, explicacao: 'Os dois precisam de plural: meninos bonitos!' }
    ]
  },
  {
    id: 29, tipo: 'adjetivo',
    q: 'Complete: "A menina ______ ganhou o prêmio." (que tem bondade)',
    alternativas: [
      { texto: 'Bondosa', correta: true, explicacao: 'Bondosa vem de bondade com o sufixo -osa, escrito com S!' },
      { texto: 'Bondozo', correta: false, explicacao: 'O sufixo -osa usa S, e o masculino seria bondoso!' },
      { texto: 'Bondoça', correta: false, explicacao: 'Ç não aparece nesse sufixo. O certo é bondosa, com S!' }
    ]
  },
  {
    id: 30, tipo: 'adjetivo',
    q: 'Qual frase tem um adjetivo?',
    alternativas: [
      { texto: 'O céu azul brilha.', correta: true, explicacao: 'Azul diz como é o céu: é um adjetivo!' },
      { texto: 'O céu brilha.', correta: false, explicacao: 'Nessa frase só temos o substantivo céu e o verbo brilha. Não há adjetivo!' },
      { texto: 'O pássaro voou.', correta: false, explicacao: 'Pássaro é substantivo e voou é verbo. Nenhum adjetivo aqui!' }
    ]
  },

  // ===== FORMAÇÃO DE PALAVRAS: -EZ/-EZA, -ÊS/-ESA, -IZAR/-ISAR =====
  {
    id: 31, tipo: 'palavras',
    q: 'Qual palavra se forma de "belo" + sufixo e indica a qualidade do que é belo?',
    alternativas: [
      { texto: 'Beleza', correta: true, explicacao: 'Belo vira beleza com o sufixo -eza, que forma substantivos de qualidade!' },
      { texto: 'Belêz', correta: false, explicacao: 'Essa forma não existe. O certo é beleza, com Z no final!' },
      { texto: 'Belês', correta: false, explicacao: '-ês forma palavras de origem (português, chinês), não qualidade como beleza!' }
    ]
  },
  {
    id: 32, tipo: 'palavras',
    q: '"Pobre" vira ______, que é a qualidade de quem tem pouco.',
    alternativas: [
      { texto: 'Pobreza', correta: true, explicacao: 'Pobre vira pobreza com o sufixo -eza, escrito com Z!' },
      { texto: 'Pobresa', correta: false, explicacao: 'Com S estaria errado: qualidade formada por -eza se escreve com Z!' },
      { texto: 'Pobrezar', correta: false, explicacao: '-ar forma verbos. O substantivo de qualidade é pobreza!' }
    ]
  },
  {
    id: 33, tipo: 'palavras',
    q: '"Triste" vira ______, que é a qualidade de quem está triste.',
    alternativas: [
      { texto: 'Tristeza', correta: true, explicacao: 'Triste vira tristeza com o sufixo -eza, escrito com Z!' },
      { texto: 'Tristesa', correta: false, explicacao: 'Com S estaria errado: tristeza se escreve com Z!' },
      { texto: 'Tristesar', correta: false, explicacao: '-ar forma verbos. O substantivo de qualidade é tristeza!' }
    ]
  },
  {
    id: 34, tipo: 'palavras',
    q: 'Qual sufixo forma SUBSTANTIVOS de qualidade a partir de adjetivos?',
    alternativas: [
      { texto: '-eza', correta: true, explicacao: 'Com -eza: belo vira beleza, pobre vira pobreza, limpo vira limpeza!' },
      { texto: '-ês', correta: false, explicacao: '-ês forma palavras de origem, como português e chinês!' },
      { texto: '-izar', correta: false, explicacao: '-izar forma verbos, como realizar e organizar!' }
    ]
  },
  {
    id: 35, tipo: 'palavras',
    q: 'Uma pessoa nascida em Portugal, homem, é chamada de:',
    alternativas: [
      { texto: 'Português', correta: true, explicacao: 'Portugal vira português com o sufixo -ês, que indica origem!' },
      { texto: 'Portuguez', correta: false, explicacao: 'Com Z estaria errado. O gentílico é português, com S!' },
      { texto: 'Portugalês', correta: false, explicacao: 'Essa forma não existe. O certo é português!' }
    ]
  },
  {
    id: 36, tipo: 'palavras',
    q: 'Uma mulher nascida em Portugal é:',
    alternativas: [
      { texto: 'Portuguesa', correta: true, explicacao: 'No feminino, -ês vira -esa: português vira portuguesa!' },
      { texto: 'Portugueza', correta: false, explicacao: 'Com Z estaria errado. O feminino é portuguesa, com S:' },
      { texto: 'Portugoesa', correta: false, explicacao: 'Essa forma não existe. Mulher de Portugal é portuguesa!' }
    ]
  },
  {
    id: 37, tipo: 'palavras',
    q: 'Um homem nascido na China é:',
    alternativas: [
      { texto: 'Chinês', correta: true, explicacao: 'China vira chinês com o sufixo -ês, que indica origem!' },
      { texto: 'Chinez', correta: false, explicacao: 'Com Z estaria errado. O gentílico é chinês, com S:' },
      { texto: 'Chinêsse', correta: false, explicacao: 'Essa forma não existe. O certo é chinês!' }
    ]
  },
  {
    id: 38, tipo: 'palavras',
    q: '"Real" + sufixo forma o verbo ______.',
    alternativas: [
      { texto: 'Realizar', correta: true, explicacao: 'Real vira realizar com o sufixo -izar, que forma verbos!' },
      { texto: 'Realisar', correta: false, explicacao: 'Como "real" não tem S, o verbo usa Z: realizar!' },
      { texto: 'Realezar', correta: false, explicacao: 'Essa forma não existe. O certo é realizar!' }
    ]
  },
  {
    id: 39, tipo: 'palavras',
    q: 'Qual é a escrita CORRETA do verbo que vem de "análise"?',
    alternativas: [
      { texto: 'Analisar', correta: true, explicacao: 'Análise tem S, então o verbo analisar também tem S!' },
      { texto: 'Analizar', correta: false, explicacao: 'Se a palavra parente (análise) tem S, o verbo continua com S: analisar!' },
      { texto: 'Analisár', correta: false, explicacao: 'Acentuação não existe nesse final. O certo é analisar, sem acento!' }
    ]
  },
  {
    id: 40, tipo: 'palavras',
    q: 'A palavra "análise" tem S. Então o verbo "analisar" também tem:',
    alternativas: [
      { texto: 'S', correta: true, explicacao: 'Pense nas palavras parentes: se análise tem S, analisar também tem S!' },
      { texto: 'Z', correta: false, explicacao: 'Z apareceria se a palavra original não tivesse S, como em realizar!' },
      { texto: 'Ç', correta: false, explicacao: 'Ç não tem relação aqui. Analisar se escreve com S, como análise!' }
    ]
  },
  {
    id: 41, tipo: 'palavras',
    q: 'Qual sufixo forma VERBOS?',
    alternativas: [
      { texto: '-izar', correta: true, explicacao: '-izar forma verbos: realizar, organizar, finalizar, utilizar!' },
      { texto: '-eza', correta: false, explicacao: '-eza forma substantivos de qualidade: beleza, limpeza!' },
      { texto: '-ês', correta: false, explicacao: '-ês forma palavras de origem: português, japonês!' }
    ]
  },
  {
    id: 42, tipo: 'palavras',
    q: '"Aviso" vira o verbo ______.',
    alternativas: [
      { texto: 'Avisar', correta: true, explicacao: 'Aviso tem S, então o verbo avisar continua com S!' },
      { texto: 'Avizar', correta: false, explicacao: 'Como aviso tem S, o verbo também tem S: avisar!' },
      { texto: 'Avisezar', correta: false, explicacao: 'Essa forma não existe. O certo é simplesmente avisar!' }
    ]
  },
  {
    id: 43, tipo: 'palavras',
    q: 'Qual sufixo indica ORIGEM ou nacionalidade?',
    alternativas: [
      { texto: '-ês', correta: true, explicacao: 'Com -ês formamos gentílicos: português, chinês, japonês!' },
      { texto: '-eza', correta: false, explicacao: '-eza forma qualidades: beleza, pobreza!' },
      { texto: '-oso', correta: false, explicacao: '-oso forma adjetivos: gostoso, cheiroso!' }
    ]
  },
  {
    id: 44, tipo: 'palavras',
    q: 'A esposa do japonês é ______.',
    alternativas: [
      { texto: 'Japonesa', correta: true, explicacao: 'Japonês vira japonesa no feminino, com -esa!' },
      { texto: 'Japoneza', correta: false, explicacao: 'Com Z estaria errado. O feminino é japonesa, com S:' },
      { texto: 'Japonês', correta: false, explicacao: 'Japonês é o masculino. A mulher é japonesa!' }
    ]
  },
  {
    id: 45, tipo: 'palavras',
    q: 'Qual palavra está escrita CORRETAMENTE?',
    alternativas: [
      { texto: 'Fraqueza', correta: true, explicacao: 'Fraco vira fraqueza com o sufixo -eza, escrito com Z!' },
      { texto: 'Fraquesa', correta: false, explicacao: 'Com S estaria errado: o sufixo -eza usa Z!' },
      { texto: 'Fraquezar', correta: false, explicacao: '-ar forma verbos. O substantivo de qualidade é fraqueza!' }
    ]
  },

  // ===== VERBOS E SUAS RELAÇÕES COM OUTRAS PALAVRAS =====
  {
    id: 46, tipo: 'verbos',
    q: 'Qual destas palavras é um VERBO?',
    alternativas: [
      { texto: 'Correu', correta: true, explicacao: 'Correu indica uma ação: é um verbo!' },
      { texto: 'Corrida', correta: false, explicacao: 'Corrida é um substantivo, o nome da prova ou do esporte!' },
      { texto: 'Corredor', correta: false, explicacao: 'Corredor é um substantivo que nomeia quem corre ou um lugar!' }
    ]
  },
  {
    id: 47, tipo: 'verbos',
    q: 'O verbo indica...',
    alternativas: [
      { texto: 'Ação, estado ou fenômeno', correta: true, explicacao: 'Verbos indicam ações (correr), estados (ser, estar) e fenômenos (chover)!' },
      { texto: 'A qualidade de algo', correta: false, explicacao: 'Qualidade é função do adjetivo!' },
      { texto: 'O nome de um lugar', correta: false, explicacao: 'Nomes de lugares são substantivos!' }
    ]
  },
  {
    id: 48, tipo: 'verbos',
    q: 'Na frase "Nina dormiu.", o verbo "dormiu" precisa de companhia?',
    alternativas: [
      { texto: 'Não, o sentido já está completo', correta: true, explicacao: 'Dormiu sozinho tem sentido completo. Verbos assim são intransitivos!' },
      { texto: 'Sim, precisa de "osso"', correta: false, explicacao: 'Nina pode comer um osso, mas dormir não precisa de companhia!' },
      { texto: 'Sim, precisa de "casa"', correta: false, explicacao: 'Dormir tem sentido completo sem companhia!' }
    ]
  },
  {
    id: 49, tipo: 'verbos',
    q: 'Na frase "Nina comeu o biscoito.", a companhia do verbo "comeu" é:',
    alternativas: [
      { texto: 'O biscoito', correta: true, explicacao: 'Nina comeu O QUÊ? O biscoito! Ele é a companhia (objeto) do verbo!' },
      { texto: 'Nina', correta: false, explicacao: 'Nina é o sujeito, quem faz a ação. A companhia é o biscoito!' },
      { texto: 'Dormiu', correta: false, explicacao: 'Dormiu nem aparece nessa frase. A companhia é o biscoito!' }
    ]
  },
  {
    id: 50, tipo: 'verbos',
    q: 'Qual frase tem verbo que precisa de companhia direta (sem preposição)?',
    alternativas: [
      { texto: 'Nina comeu o biscoito.', correta: true, explicacao: '"Comeu" precisa de companhia (o biscoito) e não usa preposição: é transitivo direto!' },
      { texto: 'Nina dormiu.', correta: false, explicacao: 'Dormir tem sentido completo sozinho: é intransitivo!' },
      { texto: 'Nina correu.', correta: false, explicacao: 'Correr não precisa de companhia: o sentido é completo!' }
    ]
  },
  {
    id: 51, tipo: 'verbos',
    q: '"Paulo precisa ___ ajuda." Qual é a preposição correta?',
    alternativas: [
      { texto: 'De', correta: true, explicacao: 'A gente precisa DE algo: precisa de ajuda! O "de" é a preposição.' },
      { texto: 'Em', correta: false, explicacao: '"Precisa em ajuda" não existe. O certo é precisa de ajuda!' },
      { texto: 'Para', correta: false, explicacao: '"Precisa para ajuda" não existe. Usamos DE: precisa de ajuda!' }
    ]
  },
  {
    id: 52, tipo: 'verbos',
    q: '"Mara gosta ___ ler." Qual é a preposição correta?',
    alternativas: [
      { texto: 'De', correta: true, explicacao: 'A gente gosta DE algo: Mara gosta de ler!' },
      { texto: 'Com', correta: false, explicacao: '"Gosta com ler" não existe. O certo é gosta de ler!' },
      { texto: 'Em', correta: false, explicacao: '"Gosta em ler" não existe. Usamos DE: gosta de ler!' }
    ]
  },
  {
    id: 53, tipo: 'verbos',
    q: 'O verbo que precisa de companhia COM PREPOSIÇÃO é chamado de:',
    alternativas: [
      { texto: 'Transitivo indireto', correta: true, explicacao: 'Indireto é quando a companhia chega com preposição: gostar DE, precisar DE!' },
      { texto: 'Intransitivo', correta: false, explicacao: 'Intransitivo não precisa de companhia nenhuma, como dormir!' },
      { texto: 'Sujeito', correta: false, explicacao: 'Sujeito é quem faz a ação, não é o nome do verbo!' }
    ]
  },
  {
    id: 54, tipo: 'verbos',
    q: '"Joana assistiu ___ um filme." Qual é a preposição correta?',
    alternativas: [
      { texto: 'A', correta: true, explicacao: 'Assistir, no sentido de ver, pede a preposição A: assistir A um filme!' },
      { texto: 'De', correta: false, explicacao: '"Assistiu de um filme" não existe. O certo é assistiu a um filme!' },
      { texto: 'Em', correta: false, explicacao: '"Assistiu em um filme" não existe na norma culta. Usamos A!' }
    ]
  },
  {
    id: 55, tipo: 'verbos',
    q: 'Na frase "Nina deu um osso para o bebê.", quantas companhias o verbo "deu" tem?',
    alternativas: [
      { texto: 'Duas: "um osso" e "para o bebê"', correta: true, explicacao: 'Deu O QUÊ? Um osso. PARA QUEM? Para o bebê. São duas companhias!' },
      { texto: 'Nenhuma', correta: false, explicacao: 'O verbo deu TEM companhias: um osso e para o bebê!' },
      { texto: 'Só uma', correta: false, explicacao: 'São duas: a direta (um osso) e a indireta (para o bebê)!' }
    ]
  },
  {
    id: 56, tipo: 'verbos',
    q: 'Qual é o verbo na frase "Nós estudamos na biblioteca."?',
    alternativas: [
      { texto: 'Estudamos', correta: true, explicacao: 'Estudamos indica a ação: é o verbo da frase!' },
      { texto: 'Nós', correta: false, explicacao: 'Nós é o pronome que indica quem faz a ação: é o sujeito!' },
      { texto: 'Biblioteca', correta: false, explicacao: 'Biblioteca é um substantivo, o nome do lugar!' }
    ]
  },
  {
    id: 57, tipo: 'verbos',
    q: 'Qual é o sujeito da frase "O passarinho voou."?',
    alternativas: [
      { texto: 'O passarinho', correta: true, explicacao: 'Sujeito é quem faz a ação: quem voou? O passarinho!' },
      { texto: 'Voou', correta: false, explicacao: 'Voou é o verbo, a ação. O sujeito é o passarinho!' },
      { texto: 'Ninguém', correta: false, explicacao: 'Tem sim um sujeito: o passarinho! Ele é quem voou.' }
    ]
  },
  {
    id: 58, tipo: 'verbos',
    q: 'Qual frase tem verbo transitivo INDIRETO (com preposição)?',
    alternativas: [
      { texto: 'Eu confio em meus amigos.', correta: true, explicacao: 'Confiar pede a preposição EM: confio em meus amigos!' },
      { texto: 'Eu comi o bolo.', correta: false, explicacao: 'Comer não usa preposição: é transitivo direto!' },
      { texto: 'Eu dormi.', correta: false, explicacao: 'Dormir não precisa de companhia: é intransitivo!' }
    ]
  },
  {
    id: 59, tipo: 'verbos',
    q: 'Na frase "Eu gosto de bolo.", a palavra "de" que acompanha o verbo é:',
    alternativas: [
      { texto: 'Uma preposição', correta: true, explicacao: 'Preposições ligam palavras: gostar DE, precisar DE, confiar EM!' },
      { texto: 'Uma manchete', correta: false, explicacao: 'Manchete é o título da notícia, não tem relação com gostar de bolo!' },
      { texto: 'Uma rubrica', correta: false, explicacao: 'Rubrica é uma indicação do texto teatral. Aqui temos uma preposição!' }
    ]
  },
  {
    id: 60, tipo: 'verbos',
    q: 'Os verbos que NÃO precisam de companhia para completar o sentido são:',
    alternativas: [
      { texto: 'Intransitivos', correta: true, explicacao: 'Intransitivos têm sentido completo sozinhos: Nina dormiu!' },
      { texto: 'Transitivos diretos', correta: false, explicacao: 'Transitivos diretos precisam de companhia sem preposição: comeu o biscoito!' },
      { texto: 'Substantivos', correta: false, explicacao: 'Substantivos são nomes de coisas, não verbos!' }
    ]
  }
];

const jogoBanco = [
  { q: 'belo + ? = qualidade do que é belo', opcoes: ['beleza', 'belês', 'belar'], correta: 'beleza' },
  { q: 'Qual é o adjetivo que vem de "cheiro"?', opcoes: ['cheiroso', 'cheirozo', 'cheiroço'], correta: 'cheiroso' },
  { q: 'Qual é o adjetivo que vem de "gosto"?', opcoes: ['gostoso', 'gostozo', 'gostoço'], correta: 'gostoso' },
  { q: 'Triste + ? = qualidade da tristeza', opcoes: ['tristeza', 'tristesa', 'tristêz'], correta: 'tristeza' },
  { q: 'Pobre + ? = qualidade de quem tem pouco', opcoes: ['pobreza', 'pobresa', 'pobresar'], correta: 'pobreza' },
  { q: 'Portugal → homem nascido lá é...', opcoes: ['português', 'portuguez', 'portugaís'], correta: 'português' },
  { q: 'A mulher de Portugal é...', opcoes: ['portuguesa', 'portugueza', 'português'], correta: 'portuguesa' },
  { q: 'China → homem nascido lá é...', opcoes: ['chinês', 'chinez', 'chino'], correta: 'chinês' },
  { q: 'Japonês → a mulher é...', opcoes: ['japonesa', 'japoneza', 'japoneis'], correta: 'japonesa' },
  { q: 'real + ? = verbo', opcoes: ['realizar', 'realisar', 'realezar'], correta: 'realizar' },
  { q: 'A análise tem S. E o verbo analisar?', opcoes: ['analisar (com S)', 'analizar (com Z)', 'analisar (com Ç)'], correta: 'analisar (com S)' },
  { q: 'aviso + ? = verbo', opcoes: ['avisar', 'avizar', 'avisezar'], correta: 'avisar' },
  { q: 'Cheio de coragem é...', opcoes: ['corajoso', 'corajezo', 'corajoço'], correta: 'corajoso' },
  { q: 'Qual é um adjetivo?', opcoes: ['bonita', 'escola', 'correr'], correta: 'bonita' },
  { q: 'Qual é um verbo?', opcoes: ['brincar', 'brinquedo', 'brincadeira'], correta: 'brincar' },
  { q: 'fraco → qualidade', opcoes: ['fraqueza', 'fraquesa', 'fraquesar'], correta: 'fraqueza' },
  { q: 'limpo → qualidade', opcoes: ['limpeza', 'limpesa', 'limpezar'], correta: 'limpeza' },
  { q: 'leve → qualidade', opcoes: ['leveza', 'levesa', 'levês'], correta: 'leveza' },
  { q: 'Qual sufixo forma verbos?', opcoes: ['-izar', '-eza', '-ês'], correta: '-izar' },
  { q: 'Qual sufixo indica origem?', opcoes: ['-ês', '-eza', '-oso'], correta: '-ês' },
  { q: 'Nina comeu ___.', opcoes: ['o biscoito', 'triste', 'de manhã'], correta: 'o biscoito' },
  { q: 'Paulo precisa ___ ajuda.', opcoes: ['de', 'em', 'para'], correta: 'de' },
  { q: 'Mara gosta ___ ler.', opcoes: ['de', 'com', 'em'], correta: 'de' },
  { q: 'Eu confio ___ meus amigos.', opcoes: ['em', 'de', 'para'], correta: 'em' },
  { q: 'Joana assistiu ___ um filme.', opcoes: ['a', 'de', 'em'], correta: 'a' },
  { q: 'Qual frase tem verbo SEM companhia?', opcoes: ['O bebê dormiu.', 'O bebê comeu o mingau.', 'O bebê deu o brinquedo.'], correta: 'O bebê dormiu.' },
  { q: 'Qual texto tem manchete?', opcoes: ['notícia', 'crônica', 'teatro'], correta: 'notícia' },
  { q: 'Rubricas aparecem em...', opcoes: ['texto teatral', 'notícia', 'receita'], correta: 'texto teatral' },
  { q: 'Humor do dia a dia é...', opcoes: ['crônica', 'notícia', 'texto teatral'], correta: 'crônica' },
  { q: 'O sujeito de "O gato miou." é...', opcoes: ['o gato', 'miou', 'rápido'], correta: 'o gato' }
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

// ===== JOGO DAS PALAVRAS =====
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