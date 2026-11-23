const bancoQuestoes = [
  // ===== CORPOS CELESTES (1-10) =====
  {
    id: 1, tipo: 'corpos',
    q: '⭐ Estrelas se caracterizam por ter...',
    alternativas: [
      { texto: 'Luz e calor PRÓPRIOS', correta: true, explicacao: 'Isso! Estrelas acendem a própria luz — o Sol é uma estrela! ⭐' },
      { texto: 'Nenhuma luz, só sombra', correta: false, explicacao: 'Não! Estrelas brilham sozinhas, com luz e calor PRÓPRIOS!' },
      { texto: 'Luz emprestada de cometas', correta: false, explicacao: 'Estrelas não precisam emprestar nada: têm luz e calor PRÓPRIOS!' }
    ]
  },
  {
    id: 2, tipo: 'corpos',
    q: '🪐 Planetas são corpos celestes que...',
    alternativas: [
      { texto: 'NÃO têm luz própria — só refletem a luz do Sol', correta: true, explicacao: 'Isso! Planeta é "espelhinho": reflete a luz do Sol! 🪐' },
      { texto: 'Têm luz e calor próprios como o Sol', correta: false, explicacao: 'Isso é ESTRELA! Planeta NÃO tem luz própria!' },
      { texto: 'Brilham com luz própria à noite', correta: false, explicacao: 'Brilham refletindo o Sol. Luz própria é só de ESTRELA!' }
    ]
  },
  {
    id: 3, tipo: 'corpos',
    q: '🌙 A Lua é um exemplo de...',
    alternativas: [
      { texto: 'Satélite natural', correta: true, explicacao: 'Isso! A Lua gira ao redor da Terra: satélite NATURAL! 🌙' },
      { texto: 'Estrela', correta: false, explicacao: 'A Lua não tem luz própria — não é estrela! É satélite da Terra!' },
      { texto: 'Planeta', correta: false, explicacao: 'Planeta gira ao redor do Sol. A Lua gira ao redor da TERRA!' }
    ]
  },
  {
    id: 4, tipo: 'corpos',
    q: '☄️ Asteroides são...',
    alternativas: [
      { texto: 'Pedras irregulares que giram ao redor do Sol', correta: true, explicacao: 'Isso! São rochas tortas e bem menores que os planetas! ☄️' },
      { texto: 'Estrelas muito pequenas', correta: false, explicacao: 'Não! Asteroides são PEDRAS do espaço, não estrelas!' },
      { texto: 'Planetas gigantes de gás', correta: false, explicacao: 'Gigantes de gás são os planetas gasosos! Asteroide é pedrinha!' }
    ]
  },
  {
    id: 5, tipo: 'corpos',
    q: '☀️ O Sol é...',
    alternativas: [
      { texto: 'Uma estrela que fica no centro do Sistema Solar', correta: true, explicacao: 'Isso! Estrela + centro = fonte de luz e calor de tudo! ☀️' },
      { texto: 'Um planeta muito grande', correta: false, explicacao: 'Sol é ESTRELA, com luz e calor próprios — não é planeta!' },
      { texto: 'Um satélite da Terra', correta: false, explicacao: 'Satélite da Terra é a Lua! O Sol é uma ESTRELA!' }
    ]
  },
  {
    id: 6, tipo: 'corpos',
    q: '🌞 Qual é a principal fonte de luz e calor dos planetas?',
    alternativas: [
      { texto: 'O Sol', correta: true, explicacao: 'Isso! O Sol é o astro central e acende todo o Sistema Solar! 🌞' },
      { texto: 'A Lua', correta: false, explicacao: 'A Lua só REFLETE a luz do Sol. Quem produz é o SOL!' },
      { texto: 'As estrelas distantes', correta: false, explicacao: 'As outras estrelas ficam longe demais! Nossa luz vem do SOL!' }
    ]
  },
  {
    id: 7, tipo: 'corpos',
    q: '🪨 Quais são os planetas ROCHOSOS, mais próximos do Sol?',
    alternativas: [
      { texto: 'Mercúrio, Vênus, Terra e Marte', correta: true, explicacao: 'Isso! Os 4 primeiros são rochosos e bem mais próximos do Sol! 🪨' },
      { texto: 'Júpiter, Saturno, Urano e Netuno', correta: false, explicacao: 'Esses são os GASOSOS, que ficam mais DISTANTES do Sol!' },
      { texto: 'Terra, Júpiter, Marte e Netuno', correta: false, explicacao: 'Embaralhou tudo! Rochosos: Mercúrio, Vênus, Terra, Marte!' }
    ]
  },
  {
    id: 8, tipo: 'corpos',
    q: '💨 Quais são os planetas GASOSOS?',
    alternativas: [
      { texto: 'Júpiter, Saturno, Urano e Netuno', correta: true, explicacao: 'Isso! Os 4 últimos são gigantes feitos de gás! 💨' },
      { texto: 'Mercúrio, Vênus, Terra e Marte', correta: false, explicacao: 'Esses são os ROCHOSOS, os primeiros 4 do Sol!' },
      { texto: 'Lua, Sol, Marte e Saturno', correta: false, explicacao: 'Lua e Sol nem são planetas! Gasosos: Júpiter a Netuno!' }
    ]
  },
  {
    id: 9, tipo: 'corpos',
    q: '🌍 Qual planeta fica na posição em que moramos?',
    alternativas: [
      { texto: 'A Terra, o 3º planeta a partir do Sol', correta: true, explicacao: 'Isso! Terra é a 3ª casa do Sistema Solar! 🌍' },
      { texto: 'Marte, o planeta vermelho', correta: false, explicacao: 'Marte é o 4º. Nosso lar é a TERRA, a 3ª!' },
      { texto: 'Vênus, o planeta mais quente', correta: false, explicacao: 'Vênus é o 2º! Moramos na TERRA, o 3º planeta!' }
    ]
  },
  {
    id: 10, tipo: 'corpos',
    q: '🤔 Qual frase está CERTA?',
    alternativas: [
      { texto: 'Estrelas têm luz própria; planetas, não', correta: true, explicacao: 'Isso! Essa é a diferença principal entre eles! ⭐🪐' },
      { texto: 'Planetas têm luz própria e estrelas, não', correta: false, explicacao: 'Está trocado! Estrela é que tem luz própria!' },
      { texto: 'Nenhum corpo celeste tem luz própria', correta: false, explicacao: 'Estrelas (e o Sol) TÊM luz própria!' }
    ]
  },
  {
    id: 11, tipo: 'corpos',
    q: '🌕 Por que a Lua brilha no céu?',
    alternativas: [
      { texto: 'Porque reflete a luz do Sol', correta: true, explicacao: 'Isso! A Lua é um grande espelho que reflete a luz solar! 🌕' },
      { texto: 'Porque tem luz própria', correta: false, explicacao: 'A Lua NÃO tem luz própria — ela REFLETE a do Sol!' },
      { texto: 'Porque é uma estrela pequena', correta: false, explicacao: 'Não é estrela! É satélite natural da Terra que reflete luz!' }
    ]
  },
  {
    id: 12, tipo: 'corpos',
    q: '🔭 Estrelas e planetas podem ser confundidos no céu. Qual a diferença?',
    alternativas: [
      { texto: 'Estrelas têm luz própria; planetas refletem a luz do Sol', correta: true, explicacao: 'Isso! Essa é a pista dos astrônomos! 🔭' },
      { texto: 'Planetas têm luz própria; estrelas, não', correta: false, explicacao: 'Trocado! Quem produz luz é a ESTRELA!' },
      { texto: 'São a mesma coisa com nomes diferentes', correta: false, explicacao: 'São diferentes: estrela acende, planeta só reflete!' }
    ]
  },
  {
    id: 13, tipo: 'corpos',
    q: '🪐 Os planetas são feitos de...',
    alternativas: [
      { texto: 'Matéria sólida (rochas) ou gases', correta: true, explicacao: 'Isso! Por isso temos os rochosos e os gasosos! 🪨💨' },
      { texto: 'Luz e calor como o Sol', correta: false, explicacao: 'Luz e calor próprios são das ESTRELAS!' },
      { texto: 'Areia de brinquedo', correta: false, explicacao: 'Não! São rochas ou GASES gigantescos!' }
    ]
  },
  {
    id: 14, tipo: 'corpos',
    q: '☄️ Como são os asteroides em comparação com os planetas?',
    alternativas: [
      { texto: 'São bem menores e têm formas irregulares', correta: true, explicacao: 'Isso! São pedras tortinhas do espaço, minúsculas perto de planetas! ☄️' },
      { texto: 'São maiores que Júpiter', correta: false, explicacao: 'Pelo contrário: asteroides são MUITO menores que qualquer planeta!' },
      { texto: 'Têm luz própria como estrelas', correta: false, explicacao: 'Asteroides são PEDRAS — não produzem luz!' }
    ]
  },
  {
    id: 15, tipo: 'corpos',
    q: '🌌 Como se chama o conjunto com o Sol, os 8 planetas e os demais corpos que giram ao redor do Sol?',
    alternativas: [
      { texto: 'Sistema Solar', correta: true, explicacao: 'Isso! Sol + planetas + asteroides = Sistema Solar! 🌌' },
      { texto: 'Constelação', correta: false, explicacao: 'Constelação é um GRUPO DE ESTRELAS no céu!' },
      { texto: 'Galáxia', correta: false, explicacao: 'Galáxia é muito maior: bilhões de estrelas! Nosso conjunto é o SISTEMA SOLAR!' }
    ]
  },
  {
    id: 16, tipo: 'corpos',
    q: 'ORDEM: qual é a ordem correta dos planetas a partir do Sol?',
    alternativas: [
      { texto: 'Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno', correta: true, explicacao: 'Isso! 4 rochosos primeiro, depois os 4 gasosos! 🪨💨' },
      { texto: 'Terra, Sol, Lua, Mercúrio, Júpiter', correta: false, explicacao: 'O Sol fica no CENTRO! Começa por MERCÚRIO!' },
      { texto: 'Netuno, Urano, Saturno, Júpiter, Marte, Terra, Vênus, Mercúrio', correta: false, explicacao: 'Essa é a ordem invertida! Do Sol para fora: Mercúrio primeiro!' }
    ]
  },
  // ===== MOVIMENTOS DA TERRA E DO SOL (17-30) =====
  {
    id: 17, tipo: 'movimentos',
    q: '🔄 A ROTAÇÃO da Terra é o movimento de giro...',
    alternativas: [
      { texto: 'Ao redor do próprio eixo', correta: true, explicacao: 'Isso! A Terra "roda" no próprio lugar, como um peão! 🔄' },
      { texto: 'Ao redor do Sol', correta: false, explicacao: 'Girar ao redor do Sol é a TRANSLAÇÃO!' },
      { texto: 'Ao redor da Lua', correta: false, explicacao: 'A Lua gira ao redor da TERRA, não o contrário!' }
    ]
  },
  {
    id: 18, tipo: 'movimentos',
    q: '🔄 Qual é a duração aproximada da rotação da Terra?',
    alternativas: [
      { texto: '24 horas (1 dia)', correta: true, explicacao: 'Isso! Um giro no eixo = um dia completo! 🕐' },
      { texto: '365 dias', correta: false, explicacao: '365 dias é a TRANSLAÇÃO! Rotação = 24 horas!' },
      { texto: '12 horas', correta: false, explicacao: 'Metade do dia é só de sol! Rotação completa = 24 horas!' }
    ]
  },
  {
    id: 19, tipo: 'movimentos',
    q: '🌞🌙 Qual é a CONSEQUÊNCIA da rotação da Terra?',
    alternativas: [
      { texto: 'A alternância de dias e noites', correta: true, explicacao: 'Isso! Um lado na luz = dia; outro lado = noite! 🌞🌙' },
      { texto: 'A passagem dos anos', correta: false, explicacao: 'Anos vêm da TRANSLAÇÃO! Rotação traz DIA e NOITE!' },
      { texto: 'As marés do mar', correta: false, explicacao: 'Maré tem a ver com a Lua! Rotação = dia e noite!' }
    ]
  },
  {
    id: 20, tipo: 'movimentos',
    q: '🔁 A TRANSLAÇÃO da Terra é o movimento de giro...',
    alternativas: [
      { texto: 'Ao redor do Sol', correta: true, explicacao: 'Isso! A Terra dá uma volta completa no Sol por ano! 🔁' },
      { texto: 'Ao redor do próprio eixo', correta: false, explicacao: 'Isso é a ROTAÇÃO! Translação é ao redor do SOL!' },
      { texto: 'Ao redor da Via Láctea em 24 horas', correta: false, explicacao: 'Não! Translação = terra girando ao redor do SOL!' }
    ]
  },
  {
    id: 21, tipo: 'movimentos',
    q: '🔁 Qual é a duração aproximada da translação da Terra?',
    alternativas: [
      { texto: '365 dias e 6 horas (1 ano)', correta: true, explicacao: 'Isso! 365 dias + as 6 sobrando = 1 ano! 📅' },
      { texto: '24 horas', correta: false, explicacao: '24 horas é a ROTAÇÃO (um dia)! Translação = 1 ano!' },
      { texto: '30 dias', correta: false, explicacao: '30 dias é mais ou menos 1 mês! Translação = 365 dias e 6 horas!' }
    ]
  },
  {
    id: 22, tipo: 'movimentos',
    q: '📅 Por que temos um ano novo a cada 365 dias?',
    alternativas: [
      { texto: 'Porque é o tempo da Terra para completar a translação', correta: true, explicacao: 'Isso! Uma volta ao redor do Sol = 1 ano! 📅' },
      { texto: 'Porque a Lua some do céu', correta: false, explicacao: 'A Lua aparece todo mês! O ano vem da TRANSLAÇÃO!' },
      { texto: 'Porque o Sol apaga por 365 dias', correta: false, explicacao: 'O Sol brilha sempre! 365 dias = volta da Terra ao Sol!' }
    ]
  },
  {
    id: 23, tipo: 'movimentos',
    q: '☀️ O movimento APARENTE do Sol significa que...',
    alternativas: [
      { texto: 'Parece que o Sol anda pelo céu ao longo do dia', correta: true, explicacao: 'Isso! Na verdade é a Terra que gira, mas vemos o Sol se mexer! ☀️' },
      { texto: 'O Sol troca de planeta toda hora', correta: false, explicacao: 'O Sol fica parado no CENTRO! Quem se mexe é a TERRA!' },
      { texto: 'O Sol apaga e acende várias vezes', correta: false, explicacao: 'Não apaga! Ele muda de posição no céu — isso é o movimento aparente!' }
    ]
  },
  {
    id: 24, tipo: 'movimentos',
    q: '🌅 De manhã, o Sol nasce por qual direção?',
    alternativas: [
      { texto: 'Leste', correta: true, explicacao: 'Isso! Nasce no LESTE e se põe no OESTE! 🌅' },
      { texto: 'Oeste', correta: false, explicacao: 'No oeste ele SE PÕE de tarde! Nasce é no LESTE!' },
      { texto: 'Norte', correta: false, explicacao: 'O nascer é pelo LESTE! (No meio-dia fica mais ao norte, aqui no Brasil.)' }
    ]
  },
  {
    id: 25, tipo: 'movimentos',
    q: '🌇 De fim de tarde, o Sol se põe por qual direção?',
    alternativas: [
      { texto: 'Oeste', correta: true, explicacao: 'Isso! Manhã no leste, tarde no oeste! 🌇' },
      { texto: 'Leste', correta: false, explicacao: 'O leste é onde ele NASCE de manhã!' },
      { texto: 'Sul', correta: false, explicacao: 'Ele se põe no OESTE, do outro lado do nascer!' }
    ]
  },
  {
    id: 26, tipo: 'movimentos',
    q: '🕒 Ao longo do dia, a sombra de um objeto...',
    alternativas: [
      { texto: 'Muda de tamanho e de direção', correta: true, explicacao: 'Isso! Com o Sol se mexendo, a sombra acompanha! 🕒' },
      { texto: 'Fica sempre igual, do mesmo jeito', correta: false, explicacao: 'Não fica! Ela cresce, encolhe e vira para os lados!' },
      { texto: 'Desaparece completamente ao meio-dia', correta: false, explicacao: 'Ao meio-dia ela fica só MUITO CURTA — não some!' }
    ]
  },
  {
    id: 27, tipo: 'movimentos',
    q: '☀️ Ao meio-dia, a sombra de uma pessoa é...',
    alternativas: [
      { texto: 'A mais curta do dia', correta: true, explicacao: 'Isso! Sol lá em cima = sombra bem curtinha! ☀️' },
      { texto: 'A mais comprida do dia', correta: false, explicacao: 'Comprida é de manhã e de tarde, quando o Sol está baixo!' },
      { texto: 'Sempre para o mesmo lado o dia inteiro', correta: false, explicacao: 'Ela anda: manhã para o oeste, tarde para o leste!' }
    ]
  },
  {
    id: 28, tipo: 'movimentos',
    q: '🌅 De manhã, com o Sol no leste, a sombra de um poste aponta para...',
    alternativas: [
      { texto: 'Oeste', correta: true, explicacao: 'Isso! Sombra sempre vai para o lado CONTRÁRIO do Sol! 🌅' },
      { texto: 'Leste', correta: false, explicacao: 'O leste é onde está o Sol! A sombra foge para o OESTE!' },
      { texto: 'Cima', correta: false, explicacao: 'Sombra fica no CHÃO, apontando para o OESTE!' }
    ]
  },
  {
    id: 29, tipo: 'movimentos',
    q: '💡 Por que há dia e noite em lugares diferentes do mundo ao mesmo tempo?',
    alternativas: [
      { texto: 'Porque a Terra gira (rotação) e só um lado fica virado para o Sol', correta: true, explicacao: 'Isso! Um lado na luz (dia), outro na sombra (noite)! 💡' },
      { texto: 'Porque o Sol acende e apaga várias vezes', correta: false, explicacao: 'O Sol brilha sempre! Quem gira é a TERRA!' },
      { texto: 'Porque a Lua cobre o Sol', correta: false, explicacao: 'Lua só cobre o Sol na eclipses! Noite é da ROTAÇÃO!' }
    ]
  },
  {
    id: 30, tipo: 'movimentos',
    q: '🤔 Rotação e translação: qual par está CERTO?',
    alternativas: [
      { texto: 'Rotação = 24h (dia e noite) e translação = 365 dias e 6 horas (ano)', correta: true, explicacao: 'Isso! Decore os dois números: 24h e 365 dias e 6 horas! 🎯' },
      { texto: 'Rotação = 1 ano e translação = 1 dia', correta: false, explicacao: 'Está trocado! Rotação = 24 horas, translação = 1 ano!' },
      { texto: 'As duas duram 24 horas', correta: false, explicacao: 'Não! Só a rotação dura 24 horas. Translação leva um ano!' }
    ]
  },
  // ===== GNÔMON E CONSTELAÇÕES (31-42) =====
  {
    id: 31, tipo: 'orientacao',
    q: '🧭 Gnômon é...',
    alternativas: [
      { texto: 'Uma haste que projeta sombra para marcar tempo e achar os pontos cardeais', correta: true, explicacao: 'Isso! É a "bússola" de luz do Sol! 🧭' },
      { texto: 'Um relógio de pulso antigo', correta: false, explicacao: 'Não é relógio de mão! É uma HASTE que projeta SOMBRA!' },
      { texto: 'Uma lupa para ver estrelas', correta: false, explicacao: 'Lupa não! Gnômon = haste no chão que projeta sombra!' }
    ]
  },
  {
    id: 32, tipo: 'orientacao',
    q: '🧭 Como o gnômon ajuda a identificar os pontos cardeais?',
    alternativas: [
      { texto: 'Observando a sombra projetada pela luz do Sol durante o dia', correta: true, explicacao: 'Isso! A sombra "anda" com o Sol e revela N, S, L e O! 🧭' },
      { texto: 'Ele mostra uma agulha magnética apontando para o norte', correta: false, explicacao: 'Isso é bússola! Gnômon usa SOMBRA e luz do Sol!' },
      { texto: 'Ele gira sozinho marcando as horas no rádio', correta: false, explicacao: 'Não gira! Ele é uma haste fixa que projeta SOMBRA!' }
    ]
  },
  {
    id: 33, tipo: 'orientacao',
    q: '☀️ De manhã, a sombra do gnômon aponta para...',
    alternativas: [
      { texto: 'Oeste (o Sol está no leste)', correta: true, explicacao: 'Isso! Sombra procura o lado contrário do Sol! 🌅' },
      { texto: 'Leste', correta: false, explicacao: 'O leste é onde está o SOL de manhã. Sombra vai para o OESTE!' },
      { texto: 'Norte sempre, em qualquer horário', correta: false, explicacao: 'Ao meio-dia aponta para o norte. De manhã, para o OESTE!' }
    ]
  },
  {
    id: 34, tipo: 'orientacao',
    q: '☀️ No meio-dia, a sombra mais curta do gnômon aponta para o...',
    alternativas: [
      { texto: 'Norte', correta: true, explicacao: 'Isso! Aqui no Brasil (Hemisfério Sul) o Sol fica ao norte ao meio-dia! 🧭' },
      { texto: 'Sul', correta: false, explicacao: 'O sul fica atrás, do lado oposto da sombra do meio-dia!' },
      { texto: 'Leste', correta: false, explicacao: 'Ao meio-dia a sombra aponta para o NORTE!' }
    ]
  },
  {
    id: 35, tipo: 'orientacao',
    q: '⭐ Constelações são...',
    alternativas: [
      { texto: 'Grupos de estrelas que imaginamos formando um desenho', correta: true, explicacao: 'Isso! É como um quebra-cabeça de estrelas no céu! ⭐' },
      { texto: 'Planetas que ficam juntinhos', correta: false, explicacao: 'Constelação é feita de ESTRELAS, não de planetas!' },
      { texto: 'Nuvens que brilham à noite', correta: false, explicacao: 'Nuvem não brilha! Constelação = grupo de ESTRELAS!' }
    ]
  },
  {
    id: 36, tipo: 'orientacao',
    q: '🧭 O Cruzeiro do Sul pode ser visto...',
    alternativas: [
      { texto: 'No céu do Brasil (Hemisfério Sul), sempre bem baixinho', correta: true, explicacao: 'Isso! É a nossa estrela-guia, sempre visível por aqui! 🧭' },
      { texto: 'No Hemisfério Norte, como as outras constelações', correta: false, explicacao: 'NÃO! Lá ele nunca aparece — é característica do nosso céu!' },
      { texto: 'Somente no mês de dezembro', correta: false, explicacao: 'Ele é visível o ano todo no nosso céu (bem baixinho)!' }
    ]
  },
  {
    id: 37, tipo: 'orientacao',
    q: '🤔 Sobre o Cruzeiro do Sul, qual frase é VERDADEIRA?',
    alternativas: [
      { texto: 'Não é visível no Hemisfério Norte', correta: true, explicacao: 'Isso! Lá nunca aparece no céu! 🧭' },
      { texto: 'É visível em todo o mundo igualmente', correta: false, explicacao: 'No Hemisfério Norte ele NÃO aparece!' },
      { texto: 'Só aparece na Lua', correta: false, explicacao: 'Ele aparece no céu da TERRA, só que não no Norte!' }
    ]
  },
  {
    id: 38, tipo: 'orientacao',
    q: '🏹 A constelação de Órion é visível...',
    alternativas: [
      { texto: 'Ao leste, depois que anoitece no mês de dezembro', correta: true, explicacao: 'Isso! Dezembro + leste = a pista da Órion! 🌅' },
      { texto: 'Ao oeste, ao meio-dia de julho', correta: false, explicacao: 'Surgindo a LESTE ao anoitecer de DEZEMBRO — essa é a pegadinha!' },
      { texto: 'Apenas no Hemisfério Norte', correta: false, explicacao: 'Ela também é vista daqui! Pela direção leste em dezembro!' }
    ]
  },
  {
    id: 39, tipo: 'orientacao',
    q: '⭐ Por que as constelações "andam" pelo céu durante a noite?',
    alternativas: [
      { texto: 'Porque a Terra gira (rotação)', correta: true, explicacao: 'Isso! É o movimento aparente: a Terra gira e o céu parece rodar! ⭐' },
      { texto: 'Porque as estrelas pegam carona em cometas', correta: false, explicacao: 'As estrelas ficam fixas! Quem gira é a TERRA!' },
      { texto: 'Porque a Lua empurra as estrelas', correta: false, explicacao: 'A Lua não empurra nada! É a ROTAÇÃO da Terra!' }
    ]
  },
  {
    id: 40, tipo: 'orientacao',
    q: '🧭 Os pontos cardeais são...',
    alternativas: [
      { texto: 'Norte, Sul, Leste e Oeste', correta: true, explicacao: 'Isso! Os 4 rumos do mapa: N, S, L e O! 🧭' },
      { texto: 'Cima, baixo, esquerda e direita', correta: false, explicacao: 'Esses são de sala de aula! Cardeais são N, S, L e O!' },
      { texto: 'Manhã, tarde, noite e madrugada', correta: false, explicacao: 'Esses são horários! Cardeais = NORTE, SUL, LESTE, OESTE!' }
    ]
  },
  {
    id: 41, tipo: 'orientacao',
    q: '☀️🌑 Por que usamos o Sol para achar os pontos cardeais com o gnômon?',
    alternativas: [
      { texto: 'Porque o Sol muda de posição no céu e a sombra acompanha', correta: true, explicacao: 'Isso! A sombra do Sol é nossa bússola natural! ☀️' },
      { texto: 'Porque o Sol é uma bússola magnética', correta: false, explicacao: 'Sol não tem magnetismo de bússola! O pulso é a SOMBRA!' },
      { texto: 'Porque o Sol fica parado o dia todo', correta: false, explicacao: 'O Sol é que se mexe no céu — e a sombra segue!' }
    ]
  },
  {
    id: 42, tipo: 'orientacao',
    q: '🌌 Por que dezembro é um mês especial para observar o céu no Brasil?',
    alternativas: [
      { texto: 'A constelação de Órion surge ao leste depois do anoitecer', correta: true, explicacao: 'Isso! No fim do ano, olhe para o leste depois de escurecer! 🏹' },
      { texto: 'O Cruzeiro do Sul desaparece do céu', correta: false, explicacao: 'O Cruzeiro do Sul continua lá, sempre visível no nosso céu!' },
      { texto: 'As estrelas param de brilhar', correta: false, explicacao: 'As estrelas nunca param! Dezembro é o mês da Órion a leste!' }
    ]
  },
  // ===== CALENDÁRIO E TEMPO (43-55) =====
  {
    id: 43, tipo: 'tempo',
    q: '📅 Quantos meses tem um ano?',
    alternativas: [
      { texto: '12 meses', correta: true, explicacao: 'Isso! De janeiro a dezembro: 12 meses! 📅' },
      { texto: '10 meses', correta: false, explicacao: 'Não! São 12 meses — faltam novembro e dezembro!' },
      { texto: '24 meses', correta: false, explicacao: '24 meses seriam 2 anos! Um ano tem 12 meses!' }
    ]
  },
  {
    id: 44, tipo: 'tempo',
    q: '📅 Qual é a sequência CORRETA dos meses?',
    alternativas: [
      { texto: 'janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro', correta: true, explicacao: 'Isso! Decorou a ordem completa? 🎯' },
      { texto: 'janeiro, março, fevereiro, abril, maio...', correta: false, explicacao: 'Errou o começo: depois de janeiro vem FEVEREIRO, depois MARÇO!' },
      { texto: 'dezembro, janeiro, fevereiro, março...', correta: false, explicacao: 'Essa começa no fim! A lista começa em JANEIRO!' }
    ]
  },
  {
    id: 45, tipo: 'tempo',
    q: '🗓️ Quais meses têm 30 dias?',
    alternativas: [
      { texto: 'Abril, junho, setembro e novembro', correta: true, explicacao: 'Isso! Os 4 meses de 30 dias! 🗓️' },
      { texto: 'Janeiro, março, maio e julho', correta: false, explicacao: 'Esses têm 31 dias! De 30: abril, junho, setembro e novembro!' },
      { texto: 'Fevereiro e dezembro', correta: false, explicacao: 'Fevereiro tem 28 ou 29 e dezembro tem 31!' }
    ]
  },
  {
    id: 46, tipo: 'tempo',
    q: '🗓️ Quantos dias tem fevereiro?',
    alternativas: [
      { texto: '28 dias (29 em ano bissexto)', correta: true, explicacao: 'Isso! É o único mês que muda! 🗓️' },
      { texto: '30 dias, como abril', correta: false, explicacao: 'Não! Fevereiro é o mais curto: 28 ou 29 dias!' },
      { texto: '31 dias, como janeiro', correta: false, explicacao: 'Fevereiro é o mais curto: 28 ou 29 dias!' }
    ]
  },
  {
    id: 47, tipo: 'tempo',
    q: '🗓️ Qual destes meses NÃO tem 31 dias?',
    alternativas: [
      { texto: 'Abril', correta: true, explicacao: 'Isso! Abril tem 30 dias — ele é um dos 4 de 30! 🗓️' },
      { texto: 'Março', correta: false, explicacao: 'Março tem 31 dias. Abril é que tem 30!' },
      { texto: 'Janeiro', correta: false, explicacao: 'Janeiro tem 31. Abril tem 30!' }
    ]
  },
  {
    id: 48, tipo: 'tempo',
    q: '🧮 Um TRIMESTRE tem...',
    alternativas: [
      { texto: '3 meses', correta: true, explicacao: 'Isso! "Tri" = três, igual triângulo (3 lados)! 🧮' },
      { texto: '6 meses', correta: false, explicacao: '6 meses é SEMESTRE! Trimestre tem 3!' },
      { texto: '12 meses', correta: false, explicacao: '12 meses é 1 ANO! Trimestre = 3 meses!' }
    ]
  },
  {
    id: 49, tipo: 'tempo',
    q: '🧮 Um SEMESTRE tem...',
    alternativas: [
      { texto: '6 meses', correta: true, explicacao: 'Isso! Semestre = meio ano = metade dos 12 meses! 🧮' },
      { texto: '3 meses', correta: false, explicacao: '3 meses é TRIMESTRE! Semestre = 6!' },
      { texto: '4 meses', correta: false, explicacao: 'Não! Semestre = 6 meses (metade do ano).' }
    ]
  },
  {
    id: 50, tipo: 'tempo',
    q: '📚 O 1º trimestre do ano é feito de...',
    alternativas: [
      { texto: 'janeiro + fevereiro + março', correta: true, explicacao: 'Isso! Os 3 primeiros meses! 📚' },
      { texto: 'janeiro + fevereiro', correta: false, explicacao: 'Só 2 meses! Trimestre precisa de 3: jan, fev e mar!' },
      { texto: 'janeiro a junho', correta: false, explicacao: 'Jan a junho é 1º SEMESTRE (6 meses)! Trimestre = 3!' }
    ]
  },
  {
    id: 51, tipo: 'tempo',
    q: '🌞 O 1º semestre vai de...',
    alternativas: [
      { texto: 'janeiro a junho', correta: true, explicacao: 'Isso! 6 meses até metade do ano! 🌞' },
      { texto: 'janeiro a março', correta: false, explicacao: 'Jan a mar são 3 meses = TRIMESTRE!' },
      { texto: 'julho a dezembro', correta: false, explicacao: 'Julho a dezembro é o 2º SEMESTRE!' }
    ]
  },
  {
    id: 52, tipo: 'tempo',
    q: '🗓️ Os meses de 31 dias são...',
    alternativas: [
      { texto: 'janeiro, março, maio, julho, agosto, outubro e dezembro', correta: true, explicacao: 'Isso! Todos, menos abril/junho/setembro/novembro e fevereiro! 🗓️' },
      { texto: 'abril, junho, setembro e novembro', correta: false, explicacao: 'Esses têm 30 dias! 31 são os outros 7 (menos fevereiro)!' },
      { texto: 'apenas março e julho', correta: false, explicacao: 'São 7 meses de 31 dias, não só dois!' }
    ]
  },
  {
    id: 53, tipo: 'tempo',
    q: '✏️ Quanto tempo leva a Terra para dar uma volta ao redor do Sol?',
    alternativas: [
      { texto: '365 dias e 6 horas', correta: true, explicacao: 'Isso! Essas 6 sobrando viram o dia a mais do ano bissexto! ✏️' },
      { texto: '24 horas', correta: false, explicacao: '24 horas é a volta no próprio eixo (rotação)!' },
      { texto: '30 dias', correta: false, explicacao: '30 dias é 1 mês! Volta ao Sol = 365 dias e 6 horas!' }
    ]
  },
  {
    id: 54, tipo: 'tempo',
    q: '🤔 Se hoje é 30 de abril, qual é o próximo dia?',
    alternativas: [
      { texto: '1º de maio', correta: true, explicacao: 'Isso! Abril tem 30 dias, então no dia 31 já passa para MAIO! 📅' },
      { texto: '31 de abril', correta: false, explicacao: 'Não existe 31 de abril — abril tem 30 dias!' },
      { texto: '30 de maio', correta: false, explicacao: 'Depois de 30 de abril vem 1º de MAIO!' }
    ]
  },
  {
    id: 55, tipo: 'tempo',
    q: '📊 Em um ano, quantos meses de 30 dias e quantos de 31 dias existem?',
    alternativas: [
      { texto: '4 meses de 30 dias e 7 meses de 31 dias (mais fevereiro)', correta: true, explicacao: 'Isso! 4 + 7 + fevereiro = 12 meses! 📊' },
      { texto: '6 meses de 30 e 6 de 31', correta: false, explicacao: 'Não é metade! São 4 de 30, 7 de 31 e fevereiro!' },
      { texto: 'Todos os meses têm 30 dias', correta: false, explicacao: 'Nem! Tem 31, 30 e fevereiro com 28 ou 29!' }
    ]
  },
  // ===== RELÓGIO DE SOL E AMPULHETA (56-60) =====
  {
    id: 56, tipo: 'instrumentos',
    q: '☀️ O relógio de sol funciona...',
    alternativas: [
      { texto: 'Com a sombra de uma haste projetada pela luz solar', correta: true, explicacao: 'Isso! A sombra da haste marca as horas! ☀️' },
      { texto: 'Com pilhas e um mostrador digital', correta: false, explicacao: 'Relógio de sol é antigo e usa SOL + SOMBRA, sem pilha!' },
      { texto: 'Com areia escorrendo entre dois bulbos', correta: false, explicacao: 'Essa é a AMPULHETA! Relógio de sol usa sombra!' }
    ]
  },
  {
    id: 57, tipo: 'instrumentos',
    q: '🌑 Por que o relógio de sol NÃO funciona à noite?',
    alternativas: [
      { texto: 'Porque sem luz do Sol não há sombra marcando as horas', correta: true, explicacao: 'Isso! Sem Sol, sem sombra, sem horas! 🌑' },
      { texto: 'Porque a areia acaba no escuro', correta: false, explicacao: 'Areia é da AMPULHETA! Relógio de sol precisa do SOL!' },
      { texto: 'Porque ele quebra quando esfria', correta: false, explicacao: 'Não quebra: ele só não tem SOMBRA para marcar!' }
    ]
  },
  {
    id: 58, tipo: 'instrumentos',
    q: '⏳ Como funciona a ampulheta?',
    alternativas: [
      { texto: 'A areia escorre de um recipiente para o outro e marca o tempo', correta: true, explicacao: 'Isso! Quando a areia acaba, passou o tempo! ⏳' },
      { texto: 'A sombra de uma haste anda com o Sol', correta: false, explicacao: 'Isso é o RELÓGIO DE SOL! Ampulheta é com AREIA!' },
      { texto: 'Ela bate badaladas como um sino', correta: false, explicacao: 'Sino é outro relógio! Ampulheta usa AREIA escorrendo!' }
    ]
  },
  {
    id: 59, tipo: 'instrumentos',
    q: '⏳ A vantagem da ampulheta em relação ao relógio de sol é que...',
    alternativas: [
      { texto: 'Ela funciona de dia e de noite, com chuva ou sol', correta: true, explicacao: 'Isso! Só precisa de areia — não depende do Sol! 🎉' },
      { texto: 'Ela acende a luz do Sol sozinha', correta: false, explicacao: 'Nada a ver! Ela só ESCORRE areia, dia ou noite!' },
      { texto: 'Ela mostra as estrelas', correta: false, explicacao: 'Não mostra! Ela mede TEMPO com areia, em qualquer hora!' }
    ]
  },
  {
    id: 60, tipo: 'instrumentos',
    q: '🤔 Qual instrumento antigo depende da LUZ DO SOL para marcar as horas?',
    alternativas: [
      { texto: 'O relógio de sol', correta: true, explicacao: 'Isso! Luz solar → sombra da haste → horas! ☀️' },
      { texto: 'A ampulheta', correta: false, explicacao: 'Ampulheta depende da AREIA, não do Sol!' },
      { texto: 'O relógio de pulso', correta: false, explicacao: 'Relógio de pulso usa mecanismo (ou pilha) — e não é antigo!' }
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

// ===== JOGO ASTRO RUSH (baralho sem repetição + 2 formatos + níveis) =====
const bancoJogo = [
  // --- formato escolha (dica -> 4 opções) ---
  { modo: 'escolha', dica: '⭐ Tem luz e calor PRÓPRIOS!', opcoes: ['estrela', 'planeta', 'satélite', 'asteroide'], certa: 'estrela' },
  { modo: 'escolha', dica: '🪐 NÃO tem luz própria: só reflete!', opcoes: ['planeta', 'estrela', 'cometa brilhante', 'farol'], certa: 'planeta' },
  { modo: 'escolha', dica: '🌙 Satélite natural da Terra!', opcoes: ['Lua', 'Sol', 'Marte', 'Órion'], certa: 'Lua' },
  { modo: 'escolha', dica: '☄️ Pedrinha irregular girando no espaço!', opcoes: ['asteroide', 'estrela', 'planeta gasoso', 'galáxia'], certa: 'asteroide' },
  { modo: 'escolha', dica: '☀️ Astro central do Sistema Solar!', opcoes: ['Sol', 'Lua', 'Terra', 'Netuno'], certa: 'Sol' },
  { modo: 'escolha', dica: '🪨 1º planeta, rochoso e o mais próximo do Sol!', opcoes: ['Mercúrio', 'Marte', 'Júpiter', 'Vênus'], certa: 'Mercúrio' },
  { modo: 'escolha', dica: '🪨🪨🪨🪨 Os 4 planetas rochosos começam com...', opcoes: ['Mercúrio, Vênus, Terra e Marte', 'Júpiter, Saturno, Urano e Netuno', 'Terra, Lua, Sol e Marte', 'Marte, Netuno, Vênus, Plutão'], certa: 'Mercúrio, Vênus, Terra e Marte' },
  { modo: 'escolha', dica: '💨 Os gigantes de gás: Júpiter, Saturno, Urano e...', opcoes: ['Netuno', 'Mercúrio', 'Vênus', 'Terra'], certa: 'Netuno' },
  { modo: 'escolha', dica: '🌍 Nosso planeta é o quantos a partir do Sol?', opcoes: ['3º', '1º', '5º', '8º'], certa: '3º' },
  { modo: 'escolha', dica: '🔄 Gira no próprio eixo em 24 horas:...', opcoes: ['rotação', 'translação', 'constelação', 'eclipse'], certa: 'rotação' },
  { modo: 'escolha', dica: '🔁 Gira ao redor do Sol em 365 dias e 6 horas:...', opcoes: ['translação', 'rotação', 'gnômon', 'ampulheta'], certa: 'translação' },
  { modo: 'escolha', dica: '🌞🌙 Rotação da Terra = alternância de...', opcoes: ['dias e noites', 'anos e meses', 'estações', 'marés'], certa: 'dias e noites' },
  { modo: 'escolha', dica: '🌅 O Sol NASCE por onde?', opcoes: ['leste', 'oeste', 'norte', 'sul'], certa: 'leste' },
  { modo: 'escolha', dica: '🌇 O Sol SE PÕE por onde?', opcoes: ['oeste', 'leste', 'norte', 'sul'], certa: 'oeste' },
  { modo: 'escolha', dica: '☀️☀️☀️ Ao meio-dia a sombra fica...', opcoes: ['bem curta', 'bem comprida', 'de um lado só pra sempre', 'sem mudar nunca'], certa: 'bem curta' },
  { modo: 'escolha', dica: '🧭 Haste que projeta sombra e acha os pontos cardeais!', opcoes: ['gnômon', 'ampulheta', 'telescópio', 'microscópio'], certa: 'gnômon' },
  { modo: 'escolha', dica: '🧭 Os 4 pontos cardeais são N, S, L e...', opcoes: ['O (oeste)', 'P (ponto)', 'C (casa)', 'T (tempo)'], certa: 'O (oeste)' },
  { modo: 'escolha', dica: '⭐ Grupo de estrelas que forma um desenho no céu!', opcoes: ['constelação', 'planeta', 'satélite', 'continentes'], certa: 'constelação' },
  { modo: 'escolha', dica: '🧭 Cruzeiro do Sul: visível só no...', opcoes: ['Hemisfério Sul', 'Hemisfério Norte', 'Lua', 'mar'], certa: 'Hemisfério Sul' },
  { modo: 'escolha', dica: '🏹 Órion surge ao leste ao anoitecer em...', opcoes: ['dezembro', 'março', 'abril', 'agosto'], certa: 'dezembro' },
  { modo: 'escolha', dica: '📅 Quantos meses tem um ano?', opcoes: ['12', '10', '24', '31'], certa: '12' },
  { modo: 'escolha', dica: '🗓️ Abril, junho, setembro e novembro têm...', opcoes: ['30 dias', '31 dias', '28 dias', '40 dias'], certa: '30 dias' },
  { modo: 'escolha', dica: '🗓️ Fevereiro tem 28 dias — e em ano bissexto...', opcoes: ['29 dias', '30 dias', '31 dias', '27 dias'], certa: '29 dias' },
  { modo: 'escolha', dica: '🧮 Trimestre = quantos meses?', opcoes: ['3', '6', '12', '4'], certa: '3' },
  { modo: 'escolha', dica: '🧮 Semestre = quantos meses?', opcoes: ['6', '3', '12', '9'], certa: '6' },
  { modo: 'escolha', dica: '☀️ Relógio de sol marca as horas com a...', opcoes: ['sombra de uma haste', 'areia que escorre', 'pilha elétrica', 'voz do rádio'], certa: 'sombra de uma haste' },
  { modo: 'escolha', dica: '⏳ Ampulheta mede o tempo com...', opcoes: ['areia que escorre', 'sombra do Sol', 'linha d’água', 'lâmpada acesa'], certa: 'areia que escorre' },
  // --- formato verdade ou mito ---
  { modo: 'vf', frase: 'Estrelas têm luz e calor próprios.', certa: true, porque: 'Verdade! O Sol é uma estrela e brilha sozinho! ⭐' },
  { modo: 'vf', frase: 'Planetas têm luz própria como o Sol.', certa: false, porque: 'Mito! Planetas só REFLETEM a luz do Sol! 🪐' },
  { modo: 'vf', frase: 'A Lua é um satélite natural da Terra.', certa: true, porque: 'Verdade! Ela gira ao redor da Terra! 🌙' },
  { modo: 'vf', frase: 'O Sol é o astro central do Sistema Solar.', certa: true, porque: 'Verdade! Estrela no centro, fonte de luz e calor! ☀️' },
  { modo: 'vf', frase: 'Júpiter, Saturno, Urano e Netuno são rochosos.', certa: false, porque: 'Mito! São os GASOSOS! Rochosos são os 4 primeiros! 💨' },
  { modo: 'vf', frase: 'A rotação da Terra dura aproximadamente 24 horas.', certa: true, porque: 'Verdade! E traz a alternância de dias e noites! 🔄' },
  { modo: 'vf', frase: 'A translação dura 24 horas.', certa: false, porque: 'Mito! Translação leva 365 dias e 6 horas (1 ano)! 🔁' },
  { modo: 'vf', frase: 'O Sol nasce no leste e se põe no oeste.', certa: true, porque: 'Verdade! E a sombra vai sempre para o lado contrário! 🌅' },
  { modo: 'vf', frase: 'Ao meio-dia a sombra fica mais comprida.', certa: false, porque: 'Mito! Sol lá em cima = sombra MAIS CURTA! ☀️' },
  { modo: 'vf', frase: 'O gnômon é uma haste que projeta sombra.', certa: true, porque: 'Verdade! Com ela achamos os pontos cardeais! 🧭' },
  { modo: 'vf', frase: 'O Cruzeiro do Sul é visto no Hemisfério Norte.', certa: false, porque: 'Mito! Lá ele nunca aparece — é do nosso céu! 🧭' },
  { modo: 'vf', frase: 'Órion surge ao leste depois do anoitecer em dezembro.', certa: true, porque: 'Verdade! Olhe para o leste no fim do ano! 🏹' },
  { modo: 'vf', frase: 'Um ano tem 12 meses.', certa: true, porque: 'Verdade! De janeiro a dezembro! 📅' },
  { modo: 'vf', frase: 'Fevereiro tem 30 dias.', certa: false, porque: 'Mito! Fevereiro tem 28 ou 29 dias! 🗓️' },
  { modo: 'vf', frase: 'Abril, junho, setembro e novembro têm 30 dias.', certa: true, porque: 'Verdade! São os 4 meses de 30 dias! 🗓️' },
  { modo: 'vf', frase: 'Um semestre tem 6 meses.', certa: true, porque: 'Verdade! Metade do ano! 🧮' },
  { modo: 'vf', frase: 'O relógio de sol funciona à noite.', certa: false, porque: 'Mito! Sem Sol não há sombra para marcar as horas! 🌑' },
  { modo: 'vf', frase: 'A ampulheta mede o tempo com o escoamento da areia.', certa: true, porque: 'Verdade! Areia escorrendo entre dois recipientes! ⏳' }
];

const NIVEIS_JOGO = [
  '🚀 Aprendiz de Astronauta',
  '🛰️ Explorador do Céu',
  '🌌 Piloto de Nave',
  '🌟 Guardião das Estrelas',
  '🏆 Mestre do Universo'
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
