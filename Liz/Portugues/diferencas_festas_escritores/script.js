const bancoQuestoes = [
  // ===== CARTAZ DE CAMPANHA (1-9) =====
  {
    id: 1, tipo: 'cartaz',
    q: '📢 Um cartaz de campanha serve para...',
    alternativas: [
      { texto: 'Convencer as pessoas a ter uma atitude boa', correta: true, explicacao: 'Isso! Campanha = CONVENCER: respeitar, cuidar, participar! 📢' },
      { texto: 'Contar uma história inventada com dragões', correta: false, explicacao: 'Inventada é conto. Campanha CONVENCE a ter atitude boa! 📢' },
      { texto: 'Vender um brinquedo novo', correta: false, explicacao: 'Vender é ANÚNCIO. Campanha convence a ter uma ATITUDE! 📢' }
    ]
  },
  {
    id: 2, tipo: 'cartaz',
    q: '📣 "RESPEITE as diferenças!" — o verbo RESPEITE está no...',
    alternativas: [
      { texto: 'Imperativo (ordem, convite)', correta: true, explicacao: 'Isso! Imperativo manda ou convida: respeite, participe, cuide! 📣' },
      { texto: 'Passado (já aconteceu)', correta: false, explicacao: 'Passado seria "respeitou". RESPEITE manda AGORA: imperativo! 📣' },
      { texto: 'Futuro (vai acontecer)', correta: false, explicacao: 'Futuro seria "respeitará". RESPEITE manda: imperativo! 📣' }
    ]
  },
  {
    id: 3, tipo: 'cartaz',
    q: '🖼️ Por que o cartaz de campanha usa imagem GRANDE e colorida?',
    alternativas: [
      { texto: 'Para chamar atenção e emocionar rapidinho', correta: true, explicacao: 'Isso! Imagem forte prende o olho e o coração! 🖼️' },
      { texto: 'Para esconder a frase', correta: false, explicacao: 'Pelo contrário: imagem AJUDA a frase a ser entendida! 🖼️' },
      { texto: 'Porque é obrigatório ter desenho', correta: false, explicacao: 'Não é obrigação: é estratégia para CHAMAR atenção! 🖼️' }
    ]
  },
  {
    id: 4, tipo: 'cartaz',
    q: '🎯 A frase de um cartaz de campanha deve ser...',
    alternativas: [
      { texto: 'Curta, grande e fácil de lembrar', correta: true, explicacao: 'Isso! Frase de impacto: curta e grudenta na memória! 🎯' },
      { texto: 'Um textão de 3 páginas', correta: false, explicacao: 'Textão ninguém lê na rua! Campanha = CURTA e forte! 🎯' },
      { texto: 'Escrita bem pequenininha', correta: false, explicacao: 'Pequena ninguém vê! Tem que ser GRANDE e curta! 🎯' }
    ]
  },
  {
    id: 5, tipo: 'cartaz',
    q: '📢 Qual frase é típica de cartaz de campanha?',
    alternativas: [
      { texto: '"Diga NÃO ao preconceito! Respeite!"', correta: true, explicacao: 'Isso! Convence + imperativo + causa boa = campanha! 📢' },
      { texto: '"Era uma vez um castelo distante..."', correta: false, explicacao: '"Era uma vez" é CONTO. Campanha convence com imperativo! 📢' },
      { texto: '"Bolo de chocolate: 2 ovos, 1 xícara..."', correta: false, explicacao: 'Isso é RECEITA. Campanha pede ATITUDE boa! 📢' }
    ]
  },
  {
    id: 6, tipo: 'cartaz',
    q: '✍️ No rodapé do cartaz de campanha geralmente aparece...',
    alternativas: [
      { texto: 'Quem promove a campanha (escola, ONG, prefeitura)', correta: true, explicacao: 'Isso! O rodapé diz QUEM está pedindo a atitude! ✍️' },
      { texto: 'O preço do produto', correta: false, explicacao: 'Preço é de anúncio. Campanha mostra QUEM promove! ✍️' },
      { texto: 'O final da história', correta: false, explicacao: 'Campanha não conta história! Mostra quem PROMOVE! ✍️' }
    ]
  },
  {
    id: 7, tipo: 'cartaz',
    q: '🤔 Cartaz de campanha × anúncio: qual a diferença?',
    alternativas: [
      { texto: 'Campanha pede atitude boa; anúncio vende produto', correta: true, explicacao: 'Isso! "Respeite!" = campanha. "Compre!" = anúncio! 🤔' },
      { texto: 'São exatamente a mesma coisa', correta: false, explicacao: 'Não! Um pede ATITUDE, o outro VENDE! 🤔' },
      { texto: 'Anúncio nunca tem imagem', correta: false, explicacao: 'Os dois têm imagem! A diferença: campanha = atitude, anúncio = venda! 🤔' }
    ]
  },
  {
    id: 8, tipo: 'cartaz',
    q: '🎨 "Participe da coleta seletiva! Separe o lixo!" — esse texto é...',
    alternativas: [
      { texto: 'Um cartaz de campanha', correta: true, explicacao: 'Isso! Convence + imperativo (participe, separe) = campanha! 🎨' },
      { texto: 'Um depoimento', correta: false, explicacao: 'Depoimento usa "eu". Aqui tem IMPERATIVO: é campanha! 🎨' },
      { texto: 'Uma biografia', correta: false, explicacao: 'Biografia conta vida no passado. Aqui é CONVITE: campanha! 🎨' }
    ]
  },
  {
    id: 9, tipo: 'cartaz',
    q: '👀 Onde costumamos ver cartazes de campanha?',
    alternativas: [
      { texto: 'Em muros, escolas, postos de saúde — para muita gente ver', correta: true, explicacao: 'Isso! Lugares públicos, para CONVENCER muita gente! 👀' },
      { texto: 'Escondidos dentro de gavetas', correta: false, explicacao: 'Escondido ninguém convence! Ficam em lugar VISÍVEL! 👀' },
      { texto: 'Só dentro de livros de receita', correta: false, explicacao: 'Receita é outra coisa! Cartazes ficam em lugares PÚBLICOS! 👀' }
    ]
  },
  // ===== PALAVRAS QUE INDICAM QUANTIDADE (10-18) =====
  {
    id: 10, tipo: 'quantidade',
    q: '🔢 "Comprei TRÊS livros." — a palavra TRÊS indica...',
    alternativas: [
      { texto: 'Quantidade exata', correta: true, explicacao: 'Isso! Três = número certinho: quantidade EXATA! 🔢' },
      { texto: 'Quantidade vaga', correta: false, explicacao: 'Vaga seria "vários". TRÊS é certinho: EXATA! 🔢' },
      { texto: 'Uma cor', correta: false, explicacao: 'Cor é azul, verde... TRÊS é QUANTIDADE exata! 🔢' }
    ]
  },
  {
    id: 11, tipo: 'quantidade',
    q: '💭 "Tenho VÁRIOS amigos." — a palavra VÁRIOS indica...',
    alternativas: [
      { texto: 'Quantidade vaga (muitos, sem número certo)', correta: true, explicacao: 'Isso! VÁRIOS = muitos, sem contar: VAGA! 💭' },
      { texto: 'Quantidade exata', correta: false, explicacao: 'Exata seria "três". VÁRIOS não diz o número: VAGA! 💭' },
      { texto: 'Um lugar', correta: false, explicacao: 'Lugar é escola, parque... VÁRIOS = quantidade VAGA! 💭' }
    ]
  },
  {
    id: 12, tipo: 'quantidade',
    q: '🚫 "NENHUM aluno faltou." — NENHUM significa...',
    alternativas: [
      { texto: 'Zero, ninguém', correta: true, explicacao: 'Isso! NENHUM = zero! 🚫' },
      { texto: 'Todos', correta: false, explicacao: 'Todos é TODO. NENHUM = ZERO! 🚫' },
      { texto: 'Muitos', correta: false, explicacao: 'Muitos é MUITO. NENHUM = zero! 🚫' }
    ]
  },
  {
    id: 13, tipo: 'quantidade',
    q: '✅ "TODO o bolo acabou." — TODO significa...',
    alternativas: [
      { texto: 'Inteiro, completo, tudo', correta: true, explicacao: 'Isso! TODO = inteirinho! ✅' },
      { texto: 'Só um pedacinho', correta: false, explicacao: 'Pedacinho seria "pouco". TODO = INTEIRO! ✅' },
      { texto: 'Nada', correta: false, explicacao: 'Nada é NENHUM. TODO = tudo, completo! ✅' }
    ]
  },
  {
    id: 14, tipo: 'quantidade',
    q: '🍿 "Comi MUITA pipoca." × "Comi POUCA pipoca." — MUITA e POUCA são...',
    alternativas: [
      { texto: 'Opostos: bastante × quase nada', correta: true, explicacao: 'Isso! MUITA = bastante, POUCA = quase nada! 🍿' },
      { texto: 'Iguais, dão no mesmo', correta: false, explicacao: 'Não! São OPOSTOS: muita × pouca! 🍿' },
      { texto: 'Nomes de sabores', correta: false, explicacao: 'Sabor é doce, salgado... MUITA/POUCA = quantidade! 🍿' }
    ]
  },
  {
    id: 15, tipo: 'quantidade',
    q: '👧 "CADA aluno ganhou um livro." — CADA significa...',
    alternativas: [
      { texto: 'Um por um, todos sem exceção', correta: true, explicacao: 'Isso! CADA = um por um! 👧' },
      { texto: 'Só alguns', correta: false, explicacao: 'Alguns deixa gente de fora. CADA = TODOS, um por um! 👧' },
      { texto: 'Nenhum', correta: false, explicacao: 'Nenhum é zero! CADA = cada um ganhou! 👧' }
    ]
  },
  {
    id: 16, tipo: 'quantidade',
    q: '🤔 "ALGUM vizinho viu o gato?" — ALGUM indica...',
    alternativas: [
      { texto: 'Que existe pelo menos um (não sei qual)', correta: true, explicacao: 'Isso! ALGUM = pelo menos um, sem dizer qual! 🤔' },
      { texto: 'Que ninguém viu', correta: false, explicacao: 'Ninguém seria NENHUM. ALGUM = pelo menos um! 🤔' },
      { texto: 'Uma quantidade exata', correta: false, explicacao: 'Exata seria "dois". ALGUM é vago: pelo menos um! 🤔' }
    ]
  },
  {
    id: 17, tipo: 'quantidade',
    q: '📚 Qual palavra NÃO indica quantidade?',
    alternativas: [
      { texto: 'Rapidamente', correta: true, explicacao: 'Isso! RAPIDAMENTE diz COMO, não quantos! 📚' },
      { texto: 'Bastante', correta: false, explicacao: 'BASTANTE = muita quantidade! A errada é RAPIDAMENTE! 📚' },
      { texto: 'Poucos', correta: false, explicacao: 'POUCOS = quantidade pequena! A errada é RAPIDAMENTE! 📚' }
    ]
  },
  {
    id: 18, tipo: 'quantidade',
    q: '🏆 "Ganhei o PRIMEIRO lugar!" — PRIMEIRO indica...',
    alternativas: [
      { texto: 'Quantidade exata: a posição 1', correta: true, explicacao: 'Isso! PRIMEIRO = posição exata nº 1! 🏆' },
      { texto: 'Quantidade vaga', correta: false, explicacao: 'Vaga seria "vários". PRIMEIRO é EXATO: nº 1! 🏆' },
      { texto: 'Que perdeu', correta: false, explicacao: 'Primeiro lugar é QUEM GANHOU! Posição exata nº 1! 🏆' }
    ]
  },
  // ===== DEPOIMENTOS (19-27) =====
  {
    id: 19, tipo: 'depoimento',
    q: '🎤 Um DEPOIMENTO é um texto em que alguém...',
    alternativas: [
      { texto: 'Conta o que viveu e o que acha, em 1ª pessoa', correta: true, explicacao: 'Isso! "Eu vivi, eu achei" = DEPOIMENTO! 🎤' },
      { texto: 'Conta a vida de outra pessoa famosa', correta: false, explicacao: 'Vida de OUTRA pessoa é BIOGRAFIA. Depoimento = EU falo de MIM! 🎤' },
      { texto: 'Dá ordens com verbos no imperativo', correta: false, explicacao: 'Ordens são CARTAZ. Depoimento CONTA e OPINA em 1ª pessoa! 🎤' }
    ]
  },
  {
    id: 20, tipo: 'depoimento',
    q: '🙋 Qual marca NÃO pode faltar num depoimento?',
    alternativas: [
      { texto: '"Eu", "nós" e palavras de sentimento', correta: true, explicacao: 'Isso! 1ª pessoa + sentimento = depoimento! 🙋' },
      { texto: 'Verbos mandando: "respeite, participe"', correta: false, explicacao: 'Mandar é CARTAZ. Depoimento tem "EU" + sentimento! 🙋' },
      { texto: 'Datas de nascimento de famosos', correta: false, explicacao: 'Datas são BIOGRAFIA. Depoimento tem "EU" + opinião! 🙋' }
    ]
  },
  {
    id: 21, tipo: 'depoimento',
    q: '❤️ "Eu AMEI a festa junina! Dancei quadrilha e foi demais!" — esse texto é...',
    alternativas: [
      { texto: 'Um depoimento', correta: true, explicacao: 'Isso! "Eu" + sentimento (amei) + experiência real = DEPOIMENTO! ❤️' },
      { texto: 'Uma biografia', correta: false, explicacao: 'Biografia fala de OUTRA pessoa ("ele"). Aqui é "EU": depoimento! ❤️' },
      { texto: 'Um cartaz de campanha', correta: false, explicacao: 'Cartaz convence com imperativo. Aqui alguém CONTA o que viveu: depoimento! ❤️' }
    ]
  },
  {
    id: 22, tipo: 'depoimento',
    q: '📸 Num depoimento, o nome e a foto de quem falou servem para...',
    alternativas: [
      { texto: 'Mostrar quem é o dono da opinião', correta: true, explicacao: 'Isso! Depoimento tem DONO: quem viveu e opinou! 📸' },
      { texto: 'Enfeitar a página', correta: false, explicacao: 'Não é enfeite! Mostra QUEM falou! 📸' },
      { texto: 'Esconder quem escreveu', correta: false, explicacao: 'Pelo contrário: REVELA quem falou! 📸' }
    ]
  },
  {
    id: 23, tipo: 'depoimento',
    q: '🤔 Qual texto NÃO é um depoimento?',
    alternativas: [
      { texto: '"Respeite as diferenças! Participe da campanha!"', correta: true, explicacao: 'Isso! Imperativo convencendo = CARTAZ, não depoimento! 🤔' },
      { texto: '"Na minha opinião, a festa foi incrível!"', correta: false, explicacao: 'Esse É depoimento: "minha opinião"! A errada é a do cartaz! 🤔' },
      { texto: '"Eu senti muita alegria no arraial da escola."', correta: false, explicacao: 'Esse É depoimento: "eu senti"! A errada é a do cartaz! 🤔' }
    ]
  },
  {
    id: 24, tipo: 'depoimento',
    q: '🎪 Depoimentos combinam com "Hoje é dia de festa!" porque...',
    alternativas: [
      { texto: 'As pessoas contam como foi a festa que viveram', correta: true, explicacao: 'Isso! Festa vivida vira depoimento cheio de alegria! 🎪' },
      { texto: 'Festas não têm opinião', correta: false, explicacao: 'Têm sim! Quem vai à festa ADORA contar! 🎪' },
      { texto: 'Depoimentos só falam de tristeza', correta: false, explicacao: 'Não! Depoimento pode ser de ALEGRIA, como festa! 🎪' }
    ]
  },
  {
    id: 25, tipo: 'depoimento',
    q: '💬 "Achei", "adorei", "senti", "na minha opinião" são palavras típicas de...',
    alternativas: [
      { texto: 'Depoimento', correta: true, explicacao: 'Isso! Opinião + sentimento em 1ª pessoa = DEPOIMENTO! 💬' },
      { texto: 'Biografia', correta: false, explicacao: 'Biografia usa "ele/ela nasceu". Opinião com "eu" = DEPOIMENTO! 💬' },
      { texto: 'Receita', correta: false, explicacao: 'Receita manda fazer. Opinião = DEPOIMENTO! 💬' }
    ]
  },
  {
    id: 26, tipo: 'depoimento',
    q: '👧 "Nós fizemos uma quadrilha linda na escola!" — o "NÓS" mostra...',
    alternativas: [
      { texto: '1ª pessoa do plural: quem fala participou', correta: true, explicacao: 'Isso! NÓS = eu + meus amigos: participamos! 👧' },
      { texto: 'Que é uma ordem', correta: false, explicacao: 'Ordem seria imperativo. NÓS = quem viveu! 👧' },
      { texto: 'Que é a vida de um famoso', correta: false, explicacao: 'Famoso seria "ele". NÓS = depoimento! 👧' }
    ]
  },
  {
    id: 27, tipo: 'depoimento',
    q: '🆚 Depoimento × biografia: qual a diferença?',
    alternativas: [
      { texto: 'Depoimento: EU falo de mim. Biografia: contam a vida de OUTRA pessoa', correta: true, explicacao: 'Isso! EU = depoimento. ELE/ELA = biografia! 🆚' },
      { texto: 'São a mesma coisa', correta: false, explicacao: 'Não! Um é EU, o outro é ELE/ELA! 🆚' },
      { texto: 'Biografia usa "eu" e depoimento usa "ele"', correta: false, explicacao: 'É o CONTRÁRIO! Depoimento = EU, biografia = ELE! 🆚' }
    ]
  },
  // ===== AM e ÃO (28-36) =====
  {
    id: 28, tipo: 'am_ao',
    q: '⏪ "Ontem eles ficARAM felizes." — ARAM indica...',
    alternativas: [
      { texto: 'Passado (já aconteceu)', correta: true, explicacao: 'Isso! AM sem acento + "ontem" = PASSADO! ⏪' },
      { texto: 'Futuro (vai acontecer)', correta: false, explicacao: '"Ontem" já passou! AM = PASSADO! ⏪' },
      { texto: 'Presente (agora)', correta: false, explicacao: '"Ontem" não é agora! AM = PASSADO! ⏪' }
    ]
  },
  {
    id: 29, tipo: 'am_ao',
    q: '⏩ "Amanhã eles ficarÃO felizes." — ÃO indica...',
    alternativas: [
      { texto: 'Futuro (vai acontecer)', correta: true, explicacao: 'Isso! ÃO com til + "amanhã" = FUTURO! ⏩' },
      { texto: 'Passado (já aconteceu)', correta: false, explicacao: '"Amanhã" ainda vem! ÃO = FUTURO! ⏩' },
      { texto: 'Um erro de escrita', correta: false, explicacao: 'Não é erro! ÃO = futuro, certinho! ⏩' }
    ]
  },
  {
    id: 30, tipo: 'am_ao',
    q: '🕵️ "Semana passada, as crianças brinc___ no parque." — complete:',
    alternativas: [
      { texto: 'brincaram (AM = passado)', correta: true, explicacao: 'Isso! "Semana passada" pede AM: brincARAM! 🕵️' },
      { texto: 'brincarão (ÃO = futuro)', correta: false, explicacao: '"Semana passada" já foi! Pede AM: brincARAM! 🕵️' },
      { texto: 'brincar', correta: false, explicacao: 'Falta o final! Passado plural = brincARAM! 🕵️' }
    ]
  },
  {
    id: 31, tipo: 'am_ao',
    q: '🕵️ "Ano que vem, elas viajar___ para a praia." — complete:',
    alternativas: [
      { texto: 'viajarão (ÃO = futuro)', correta: true, explicacao: 'Isso! "Ano que vem" pede ÃO: viajarÃO! 🕵️' },
      { texto: 'viajaram (AM = passado)', correta: false, explicacao: '"Ano que vem" ainda vem! Pede ÃO: viajarÃO! 🕵️' },
      { texto: 'viajam', correta: false, explicacao: 'VIAJAM é presente! "Ano que vem" = futuro: viajarÃO! 🕵️' }
    ]
  },
  {
    id: 32, tipo: 'am_ao',
    q: '🎵 "Eles cantARAM ontem e dançarÃO amanhã." — a frase mostra...',
    alternativas: [
      { texto: 'Passado com AM e futuro com ÃO', correta: true, explicacao: 'Isso! Ontem + AM, amanhã + ÃO: perfeito! 🎵' },
      { texto: 'Dois erros de escrita', correta: false, explicacao: 'Nenhum erro! AM = ontem, ÃO = amanhã! 🎵' },
      { texto: 'Só o presente', correta: false, explicacao: 'Ontem e amanhã não são presente! É passado + futuro! 🎵' }
    ]
  },
  {
    id: 33, tipo: 'am_ao',
    q: '⚠️ "Eles ESTÃO felizes." — ESTÃO com til é...',
    alternativas: [
      { texto: 'Presente (exceção decorada!)', correta: true, explicacao: 'Isso! ESTÃO, SÃO, VÃO, DÃO = presente com til! Decore! ⚠️' },
      { texto: 'Futuro', correta: false, explicacao: 'Futuro seria "estarão". ESTÃO = PRESENTE (exceção)! ⚠️' },
      { texto: 'Passado', correta: false, explicacao: 'Passado seria "estavam". ESTÃO = PRESENTE (exceção)! ⚠️' }
    ]
  },
  {
    id: 34, tipo: 'am_ao',
    q: '📝 Qual frase está escrita CERTA?',
    alternativas: [
      { texto: '"Ontem eles comeram tudo."', correta: true, explicacao: 'Isso! Ontem + AM: comerAM! 📝' },
      { texto: '"Ontem eles comerão tudo."', correta: false, explicacao: '"Ontem" pede AM! O certo: comerAM! 📝' },
      { texto: '"Amanhã eles comeram tudo."', correta: false, explicacao: '"Amanhã" pede ÃO! O certo: comerÃO! 📝' }
    ]
  },
  {
    id: 35, tipo: 'am_ao',
    q: '📝 Qual frase está escrita CERTA?',
    alternativas: [
      { texto: '"Amanhã elas chegarão cedo."', correta: true, explicacao: 'Isso! Amanhã + ÃO: chegarÃO! 📝' },
      { texto: '"Amanhã elas chegaram cedo."', correta: false, explicacao: '"Amanhã" pede ÃO! O certo: chegarÃO! 📝' },
      { texto: '"Ontem elas chegarão cedo."', correta: false, explicacao: '"Ontem" pede AM! O certo: chegarAM! 📝' }
    ]
  },
  {
    id: 36, tipo: 'am_ao',
    q: '🧠 Qual é a dica de ouro para não errar AM × ÃO?',
    alternativas: [
      { texto: 'Procurar a pista do tempo: ontem→AM, amanhã→ÃO', correta: true, explicacao: 'Isso! A frase sempre dá a pista do tempo! 🧠' },
      { texto: 'Chutar sempre AM', correta: false, explicacao: 'Chutar erra! Procure a PISTA: ontem ou amanhã! 🧠' },
      { texto: 'Escrever sempre com til', correta: false, explicacao: 'Til só no futuro! A pista manda: ontem→AM, amanhã→ÃO! 🧠' }
    ]
  },
  // ===== CONCORDÂNCIA VERBAL (37-45) =====
  {
    id: 37, tipo: 'concordancia',
    q: '🤝 "A menina ___ no parque." — complete certo:',
    alternativas: [
      { texto: 'brinca (singular com singular)', correta: true, explicacao: 'Isso! A menina (1) + brinCA (1)! 🤝' },
      { texto: 'brincam', correta: false, explicacao: '"A menina" é 1 só! Pede singular: brinCA! 🤝' },
      { texto: 'brincaram ontem e amanhã', correta: false, explicacao: 'Misturou tudo! Singular agora: brinCA! 🤝' }
    ]
  },
  {
    id: 38, tipo: 'concordancia',
    q: '🤝 "As meninas ___ no parque." — complete certo:',
    alternativas: [
      { texto: 'brincam (plural com plural)', correta: true, explicacao: 'Isso! AS meninas (várias) + brinCAM (várias)! 🤝' },
      { texto: 'brinca', correta: false, explicacao: '"AS meninas" são várias! Pede plural: brinCAM! 🤝' },
      { texto: 'brincou sozinha', correta: false, explicacao: 'São VÁRIAS meninas! Pede plural: brinCAM! 🤝' }
    ]
  },
  {
    id: 39, tipo: 'concordancia',
    q: '🐶 "O cachorro ___ alto." — complete certo:',
    alternativas: [
      { texto: 'latiu', correta: true, explicacao: 'Isso! O cachorro (1) + laTIU (1)! 🐶' },
      { texto: 'latiram', correta: false, explicacao: '"O cachorro" é 1! Pede singular: laTIU! 🐶' },
      { texto: 'latem todos', correta: false, explicacao: 'É UM cachorro! Singular: laTIU! 🐶' }
    ]
  },
  {
    id: 40, tipo: 'concordancia',
    q: '🐶 "Os cachorros ___ alto." — complete certo:',
    alternativas: [
      { texto: 'latiram', correta: true, explicacao: 'Isso! OS cachorros (vários) + laTIRAM! 🐶' },
      { texto: 'latiu', correta: false, explicacao: '"OS cachorros" são vários! Pede plural: laTIRAM! 🐶' },
      { texto: 'late um', correta: false, explicacao: 'São VÁRIOS! Pede plural: laTIRAM! 🐶' }
    ]
  },
  {
    id: 41, tipo: 'concordancia',
    q: '🤔 O que é CONCORDÂNCIA VERBAL?',
    alternativas: [
      { texto: 'O verbo combinar com o sujeito: 1 com 1, vários com vários', correta: true, explicacao: 'Isso! Singular + singular, plural + plural! 🤔' },
      { texto: 'Escrever o verbo sempre igual', correta: false, explicacao: 'Não! O verbo MUDA conforme o sujeito: 1 ou vários! 🤔' },
      { texto: 'Colocar ponto final na frase', correta: false, explicacao: 'Ponto é pontuação! Concordância = verbo COMBINAR com sujeito! 🤔' }
    ]
  },
  {
    id: 42, tipo: 'concordancia',
    q: '❌ "As crianças brinca no recreio." — onde está o erro?',
    alternativas: [
      { texto: 'O verbo deveria estar no plural: brincam', correta: true, explicacao: 'Isso! AS crianças (plural) + brinCAM (plural)! ❌' },
      { texto: 'Falta ponto final', correta: false, explicacao: 'Tem ponto! O erro é o VERBO no singular com sujeito plural! ❌' },
      { texto: 'Crianças se escreve com x', correta: false, explicacao: 'Crianças está certo! O erro: "brinca" com "AS crianças"! ❌' }
    ]
  },
  {
    id: 43, tipo: 'concordancia',
    q: '📝 Qual frase está CERTA?',
    alternativas: [
      { texto: '"Os alunos fizeram a prova."', correta: true, explicacao: 'Isso! OS alunos (plural) + fizerAM (plural)! 📝' },
      { texto: '"Os alunos fez a prova."', correta: false, explicacao: '"OS alunos" é plural! O certo: fizerAM! 📝' },
      { texto: '"O alunos fizeram a prova."', correta: false, explicacao: '"O" é singular com "alunos" plural! Tudo errado! 📝' }
    ]
  },
  {
    id: 44, tipo: 'concordancia',
    q: '🔍 Para acertar a concordância, o primeiro passo é...',
    alternativas: [
      { texto: 'Sublinhar o SUJEITO e ver se é 1 ou vários', correta: true, explicacao: 'Isso! Achou o sujeito, o verbo obedece! 🔍' },
      { texto: 'Chutar o verbo mais bonito', correta: false, explicacao: 'Chutar erra! Primeiro: ache o SUJEITO! 🔍' },
      { texto: 'Contar as letras da frase', correta: false, explicacao: 'Letras não mandam! Quem manda é o SUJEITO! 🔍' }
    ]
  },
  {
    id: 45, tipo: 'concordancia',
    q: '🎭 "Eu ___ e meus amigos ___." — complete certo:',
    alternativas: [
      { texto: 'canto / cantam', correta: true, explicacao: 'Isso! EU canto (singular), AMIGOS cantam (plural)! 🎭' },
      { texto: 'cantam / canto', correta: false, explicacao: 'Trocado! EU canto, ELES cantam! 🎭' },
      { texto: 'canto / canto', correta: false, explicacao: '"Amigos" é plural! Pede CANTAM! 🎭' }
    ]
  },
  // ===== BIOGRAFIAS (46-54) =====
  {
    id: 46, tipo: 'biografia',
    q: '📖 Uma BIOGRAFIA conta...',
    alternativas: [
      { texto: 'A vida de uma pessoa de verdade', correta: true, explicacao: 'Isso! Vida REAL de alguém (escritor, artista...)! 📖' },
      { texto: 'Uma história inventada com magia', correta: false, explicacao: 'Inventada é CONTO. Biografia = vida REAL! 📖' },
      { texto: 'Uma opinião sobre uma festa', correta: false, explicacao: 'Opinião é DEPOIMENTO. Biografia = VIDA real! 📖' }
    ]
  },
  {
    id: 47, tipo: 'biografia',
    q: '👤 A biografia é escrita em...',
    alternativas: [
      { texto: '3ª pessoa: ele, ela, o nome da pessoa', correta: true, explicacao: 'Isso! OUTRA pessoa conta: "ele nasceu, ela escreveu"! 👤' },
      { texto: '1ª pessoa: eu, nós', correta: false, explicacao: '"Eu" é DEPOIMENTO! Biografia = ELE/ELA! 👤' },
      { texto: 'Só com desenhos', correta: false, explicacao: 'Desenho é HQ! Biografia é texto em 3ª pessoa! 👤' }
    ]
  },
  {
    id: 48, tipo: 'biografia',
    q: '📅 Numa biografia, as datas e lugares servem para...',
    alternativas: [
      { texto: 'Situar a vida no tempo: quando e onde aconteceu', correta: true, explicacao: 'Isso! "Nasceu em 1936, em Recife" = linha do tempo! 📅' },
      { texto: 'Enfeitar o texto', correta: false, explicacao: 'Não é enfeite! Mostram QUANDO e ONDE! 📅' },
      { texto: 'Esconder a pessoa', correta: false, explicacao: 'Pelo contrário: REVELAM a história da pessoa! 📅' }
    ]
  },
  {
    id: 49, tipo: 'biografia',
    q: '⏪ Os verbos da biografia ficam no...',
    alternativas: [
      { texto: 'Passado (nasceu, estudou, escreveu)', correta: true, explicacao: 'Isso! A vida JÁ aconteceu: passado! ⏪' },
      { texto: 'Futuro (nascerá, escreverá)', correta: false, explicacao: 'A vida já foi vivida! Pede PASSADO! ⏪' },
      { texto: 'Imperativo (nasça! escreva!)', correta: false, explicacao: 'Imperativo é CARTAZ! Biografia = PASSADO! ⏪' }
    ]
  },
  {
    id: 50, tipo: 'biografia',
    q: '👶 A ordem certa de uma biografia é...',
    alternativas: [
      { texto: 'Nascimento → crescimento → fatos e obras', correta: true, explicacao: 'Isso! Ordem do TEMPO: do começo ao fim! 👶' },
      { texto: 'Fim → começo → meio misturado', correta: false, explicacao: 'Misturado confunde! Biografia segue o TEMPO! 👶' },
      { texto: 'Só o final da vida', correta: false, explicacao: 'Só o final é incompleto! Conta do NASCIMENTO em diante! 👶' }
    ]
  },
  {
    id: 51, tipo: 'biografia',
    q: '🔍 "Monteiro Lobato nasceu em 1882 e escreveu o Sítio do Picapau Amarelo." — esse texto é...',
    alternativas: [
      { texto: 'Uma biografia (trechinho)', correta: true, explicacao: 'Isso! Vida real + passado + 3ª pessoa = BIOGRAFIA! 🔍' },
      { texto: 'Um depoimento', correta: false, explicacao: 'Depoimento usa "eu". Aqui é "ELE nasceu": biografia! 🔍' },
      { texto: 'Um cartaz', correta: false, explicacao: 'Cartaz convence. Aqui CONTA uma vida: biografia! 🔍' }
    ]
  },
  {
    id: 52, tipo: 'biografia',
    q: '📚 Biografias combinam com "Escritores e seus livros" porque...',
    alternativas: [
      { texto: 'Contam a vida dos escritores dos livros', correta: true, explicacao: 'Isso! Quem escreveu? Quando viveu? Biografia responde! 📚' },
      { texto: 'Ensinam a desenhar livros', correta: false, explicacao: 'Desenhar é HQ! Biografia conta a VIDA do escritor! 📚' },
      { texto: 'Vendem livros na festa', correta: false, explicacao: 'Vender é anúncio! Biografia CONTA a vida! 📚' }
    ]
  },
  {
    id: 53, tipo: 'biografia',
    q: '🤔 Qual texto NÃO é biografia?',
    alternativas: [
      { texto: '"Eu adorei a festa de ontem, foi demais!"', correta: true, explicacao: 'Isso! "Eu adorei" = DEPOIMENTO, não biografia! 🤔' },
      { texto: '"Ela nasceu em 1940 e publicou 10 livros."', correta: false, explicacao: 'Esse É biografia: ela + passado! A errada é a do "eu"! 🤔' },
      { texto: '"Ele estudou muito e ganhou um prêmio."', correta: false, explicacao: 'Esse É biografia: ele + passado! A errada é a do "eu"! 🤔' }
    ]
  },
  {
    id: 54, tipo: 'biografia',
    q: '✍️ Para ESCREVER uma biografia, você precisa...',
    alternativas: [
      { texto: 'Pesquisar a vida da pessoa e contar em ordem', correta: true, explicacao: 'Isso! Pesquisa + ordem do tempo + passado! ✍️' },
      { texto: 'Inventar uma vida maluca', correta: false, explicacao: 'Inventar é CONTO! Biografia = vida REAL pesquisada! ✍️' },
      { texto: 'Dar ordens ao leitor', correta: false, explicacao: 'Ordens são CARTAZ! Biografia CONTA uma vida! ✍️' }
    ]
  },
  // ===== SUJEITO E PREDICADO (55-63) =====
  {
    id: 55, tipo: 'sujeito_predicado',
    q: '🧍 Na frase "Liz ganhou uma medalha", o SUJEITO é...',
    alternativas: [
      { texto: 'Liz (quem ganhou)', correta: true, explicacao: 'Isso! QUEM ganhou? A LIZ = sujeito! 🧍' },
      { texto: 'ganhou uma medalha', correta: false, explicacao: 'Isso é o PREDICADO (o que fez)! Sujeito = LIZ! 🧍' },
      { texto: 'uma medalha', correta: false, explicacao: 'Medalha é parte do predicado! QUEM ganhou? LIZ! 🧍' }
    ]
  },
  {
    id: 56, tipo: 'sujeito_predicado',
    q: '🏃 Na frase "Liz ganhou uma medalha", o PREDICADO é...',
    alternativas: [
      { texto: 'ganhou uma medalha (o que ela fez)', correta: true, explicacao: 'Isso! Predicado = o RESTO, com o verbo! 🏃' },
      { texto: 'Liz', correta: false, explicacao: 'Liz é o SUJEITO! Predicado = ganhou uma medalha! 🏃' },
      { texto: 'Liz medalha', correta: false, explicacao: 'Falta o VERBO! Predicado = ganhou uma medalha! 🏃' }
    ]
  },
  {
    id: 57, tipo: 'sujeito_predicado',
    q: '🔍 "Os escritores criam histórias mágicas." — QUEM cria?',
    alternativas: [
      { texto: 'Os escritores (sujeito)', correta: true, explicacao: 'Isso! QUEM + verbo = SUJEITO! 🔍' },
      { texto: 'histórias mágicas', correta: false, explicacao: 'Histórias é O QUE criam (predicado)! QUEM? Os escritores! 🔍' },
      { texto: 'criam', correta: false, explicacao: '"Criam" é o VERBO! QUEM cria? Os escritores! 🔍' }
    ]
  },
  {
    id: 58, tipo: 'sujeito_predicado',
    q: '🧩 O predicado sempre tem...',
    alternativas: [
      { texto: 'Um verbo (a ação!)', correta: true, explicacao: 'Isso! Sem verbo, NÃO é predicado! 🧩' },
      { texto: 'Um ponto de exclamação', correta: false, explicacao: 'Pontuação não é obrigatória! VERBO sim! 🧩' },
      { texto: 'Um desenho', correta: false, explicacao: 'Desenho é HQ! Predicado precisa de VERBO! 🧩' }
    ]
  },
  {
    id: 59, tipo: 'sujeito_predicado',
    q: '🎯 "A turma do 4º ano fez uma festa linda." — o sujeito é...',
    alternativas: [
      { texto: 'A turma do 4º ano', correta: true, explicacao: 'Isso! QUEM fez? A TURMA = sujeito (tudo juntinho)! 🎯' },
      { texto: 'fez uma festa linda', correta: false, explicacao: 'Isso é o PREDICADO! Sujeito = A turma do 4º ano! 🎯' },
      { texto: 'uma festa linda', correta: false, explicacao: 'Festa é parte do predicado! QUEM fez? A TURMA! 🎯' }
    ]
  },
  {
    id: 60, tipo: 'sujeito_predicado',
    q: '📝 Qual é o passo a passo para achar o sujeito?',
    alternativas: [
      { texto: 'Ache o verbo → pergunte "quem + verbo?" → achou!', correta: true, explicacao: 'Isso! Verbo + QUEM = sujeito! 📝' },
      { texto: 'Leia só a última palavra', correta: false, explicacao: 'Última palavra não diz nada! Ache o VERBO e pergunte QUEM! 📝' },
      { texto: 'Chute o nome mais bonito', correta: false, explicacao: 'Chutar erra! Pergunte "QUEM + verbo?"! 📝' }
    ]
  },
  {
    id: 61, tipo: 'sujeito_predicado',
    q: '🐕 "O cachorro latiu a noite toda." — divida a frase:',
    alternativas: [
      { texto: 'Sujeito: O cachorro | Predicado: latiu a noite toda', correta: true, explicacao: 'Isso! QUEM latiu? O cachorro! Resto = predicado! 🐕' },
      { texto: 'Sujeito: latiu | Predicado: O cachorro', correta: false, explicacao: 'Trocado! SUJEITO = quem (O cachorro)! 🐕' },
      { texto: 'Sujeito: a noite toda | Predicado: O cachorro', correta: false, explicacao: 'Não! QUEM latiu? O CACHORRO = sujeito! 🐕' }
    ]
  },
  {
    id: 62, tipo: 'sujeito_predicado',
    q: '🤝 Sujeito e concordância verbal combinam porque...',
    alternativas: [
      { texto: 'O verbo do predicado concorda com o sujeito (1 ou vários)', correta: true, explicacao: 'Isso! Sujeito manda, verbo obedece: singular ou plural! 🤝' },
      { texto: 'São a mesma coisa', correta: false, explicacao: 'Não! Sujeito = QUEM. Predicado = O QUE. Mas combinam! 🤝' },
      { texto: 'Não têm nada a ver', correta: false, explicacao: 'Têm TUDO a ver! O verbo concorda com o sujeito! 🤝' }
    ]
  },
  {
    id: 63, tipo: 'sujeito_predicado',
    q: '🏁 "Meus amigos e eu viajaremos amanhã." — o sujeito é...',
    alternativas: [
      { texto: 'Meus amigos e eu (vários = plural)', correta: true, explicacao: 'Isso! QUEM viajará? Amigos + eu = PLURAL (viajarÃO)! 🏁' },
      { texto: 'viajaremos amanhã', correta: false, explicacao: 'Isso é o PREDICADO! Sujeito = Meus amigos e eu! 🏁' },
      { texto: 'amanhã', correta: false, explicacao: '"Amanhã" é tempo! QUEM? Meus amigos e eu! 🏁' }
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
  const labels = document.querySelectorAll('#quiz-container .alternativa-item');
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
        alt.insertAdjacentHTML('beforeend', `<div class="explicacao">✓ ${questao.alternativas[j].explicacao}</div>`);
      } else if (selecionado && selecionado.getAttribute('data-correta') === 'false' && selecionado.value == j) {
        alt.classList.add('incorreta');
        alt.insertAdjacentHTML('beforeend', `<div class="explicacao">✗ ${questao.alternativas[j].explicacao}</div>`);
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

// ===== JOGO RUSH DE PALAVRAS =====
const bancoJogo = [
  { dica: '📢 Texto que CONVENCE com frase curta + imagem forte?', palavra: 'cartaz de campanha' },
  { dica: '📣 "Respeite, participe, cuide!" — verbos no...?', palavra: 'imperativo' },
  { dica: '🔢 "Três livros" — quantidade exata ou vaga?', palavra: 'exata' },
  { dica: '💭 "Vários amigos" — quantidade exata ou vaga?', palavra: 'vaga' },
  { dica: '🚫 Zero, ninguém: qual palavra?', palavra: 'nenhum' },
  { dica: '✅ Inteiro, completo: qual palavra?', palavra: 'todo' },
  { dica: '🎤 Texto em 1ª pessoa com opinião ("eu adorei")?', palavra: 'depoimento' },
  { dica: '⏪ "Ontem eles ficARAM" — AM é passado ou futuro?', palavra: 'passado' },
  { dica: '⏩ "Amanhã ficarÃO" — ÃO é passado ou futuro?', palavra: 'futuro' },
  { dica: '⚠️ "Eles ESTÃO" — presente ou futuro?', palavra: 'presente' },
  { dica: '🤝 "As meninas brincAM" — singular ou plural?', palavra: 'plural' },
  { dica: '🤝 "A menina brincA" — singular ou plural?', palavra: 'singular' },
  { dica: '📖 Vida real em ordem de tempo, com "ele/ela"?', palavra: 'biografia' },
  { dica: '⏪ Biografia usa verbos no passado ou futuro?', palavra: 'passado' },
  { dica: '🧍 "Liz ganhou medalha" — QUEM ganhou?', palavra: 'Liz' },
  { dica: '🏃 Predicado sempre tem o quê?', palavra: 'verbo' },
  { dica: '🖼️ Complete: "Semana passada, eles brinc___"?', palavra: 'brincaram' },
  { dica: '🖼️ Complete: "Ano que vem, elas viajar___"?', palavra: 'viajarão' },
  { dica: '🍿 Oposto de MUITA?', palavra: 'pouca' },
  { dica: '👧 "CADA aluno ganhou" — um por um?', palavra: 'cada' }
];

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
  const validos = bancoJogo.filter(v => v && v.palavra);
  const item = validos[Math.floor(Math.random() * validos.length)];
  const resposta = item.palavra;

  const opcoes = [resposta];
  const embaralhado = shuffleArray(validos.map(v => v.palavra).filter(p => p !== resposta));
  for (const p of embaralhado) {
    if (opcoes.length >= 4) break;
    if (!opcoes.includes(p)) opcoes.push(p);
  }

  for (let i = opcoes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
  }

  document.getElementById('jogo-pergunta').textContent = item.dica;
  const container = document.getElementById('jogo-opcoes');
  container.innerHTML = opcoes.map(v =>
    `<button class="jogo-opcao" style="font-size:1.2rem;" data-resposta="${v}">${v}</button>`
  ).join('');
  container.querySelectorAll('.jogo-opcao').forEach(btn => {
    btn.addEventListener('click', () => responderJogo(btn));
  });
  document.getElementById('jogo-mensagem').textContent = '';
}

function responderJogo(btn) {
  const container = document.getElementById('jogo-opcoes');
  const valor = btn.dataset.resposta;
  const btns = container.querySelectorAll('.jogo-opcao');
  btns.forEach(b => b.style.pointerEvents = 'none');

  // Descobre a resposta certa pela dica exibida
  const pergunta = document.getElementById('jogo-pergunta').textContent;
  const itemCerto = bancoJogo.find(v => v && v.dica === pergunta);
  const correta = itemCerto ? itemCerto.palavra : null;

  if (valor === correta) {
    btn.classList.add('correta');
    jogoAcertos++;
    jogoSequencia++;
    const pts = 10 + (jogoSequencia > 1 ? jogoSequencia * 2 : 0);
    jogoPontos += pts;
    document.getElementById('jogo-mensagem').textContent = `✅ Correto! +${pts} pontos`;
    document.getElementById('jogo-mensagem').style.color = '#4ade80';
  } else {
    btn.classList.add('incorreta');
    btns.forEach(b => { if (b.dataset.resposta === correta) b.classList.add('correta'); });
    jogoSequencia = 0;
    document.getElementById('jogo-mensagem').textContent = `❌ Era "${correta}". Tente a próxima!`;
    document.getElementById('jogo-mensagem').style.color = '#f87171';
  }

  document.getElementById('jogo-acertos').textContent = jogoAcertos;
  document.getElementById('jogo-pontos').textContent = jogoPontos;
  document.getElementById('jogo-sequencia').textContent = jogoSequencia;

  setTimeout(() => {
    gerarPergunta();
  }, 1400);
}
