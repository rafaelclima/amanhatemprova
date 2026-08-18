const bancoQuestoes = [
  // ===== CAPÍTULO 8: CICLOS E FLUXOS =====
  {
    id: 1, tipo: 'ciclos',
    q: 'Quem começa a cadeia alimentar?',
    alternativas: [
      { texto: 'Os produtores (as plantas)', correta: true, explicacao: 'As plantas produzem o próprio alimento pela fotossíntese: são o primeiro elo!' },
      { texto: 'Os consumidores', correta: false, explicacao: 'Os consumidores dependem de outros seres para comer. Quem começa são os produtores!' },
      { texto: 'Os decompositores', correta: false, explicacao: 'Os decompositores reciclam os restos no final da cadeia, não começam ela!' }
    ]
  },
  {
    id: 2, tipo: 'ciclos',
    q: 'As plantas são chamadas de...',
    alternativas: [
      { texto: 'Produtores', correta: true, explicacao: 'As plantas produzem o próprio alimento pela fotossíntese!' },
      { texto: 'Consumidores', correta: false, explicacao: 'Consumidores são os animais que se alimentam de outros seres!' },
      { texto: 'Decompositores', correta: false, explicacao: 'Decompositores são fungos, bactérias e minhocas, que reciclam restos!' }
    ]
  },
  {
    id: 3, tipo: 'ciclos',
    q: 'De onde vem a energia que começa a cadeia alimentar?',
    alternativas: [
      { texto: 'Do Sol', correta: true, explicacao: 'O Sol fornece a energia que as plantas usam na fotossíntese. Tudo começa no Sol!' },
      { texto: 'Da Lua', correta: false, explicacao: 'A Lua reflete a luz do Sol, mas quem fornece energia às plantas é o Sol!' },
      { texto: 'Do vento', correta: false, explicacao: 'O vento não produz energia para as plantas. Essa energia vem do Sol!' }
    ]
  },
  {
    id: 4, tipo: 'ciclos',
    q: 'Os animais que comem plantas são chamados de...',
    alternativas: [
      { texto: 'Consumidores primários (herbívoros)', correta: true, explicacao: 'Herbívoros como o gafanhoto e a vaca comem as plantas: são os primeiros consumidores!' },
      { texto: 'Produtores', correta: false, explicacao: 'Produtores são as plantas, que fazem fotossíntese!' },
      { texto: 'Decompositores', correta: false, explicacao: 'Decompositores reciclam restos de seres mortos, como os fungos!' }
    ]
  },
  {
    id: 5, tipo: 'ciclos',
    q: 'O gafanhoto come plantas. Na cadeia alimentar, ele é um...',
    alternativas: [
      { texto: 'Consumidor primário', correta: true, explicacao: 'O gafanhoto come o produtor (a planta): é o primeiro consumidor!' },
      { texto: 'Produtor', correta: false, explicacao: 'O gafanhoto não produz alimento, ele come as plantas!' },
      { texto: 'Decompositor', correta: false, explicacao: 'O gafanhoto não recicla restos: ele é um consumidor!' }
    ]
  },
  {
    id: 6, tipo: 'ciclos',
    q: 'Quem são os decompositores?',
    alternativas: [
      { texto: 'Fungos, bactérias e minhocas', correta: true, explicacao: 'Fungos, bactérias e minhocas reciclam a matéria dos seres mortos!' },
      { texto: 'Leões e cobras', correta: false, explicacao: 'Leões e cobras são carnívoros que caçam: são consumidores!' },
      { texto: 'As plantas', correta: false, explicacao: 'As plantas são produtores, não decompositores!' }
    ]
  },
  {
    id: 7, tipo: 'ciclos',
    q: 'O que os decompositores fazem?',
    alternativas: [
      { texto: 'Reciclam a matéria, transformando restos em nutrientes', correta: true, explicacao: 'Eles transformam restos de seres mortos em nutrientes para o solo: reciclagem!' },
      { texto: 'Fabricam alimento com a luz do sol', correta: false, explicacao: 'Fabricar alimento com a luz do sol é a fotossíntese, feita pelas plantas!' },
      { texto: 'Caçam outros animais para comer', correta: false, explicacao: 'Caçar é o que fazem os predadores, como a cobra!' }
    ]
  },
  {
    id: 8, tipo: 'ciclos',
    q: 'Qual é a função da planta na cadeia alimentar?',
    alternativas: [
      { texto: 'Produzir alimento pela fotossíntese', correta: true, explicacao: 'A planta capta a luz do sol e produz o alimento que alimenta toda a cadeia!' },
      { texto: 'Caçar outros animais', correta: false, explicacao: 'Plantas não caçam! Quem caça são os predadores!' },
      { texto: 'Decompor os restos', correta: false, explicacao: 'Decompor restos é trabalho dos fungos, bactérias e minhocas!' }
    ]
  },
  {
    id: 9, tipo: 'ciclos',
    q: 'A teia alimentar é...',
    alternativas: [
      { texto: 'Várias cadeias alimentares interligadas', correta: true, explicacao: 'Na teia, vários caminhos de alimento se cruzam, como uma teia de aranha!' },
      { texto: 'Uma única cadeia alimentar', correta: false, explicacao: 'Uma única cadeia é só um caminho. A teia junta várias cadeias!' },
      { texto: 'Um grupo de animais da mesma espécie', correta: false, explicacao: 'Um grupo da mesma espécie é um bando. A teia é a ligação de várias cadeias!' }
    ]
  },
  {
    id: 10, tipo: 'ciclos',
    q: 'Na cadeia grama → gafanhoto → sapo → cobra, o sapo come...',
    alternativas: [
      { texto: 'O gafanhoto', correta: true, explicacao: 'Na cadeia, cada um come o anterior: o sapo come o gafanhoto!' },
      { texto: 'A cobra', correta: false, explicacao: 'A cobra vem DEPOIS do sapo, é quem come o sapo!' },
      { texto: 'A grama', correta: false, explicacao: 'Quem come a grama é o gafanhoto, o primeiro consumidor!' }
    ]
  },
  {
    id: 11, tipo: 'ciclos',
    q: 'Na cadeia grama → gafanhoto → sapo → cobra, quem come o sapo?',
    alternativas: [
      { texto: 'A cobra', correta: true, explicacao: 'A cobra é o consumidor terciário: ela come o sapo!' },
      { texto: 'O gafanhoto', correta: false, explicacao: 'O gafanhoto come a grama, não o sapo!' },
      { texto: 'A grama', correta: false, explicacao: 'A grama é o produtor, ninguém come a grama nesse final de cadeia!' }
    ]
  },
  {
    id: 12, tipo: 'ciclos',
    q: 'Na cadeia grama → gafanhoto → sapo → cobra, a grama é o...',
    alternativas: [
      { texto: 'Produtor', correta: true, explicacao: 'A grama é uma planta que produz alimento pela fotossíntese!' },
      { texto: 'Consumidor', correta: false, explicacao: 'A grama não consome outros seres: ela produz o próprio alimento!' },
      { texto: 'Decompositor', correta: false, explicacao: 'Decompositores reciclam restos, como fungos e minhocas!' }
    ]
  },
  {
    id: 13, tipo: 'ciclos',
    q: 'Quando um animal morre na natureza, quem cuida da reciclagem?',
    alternativas: [
      { texto: 'Os decompositores', correta: true, explicacao: 'Fungos, bactérias e minhocas transformam o corpo em nutrientes para o solo!' },
      { texto: 'Os produtores', correta: false, explicacao: 'As plantas produzem alimento, não reciclam seres mortos!' },
      { texto: 'As nuvens', correta: false, explicacao: 'Nuvens fazem parte do ciclo da água, não da reciclagem dos seres vivos!' }
    ]
  },
  {
    id: 14, tipo: 'ciclos',
    q: 'O que é o ciclo da água?',
    alternativas: [
      { texto: 'O vai e vem da água pela natureza: evaporação, condensação e precipitação', correta: true, explicacao: 'A água evapora, forma nuvens e volta como chuva: é o "vai e vem" da natureza!' },
      { texto: 'O movimento das ondas do mar', correta: false, explicacao: 'As ondas são movimento da água do mar, mas o ciclo é o caminho evaporação → chuva!' },
      { texto: 'A água parada nos lagos', correta: false, explicacao: 'O ciclo mostra a água em constante movimento, não parada!' }
    ]
  },
  {
    id: 15, tipo: 'ciclos',
    q: 'A passagem da água do estado líquido para o vapor se chama...',
    alternativas: [
      { texto: 'Evaporação', correta: true, explicacao: 'Com o calor do Sol, a água evapora e vira vapor!' },
      { texto: 'Condensação', correta: false, explicacao: 'Condensação é o vapor virando nuvem. Virar vapor é evaporação!' },
      { texto: 'Precipitação', correta: false, explicacao: 'Precipitação é a chuva caindo das nuvens!' }
    ]
  },
  {
    id: 16, tipo: 'ciclos',
    q: 'Quando o vapor de água se junta e forma as nuvens, acontece a...',
    alternativas: [
      { texto: 'Condensação', correta: true, explicacao: 'O vapor sobe, esfria e condensa, formando gotinhas que criam as nuvens!' },
      { texto: 'Evaporação', correta: false, explicacao: 'Evaporação é a água virando vapor, não a formação das nuvens!' },
      { texto: 'Infiltração', correta: false, explicacao: 'Infiltração é a água entrando no solo!' }
    ]
  },
  {
    id: 17, tipo: 'ciclos',
    q: 'A chuva que cai das nuvens é a...',
    alternativas: [
      { texto: 'Precipitação', correta: true, explicacao: 'Quando as nuvens ficam pesadas, a água cai: é a precipitação!' },
      { texto: 'Evaporação', correta: false, explicacao: 'Evaporação é a água virando vapor com o calor!' },
      { texto: 'Condensação', correta: false, explicacao: 'Condensação é a formação das nuvens, não a chuva!' }
    ]
  },
  {
    id: 18, tipo: 'ciclos',
    q: 'Se as plantas sumirem de um lugar, o que acontece com os animais que comem plantas?',
    alternativas: [
      { texto: 'Eles ficam sem alimento', correta: true, explicacao: 'Sem produtores, os herbívoros ficam sem comida e toda a teia é afetada!' },
      { texto: 'Eles viram produtores', correta: false, explicacao: 'Animais não fazem fotossíntese: não podem virar produtores!' },
      { texto: 'Nada muda na cadeia', correta: false, explicacao: 'Muda muito! Sem as plantas, os consumidores perdem o primeiro elo da cadeia!' }
    ]
  },
  {
    id: 19, tipo: 'ciclos',
    q: 'O fluxo de energia em uma cadeia alimentar começa no...',
    alternativas: [
      { texto: 'Sol, passando para as plantas', correta: true, explicacao: 'A energia do Sol é captada pelas plantas na fotossíntese e segue pela cadeia!' },
      { texto: 'Rato, passando para a cobra', correta: false, explicacao: 'O rato recebe energia, mas ela já veio antes do Sol e das plantas!' },
      { texto: 'Nuvem, passando para a chuva', correta: false, explicacao: 'As nuvens fazem parte do ciclo da água, não do fluxo de energia da cadeia!' }
    ]
  },
  {
    id: 20, tipo: 'ciclos',
    q: 'As minhocas que comem restos de plantas no solo são...',
    alternativas: [
      { texto: 'Decompositores', correta: true, explicacao: 'As minhocas ajudam a reciclar restos e ainda deixam o solo arejado!' },
      { texto: 'Produtores', correta: false, explicacao: 'Produtores são plantas, que fazem fotossíntese!' },
      { texto: 'Consumidores terciários', correta: false, explicacao: 'Consumidores terciários são carnívoros do topo da cadeia!' }
    ]
  },

  // ===== CAPÍTULO 9: OUTRAS RELAÇÕES DOS SERES VIVOS =====
  {
    id: 21, tipo: 'relacoes',
    q: 'O que é o húmus?',
    alternativas: [
      { texto: 'Matéria orgânica decomposta que deixa o solo fértil', correta: true, explicacao: 'O húmus é feito de restos de plantas e animais decompostos, rico em nutrientes!' },
      { texto: 'Um tipo de rocha', correta: false, explicacao: 'Rochas não são matéria decomposta. O húmus vem dos seres vivos!' },
      { texto: 'A água que fica no lençol subterrâneo', correta: false, explicacao: 'Água subterrânea é diferente do húmus, que é matéria orgânica!' }
    ]
  },
  {
    id: 22, tipo: 'relacoes',
    q: 'Quem ajuda a formar o húmus?',
    alternativas: [
      { texto: 'Os decompositores: minhocas, fungos e bactérias', correta: true, explicacao: 'Eles decompõem os restos e criam o húmus que fertiliza o solo!' },
      { texto: 'As nuvens', correta: false, explicacao: 'Nuvens fazem parte do ciclo da água, não do húmus!' },
      { texto: 'Os ventos', correta: false, explicacao: 'O vento espalha sementes, mas não forma o húmus!' }
    ]
  },
  {
    id: 23, tipo: 'relacoes',
    q: 'As minhocas fazem túneis no solo. Isso é importante porque...',
    alternativas: [
      { texto: 'Deixa o solo arejado e macio para as plantas', correta: true, explicacao: 'Os túneis deixam o ar entrar e as raízes crescerem melhor!' },
      { texto: 'Estraga a terra das plantações', correta: false, explicacao: 'Pelo contrário! As minhocas MELHORAM o solo!' },
      { texto: 'Atrai predadores perigosos', correta: false, explicacao: 'As minhocas não atraem perigo; elas são amigas da terra!' }
    ]
  },
  {
    id: 24, tipo: 'relacoes',
    q: 'Um solo fértil é aquele que...',
    alternativas: [
      { texto: 'Tem nutrientes para as plantas crescerem fortes', correta: true, explicacao: 'O solo fértil tem húmus e nutrientes, e as plantas crescem bem!' },
      { texto: 'É seco e duro', correta: false, explicacao: 'Solo seco e duro tem poucos nutrientes: as plantas não crescem bem!' },
      { texto: 'Só tem pedras', correta: false, explicacao: 'Um solo cheio de pedras não é fértil!' }
    ]
  },
  {
    id: 25, tipo: 'relacoes',
    q: 'Quando um animal caça o outro para se alimentar, essa relação é o...',
    alternativas: [
      { texto: 'Predatismo', correta: true, explicacao: 'No predatismo, o predador caça a presa para comer!' },
      { texto: 'Mutualismo', correta: false, explicacao: 'No mutualismo os dois se ajudam, ninguém caça ninguém!' },
      { texto: 'Comensalismo', correta: false, explicacao: 'No comensalismo um se beneficia e o outro não é afetado!' }
    ]
  },
  {
    id: 26, tipo: 'relacoes',
    q: 'A cobra caça o rato para se alimentar. Isso é um exemplo de...',
    alternativas: [
      { texto: 'Predatismo', correta: true, explicacao: 'A cobra é a predadora e o rato é a presa!' },
      { texto: 'Parasitismo', correta: false, explicacao: 'No parasitismo, o parasita vive NO ou DO outro, como a pulga no cachorro!' },
      { texto: 'Mutualismo', correta: false, explicacao: 'No mutualismo os dois se ajudam, mas a cobra está comendo o rato!' }
    ]
  },
  {
    id: 27, tipo: 'relacoes',
    q: 'Dois leões disputando a mesma caça é um exemplo de...',
    alternativas: [
      { texto: 'Competição', correta: true, explicacao: 'Eles disputam o mesmo alimento: isso é competição!' },
      { texto: 'Predatismo', correta: false, explicacao: 'Predatismo é um animal caçando outro, não dois disputando a mesma caça!' },
      { texto: 'Parasitismo', correta: false, explicacao: 'Parasitismo é um ser vivendo às custas do outro, como o carrapato!' }
    ]
  },
  {
    id: 28, tipo: 'relacoes',
    q: 'No predatismo, quem é a presa?',
    alternativas: [
      { texto: 'O animal que é caçado', correta: true, explicacao: 'A presa é quem é caçado. O predador é quem caça!' },
      { texto: 'O animal que caça', correta: false, explicacao: 'Quem caça é o predador, não a presa!' },
      { texto: 'O animal que recicla restos', correta: false, explicacao: 'Quem recicla restos são os decompositores!' }
    ]
  },
  {
    id: 29, tipo: 'relacoes',
    q: 'O peixe-palhaço e a anêmona se ajudam, mas conseguem viver separados. Essa relação é a...',
    alternativas: [
      { texto: 'Protocooperação', correta: true, explicacao: 'Os dois ganham, mas podem viver separados: é protocooperação!' },
      { texto: 'Parasitismo', correta: false, explicacao: 'No parasitismo um prejudica o outro, mas aqui os dois se ajudam!' },
      { texto: 'Competição', correta: false, explicacao: 'Não há disputa aqui: o peixe-palhaço e a anêmona se protegem mutuamente!' }
    ]
  },
  {
    id: 30, tipo: 'relacoes',
    q: 'A pulga vive no cachorro e se alimenta do sangue dele, prejudicando-o. Isso é...',
    alternativas: [
      { texto: 'Parasitismo', correta: true, explicacao: 'A pulga é a parasita: ela ganha e o cachorro (hospedeiro) é prejudicado!' },
      { texto: 'Mutualismo', correta: false, explicacao: 'No mutualismo os DOIS ganham. A pulga só prejudica o cachorro!' },
      { texto: 'Predatismo', correta: false, explicacao: 'No predatismo o predador mata a presa para comer. A pulga vive no cachorro!' }
    ]
  },
  {
    id: 31, tipo: 'relacoes',
    q: 'No parasitismo, o parasita...',
    alternativas: [
      { texto: 'Se beneficia e prejudica o hospedeiro', correta: true, explicacao: 'O parasita ganha alimento ou abrigo e o hospedeiro é prejudicado!' },
      { texto: 'Se beneficia sem prejudicar ninguém', correta: false, explicacao: 'Se ninguém é prejudicado, é comensalismo, não parasitismo!' },
      { texto: 'Vive em perfeita harmonia com o outro', correta: false, explicacao: 'No parasitismo o hospedeiro é PREJUDICADO, não há harmonia!' }
    ]
  },
  {
    id: 32, tipo: 'relacoes',
    q: 'O líquen é a união de um fungo com uma alga: os dois se ajudam e NÃO vivem separados. Isso é...',
    alternativas: [
      { texto: 'Mutualismo', correta: true, explicacao: 'No mutualismo os dois ganham e não conseguem viver separados, como no líquen!' },
      { texto: 'Comensalismo', correta: false, explicacao: 'No comensalismo só um ganha. No líquen os dois ganham!' },
      { texto: 'Competição', correta: false, explicacao: 'O fungo e a alga não disputam nada: eles se ajudam!' }
    ]
  },
  {
    id: 33, tipo: 'relacoes',
    q: 'As bactérias que vivem no nosso intestino ajudam na digestão e recebem alimento. Essa relação é...',
    alternativas: [
      { texto: 'Mutualismo', correta: true, explicacao: 'Nós ajudamos as bactérias e elas nos ajudam: os dois ganham e precisam um do outro!' },
      { texto: 'Parasitismo', correta: false, explicacao: 'Essas bactérias não nos prejudicam: elas são nossas amigas!' },
      { texto: 'Predatismo', correta: false, explicacao: 'Não há caça aqui: é uma relação de ajuda mútua!' }
    ]
  },
  {
    id: 34, tipo: 'relacoes',
    q: 'A orquídea usa a árvore só como moradia, sem prejudicá-la. Isso é...',
    alternativas: [
      { texto: 'Inquilinismo', correta: true, explicacao: 'A orquídea procura abrigo na árvore sem prejudicá-la: é inquilinismo!' },
      { texto: 'Parasitismo', correta: false, explicacao: 'No parasitismo o hospedeiro é prejudicado. A árvore não é prejudicada!' },
      { texto: 'Predatismo', correta: false, explicacao: 'A orquídea não caça a árvore: ela só mora nela!' }
    ]
  },
  {
    id: 35, tipo: 'relacoes',
    q: 'A rêmora "gruda" no tubarão, viaja com ele e come seus restos de comida, sem prejudicá-lo. Isso é...',
    alternativas: [
      { texto: 'Comensalismo', correta: true, explicacao: 'A rêmora ganha (alimento e carona) e o tubarão não é afetado: comensalismo!' },
      { texto: 'Parasitismo', correta: false, explicacao: 'A rêmora não prejudica o tubarão, por isso não é parasitismo!' },
      { texto: 'Mutualismo', correta: false, explicacao: 'No mutualismo os DOIS ganham. O tubarão não ganha nem perde aqui!' }
    ]
  },
  {
    id: 36, tipo: 'relacoes',
    q: 'Duas plantas disputando luz e água no mesmo lugar é...',
    alternativas: [
      { texto: 'Competição', correta: true, explicacao: 'Elas disputam os mesmos recursos: luz, água e nutrientes!' },
      { texto: 'Mutualismo', correta: false, explicacao: 'As duas não se ajudam: estão disputando os mesmos recursos!' },
      { texto: 'Predatismo', correta: false, explicacao: 'Plantas não caçam umas às outras!' }
    ]
  },
  {
    id: 37, tipo: 'relacoes',
    q: 'A onça caça a capivara. Nessa relação, a onça é...',
    alternativas: [
      { texto: 'O predador', correta: true, explicacao: 'Quem caça é o predador. A capivara é a presa!' },
      { texto: 'A presa', correta: false, explicacao: 'A presa é quem é caçado: aqui é a capivara!' },
      { texto: 'O parasita', correta: false, explicacao: 'A onça não vive no corpo da capivara: ela a caça para comer!' }
    ]
  },
  {
    id: 38, tipo: 'relacoes',
    q: 'Qual relação acontece quando um ser vivo se beneficia e o outro é prejudicado?',
    alternativas: [
      { texto: 'Parasitismo', correta: true, explicacao: 'No parasitismo o parasita ganha e o hospedeiro é prejudicado!' },
      { texto: 'Protocooperação', correta: false, explicacao: 'Na protocooperação os DOIS ganham!' },
      { texto: 'Comensalismo', correta: false, explicacao: 'No comensalismo um ganha e o outro NÃO é afetado, nem prejudicado!' }
    ]
  },
  {
    id: 39, tipo: 'relacoes',
    q: 'O pássaro come os carrapatos do boi: o boi fica livre dos carrapatos e o pássaro ganha alimento. Eles vivem separados. Isso é...',
    alternativas: [
      { texto: 'Protocooperação', correta: true, explicacao: 'Os dois ganham e podem viver separados: é protocooperação!' },
      { texto: 'Parasitismo', correta: false, explicacao: 'O pássaro não prejudica o boi: ele ajuda a tirar os carrapatos!' },
      { texto: 'Predatismo', correta: false, explicacao: 'O pássaro não caça o boi: ele come os carrapatos!' }
    ]
  },
  {
    id: 40, tipo: 'relacoes',
    q: 'Qual é a importância das minhocas para o solo?',
    alternativas: [
      { texto: 'Deixam o solo arejado e ajudam a formar o húmus', correta: true, explicacao: 'Os túneis arejam a terra e os restos viram húmus: minhocas são amigas do solo!' },
      { texto: 'Comem as plantinhas', correta: false, explicacao: 'As minhocas comem restos de plantas, não as plantinhas vivas!' },
      { texto: 'Poluem a terra', correta: false, explicacao: 'Minhocas não poluem: elas melhoram a qualidade do solo!' }
    ]
  },

  // ===== CAPÍTULO 10: ECOSSISTEMAS BRASILEIROS =====
  {
    id: 41, tipo: 'biomas',
    q: 'O que é um ecossistema?',
    alternativas: [
      { texto: 'O conjunto dos seres vivos com o ambiente onde vivem', correta: true, explicacao: 'Ecossistema é a união dos seres vivos com o ambiente (água, solo, clima)!' },
      { texto: 'Somente os animais de um lugar', correta: false, explicacao: 'Um ecossistema inclui os seres vivos E o ambiente, não só os animais!' },
      { texto: 'Somente as plantas de um lugar', correta: false, explicacao: 'As plantas fazem parte, mas o ecossistema é muito mais que só elas!' }
    ]
  },
  {
    id: 42, tipo: 'biomas',
    q: 'Um bioma é...',
    alternativas: [
      { texto: 'Um grande ecossistema com clima, vegetação e animais típicos', correta: true, explicacao: 'Bioma é um ecossistema grande, como a Amazônia ou o Cerrado!' },
      { texto: 'Uma única árvore', correta: false, explicacao: 'Uma árvore é um ser vivo, não um bioma!' },
      { texto: 'Um rio', correta: false, explicacao: 'Um rio é parte de um ecossistema, mas o bioma é bem maior!' }
    ]
  },
  {
    id: 43, tipo: 'biomas',
    q: 'Qual é o maior bioma brasileiro, uma floresta quente e úmida?',
    alternativas: [
      { texto: 'Amazônia', correta: true, explicacao: 'A Amazônia é a maior floresta tropical do mundo, com clima quente e úmido!' },
      { texto: 'Caatinga', correta: false, explicacao: 'A Caatinga é seca, do Nordeste. A floresta úmida é a Amazônia!' },
      { texto: 'Pampa', correta: false, explicacao: 'O Pampa são os campos do Sul, sem florestas gigantes!' }
    ]
  },
  {
    id: 44, tipo: 'biomas',
    q: 'Qual bioma tem árvores baixas e tortas, com casca grossa?',
    alternativas: [
      { texto: 'Cerrado', correta: true, explicacao: 'As árvores do Cerrado são tortas e têm casca grossa para resistir ao fogo e à seca!' },
      { texto: 'Amazônia', correta: false, explicacao: 'Na Amazônia as árvores são altas e retas, não tortas!' },
      { texto: 'Pantanal', correta: false, explicacao: 'O Pantanal é a maior planície alagada, não tem árvores tortas como o Cerrado!' }
    ]
  },
  {
    id: 45, tipo: 'biomas',
    q: 'O mico-leão-dourado é símbolo de qual bioma?',
    alternativas: [
      { texto: 'Mata Atlântica', correta: true, explicacao: 'O mico-leão-dourado vive na Mata Atlântica, que está muito desmatada!' },
      { texto: 'Caatinga', correta: false, explicacao: 'Na Caatinga vivem tatu, preá e asa-branca, não o mico-leão-dourado!' },
      { texto: 'Pampa', correta: false, explicacao: 'No Pampa vivem quero-quero e graxaim, não o mico-leão-dourado!' }
    ]
  },
  {
    id: 46, tipo: 'biomas',
    q: 'Qual bioma fica no Sul do Brasil, com campos e gramíneas?',
    alternativas: [
      { texto: 'Pampa', correta: true, explicacao: 'O Pampa, no Rio Grande do Sul, é feito de campos com vegetação rasteira!' },
      { texto: 'Amazônia', correta: false, explicacao: 'A Amazônia é uma floresta no Norte, não campos do Sul!' },
      { texto: 'Caatinga', correta: false, explicacao: 'A Caatinga é seca e fica no Nordeste!' }
    ]
  },
  {
    id: 47, tipo: 'biomas',
    q: 'Qual bioma é a maior planície alagada do mundo?',
    alternativas: [
      { texto: 'Pantanal', correta: true, explicacao: 'O Pantanal alaga na época das cheias: é a maior planície alagada do mundo!' },
      { texto: 'Cerrado', correta: false, explicacao: 'O Cerrado tem estações secas, não é uma planície alagada!' },
      { texto: 'Pampa', correta: false, explicacao: 'O Pampa é campo seco no Sul, não alaga!' }
    ]
  },
  {
    id: 48, tipo: 'biomas',
    q: 'Qual bioma do Nordeste tem clima seco e cactos como o mandacaru?',
    alternativas: [
      { texto: 'Caatinga', correta: true, explicacao: 'A Caatinga é seca e tem vegetação espinhosa como o mandacaru e o xique-xique!' },
      { texto: 'Mata Atlântica', correta: false, explicacao: 'A Mata Atlântica é úmida e fica no litoral!' },
      { texto: 'Amazônia', correta: false, explicacao: 'A Amazônia é muito úmida, o oposto da Caatinga!' }
    ]
  },
  {
    id: 49, tipo: 'biomas',
    q: 'Qual ave é símbolo do Pantanal?',
    alternativas: [
      { texto: 'Tuiuiú', correta: true, explicacao: 'O tuiuiú é a ave símbolo do Pantanal!' },
      { texto: 'Mico-leão-dourado', correta: false, explicacao: 'O mico-leão-dourado é símbolo da Mata Atlântica, e é um mamífero!' },
      { texto: 'Quero-quero', correta: false, explicacao: 'O quero-quero é típico do Pampa!' }
    ]
  },
  {
    id: 50, tipo: 'biomas',
    q: 'O lobo-guará é um animal típico de qual bioma?',
    alternativas: [
      { texto: 'Cerrado', correta: true, explicacao: 'O lobo-guará, com suas pernas longas, é o símbolo do Cerrado!' },
      { texto: 'Caatinga', correta: false, explicacao: 'Na Caatinga vivem tatu, preá e asa-branca!' },
      { texto: 'Amazônia', correta: false, explicacao: 'Na Amazônia vivem araras, macacos e onças, não o lobo-guará!' }
    ]
  },
  {
    id: 51, tipo: 'biomas',
    q: 'A onça-pintada pode ser encontrada na...',
    alternativas: [
      { texto: 'Mata Atlântica e na Amazônia', correta: true, explicacao: 'A onça-pintada vive em várias florestas, como a Amazônia e a Mata Atlântica!' },
      { texto: 'Caatinga somente', correta: false, explicacao: 'A onça-pintada prefere florestas úmidas, não a Caatinga seca!' },
      { texto: 'Pampa somente', correta: false, explicacao: 'No Pampa vivem graxaim e quero-quero, não a onça-pintada!' }
    ]
  },
  {
    id: 52, tipo: 'biomas',
    q: 'Qual bioma é muito afetado pelas CHEIAS na época das chuvas?',
    alternativas: [
      { texto: 'Pantanal', correta: true, explicacao: 'Na época das chuvas os rios do Pantanal transbordam e tudo alaga!' },
      { texto: 'Caatinga', correta: false, explicacao: 'A Caatinga é seca: o problema lá é a falta de água!' },
      { texto: 'Pampa', correta: false, explicacao: 'O Pampa não tem grandes cheias como o Pantanal!' }
    ]
  },
  {
    id: 53, tipo: 'biomas',
    q: 'Qual bioma tem o Rio Amazonas, o maior rio do mundo em volume de água?',
    alternativas: [
      { texto: 'Amazônia', correta: true, explicacao: 'O Rio Amazonas corta a floresta amazônica e é o maior em volume de água!' },
      { texto: 'Pantanal', correta: false, explicacao: 'No Pantanal há muitos rios, mas o Rio Amazonas fica na Amazônia!' },
      { texto: 'Pampa', correta: false, explicacao: 'O Rio Amazonas fica no Norte, no bioma Amazônia!' }
    ]
  },
  {
    id: 54, tipo: 'biomas',
    q: 'O que aconteceu com a Mata Atlântica ao longo dos anos?',
    alternativas: [
      { texto: 'Foi muito desmatada e resta pouco da floresta original', correta: true, explicacao: 'A Mata Atlântica foi desmatada para cidades e plantações: sobra pouco!' },
      { texto: 'Nunca foi tocada', correta: false, explicacao: 'Infelizmente ela foi muito desmatada ao longo da história!' },
      { texto: 'Cresceu mais que a Amazônia', correta: false, explicacao: 'A Amazônia é muito maior e a Mata Atlântica foi reduzida pelo desmatamento!' }
    ]
  },
  {
    id: 55, tipo: 'biomas',
    q: 'No Cerrado, as raízes das plantas são...',
    alternativas: [
      { texto: 'Profundas, para buscar água no subsolo', correta: true, explicacao: 'As raízes profundas ajudam as plantas do Cerrado a sobreviver à seca!' },
      { texto: 'Curtas e fracas', correta: false, explicacao: 'Pelo contrário! Elas são profundas para alcançar a água!' },
      { texto: 'Inexistentes', correta: false, explicacao: 'Toda planta tem raiz! As do Cerrado são profundas!' }
    ]
  },
  {
    id: 56, tipo: 'biomas',
    q: 'O quero-quero e o graxaim são animais típicos do...',
    alternativas: [
      { texto: 'Pampa', correta: true, explicacao: 'O quero-quero e o graxaim vivem nos campos do Pampa, no Sul!' },
      { texto: 'Pantanal', correta: false, explicacao: 'No Pantanal vivem tuiuiú, jacaré e capivara!' },
      { texto: 'Cerrado', correta: false, explicacao: 'No Cerrado vivem lobo-guará, tamanduá e ema!' }
    ]
  },
  {
    id: 57, tipo: 'biomas',
    q: 'Qual bioma tem vegetação espinhosa como o xique-xique?',
    alternativas: [
      { texto: 'Caatinga', correta: true, explicacao: 'O xique-xique e o mandacaru são cactos da Caatinga, adaptados à seca!' },
      { texto: 'Mata Atlântica', correta: false, explicacao: 'A Mata Atlântica é úmida e cheia de árvores, sem cactos espinhosos!' },
      { texto: 'Pampa', correta: false, explicacao: 'O Pampa tem gramíneas baixas, não cactos!' }
    ]
  },
  {
    id: 58, tipo: 'biomas',
    q: 'A capivara é um animal comum no...',
    alternativas: [
      { texto: 'Pantanal', correta: true, explicacao: 'A capivara, o maior roedor do mundo, é comum nas áreas alagadas do Pantanal!' },
      { texto: 'Pampa', correta: false, explicacao: 'A capivara é típica de áreas com água, como o Pantanal!' },
      { texto: 'Caatinga', correta: false, explicacao: 'A Caatinga é seca demais para a capivara, que ama a água!' }
    ]
  },
  {
    id: 59, tipo: 'biomas',
    q: 'Qual é a diferença entre ecossistema e bioma?',
    alternativas: [
      { texto: 'O bioma é um ecossistema grande, com clima e vegetação típicos', correta: true, explicacao: 'Todo bioma é um ecossistema, mas bem maior, com características próprias!' },
      { texto: 'Não existe diferença nenhuma', correta: false, explicacao: 'Existe! Bioma é um ecossistema grande, como a Amazônia ou o Cerrado!' },
      { texto: 'O ecossistema é maior que o bioma', correta: false, explicacao: 'É o contrário: o BIOMA é o ecossistema maior!' }
    ]
  },
  {
    id: 60, tipo: 'biomas',
    q: 'A floresta Amazônica é muito importante porque...',
    alternativas: [
      { texto: 'Abriga enorme biodiversidade e influencia o clima', correta: true, explicacao: 'A Amazônia tem milhares de espécies e ajuda a regular o clima do planeta!' },
      { texto: 'Só serve para cortar madeira', correta: false, explicacao: 'A madeira é o menor dos valores: a floresta protege a vida e o clima!' },
      { texto: 'É uma floresta pequena', correta: false, explicacao: 'A Amazônia é a MAIOR floresta tropical do mundo!' }
    ]
  }
];

