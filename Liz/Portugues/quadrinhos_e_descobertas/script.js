const bancoQuestoes = [
  // ===== HQ: BALÕES, LEGENDAS, PLANEJAMENTO (1-10) =====
  {
    id: 1, tipo: 'hq',
    q: '💬 HQ significa...',
    alternativas: [
      { texto: 'História em Quadrinhos', correta: true, explicacao: 'Isso! H = História + Q = Quadrinhos. Histórias contadas com desenhos e balões! 💬' },
      { texto: 'Hora Quietinha', correta: false, explicacao: 'Não! HQ = História em Quadrinhos! 💬' },
      { texto: 'História de Quinta', correta: false, explicacao: 'Não! HQ = História em Quadrinhos! 💬' }
    ]
  },
  {
    id: 2, tipo: 'hq',
    q: '💭 Um balão com o rabicho em formato de BOLINHAS mostra...',
    alternativas: [
      { texto: 'O pensamento do personagem', correta: true, explicacao: 'Isso! Bolinhas = PENSAMENTO. O personagem está pensando, não falando! 💭' },
      { texto: 'Um grito bem alto', correta: false, explicacao: 'Grito tem borda pontuda! Bolinhas = pensamento! 💭' },
      { texto: 'A fala do narrador', correta: false, explicacao: 'Narrador fica na LEGENDA (caixinha). Bolinhas = pensamento! 💭' }
    ]
  },
  {
    id: 3, tipo: 'hq',
    q: '📢 Um balão com a borda cheia de PONTAS (como explosão) mostra...',
    alternativas: [
      { texto: 'Um grito ou voz muito alta', correta: true, explicacao: 'Isso! Borda pontuda = GRITO! Alguém está falando bem alto! 📢' },
      { texto: 'Um cochicho baixinho', correta: false, explicacao: 'Cochicho seria balão tracejado. Borda pontuda = GRITO! 📢' },
      { texto: 'Um pensamento secreto', correta: false, explicacao: 'Pensamento tem bolinhas. Borda pontuda = GRITO! 📢' }
    ]
  },
  {
    id: 4, tipo: 'hq',
    q: '🗨️ A LEGENDA (caixinha retangular sem rabicho) é...',
    alternativas: [
      { texto: 'A voz do narrador contando a história', correta: true, explicacao: 'Isso! A legenda não é fala de personagem — é o NARRADOR explicando! 🗨️' },
      { texto: 'A fala mais importante do herói', correta: false, explicacao: 'Fala fica em BALÃO com rabicho. Caixinha = narrador! 🗨️' },
      { texto: 'O título da HQ', correta: false, explicacao: 'Título fica na capa. Caixinha dentro do quadrinho = narrador! 🗨️' }
    ]
  },
  {
    id: 5, tipo: 'hq',
    q: '🎨 Cada QUADRINHO de uma HQ representa...',
    alternativas: [
      { texto: 'Uma cena da história', correta: true, explicacao: 'Isso! Cada quadrinho = uma cena. A sequência deles conta a história! 🎨' },
      { texto: 'Uma história diferente', correta: false, explicacao: 'Não! Todos os quadrinhos juntos contam UMA história, cada um é uma cena! 🎨' },
      { texto: 'A capa do gibi', correta: false, explicacao: 'Capa é só a primeira página. Quadrinho = cena da história! 🎨' }
    ]
  },
  {
    id: 6, tipo: 'hq',
    q: '✏️ Qual é o PRIMEIRO passo para criar uma HQ?',
    alternativas: [
      { texto: 'Inventar a história (começo, meio e fim)', correta: true, explicacao: 'Isso! HISTÓRIA primeiro, DESENHO depois. Sem história, o desenho se perde! ✏️' },
      { texto: 'Desenhar os quadrinhos', correta: false, explicacao: 'Desenhar vem DEPOIS do planejamento! Primeiro: a história! ✏️' },
      { texto: 'Pintar com canetinha', correta: false, explicacao: 'Pintar é o último passo! Primeiro: inventar a história! ✏️' }
    ]
  },
  {
    id: 7, tipo: 'hq',
    q: '👧 No planejamento da HQ, "definir os PERSONAGENS" significa...',
    alternativas: [
      { texto: 'Decidir quem aparece e como cada um é', correta: true, explicacao: 'Isso! Quem são, como se vestem, como falam — tudo antes de desenhar! 👧' },
      { texto: 'Escolher o título da história', correta: false, explicacao: 'Título é outra etapa. Personagens = QUEM aparece e COMO são! 👧' },
      { texto: 'Contar quantas páginas tem', correta: false, explicacao: 'Isso é dos quadrinhos. Personagens = QUEM aparece! 👧' }
    ]
  },
  {
    id: 8, tipo: 'hq',
    q: '🏞️ No planejamento da HQ, o CENÁRIO é...',
    alternativas: [
      { texto: 'O lugar onde a história acontece', correta: true, explicacao: 'Isso! Escola, parque, praia, espaço... ONDE tudo acontece! 🏞️' },
      { texto: 'O herói da história', correta: false, explicacao: 'Herói é PERSONAGEM. Cenário = LUGAR! 🏞️' },
      { texto: 'O final da história', correta: false, explicacao: 'Final é parte da HISTÓRIA. Cenário = LUGAR! 🏞️' }
    ]
  },
  {
    id: 9, tipo: 'hq',
    q: '💬 O "rabicho" do balão serve para...',
    alternativas: [
      { texto: 'Mostrar QUEM está falando ou pensando', correta: true, explicacao: 'Isso! A pontinha aponta para o dono da fala ou do pensamento! 💬' },
      { texto: 'Enfeitar o desenho', correta: false, explicacao: 'Não é enfeite! O rabicho aponta para QUEM fala! 💬' },
      { texto: 'Separar um quadrinho do outro', correta: false, explicacao: 'Quem separa é a borda do quadrinho. Rabicho = dono da fala! 💬' }
    ]
  },
  {
    id: 10, tipo: 'hq',
    q: '📚 Para entender uma HQ, lemos os quadrinhos...',
    alternativas: [
      { texto: 'Na ordem: da esquerda para a direita, de cima para baixo', correta: true, explicacao: 'Isso! Igual a um livro: seguir a sequência revela a história! 📚' },
      { texto: 'De trás para frente', correta: false, explicacao: 'De trás para frente estraga a surpresa! Ordem normal: esquerda→direita! 📚' },
      { texto: 'Só os desenhos, sem ler os balões', correta: false, explicacao: 'Os balões têm as falas! HQ = desenho + texto juntos! 📚' }
    ]
  },
  // ===== PALAVRAS COM MAIS DE UM SIGNIFICADO (11-20) =====
  {
    id: 11, tipo: 'polissemia',
    q: '🥭 Na frase "Comi uma MANGA docinha", manga significa...',
    alternativas: [
      { texto: 'A fruta', correta: true, explicacao: 'Isso! "Comi" + "docinha" revelam: é a FRUTA! 🥭' },
      { texto: 'A parte da camisa', correta: false, explicacao: 'Manga de camisa não se come! "Comi + docinha" = FRUTA! 🥭' },
      { texto: 'Um tipo de dança', correta: false, explicacao: 'Não existe dança manga! "Comi + docinha" = FRUTA! 🥭' }
    ]
  },
  {
    id: 12, tipo: 'polissemia',
    q: '👕 Na frase "Rasguei a MANGA da camisa", manga significa...',
    alternativas: [
      { texto: 'A parte da roupa', correta: true, explicacao: 'Isso! "Da camisa" revela: é a MANGA da roupa! 👕' },
      { texto: 'A fruta', correta: false, explicacao: 'Camisa não tem fruta! "Da camisa" = parte da roupa! 👕' },
      { texto: 'Uma árvore', correta: false, explicacao: 'A árvore é a MANGUEIRA. "Da camisa" = parte da roupa! 👕' }
    ]
  },
  {
    id: 13, tipo: 'polissemia',
    q: '🪑 "Sentei no BANCO da praça." Banco aqui é...',
    alternativas: [
      { texto: 'O assento para sentar', correta: true, explicacao: 'Isso! "Sentei + praça" = banco de sentar! 🪑' },
      { texto: 'Onde se guarda dinheiro', correta: false, explicacao: 'Ninguém senta no banco de dinheiro! "Sentei" = assento! 🪑' },
      { texto: 'Um time de futebol', correta: false, explicacao: 'Time seria "banco de reservas"! "Sentei na praça" = assento! 🪑' }
    ]
  },
  {
    id: 14, tipo: 'polissemia',
    q: '🏦 "Guardei dinheiro no BANCO." Banco aqui é...',
    alternativas: [
      { texto: 'A instituição onde se guarda dinheiro', correta: true, explicacao: 'Isso! "Dinheiro" revela: é o BANCO de guardar dinheiro! 🏦' },
      { texto: 'O assento da praça', correta: false, explicacao: 'Dinheiro não se guarda em banco de praça! É o banco instituição! 🏦' },
      { texto: 'Um cofrinho de brinquedo', correta: false, explicacao: 'Cofrinho seria "cofrinho"! "Banco" com dinheiro = instituição! 🏦' }
    ]
  },
  {
    id: 15, tipo: 'polissemia',
    q: '🕯️ "Apaguei a VELA do bolo." Vela aqui é...',
    alternativas: [
      { texto: 'A que ilumina e se apaga', correta: true, explicacao: 'Isso! "Apaguei + bolo" = velinha de aniversário! 🕯️' },
      { texto: 'O pano do barco', correta: false, explicacao: 'Vela de barco não vai em bolo! "Do bolo" = velinha! 🕯️' },
      { texto: 'Uma estrela do céu', correta: false, explicacao: 'Estrela não se apaga em bolo! É a velinha! 🕯️' }
    ]
  },
  {
    id: 16, tipo: 'polissemia',
    q: '😢 "Que PENA que você perdeu o jogo!" Pena aqui significa...',
    alternativas: [
      { texto: 'Dó, lamento', correta: true, explicacao: 'Isso! "Que pena!" = que dó, que lástima! 😢' },
      { texto: 'De passarinho', correta: false, explicacao: 'Pena de passarinho não se sente por jogo perdido! É DÓ! 😢' },
      { texto: 'Caneta antiga', correta: false, explicacao: 'Pena-caneta é de escrever! "Que pena que perdeu" = DÓ! 😢' }
    ]
  },
  {
    id: 17, tipo: 'polissemia',
    q: '🧵 "A LINHA do meu vestido arrebentou." Linha aqui é...',
    alternativas: [
      { texto: 'O fio de costura', correta: true, explicacao: 'Isso! "Do vestido + arrebentou" = fio de costura! 🧵' },
      { texto: 'A fila do recreio', correta: false, explicacao: 'Fila não arrebenta em vestido! "Do vestido" = fio! 🧵' },
      { texto: 'A linha do caderno', correta: false, explicacao: 'Linha de caderno não arrebenta! "Do vestido" = fio de costura! 🧵' }
    ]
  },
  {
    id: 18, tipo: 'polissemia',
    q: '🥅 "Chutei a bola para fora da REDE." Rede aqui é...',
    alternativas: [
      { texto: 'A do gol', correta: true, explicacao: 'Isso! "Bola + chutei" = rede do gol! 🥅' },
      { texto: 'A de balanço', correta: false, explicacao: 'Ninguém chuta bola em rede de balanço! É a rede do GOL! 🥅' },
      { texto: 'A internet', correta: false, explicacao: 'Internet não leva chute! "Bola" = rede do gol! 🥅' }
    ]
  },
  {
    id: 19, tipo: 'polissemia',
    q: '🤔 Para descobrir o significado certo de uma palavra com dois sentidos, devemos...',
    alternativas: [
      { texto: 'Ler a frase toda (o contexto)', correta: true, explicacao: 'Isso! É o RESTO DA FRASE que revela o sentido! 🤔' },
      { texto: 'Chutar o primeiro que vier à cabeça', correta: false, explicacao: 'Chutar erra! O segredo é LER A FRASE TODA! 🤔' },
      { texto: 'Olhar só a palavra sozinha', correta: false, explicacao: 'Sozinha ela engana! É o CONTEXTO que revela! 🤔' }
    ]
  },
  {
    id: 20, tipo: 'polissemia',
    q: '😴 "Dormi na REDE da varanda." Rede aqui é...',
    alternativas: [
      { texto: 'A de balanço, de deitar', correta: true, explicacao: 'Isso! "Dormi + varanda" = rede de balanço! 😴' },
      { texto: 'A do gol', correta: false, explicacao: 'Ninguém dorme na rede do gol! "Dormi" = rede de balanço! 😴' },
      { texto: 'A de pescar', correta: false, explicacao: 'Rede de pesca não fica na varanda para dormir! É a de balanço! 😴' }
    ]
  },
  // ===== ONOMATOPEIAS (21-30) =====
  {
    id: 21, tipo: 'onomatopeia',
    q: '💥 O vaso caiu no chão: ______! Qual onomatopeia completa?',
    alternativas: [
      { texto: 'BUM!', correta: true, explicacao: 'Isso! BUM! = batida, queda, explosão! 💥' },
      { texto: 'MIAU!', correta: false, explicacao: 'MIAU é de gato! Queda de vaso = BUM! 💥' },
      { texto: 'Zzz...', correta: false, explicacao: 'Zzz é de dormir! Queda de vaso = BUM! 💥' }
    ]
  },
  {
    id: 22, tipo: 'onomatopeia',
    q: '💦 Mergulho na piscina: ______! Qual onomatopeia completa?',
    alternativas: [
      { texto: 'SPLASH!', correta: true, explicacao: 'Isso! SPLASH! = barulho de água espirrando! 💦' },
      { texto: 'TOC-TOC!', correta: false, explicacao: 'TOC-TOC é batida na porta! Água = SPLASH! 💦' },
      { texto: 'VRUM!', correta: false, explicacao: 'VRUM é motor! Água = SPLASH! 💦' }
    ]
  },
  {
    id: 23, tipo: 'onomatopeia',
    q: '😴 O bebê está dormindo. A onomatopeia certa é...',
    alternativas: [
      { texto: 'Zzz...', correta: true, explicacao: 'Isso! Zzz... = sono, ronco baixinho! 😴' },
      { texto: 'POW!', correta: false, explicacao: 'POW! é soco/explosão! Dormir = Zzz... 😴' },
      { texto: 'CLAP-CLAP!', correta: false, explicacao: 'CLAP é palma! Dormir = Zzz... 😴' }
    ]
  },
  {
    id: 24, tipo: 'onomatopeia',
    q: '🚪 A visita bateu na porta: ______! Qual onomatopeia completa?',
    alternativas: [
      { texto: 'TOC-TOC!', correta: true, explicacao: 'Isso! TOC-TOC! = batida na porta! 🚪' },
      { texto: 'NHAM-NHAM!', correta: false, explicacao: 'NHAM é comendo! Porta = TOC-TOC! 🚪' },
      { texto: 'SPLASH!', correta: false, explicacao: 'SPLASH é água! Porta = TOC-TOC! 🚪' }
    ]
  },
  {
    id: 25, tipo: 'onomatopeia',
    q: '🐱 O gatinho com fome faz...',
    alternativas: [
      { texto: 'MIAU!', correta: true, explicacao: 'Isso! MIAU! = voz do gato! 🐱' },
      { texto: 'AU-AU!', correta: false, explicacao: 'AU-AU é cachorro! Gato = MIAU! 🐱' },
      { texto: 'BUM!', correta: false, explicacao: 'BUM é batida! Gato = MIAU! 🐱' }
    ]
  },
  {
    id: 26, tipo: 'onomatopeia',
    q: '🏎️ O carro passou correndo: ______! Qual onomatopeia completa?',
    alternativas: [
      { texto: 'VRUM!', correta: true, explicacao: 'Isso! VRUM! = barulho do motor! 🏎️' },
      { texto: 'Zzz...', correta: false, explicacao: 'Zzz é dormir! Motor = VRUM! 🏎️' },
      { texto: 'MIAU!', correta: false, explicacao: 'MIAU é gato! Motor = VRUM! 🏎️' }
    ]
  },
  {
    id: 27, tipo: 'onomatopeia',
    q: '🍰 Que bolo gostoso! Comendo, fazemos...',
    alternativas: [
      { texto: 'NHAM-NHAM!', correta: true, explicacao: 'Isso! NHAM-NHAM! = comendo com gosto! 🍰' },
      { texto: 'TOC-TOC!', correta: false, explicacao: 'TOC-TOC é porta! Comendo = NHAM-NHAM! 🍰' },
      { texto: 'POW!', correta: false, explicacao: 'POW é soco! Comendo = NHAM-NHAM! 🍰' }
    ]
  },
  {
    id: 28, tipo: 'onomatopeia',
    q: '👏 O show acabou e todos bateram palmas: ______!',
    alternativas: [
      { texto: 'CLAP-CLAP!', correta: true, explicacao: 'Isso! CLAP-CLAP! = palmas! 👏' },
      { texto: 'SPLASH!', correta: false, explicacao: 'SPLASH é água! Palmas = CLAP-CLAP! 👏' },
      { texto: 'Zzz...', correta: false, explicacao: 'Zzz é dormir — e show bom ninguém dorme! Palmas = CLAP-CLAP! 👏' }
    ]
  },
  {
    id: 29, tipo: 'onomatopeia',
    q: '🤔 O que é uma ONOMATOPEIA?',
    alternativas: [
      { texto: 'Uma palavra que imita um som', correta: true, explicacao: 'Isso! BUM, MIAU, Zzz... — palavras que IMITAM barulhos! 🤔' },
      { texto: 'Uma palavra com dois sentidos', correta: false, explicacao: 'Dois sentidos é POLISSEMIA. Onomatopeia IMITA SOM! 🤔' },
      { texto: 'O nome do personagem', correta: false, explicacao: 'Nome é nome! Onomatopeia IMITA SOM! 🤔' }
    ]
  },
  {
    id: 30, tipo: 'onomatopeia',
    q: '❗ Nas HQs, as onomatopeias geralmente terminam com...',
    alternativas: [
      { texto: '! (ponto de exclamação)', correta: true, explicacao: 'Isso! Som tem energia: BUM! SPLASH! Zzz... às vezes com reticências! ❗' },
      { texto: '? (ponto de interrogação)', correta: false, explicacao: '"?" é pergunta. Som usa "!"! ❗' },
      { texto: ', (vírgula)', correta: false, explicacao: 'Vírgula é pausa fraca. Som usa "!"! ❗' }
    ]
  },
  // ===== RELATOS DE EXPERIÊNCIA (31-40) =====
  {
    id: 31, tipo: 'relato',
    q: '📖 Um RELATO DE EXPERIÊNCIA conta...',
    alternativas: [
      { texto: 'Algo que realmente aconteceu com alguém', correta: true, explicacao: 'Isso! Relato = FATO REAL, não inventado! 📖' },
      { texto: 'Uma história inventada com dragões', correta: false, explicacao: 'Inventada é CONTO. Relato = aconteceu de VERDADE! 📖' },
      { texto: 'Uma receita de bolo', correta: false, explicacao: 'Receita ensina a cozinhar. Relato CONTA o que aconteceu! 📖' }
    ]
  },
  {
    id: 32, tipo: 'relato',
    q: '⏰ Num relato, os verbos ficam no...',
    alternativas: [
      { texto: 'Passado (fui, vi, aconteceu)', correta: true, explicacao: 'Isso! A experiência JÁ aconteceu: fui, vi, gostei! ⏰' },
      { texto: 'Futuro (irei, verei)', correta: false, explicacao: 'Futuro é o que VAI acontecer. Relato conta o que JÁ aconteceu: passado! ⏰' },
      { texto: 'Sempre no presente', correta: false, explicacao: 'Presente é agora. Relato = passado! ⏰' }
    ]
  },
  {
    id: 33, tipo: 'relato',
    q: '❓ Qual pergunta um bom relato SEMPRE responde?',
    alternativas: [
      { texto: 'QUEM viveu, QUANDO, ONDE e O QUE aconteceu', correta: true, explicacao: 'Isso! As 4 de ouro: quem, quando, onde e o quê! ❓' },
      { texto: 'Qual é o preço do passeio', correta: false, explicacao: 'Preço nem sempre importa. O essencial: quem, quando, onde, o quê! ❓' },
      { texto: 'Que roupa o autor vestia', correta: false, explicacao: 'Roupa é detalhe. O essencial: quem, quando, onde, o quê! ❓' }
    ]
  },
  {
    id: 34, tipo: 'relato',
    q: '📝 "No sábado, eu e minha turma visitamos o museu. Vimos dinossauros gigantes!" Esse texto é...',
    alternativas: [
      { texto: 'Um relato de experiência', correta: true, explicacao: 'Isso! Fato real + passado (visitamos, vimos) + quem/quando/onde = RELATO! 📝' },
      { texto: 'Uma história em quadrinhos', correta: false, explicacao: 'HQ tem desenhos e balões. Esse texto corrido e real = RELATO! 📝' },
      { texto: 'Um anúncio', correta: false, explicacao: 'Anúncio vende algo. Contar o que viveu = RELATO! 📝' }
    ]
  },
  {
    id: 35, tipo: 'relato',
    q: '💡 Um bom relato termina mostrando...',
    alternativas: [
      { texto: 'Como terminou e o que se aprendeu', correta: true, explicacao: 'Isso! O final conta o resultado e a lição da experiência! 💡' },
      { texto: 'Uma nova história inventada', correta: false, explicacao: 'Relato não inventa! Termina com o resultado e o aprendizado! 💡' },
      { texto: 'O preço de tudo', correta: false, explicacao: 'Preço não é o final! O final mostra COMO terminou e O QUE aprendeu! 💡' }
    ]
  },
  {
    id: 36, tipo: 'relato',
    q: '🤔 Qual texto NÃO é um relato de experiência?',
    alternativas: [
      { texto: '"Era uma vez um dragão que voava..."', correta: true, explicacao: 'Isso! "Era uma vez + dragão" = inventado = CONTO, não relato! 🤔' },
      { texto: '"Ontem visitei a fazenda do meu avô..."', correta: false, explicacao: 'Esse É relato: real + passado! A errada é a do dragão! 🤔' },
      { texto: '"Na feira de ciências, nosso grupo mostrou..."', correta: false, explicacao: 'Esse É relato: real + passado! A errada é a do dragão! 🤔' }
    ]
  },
  {
    id: 37, tipo: 'relato',
    q: '👧 "QUEM viveu a experiência?" — essa pergunta identifica...',
    alternativas: [
      { texto: 'As pessoas que participaram', correta: true, explicacao: 'Isso! QUEM = eu, minha turma, minha família... 👧' },
      { texto: 'O dia do passeio', correta: false, explicacao: 'Dia é QUANDO. QUEM = as pessoas! 👧' },
      { texto: 'O lugar visitado', correta: false, explicacao: 'Lugar é ONDE. QUEM = as pessoas! 👧' }
    ]
  },
  {
    id: 38, tipo: 'relato',
    q: '📍 "ONDE aconteceu?" — essa pergunta identifica...',
    alternativas: [
      { texto: 'O lugar da experiência', correta: true, explicacao: 'Isso! ONDE = museu, praia, escola, fazenda... 📍' },
      { texto: 'As pessoas', correta: false, explicacao: 'Pessoas = QUEM. ONDE = lugar! 📍' },
      { texto: 'O horário', correta: false, explicacao: 'Horário = QUANDO. ONDE = lugar! 📍' }
    ]
  },
  {
    id: 39, tipo: 'relato',
    q: '✍️ Para ESCREVER um relato, o primeiro passo é...',
    alternativas: [
      { texto: 'Lembrar bem o que aconteceu (quem, quando, onde, o quê)', correta: true, explicacao: 'Isso! Primeiro lembra, depois escreve na ordem! ✍️' },
      { texto: 'Inventar um final emocionante', correta: false, explicacao: 'Relato não inventa! Primeiro: LEMBRAR o que aconteceu! ✍️' },
      { texto: 'Desenhar os personagens', correta: false, explicacao: 'Desenho é para HQ! Relato: primeiro LEMBRAR os fatos! ✍️' }
    ]
  },
  {
    id: 40, tipo: 'relato',
    q: '📚 Relato de experiência e HQ combinam porque...',
    alternativas: [
      { texto: 'Uma experiência real pode virar uma HQ', correta: true, explicacao: 'Isso! Você vive, relata... e pode DESENHAR tudo em quadrinhos! 📚' },
      { texto: 'São a mesma coisa', correta: false, explicacao: 'Não! Relato = texto real; HQ = desenho + balões. Mas um pode virar o outro! 📚' },
      { texto: 'Nenhum dos dois é texto', correta: false, explicacao: 'Os dois SÃO textos! E uma experiência pode virar HQ! 📚' }
    ]
  },
  // ===== INFOGRÁFICO (41-50) =====
  {
    id: 41, tipo: 'infografico',
    q: '📊 Um INFOGRÁFICO é um texto que...',
    alternativas: [
      { texto: 'Mistura textos curtos + imagens + gráficos', correta: true, explicacao: 'Isso! Palavras + desenhos + números juntos explicando um assunto! 📊' },
      { texto: 'Só tem textão comprido', correta: false, explicacao: 'Textão é artigo. Infográfico = CURTO + imagens + números! 📊' },
      { texto: 'Só tem desenhos sem palavras', correta: false, explicacao: 'Só desenho é ilustração. Infográfico MISTURA tudo! 📊' }
    ]
  },
  {
    id: 42, tipo: 'infografico',
    q: '🔢 No infográfico, os NÚMEROS e GRÁFICOS servem para...',
    alternativas: [
      { texto: 'Mostrar quantidades e resultados da pesquisa', correta: true, explicacao: 'Isso! Números provam: quantos, quanto, qual resultado! 🔢' },
      { texto: 'Enfeitar a página', correta: false, explicacao: 'Não é enfeite! Números MOSTRAM resultados! 🔢' },
      { texto: 'Esconder o assunto', correta: false, explicacao: 'Pelo contrário: números REVELAM o resultado! 🔢' }
    ]
  },
  {
    id: 43, tipo: 'infografico',
    q: '📝 Para LER um infográfico, o primeiro passo é...',
    alternativas: [
      { texto: 'Ler o título para saber o assunto', correta: true, explicacao: 'Isso! Título primeiro: do QUE se trata? Depois imagens e números! 📝' },
      { texto: 'Contar quantas cores tem', correta: false, explicacao: 'Cores não dizem o assunto! Primeiro: o TÍTULO! 📝' },
      { texto: 'Ler o último parágrafo', correta: false, explicacao: 'Infográfico nem tem parágrafos! Primeiro: o TÍTULO! 📝' }
    ]
  },
  {
    id: 44, tipo: 'infografico',
    q: '🖼️ As IMAGENS no infográfico servem para...',
    alternativas: [
      { texto: 'Mostrar rapidinho o que as palavras dizem', correta: true, explicacao: 'Isso! Uma imagem explica em 1 segundo o que levaria 10 linhas! 🖼️' },
      { texto: 'Ocupar espaço vazio', correta: false, explicacao: 'Não! Imagens EXPLICAM junto com o texto! 🖼️' },
      { texto: 'Deixar o texto mais difícil', correta: false, explicacao: 'Pelo contrário: imagens DEIXAM MAIS FÁCIL! 🖼️' }
    ]
  },
  {
    id: 45, tipo: 'infografico',
    q: '✂️ Os textos do infográfico são...',
    alternativas: [
      { texto: 'Curtinhos e diretos', correta: true, explicacao: 'Isso! Ninguém lê textão em infográfico: frases curtas! ✂️' },
      { texto: 'Compridos como um livro', correta: false, explicacao: 'Livro é livro! Infográfico = CURTO e direto! ✂️' },
      { texto: 'Sempre em inglês', correta: false, explicacao: 'Pode ser em qualquer língua! O segredo: CURTO! ✂️' }
    ]
  },
  {
    id: 46, tipo: 'infografico',
    q: '🔬 Um infográfico combina com "investigações e descobertas" porque...',
    alternativas: [
      { texto: 'Resume os resultados da pesquisa de forma rápida', correta: true, explicacao: 'Isso! Pesquisou, descobriu... o infográfico MOSTRA o resultado! 🔬' },
      { texto: 'Esconde os resultados', correta: false, explicacao: 'Pelo contrário: MOSTRA os resultados rapidinho! 🔬' },
      { texto: 'Substitui a pesquisa', correta: false, explicacao: 'Não substitui! RESUME o que a pesquisa achou! 🔬' }
    ]
  },
  {
    id: 47, tipo: 'infografico',
    q: '🤔 Qual é um BOM infográfico?',
    alternativas: [
      { texto: 'O que se entende batendo o olho', correta: true, explicacao: 'Isso! Rápido + claro = infográfico bom! 🤔' },
      { texto: 'O que precisa de 10 minutos para entender', correta: false, explicacao: '10 minutos = mal feito! Bom se entende BATENDO O OLHO! 🤔' },
      { texto: 'O que não tem título', correta: false, explicacao: 'Sem título ninguém sabe o assunto! Bom TEM título! 🤔' }
    ]
  },
  {
    id: 48, tipo: 'infografico',
    q: '📈 "60% da turma prefere gibi de aventura." Essa frase num infográfico mostra...',
    alternativas: [
      { texto: 'O resultado de uma pesquisa', correta: true, explicacao: 'Isso! Número + % = resultado de pesquisa! 📈' },
      { texto: 'Uma opinião inventada', correta: false, explicacao: 'Com % e pesquisa, é RESULTADO, não invenção! 📈' },
      { texto: 'O título do infográfico', correta: false, explicacao: 'Título diz o assunto. Número com % = RESULTADO! 📈' }
    ]
  },
  {
    id: 49, tipo: 'infografico',
    q: '📋 Qual elemento NÃO combina com infográfico?',
    alternativas: [
      { texto: 'Um textão de 3 páginas sem imagens', correta: true, explicacao: 'Isso! Textão sem imagem = artigo, NÃO infográfico! 📋' },
      { texto: 'Um gráfico de barras colorido', correta: false, explicacao: 'Gráfico colorido COMBINA! O estranho é o textão! 📋' },
      { texto: 'Ícones e números grandes', correta: false, explicacao: 'Ícones e números COMBINAM! O estranho é o textão! 📋' }
    ]
  },
  {
    id: 50, tipo: 'infografico',
    q: '🏷️ O TÍTULO do infográfico deve...',
    alternativas: [
      { texto: 'Dizer o assunto de cara', correta: true, explicacao: 'Isso! Título = "sobre O QUE é isso?" em poucas palavras! 🏷️' },
      { texto: 'Ser um mistério sem sentido', correta: false, explicacao: 'Mistério confunde! Título DIZ o assunto! 🏷️' },
      { texto: 'Ficar escondido no final', correta: false, explicacao: 'Título fica NO TOPO, bem visível! 🏷️' }
    ]
  },
  // ===== PALAVRAS COM -AGEM (51-60) =====
  {
    id: 51, tipo: 'agem',
    q: '🧳 "Boa VIAGEM!" — a palavra VIAGEM com G é...',
    alternativas: [
      { texto: 'Um substantivo (o passeio)', correta: true, explicacao: 'Isso! ViaGEM com G = SUBSTANTIVO (o passeio)! 🧳' },
      { texto: 'Um verbo', correta: false, explicacao: 'Verbo seria viaJEM com J! ViaGEM com G = substantivo! 🧳' },
      { texto: 'Um adjetivo', correta: false, explicacao: 'Adjetivo qualifica. ViaGEM com G = SUBSTANTIVO (o passeio)! 🧳' }
    ]
  },
  {
    id: 52, tipo: 'agem',
    q: '✈️ "Espero que eles VIAJEM bem!" — VIAJEM com J é...',
    alternativas: [
      { texto: 'O verbo viajar', correta: true, explicacao: 'Isso! ViaJEM com J = VERBO (eles viajem = eles viaJAR)! ✈️' },
      { texto: 'O substantivo passeio', correta: false, explicacao: 'Substantivo seria viaGEM com G! ViaJEM com J = verbo! ✈️' },
      { texto: 'Um nome de cidade', correta: false, explicacao: 'Não é cidade! ViaJEM com J = VERBO viajar! ✈️' }
    ]
  },
  {
    id: 53, tipo: 'agem',
    q: '🦁 CORAGEM significa...',
    alternativas: [
      { texto: 'Bravura, ser corajoso', correta: true, explicacao: 'Isso! Ter corAGEM = ter bravura! 🦁' },
      { texto: 'Medo de tudo', correta: false, explicacao: 'Medo é o CONTRÁRIO! Coragem = BRAVURA! 🦁' },
      { texto: 'Um tipo de carro', correta: false, explicacao: 'Não é carro! Coragem = BRAVURA! 🦁' }
    ]
  },
  {
    id: 54, tipo: 'agem',
    q: '🏞️ PAISAGEM é...',
    alternativas: [
      { texto: 'Tudo o que se vê num lugar (a vista)', correta: true, explicacao: 'Isso! Montanhas, rio, árvores juntos = PAISAGEM! 🏞️' },
      { texto: 'Uma página do livro', correta: false, explicacao: 'Página é de papel! Paisagem = a VISTA! 🏞️' },
      { texto: 'Um país distante', correta: false, explicacao: 'País é nação! Paisagem = a VISTA do lugar! 🏞️' }
    ]
  },
  {
    id: 55, tipo: 'agem',
    q: '🚗 GARAGEM é...',
    alternativas: [
      { texto: 'O lugar onde se guarda o carro', correta: true, explicacao: 'Isso! Lugar de guardar = garAGEM! 🚗' },
      { texto: 'Uma viagem longa', correta: false, explicacao: 'Viagem é passeio! Garagem = LUGAR do carro! 🚗' },
      { texto: 'O motor do carro', correta: false, explicacao: 'Motor é peça! Garagem = o LUGAR! 🚗' }
    ]
  },
  {
    id: 56, tipo: 'agem',
    q: '💌 MENSAGEM é...',
    alternativas: [
      { texto: 'O recado que se envia', correta: true, explicacao: 'Isso! MensAGEM = o recado (bilhete, zap, carta)! 💌' },
      { texto: 'Uma massagem', correta: false, explicacao: 'Massagem é com SS e é no corpo! Mensagem = RECADO! 💌' },
      { texto: 'Uma mentira', correta: false, explicacao: 'Mentira engana! Mensagem = RECADO! 💌' }
    ]
  },
  {
    id: 57, tipo: 'agem',
    q: '📚 APRENDIZAGEM significa...',
    alternativas: [
      { texto: 'O aprendizado (o que se aprendeu)', correta: true, explicacao: 'Isso! Aprender virou substantivo: a APRENDIZAGEM! 📚' },
      { texto: 'Uma prova difícil', correta: false, explicacao: 'Prova testa. Aprendizagem = o APRENDIZADO! 📚' },
      { texto: 'Esquecer tudo', correta: false, explicacao: 'Esquecer é o contrário! Aprendizagem = APRENDIZADO! 📚' }
    ]
  },
  {
    id: 58, tipo: 'agem',
    q: '✍️ Palavras terminadas em -AGEM são sempre escritas com...',
    alternativas: [
      { texto: 'G (viagem, coragem, garagem)', correta: true, explicacao: 'Isso! -AGEM sempre com G! O J aparece no VERBO (viajem)! ✍️' },
      { texto: 'J (viajem, corajem)', correta: false, explicacao: 'Com J só o VERBO (eles viaJEM)! Substantivo = G! ✍️' },
      { texto: 'X (viaxem, coraxem)', correta: false, explicacao: 'Com X nunca! Substantivo = G! ✍️' }
    ]
  },
  {
    id: 59, tipo: 'agem',
    q: '🎫 PASSAGEM pode significar...',
    alternativas: [
      { texto: 'O bilhete (de ônibus) ou a travessia', correta: true, explicacao: 'Isso! Passagem = bilhete OU ato de passar. Dois sentidos! 🎫' },
      { texto: 'Apenas um pássaro', correta: false, explicacao: 'Pássaro é bicho! Passagem = BILHETE ou travessia! 🎫' },
      { texto: 'Apenas passeio no parque', correta: false, explicacao: 'Passeio seria "passeio"! Passagem = BILHETE ou travessia! 🎫' }
    ]
  },
  {
    id: 60, tipo: 'agem',
    q: '🟤 FERRUGEM é...',
    alternativas: [
      { texto: 'O enferrujado que aparece no metal', correta: true, explicacao: 'Isso! Aquele marrom no portão velho = FERRUGEM! 🟤' },
      { texto: 'Um tipo de ferramenta', correta: false, explicacao: 'Ferramenta é martelo, chave... Ferrugem = o ENFERRUJADO! 🟤' },
      { texto: 'Uma flor do jardim', correta: false, explicacao: 'Flor é planta! Ferrugem = o marrom do metal velho! 🟤' }
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

// ===== JOGO RUSH DE PALAVRAS =====
const bancoJogo = [
  { dica: '💥 O vaso caiu! Que som?', palavra: 'BUM!' },
  { dica: '💦 Mergulho na piscina!', palavra: 'SPLASH!' },
  { dica: '😴 Bebê dormindo...', palavra: 'Zzz...' },
  { dica: '🚪 Visita na porta!', palavra: 'TOC-TOC!' },
  { dica: '🐱 Gatinho com fome!', palavra: 'MIAU!' },
  { dica: '🏎️ Motor do carro!', palavra: 'VRUM!' },
  { dica: '🍰 Bolo gostoso, comendo!', palavra: 'NHAM-NHAM!' },
  { dica: '👏 Show acabou, palmas!', palavra: 'CLAP-CLAP!' },
  { dica: '🥭 Fruta docinha OU parte da camisa?', palavra: 'manga' },
  { dica: '🪑 Sentar na praça OU guardar dinheiro?', palavra: 'banco' },
  { dica: '🕯️ Do bolo OU do barco?', palavra: 'vela' },
  { dica: '😢 "Que ... que perdeu!" (dó)', palavra: 'pena' },
  { dica: '🧵 Do vestido OU fila do recreio?', palavra: 'linha' },
  { dica: '🥅 Do gol OU de balanço?', palavra: 'rede' },
  { dica: '🧳 "Boa ...!" (o passeio, com G)', palavra: 'viagem' },
  { dica: '🦁 Bravura, ser corajoso!', palavra: 'coragem' },
  { dica: '🏞️ A vista do lugar!', palavra: 'paisagem' },
  { dica: '🚗 Lugar de guardar o carro!', palavra: 'garagem' },
  { dica: '💌 O recado enviado!', palavra: 'mensagem' },
  { dica: '📚 O aprendizado!', palavra: 'aprendizagem' }
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
