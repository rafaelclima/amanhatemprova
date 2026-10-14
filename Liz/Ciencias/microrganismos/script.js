const bancoQuestoes = [
  // ===== O QUE SÃO MICRORGANISMOS (1-10) =====
  {
    id: 1, tipo: 'conceito',
    q: '🔬 Microrganismos são...',
    alternativas: [
      { texto: 'Seres vivos minúsculos, visíveis só com microscópio', correta: true, explicacao: 'Isso! Micro = pequeno. São tão pequenos que só o microscópio revela! 🔬' },
      { texto: 'Pedrinhas que brilham no escuro', correta: false, explicacao: 'Não! Microrganismos são SERES VIVOS minúsculos!' },
      { texto: 'Robôs que limpam a casa', correta: false, explicacao: 'Não! São seres vivos de verdade, não robôs!' }
    ]
  },
  {
    id: 2, tipo: 'conceito',
    q: '🔬 Para VER um microrganismo, usamos...',
    alternativas: [
      { texto: 'O microscópio', correta: true, explicacao: 'Isso! O microscópio aumenta a imagem centenas de vezes! 🔬' },
      { texto: 'Óculos de sol', correta: false, explicacao: 'Óculos de sol protegem do sol, não aumentam nada!' },
      { texto: 'Uma lupa de chocolate', correta: false, explicacao: 'Lupa comum aumenta pouco. Microrganismo precisa de MICROSCÓPIO!' }
    ]
  },
  {
    id: 3, tipo: 'conceito',
    q: '🤔 "Todo microrganismo faz mal." Essa frase é...',
    alternativas: [
      { texto: 'Mito! Muitos são úteis e amigos', correta: true, explicacao: 'Isso! Iogurte, pão e nossa digestão dependem de microrganismos AMIGOS! 🤝' },
      { texto: 'Verdade! Todos causam doenças', correta: false, explicacao: 'Não! Só ALGUNS causam doenças. Muitos são úteis!' },
      { texto: 'Verdade! Por isso não existem mais', correta: false, explicacao: 'Eles existem aos montes! E a maioria não faz mal!' }
    ]
  },
  {
    id: 4, tipo: 'conceito',
    q: '📖 "Micro" na palavra microrganismo significa...',
    alternativas: [
      { texto: 'Pequeno', correta: true, explicacao: 'Isso! Micro = pequeno, organismo = ser vivo. Ser vivo pequeno! 📖' },
      { texto: 'Grande', correta: false, explicacao: 'Grande seria "macro" ou "mega". Micro = PEQUENO!' },
      { texto: 'Colorido', correta: false, explicacao: 'Cor não tem nada a ver. Micro = PEQUENO!' }
    ]
  },
  {
    id: 5, tipo: 'conceito',
    q: '🦠 Microrganismos são seres vivos porque...',
    alternativas: [
      { texto: 'Nascem, se alimentam, se reproduzem e morrem', correta: true, explicacao: 'Isso! Eles fazem tudo que um ser vivo faz, só que em miniatura! 🦠' },
      { texto: 'Brilham no escuro', correta: false, explicacao: 'Brilhar não é sinal de vida. Eles nascem, se alimentam e se reproduzem!' },
      { texto: 'A gente consegue ver a olho nu', correta: false, explicacao: 'Pelo contrário: NÃO vemos a olho nu! Precisamos do microscópio!' }
    ]
  },
  {
    id: 6, tipo: 'conceito',
    q: '🍞 Qual destes alimentos PRECISA de microrganismos para existir?',
    alternativas: [
      { texto: 'Pão', correta: true, explicacao: 'Isso! As leveduras (fungos) fazem a massa crescer! 🍞' },
      { texto: 'Água com limão', correta: false, explicacao: 'Água com limão é só mistura. PÃO precisa de microrganismos!' },
      { texto: 'Sal', correta: false, explicacao: 'Sal é mineral. PÃO precisa das leveduras!' }
    ]
  },
  {
    id: 7, tipo: 'conceito',
    q: '🤧 Microrganismos que causam doenças são chamados de...',
    alternativas: [
      { texto: 'Patogênicos (causadores de doença)', correta: true, explicacao: 'Isso! Pato = doença. Só ALGUNS microrganismos são patogênicos!' },
      { texto: 'Microamigos', correta: false, explicacao: 'Microamigos AJUDAM! Os que causam doença são PATOGÊNICOS!' },
      { texto: 'Vitaminas', correta: false, explicacao: 'Vitaminas nutrem. Os causadores de doença são PATOGÊNICOS!' }
    ]
  },
  {
    id: 8, tipo: 'conceito',
    q: '👀 Por que NÃO vemos microrganismos a olho nu?',
    alternativas: [
      { texto: 'Porque são minúsculos', correta: true, explicacao: 'Isso! São milhares de vezes menores que uma formiga! 👀' },
      { texto: 'Porque são invisíveis como fantasmas', correta: false, explicacao: 'Não são fantasmas! São pequenos demais — o microscópio revela!' },
      { texto: 'Porque vivem no espaço', correta: false, explicacao: 'Vivem AQUI: no ar, na água, no corpo! São só minúsculos!' }
    ]
  },
  {
    id: 9, tipo: 'conceito',
    q: '🤝 "Microamigos" são microrganismos que...',
    alternativas: [
      { texto: 'Ajudam a gente (alimentos, digestão, proteção)', correta: true, explicacao: 'Isso! MicroAMIGOS = amigos! Pão, iogurte e intestino saudável! 🤝' },
      { texto: 'Causam resfriado', correta: false, explicacao: 'Resfriado é de vírus patogênico. Microamigos AJUDAM!' },
      { texto: 'Sujam a roupa', correta: false, explicacao: 'Sujeira não é amizade! Microamigos AJUDAM a gente!' }
    ]
  },
  {
    id: 10, tipo: 'conceito',
    q: '🔬 O microscópio serve para...',
    alternativas: [
      { texto: 'Aumentar a imagem de coisas minúsculas', correta: true, explicacao: 'Isso! Ele aumenta centenas de vezes o que é quase invisível! 🔬' },
      { texto: 'Ver as estrelas do céu', correta: false, explicacao: 'Estrelas se veem com TELESCÓPIO. Microscópio é para o MINÚSCULO!' },
      { texto: 'Ouvir sons distantes', correta: false, explicacao: 'Som se capta com microfone. Microscópio AUMENTA imagens!' }
    ]
  },
  // ===== EM TODO LUGAR + HIGIENE (11-20) =====
  {
    id: 11, tipo: 'lugares',
    q: '🌍 Onde os microrganismos vivem?',
    alternativas: [
      { texto: 'Em todo lugar: ar, água, solo, corpo e alimentos', correta: true, explicacao: 'Isso! Eles estão ESPALHADOS por toda parte! 🌍' },
      { texto: 'Só dentro de hospitais', correta: false, explicacao: 'Hospitais têm, mas eles vivem EM TODO LUGAR!' },
      { texto: 'Só na lua', correta: false, explicacao: 'Estão bem aqui na Terra, em todo lugar!' }
    ]
  },
  {
    id: 12, tipo: 'lugares',
    q: '🧼 Por que lavamos as mãos antes de comer?',
    alternativas: [
      { texto: 'Para tirar microrganismos que podem fazer mal', correta: true, explicacao: 'Isso! Água + sabão removem os micróbios perigosos! 🧼' },
      { texto: 'Para as mãos ficarem perfumadas', correta: false, explicacao: 'Perfume é bônus. O motivo é a SAÚDE: tirar micróbios!' },
      { texto: 'Para a comida ficar mais gostosa', correta: false, explicacao: 'Gosto não muda! Lavar as mãos protege contra DOENÇAS!' }
    ]
  },
  {
    id: 13, tipo: 'lugares',
    q: '🍎 Por que lavamos frutas e verduras?',
    alternativas: [
      { texto: 'Para remover sujeira e microrganismos', correta: true, explicacao: 'Isso! Terra e micróbios grudam na casca: lavar resolve! 🍎' },
      { texto: 'Para elas mudarem de cor', correta: false, explicacao: 'Cor não muda! Lavamos para LIMPAR!' },
      { texto: 'Para elas ficarem maiores', correta: false, explicacao: 'Tamanho não muda! Lavamos para remover micróbios!' }
    ]
  },
  {
    id: 14, tipo: 'lugares',
    q: '🤧 Por que cobrimos a boca ao tossir ou espirrar?',
    alternativas: [
      { texto: 'Porque microrganismos viajam pelo ar', correta: true, explicacao: 'Isso! Tosse e espirro lançam gotinhas com micróbios no ar! 🤧' },
      { texto: 'Porque faz barulho feio', correta: false, explicacao: 'Barulho é o de menos. O motivo é NÃO ESPALHAR micróbios!' },
      { texto: 'Porque a boca cansa', correta: false, explicacao: 'Boca não cansa! Cobrimos para conter os micróbios!' }
    ]
  },
  {
    id: 15, tipo: 'lugares',
    q: '💧 Qual água é segura para beber?',
    alternativas: [
      { texto: 'Água tratada ou filtrada', correta: true, explicacao: 'Isso! Tratada/filtrada passou por limpeza dos micróbios ruins! 💧' },
      { texto: 'Água de poça da rua', correta: false, explicacao: 'Poça tem sujeira e micróbios! Só água TRATADA!' },
      { texto: 'Água parada com mosquito', correta: false, explicacao: 'Perigo duplo: micróbios + mosquito! Só água TRATADA!' }
    ]
  },
  {
    id: 16, tipo: 'lugares',
    q: '🧍 Microrganismos vivem no nosso corpo?',
    alternativas: [
      { texto: 'Sim! Dentro e sobre o corpo (a maioria é amiga)', correta: true, explicacao: 'Isso! Pele e intestino têm microbiota amiga! 🧍' },
      { texto: 'Não, o corpo é limpo demais', correta: false, explicacao: 'Mesmo limpo, o corpo abriga trilhões de micróbios amigos!' },
      { texto: 'Só quando estamos doentes', correta: false, explicacao: 'Eles moram na gente SEMPRE, doentes ou não!' }
    ]
  },
  {
    id: 17, tipo: 'lugares',
    q: '🧊 Guardar comida na geladeira ajuda porque...',
    alternativas: [
      { texto: 'O frio atrasa o crescimento dos microrganismos', correta: true, explicacao: 'Isso! Frio = micróbios devagar = comida dura mais! 🧊' },
      { texto: 'O frio mata todos os microrganismos', correta: false, explicacao: 'Não mata todos, só ATRASA. Por isso comida estraga mesmo gelada, um dia!' },
      { texto: 'A luz da geladeira limpa tudo', correta: false, explicacao: 'A luzinha não limpa nada! É o FRIO que atrasa os micróbios!' }
    ]
  },
  {
    id: 18, tipo: 'lugares',
    q: '🪱 O solo (terra) tem microrganismos?',
    alternativas: [
      { texto: 'Sim! E eles ajudam as plantas a crescer', correta: true, explicacao: 'Isso! Micróbios do solo decompõem restos e alimentam plantas! 🪱' },
      { texto: 'Não, terra é só pedra moída', correta: false, explicacao: 'Terra é cheia de vida! Micróbios ajudam as PLANTAS!' },
      { texto: 'Só se a terra for colorida', correta: false, explicacao: 'Cor não importa. Toda terra tem microrganismos!' }
    ]
  },
  {
    id: 19, tipo: 'lugares',
    q: '🫧 Lavar as mãos com água e sabão elimina...',
    alternativas: [
      { texto: 'Os microrganismos que podem fazer mal', correta: true, explicacao: 'Isso! Sabão + água removem os perigosos! 🫧' },
      { texto: 'Todos os microrganismos do planeta', correta: false, explicacao: 'Só os da sua mão! Os do planeta continuam lá!' },
      { texto: 'Apenas a sujeira visível', correta: false, explicacao: 'Remove a visível E os micróbios invisíveis!' }
    ]
  },
  {
    id: 20, tipo: 'lugares',
    q: '💨 Como os microrganismos da gripe passam de uma pessoa para outra?',
    alternativas: [
      { texto: 'Pelo ar (tosse, espirro, fala)', correta: true, explicacao: 'Isso! Gotinhas invisíveis carregam o vírus pelo ar! 💨' },
      { texto: 'Pelo olhar', correta: false, explicacao: 'Olhar não transmite! É pelo AR (tosse/espirro)!' },
      { texto: 'Pelo pensamento', correta: false, explicacao: 'Pensamento não transmite nada! É pelo AR!' }
    ]
  },
  // ===== TIPOS: VÍRUS (21-25) =====
  {
    id: 21, tipo: 'tipos',
    q: '🦠 Os vírus causam doenças como...',
    alternativas: [
      { texto: 'Gripe e resfriado', correta: true, explicacao: 'Isso! Gripe e resfriado são causados por VÍRUS! 🤧' },
      { texto: 'Cárie sem açúcar', correta: false, explicacao: 'Cárie é de BACTÉRIAS + açúcar. Gripe/resfriado = VÍRUS!' },
      { texto: 'Quebra de osso', correta: false, explicacao: 'Osso quebra com pancada, não com vírus!' }
    ]
  },
  {
    id: 22, tipo: 'tipos',
    q: '🦠 Uma característica dos vírus é que eles...',
    alternativas: [
      { texto: 'Só se multiplicam dentro de outro ser vivo', correta: true, explicacao: 'Isso! Vírus precisa "invadir" células para se copiar! 🦠' },
      { texto: 'São visíveis a olho nu', correta: false, explicacao: 'São MINÚSCULOS! Só microscópio potente revela!' },
      { texto: 'Vivem sozinhos no solo', correta: false, explicacao: 'Sozinhos não se multiplicam. Precisam de outro ser vivo!' }
    ]
  },
  {
    id: 23, tipo: 'tipos',
    q: '💉 As vacinas protegem a gente contra...',
    alternativas: [
      { texto: 'Doenças causadas por vírus e bactérias', correta: true, explicacao: 'Isso! Vacina ensina o corpo a se defender! 💉' },
      { texto: 'Quedas de bicicleta', correta: false, explicacao: 'Queda se evita com capacete! Vacina é contra DOENÇAS!' },
      { texto: 'Provas difíceis', correta: false, explicacao: 'Prova se vence estudando! Vacina protege contra DOENÇAS!' }
    ]
  },
  {
    id: 24, tipo: 'tipos',
    q: '🤧 Espirros, coriza e febre são sinais de...',
    alternativas: [
      { texto: 'Uma virose (como gripe ou resfriado)', correta: true, explicacao: 'Isso! O corpo avisa: tem vírus por aqui! 🤧' },
      { texto: 'Fome', correta: false, explicacao: 'Fome ronca a barriga! Espirro + febre = VIROSE!' },
      { texto: 'Sono', correta: false, explicacao: 'Sono dá bocejo! Espirro + febre = VIROSE!' }
    ]
  },
  {
    id: 25, tipo: 'tipos',
    q: '🧼 Lavar as mãos ajuda contra vírus porque...',
    alternativas: [
      { texto: 'Remove os vírus grudados na pele', correta: true, explicacao: 'Isso! Sabão desmancha e arrasta os vírus! 🧼' },
      { texto: 'Deixa as mãos invisíveis', correta: false, explicacao: 'Mãos continuam visíveis! Lavar REMOVE os vírus!' },
      { texto: 'Transforma vírus em vitamina', correta: false, explicacao: 'Não transforma nada! REMOVE os vírus!' }
    ]
  },
  // ===== TIPOS: BACTÉRIAS (26-29) =====
  {
    id: 26, tipo: 'tipos',
    q: '🔬 Bactérias são...',
    alternativas: [
      { texto: 'Seres de uma célula só (algumas boas, outras ruins)', correta: true, explicacao: 'Isso! Umas causam cárie, outras fazem iogurte! 🔬' },
      { texto: 'Bichinhos com pernas e asas', correta: false, explicacao: 'Sem pernas nem asas! São seres de UMA célula!' },
      { texto: 'Pedras microscópicas', correta: false, explicacao: 'Não são pedras! São SERES VIVOS de uma célula!' }
    ]
  },
  {
    id: 27, tipo: 'tipos',
    q: '🥛 Os lactobacilos, que fazem o iogurte, são...',
    alternativas: [
      { texto: 'Bactérias amigas', correta: true, explicacao: 'Isso! LactoBACILOS = bacilos (bactérias) do leite! 🥛' },
      { texto: 'Vírus perigosos', correta: false, explicacao: 'Não! São BACTÉRIAS amigas que transformam o leite!' },
      { texto: 'Pedacinhos de fruta', correta: false, explicacao: 'Fruta é outra coisa! Lactobacilos são BACTÉRIAS!' }
    ]
  },
  {
    id: 28, tipo: 'tipos',
    q: '🦷 A cárie aparece quando...',
    alternativas: [
      { texto: 'Bactérias + resto de açúcar atacam o dente', correta: true, explicacao: 'Isso! Bactérias adoram açúcar e furam o dente! Escove sempre! 🦷' },
      { texto: 'O dente fica com frio', correta: false, explicacao: 'Frio não fura dente! CÁRIE = bactérias + açúcar!' },
      { texto: 'A gente bebe água', correta: false, explicacao: 'Água não causa cárie! BACTÉRIAS + açúcar sim!' }
    ]
  },
  {
    id: 29, tipo: 'tipos',
    q: '🤔 Qual frase sobre bactérias está CERTA?',
    alternativas: [
      { texto: 'Algumas fazem mal, outras são úteis', correta: true, explicacao: 'Isso! Cárie (ruim) x iogurte (bom): depende da bactéria! 🤔' },
      { texto: 'Todas causam doenças', correta: false, explicacao: 'Não! Muitas são ÚTEIS (iogurte, digestão)!' },
      { texto: 'Todas são maiores que formigas', correta: false, explicacao: 'São MINÚSCULAS! E nem todas fazem mal!' }
    ]
  },
  // ===== TIPOS: FUNGOS (30-32) =====
  {
    id: 30, tipo: 'tipos',
    q: '🍄 Qual destes é um FUNGO?',
    alternativas: [
      { texto: 'O mofo do pão velho', correta: true, explicacao: 'Isso! Mofo = fungo! Ele decompõe o alimento! 🍄' },
      { texto: 'O vírus da gripe', correta: false, explicacao: 'Vírus é outro grupo! Mofo = FUNGO!' },
      { texto: 'A bactéria do iogurte', correta: false, explicacao: 'Lactobacilo é BACTÉRIA! Mofo = FUNGO!' }
    ]
  },
  {
    id: 31, tipo: 'tipos',
    q: '🍞 A levedura, que faz o pão crescer, é...',
    alternativas: [
      { texto: 'Um fungo amigo', correta: true, explicacao: 'Isso! Levedura = fungo que fermenta a massa! 🍞' },
      { texto: 'Um vírus', correta: false, explicacao: 'Vírus causa doença! Levedura é FUNGO amigo!' },
      { texto: 'Um pedacinho de trigo', correta: false, explicacao: 'Trigo é a farinha! A levedura é um FUNGO!' }
    ]
  },
  {
    id: 32, tipo: 'tipos',
    q: '🍄 Cogumelos são...',
    alternativas: [
      { texto: 'Fungos grandes que vemos na natureza', correta: true, explicacao: 'Isso! Cogumelo = parte visível de um fungo! 🍄' },
      { texto: 'Plantinhas com flores', correta: false, explicacao: 'Não são plantas! São FUNGOS!' },
      { texto: 'Ovos de passarinho', correta: false, explicacao: 'Ovos vêm de aves! Cogumelo é FUNGO!' }
    ]
  },
  // ===== TIPOS: PROTOZOÁRIOS (33-35) =====
  {
    id: 33, tipo: 'tipos',
    q: '💧 Protozoários são microrganismos que...',
    alternativas: [
      { texto: 'Têm uma célula e vivem na água', correta: true, explicacao: 'Isso! Água parada pode ter protozoários que fazem mal! 💧' },
      { texto: 'Têm asas e voam', correta: false, explicacao: 'Sem asas! Vivem na ÁGUA e têm uma célula!' },
      { texto: 'São feitos de plástico', correta: false, explicacao: 'São SERES VIVOS de uma célula que vivem na água!' }
    ]
  },
  {
    id: 34, tipo: 'tipos',
    q: '🦟 Por que não bebemos água parada de poça?',
    alternativas: [
      { texto: 'Pode ter protozoários e outros micróbios que fazem mal', correta: true, explicacao: 'Isso! Água parada é festa de micróbio! 🦟' },
      { texto: 'Porque ela é muito gelada', correta: false, explicacao: 'Temperatura não é o problema. São os MICRÓBIOS!' },
      { texto: 'Porque tem gosto de chocolate', correta: false, explicacao: 'Poça não tem gosto de chocolate! Tem MICRÓBIOS!' }
    ]
  },
  {
    id: 35, tipo: 'tipos',
    q: '🤔 Qual grupo vive na ÁGUA e tem uma célula só?',
    alternativas: [
      { texto: 'Protozoários', correta: true, explicacao: 'Isso! Proto = primeiro, zoário = animalzinho: vivem na água! 💧' },
      { texto: 'Cogumelos', correta: false, explicacao: 'Cogumelos são FUNGOS da terra! Na água: PROTOZOÁRIOS!' },
      { texto: 'Leveduras', correta: false, explicacao: 'Leveduras são FUNGOS da massa! Na água: PROTOZOÁRIOS!' }
    ]
  },
  // ===== ALIMENTOS E FERMENTAÇÃO (36-48) =====
  {
    id: 36, tipo: 'alimentos',
    q: '🍞 O pão cresce por causa...',
    alternativas: [
      { texto: 'Das leveduras (fungos) que fermentam a massa', correta: true, explicacao: 'Isso! Leveduras soltam gases e a massa infla fofinha! 🍞' },
      { texto: 'Do forno que sopra a massa', correta: false, explicacao: 'Forno só assa! Quem FAZ crescer são as LEVEDURAS!' },
      { texto: 'Da água que vira ar', correta: false, explicacao: 'Água não vira ar! São as LEVEDURAS fermentando!' }
    ]
  },
  {
    id: 37, tipo: 'alimentos',
    q: '🥛 O iogurte é feito com...',
    alternativas: [
      { texto: 'Lactobacilos (bactérias) que transformam o leite', correta: true, explicacao: 'Isso! Bactérias amigas transformam leite em iogurte! 🥛' },
      { texto: 'Vírus do leite', correta: false, explicacao: 'Vírus causam doença! Iogurte = BACTÉRIAS amigas!' },
      { texto: 'Açúcar queimado', correta: false, explicacao: 'Açúcar não faz iogurte! São os LACTOBACILOS!' }
    ]
  },
  {
    id: 38, tipo: 'alimentos',
    q: '🧀 O queijo ganha sabor e textura com ajuda de...',
    alternativas: [
      { texto: 'Bactérias e fungos', correta: true, explicacao: 'Isso! Micróbios amigos trabalham no queijo! 🧀' },
      { texto: 'Areia e pedra', correta: false, explicacao: 'Queijo não leva areia! São BACTÉRIAS e FUNGOS!' },
      { texto: 'Tinta e cola', correta: false, explicacao: 'Que horror! Queijo = BACTÉRIAS e FUNGOS amigos!' }
    ]
  },
  {
    id: 39, tipo: 'alimentos',
    q: '🫧 Fermentação é...',
    alternativas: [
      { texto: 'Microrganismos transformando o alimento', correta: true, explicacao: 'Isso! Pão crescendo, leite virando iogurte = FERMENTAÇÃO! 🫧' },
      { texto: 'Comida estragando no sol', correta: false, explicacao: 'Estragar é decomposição ruim. Fermentação TRANSFORMA para melhor!' },
      { texto: 'Lavar a louça', correta: false, explicacao: 'Louça é higiene! Fermentação = micróbios TRANSFORMANDO alimento!' }
    ]
  },
  {
    id: 40, tipo: 'alimentos',
    q: '🍞 Se o pão NÃO cresceu, o que pode ter faltado?',
    alternativas: [
      { texto: 'As leveduras (fermento) vivas', correta: true, explicacao: 'Isso! Sem levedura viva, sem fermentação, sem crescimento! 🍞' },
      { texto: 'Mais água na receita', correta: false, explicacao: 'Água sozinha não cresce massa. Quem cresce é a LEVEDURA!' },
      { texto: 'Um forno maior', correta: false, explicacao: 'Forno não faz crescer! É a LEVEDURA!' }
    ]
  },
  {
    id: 41, tipo: 'alimentos',
    q: '🥛 Leite + lactobacilos + tempo = ...',
    alternativas: [
      { texto: 'Iogurte', correta: true, explicacao: 'Isso! A receita do iogurte: leite + bactérias amigas! 🥛' },
      { texto: 'Sorvete', correta: false, explicacao: 'Sorvete precisa congelar! Leite + lactobacilos = IOGURTE!' },
      { texto: 'Manteiga', correta: false, explicacao: 'Manteiga se bate o creme! Leite + lactobacilos = IOGURTE!' }
    ]
  },
  {
    id: 42, tipo: 'alimentos',
    q: '🤔 Há milhares de anos usamos microrganismos para...',
    alternativas: [
      { texto: 'Preparar alimentos como pão, iogurte e queijo', correta: true, explicacao: 'Isso! Fermentação é uma técnica milenar! 🤔' },
      { texto: 'Fazer sapatos', correta: false, explicacao: 'Sapato é couro e costura! Micróbios fazem COMIDA!' },
      { texto: 'Construir casas', correta: false, explicacao: 'Casa é tijolo! Micróbios preparam ALIMENTOS!' }
    ]
  },
  {
    id: 43, tipo: 'alimentos',
    q: '🍕 A massa da pizza cresce pelo mesmo motivo do pão. Qual é?',
    alternativas: [
      { texto: 'As leveduras fermentam a massa', correta: true, explicacao: 'Isso! Pizza e pão: massa + levedura = fofinha! 🍕' },
      { texto: 'O queijo derrete', correta: false, explicacao: 'Queijo derrete depois! A massa cresce pela LEVEDURA!' },
      { texto: 'O molho de tomate', correta: false, explicacao: 'Molho dá gosto! Crescer é trabalho da LEVEDURA!' }
    ]
  },
  {
    id: 44, tipo: 'alimentos',
    q: '🫗 O que as leveduras soltam na massa que faz ela inflar?',
    alternativas: [
      { texto: 'Gases da fermentação', correta: true, explicacao: 'Isso! Bolhinhas de gás inflam a massa como balão! 🫗' },
      { texto: 'Água', correta: false, explicacao: 'Água não infla! São os GASES da fermentação!' },
      { texto: 'Açúcar', correta: false, explicacao: 'Açúcar é COMIDA da levedura! O que infla são os GASES!' }
    ]
  },
  {
    id: 45, tipo: 'alimentos',
    q: '🧀 Bactérias e fungos do queijo são...',
    alternativas: [
      { texto: 'Microrganismos úteis e controlados', correta: true, explicacao: 'Isso! Na fábrica, micróbios do bem trabalham sob controle! 🧀' },
      { texto: 'Sujeira que caiu dentro', correta: false, explicacao: 'Não é sujeira! São micróbios ÚTEIS e controlados!' },
      { texto: 'Venenos perigosos', correta: false, explicacao: 'Queijo é seguro! São micróbios ÚTEIS!' }
    ]
  },
  {
    id: 46, tipo: 'alimentos',
    q: '😋 Por que o pão caseiro fica fofinho?',
    alternativas: [
      { texto: 'As leveduras fermentam e soltam gases', correta: true, explicacao: 'Isso! Fermentação = fofura! 😋' },
      { texto: 'A farinha é mágica', correta: false, explicacao: 'Farinha sozinha é pesada! A mágica é a LEVEDURA!' },
      { texto: 'O forno é quentinho', correta: false, explicacao: 'Forno assa! Fofura vem da FERMENTAÇÃO!' }
    ]
  },
  {
    id: 47, tipo: 'alimentos',
    q: '🥛 Qual microrganismo transforma leite em iogurte?',
    alternativas: [
      { texto: 'Lactobacilo (bactéria)', correta: true, explicacao: 'Lacto = leite, bacilo = bactéria. Decore: iogurte = LACTOBACILO! 🥛' },
      { texto: 'Vírus da gripe', correta: false, explicacao: 'Vírus causa doença! Iogurte = LACTOBACILO!' },
      { texto: 'Mofo', correta: false, explicacao: 'Mofo é fungo de coisa velha! Iogurte = LACTOBACILO!' }
    ]
  },
  {
    id: 48, tipo: 'alimentos',
    q: '🤔 Fermentação e apodrecimento são a mesma coisa?',
    alternativas: [
      { texto: 'Não! Fermentação é controlada e útil; apodrecer estraga', correta: true, explicacao: 'Isso! Pão e iogurte = fermentação do bem. Comida podre = perigosa! 🤔' },
      { texto: 'Sim! Dá para comer comida podre', correta: false, explicacao: 'NUNCA coma comida estragada! Fermentação é CONTROLADA!' },
      { texto: 'Sim! Pão é comida estragada', correta: false, explicacao: 'Pão é fermentação do BEM! Apodrecer ESTRAGA!' }
    ]
  },
  // ===== MICROAMIGOS, MICROBIOTA E RUMINANTES (49-60) =====
  {
    id: 49, tipo: 'microamigos',
    q: '🦠💛 Microbiota é...',
    alternativas: [
      { texto: 'A comunidade de microrganismos amigos que mora na gente', correta: true, explicacao: 'Isso! Principalmente no intestino: um time de microamigos! 🦠💛' },
      { texto: 'Um tipo de microscópio', correta: false, explicacao: 'Microscópio é o APARELHO. Microbiota = COMUNIDADE de micróbios!' },
      { texto: 'Uma doença de pele', correta: false, explicacao: 'Não é doença! É o time de micróbios AMIGOS!' }
    ]
  },
  {
    id: 50, tipo: 'microamigos',
    q: '🦠💛 Onde mora a maior parte da nossa microbiota?',
    alternativas: [
      { texto: 'No intestino (flora intestinal)', correta: true, explicacao: 'Isso! No intestino eles ajudam na digestão! 🦠💛' },
      { texto: 'No cabelo', correta: false, explicacao: 'Cabelo tem poucos! A festa é no INTESTINO!' },
      { texto: 'Nas unhas', correta: false, explicacao: 'Unhas juntam sujeira! Microbiota mora no INTESTINO!' }
    ]
  },
  {
    id: 51, tipo: 'microamigos',
    q: '🍽️ A microbiota ajuda a gente a...',
    alternativas: [
      { texto: 'Digerir alimentos e se proteger de micróbios ruins', correta: true, explicacao: 'Isso! Digestão + proteção: time completo! 🍽️' },
      { texto: 'Enxergar no escuro', correta: false, explicacao: 'Enxergar é com os olhos! Microbiota ajuda na DIGESTÃO!' },
      { texto: 'Correr mais rápido', correta: false, explicacao: 'Correr é com as pernas! Microbiota ajuda na DIGESTão!' }
    ]
  },
  {
    id: 52, tipo: 'microamigos',
    q: '🐄 Quais animais são RUMINANTES?',
    alternativas: [
      { texto: 'Vaca, boi, cabra e ovelha', correta: true, explicacao: 'Isso! Todos comem capim e ruminam! 🐄' },
      { texto: 'Cachorro, gato e papagaio', correta: false, explicacao: 'Esses não ruminam! Ruminantes: VACA, BOI, CABRA, OVELHA!' },
      { texto: 'Tubarão, baleia e golfinho', correta: false, explicacao: 'São do mar e não ruminam! Pense no pasto: VACA!' }
    ]
  },
  {
    id: 53, tipo: 'microamigos',
    q: '🌱 Ruminar significa...',
    alternativas: [
      { texto: 'Mastigar, engolir, regurgitar e mastigar de novo', correta: true, explicacao: 'Isso! Mastigar DUAS vezes: o segredo do capim! 🌱' },
      { texto: 'Comer bem rapidinho', correta: false, explicacao: 'Pelo contrário: é mastigar DUAS vezes, com calma!' },
      { texto: 'Dormir depois de comer', correta: false, explicacao: 'Dormir é soneca! Ruminar = MASTIGAR DE NOVO!' }
    ]
  },
  {
    id: 54, tipo: 'microamigos',
    q: '🐄 Por que a vaca consegue digerir capim e a gente não?',
    alternativas: [
      { texto: 'Microrganismos da barriga dela digerem a planta', correta: true, explicacao: 'Isso! Micróbios da barriga + ruminação = capim digerido! 🐄' },
      { texto: 'O capim dela é de plástico', correta: false, explicacao: 'Capim é planta de verdade! O segredo são os MICRÓBIOS da barriga!' },
      { texto: 'Ela tem dentes de ferro', correta: false, explicacao: 'Dentes são normais! O segredo são os MICRÓBIOS + ruminação!' }
    ]
  },
  {
    id: 55, tipo: 'microamigos',
    q: '🌱 Capim é difícil de digerir porque...',
    alternativas: [
      { texto: 'Tem fibras duras que precisam de ajuda especial', correta: true, explicacao: 'Isso! Fibra dura = trabalho para os micróbios da barriga! 🌱' },
      { texto: 'É venenoso', correta: false, explicacao: 'Não é veneno! É só DURO de digerir (fibras)!' },
      { texto: 'É muito doce', correta: false, explicacao: 'Capim nem é doce! É DURO: cheio de fibras!' }
    ]
  },
  {
    id: 56, tipo: 'microamigos',
    q: '🤝 Microrganismos da barriga da vaca são para ela...',
    alternativas: [
      { texto: 'Microamigos: ajudam na digestão', correta: true, explicacao: 'Isso! Ajudam a vaca E ganham moradia: parceria! 🤝' },
      { texto: 'Inimigos: deixam ela doente', correta: false, explicacao: 'Se fossem inimigos, a vaca viveria doente! São AMIGOS!' },
      { texto: 'Enfeite: não fazem nada', correta: false, explicacao: 'Fazem MUITO: digerem o capim! São AMIGOS!' }
    ]
  },
  {
    id: 57, tipo: 'microamigos',
    q: '🦠💛 Cuidar da microbiota (comer bem, higiene) é importante porque...',
    alternativas: [
      { texto: 'Ela protege a gente e ajuda na digestão', correta: true, explicacao: 'Isso! Microbiota feliz = corpo protegido! 🦠💛' },
      { texto: 'Ela deixa o cabelo colorido', correta: false, explicacao: 'Cabelo é outra história! Microbiota = DIGESTÃO + PROTEÇÃO!' },
      { texto: 'Ela faz a gente crescer 1 metro', correta: false, explicacao: 'Crescer é outra história! Microbiota = DIGESTÃO + PROTEÇÃO!' }
    ]
  },
  {
    id: 58, tipo: 'microamigos',
    q: '🐑 Ovelha e cabra são ruminantes. O que elas comem?',
    alternativas: [
      { texto: 'Capim e plantas', correta: true, explicacao: 'Isso! Pasto verde: capim e plantinhas! 🐑' },
      { texto: 'Pizza e sorvete', correta: false, explicacao: 'Pizza é nossa! Elas comem CAPIM e plantas!' },
      { texto: 'Peixe e camarão', correta: false, explicacao: 'Peixe é do mar! Elas comem CAPIM!' }
    ]
  },
  {
    id: 59, tipo: 'microamigos',
    q: '🔄 Qual é a ordem da ruminação?',
    alternativas: [
      { texto: 'Mastiga → engole → regurgita → mastiga de novo', correta: true, explicacao: 'Isso! Duas mastigadas: a receita do capim! 🔄' },
      { texto: 'Engole → dorme → acorda', correta: false, explicacao: 'Sem soneca! É: mastiga, engole, REGURGITA, mastiga!' },
      { texto: 'Mastiga → cospe fora', correta: false, explicacao: 'Não cospe fora! ENGole, traz de volta e mastiga DE NOVO!' }
    ]
  },
  {
    id: 60, tipo: 'microamigos',
    q: '🌍 Microrganismos, plantas, vacas e gente: qual frase resume tudo?',
    alternativas: [
      { texto: 'Os seres vivos dependem uns dos outros', correta: true, explicacao: 'Isso! Micróbios ajudam vacas e gente: tudo conectado! 🌍' },
      { texto: 'Cada um vive sozinho', correta: false, explicacao: 'Ninguém vive sozinho! Vaca precisa de micróbio, gente precisa de planta!' },
      { texto: 'Só gente importa', correta: false, explicacao: 'Todos importam! Até os invisíveis MICRÓBIOS!' }
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

// ===== JOGO MICRO RUSH (baralho sem repetição + 2 formatos + níveis) =====
const bancoJogo = [
  // --- formato escolha (dica -> 4 opções) ---
  { modo: 'escolha', dica: '🔬 Aparelho que revela os micróbios!', opcoes: ['microscópio', 'telescópio', 'microfone', 'binóculo'], certa: 'microscópio' },
  { modo: 'escolha', dica: '🤧 Causa gripe e resfriado!', opcoes: ['vírus', 'vitamina', 'verme', 'vegetal'], certa: 'vírus' },
  { modo: 'escolha', dica: '🥛 Transforma leite em iogurte!', opcoes: ['lactobacilo', 'lactose', 'lagarta', 'lápis'], certa: 'lactobacilo' },
  { modo: 'escolha', dica: '🍞 Faz a massa do pão crescer!', opcoes: ['levedura', 'leite', 'legume', 'limão'], certa: 'levedura' },
  { modo: 'escolha', dica: '🍄 Mofo do pão velho é um...', opcoes: ['fungo', 'ferro', 'fóssil', 'foguete'], certa: 'fungo' },
  { modo: 'escolha', dica: '💧 Vive na água e tem uma célula!', opcoes: ['protozoário', 'peixinho', 'polvo', 'pato'], certa: 'protozoário' },
  { modo: 'escolha', dica: '🦠💛 Time de micróbios amigos do intestino!', opcoes: ['microbiota', 'microscópio', 'micro-ondas', 'microfone'], certa: 'microbiota' },
  { modo: 'escolha', dica: '🐄 Come capim e mastiga duas vezes!', opcoes: ['ruminante', 'roedor', 'réptil', 'rinoceronte'], certa: 'ruminante' },
  { modo: 'escolha', dica: '🍞🥛🧀 Micróbios transformando alimento!', opcoes: ['fermentação', 'ferradura', 'feriado', 'ferrovia'], certa: 'fermentação' },
  { modo: 'escolha', dica: '🦷 Bactérias + açúcar atacam o...', opcoes: ['dente (cárie)', 'dedo', 'dólar', 'disco'], certa: 'dente (cárie)' },
  { modo: 'escolha', dica: '🧼 Antes de comer, lave as...', opcoes: ['mãos', 'meias', 'mochilas', 'mesas'], certa: 'mãos' },
  { modo: 'escolha', dica: '🐑 Vaca, boi, cabra e...?', opcoes: ['ovelha', 'onça', 'ostra', 'urso'], certa: 'ovelha' },
  { modo: 'escolha', dica: '🫧 Mastiga, engole, regurgita e...?', opcoes: ['mastiga de novo', 'dorme', 'corre', 'nada'], certa: 'mastiga de novo' },
  { modo: 'escolha', dica: '🧀 Bactérias e fungos amigos fazem o...', opcoes: ['queijo', 'quadro', 'quintal', 'quibe'], certa: 'queijo' },
  { modo: 'escolha', dica: '💧 Segura para beber!', opcoes: ['água tratada', 'água de poça', 'água de balde sujo', 'água parada'], certa: 'água tratada' },
  { modo: 'escolha', dica: '🍄 Cogumelo é um...', opcoes: ['fungo', 'fruto', 'ferro', 'fio'], certa: 'fungo' },
  // --- formato verdade ou mito ---
  { modo: 'vf', frase: 'Todo microrganismo faz mal.', certa: false, porque: 'Mito! Muitos são úteis: pão, iogurte e digestão! 🤝' },
  { modo: 'vf', frase: 'Microscópio aumenta coisas minúsculas.', certa: true, porque: 'Verdade! Centenas de vezes! 🔬' },
  { modo: 'vf', frase: 'Lavar as mãos tira micróbios perigosos.', certa: true, porque: 'Verdade! Água + sabão protegem! 🧼' },
  { modo: 'vf', frase: 'Mofo é um tipo de fungo.', certa: true, porque: 'Verdade! Mofo = fungo decompositor! 🍄' },
  { modo: 'vf', frase: 'Levedura é um vírus.', certa: false, porque: 'Mito! Levedura é um FUNGO amigo do pão! 🍞' },
  { modo: 'vf', frase: 'Iogurte é feito por bactérias.', certa: true, porque: 'Verdade! Lactobacilos transformam o leite! 🥛' },
  { modo: 'vf', frase: 'A vaca digere capim sozinha, sem ajuda.', certa: false, porque: 'Mito! Micróbios da barriga fazem a digestão! 🐄' },
  { modo: 'vf', frase: 'Ruminar é mastigar duas vezes.', certa: true, porque: 'Verdade! Mastiga, engole, regurgita e mastiga! 🌱' },
  { modo: 'vf', frase: 'Cogumelo é uma planta.', certa: false, porque: 'Mito! Cogumelo é FUNGO! 🍄' },
  { modo: 'vf', frase: 'Tosse e espirro espalham micróbios pelo ar.', certa: true, porque: 'Verdade! Por isso cobrimos a boca! 🤧' },
  { modo: 'vf', frase: 'Protozoários vivem na água.', certa: true, porque: 'Verdade! Uma célula, vida na água! 💧' },
  { modo: 'vf', frase: 'Geladeira mata todos os micróbios da comida.', certa: false, porque: 'Mito! O frio só ATRASA o crescimento! 🧊' },
  { modo: 'vf', frase: 'Microbiota mora no intestino.', certa: true, porque: 'Verdade! E ajuda na digestão! 🦠💛' },
  { modo: 'vf', frase: 'Cabra e ovelha são ruminantes.', certa: true, porque: 'Verdade! Como a vaca: capim + ruminação! 🐑' }
];

const NIVEIS_JOGO = [
  '🔬 Aprendiz de Laboratório',
  '🧫 Explorador Microbiano',
  '🧪 Cientista do Invisível',
  '🦠 Mestre dos Micróbios',
  '🏆 Gênio da Microbiota'
];

let jogoAcertos = 0;
let jogoPontos = 0;
let jogoSequencia = 0;
let jogoRodadas = 0;
let deckJogo = [];

function nivelAtual() {
  return Math.min(Math.floor(jogoAcertos / 5), NIVEIS_JOGO.length - 1);
}

function iniciarJogo() {
  jogoAcertos = 0;
  jogoPontos = 0;
  jogoSequencia = 0;
  jogoRodadas = 0;
  deckJogo = [];
  document.getElementById('jogo-acertos').textContent = '0';
  document.getElementById('jogo-pontos').textContent = '0';
  document.getElementById('jogo-sequencia').textContent = '0';
  document.getElementById('jogo-mensagem').textContent = '';
  document.getElementById('jogo-nivel').textContent = '';
  gerarPergunta();
}

function gerarPergunta() {
  if (deckJogo.length === 0) {
    deckJogo = shuffleArray(bancoJogo);
    if (jogoRodadas > 0) {
      const msgEl = document.getElementById('jogo-mensagem');
      msgEl.textContent = '🔀 Baralho novo embaralhado! Sem repetições!';
      msgEl.style.color = '#22d3ee';
      setTimeout(() => { if (msgEl.textContent.startsWith('🔀')) msgEl.textContent = ''; }, 1500);
    }
  }
  jogoRodadas++;
  const item = deckJogo.pop();
  const container = document.getElementById('jogo-opcoes');

  if (item.modo === 'vf') {
    document.getElementById('jogo-pergunta').textContent = '✅ ou ❌? ' + item.frase;
    container.innerHTML = '';
    const btnV = document.createElement('button');
    btnV.className = 'jogo-opcao';
    btnV.style.fontSize = '1.2rem';
    btnV.textContent = '✅ Verdadeiro';
    const btnM = document.createElement('button');
    btnM.className = 'jogo-opcao';
    btnM.style.fontSize = '1.2rem';
    btnM.textContent = '❌ Mito';
    container.appendChild(Math.random() < 0.5 ? btnV : btnM);
    container.appendChild(container.firstChild === btnV ? btnM : btnV);
    btnV.addEventListener('click', () => responderJogoVF(btnV, item));
    btnM.addEventListener('click', () => responderJogoVF(btnM, item));
  } else {
    document.getElementById('jogo-pergunta').textContent = item.dica;
    container.innerHTML = '';
    shuffleArray(item.opcoes).forEach(op => {
      const btn = document.createElement('button');
      btn.className = 'jogo-opcao';
      btn.style.fontSize = '1.2rem';
      btn.textContent = op;
      btn.addEventListener('click', () => responderJogoEscolha(btn, item));
      container.appendChild(btn);
    });
  }
  atualizarNivel();
}

function atualizarNivel() {
  const n = nivelAtual();
  const restantes = deckJogo.length;
  document.getElementById('jogo-nivel').textContent =
    `${NIVEIS_JOGO[n]} (nível ${n + 1}/${NIVEIS_JOGO.length}) • 🃏 ${restantes} carta${restantes === 1 ? '' : 's'} no baralho`;
}

function pontuar(acertou, btn, todosBtns, corretaTexto, msgOk, msgErro) {
  todosBtns.forEach(b => b.style.pointerEvents = 'none');
  if (acertou) {
    btn.classList.add('correta');
    jogoAcertos++;
    jogoSequencia++;
    const antes = nivelAtual();
    const pts = 10 + (jogoSequencia > 1 ? jogoSequencia * 2 : 0);
    jogoPontos += pts;
    const depois = nivelAtual();
    document.getElementById('jogo-mensagem').textContent =
      `✅ Correto! +${pts} pontos` + (msgOk ? ` • ${msgOk}` : '') + (depois > antes ? ` • 🎓 Subiu para ${NIVEIS_JOGO[depois]}!` : '');
    document.getElementById('jogo-mensagem').style.color = '#4ade80';
  } else {
    btn.classList.add('incorreta');
    todosBtns.forEach(b => { if (b.textContent === corretaTexto) b.classList.add('correta'); });
    jogoSequencia = 0;
    document.getElementById('jogo-mensagem').textContent = msgErro;
    document.getElementById('jogo-mensagem').style.color = '#f87171';
  }
  document.getElementById('jogo-acertos').textContent = jogoAcertos;
  document.getElementById('jogo-pontos').textContent = jogoPontos;
  document.getElementById('jogo-sequencia').textContent = jogoSequencia;
  atualizarNivel();
  setTimeout(() => gerarPergunta(), 1600);
}

function responderJogoEscolha(btn, item) {
  const btns = [...document.querySelectorAll('#jogo-opcoes .jogo-opcao')];
  pontuar(btn.textContent === item.certa, btn, btns, item.certa,
    '', `❌ Era "${item.certa}". Tente a próxima!`);
}

function responderJogoVF(btn, item) {
  const btns = [...document.querySelectorAll('#jogo-opcoes .jogo-opcao')];
  const escolheuVerdade = btn.textContent.includes('Verdadeiro');
  const acertou = escolheuVerdade === item.certa;
  const corretaTexto = item.certa ? '✅ Verdadeiro' : '❌ Mito';
  pontuar(acertou, btn, btns, corretaTexto,
    item.porque, (item.certa ? '❌ Era VERDADE! ' : '❌ Era MITO! ') + item.porque);
}
