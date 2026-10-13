const bancoQuestoes = [
  // ===== SPORTS & GAMES VOCABULARY (1-15) =====
  {
    id: 1, tipo: 'sports_vocab',
    q: '⚽ A palavra "soccer" significa...',
    alternativas: [
      { texto: 'Futebol', correta: true, explicacao: '"Soccer" é futebol! Nos EUA se diz soccer, na Inglaterra se diz football. É o mesmo jogo! ⚽' },
      { texto: 'Basquete', correta: false, explicacao: 'Basquete é "basketball". "Soccer" é futebol! ⚽' },
      { texto: 'Natação', correta: false, explicacao: 'Natação é "swimming". "Soccer" é futebol! ⚽' }
    ]
  },
  {
    id: 2, tipo: 'sports_vocab',
    q: '🏀 "Basketball" é...',
    alternativas: [
      { texto: 'Basquete', correta: true, explicacao: 'Isso! Basket = cesta + ball = bola. Basquete é o jogo de jogar a bola na cesta! 🏀' },
      { texto: 'Vôlei', correta: false, explicacao: 'Vôlei é "volleyball". "Basketball" é basquete! 🏀' },
      { texto: 'Tênis', correta: false, explicacao: 'Tênis é "tennis". "Basketball" é basquete! 🏀' }
    ]
  },
  {
    id: 3, tipo: 'sports_vocab',
    q: '🙈 "Hide-and-seek" é a brincadeira...',
    alternativas: [
      { texto: 'Esconde-esconde', correta: true, explicacao: 'Perfeito! Hide = esconder + seek = procurar. Um esconde, o outro procura! 🙈' },
      { texto: 'Pega-pega', correta: false, explicacao: 'Pega-pega é "tag". "Hide-and-seek" é esconde-esconde! 🙈' },
      { texto: 'Queimada', correta: false, explicacao: 'Queimada é "dodgeball". "Hide-and-seek" é esconde-esconde! 🙈' }
    ]
  },
  {
    id: 4, tipo: 'sports_vocab',
    q: '🏷️ "Tag" é a brincadeira...',
    alternativas: [
      { texto: 'Pega-pega', correta: true, explicacao: 'Isso! No tag, one player is "it" (o pegador) e tenta tocar os outros. Pega-pega! 🏷️' },
      { texto: 'Esconde-esconde', correta: false, explicacao: 'Esconde-esconde é "hide-and-seek". "Tag" é pega-pega! 🏷️' },
      { texto: 'Pular corda', correta: false, explicacao: 'Pular corda é "jump rope". "Tag" é pega-pega! 🏷️' }
    ]
  },
  {
    id: 5, tipo: 'sports_vocab',
    q: '🎲 "Board game" significa...',
    alternativas: [
      { texto: 'Jogo de tabuleiro', correta: true, explicacao: 'Isso! Board = tabuleiro + game = jogo. Ex.: Banco Imobiliário, Jogo da Vida! 🎲' },
      { texto: 'Jogo de bola', correta: false, explicacao: 'Jogo de bola seria "ball game". "Board game" é jogo de tabuleiro! 🎲' },
      { texto: 'Videogame', correta: false, explicacao: 'Videogame é "video game". "Board game" é jogo de tabuleiro! 🎲' }
    ]
  },
  {
    id: 6, tipo: 'sports_vocab',
    q: '🎾 Qual esporte usa RACKET (raquete)?',
    alternativas: [
      { texto: 'Tennis', correta: true, explicacao: 'Isso! No tennis você usa a racket para HIT (rebater) a bola por cima da rede! 🎾' },
      { texto: 'Soccer', correta: false, explicacao: 'No soccer se usa o pé (foot), não raquete. Tennis usa racket! 🎾' },
      { texto: 'Swimming', correta: false, explicacao: 'Swimming é na água, sem raquete. Tennis usa racket! 🎾' }
    ]
  },
  {
    id: 7, tipo: 'sports_vocab',
    q: '🏊 Onde acontece o "swimming"?',
    alternativas: [
      { texto: 'In the pool (na piscina)', correta: true, explicacao: 'Isso! Swimming = natação, e a gente nada in the pool (na piscina)! 🏊' },
      { texto: 'On the field (no campo)', correta: false, explicacao: 'On the field é onde se joga soccer. Swimming é in the pool! 🏊' },
      { texto: 'On the court (na quadra)', correta: false, explicacao: 'On the court é a quadra do basketball/tennis. Swimming é in the pool! 🏊' }
    ]
  },
  {
    id: 8, tipo: 'sports_vocab',
    q: '🪢 "Jump rope" é...',
    alternativas: [
      { texto: 'Pular corda', correta: true, explicacao: 'Isso! Jump = pular + rope = corda. Pular corda! 🪢' },
      { texto: 'Subir na árvore', correta: false, explicacao: 'Subir seria "climb". "Jump rope" é pular corda! 🪢' },
      { texto: 'Soltar pipa', correta: false, explicacao: 'Pipa é "kite". "Jump rope" é pular corda! 🪢' }
    ]
  },
  {
    id: 9, tipo: 'sports_vocab',
    q: '⛹️ "Dodgeball" é o jogo brasileiro...',
    alternativas: [
      { texto: 'Queimada', correta: true, explicacao: 'Isso! Dodge = desviar + ball = bola. Na queimada você desvia da bola! ⛹️' },
      { texto: 'Pega-pega', correta: false, explicacao: 'Pega-pega é "tag". "Dodgeball" é queimada! ⛹️' },
      { texto: 'Amarelinha', correta: false, explicacao: 'Amarelinha é "hopscotch". "Dodgeball" é queimada! ⛹️' }
    ]
  },
  {
    id: 10, tipo: 'sports_vocab',
    q: '🧑‍🤝‍🧑 A palavra "player" significa...',
    alternativas: [
      { texto: 'Jogador / jogadora', correta: true, explicacao: 'Isso! O player é quem joga. Play = jogar, player = jogador! 🧑‍🤝‍🧑' },
      { texto: 'Juiz / árbitra', correta: false, explicacao: 'Juiz é "referee". "Player" é o jogador! 🧑‍🤝‍🧑' },
      { texto: 'Torcedor', correta: false, explicacao: 'Torcedor é "fan". "Player" é o jogador! 🧑‍🤝‍🧑' }
    ]
  },
  {
    id: 11, tipo: 'sports_vocab',
    q: '🏆 "Winner" é...',
    alternativas: [
      { texto: 'O vencedor / a vencedora', correta: true, explicacao: 'Isso! To win = vencer, winner = vencedor. Quem ganha o jogo! 🏆' },
      { texto: 'O perdedor', correta: false, explicacao: 'Perdedor é "loser". "Winner" é o vencedor! 🏆' },
      { texto: 'O time', correta: false, explicacao: 'Time é "team". "Winner" é o vencedor! 🏆' }
    ]
  },
  {
    id: 12, tipo: 'sports_vocab',
    q: '👥 "Team" significa...',
    alternativas: [
      { texto: 'Time / equipe', correta: true, explicacao: 'Isso! Um team joga junto: soccer team, basketball team! 👥' },
      { texto: 'Jogo', correta: false, explicacao: 'Jogo é "game". "Team" é o time! 👥' },
      { texto: 'Regra', correta: false, explicacao: 'Regra é "rule". "Team" é o time! 👥' }
    ]
  },
  {
    id: 13, tipo: 'sports_vocab',
    q: '🪁 "Kite" é...',
    alternativas: [
      { texto: 'Pipa / papagaio', correta: true, explicacao: 'Isso! Soltar pipa = to fly a kite. Ela voa no céu! 🪁' },
      { texto: 'Bola', correta: false, explicacao: 'Bola é "ball". "Kite" é pipa! 🪁' },
      { texto: 'Corda', correta: false, explicacao: 'Corda é "rope". "Kite" é pipa! 🪁' }
    ]
  },
  {
    id: 14, tipo: 'sports_vocab',
    q: '🤔 Qual destes é um SPORT (esporte com exercício e competição)?',
    alternativas: [
      { texto: 'Soccer', correta: true, explicacao: 'Isso! Soccer tem corrida, chute e competição = SPORT! ⚽' },
      { texto: 'Board game', correta: false, explicacao: 'Board game é um GAME (jogo), mas não é SPORT porque não tem exercício físico! 🎲' },
      { texto: 'Hide-and-seek', correta: false, explicacao: 'Hide-and-seek é um GAME divertido, mas o exemplo clássico de SPORT aqui é o soccer! 🙈' }
    ]
  },
  {
    id: 15, tipo: 'sports_vocab',
    q: '🔴 "Ball" significa...',
    alternativas: [
      { texto: 'Bola', correta: true, explicacao: 'Isso! Soccer ball, basketball, volleyball — tudo tem BALL = bola! 🔴' },
      { texto: 'Balão', correta: false, explicacao: 'Balão é "balloon". "Ball" é bola! 🔴' },
      { texto: 'Bala (doce)', correta: false, explicacao: 'Bala doce é "candy". "Ball" é bola! 🔴' }
    ]
  },
  // ===== ACTION VERBS (16-30) =====
  {
    id: 16, tipo: 'action_verbs',
    q: '🦵 "Kick" significa...',
    alternativas: [
      { texto: 'Chutar (com o pé)', correta: true, explicacao: 'Isso! Kick = chutar. Kick the ball = chute a bola! Sempre com o FOOT (pé)! 🦵' },
      { texto: 'Pegar com a mão', correta: false, explicacao: 'Pegar é "catch". "Kick" é chutar com o pé! 🦵' },
      { texto: 'Correr', correta: false, explicacao: 'Correr é "run". "Kick" é chutar! 🦵' }
    ]
  },
  {
    id: 17, tipo: 'action_verbs',
    q: '🧤 "Catch" significa...',
    alternativas: [
      { texto: 'Pegar / agarrar (a bola que vem)', correta: true, explicacao: 'Isso! Catch the ball = pegue a bola! É o contrário de throw! 🧤' },
      { texto: 'Jogar para longe', correta: false, explicacao: 'Jogar para longe é "throw". "Catch" é pegar! 🧤' },
      { texto: 'Chutar', correta: false, explicacao: 'Chutar é "kick". "Catch" é pegar com a mão! 🧤' }
    ]
  },
  {
    id: 18, tipo: 'action_verbs',
    q: '🤾 "Throw" significa...',
    alternativas: [
      { texto: 'Jogar / arremessar para longe', correta: true, explicacao: 'Isso! Throw the ball = jogue a bola! O contrário de catch! 🤾' },
      { texto: 'Pegar', correta: false, explicacao: 'Pegar é "catch". "Throw" é jogar/arremessar! 🤾' },
      { texto: 'Quicar', correta: false, explicacao: 'Quicar é "bounce". "Throw" é arremessar! 🤾' }
    ]
  },
  {
    id: 19, tipo: 'action_verbs',
    q: '🏏 Para HIT (rebater) a bola no tennis, você usa...',
    alternativas: [
      { texto: 'A racket (raquete)', correta: true, explicacao: 'Isso! Hit = bater com algo. No tennis, você HIT com a racket! 🏏' },
      { texto: 'O pé', correta: false, explicacao: 'Com o pé é KICK. HIT usa raquete ou taco! 🏏' },
      { texto: 'A cabeça', correta: false, explicacao: 'Cabeçada existe no soccer, mas HIT é rebater com raquete/taco! 🏏' }
    ]
  },
  {
    id: 20, tipo: 'action_verbs',
    q: '🏀 "Bounce the ball" significa...',
    alternativas: [
      { texto: 'Quicar a bola', correta: true, explicacao: 'Isso! No basketball você BOUNCE (quica) a bola no chão! 🏀' },
      { texto: 'Chutar a bola', correta: false, explicacao: 'Chutar é "kick". "Bounce" é quicar! 🏀' },
      { texto: 'Guardar a bola', correta: false, explicacao: 'Guardar seria "keep". "Bounce" é quicar! 🏀' }
    ]
  },
  {
    id: 21, tipo: 'action_verbs',
    q: '🏃 "Run fast!" significa...',
    alternativas: [
      { texto: 'Corra rápido!', correta: true, explicacao: 'Isso! Run = correr, fast = rápido. Run fast! 🏃' },
      { texto: 'Ande devagar!', correta: false, explicacao: 'Andar devagar seria "walk slowly". "Run fast" é corra rápido! 🏃' },
      { texto: 'Pare agora!', correta: false, explicacao: 'Pare seria "stop". "Run fast" é corra rápido! 🏃' }
    ]
  },
  {
    id: 22, tipo: 'action_verbs',
    q: '🐇 "Jump high!" significa...',
    alternativas: [
      { texto: 'Pule alto!', correta: true, explicacao: 'Isso! Jump = pular, high = alto. Jump high! 🐇' },
      { texto: 'Sente-se!', correta: false, explicacao: 'Sentar é "sit". "Jump high" é pule alto! 🐇' },
      { texto: 'Nade fundo!', correta: false, explicacao: 'Nadar é "swim". "Jump high" é pule alto! 🐇' }
    ]
  },
  {
    id: 23, tipo: 'action_verbs',
    q: '🏊 "Swim" significa...',
    alternativas: [
      { texto: 'Nadar', correta: true, explicacao: 'Isso! Swim to the wall = nade até a borda! 🏊' },
      { texto: 'Correr', correta: false, explicacao: 'Correr é "run". "Swim" é nadar! 🏊' },
      { texto: 'Voar', correta: false, explicacao: 'Voar é "fly". "Swim" é nadar! 🏊' }
    ]
  },
  {
    id: 24, tipo: 'action_verbs',
    q: '↔️ "Pass to your friend!" significa...',
    alternativas: [
      { texto: 'Passe para o seu amigo!', correta: true, explicacao: 'Isso! Pass = passar. No jogo em equipe, pass to your friend! ↔️' },
      { texto: 'Empurre seu amigo!', correta: false, explicacao: 'Empurrar é "push" (e é proibido!). "Pass" é passar! ↔️' },
      { texto: 'Corra do seu amigo!', correta: false, explicacao: 'Correr é "run". "Pass" é passar a bola! ↔️' }
    ]
  },
  {
    id: 25, tipo: 'action_verbs',
    q: '🥅 "Score a goal!" significa...',
    alternativas: [
      { texto: 'Marque um gol!', correta: true, explicacao: 'Isso! Score = marcar ponto, goal = gol. Score a goal! 🥅' },
      { texto: 'Guarde a bola!', correta: false, explicacao: 'Guardar seria "keep". "Score a goal" é marcar um gol! 🥅' },
      { texto: 'Apite o jogo!', correta: false, explicacao: 'Apitar seria do referee. "Score a goal" é marcar um gol! 🥅' }
    ]
  },
  {
    id: 26, tipo: 'action_verbs',
    q: '👆 "Touch" significa...',
    alternativas: [
      { texto: 'Tocar', correta: true, explicacao: 'Isso! No tag, "it" tries to TOUCH someone — tenta tocar alguém! 👆' },
      { texto: 'Olhar', correta: false, explicacao: 'Olhar é "look". "Touch" é tocar! 👆' },
      { texto: 'Gritar', correta: false, explicacao: 'Gritar é "shout". "Touch" é tocar! 👆' }
    ]
  },
  {
    id: 27, tipo: 'action_verbs',
    q: '🙈 "Hide" significa...',
    alternativas: [
      { texto: 'Esconder', correta: true, explicacao: 'Isso! Hide-and-seek = esconder e procurar. Hide and wait = esconda-se e espere! 🙈' },
      { texto: 'Procurar', correta: false, explicacao: 'Procurar é "seek". "Hide" é esconder! 🙈' },
      { texto: 'Correr', correta: false, explicacao: 'Correr é "run". "Hide" é esconder! 🙈' }
    ]
  },
  {
    id: 28, tipo: 'action_verbs',
    q: '🦵 Para KICK the ball, qual parte do corpo você usa?',
    alternativas: [
      { texto: 'The foot (o pé)', correta: true, explicacao: 'Isso! Kick é sempre com o FOOT (pé)! 🦵' },
      { texto: 'The hand (a mão)', correta: false, explicacao: 'Com a mão é CATCH ou THROW. KICK é com o pé! 🦵' },
      { texto: 'The head (a cabeça)', correta: false, explicacao: 'Cabeça é "head". KICK é com o pé! 🦵' }
    ]
  },
  {
    id: 29, tipo: 'action_verbs',
    q: '🤔 Qual é a diferença entre THROW e CATCH?',
    alternativas: [
      { texto: 'Throw joga a bola para longe; catch pega a bola que vem', correta: true, explicacao: 'Perfeito! São opostos: throw = mandar, catch = receber! 🤾🧤' },
      { texto: 'São a mesma coisa', correta: false, explicacao: 'Não! Throw manda a bola para longe, catch pega a bola que vem! 🤾🧤' },
      { texto: 'Throw é com o pé; catch é com a cabeça', correta: false, explicacao: 'Os dois são com as mãos! Throw joga, catch pega! 🤾🧤' }
    ]
  },
  {
    id: 30, tipo: 'action_verbs',
    q: '🪢 Para pular corda (jump rope), o verbo principal é...',
    alternativas: [
      { texto: 'Jump', correta: true, explicacao: 'Isso! Jump rope = pular + corda. O verbo é JUMP! 🪢' },
      { texto: 'Swim', correta: false, explicacao: 'Swim é nadar. Para corda, o verbo é JUMP! 🪢' },
      { texto: 'Kick', correta: false, explicacao: 'Kick é chutar. Para corda, o verbo é JUMP! 🪢' }
    ]
  },
  // ===== HOW TO...? TUTORIAL LANGUAGE (31-45) =====
  {
    id: 31, tipo: 'how_to',
    q: '1️⃣ "First" significa...',
    alternativas: [
      { texto: 'Primeiro', correta: true, explicacao: '"First" é sempre o passo 1 do tutorial! First, choose one player! 1️⃣' },
      { texto: 'Por fim', correta: false, explicacao: 'Por fim é "finally". "First" é primeiro! 1️⃣' },
      { texto: 'Depois', correta: false, explicacao: 'Depois é "then". "First" é primeiro! 1️⃣' }
    ]
  },
  {
    id: 32, tipo: 'how_to',
    q: '🏁 "Finally" significa...',
    alternativas: [
      { texto: 'Por fim / finalmente (o ÚLTIMO passo)', correta: true, explicacao: 'Isso! Finally é sempre o ÚLTIMO passo do tutorial! 🏁' },
      { texto: 'Primeiro', correta: false, explicacao: 'Primeiro é "first". "Finally" é o último passo! 🏁' },
      { texto: 'No meio', correta: false, explicacao: 'No meio usamos "then/next". "Finally" é o último! 🏁' }
    ]
  },
  {
    id: 33, tipo: 'how_to',
    q: '➡️ "Then" significa...',
    alternativas: [
      { texto: 'Então / depois (passo do meio)', correta: true, explicacao: 'Isso! Then liga um passo ao outro no meio do tutorial! ➡️' },
      { texto: 'Primeiro', correta: false, explicacao: 'Primeiro é "first". "Then" é então/depois! ➡️' },
      { texto: 'Por fim', correta: false, explicacao: 'Por fim é "finally". "Then" é então/depois! ➡️' }
    ]
  },
  {
    id: 34, tipo: 'how_to',
    q: '📋 Qual frase é o PASSO 1 de um tutorial?',
    alternativas: [
      { texto: 'First, choose one player to be "it".', correta: true, explicacao: 'Isso! Começa com FIRST = passo 1! 📋' },
      { texto: 'Finally, the touched player becomes "it".', correta: false, explicacao: 'FINALLY é o ÚLTIMO passo, não o primeiro! 📋' },
      { texto: 'Next, "it" tries to touch someone.', correta: false, explicacao: 'NEXT é passo do meio. O passo 1 começa com FIRST! 📋' }
    ]
  },
  {
    id: 35, tipo: 'how_to',
    q: '❓ "How do you play tag?" significa...',
    alternativas: [
      { texto: 'Como se joga pega-pega?', correta: true, explicacao: 'Isso! How do you play...? = Como se joga...? ❓' },
      { texto: 'Você gosta de pega-pega?', correta: false, explicacao: 'Gostar seria "do you like...?". "How do you play" pergunta COMO se joga! ❓' },
      { texto: 'Onde fica o pega-pega?', correta: false, explicacao: 'Onde seria "where". "How do you play" pergunta COMO se joga! ❓' }
    ]
  },
  {
    id: 36, tipo: 'how_to',
    q: '🙋 "Let me show you!" significa...',
    alternativas: [
      { texto: 'Deixa eu te mostrar!', correta: true, explicacao: 'Isso! Quando alguém não entende o jogo, você diz: Let me show you! 🙋' },
      { texto: 'Deixa eu ver!', correta: false, explicacao: 'Ver seria "let me see". "Let me SHOW you" é deixa eu te MOSTRAR! 🙋' },
      { texto: 'Vamos embora!', correta: false, explicacao: 'Embora seria "let\'s go". "Let me show you" é deixa eu te mostrar! 🙋' }
    ]
  },
  {
    id: 37, tipo: 'how_to',
    q: '📋 "First, choose one player to be it. ___, the others run away." Qual palavra completa?',
    alternativas: [
      { texto: 'Then', correta: true, explicacao: 'Isso! Passo 1 = First, passo 2 = THEN! 📋' },
      { texto: 'Finally', correta: false, explicacao: 'Finally é o ÚLTIMO passo. Aqui é o passo 2 = THEN! 📋' },
      { texto: 'First', correta: false, explicacao: 'First já foi usado no passo 1. Aqui é o passo 2 = THEN! 📋' }
    ]
  },
  {
    id: 38, tipo: 'how_to',
    q: '🏁 Qual palavra TERMINA um tutorial?',
    alternativas: [
      { texto: 'Finally', correta: true, explicacao: 'Isso! Finally = por fim, sempre o ÚLTIMO passo! 🏁' },
      { texto: 'First', correta: false, explicacao: 'First COMEÇA o tutorial. Quem termina é FINALLY! 🏁' },
      { texto: 'Then', correta: false, explicacao: 'Then fica no MEIO. Quem termina é FINALLY! 🏁' }
    ]
  },
  {
    id: 39, tipo: 'how_to',
    q: '1️⃣ "___ choose one player to be it." (passo 1)',
    alternativas: [
      { texto: 'First,', correta: true, explicacao: 'Isso! Passo 1 sempre começa com FIRST! 1️⃣' },
      { texto: 'Finally,', correta: false, explicacao: 'Finally é o último passo. Passo 1 = FIRST! 1️⃣' },
      { texto: 'Yesterday,', correta: false, explicacao: 'Yesterday = ontem, não é palavra de tutorial. Passo 1 = FIRST! 1️⃣' }
    ]
  },
  {
    id: 40, tipo: 'how_to',
    q: '🎉 "___ the touched player becomes it!" (último passo)',
    alternativas: [
      { texto: 'Finally,', correta: true, explicacao: 'Isso! Último passo = FINALLY! 🎉' },
      { texto: 'First,', correta: false, explicacao: 'First é o PRIMEIRO passo. Último passo = FINALLY! 🎉' },
      { texto: 'Never,', correta: false, explicacao: 'Never = nunca. Último passo = FINALLY! 🎉' }
    ]
  },
  {
    id: 41, tipo: 'how_to',
    q: '⏭️ "Next" significa...',
    alternativas: [
      { texto: 'Em seguida (passo do meio)', correta: true, explicacao: 'Isso! Next é primo do Then: os dois ficam no MEIO do tutorial! ⏭️' },
      { texto: 'Primeiro', correta: false, explicacao: 'Primeiro é "first". "Next" é em seguida! ⏭️' },
      { texto: 'Nunca', correta: false, explicacao: 'Nunca é "never". "Next" é em seguida! ⏭️' }
    ]
  },
  {
    id: 42, tipo: 'how_to',
    q: '📖 "How can you teach people how to play a game?" Essa pergunta quer saber...',
    alternativas: [
      { texto: 'Como ensinar as pessoas a jogar um jogo', correta: true, explicacao: 'Isso! É o título da Mission 5: como EXPLICAR um jogo para alguém! 📖' },
      { texto: 'Qual jogo é o mais divertido', correta: false, explicacao: 'A pergunta não é sobre o jogo mais divertido, e sim COMO ENSINAR um jogo! 📖' },
      { texto: 'Quem ganhou o jogo', correta: false, explicacao: 'Quem ganhou seria "who won". A pergunta é COMO ENSINAR o jogo! 📖' }
    ]
  },
  {
    id: 43, tipo: 'how_to',
    q: '📋 Coloque em ordem: (1) Finally, celebrate! (2) First, make two teams. (3) Then, play the game. A ordem certa é...',
    alternativas: [
      { texto: '2 → 3 → 1 (First → Then → Finally)', correta: true, explicacao: 'Perfeito! First abre, Then continua, Finally fecha! 📋' },
      { texto: '1 → 2 → 3', correta: false, explicacao: 'Finally não pode ser o primeiro! Ordem: First → Then → Finally! 📋' },
      { texto: '3 → 1 → 2', correta: false, explicacao: 'Then não abre tutorial! Ordem: First → Then → Finally! 📋' }
    ]
  },
  {
    id: 44, tipo: 'how_to',
    q: '⏭️ "Next, it tries to touch someone." A palavra NEXT mostra que esse passo é...',
    alternativas: [
      { texto: 'Um passo do meio do tutorial', correta: true, explicacao: 'Isso! Next/Then = meio. First = começo, Finally = fim! ⏭️' },
      { texto: 'O primeiro passo', correta: false, explicacao: 'O primeiro usa FIRST. NEXT é passo do meio! ⏭️' },
      { texto: 'O último passo', correta: false, explicacao: 'O último usa FINALLY. NEXT é passo do meio! ⏭️' }
    ]
  },
  {
    id: 45, tipo: 'how_to',
    q: '🌟 Um bom tutorial "How to play" precisa ter...',
    alternativas: [
      { texto: 'Os passos em ordem (First → Then → Next → Finally)', correta: true, explicacao: 'Isso! Tutorial bom = passos em ORDEM com as palavras mágicas! 🌟' },
      { texto: 'Só o nome do jogo, sem explicar nada', correta: false, explicacao: 'Só o nome não ensina! Precisa dos passos em ordem! 🌟' },
      { texto: 'Os passos todos misturados', correta: false, explicacao: 'Misturado ninguém entende! Precisa de ordem: First → Then → Finally! 🌟' }
    ]
  },
  // ===== IMPERATIVE DO / DON'T (46-60) =====
  {
    id: 46, tipo: 'imperative',
    q: '📢 "Kick the ball!" é...',
    alternativas: [
      { texto: 'Uma ordem (imperativo afirmativo)', correta: true, explicacao: 'Isso! Verbo no começo + ! = ordem. Kick the ball! 📢' },
      { texto: 'Uma pergunta', correta: false, explicacao: 'Pergunta termina com "?". Com "!" e verbo no começo, é ORDEM! 📢' },
      { texto: 'Uma resposta', correta: false, explicacao: 'Não é resposta! É uma ORDEM: faça isso! 📢' }
    ]
  },
  {
    id: 47, tipo: 'imperative',
    q: '🚫 "Don\'t touch the ball!" significa...',
    alternativas: [
      { texto: 'Não toque na bola!', correta: true, explicacao: "Isso! DON'T = não faça. Don't touch = não toque! 🚫" },
      { texto: 'Toque na bola!', correta: false, explicacao: "Toque seria sem o n't: Touch the ball! Com DON'T é PROIBIDO! 🚫" },
      { texto: 'Pegue a bola!', correta: false, explicacao: "Pegar seria Catch! E com DON'T é proibição: NÃO toque! 🚫" }
    ]
  },
  {
    id: 48, tipo: 'imperative',
    q: '🦵 "___ the ball!" (ordem para chutar)',
    alternativas: [
      { texto: 'Kick', correta: true, explicacao: 'Isso! Ordem afirmativa = VERBO no começo: KICK the ball! 🦵' },
      { texto: "Don't kick", correta: false, explicacao: "Don't kick seria PROIBIR o chute. Para MANDAR chutar: KICK the ball! 🦵" },
      { texto: 'Kicks', correta: false, explicacao: 'No imperativo o verbo fica normal, sem -s! É KICK the ball! 🦵' }
    ]
  },
  {
    id: 49, tipo: 'imperative',
    q: '🤝 "___ push your friend!" (regra: não empurre)',
    alternativas: [
      { texto: "Don't", correta: true, explicacao: "Isso! Para PROIBIR: DON'T + verbo. Don't push your friend! 🤝" },
      { texto: 'Do', correta: false, explicacao: '"Do push" mandaria empurrar! Para proibir: DON\'T push! 🤝' },
      { texto: 'Not', correta: false, explicacao: 'Sozinho "not" não funciona. A proibição é DON\'T + verbo! 🤝' }
    ]
  },
  {
    id: 50, tipo: 'imperative',
    q: '📏 Depois de DON\'T, o verbo fica...',
    alternativas: [
      { texto: 'Normal, sem -s e sem -ing (Don\'t touch)', correta: true, explicacao: "Perfeito! Don't congela o verbo: Don't touch, Don't run, Don't push! 📏" },
      { texto: 'Com -s (Don\'t touches)', correta: false, explicacao: "Nunca! Depois de Don't, SEM -s: Don't TOUCH! 📏" },
      { texto: 'Com -ing (Don\'t touching)', correta: false, explicacao: "Nunca! Depois de Don't, SEM -ing: Don't TOUCH! 📏" }
    ]
  },
  {
    id: 51, tipo: 'imperative',
    q: '❌ "Don\'t touches the ball!" está...',
    alternativas: [
      { texto: 'Errada (o certo é Don\'t TOUCH)', correta: true, explicacao: "Isso! Depois de Don't o verbo fica normal: Don't TOUCH! ❌" },
      { texto: 'Certa', correta: false, explicacao: "Não! Com -s está errado. O certo: Don't TOUCH the ball! ❌" },
      { texto: 'Certa só na Inglaterra', correta: false, explicacao: "Em lugar nenhum! O certo é sempre: Don't TOUCH! ❌" }
    ]
  },
  {
    id: 52, tipo: 'imperative',
    q: '❗ Toda ordem no imperativo termina com...',
    alternativas: [
      { texto: '! (ponto de exclamação)', correta: true, explicacao: 'Isso! Ordem tem energia: Run fast! Kick the ball! ❗' },
      { texto: '? (ponto de interrogação)', correta: false, explicacao: '"?" é de pergunta. Ordem termina com "!"! ❗' },
      { texto: '. (ponto final fraco)', correta: false, explicacao: 'Ordens usam "!" para mostrar energia. Run fast! ❗' }
    ]
  },
  {
    id: 53, tipo: 'imperative',
    q: '⏳ "Wait for your turn!" significa...',
    alternativas: [
      { texto: 'Espere a sua vez!', correta: true, explicacao: 'Isso! Wait = esperar, turn = vez. Regra de ouro dos jogos! ⏳' },
      { texto: 'Corra na sua vez!', correta: false, explicacao: 'Correr seria "run". "Wait for your turn" é espere a sua vez! ⏳' },
      { texto: 'Desista da sua vez!', correta: false, explicacao: 'Desistir seria "give up". "Wait" é esperar! ⏳' }
    ]
  },
  {
    id: 54, tipo: 'imperative',
    q: '😇 "Don\'t cheat!" significa...',
    alternativas: [
      { texto: 'Não trapaceie! (não roube no jogo)', correta: true, explicacao: "Isso! Cheat = trapacear. Don't cheat = jogue limpo! 😇" },
      { texto: 'Pode trapacear!', correta: false, explicacao: "Com DON'T é proibido! Don't cheat = NÃO trapaceie! 😇" },
      { texto: 'Saia do jogo!', correta: false, explicacao: "Sair seria 'leave'. Don't cheat = não trapaceie! 😇" }
    ]
  },
  {
    id: 55, tipo: 'imperative',
    q: '🏷️ Qual é uma boa REGRA para o tag (pega-pega)?',
    alternativas: [
      { texto: "Don't hide outside the playground!", correta: true, explicacao: "Perfeito! Regra com DON'T: não se esconda fora do parquinho! 🏷️" },
      { texto: 'Hide outside the playground!', correta: false, explicacao: 'Isso MANDARIA sair do parquinho — perigoso! A regra certa PROÍBE: DON\'T hide! 🏷️' },
      { texto: 'You hides outside?', correta: false, explicacao: 'Isso nem é imperativo! Regra boa: DON\'T hide outside the playground! 🏷️' }
    ]
  },
  {
    id: 56, tipo: 'imperative',
    q: '📏 A ordem afirmativa (DO) se monta assim...',
    alternativas: [
      { texto: 'Verbo no começo + resto + ! (Kick the ball!)', correta: true, explicacao: 'Isso! Sem "você", sem nada antes: VERBO primeiro! 📏' },
      { texto: 'You + verbo + ! (You kick the ball!)', correta: false, explicacao: 'No imperativo não usamos "you"! É só: KICK the ball! 📏' },
      { texto: 'To + verbo + ! (To kick the ball!)', correta: false, explicacao: '"To kick" é infinitivo. Ordem é direta: KICK the ball! 📏' }
    ]
  },
  {
    id: 57, tipo: 'imperative',
    q: '🏃 Em "Run fast!", o verbo é...',
    alternativas: [
      { texto: 'Run', correta: true, explicacao: 'Isso! RUN é o verbo (a ação). Fast diz COMO correr! 🏃' },
      { texto: 'Fast', correta: false, explicacao: '"Fast" diz como (rápido). O VERBO (ação) é RUN! 🏃' },
      { texto: 'Run fast', correta: false, explicacao: '"Run fast" é a frase toda. O VERBO sozinho é RUN! 🏃' }
    ]
  },
  {
    id: 58, tipo: 'imperative',
    q: '🚫 Em "Don\'t run inside!", o verbo é...',
    alternativas: [
      { texto: 'Run', correta: true, explicacao: "Isso! DON'T é só a proibição. O VERBO é RUN (normal, sem -s)! 🚫" },
      { texto: "Don't", correta: false, explicacao: "\"Don't\" é a proibição (do + not). O VERBO é RUN! 🚫" },
      { texto: 'Inside', correta: false, explicacao: '"Inside" é o lugar (dentro). O VERBO é RUN! 🚫' }
    ]
  },
  {
    id: 59, tipo: 'imperative',
    q: '🤔 Qual frase é uma PROIBIÇÃO (não faça)?',
    alternativas: [
      { texto: "Don't push your friend!", correta: true, explicacao: "Isso! Tem DON'T = proibição! 🤔" },
      { texto: 'Pass to your friend!', correta: false, explicacao: 'Essa é uma ordem PARA FAZER (afirmativa). Proibição tem DON\'T! 🤔' },
      { texto: 'You play tag?', correta: false, explicacao: 'Isso é pergunta. Proibição tem DON\'T! 🤔' }
    ]
  },
  {
    id: 60, tipo: 'imperative',
    q: '👂 A professora diz: "___ quiet and listen!" (ordem para fazer silêncio e ouvir)',
    alternativas: [
      { texto: 'Be', correta: true, explicacao: 'Isso! "Be quiet" = fique quieto. Ordem com o verbo BE: Be quiet and listen! 👂' },
      { texto: "Don't be", correta: false, explicacao: '"Don\'t be quiet" mandaria FAZER BARULHO! A professora quer silêncio: BE quiet! 👂' },
      { texto: 'Are', correta: false, explicacao: '"Are" não começa ordem. O imperativo de ser/estar é BE: Be quiet! 👂' }
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

// ===== JOGO VOCABULARY RUSH =====
const bancoJogo = [
  { dica: '⚽ You kick a ball to score!', palavra: 'soccer' },
  { dica: '🏀 You bounce the ball and shoot!', palavra: 'basketball' },
  { dica: '🏐 You hit the ball over a net!', palavra: 'volleyball' },
  { dica: '🎾 You hit the ball with a racket!', palavra: 'tennis' },
  { dica: '🏊 You do this in the pool!', palavra: 'swimming' },
  { dica: '🏃 You move very fast with your legs!', palavra: 'run' },
  { dica: '🐇 You go up in the air with your legs!', palavra: 'jump' },
  { dica: '🦵 Kick the...!', palavra: 'ball' },
  { dica: '🙈 Hide and... (esconde-esconde)', palavra: 'hide-and-seek' },
  { dica: '🏷️ Run away! It will touch you! (pega-pega)', palavra: 'tag' },
  { dica: '🎲 Banco Imobiliário is this kind of game!', palavra: 'board game' },
  { dica: '🪢 You jump over this!', palavra: 'jump rope' },
  { dica: '🪁 It flies in the sky!', palavra: 'kite' },
  { dica: '⛹️ Dodge the ball! (queimada)', palavra: 'dodgeball' },
  { dica: '🧤 Catch the ball! (pegar)', palavra: 'catch' },
  { dica: '🤾 Send the ball far away! (arremessar)', palavra: 'throw' },
  { dica: '🏀 Bounce, bounce! (quicar)', palavra: 'bounce' },
  { dica: '🥅 Score a...! (gol)', palavra: 'goal' },
  { dica: '👥 Your soccer... (time)', palavra: 'team' },
  { dica: '🏆 You win! You are the...!', palavra: 'winner' }
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
  const item = bancoJogo[Math.floor(Math.random() * bancoJogo.length)];
  const resposta = item.palavra;

  const opcoes = [resposta];
  const embaralhado = shuffleArray(bancoJogo.map(v => v.palavra).filter(p => p !== resposta));
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
    `<button class="jogo-opcao" style="font-size:1.2rem;" data-resposta="${v}" onclick="responderJogo(this, '${resposta.replace(/'/g, "\\'")}')">${v}</button>`
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
  }, 1400);
}
