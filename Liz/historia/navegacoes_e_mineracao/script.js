// ===== BANCO DE QUESTÕES (60) =====
// tipo: 'navegacoes' (Cap. 5) ou 'mineracao' (Cap. 6)
const bancoQuestoes = [
  // ===== CAPÍTULO 5 — NAVEGAR É PRECISO (30) =====
  { id: 1, tipo: 'navegacoes', q: 'Por que os europeus queriam tanto chegar às Índias?',
    alternativas: [
      { texto: 'Para comprar especiarias como pimenta, cravo e canela', correta: true, explicacao: 'As especiarias eram muito valiosas na Europa e o caminho por terra era longo e caro!' },
      { texto: 'Para pescar peixes raros', correta: false, explicacao: 'Não era peixe! O que eles queriam eram as especiarias: pimenta, cravo, canela e outros temperos.' },
      { texto: 'Para conhecer os animais da floresta', correta: false, explicacao: 'As viagens eram comerciais: o objetivo era comprar especiarias para vender na Europa.' }
    ] },
  { id: 2, tipo: 'navegacoes', q: 'Qual país liderou as Grandes Navegações?',
    alternativas: [
      { texto: 'Portugal', correta: true, explicacao: 'Portugal saiu na frente: tinha bons navegadores, caravelas e o apoio do Infante Dom Henrique.' },
      { texto: 'Brasil', correta: false, explicacao: 'O Brasil ainda nem existia como país! Quem liderou foi Portugal.' },
      { texto: 'Alemanha', correta: false, explicacao: 'A Alemanha não participou das primeiras grandes navegações. O líder foi Portugal.' }
    ] },
  { id: 3, tipo: 'navegacoes', q: 'Qual instrumento apontava para o Norte e mostrava a direção no mar?',
    alternativas: [
      { texto: 'A bússola', correta: true, explicacao: 'A bússola tem uma agulha que sempre aponta para o Norte. Assim os navegadores não se perdiam!' },
      { texto: 'O astrolábio', correta: false, explicacao: 'O astrolábio media a altura das estrelas. Quem mostrava a direção era a bússola.' },
      { texto: 'O telescópio', correta: false, explicacao: 'Telescópio é para ver coisas longe. Para saber a direção, os navegadores usavam a bússola.' }
    ] },
  { id: 4, tipo: 'navegacoes', q: 'Para que servia o astrolábio?',
    alternativas: [
      { texto: 'Para medir a altura das estrelas e achar o caminho', correta: true, explicacao: 'Olhando as estrelas com o astrolábio, os navegadores descobriam onde estavam no mar.' },
      { texto: 'Para cozinhar a comida da viagem', correta: false, explicacao: 'Ele não era usado na cozinha! O astrolábio ajudava a navegar usando as estrelas.' },
      { texto: 'Para limpar o convés do navio', correta: false, explicacao: 'O astrolábio era um instrumento de navegação, não de limpeza!' }
    ] },
  { id: 5, tipo: 'navegacoes', q: 'Como se chamava o navio rápido e com velas usado nas Grandes Navegações?',
    alternativas: [
      { texto: 'Caravela', correta: true, explicacao: 'A caravela era um navio rápido, com velas, que aguentava viagens muito longas pelo mar.' },
      { texto: 'Barcaça', correta: false, explicacao: 'Barcaça é um barco de carga que anda devagar. A caravela era rápida e cheia de velas!' },
      { texto: 'Jangada', correta: false, explicacao: 'A jangada é uma embarcação simples de madeira. Os portugueses usavam a caravela.' }
    ] },
  { id: 6, tipo: 'navegacoes', q: 'Qual príncipe português incentivou e organizou as navegações?',
    alternativas: [
      { texto: 'Infante Dom Henrique', correta: true, explicacao: 'Ele reuniu navegadores, mapas e instrumentos para organizar as viagens. Por isso é chamado de "navegador".' },
      { texto: 'Rei Dom Pedro I', correta: false, explicacao: 'Dom Pedro I foi imperador do Brasil muito tempo depois, em 1822!' },
      { texto: 'Príncipe Dom João', correta: false, explicacao: 'Dom João veio para o Brasil em 1808, muito depois das Grandes Navegações.' }
    ] },
  { id: 7, tipo: 'navegacoes', q: 'Qual navegador contornou o Cabo da Boa Esperança, no sul da África?',
    alternativas: [
      { texto: 'Bartolomeu Dias', correta: true, explicacao: 'Bartolomeu Dias foi o primeiro a contornar esse cabo, provando que dava para chegar à Índia pelo mar!' },
      { texto: 'Cristóvão Colombo', correta: false, explicacao: 'Colombo navegou para o Oeste e chegou à América, não ao sul da África.' },
      { texto: 'Pedro Álvares Cabral', correta: false, explicacao: 'Cabral chegou ao Brasil. Quem contornou o Cabo da Boa Esperança foi Bartolomeu Dias.' }
    ] },
  { id: 8, tipo: 'navegacoes', q: 'Quem foi o primeiro a chegar às Índias navegando pelo mar?',
    alternativas: [
      { texto: 'Vasco da Gama', correta: true, explicacao: 'Vasco da Gama conseguiu chegar às Índias em 1498, abrindo o caminho marítimo para as especiarias!' },
      { texto: 'Pedro Álvares Cabral', correta: false, explicacao: 'Cabral chegou ao Brasil em 1500. Quem chegou às Índias foi Vasco da Gama.' },
      { texto: 'Cristóvão Colombo', correta: false, explicacao: 'Colombo pensou ter chegado às Índias, mas na verdade chegou à América!' }
    ] },
  { id: 9, tipo: 'navegacoes', q: 'Em que ano Cristóvão Colombo chegou à América?',
    alternativas: [
      { texto: '1492', correta: true, explicacao: 'Em 1492 Colombo chegou à América pensando que tinha chegado às Índias!' },
      { texto: '1500', correta: false, explicacao: '1500 foi o ano em que Cabral chegou ao Brasil, não Colombo à América.' },
      { texto: '1498', correta: false, explicacao: '1498 foi quando Vasco da Gama chegou às Índias, não quando Colombo chegou à América.' }
    ] },
  { id: 10, tipo: 'navegacoes', q: 'Por que Colombo chamou os povos da América de "índios"?',
    alternativas: [
      { texto: 'Porque pensou que tinha chegado às Índias', correta: true, explicacao: 'Ele navegou para o Oeste e acreditou que tinha chegado às Índias. Por isso chamou os povos de "índios".' },
      { texto: 'Porque eles se chamavam assim', correta: false, explicacao: 'Eles não se chamavam assim! O nome veio do erro de Colombo, que pensou estar nas Índias.' },
      { texto: 'Porque falavam a língua dos índios da Ásia', correta: false, explicacao: 'Eles falavam línguas próprias. O nome "índios" veio do engano de Colombo.' }
    ] },
  { id: 11, tipo: 'navegacoes', q: 'Quem chegou ao Brasil em 1500?',
    alternativas: [
      { texto: 'Pedro Álvares Cabral', correta: true, explicacao: 'Cabral chegou ao litoral do Brasil em 22 de abril de 1500!' },
      { texto: 'Cristóvão Colombo', correta: false, explicacao: 'Colombo chegou à América em 1492, mas não chegou ao Brasil.' },
      { texto: 'Vasco da Gama', correta: false, explicacao: 'Vasco da Gama chegou às Índias. Quem chegou ao Brasil foi Cabral, em 1500.' }
    ] },
  { id: 12, tipo: 'navegacoes', q: 'O que significa o nome Pindorama, dado por alguns povos indígenas à nossa terra?',
    alternativas: [
      { texto: 'Terra das palmeiras', correta: true, explicacao: 'Pindorama significa "terra das palmeiras" — um nome bonito para a nossa terra!' },
      { texto: 'Terra do fogo', correta: false, explicacao: 'Terra do Fogo é o nome de uma região lá longe, no Sul da América. Pindorama é "terra das palmeiras".' },
      { texto: 'Terra do ouro', correta: false, explicacao: 'O ouro só foi descoberto muito depois. Pindorama quer dizer "terra das palmeiras".' }
    ] },
  { id: 13, tipo: 'navegacoes', q: 'Em que dia Cabral chegou ao Brasil?',
    alternativas: [
      { texto: '22 de abril de 1500', correta: true, explicacao: 'No dia 22 de abril de 1500, os portugueses avistaram as terras do Brasil!' },
      { texto: '7 de setembro de 1822', correta: false, explicacao: '7 de setembro de 1822 foi o dia da Independência do Brasil, muitos anos depois!' },
      { texto: '25 de dezembro de 1492', correta: false, explicacao: 'Essa data é do fim de 1492, ano em que Colombo chegou à América. Cabral chegou em 22/04/1500.' }
    ] },
  { id: 14, tipo: 'navegacoes', q: 'Quem escreveu a famosa carta contando ao rei de Portugal como era a terra nova?',
    alternativas: [
      { texto: 'Pero Vaz de Caminha', correta: true, explicacao: 'Ele era o escrivão da frota e descreveu as terras e os povos encontrados por Cabral.' },
      { texto: 'Vasco da Gama', correta: false, explicacao: 'Vasco da Gama foi navegador, não escrivão. Quem escreveu a carta foi Pero Vaz de Caminha.' },
      { texto: 'Bartolomeu Dias', correta: false, explicacao: 'Bartolomeu Dias navegou pela África. A carta sobre o Brasil foi de Pero Vaz de Caminha.' }
    ] },
  { id: 15, tipo: 'navegacoes', q: 'Como se chamava a árvore que os portugueses encontraram no Brasil e que tingia tecidos de vermelho?',
    alternativas: [
      { texto: 'Pau-brasil', correta: true, explicacao: 'A madeira avermelhada do pau-brasil virava um corante vermelho usado para tingir roupas!' },
      { texto: 'Cana-de-açúcar', correta: false, explicacao: 'A cana-de-açúcar é usada para fazer açúcar, e veio depois! A árvore era o pau-brasil.' },
      { texto: 'Mandacaru', correta: false, explicacao: 'O mandacaru é um cacto do Nordeste. A árvore do corante vermelho era o pau-brasil.' }
    ] },
  { id: 16, tipo: 'navegacoes', q: 'O que os portugueses faziam com o corante do pau-brasil?',
    alternativas: [
      { texto: 'Tingiam tecidos de vermelho', correta: true, explicacao: 'O corante vermelho era muito usado na Europa para colorir tecidos e roupas!' },
      { texto: 'Cozinhavam a comida', correta: false, explicacao: 'O corante não era usado para cozinhar: ele tingia tecidos de vermelho.' },
      { texto: 'Escreviam cartas', correta: false, explicacao: 'Para escrever usavam tinta de outra forma. O corante do pau-brasil tingia tecidos.' }
    ] },
  { id: 17, tipo: 'navegacoes', q: 'O que era o escambo?',
    alternativas: [
      { texto: 'Uma troca de objetos sem usar dinheiro', correta: true, explicacao: 'Os portugueses trocavam espelhos, facas e contas de vidro por pau-brasil com os indígenas!' },
      { texto: 'Um tipo de navio', correta: false, explicacao: 'Navio era a caravela! Escambo é a troca de objetos sem dinheiro.' },
      { texto: 'Uma dança dos indígenas', correta: false, explicacao: 'Escambo não é dança: é a troca de objetos sem usar dinheiro.' }
    ] },
  { id: 18, tipo: 'navegacoes', q: 'O que os portugueses ofereciam aos indígenas no escambo?',
    alternativas: [
      { texto: 'Espelhos, facas e contas de vidro', correta: true, explicacao: 'Esses objetos encantavam os indígenas, que trocavam a madeira do pau-brasil por eles.' },
      { texto: 'Barcos a vapor', correta: false, explicacao: 'Os barcos a vapor só apareceram séculos depois! No escambo eram espelhos, facas e contas de vidro.' },
      { texto: 'Ouro e prata', correta: false, explicacao: 'Ouro e prata não eram dados no escambo. Os objetos trocados eram espelhos, facas e contas de vidro.' }
    ] },
  { id: 19, tipo: 'navegacoes', q: 'Para que serviam as feitorias construídas no litoral?',
    alternativas: [
      { texto: 'Para guardar a madeira do pau-brasil antes do embarque', correta: true, explicacao: 'As feitorias eram pequenas fortalezas no litoral onde a madeira ficava guardada.' },
      { texto: 'Para morar com os indígenas', correta: false, explicacao: 'As feitorias serviam para guardar a madeira e proteger o comércio, não para moradia.' },
      { texto: 'Para ensinar os filhos dos portugueses', correta: false, explicacao: 'As feitorias eram fortalezas de comércio: guardavam o pau-brasil antes do embarque.' }
    ] },
  { id: 20, tipo: 'navegacoes', q: 'Quem também tentava levar pau-brasil escondido do Brasil?',
    alternativas: [
      { texto: 'Os franceses', correta: true, explicacao: 'Os franceses contrabandeavam pau-brasil, e os portugueses precisavam defendê-lo!' },
      { texto: 'Os japoneses', correta: false, explicacao: 'Não! Quem contrabandeava o pau-brasil eram os franceses.' },
      { texto: 'Os alemães', correta: false, explicacao: 'Os contrabandistas eram os franceses, que levavam a madeira escondida.' }
    ] },
  { id: 21, tipo: 'navegacoes', q: 'Quem eram os povos que viviam no Brasil quando os portugueses chegaram?',
    alternativas: [
      { texto: 'Os povos indígenas', correta: true, explicacao: 'O Brasil já era habitado por muitos povos indígenas, com línguas e costumes próprios!' },
      { texto: 'Os africanos', correta: false, explicacao: 'Os africanos vieram depois, trazidos à força para o trabalho. Quem já vivia aqui eram os indígenas.' },
      { texto: 'Os espanhóis', correta: false, explicacao: 'Os espanhóis chegaram depois como colonizadores. Os moradores daqui eram os povos indígenas.' }
    ] },
  { id: 22, tipo: 'navegacoes', q: 'O que aconteceu no primeiro encontro entre portugueses e indígenas?',
    alternativas: [
      { texto: 'Eles trocaram presentes', correta: true, explicacao: 'No primeiro contato, os dois grupos trocaram presentes e ficaram se conhecendo!' },
      { texto: 'Começou uma guerra na hora', correta: false, explicacao: 'No primeiro contato houve troca de presentes. As brigas vieram muito depois.' },
      { texto: 'Os indígenas fugiram para sempre', correta: false, explicacao: 'Não! Eles se encontraram, trocaram presentes e passaram a fazer escambo.' }
    ] },
  { id: 23, tipo: 'navegacoes', q: 'Por que Portugal não tinha um caminho fácil para as Índias?',
    alternativas: [
      { texto: 'Porque o caminho por terra era longo e passava por lugares perigosos', correta: true, explicacao: 'A rota por terra passava por desertos e vários reinos, e cada um cobrava caro! Por isso Portugal buscou o mar.' },
      { texto: 'Porque as Índias ficavam ao lado de Portugal', correta: false, explicacao: 'As Índias ficavam muito longe! O caminho por terra era longo, caro e perigoso.' },
      { texto: 'Porque não existiam mapas', correta: false, explicacao: 'Mapas existiam, mas o caminho por terra era mesmo muito longo e perigoso.' }
    ] },
  { id: 24, tipo: 'navegacoes', q: 'O que os portugueses queriam encontrar para facilitar as viagens de volta para casa?',
    alternativas: [
      { texto: 'Novas rotas pelo mar', correta: true, explicacao: 'Eles buscavam uma rota marítima para as Índias, evitando o caminho por terra.' },
      { texto: 'Cidades de ouro', correta: false, explicacao: 'A busca inicial era pela rota marítima para as Índias e suas especiarias.' },
      { texto: 'Um trem mais rápido', correta: false, explicacao: 'Naquela época não existiam trens! A saída era encontrar rotas pelo mar.' }
    ] },
  { id: 25, tipo: 'navegacoes', q: 'Em que lugar do Brasil Cabral chegou primeiro?',
    alternativas: [
      { texto: 'No litoral da Bahia (região de Porto Seguro)', correta: true, explicacao: 'A frota de Cabral chegou no litoral, na região onde hoje fica Porto Seguro, na Bahia!' },
      { texto: 'No Amazonas', correta: false, explicacao: 'Cabral chegou no litoral da Bahia, não no Amazonas!' },
      { texto: 'No Rio Grande do Sul', correta: false, explicacao: 'A chegada foi no litoral da Bahia, perto de Porto Seguro.' }
    ] },
  { id: 26, tipo: 'navegacoes', q: 'O que os portugueses usavam para registrar as terras descobertas?',
    alternativas: [
      { texto: 'Mapas e cartas de navegação', correta: true, explicacao: 'Eles desenhavam mapas e escreviam cartas, como a de Pero Vaz de Caminha, para registrar tudo!' },
      { texto: 'Câmeras de fotos', correta: false, explicacao: 'Naquela época ainda não existiam câmeras! Eles usavam mapas e cartas.' },
      { texto: 'Televisões', correta: false, explicacao: 'A televisão nem existia! Os registros eram feitos em mapas e cartas de navegação.' }
    ] },
  { id: 27, tipo: 'navegacoes', q: 'As especiarias eram valiosas porque...',
    alternativas: [
      { texto: 'eram raras e deixavam a comida mais saborosa e conservada', correta: true, explicacao: 'Elas eram raras na Europa e quem as tinha podia vender muito caro!' },
      { texto: 'eram usadas para construir navios', correta: false, explicacao: 'Especiarias são temperos: pimenta, cravo, canela. Não se usava para construir navios.' },
      { texto: 'eram fáceis de encontrar em Portugal', correta: false, explicacao: 'Se fossem fáceis, não valeriam tanto! Elas eram raras e muito caras na Europa.' }
    ] },
  { id: 28, tipo: 'navegacoes', q: 'Quem patrocinou as viagens de Colombo?',
    alternativas: [
      { texto: 'Os reis da Espanha', correta: true, explicacao: 'Fernando e Isabel, reis da Espanha, apoiaram a viagem de Colombo em 1492!' },
      { texto: 'O rei de Portugal', correta: false, explicacao: 'Foi a Espanha que patrocinou Colombo. Portugal ficou com as rotas pelo contorno da África.' },
      { texto: 'O imperador do Brasil', correta: false, explicacao: 'O Brasil nem existia! As viagens de Colombo foram patrocinadas pela Espanha.' }
    ] },
  { id: 29, tipo: 'navegacoes', q: 'O que os indígenas usavam para tingir tecidos antes da chegada dos portugueses?',
    alternativas: [
      { texto: 'Tintas naturais de plantas e frutos', correta: true, explicacao: 'Os povos indígenas já conheciam muitas tintas naturais feitas com plantas!' },
      { texto: 'Tintas de fábrica', correta: false, explicacao: 'Não existiam fábricas! Eles usavam tintas naturais de plantas e frutos.' },
      { texto: 'Corante do pau-brasil comprado dos portugueses', correta: false, explicacao: 'Foi o contrário: os portugueses é que levavam o pau-brasil daqui para tingir tecidos lá.' }
    ] },
  { id: 30, tipo: 'navegacoes', q: 'Por que o pau-brasil quase desapareceu?',
    alternativas: [
      { texto: 'Porque era cortado sem parar para ser levado à Europa', correta: true, explicacao: 'As árvores eram cortadas em grande quantidade e a árvore quase sumiu!' },
      { texto: 'Porque o clima mudou da noite para o dia', correta: false, explicacao: 'O problema foi o corte exagerado, feito sem parar para mandar a madeira para a Europa.' },
      { texto: 'Porque os indígenas queimaram todas as árvores', correta: false, explicacao: 'Não! Foram os cortadores que derrubaram o pau-brasil em quantidade enorme.' }
    ] },

  // ===== CAPÍTULO 6 — DO PAU-BRASIL À MINERAÇÃO (30) =====
  { id: 31, tipo: 'mineracao', q: 'Com o pau-brasil quase acabando, o que Portugal fez?',
    alternativas: [
      { texto: 'Começou a povoar a colônia e explorar outras riquezas', correta: true, explicacao: 'Portugal passou a se interessar mais pelo Brasil: povoar, plantar e buscar riquezas novas.' },
      { texto: 'Desistiu do Brasil', correta: false, explicacao: 'Não desistiu! Portugal investiu no povoamento e em novas explorações, como a cana e o ouro.' },
      { texto: 'Devolveu o Brasil aos indígenas', correta: false, explicacao: 'Portugal ficou e explorou ainda mais: açúcar, ouro e outras riquezas.' }
    ] },
  { id: 32, tipo: 'mineracao', q: 'O que era plantado nos engenhos do Nordeste?',
    alternativas: [
      { texto: 'Cana-de-açúcar', correta: true, explicacao: 'A cana-de-açúcar virava açúcar nos engenhos. O açúcar ficou conhecido como "ouro branco"!' },
      { texto: 'Algodão', correta: false, explicacao: 'O algodão veio depois e em outras regiões. Nos engenhos do Nordeste plantava-se cana-de-açúcar.' },
      { texto: 'Café', correta: false, explicacao: 'O café ficou famoso no Sudeste, muito tempo depois. Nos engenhos era a cana-de-açúcar.' }
    ] },
  { id: 33, tipo: 'mineracao', q: 'O que era um engenho?',
    alternativas: [
      { texto: 'Uma fazenda que transformava a cana em açúcar', correta: true, explicacao: 'No engenho, a cana era espremida e o caldo virava açúcar, que era vendido na Europa!' },
      { texto: 'Um navio para atravessar o oceano', correta: false, explicacao: 'Navio era a caravela! O engenho era a fazenda que fazia açúcar da cana.' },
      { texto: 'Uma ferramenta para cavar ouro', correta: false, explicacao: 'O engenho fazia açúcar, não ouro! Ele espremia a cana-de-açúcar.' }
    ] },
  { id: 34, tipo: 'mineracao', q: 'Por que o açúcar ficou conhecido como "ouro branco"?',
    alternativas: [
      { texto: 'Porque era muito valioso, como o ouro', correta: true, explicacao: 'O açúcar era caríssimo na Europa, quase como ouro! Por isso ganhou esse apelido.' },
      { texto: 'Porque era branco e brilhava no sol', correta: false, explicacao: 'Ele era valioso mesmo: o açúcar quase valia ouro na Europa.' },
      { texto: 'Porque era feito de ouro', correta: false, explicacao: 'Era feito de cana! O apelido "ouro branco" era porque custava muito caro.' }
    ] },
  { id: 35, tipo: 'mineracao', q: 'Quem trabalhava nos engenhos no início da colonização?',
    alternativas: [
      { texto: 'Indígenas e depois africanos, escravizados à força', correta: true, explicacao: 'O trabalho escravo era cruel: primeiro indígenas foram escravizados, depois africanos trazidos à força.' },
      { texto: 'Somente portugueses ricos', correta: false, explicacao: 'Os ricos eram donos dos engenhos. Quem trabalhava duro eram os escravizados: indígenas e africanos.' },
      { texto: 'Máquinas e robôs', correta: false, explicacao: 'Máquinas não existiam! O trabalho pesado era feito por pessoas escravizadas.' }
    ] },
  { id: 36, tipo: 'mineracao', q: 'Onde a cana-de-açúcar se desenvolveu melhor no Brasil?',
    alternativas: [
      { texto: 'No litoral do Nordeste', correta: true, explicacao: 'O clima quente e úmido do Nordeste era perfeito para a cana-de-açúcar!' },
      { texto: 'No frio do Sul', correta: false, explicacao: 'No Sul faz frio! A cana gostou do calor do litoral do Nordeste.' },
      { texto: 'Nas montanhas de Minas Gerais', correta: false, explicacao: 'Minas Gerais ficou famosa pelo ouro, não pela cana. A cana foi para o litoral do Nordeste.' }
    ] },
  { id: 37, tipo: 'mineracao', q: 'Quem eram os bandeirantes?',
    alternativas: [
      { texto: 'Homens que partiam em expedições pelo interior à procura de riquezas', correta: true, explicacao: 'Eles saíam de São Paulo para explorar o interior em busca de ouro e pedras preciosas.' },
      { texto: 'Navegadores que cruzavam o oceano', correta: false, explicacao: 'Os bandeirantes exploravam o interior do Brasil, não o oceano!' },
      { texto: 'Indígenas que defendiam suas terras', correta: false, explicacao: 'Os bandeirantes eram os invasores que procuravam riquezas e capturavam indígenas.' }
    ] },
  { id: 38, tipo: 'mineracao', q: 'De qual cidade os bandeirantes partiam em suas expedições?',
    alternativas: [
      { texto: 'São Paulo', correta: true, explicacao: 'São Paulo foi o ponto de partida das famosas expedições dos bandeirantes!' },
      { texto: 'Salvador', correta: false, explicacao: 'As expedições partiam de São Paulo, não de Salvador.' },
      { texto: 'Porto Seguro', correta: false, explicacao: 'Porto Seguro foi onde Cabral chegou! Os bandeirantes partiam de São Paulo.' }
    ] },
  { id: 39, tipo: 'mineracao', q: 'O que os bandeirantes procuravam no interior do Brasil?',
    alternativas: [
      { texto: 'Ouro e pedras preciosas', correta: true, explicacao: 'Eles exploravam o interior atrás de riquezas como ouro e pedras preciosas!' },
      { texto: 'Especiarias para cozinhar', correta: false, explicacao: 'Especiarias eram buscadas nas Índias. Os bandeirantes procuravam ouro e pedras preciosas.' },
      { texto: 'Madeira de pau-brasil', correta: false, explicacao: 'O pau-brasil ficava no litoral. No interior, os bandeirantes procuravam ouro e pedras preciosas.' }
    ] },
  { id: 40, tipo: 'mineracao', q: 'Em qual região do Brasil os bandeirantes encontraram ouro?',
    alternativas: [
      { texto: 'Minas Gerais', correta: true, explicacao: 'No fim do século XVII, ouro foi encontrado nas montanhas de Minas Gerais!' },
      { texto: 'Amazonas', correta: false, explicacao: 'O primeiro grande ouro foi achado em Minas Gerais, não no Amazonas.' },
      { texto: 'Piauí', correta: false, explicacao: 'Foi em Minas Gerais! Depois também em Goiás e Mato Grosso.' }
    ] },
  { id: 41, tipo: 'mineracao', q: 'Como era chamado o ouro encontrado misturado com areia e cascalho dos rios?',
    alternativas: [
      { texto: 'Ouro de aluvião', correta: true, explicacao: 'O ouro de aluvião são pedrinhas e pó de ouro misturados com areia nos rios!' },
      { texto: 'Ouro branco', correta: false, explicacao: 'Ouro branco era o apelido do açúcar! O ouro dos rios é o ouro de aluvião.' },
      { texto: 'Ouro de fundição', correta: false, explicacao: 'Fundição era onde o ouro virava barra. O ouro dos rios é o de aluvião.' }
    ] },
  { id: 42, tipo: 'mineracao', q: 'Qual objeto era usado para separar o ouro de aluvião da areia?',
    alternativas: [
      { texto: 'A bateia', correta: true, explicacao: 'A bateia é uma bacia que gira com areia e água até o ouro ficar no fundo!' },
      { texto: 'A caravela', correta: false, explicacao: 'Caravela é navio! Quem separava o ouro da areia era a bateia.' },
      { texto: 'A bússola', correta: false, explicacao: 'A bússola mostra a direção. Para achar o ouro no rio, usava-se a bateia.' }
    ] },
  { id: 43, tipo: 'mineracao', q: 'Além de Minas Gerais, onde mais foi encontrado ouro no Brasil?',
    alternativas: [
      { texto: 'Goiás e Mato Grosso', correta: true, explicacao: 'Depois de Minas Gerais, ouro também foi achado em Goiás e no Mato Grosso!' },
      { texto: 'Piauí e Roraima', correta: false, explicacao: 'Os outros grandes achados foram em Goiás e Mato Grosso.' },
      { texto: 'Rio Grande do Sul e Paraná', correta: false, explicacao: 'Não! Depois de Minas Gerais, o ouro foi para Goiás e Mato Grosso.' }
    ] },
  { id: 44, tipo: 'mineracao', q: 'Qual cidade cresceu e enriqueceu por causa das minas de ouro?',
    alternativas: [
      { texto: 'Vila Rica (hoje Ouro Preto)', correta: true, explicacao: 'Vila Rica ficou riquíssima com o ouro, com igrejas cheias de arte. Hoje é Ouro Preto!' },
      { texto: 'Recife', correta: false, explicacao: 'Recife era importante pelo açúcar. Quem enriqueceu com o ouro foi Vila Rica (Ouro Preto).' },
      { texto: 'Porto Alegre', correta: false, explicacao: 'Porto Alegre fica no Sul! A cidade das minas era Vila Rica, hoje Ouro Preto.' }
    ] },
  { id: 45, tipo: 'mineracao', q: 'O que era o "quinto do ouro"?',
    alternativas: [
      { texto: 'Uma parte do ouro (20%) que o rei de Portugal exigia', correta: true, explicacao: 'O rei levava 1 de cada 5 partes do ouro encontrado — 20% de tudo!' },
      { texto: 'Uma festa com cinco dias de duração', correta: false, explicacao: 'O quinto era um imposto: 20% do ouro ia para o rei de Portugal.' },
      { texto: 'O quinto navio a chegar com ouro', correta: false, explicacao: 'Não tem nada a ver com navio! O quinto era 20% do ouro entregue ao rei.' }
    ] },
  { id: 46, tipo: 'mineracao', q: 'Quanto era o quinto do ouro?',
    alternativas: [
      { texto: '20% (1 de cada 5)', correta: true, explicacao: 'De cada 100 partes de ouro, 20 iam para o rei de Portugal.' },
      { texto: '50% (metade)', correta: false, explicacao: 'Metade seria demais! O quinto era 20%: 1 de cada 5 partes.' },
      { texto: '10% (1 de cada 10)', correta: false, explicacao: 'O quinto é 20%, ou seja, 1 de cada 5 partes do ouro.' }
    ] },
  { id: 47, tipo: 'mineracao', q: 'Para que serviam as Casas de Fundição?',
    alternativas: [
      { texto: 'Para transformar o ouro em barras e controlar o quinto', correta: true, explicacao: 'Lá o ouro virava barras e era fiscalizado, dificultando o contrabando!' },
      { texto: 'Para fundir o açúcar em barras', correta: false, explicacao: 'As Casas de Fundição eram para o ouro, não para o açúcar!' },
      { texto: 'Para construir navios', correta: false, explicacao: 'Navios eram feitos nos estaleiros. As Casas de Fundição derretiam o ouro em barras.' }
    ] },
  { id: 48, tipo: 'mineracao', q: 'O que era o contrabando de ouro?',
    alternativas: [
      { texto: 'Esconder ouro para não pagar o quinto', correta: true, explicacao: 'Quem escondia ouro do rei cometia contrabando e era muito castigado!' },
      { texto: 'Uma forma de vender açúcar', correta: false, explicacao: 'Contrabando de ouro era escondê-lo para não pagar o imposto do quinto.' },
      { texto: 'Uma festa nas minas', correta: false, explicacao: 'Contrabando não era festa: era esconder ouro para não pagar o quinto ao rei.' }
    ] },
  { id: 49, tipo: 'mineracao', q: 'O que foi a Guerra dos Emboabas?',
    alternativas: [
      { texto: 'Uma disputa entre paulistas e forasteiros pelas minas de ouro', correta: true, explicacao: 'Os paulistas que acharam o ouro brigaram com os emboabas, que vieram depois!' },
      { texto: 'Uma guerra entre portugueses e franceses no mar', correta: false, explicacao: 'Essa guerra foi em terra: paulistas contra forasteiros (emboabas) pelas minas.' },
      { texto: 'Uma briga de indígenas entre si', correta: false, explicacao: 'A Guerra dos Emboabas foi entre paulistas e forasteiros pelo direito de explorar o ouro.' }
    ] },
  { id: 50, tipo: 'mineracao', q: 'Quem eram os emboabas?',
    alternativas: [
      { texto: 'Forasteiros que vieram explorar as minas depois dos paulistas', correta: true, explicacao: 'Os paulistas chamavam de emboabas os "de fora" que chegaram atrás do ouro.' },
      { texto: 'Os reis de Portugal', correta: false, explicacao: 'Os emboabas eram forasteiros que vieram para as minas, não os reis!' },
      { texto: 'Os indígenas do litoral', correta: false, explicacao: 'Emboabas eram os forasteiros que disputaram as minas de ouro com os paulistas.' }
    ] },
  { id: 51, tipo: 'mineracao', q: 'Quem primeiro encontrou ouro em Minas Gerais?',
    alternativas: [
      { texto: 'Os bandeirantes paulistas', correta: true, explicacao: 'Foram os bandeirantes que partiram de São Paulo e acharam ouro nas montanhas de Minas!' },
      { texto: 'Os emboabas', correta: false, explicacao: 'Os emboabas chegaram depois! Quem achou o ouro primeiro foram os paulistas.' },
      { texto: 'Os franceses', correta: false, explicacao: 'Os franceses contrabandeavam pau-brasil. O ouro foi achado pelos bandeirantes paulistas.' }
    ] },
  { id: 52, tipo: 'mineracao', q: 'O que as pessoas faziam com o ouro de aluvião encontrado nos rios?',
    alternativas: [
      { texto: 'Separavam com a bateia e depois pesavam', correta: true, explicacao: 'A bateia separava o ouro da areia, e o ouro era pesado e registrado.' },
      { texto: 'Plantavam para nascer mais ouro', correta: false, explicacao: 'Ouro não se planta! Ele era separado com a bateia e pesado.' },
      { texto: 'Davam para os pássaros carregarem', correta: false, explicacao: 'Que ideia maluca! O ouro era separado da areia com a bateia.' }
    ] },
  { id: 53, tipo: 'mineracao', q: 'Como era o trabalho de quem escavava o ouro nos rios?',
    alternativas: [
      { texto: 'Duro e cansativo, quase sempre escravo', correta: true, explicacao: 'Cavar e lavar areia o dia todo era um trabalho muito pesado, feito por escravizados.' },
      { texto: 'Fácil e divertido', correta: false, explicacao: 'Era o contrário: muito pesado e cansativo, feito principalmente por escravizados.' },
      { texto: 'Feito por máquinas modernas', correta: false, explicacao: 'Não existiam máquinas! O trabalho era manual, duro e cansativo.' }
    ] },
  { id: 54, tipo: 'mineracao', q: 'Quem mandava nas minas de ouro e cobrava o quinto?',
    alternativas: [
      { texto: 'A Coroa portuguesa', correta: true, explicacao: 'Portugal controlava as minas e cobrava 20% de todo o ouro encontrado!' },
      { texto: 'Os indígenas', correta: false, explicacao: 'Quem mandava eram os portugueses, que cobravam o quinto do ouro.' },
      { texto: 'Os bandeirantes', correta: false, explicacao: 'Os bandeirantes achavam o ouro, mas o rei de Portugal mandava e cobrava o quinto.' }
    ] },
  { id: 55, tipo: 'mineracao', q: 'Além do ouro, o que os bandeirantes faziam de muito injusto?',
    alternativas: [
      { texto: 'Capturavam indígenas para escravizar', correta: true, explicacao: 'Isso era muito cruel: os bandeirantes aprisionavam povos indígenas à força.' },
      { texto: 'Plantavam flores pelo caminho', correta: false, explicacao: 'Não! Eles capturavam indígenas para escravizar e buscavam riquezas.' },
      { texto: 'Ensinaavam os indígenas a navegar', correta: false, explicacao: 'Os bandeirantes não ensinavam nada: eles capturavam indígenas e isso era injusto e cruel.' }
    ] },
  { id: 56, tipo: 'mineracao', q: 'Por que os portugueses construíram cidades perto das minas de ouro?',
    alternativas: [
      { texto: 'Para morar perto do trabalho e do comércio do ouro', correta: true, explicacao: 'Milhares de pessoas foram para as minas, e assim surgiram cidades como Vila Rica!' },
      { texto: 'Para fazer praia', correta: false, explicacao: 'Minas Gerais não tem praia! As cidades surgiram perto das minas de ouro.' },
      { texto: 'Para esconder o ouro dos portugueses', correta: false, explicacao: 'As cidades eram para viver e negociar o ouro, não para escondê-lo.' }
    ] },
  { id: 57, tipo: 'mineracao', q: 'O que aconteceu com as igrejas das cidades das minas, como Vila Rica?',
    alternativas: [
      { texto: 'Foram enfeitadas com muito ouro e obras de arte', correta: true, explicacao: 'As igrejas barrocas de Minas, como as de Ouro Preto, são famosas pela arte com ouro!' },
      { texto: 'Foram destruídas pelos emboabas', correta: false, explicacao: 'Elas foram construídas ricas e bonitas, e até hoje são famosas obras de arte.' },
      { texto: 'Ficaram sem nenhum enfeite', correta: false, explicacao: 'O contrário! Elas foram enfeitadas com ouro e esculturas maravilhosas.' }
    ] },
  { id: 58, tipo: 'mineracao', q: 'O ouro do Brasil enriqueceu quem?',
    alternativas: [
      { texto: 'Portugal, enquanto os povos daqui eram explorados', correta: true, explicacao: 'O ouro foi quase todo para Portugal, e o Brasil ficou com a exploração e as riquezas levadas.' },
      { texto: 'Os indígenas do litoral', correta: false, explicacao: 'Os indígenas foram os mais prejudicados! O ouro enriqueceu Portugal.' },
      { texto: 'Todos igualmente', correta: false, explicacao: 'Não foi igual! Portugal ficou rico enquanto os povos daqui foram explorados.' }
    ] },
  { id: 59, tipo: 'mineracao', q: 'O que as pessoas da época faziam para guardar o ouro e não pagar o quinto?',
    alternativas: [
      { texto: 'Escondiam o ouro de várias maneiras, o que era contrabando', correta: true, explicacao: 'Muita gente escondia o ouro e, quando pegavam, o castigo era severo!' },
      { texto: 'Entregavam tudo ao rei de bom grado', correta: false, explicacao: 'Não! Muita gente escondia ouro, cometendo contrabando para não pagar o quinto.' },
      { texto: 'Doavam para os pobres', correta: false, explicacao: 'Não! O que acontecia era o contrabando: esconder o ouro para não pagar o quinto.' }
    ] },
  { id: 60, tipo: 'mineracao', q: 'Qual é a relação entre a cana-de-açúcar e o ouro na história do Brasil?',
    alternativas: [
      { texto: 'Os dois foram riquezas exploradas por Portugal na colônia', correta: true, explicacao: 'Primeiro o açúcar ("ouro branco") e depois o ouro foram grandes riquezas exploradas por Portugal!' },
      { texto: 'O ouro era usado para fazer açúcar', correta: false, explicacao: 'O açúcar vem da cana, não do ouro! Os dois foram riquezas exploradas por Portugal.' },
      { texto: 'O açúcar foi encontrado nas minas de ouro', correta: false, explicacao: 'A cana era plantada no Nordeste e o ouro era encontrado nas minas. Os dois enriqueceram Portugal.' }
    ] }
];