const jogoBanco = [
  { q: 'Quem é o produtor na cadeia: grama → gafanhoto → sapo?', opcoes: ['grama', 'gafanhoto', 'sapo'], correta: 'grama' },
  { q: 'Qual animal come plantas e é um consumidor primário?', opcoes: ['gafanhoto', 'cobra', 'gavião'], correta: 'gafanhoto' },
  { q: 'De onde vem a energia da cadeia alimentar?', opcoes: ['do Sol', 'da Lua', 'do vento'], correta: 'do Sol' },
  { q: 'Quem recicla a matéria dos seres mortos?', opcoes: ['os decompositores', 'os predadores', 'as nuvens'], correta: 'os decompositores' },
  { q: 'O que a minhoca faz pelo solo?', opcoes: ['areja o solo', 'polui o solo', 'seca o solo'], correta: 'areja o solo' },
  { q: 'O que é o húmus?', opcoes: ['matéria decomposta que fertiliza o solo', 'um tipo de rocha', 'água dos rios'], correta: 'matéria decomposta que fertiliza o solo' },
  { q: 'Pulga no cachorro é...', opcoes: ['parasitismo', 'mutualismo', 'predatismo'], correta: 'parasitismo' },
  { q: 'Leão caça zebra: isso é...', opcoes: ['predatismo', 'competição', 'comensalismo'], correta: 'predatismo' },
  { q: 'Cobra caça o rato. A cobra é...', opcoes: ['o predador', 'a presa', 'o parasita'], correta: 'o predador' },
  { q: 'Peixe-palhaço e anêmona é...', opcoes: ['protocooperação', 'parasitismo', 'competição'], correta: 'protocooperação' },
  { q: 'Fungo + alga = líquen é...', opcoes: ['mutualismo', 'predatismo', 'comensalismo'], correta: 'mutualismo' },
  { q: 'Orquídea morando na árvore é...', opcoes: ['inquilinismo', 'parasitismo', 'predatismo'], correta: 'inquilinismo' },
  { q: 'Rêmora viajando no tubarão é...', opcoes: ['comensalismo', 'parasitismo', 'competição'], correta: 'comensalismo' },
  { q: 'Dois leões disputando a mesma caça é...', opcoes: ['competição', 'predatismo', 'mutualismo'], correta: 'competição' },
  { q: 'Qual bioma é o mais úmido?', opcoes: ['Amazônia', 'Caatinga', 'Pampa'], correta: 'Amazônia' },
  { q: 'Qual bioma tem árvores tortas e casca grossa?', opcoes: ['Cerrado', 'Amazônia', 'Pantanal'], correta: 'Cerrado' },
  { q: 'Onde vive o mico-leão-dourado?', opcoes: ['Mata Atlântica', 'Caatinga', 'Pampa'], correta: 'Mata Atlântica' },
  { q: 'Maior planície alagada do mundo?', opcoes: ['Pantanal', 'Cerrado', 'Pampa'], correta: 'Pantanal' },
  { q: 'Qual bioma tem o mandacaru?', opcoes: ['Caatinga', 'Mata Atlântica', 'Amazônia'], correta: 'Caatinga' },
  { q: 'Campos do Sul do Brasil: qual bioma?', opcoes: ['Pampa', 'Amazônia', 'Caatinga'], correta: 'Pampa' },
  { q: 'Ave símbolo do Pantanal?', opcoes: ['tuiuiú', 'quero-quero', 'asa-branca'], correta: 'tuiuiú' },
  { q: 'Lobo-guará é típico de...', opcoes: ['Cerrado', 'Caatinga', 'Pampa'], correta: 'Cerrado' },
  { q: 'O vapor de água vira nuvens: isso é...', opcoes: ['condensação', 'evaporação', 'precipitação'], correta: 'condensação' },
  { q: 'A chuva que cai das nuvens é...', opcoes: ['precipitação', 'evaporação', 'infiltração'], correta: 'precipitação' },
  { q: 'A água vira vapor com o calor: isso é...', opcoes: ['evaporação', 'condensação', 'precipitação'], correta: 'evaporação' },
  { q: 'Primeiro elo de qualquer cadeia alimentar?', opcoes: ['o produtor', 'o consumidor', 'o decompositor'], correta: 'o produtor' },
  { q: 'Restos decompostos que fertilizam o solo?', opcoes: ['húmus', 'areia', 'argila'], correta: 'húmus' },
  { q: 'As plantas fazem fotossíntese e são...', opcoes: ['produtoras', 'consumidoras', 'decompositoras'], correta: 'produtoras' },
  { q: 'Tatu e asa-branca vivem na...', opcoes: ['Caatinga', 'Amazônia', 'Mata Atlântica'], correta: 'Caatinga' },
  { q: 'Na teia alimentar, se um elo some...', opcoes: ['todos podem ser afetados', 'nada muda', 'o Sol apaga'], correta: 'todos podem ser afetados' }
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

// ===== JOGO DA NATUREZA =====
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