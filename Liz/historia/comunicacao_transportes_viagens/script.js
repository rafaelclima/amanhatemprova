// ===== BANCO DE QUESTÕES (60) =====
// Comunicação | Registros de memória | Transportes | Marco Polo e Rota da Seda | Arte rupestre
const bancoQuestoes = [
  // ===== COMUNICAÇÃO E REGISTROS (1-17) =====
  {
    id: 1, tipo: 'comunicacao',
    q: '📬 O que é comunicação?',
    alternativas: [
      { texto: 'É fazer uma mensagem chegar a outra pessoa, por palavras, gestos, desenhos ou sons', correta: true, explicacao: 'Isso! Comunicar é levar uma mensagem a alguém — não é só falar! 🗣️' },
      { texto: 'É somente falar em voz alta', correta: false, explicacao: 'Falar é só uma forma de comunicar! Também comunicamos com desenhos, gestos e sons!' },
      { texto: 'É somente usar o celular', correta: false, explicacao: 'O celular é uma ferramenta moderna! A comunicação existe desde muito antes dele!' }
    ]
  },
  {
    id: 2, tipo: 'comunicacao',
    q: '🚨 Qual destas é uma função da comunicação?',
    alternativas: [
      { texto: 'Alertar sobre um perigo', correta: true, explicacao: 'Isso! Alertar perigos é uma das quatro funções: informar, expressar sentimentos, alertar e compartilhar cultura! 🚨' },
      { texto: 'Impedir que as pessoas conversem', correta: false, explicacao: 'Comunicação aproxima as pessoas! Impedir a conversa não é uma função dela!' },
      { texto: 'Guardar objetos na mochila', correta: false, explicacao: 'Guardar objetos não é comunicar! As funções são informar, emocionar, alertar e compartilhar cultura!' }
    ]
  },
  {
    id: 3, tipo: 'comunicacao',
    q: '❤️ Ana mandou um desenho para a avó dizendo que está com saudade. Qual função da comunicação ela usou?',
    alternativas: [
      { texto: 'Expressar sentimentos', correta: true, explicacao: 'Isso! O desenho mostrou o sentimento dela: saudade! ❤️' },
      { texto: 'Alertar um perigo', correta: false, explicacao: 'Não havia perigo! O desenho serviu para expressar um sentimento!' },
      { texto: 'Vender um produto', correta: false, explicacao: 'Nada de venda! Foi uma forma carinhosa de expressar sentimentos!' }
    ]
  },
  {
    id: 4, tipo: 'comunicacao',
    q: '💃 Um grupo ensina uma dança típica para outra turma. Qual função da comunicação aparece?',
    alternativas: [
      { texto: 'Compartilhar cultura', correta: true, explicacao: 'Isso! Danças, músicas e festas fazem parte da cultura e são compartilhadas! 💃' },
      { texto: 'Alertar um perigo', correta: false, explicacao: 'Não era um alerta! Era uma forma de compartilhar cultura!' },
      { texto: 'Guardar dinheiro', correta: false, explicacao: 'Dinheiro não tem nada a ver com isso! A dança compartilha cultura!' }
    ]
  },
  {
    id: 5, tipo: 'comunicacao',
    q: '👮 O guarda de trânsito usou um apito para avisar que um carro estava vindo. Qual função da comunicação foi usada?',
    alternativas: [
      { texto: 'Alertar sobre um perigo', correta: true, explicacao: 'Isso! O apito avisou de um risco na hora — alertar perigos é comunicar! 🚨' },
      { texto: 'Expressar sentimentos', correta: false, explicacao: 'O apito não estava mostrando sentimento! Era um alerta de perigo!' },
      { texto: 'Compartilhar uma receita', correta: false, explicacao: 'Receita? Nada disso! O apito serviu para alertar sobre o carro!' }
    ]
  },
  {
    id: 6, tipo: 'comunicacao',
    q: '✉️ Qual meio de comunicação escrito existia muito antes do telefone e podia demorar dias ou semanas para chegar?',
    alternativas: [
      { texto: 'A carta', correta: true, explicacao: 'Isso! A carta era escrita à mão e levada por mensageiros ou pelo correio! ✉️' },
      { texto: 'A internet', correta: false, explicacao: 'A internet é muito mais nova! Antes dela, usavam-se cartas!' },
      { texto: 'O telefone celular', correta: false, explicacao: 'O celular é recentíssimo! A carta existe há muito mais tempo!' }
    ]
  },
  {
    id: 7, tipo: 'comunicacao',
    q: '⚡ Para que serviam os cabos elétricos do telégrafo?',
    alternativas: [
      { texto: 'Para levar os impulsos elétricos com as mensagens', correta: true, explicacao: 'Isso! Os cabos conduziam os impulsos elétricos, até por baixo do oceano! ⚡' },
      { texto: 'Para aquecer a comida dos operadores', correta: false, explicacao: 'Nada de comida! Os cabos serviam para transmitir as mensagens!' },
      { texto: 'Para segurar as placas de trânsito', correta: false, explicacao: 'Eles eram cabos de comunicação, não postes de placa!' }
    ]
  },
  {
    id: 8, tipo: 'comunicacao',
    q: '🔘 O telégrafo transmitia mensagens usando qual código?',
    alternativas: [
      { texto: 'O código Morse, com pontos e traços', correta: true, explicacao: 'Isso! O código Morse transformava letras em pontos e traços! 🔘➖' },
      { texto: 'Emojis coloridos', correta: false, explicacao: 'Emojis são de hoje! No telégrafo eram pontos e traços do código Morse!' },
      { texto: 'Fotografias em preto e branco', correta: false, explicacao: 'O telégrafo não mandava fotos! Ele mandava sinais elétricos em código Morse!' }
    ]
  },
  {
    id: 9, tipo: 'comunicacao',
    q: '🔊 Como o operador do telégrafo percebia que uma mensagem estava chegando?',
    alternativas: [
      { texto: 'Ele ouvia sinais sonoros, os "bips", e traduzia o código', correta: true, explicacao: 'Isso! O aparelho fazia bips, e o operador traduzia os pontos e traços! 🔊' },
      { texto: 'Ele recebia um vídeo no celular', correta: false, explicacao: 'Celular e vídeo não existiam na época do telégrafo! Eram sinais sonoros!' },
      { texto: 'Ele lia a letra escrita em uma folha que chegava pelo correio', correta: false, explicacao: 'Isso era a carta! O telégrafo usava impulsos elétricos e sinais sonoros!' }
    ]
  },
  {
    id: 10, tipo: 'comunicacao',
    q: '☎️ Quem inventou o telefone, em 1876?',
    alternativas: [
      { texto: 'Alexander Graham Bell', correta: true, explicacao: 'Isso! Graham Bell inventou o telefone em 1876! ☎️' },
      { texto: 'Santos Dumont', correta: false, explicacao: 'Santos Dumont ficou famoso pelo avião 14-bis, não pelo telefone!' },
      { texto: 'Marco Polo', correta: false, explicacao: 'Marco Polo viveu séculos antes do telefone! O inventor foi Graham Bell!' }
    ]
  },
  {
    id: 11, tipo: 'comunicacao',
    q: '🗣️ Qual foi a grande novidade que o telefone trouxe?',
    alternativas: [
      { texto: 'Conversar em tempo real e ouvir a voz da outra pessoa', correta: true, explicacao: 'Isso! Pela primeira vez, a voz viajava pelos fios! 🗣️' },
      { texto: 'Enviar cartas mais rápido pelo correio', correta: false, explicacao: 'O telefone não é correio! Ele transmite a voz pela eletricidade!' },
      { texto: 'Transmitir televisão em cores', correta: false, explicacao: 'Televisão é outra invenção! O telefone trouxe a conversa por voz!' }
    ]
  },
  {
    id: 12, tipo: 'comunicacao',
    q: '🌐 O que é a internet?',
    alternativas: [
      { texto: 'Uma rede mundial de computadores que troca informações', correta: true, explicacao: 'Isso! A internet liga computadores e celulares do mundo todo! 🌐' },
      { texto: 'Um tipo de telefone com fio', correta: false, explicacao: 'Telefone com fio é uma coisa; internet é a rede que conecta aparelhos!' },
      { texto: 'Um aparelho de TV antigo', correta: false, explicacao: 'A internet não é um aparelho! É uma rede mundial de computadores!' }
    ]
  },
  {
    id: 13, tipo: 'comunicacao',
    q: '🕰️ Qual é a ordem correta na linha do tempo da comunicação?',
    alternativas: [
      { texto: 'Carta ➡️ telégrafo ➡️ telefone ➡️ internet', correta: true, explicacao: 'Isso! Primeiro a carta, depois o telégrafo, o telefone e, por fim, a internet! 🕰️' },
      { texto: 'Internet ➡️ telefone ➡️ carta ➡️ telégrafo', correta: false, explicacao: 'Está ao contrário! A internet é a mais nova de todas!' },
      { texto: 'Telefone ➡️ carta ➡️ internet ➡️ telégrafo', correta: false, explicacao: 'A carta veio muito antes do telefone! A ordem é carta, telégrafo, telefone e internet!' }
    ]
  },
  {
    id: 14, tipo: 'comunicacao',
    q: '📺 Como era a televisão no início?',
    alternativas: [
      { texto: 'Transmitia apenas em preto e branco', correta: true, explicacao: 'Isso! No começo, a TV não tinha cores: era tudo em preto e branco! ⚫⚪' },
      { texto: 'Já era colorida e tinha controle remoto', correta: false, explicacao: 'Nada disso! As cores só chegaram depois de muitos anos!' },
      { texto: 'Mostrava apenas jogos de videogame', correta: false, explicacao: 'Videogame nem existia! A TV mostrava programas em preto e branco!' }
    ]
  },
  {
    id: 15, tipo: 'comunicacao',
    q: '👨‍👩‍👧‍👦 Por que muitas famílias se reuniam para assistir televisão antigamente?',
    alternativas: [
      { texto: 'Porque poucas pessoas tinham televisor em casa', correta: true, explicacao: 'Isso! A TV era cara e rara: os vizinhos se juntavam para assistir! 👨‍👩‍👧‍👦' },
      { texto: 'Porque a TV só funcionava à noite', correta: false, explicacao: 'Ela funcionava de dia também! O motivo era que poucos tinham TV em casa!' },
      { texto: 'Porque a TV era portátil e ia para a praia', correta: false, explicacao: 'Os televisores eram grandes e pesados! As famílias se reuniam para assistir juntas!' }
    ]
  },
  {
    id: 16, tipo: 'registros',
    q: '📷 Qual destes é um exemplo de registro de memória?',
    alternativas: [
      { texto: 'Uma fotografia antiga da família', correta: true, explicacao: 'Isso! A foto guarda um momento e ajuda a lembrar como as pessoas viviam! 📷' },
      { texto: 'Uma pedra qualquer no quintal', correta: false, explicacao: 'Uma pedra sozinha não registra uma história! Uma foto, um livro ou uma carta registram!' },
      { texto: 'O barulho do vento', correta: false, explicacao: 'O vento passa e vai embora! Registros são feitos para durar e guardar a memória!' }
    ]
  },
  {
    id: 17, tipo: 'registros',
    q: '🏛️ Uma notícia de jornal de 50 anos atrás pode ser usada como...',
    alternativas: [
      { texto: 'Fonte histórica, porque registra como era a vida naquela época', correta: true, explicacao: 'Isso! Notícias antigas contam o que aconteceu e como as pessoas viviam! 🏛️' },
      { texto: 'Meio de transporte', correta: false, explicacao: 'Jornal não leva ninguém a lugar nenhum! Ele é uma fonte de informação!' },
      { texto: 'Remédio para doenças', correta: false, explicacao: 'Nada de remédio! Jornais antigos são registros históricos!' }
    ]
  },

  // ===== TRANSPORTES (18-33) =====
  {
    id: 18, tipo: 'transportes',
    q: '🚗 O que é um meio de transporte?',
    alternativas: [
      { texto: 'Tudo o que leva pessoas, animais ou cargas de um lugar para outro', correta: true, explicacao: 'Isso! Transporte serve para deslocar pessoas, animais e cargas! 🚗' },
      { texto: 'Um lugar onde as pessoas dormem', correta: false, explicacao: 'Dormir é no quarto! Transporte é o que leva coisas e pessoas de um lugar a outro!' },
      { texto: 'Um tipo de comida típica', correta: false, explicacao: 'Comida não transporta ninguém! Meio de transporte é o veículo ou animal que leva cargas e pessoas!' }
    ]
  },
  {
    id: 19, tipo: 'transportes',
    q: '🛞 Qual meio antigo tinha rodas de madeira e era puxado por bois ou cavalos para levar cargas?',
    alternativas: [
      { texto: 'A carroça', correta: true, explicacao: 'Isso! A carroça levava colheitas, madeira e pedras, bem devagar! 🛞' },
      { texto: 'A caravela', correta: false, explicacao: 'Caravela é um navio! A carroça é que tinha rodas e era puxada por animais!' },
      { texto: 'O avião', correta: false, explicacao: 'Avião voa e é moderno! A carroça é antiga e anda em terra!' }
    ]
  },
  {
    id: 20, tipo: 'transportes',
    q: '🐎 Qual meio antigo era puxado por cavalos, transportava pessoas e era mais confortável?',
    alternativas: [
      { texto: 'A carruagem', correta: true, explicacao: 'Isso! A carruagem levava pessoas e era usada por famílias ricas e nobres! 🐎' },
      { texto: 'A carroça', correta: false, explicacao: 'A carroça era mais usada para cargas! Para pessoas, a carruagem era mais confortável!' },
      { texto: 'O trem de alta velocidade', correta: false, explicacao: 'Trem-bala é moderno e usa trilhos! A carruagem é antiga e puxada por cavalos!' }
    ]
  },
  {
    id: 21, tipo: 'transportes',
    q: '⛵ Qual navio antigo usava a força do vento nas velas e foi usado nas Grandes Navegações?',
    alternativas: [
      { texto: 'A caravela', correta: true, explicacao: 'Isso! A caravela tinha velas e atravessava oceanos com a força do vento! ⛵' },
      { texto: 'O submarino', correta: false, explicacao: 'Submarino navega debaixo da água e é moderno! A caravela é antiga e usa velas!' },
      { texto: 'O ônibus', correta: false, explicacao: 'Ônibus anda na terra! A caravela é um navio a vela!' }
    ]
  },
  {
    id: 22, tipo: 'transportes',
    q: '☀️ Por onde o Sol nasce?',
    alternativas: [
      { texto: 'No leste', correta: true, explicacao: 'Isso! O Sol nasce no leste e se põe no oeste — os viajantes usavam isso para se orientar! 🌅' },
      { texto: 'No oeste', correta: false, explicacao: 'No oeste ele se PÕE! O Sol nasce no leste!' },
      { texto: 'No norte', correta: false, explicacao: 'O norte não é o lado do nascer do Sol! Ele nasce no leste!' }
    ]
  },
  {
    id: 23, tipo: 'transportes',
    q: '⭐ Qual conjunto de estrelas ajuda a encontrar o sul no Hemisfério Sul?',
    alternativas: [
      { texto: 'O Cruzeiro do Sul', correta: true, explicacao: 'Isso! O Cruzeiro do Sul é como uma bússola no céu do Hemisfério Sul! ⭐' },
      { texto: 'A Estrela Polar', correta: false, explicacao: 'A Estrela Polar indica o norte, e é vista no Hemisfério Norte! Aqui usamos o Cruzeiro do Sul!' },
      { texto: 'O Sol', correta: false, explicacao: 'O Sol é uma estrela, mas não é um conjunto de estrelas! À noite, o Cruzeiro do Sul indica o sul!' }
    ]
  },
  {
    id: 24, tipo: 'transportes',
    q: '🌙 Como a Lua ajudava os viajantes antigos?',
    alternativas: [
      { texto: 'Sua posição e suas fases ajudavam a caminhar à noite e a contar os dias', correta: true, explicacao: 'Isso! A Lua iluminava o caminho e suas fases ajudavam a medir o tempo! 🌙' },
      { texto: 'Ela servia de mapa impresso no céu', correta: false, explicacao: 'A Lua não tem mapa desenhado! Sua posição e fases é que ajudavam!' },
      { texto: 'Ela aquecia a comida dos viajantes', correta: false, explicacao: 'A Lua não é fogão! Ela ajudava na orientação e na contagem dos dias!' }
    ]
  },
  {
    id: 25, tipo: 'transportes',
    q: '🚂 O que movia o trem a vapor?',
    alternativas: [
      { texto: 'O vapor da água aquecida pelo carvão', correta: true, explicacao: 'Isso! O carvão esquentava a água, e o vapor empurrava as rodas! 🚂' },
      { texto: 'A força do vento nas velas', correta: false, explicacao: 'Velas são de caravela! O trem a vapor usava vapor de água!' },
      { texto: 'A energia do Sol', correta: false, explicacao: 'O trem a vapor usava carvão e água! A energia solar veio muito depois!' }
    ]
  },
  {
    id: 26, tipo: 'transportes',
    q: '⛽ Qual combustível movia os primeiros automóveis?',
    alternativas: [
      { texto: 'A gasolina', correta: true, explicacao: 'Isso! O motor a combustão usava gasolina! ⛽' },
      { texto: 'O vapor das velas', correta: false, explicacao: 'Velas não têm vapor! O automóvel usava combustível, como a gasolina!' },
      { texto: 'A força dos bois', correta: false, explicacao: 'Bois puxavam carroças! O automóvel tem motor e usa combustível!' }
    ]
  },
  {
    id: 27, tipo: 'transportes',
    q: '🚌 Qual transporte leva muitas pessoas juntas e cresceu junto com as cidades?',
    alternativas: [
      { texto: 'O ônibus', correta: true, explicacao: 'Isso! O ônibus leva muita gente e ajuda no transporte urbano! 🚌' },
      { texto: 'A carroça', correta: false, explicacao: 'A carroça é antiga e leva pouca carga! O ônibus é o transporte coletivo das cidades!' },
      { texto: 'O 14-bis', correta: false, explicacao: 'O 14-bis foi um avião experimental! O transporte coletivo é o ônibus!' }
    ]
  },
  {
    id: 28, tipo: 'transportes',
    q: '✈️ Quem voou com o 14-bis, em 1906?',
    alternativas: [
      { texto: 'Santos Dumont', correta: true, explicacao: 'Isso! O brasileiro Santos Dumont voou com o 14-bis em Paris! ✈️' },
      { texto: 'Alexander Graham Bell', correta: false, explicacao: 'Graham Bell inventou o telefone! O 14-bis era de Santos Dumont!' },
      { texto: 'Marco Polo', correta: false, explicacao: 'Marco Polo viveu séculos antes de existir avião! O piloto foi Santos Dumont!' }
    ]
  },
  {
    id: 29, tipo: 'transportes',
    q: '🚄 O que caracteriza os trens de alta velocidade?',
    alternativas: [
      { texto: 'Andar em trilhos eletrificados a mais de 300 km/h', correta: true, explicacao: 'Isso! Os trens-bala são rapidíssimos e usam eletricidade! 🚄' },
      { texto: 'Usar carvão e vapor para andar', correta: false, explicacao: 'Isso é o trem a vapor, do século XIX! Os trens de alta velocidade usam eletricidade!' },
      { texto: 'Voar pelo ar como um avião', correta: false, explicacao: 'Trem não voa! Ele corre em trilhos, só que muito rápido!' }
    ]
  },
  {
    id: 30, tipo: 'transportes',
    q: '🔒 Para que serve o cinto de segurança?',
    alternativas: [
      { texto: 'Para segurar o corpo em freadas fortes e batidas', correta: true, explicacao: 'Isso! O cinto protege e salva vidas! Use até no banco de trás! 🔒' },
      { texto: 'Para deixar o carro mais bonito', correta: false, explicacao: 'Cinto não é enfeite! Ele protege o corpo em uma batida!' },
      { texto: 'Para o carro andar mais rápido', correta: false, explicacao: 'O cinto não acelera o carro! Ele protege as pessoas!' }
    ]
  },
  {
    id: 31, tipo: 'transportes',
    q: '🛑 O que o freio ABS ajuda a evitar?',
    alternativas: [
      { texto: 'Que as rodas travem e o carro derrape', correta: true, explicacao: 'Isso! O ABS evita o travamento das rodas e ajuda a controlar o carro! 🛑' },
      { texto: 'Que o carro fique sem gasolina', correta: false, explicacao: 'Gasolina é outra coisa! O ABS é um sistema de freio!' },
      { texto: 'Que o motor faça barulho', correta: false, explicacao: 'O ABS não cuida do barulho do motor! Ele melhora a frenagem!' }
    ]
  },
  {
    id: 32, tipo: 'transportes',
    q: '🛣️ Qual destas melhorias nas estradas ajuda a reduzir os riscos?',
    alternativas: [
      { texto: 'Asfalto, placas, faixas pintadas e iluminação', correta: true, explicacao: 'Isso! Estradas boas e sinalizadas são mais seguras! 🛣️' },
      { texto: 'Tirar todas as placas', correta: false, explicacao: 'Sem placas, ninguém sabe o limite nem o caminho! As placas ajudam na segurança!' },
      { texto: 'Apagar as faixas da pista', correta: false, explicacao: 'As faixas organizam o trânsito! Apagá-las aumentaria o perigo!' }
    ]
  },
  {
    id: 33, tipo: 'transportes',
    q: '🕰️ Qual destes meios de transporte é o mais antigo?',
    alternativas: [
      { texto: 'A carroça', correta: true, explicacao: 'Isso! A carroça existe há milhares de anos, muito antes dos motores! 🛞' },
      { texto: 'O avião', correta: false, explicacao: 'O avião só surgiu no século XX! A carroça é muito mais antiga!' },
      { texto: 'O trem de alta velocidade', correta: false, explicacao: 'Trem-bala é recentíssimo! A carroça veio muito antes!' }
    ]
  },

  // ===== MARCO POLO E A ROTA DA SEDA (34-48) =====
  {
    id: 34, tipo: 'marco',
    q: '🐫 Quem foi Marco Polo?',
    alternativas: [
      { texto: 'Um comerciante e viajante de Veneza que foi até a China', correta: true, explicacao: 'Isso! Marco Polo viajou de Veneza até a China e contou suas histórias! 🐫' },
      { texto: 'Um inventor do telefone', correta: false, explicacao: 'O telefone foi inventado por Graham Bell! Marco Polo foi um viajante!' },
      { texto: 'Um pintor de arte rupestre', correta: false, explicacao: 'Marco Polo viveu na Idade Média, muito depois da arte rupestre! Ele foi um viajante!' }
    ]
  },
  {
    id: 35, tipo: 'marco',
    q: '🇮🇹 De onde Marco Polo partiu em 1271?',
    alternativas: [
      { texto: 'De Veneza, na Itália', correta: true, explicacao: 'Isso! A grande viagem começou em Veneza! 🇮🇹' },
      { texto: 'Do Brasil', correta: false, explicacao: 'O Brasil nem tinha sido "descoberto" pelos europeus! Ele partiu de Veneza!' },
      { texto: 'Do Japão', correta: false, explicacao: 'Ele foi em direção à Ásia, mas partiu de Veneza, na Itália!' }
    ]
  },
  {
    id: 36, tipo: 'marco',
    q: '🇨🇳 Para qual país Marco Polo viajou?',
    alternativas: [
      { texto: 'Para a China', correta: true, explicacao: 'Isso! Ele chegou à China e foi recebido pelo imperador Kublai Khan! 🇨🇳' },
      { texto: 'Para a Austrália', correta: false, explicacao: 'A viagem foi para a China, seguindo a Rota da Seda!' },
      { texto: 'Para o Egito', correta: false, explicacao: 'Ele passou por várias terras, mas o destino principal foi a China!' }
    ]
  },
  {
    id: 37, tipo: 'marco',
    q: '🧵 Por qual rota Marco Polo viajou até a China?',
    alternativas: [
      { texto: 'Pela Rota da Seda', correta: true, explicacao: 'Isso! A Rota da Seda era uma rede de caminhos entre a Europa e a Ásia! 🧵' },
      { texto: 'Pela Rodovia Transamazônica', correta: false, explicacao: 'Essa rodovia é do Brasil e do século XX! Marco Polo usou a Rota da Seda!' },
      { texto: 'Por uma linha de trem', correta: false, explicacao: 'Trens não existiam na época de Marco Polo! Ele viajou por caminhos da Rota da Seda!' }
    ]
  },
  {
    id: 38, tipo: 'marco',
    q: '👑 Quem era Kublai Khan?',
    alternativas: [
      { texto: 'O imperador mongol que governava a China e recebeu Marco Polo', correta: true, explicacao: 'Isso! Kublai Khan recebeu Marco Polo em seu palácio! 👑' },
      { texto: 'Um navegador português', correta: false, explicacao: 'Português? Nada disso! Kublai Khan era o imperador mongol da China!' },
      { texto: 'O inventor da caravela', correta: false, explicacao: 'A caravela é um navio, não uma pessoa! Kublai Khan era um imperador!' }
    ]
  },
  {
    id: 39, tipo: 'marco',
    q: '🗺️ Por quais lugares Marco Polo passou antes de chegar à China?',
    alternativas: [
      { texto: 'Pelo Oriente Médio, pela Pérsia e pela Ásia Central', correta: true, explicacao: 'Isso! Ele atravessou a Pérsia e a Ásia Central até a China! 🗺️' },
      { texto: 'Pela América do Sul e pela África do Sul', correta: false, explicacao: 'A rota dele foi por terra e mar na direção da Ásia! Passou pela Pérsia e Ásia Central!' },
      { texto: 'Pelo Polo Norte', correta: false, explicacao: 'Nada de Polo Norte! Ele passou pela Pérsia, Ásia Central e deserto de Gobi!' }
    ]
  },
  {
    id: 40, tipo: 'marco',
    q: '🐫 O que era uma caravana?',
    alternativas: [
      { texto: 'Um grupo de comerciantes, guias e animais viajando juntos', correta: true, explicacao: 'Isso! As caravanas juntavam pessoas e animais para atravessar caminhos difíceis! 🐫' },
      { texto: 'Uma única pessoa viajando sozinha', correta: false, explicacao: 'Caravana é um GRUPO! Viajar sozinho era muito perigoso!' },
      { texto: 'Um tipo de barco a vapor', correta: false, explicacao: 'Caravana não é barco! É um grupo de viajantes e animais!' }
    ]
  },
  {
    id: 41, tipo: 'marco',
    q: '🛡️ Por que os comerciantes viajavam em caravanas?',
    alternativas: [
      { texto: 'Para se protegerem de assaltos, tempestades e outros perigos', correta: true, explicacao: 'Isso! Juntos era mais seguro: havia ajuda mútua e proteção! 🛡️' },
      { texto: 'Porque era proibido viajar sozinho em Veneza', correta: false, explicacao: 'Não era uma lei! Eles se juntavam por segurança e ajuda no caminho!' },
      { texto: 'Para vender mais rápido na cidade', correta: false, explicacao: 'O motivo principal era a segurança nas viagens longas e perigosas!' }
    ]
  },
  {
    id: 42, tipo: 'marco',
    q: '🏜️ Quais perigos as caravanas enfrentavam?',
    alternativas: [
      { texto: 'Tempestades de areia, frio nas montanhas e assaltantes', correta: true, explicacao: 'Isso! Desertos, montanhas e assaltos eram grandes riscos na Rota da Seda! 🏜️' },
      { texto: 'Excesso de semáforos no deserto', correta: false, explicacao: 'Semáforos são invenção moderna! Os perigos eram tempestades e assaltos!' },
      { texto: 'Trânsito de carros na areia', correta: false, explicacao: 'Carros não existiam! As caravanas andavam com camelos e outros animais!' }
    ]
  },
  {
    id: 43, tipo: 'marco',
    q: '💎 Quais produtos eram trazidos da Ásia pela Rota da Seda?',
    alternativas: [
      { texto: 'Seda, especiarias e pedras preciosas', correta: true, explicacao: 'Isso! Seda, pimenta, canela, cravo e pedras preciosas eram muito valiosos! 💎' },
      { texto: 'Apenas gelo e neve', correta: false, explicacao: 'Gelo não era produto da rota! O comércio era de seda, especiarias e pedras preciosas!' },
      { texto: 'Somente carros e motos', correta: false, explicacao: 'Carros e motos não existiam! Eram tecidos, temperos e pedras preciosas!' }
    ]
  },
  {
    id: 44, tipo: 'marco',
    q: '🇪🇺 O que os europeus levavam para trocar na Rota da Seda?',
    alternativas: [
      { texto: 'Lã, prata, vidro e cavalos', correta: true, explicacao: 'Isso! A Europa trocava esses produtos pelas mercadorias asiáticas! 🇪🇺' },
      { texto: 'Somente celulares', correta: false, explicacao: 'Celular não existia! A Europa levava lã, prata, vidro e cavalos!' },
      { texto: 'Nada, apenas pediam de presente', correta: false, explicacao: 'Era comércio! Eles trocavam produtos como lã, prata e vidro!' }
    ]
  },
  {
    id: 45, tipo: 'marco',
    q: '⏳ Quanto tempo durou a viagem de Marco Polo?',
    alternativas: [
      { texto: 'Cerca de 24 anos, entre 1271 e 1295', correta: true, explicacao: 'Isso! Ele saiu em 1271 e voltou em 1295: 24 anos de viagem! ⏳' },
      { texto: 'Uma semana', correta: false, explicacao: 'Muito mais! Foram 24 anos atravessando terras e desertos!' },
      { texto: 'Um ano e meio', correta: false, explicacao: 'A viagem foi bem mais longa: 24 anos! Ele voltou em 1295!' }
    ]
  },
  {
    id: 46, tipo: 'marco',
    q: '📖 Como as histórias de Marco Polo chegaram até nós?',
    alternativas: [
      { texto: 'Ele ditou suas memórias a um escritor quando estava preso, em 1298', correta: true, explicacao: 'Isso! Na prisão, ele contou tudo a Rustichello, que escreveu o livro! 📖' },
      { texto: 'Ele gravou vídeos com o celular', correta: false, explicacao: 'Celular não existia em 1298! Ele ditou as histórias para um escritor!' },
      { texto: 'Ele escreveu tudo sozinho em um computador', correta: false, explicacao: 'Computador não existia! Ele ditou as memórias a Rustichello!' }
    ]
  },
  {
    id: 47, tipo: 'marco',
    q: '📚 Qual é o nome do livro com as histórias de Marco Polo?',
    alternativas: [
      { texto: 'As Viagens de Marco Polo, também chamado de "Il Milione"', correta: true, explicacao: 'Isso! O livro ficou conhecido como "As Viagens de Marco Polo" ou "Il Milione"! 📚' },
      { texto: 'A Caravela Perdida', correta: false, explicacao: 'Esse título não existe! O livro é "As Viagens de Marco Polo"!' },
      { texto: 'O Código Morse', correta: false, explicacao: 'Código Morse é do telégrafo! O livro de Marco Polo é "Il Milione"!' }
    ]
  },
  {
    id: 48, tipo: 'marco',
    q: '🌍 Qual foi a importância das histórias de Marco Polo?',
    alternativas: [
      { texto: 'Levaram à Europa conhecimentos sobre a Ásia e inspiraram novos navegadores', correta: true, explicacao: 'Isso! O livro mostrou a Ásia aos europeus e até inspirou Colombo! 🌍' },
      { texto: 'Ensinaram a fazer telefones', correta: false, explicacao: 'O telefone veio séculos depois! As histórias falavam de viagens e costumes da Ásia!' },
      { texto: 'Não tiveram importância nenhuma', correta: false, explicacao: 'Tiveram muita importância! O livro divulgou a Ásia e inspirou navegadores!' }
    ]
  },

  // ===== ARTE RUPESTRE (49-60) =====
  {
    id: 49, tipo: 'arte',
    q: '🎨 O que é arte rupestre?',
    alternativas: [
      { texto: 'Desenhos e gravuras feitos em rochas e paredes de cavernas', correta: true, explicacao: 'Isso! Rupestre vem de rocha: são pinturas e gravuras nas pedras! 🎨' },
      { texto: 'Uma pintura feita em telas com tinta a óleo', correta: false, explicacao: 'Telas e tintas a óleo são muito mais recentes! A arte rupestre é feita em rochas!' },
      { texto: 'Uma escultura de metal', correta: false, explicacao: 'Arte rupestre é desenho ou gravura em rocha, não escultura de metal!' }
    ]
  },
  {
    id: 50, tipo: 'arte',
    q: '🪨 De onde vem a palavra "rupestre"?',
    alternativas: [
      { texto: 'De rocha', correta: true, explicacao: 'Isso! Rupestre vem de rocha, porque as pinturas eram feitas nas pedras! 🪨' },
      { texto: 'De rio', correta: false, explicacao: 'Rio é outra palavra! Rupestre vem de rocha!' },
      { texto: 'De pintura', correta: false, explicacao: 'A palavra vem de rocha, não de pintura! Por isso "arte rupestre"!' }
    ]
  },
  {
    id: 51, tipo: 'arte',
    q: '🦌 Quais animais aparecem com frequência na arte rupestre?',
    alternativas: [
      { texto: 'Cervos, bisões, cavalos e mamutes', correta: true, explicacao: 'Isso! Eles desenhavam os animais que viam e caçavam! 🦌' },
      { texto: 'Dinossauros e pinguins', correta: false, explicacao: 'Os humanos não conviveram com dinossauros! Os animais retratados eram cervos, bisões, cavalos e mamutes!' },
      { texto: 'Apenas peixes dourados', correta: false, explicacao: 'Havia peixes, mas também cervos, bisões, cavalos e mamutes!' }
    ]
  },
  {
    id: 52, tipo: 'arte',
    q: '✋ Como eram feitos os contornos de mãos na arte rupestre?',
    alternativas: [
      { texto: 'A mão era apoiada na parede e o pigmento era soprado ao redor', correta: true, explicacao: 'Isso! A mão ficava marcada no meio, cercada de tinta! ✋' },
      { texto: 'Eles tiravam uma foto da mão', correta: false, explicacao: 'Fotografia não existia! Eles usavam pigmento soprado ao redor da mão!' },
      { texto: 'Eles desenhavam a mão com caneta esferográfica', correta: false, explicacao: 'Caneta não existia! Usavam carvão, terra colorida e pigmento!' }
    ]
  },
  {
    id: 53, tipo: 'arte',
    q: '🔥 Além de animais, o que as pinturas rupestres retratavam?',
    alternativas: [
      { texto: 'Pessoas, caçadas, danças e rituais do dia a dia', correta: true, explicacao: 'Isso! Elas mostram cenas de vida, caça e rituais! 🔥' },
      { texto: 'Somente carros e prédios', correta: false, explicacao: 'Carros e prédios não existiam! Eram pessoas, animais, caçadas e rituais!' },
      { texto: 'Apenas letras do alfabeto', correta: false, explicacao: 'A escrita ainda não existia! As pinturas mostravam cenas e símbolos!' }
    ]
  },
  {
    id: 54, tipo: 'arte',
    q: '🖌️ Quais materiais os primeiros humanos usavam para pintar nas cavernas?',
    alternativas: [
      { texto: 'Carvão, terra colorida, gordura animal e plantas', correta: true, explicacao: 'Isso! Eles aproveitavam materiais da natureza para fazer as tintas! 🖌️' },
      { texto: 'Tinta acrílica comprada na papelaria', correta: false, explicacao: 'Papelaria não existia! As tintas vinham da natureza: carvão, terra e plantas!' },
      { texto: 'Canetas hidrográficas coloridas', correta: false, explicacao: 'Nada disso! Eles usavam carvão e terra colorida!' }
    ]
  },
  {
    id: 55, tipo: 'arte',
    q: '📅 Por que a arte rupestre é importante para a História?',
    alternativas: [
      { texto: 'Porque mostra como os primeiros humanos viviam antes da invenção da escrita', correta: true, explicacao: 'Isso! É uma das poucas formas de conhecer a vida antes da escrita! 📅' },
      { texto: 'Porque foi feita com computadores', correta: false, explicacao: 'Computador não existia! A importância está em mostrar a vida antes da escrita!' },
      { texto: 'Porque ensina a fazer carros', correta: false, explicacao: 'Nada de carros! A arte rupestre conta como os primeiros humanos viviam e caçavam!' }
    ]
  },
  {
    id: 56, tipo: 'arte',
    q: '🌿 O que a arte rupestre revela sobre a relação dos primeiros humanos com a natureza?',
    alternativas: [
      { texto: 'Que eles observavam os animais, caçavam e tinham crenças ligadas à natureza', correta: true, explicacao: 'Isso! Os desenhos mostram caçadas, animais e rituais ligados à natureza! 🌿' },
      { texto: 'Que eles não se interessavam por animais', correta: false, explicacao: 'Pelo contrário! Os animais são os temas mais comuns nas pinturas!' },
      { texto: 'Que eles já usavam internet', correta: false, explicacao: 'Internet é invenção recentíssima! A arte rupestre é de milhares de anos atrás!' }
    ]
  },
  {
    id: 57, tipo: 'arte',
    q: '🇧🇷 Onde fica a Serra da Capivara, com milhares de pinturas rupestres?',
    alternativas: [
      { texto: 'No Piauí, no Brasil', correta: true, explicacao: 'Isso! A Serra da Capivara fica no Piauí e é um tesouro brasileiro! 🇧🇷' },
      { texto: 'Na França', correta: false, explicacao: 'Na França fica Lascaux! A Serra da Capivara é no Piauí, Brasil!' },
      { texto: 'Na Espanha', correta: false, explicacao: 'Na Espanha fica Altamira! A Serra da Capivara é brasileira, no Piauí!' }
    ]
  },
  {
    id: 58, tipo: 'arte',
    q: '🇫🇷 Qual é um famoso local de arte rupestre na França?',
    alternativas: [
      { texto: 'Lascaux', correta: true, explicacao: 'Isso! Lascaux tem pinturas de animais impressionantes! 🇫🇷' },
      { texto: 'Serra da Capivara', correta: false, explicacao: 'Essa fica no Brasil, no Piauí! Na França, o famoso é Lascaux!' },
      { texto: 'Pedra do Ingá', correta: false, explicacao: 'Pedra do Ingá fica na Paraíba, Brasil! Na França, é Lascaux!' }
    ]
  },
  {
    id: 59, tipo: 'arte',
    q: '🔎 A arte rupestre pode ser considerada uma fonte histórica?',
    alternativas: [
      { texto: 'Sim, porque registra como os primeiros humanos viviam, caçavam e se relacionavam com a natureza', correta: true, explicacao: 'Isso! Ela é uma fonte histórica valiosa, feita antes da escrita! 🔎' },
      { texto: 'Não, porque é só decoração', correta: false, explicacao: 'Não é decoração! Ela conta histórias e modos de vida dos primeiros humanos!' },
      { texto: 'Não, porque ninguém consegue entender nada', correta: false, explicacao: 'Os historiadores estudam essas imagens e conseguem aprender muito com elas!' }
    ]
  },
  {
    id: 60, tipo: 'arte',
    q: '🛡️ Qual é a atitude correta para preservar a arte rupestre?',
    alternativas: [
      { texto: 'Não tocar nem riscar as pinturas e respeitar os locais protegidos', correta: true, explicacao: 'Isso! A arte rupestre é patrimônio da humanidade e precisa ser protegida! 🛡️' },
      { texto: 'Desenhar por cima para deixar a marca do visitante', correta: false, explicacao: 'Isso destruiria o patrimônio! Nunca se deve riscar ou tocar nas pinturas!' },
      { texto: 'Levar pedaços da caverna para casa', correta: false, explicacao: 'Levar pedaços é destruir a história! A arte rupestre deve ficar protegida para todos!' }
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

// ===== MÁQUINA DO TEMPO (baralho sem repetição + 2 formatos + níveis) =====
const bancoJogo = [
  // --- formato escolha (dica -> 4 opções) ---
  { modo: 'escolha', dica: '📬 A comunicação serve para trocar informações, expressar sentimentos, alertar perigos e...', opcoes: ['compartilhar cultura', 'guardar segredos', 'impedir conversas', 'dormir melhor'], certa: 'compartilhar cultura' },
  { modo: 'escolha', dica: '✉️ Meio escrito que usava papel e correio e podia demorar semanas!', opcoes: ['carta', 'internet', 'telefone celular', 'televisão'], certa: 'carta' },
  { modo: 'escolha', dica: '⚡ Código de pontos e traços usado pelo telégrafo!', opcoes: ['código Morse', 'código de barras', 'alfabeto secreto', 'código de cores'], certa: 'código Morse' },
  { modo: 'escolha', dica: '⚡ O telégrafo enviava impulsos por...', opcoes: ['cabos elétricos', 'nuvens', 'velas de navio', 'trilhos de trem'], certa: 'cabos elétricos' },
  { modo: 'escolha', dica: '☎️ Inventor do telefone, em 1876!', opcoes: ['Alexander Graham Bell', 'Santos Dumont', 'Marco Polo', 'Kublai Khan'], certa: 'Alexander Graham Bell' },
  { modo: 'escolha', dica: '🗣️ O telefone permitiu, pela primeira vez...', opcoes: ['ouvir a voz em tempo real', 'enviar fotos coloridas', 'assistir TV', 'navegar na internet'], certa: 'ouvir a voz em tempo real' },
  { modo: 'escolha', dica: '🌐 Rede mundial de computadores que troca informações!', opcoes: ['internet', 'telégrafo', 'caravela', 'carroça'], certa: 'internet' },
  { modo: 'escolha', dica: '📺 Como a TV transmitia no início?', opcoes: ['em preto e branco', 'em cores', 'em 3D', 'só com jogos'], certa: 'em preto e branco' },
  { modo: 'escolha', dica: '🕰️ Ordem certa da linha do tempo da comunicação!', opcoes: ['carta, telégrafo, telefone, internet', 'internet, telefone, carta, telégrafo', 'telefone, carta, internet, telégrafo', 'telégrafo, internet, carta, telefone'], certa: 'carta, telégrafo, telefone, internet' },
  { modo: 'escolha', dica: '📷 Exemplo de registro de memória!', opcoes: ['fotografia antiga', 'nuvem no céu', 'vento forte', 'pedra do quintal'], certa: 'fotografia antiga' },
  { modo: 'escolha', dica: '🛞 Meio antigo com rodas de madeira, puxado por bois, para cargas!', opcoes: ['carroça', 'carruagem', 'caravela', 'ônibus'], certa: 'carroça' },
  { modo: 'escolha', dica: '🐎 Meio antigo puxado por cavalos, mais confortável, para pessoas!', opcoes: ['carruagem', 'carroça', 'caravela', 'avião'], certa: 'carruagem' },
  { modo: 'escolha', dica: '⛵ Navio de velas usado nas Grandes Navegações!', opcoes: ['caravela', 'submarino', 'trem-bala', 'ônibus'], certa: 'caravela' },
  { modo: 'escolha', dica: '☀️ O Sol nasce no...', opcoes: ['leste', 'oeste', 'norte', 'sul'], certa: 'leste' },
  { modo: 'escolha', dica: '⭐ Conjunto de estrelas que indica o sul no Hemisfério Sul!', opcoes: ['Cruzeiro do Sul', 'Estrela Polar', 'Sol', 'Lua cheia'], certa: 'Cruzeiro do Sul' },
  { modo: 'escolha', dica: '🚂 O trem a vapor era movido por...', opcoes: ['vapor de água', 'gasolina', 'vento', 'eletricidade'], certa: 'vapor de água' },
  { modo: 'escolha', dica: '⛽ Combustível dos primeiros automóveis!', opcoes: ['gasolina', 'vapor', 'vento', 'areia'], certa: 'gasolina' },
  { modo: 'escolha', dica: '🚌 Transporte coletivo que leva muita gente pela cidade!', opcoes: ['ônibus', 'carroça', 'caravela', '14-bis'], certa: 'ônibus' },
  { modo: 'escolha', dica: '✈️ Brasileiro que voou com o 14-bis em 1906!', opcoes: ['Santos Dumont', 'Graham Bell', 'Marco Polo', 'Barão de Mauá'], certa: 'Santos Dumont' },
  { modo: 'escolha', dica: '🚄 Trens de alta velocidade passam de...', opcoes: ['300 km/h', '30 km/h', '3 km/h', '3.000 km/h'], certa: '300 km/h' },
  { modo: 'escolha', dica: '🔒 O cinto de segurança serve para...', opcoes: ['proteger o corpo em freadas e batidas', 'deixar o carro bonito', 'acelerar o carro', 'economizar gasolina'], certa: 'proteger o corpo em freadas e batidas' },
  { modo: 'escolha', dica: '🛑 O freio ABS evita que as rodas...', opcoes: ['travem e o carro derrape', 'fiquem sem ar', 'façam barulho', 'percam a cor'], certa: 'travem e o carro derrape' },
  { modo: 'escolha', dica: '🐫 Cidade de onde Marco Polo partiu!', opcoes: ['Veneza', 'Pequim', 'Samarcanda', 'Lisboa'], certa: 'Veneza' },
  { modo: 'escolha', dica: '👑 Imperador que recebeu Marco Polo na China!', opcoes: ['Kublai Khan', 'Dom Pedro I', 'Alexandre Graham Bell', 'Barão de Mauá'], certa: 'Kublai Khan' },
  { modo: 'escolha', dica: '🧵 A Rota da Seda ligava...', opcoes: ['Europa e Ásia', 'Brasil e África', 'Polo Norte e Polo Sul', 'Lua e Terra'], certa: 'Europa e Ásia' },
  { modo: 'escolha', dica: '🧵 Produto chinês muito valioso que deu nome à rota!', opcoes: ['seda', 'gasolina', 'borracha', 'café'], certa: 'seda' },
  { modo: 'escolha', dica: '🐫 Quem andava junto nas caravanas?', opcoes: ['comerciantes, guias e animais', 'só uma pessoa', 'apenas camelos sozinhos', 'carros e motos'], certa: 'comerciantes, guias e animais' },
  { modo: 'escolha', dica: '📖 Livro com as histórias de Marco Polo!', opcoes: ['As Viagens de Marco Polo', 'O Código Morse', 'A Caravela Perdida', 'Diário de Kublai Khan'], certa: 'As Viagens de Marco Polo' },
  { modo: 'escolha', dica: '🎨 A arte rupestre era feita...', opcoes: ['em rochas e cavernas', 'em telas de computador', 'em folhas de papel', 'em muros de concreto'], certa: 'em rochas e cavernas' },
  { modo: 'escolha', dica: '🖌️ Materiais usados na arte rupestre!', opcoes: ['carvão e terra colorida', 'tinta acrílica e pincel', 'caneta e lápis de cor', 'giz de cera e cola'], certa: 'carvão e terra colorida' },
  { modo: 'escolha', dica: '🇧🇷 A Serra da Capivara, com pinturas rupestres, fica em...', opcoes: ['Piauí', 'França', 'Espanha', 'Portugal'], certa: 'Piauí' },
  { modo: 'escolha', dica: '🎨 A arte rupestre é importante porque...', opcoes: ['mostra como os humanos viviam antes da escrita', 'ensina a fazer carros', 'foi feita com computadores', 'é só decoração'], certa: 'mostra como os humanos viviam antes da escrita' },
  { modo: 'escolha', dica: '📰 Jornal antigo, foto e carta são exemplos de...', opcoes: ['registros de memória', 'meios de transporte', 'instrumentos musicais', 'remédios'], certa: 'registros de memória' },
  { modo: 'escolha', dica: '🚗 O que é um meio de transporte?', opcoes: ['algo que leva pessoas, animais ou cargas', 'um lugar para dormir', 'um tipo de comida', 'um programa de TV'], certa: 'algo que leva pessoas, animais ou cargas' },
  // --- formato verdade ou mito ---
  { modo: 'vf', frase: 'A comunicação só acontece quando falamos.', certa: false, porque: 'Mito! Desenhos, gestos, cartas e sinais também comunicam! 🗣️' },
  { modo: 'vf', frase: 'O telégrafo usava cabos elétricos e o código Morse.', certa: true, porque: 'Verdade! Os impulsos elétricos levavam pontos e traços! ⚡' },
  { modo: 'vf', frase: 'O telefone foi inventado antes da carta.', certa: false, porque: 'Mito! A carta é muito mais antiga! O telefone é de 1876! ☎️' },
  { modo: 'vf', frase: 'A televisão começou transmitindo em preto e branco.', certa: true, porque: 'Verdade! As cores só chegaram depois! ⚫⚪' },
  { modo: 'vf', frase: 'Fotos, cartas e filmes ajudam a guardar a memória.', certa: true, porque: 'Verdade! Eles são registros e fontes históricas! 📷' },
  { modo: 'vf', frase: 'A carroça era mais rápida que o trem-bala.', certa: false, porque: 'Mito! A carroça é lenta e antiga; o trem-bala passa de 300 km/h! 🛞' },
  { modo: 'vf', frase: 'O Sol nasce no oeste e se põe no leste.', certa: false, porque: 'Mito! É o contrário: nasce no leste e se põe no oeste! 🌅' },
  { modo: 'vf', frase: 'As estrelas ajudavam os viajantes a se orientar.', certa: true, porque: 'Verdade! O Cruzeiro do Sul indica o sul, por exemplo! ⭐' },
  { modo: 'vf', frase: 'O cinto de segurança ajuda a salvar vidas.', certa: true, porque: 'Verdade! Ele segura o corpo em freadas e batidas! 🔒' },
  { modo: 'vf', frase: 'Marco Polo partiu de Veneza e chegou à China.', certa: true, porque: 'Verdade! Ele viajou pela Rota da Seda até a China! 🐫' },
  { modo: 'vf', frase: 'A Rota da Seda era uma única estrada reta.', certa: false, porque: 'Mito! Era uma REDE de caminhos entre a Europa e a Ásia! 🧵' },
  { modo: 'vf', frase: 'As caravanas viajavam em grupo para se proteger.', certa: true, porque: 'Verdade! Juntos, enfrentavam assaltos e tempestades! 🛡️' },
  { modo: 'vf', frase: 'Marco Polo trouxe apenas pedras preciosas, e não histórias.', certa: false, porque: 'Mito! Ele também coletou relatos e histórias, que viraram um livro! 📖' },
  { modo: 'vf', frase: 'A arte rupestre foi feita depois da invenção da escrita.', certa: false, porque: 'Mito! Ela é muito mais antiga: foi feita ANTES da escrita! 🎨' },
  { modo: 'vf', frase: 'A arte rupestre mostra animais, pessoas e rituais.', certa: true, porque: 'Verdade! Ela registra cenas da vida dos primeiros humanos! 🦌' },
  { modo: 'vf', frase: 'A Serra da Capivara fica na França.', certa: false, porque: 'Mito! Ela fica no Piauí, no Brasil! Na França fica Lascaux! 🇧🇷' },
  { modo: 'vf', frase: 'Devemos proteger as pinturas rupestres.', certa: true, porque: 'Verdade! Elas são patrimônio da humanidade: não se deve tocar nem riscar! 🛡️' }
];

const NIVEIS_JOGO = [
  '🎒 Aprendiz de Viajante',
  '✉️ Mensageiro da História',
  '⛵ Explorador dos Mares',
  '🐫 Viajante da Seda',
  '🕰️ Mestre do Tempo'
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