// ===== BANCO DO JOGO DOS DESCOBRIMENTOS (30) =====
const jogoBanco = [
  { q: 'Quem chegou ao Brasil em 1500?', opcoes: ['Pedro Álvares Cabral', 'Colombo', 'Vasco da Gama'], correta: 'Pedro Álvares Cabral' },
  { q: 'Navio rápido com velas usado nas navegações?', opcoes: ['caravela', 'submarino', 'jangada'], correta: 'caravela' },
  { q: 'O que significa Pindorama?', opcoes: ['terra das palmeiras', 'terra do fogo', 'terra do ouro'], correta: 'terra das palmeiras' },
  { q: 'Instrumento que aponta para o Norte?', opcoes: ['bússola', 'astrolábio', 'telescópio'], correta: 'bússola' },
  { q: 'O que os portugueses buscavam nas Índias?', opcoes: ['especiarias', 'ouro', 'pau-brasil'], correta: 'especiarias' },
  { q: 'Quem chegou às Índias navegando pelo mar?', opcoes: ['Vasco da Gama', 'Cabral', 'Bartolomeu Dias'], correta: 'Vasco da Gama' },
  { q: 'Príncipe que incentivou as navegações em Portugal?', opcoes: ['Infante Dom Henrique', 'Dom Pedro I', 'Dom João'], correta: 'Infante Dom Henrique' },
  { q: 'Árvore que tingia tecidos de vermelho?', opcoes: ['pau-brasil', 'canela', 'mandacaru'], correta: 'pau-brasil' },
  { q: 'Troca de objetos sem usar dinheiro?', opcoes: ['escambo', 'leilão', 'venda'], correta: 'escambo' },
  { q: 'Quem contornou o Cabo da Boa Esperança?', opcoes: ['Bartolomeu Dias', 'Colombo', 'Cabral'], correta: 'Bartolomeu Dias' },
  { q: 'Em que ano Colombo chegou à América?', opcoes: ['1492', '1500', '1822'], correta: '1492' },
  { q: 'Por que Colombo chamou os povos de "índios"?', opcoes: ['pensou que estava nas Índias', 'porque eram índios de verdade', 'por sorte'], correta: 'pensou que estava nas Índias' },
  { q: 'Quem escreveu a carta sobre a terra nova ao rei?', opcoes: ['Pero Vaz de Caminha', 'Vasco da Gama', 'Dom Henrique'], correta: 'Pero Vaz de Caminha' },
  { q: 'Fortalezas no litoral que guardavam o pau-brasil?', opcoes: ['feitorias', 'casas de fundição', 'engenhos'], correta: 'feitorias' },
  { q: 'Quem contrabandeava pau-brasil escondido?', opcoes: ['os franceses', 'os japoneses', 'os alemães'], correta: 'os franceses' },
  { q: 'Planta que virava açúcar nos engenhos?', opcoes: ['cana-de-açúcar', 'café', 'algodão'], correta: 'cana-de-açúcar' },
  { q: 'Apelido do açúcar, que era muito valioso?', opcoes: ['ouro branco', 'ouro amarelo', 'prata'], correta: 'ouro branco' },
  { q: 'Quem explorava o interior atrás de riquezas?', opcoes: ['bandeirantes', 'navegadores', 'escravos do rei'], correta: 'bandeirantes' },
  { q: 'De qual cidade partiam os bandeirantes?', opcoes: ['São Paulo', 'Salvador', 'Recife'], correta: 'São Paulo' },
  { q: 'Onde os bandeirantes acharam ouro primeiro?', opcoes: ['Minas Gerais', 'Piauí', 'Amazonas'], correta: 'Minas Gerais' },
  { q: 'Ouro misturado com areia e cascalho dos rios?', opcoes: ['ouro de aluvião', 'ouro branco', 'ouro de fundição'], correta: 'ouro de aluvião' },
  { q: 'Objeto usado para separar o ouro da areia?', opcoes: ['bateia', 'bússola', 'caravela'], correta: 'bateia' },
  { q: 'Cidade famosa que nasceu das minas de ouro?', opcoes: ['Vila Rica (Ouro Preto)', 'Recife', 'Belém'], correta: 'Vila Rica (Ouro Preto)' },
  { q: 'Imposto de 20% do ouro para o rei?', opcoes: ['quinto do ouro', 'décimo do ouro', 'taxa do açúcar'], correta: 'quinto do ouro' },
  { q: 'Esconder ouro para não pagar o imposto?', opcoes: ['contrabando', 'escambo', 'povoamento'], correta: 'contrabando' },
  { q: 'Disputa entre paulistas e forasteiros pelas minas?', opcoes: ['Guerra dos Emboabas', 'Guerra do Paraguai', 'Revolução de 30'], correta: 'Guerra dos Emboabas' },
  { q: 'Quem eram os emboabas?', opcoes: ['forasteiros que vieram para as minas', 'os reis de Portugal', 'os indígenas do litoral'], correta: 'forasteiros que vieram para as minas' },
  { q: 'Onde o ouro virava barras controladas?', opcoes: ['Casas de Fundição', 'feitorias', 'engenhos'], correta: 'Casas de Fundição' },
  { q: 'Local onde a cana virava açúcar?', opcoes: ['engenho', 'feitoria', 'mina'], correta: 'engenho' },
  { q: 'O que os indígenas faziam com tintas de plantas?', opcoes: ['tingiam tecidos e enfeitavam-se', 'construíam navios', 'faziam bússolas'], correta: 'tingiam tecidos e enfeitavam-se' }
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

// ===== JOGO DOS DESCOBRIMENTOS =====
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
