// ===== BANCO DE QUESTÕES (60) =====
// Intervenções humanas | Vegetação | Tempo e clima | Rios | Solo | Ação da água | Mineração
const bancoQuestoes = [
  // ===== INTERVENÇÕES HUMANAS E DESEQUILÍBRIO AMBIENTAL (1-9) =====
  {
    id: 1, tipo: 'intervencoes',
    q: '🌳 O que é desmatamento?',
    alternativas: [
      { texto: 'Retirada da vegetação para transformar a área em agricultura, pasto ou cidades', correta: true, explicacao: 'Isso! O desmatamento tira as árvores para dar lugar ao cultivo, ao gado ou às construções! 🌳' },
      { texto: 'O plantio de árvores nativas em um terreno vazio', correta: false, explicacao: 'Isso é reflorestamento, o contrário do desmatamento!' },
      { texto: 'A chuva que cai na floresta', correta: false, explicacao: 'A chuva é parte da natureza! Desmatamento é a retirada da vegetação pelas pessoas!' }
    ]
  },
  {
    id: 2, tipo: 'intervencoes',
    q: '🐾 Qual é uma consequência direta do desmatamento para os animais?',
    alternativas: [
      { texto: 'Perda de habitats: eles ficam sem casa, sem abrigo e sem comida', correta: true, explicacao: 'Isso! Sem a mata, os animais perdem o lugar onde viviam! 🐾' },
      { texto: 'Eles ganham mais espaço para brincar', correta: false, explicacao: 'Pelo contrário! Eles PERDEM o espaço onde viviam e se alimentavam.' },
      { texto: 'Eles passam a voar', correta: false, explicacao: 'Nada a ver! O desmatamento causa perda de habitat para os animais!' }
    ]
  },
  {
    id: 3, tipo: 'intervencoes',
    q: '🏜️ Por que o desmatamento causa erosão?',
    alternativas: [
      { texto: 'Porque sem a cobertura das árvores, a chuva e o vento arrastam o solo', correta: true, explicacao: 'Isso! As raízes seguravam a terra; sem elas, a chuva leva o solo! 🏜️' },
      { texto: 'Porque as árvores crescem rápido demais', correta: false, explicacao: 'Árvore crescendo não causa erosão! A erosão acontece quando o solo fica descoberto.' },
      { texto: 'Porque o rio fica mais alto', correta: false, explicacao: 'O rio pode até aumentar, mas a erosão vem do solo sem proteção contra chuva e vento!' }
    ]
  },
  {
    id: 4, tipo: 'intervencoes',
    q: '🔥 Para que as queimadas são usadas, de forma geral?',
    alternativas: [
      { texto: 'Para limpar áreas e renovar pastagens', correta: true, explicacao: 'Isso! Muitas vezes o fogo é usado para limpar o terreno e renovar o pasto do gado! 🔥' },
      { texto: 'Para aquecer os animais no inverno', correta: false, explicacao: 'Animais não precisam de queimada para se aquecer! O fogo serve para limpar áreas.' },
      { texto: 'Para plantar árvores novas', correta: false, explicacao: 'Queimar não planta nada! Plantar é colocar mudas na terra, sem fogo.' }
    ]
  },
  {
    id: 5, tipo: 'intervencoes',
    q: '🧱 Como as queimadas prejudicam o solo?',
    alternativas: [
      { texto: 'Ele é empobrecido: a cinza leva os nutrientes e a chuva lava a terra', correta: true, explicacao: 'Isso! O fogo destrói a matéria que alimenta a terra, e sem raízes a chuva leva o solo! 🧱' },
      { texto: 'Ele fica mais forte e mais fértil', correta: false, explicacao: 'Pelo contrário! O solo fica empobrecido e sem estrutura para as plantas.' },
      { texto: 'Ele vira água', correta: false, explicacao: 'Terra não vira água! O que acontece é empobrecimento e perda do solo pela chuva.' }
    ]
  },
  {
    id: 6, tipo: 'intervencoes',
    q: '💀 Além do solo, o que as queimadas destroem?',
    alternativas: [
      { texto: 'Vidas: animais, plantas e até as casas das pessoas', correta: true, explicacao: 'Isso! O fogo descontrolado mata animais, queima a mata e pode alcançar as casas! 💀' },
      { texto: 'Apenas as nuvens do céu', correta: false, explicacao: 'Nuvens não são queimadas! O fogo destrói vidas e a vegetação.' },
      { texto: 'Somente os mapas da escola', correta: false, explicacao: 'Nada de mapas! As queimadas destroem vidas, matas e solo.' }
    ]
  },
  {
    id: 7, tipo: 'intervencoes',
    q: '♻️ O que é manejo sustentável?',
    alternativas: [
      { texto: 'Uso consciente dos recursos, respeitando o tempo da natureza e retirando só o necessário', correta: true, explicacao: 'Isso! Retira-se apenas o necessário para a floresta ter tempo de se recuperar! ♻️' },
      { texto: 'Retirar tudo que a floresta dá o mais rápido possível', correta: false, explicacao: 'Isso é exploração sem controle! No manejo, retira-se só o necessário.' },
      { texto: 'Proibir qualquer uso dos recursos naturais', correta: false, explicacao: 'O manejo permite usar os recursos — mas com consciência e limite.' }
    ]
  },
  {
    id: 8, tipo: 'intervencoes',
    q: '🌿 Qual destas é uma atitude de preservação?',
    alternativas: [
      { texto: 'Plantar espécies nativas e proteger nascentes e cursos d\'água', correta: true, explicacao: 'Isso! Plantar o que já pertence ao lugar e cuidar das águas preserva a natureza! 🌿' },
      { texto: 'Jogar lixo no riacho', correta: false, explicacao: 'Jogar lixo na água polui! Preservar é proteger nascentes e cursos d\'água.' },
      { texto: 'Queimar o pasto para plantar mais rápido', correta: false, explicacao: 'Queimar destrói vidas e empobrece o solo! Preservar é evitar queimadas.' }
    ]
  },
  {
    id: 9, tipo: 'intervencoes',
    q: '⚖️ O que significa "desequilíbrio ambiental"?',
    alternativas: [
      { texto: 'Quando as ações humanas atrapalham a relação harmônica entre plantas, animais e solo', correta: true, explicacao: 'Isso! Quando mexemos demais sem cuidado, a natureza sai do equilíbrio! ⚖️' },
      { texto: 'Quando a natureza está calma e bonita', correta: false, explicacao: 'Isso é equilíbrio! Desequilíbrio é quando as coisas ficam descontroladas.' },
      { texto: 'Quando chove todos os dias na floresta', correta: false, explicacao: 'Chuva na floresta é normal! O desequilíbrio vem das intervenções sem cuidado.' }
    ]
  },

  // ===== TIPOS DE VEGETAÇÃO (10-18) =====
  {
    id: 10, tipo: 'vegetacao',
    q: '🌳 Como é a Floresta Amazônica?',
    alternativas: [
      { texto: 'Muito úmida e densa', correta: true, explicacao: 'Isso! Tanta árvore junta que quase não dá para ver o céu, e chove muito! 🌳' },
      { texto: 'Seca e com poucas árvores', correta: false, explicacao: 'Essa é a Caatinga! A Amazônia é úmida e densa.' },
      { texto: 'Feita só de capins altos', correta: false, explicacao: 'Isso são os Campos! A Amazônia é a maior floresta do mundo.' }
    ]
  },
  {
    id: 11, tipo: 'vegetacao',
    q: '🌿 Qual é a característica marcante do Cerrado?',
    alternativas: [
      { texto: 'Árvores baixas e retorcidas, com troncos tortos', correta: true, explicacao: 'Isso! As árvores do Cerrado crescem retorcidas, com casca grossa! 🌿' },
      { texto: 'Árvores gigantes e altíssimas', correta: false, explicacao: 'Árvores gigantes são da Amazônia! No Cerrado, são baixas e retorcidas.' },
      { texto: 'Apenas cactos e espinhos', correta: false, explicacao: 'Cactos e espinhos são da Caatinga, do sertão!' }
    ]
  },
  {
    id: 12, tipo: 'vegetacao',
    q: '🌵 Como é a vegetação da Caatinga?',
    alternativas: [
      { texto: 'Seca e adaptada à pouca água, com espinhos e folhas pequenas', correta: true, explicacao: 'Isso! As plantas guardam água e só ficam verdes quando chove! 🌵' },
      { texto: 'Muito úmida, com rios por todos os lados', correta: false, explicacao: 'Essa é a Amazônia! A Caatinga é seca e adaptada à falta de água.' },
      { texto: 'Só palmeiras altas', correta: false, explicacao: 'Palmeiras são da Mata dos Cocais! A Caatinga é a vegetação do sertão.' }
    ]
  },
  {
    id: 13, tipo: 'vegetacao',
    q: '🌾 Em qual tipo de vegetação há predomínio de gramíneas (capins)?',
    alternativas: [
      { texto: 'Nos Campos', correta: true, explicacao: 'Isso! Nos Campos, os capins dominam, com poucas árvores espalhadas! 🌾' },
      { texto: 'Na Floresta Amazônica', correta: false, explicacao: 'Na Amazônia predominam as árvores densas, não os capins.' },
      { texto: 'Na Mata dos Cocais', correta: false, explicacao: 'Na Mata dos Cocais predominam as palmeiras!' }
    ]
  },
  {
    id: 14, tipo: 'vegetacao',
    q: '🌴 Qual vegetação é marcada pela presença de palmeiras?',
    alternativas: [
      { texto: 'A Mata dos Cocais', correta: true, explicacao: 'Isso! Babaçu e buriti são palmeiras típicas da Mata dos Cocais! 🌴' },
      { texto: 'O Cerrado', correta: false, explicacao: 'No Cerrado, as árvores são baixas e retorcidas, não palmeiras.' },
      { texto: 'Os Campos', correta: false, explicacao: 'Nos Campos predominam gramíneas! Palmeiras são da Mata dos Cocais.' }
    ]
  },
  {
    id: 15, tipo: 'vegetacao',
    q: '🌵 Por que as plantas da Caatinga têm espinhos e folhas pequenas?',
    alternativas: [
      { texto: 'Para gastar menos água e se adaptar à pouca chuva', correta: true, explicacao: 'Isso! Espinhos e folhas pequenininhas ajudam a guardar a água! 🌵' },
      { texto: 'Para assustar os animais', correta: false, explicacao: 'Os espinhos protegem, mas a principal função é economizar água!' },
      { texto: 'Para crescer mais rápido no inverno', correta: false, explicacao: 'Não é por isso! A forma das plantas é uma adaptação ao clima seco.' }
    ]
  },
  {
    id: 16, tipo: 'vegetacao',
    q: '🌾 Por que os Campos são muito usados para a pecuária?',
    alternativas: [
      { texto: 'Porque há muito capim para o gado se alimentar', correta: true, explicacao: 'Isso! As gramínicas são o alimento natural do gado! 🐄' },
      { texto: 'Porque lá chove o ano inteiro', correta: false, explicacao: 'O motivo é o capim! A pecuária precisa de pasto, não de chuva o tempo todo.' },
      { texto: 'Porque tem muitas palmeiras', correta: false, explicacao: 'Palmeiras são da Mata dos Cocais! Nos Campos, predominam os capins.' }
    ]
  },
  {
    id: 17, tipo: 'vegetacao',
    q: '🌳 Qual é a maior floresta do mundo?',
    alternativas: [
      { texto: 'A Floresta Amazônica', correta: true, explicacao: 'Isso! A Amazônia é a maior floresta tropical do planeta! 🌳' },
      { texto: 'A Mata dos Cocais', correta: false, explicacao: 'A Mata dos Cocais é importante, mas é muito menor que a Amazônia.' },
      { texto: 'O Cerrado', correta: false, explicacao: 'O Cerrado é um bioma enorme, mas não é uma floresta densa como a Amazônia.' }
    ]
  },
  {
    id: 18, tipo: 'vegetacao',
    q: '🌴 Onde a Mata dos Cocais deixa as comunidades com alimentos, óleo e frutos?',
    alternativas: [
      { texto: 'Das palmeiras, como o babaçu e o buriti', correta: true, explicacao: 'Isso! As palmeiras dão frutos que alimentam e geram renda! 🌴' },
      { texto: 'Dos cactos da Caatinga', correta: false, explicacao: 'Cactos são da Caatinga! Na Mata dos Cocais, são palmeiras.' },
      { texto: 'Das árvores retorcidas do Cerrado', correta: false, explicacao: 'As árvores do Cerrado são baixas e retorcidas — as palmeiras são dos Cocais.' }
    ]
  },

  // ===== TEMPO ATMOSFÉRICO E CLIMA (19-25) =====
  {
    id: 19, tipo: 'clima',
    q: '🌤️ O que é tempo atmosférico?',
    alternativas: [
      { texto: 'As condições momentâneas da atmosfera no dia a dia ou em poucos dias', correta: true, explicacao: 'Isso! Chuva hoje, sol amanhã: é o que está acontecendo AGORA! 🌤️' },
      { texto: 'O comportamento do tempo ao longo de muitos anos', correta: false, explicacao: 'Isso é o CLIMA! O tempo atmosférico muda de hora em hora.' },
      { texto: 'O horário do relógio da escola', correta: false, explicacao: 'Nada de relógio! Tempo atmosférico é o estado do céu no dia a dia.' }
    ]
  },
  {
    id: 20, tipo: 'clima',
    q: '🌡️ O que é clima?',
    alternativas: [
      { texto: 'O comportamento mais comum e duradouro do tempo em uma região, ao longo de muitos anos', correta: true, explicacao: 'Isso! Clima é a tendência de longo prazo da região! 🌡️' },
      { texto: 'O que aconteceu no céu ontem', correta: false, explicacao: 'Isso é tempo atmosférico! Clima precisa de muitos anos de registros.' },
      { texto: 'A previsão do tempo de amanhã', correta: false, explicacao: 'Previsão é do tempo atmosférico, dos próximos dias.' }
    ]
  },
  {
    id: 21, tipo: 'clima',
    q: '🏜️ O sertão ser quente e seco o ano inteiro é um exemplo de...',
    alternativas: [
      { texto: 'Clima', correta: true, explicacao: 'Isso! É uma característica duradoura, repetida por muitos anos! 🏜️' },
      { texto: 'Tempo atmosférico', correta: false, explicacao: 'O calor e a seca do sertão não são de um dia só: é clima!' },
      { texto: 'Uma chuva de verão', correta: false, explicacao: 'Chuva de verão é um acontecimento do momento, não é o clima do sertão.' }
    ]
  },
  {
    id: 22, tipo: 'clima',
    q: '⏱️ Qual é a principal diferença entre tempo e clima?',
    alternativas: [
      { texto: 'O tempo é de curta duração (dias) e o clima é de longa duração (muitos anos)', correta: true, explicacao: 'Isso! Tempo = agora; clima = tendência de muitos anos! ⏱️' },
      { texto: 'O tempo só acontece no inverno e o clima só no verão', correta: false, explicacao: 'Os dois acontecem em qualquer estação! A diferença é a duração.' },
      { texto: 'O tempo é no Brasil e o clima é em outros países', correta: false, explicacao: 'Errado! Tempo e clima existem em qualquer lugar do mundo.' }
    ]
  },
  {
    id: 23, tipo: 'clima',
    q: '🌧️ Se hoje está chovendo e amanhã estará ensolarado, isso é...',
    alternativas: [
      { texto: 'Tempo atmosférico, porque são condições de poucos dias', correta: true, explicacao: 'Isso! É o que está mudando no dia a dia! 🌧️☀️' },
      { texto: 'Clima da região', correta: false, explicacao: 'Clima é a média de muitos anos! Chuva hoje e sol amanhã é tempo.' },
      { texto: 'Uma estação do ano', correta: false, explicacao: 'Estação do ano dura meses! O que muda em dias é o tempo atmosférico.' }
    ]
  },
  {
    id: 24, tipo: 'clima',
    q: '📚 Como os cientistas descobrem o clima de um lugar?',
    alternativas: [
      { texto: 'Observando e registrando o tempo por muitos anos e fazendo a média', correta: true, explicacao: 'Isso! Com registros de longo prazo, descobre-se a tendência da região! 📚' },
      { texto: 'Perguntando para uma pessoa só', correta: false, explicacao: 'Uma opinião não basta! É preciso observar e registrar por muitos anos.' },
      { texto: 'Olhando uma vez no céu', correta: false, explicacao: 'Uma olhada mostra o tempo de agora, não o clima da região.' }
    ]
  },
  {
    id: 25, tipo: 'clima',
    q: '☀️ Em uma região com clima quente e seco, o que se espera durante a maior parte do ano?',
    alternativas: [
      { texto: 'Calor e pouca chuva, repetindo por muitos anos', correta: true, explicacao: 'Isso! Essa é a tendência duradoura do clima seco! ☀️' },
      { texto: 'Neve forte todos os dias', correta: false, explicacao: 'Neve é de climas muito frios! O clima seco é quente e com pouca chuva.' },
      { texto: 'Tempo atmosférico diferente todos os dias, sem nenhuma tendência', correta: false, explicacao: 'O tempo muda, mas o CLIMA mostra uma tendência comum ao longo dos anos.' }
    ]
  },

  // ===== RIOS E BACIAS HIDROGRÁFICAS (26-34) =====
  {
    id: 26, tipo: 'rios',
    q: '⛲ Onde um rio começa?',
    alternativas: [
      { texto: 'Na nascente', correta: true, explicacao: 'Isso! A nascente é o ponto onde o rio começa a existir! ⛲' },
      { texto: 'Na foz', correta: false, explicacao: 'A foz é onde o rio TERMINA, geralmente no mar!' },
      { texto: 'No afluente', correta: false, explicacao: 'O afluente é um rio menor que deságua no rio principal.' }
    ]
  },
  {
    id: 27, tipo: 'rios',
    q: '🌊 Onde um rio termina, geralmente no mar?',
    alternativas: [
      { texto: 'Na foz', correta: true, explicacao: 'Isso! A foz é a boca do rio, onde a água se encontra com o oceano! 🌊' },
      { texto: 'Na nascente', correta: false, explicacao: 'A nascente é o começo do rio, não o fim!' },
      { texto: 'No rio principal', correta: false, explicacao: 'O rio principal é o leito maior, por onde corre a maior parte da água.' }
    ]
  },
  {
    id: 28, tipo: 'rios',
    q: '🌿 O que são afluentes de um rio?',
    alternativas: [
      { texto: 'Rios menores que deságuam em outro rio', correta: true, explicacao: 'Isso! Os afluentes são tributários: entram com mais água no rio principal! 🌿' },
      { texto: 'As pedras encontradas no fundo do rio', correta: false, explicacao: 'Pedra não é rio! Afluentes são rios menores que deságuam em outro.' },
      { texto: 'O lugar onde o rio encontra o mar', correta: false, explicacao: 'Isso é a foz! Afluente é um rio que deságua em outro rio.' }
    ]
  },
  {
    id: 29, tipo: 'rios',
    q: '💧 O que é um rio perene?',
    alternativas: [
      { texto: 'Um rio que tem água o ano todo', correta: true, explicacao: 'Isso! Perene não fica seco, nem na estação mais seca! 💧' },
      { texto: 'Um rio que seca no verão', correta: false, explicacao: 'Esse é um rio intermitente! O perene tem água o ano inteiro.' },
      { texto: 'Um rio que só existe no inverno', correta: false, explicacao: 'Errado! O rio perene corre sempre, em qualquer estação.' }
    ]
  },
  {
    id: 30, tipo: 'rios',
    q: '🏞️ O que é uma bacia hidrográfica?',
    alternativas: [
      { texto: 'Todo o terreno onde a água da chuva corre para um mesmo rio e seus afluentes', correta: true, explicacao: 'Isso! É a "área de captação" do rio, como uma grande pia! 🏞️' },
      { texto: 'Apenas o buraco onde a água se acumula', correta: false, explicacao: 'Não é só o buraco! É toda a região por onde a água corre para o rio.' },
      { texto: 'O lugar onde se vendem garrafas de água', correta: false, explicacao: 'Nada de loja! Bacia hidrográfica é a região de um rio.' }
    ]
  },
  {
    id: 31, tipo: 'rios',
    q: '🇧🇷 De onde nasce o Rio Amazonas?',
    alternativas: [
      { texto: 'No Peru, nas montanhas dos Andes', correta: true, explicacao: 'Isso! Ele nasce no Peru e atravessa o Brasil até o mar! 🇧🇷' },
      { texto: 'No Rio de Janeiro', correta: false, explicacao: 'O Amazonas é do norte! Ele nasce no Peru, nos Andes.' },
      { texto: 'Em São Paulo', correta: false, explicacao: 'Errado! O Rio Amazonas nasce no Peru, muito mais ao norte.' }
    ]
  },
  {
    id: 32, tipo: 'rios',
    q: '🌊 Em qual oceano o Rio Amazonas deságua?',
    alternativas: [
      { texto: 'No Oceano Atlântico', correta: true, explicacao: 'Isso! A foz do Amazonas fica no Oceano Atlântico! 🌊' },
      { texto: 'No Oceano Pacífico', correta: false, explicacao: 'O Pacífico fica do outro lado da América! O Amazonas vai para o Atlântico.' },
      { texto: 'No Oceano Índico', correta: false, explicacao: 'O Índico fica perto da África e da Ásia! O Amazonas desagua no Atlântico.' }
    ]
  },
  {
    id: 33, tipo: 'rios',
    q: '🏞️ Rio Negro e Rio Solimões são exemplos de...',
    alternativas: [
      { texto: 'Afluentes (ou rios que se juntam) do Rio Amazonas', correta: true, explicacao: 'Isso! Eles acrescentam muita água ao rio principal! 🏞️' },
      { texto: 'Oceano Atlântico', correta: false, explicacao: 'Oceano é o mar! Negro e Solimões são rios que se juntam ao Amazonas.' },
      { texto: 'Nascentes do Rio São Francisco', correta: false, explicacao: 'São rios da bacia amazônica, ligados ao Rio Amazonas.' }
    ]
  },
  {
    id: 34, tipo: 'rios',
    q: '🤔 Por que o Rio Amazonas é considerado um rio perene?',
    alternativas: [
      { texto: 'Porque chove muito na Amazônia e ele tem água o ano todo', correta: true, explicacao: 'Isso! Com tanta chuva, a água nunca falta! 💧' },
      { texto: 'Porque ele seca durante a estação seca', correta: false, explicacao: 'Rio que seca não é perene! O Amazonas corre sempre.' },
      { texto: 'Porque ele é muito raso', correta: false, explicacao: 'Muito pelo contrário: é o maior rio do mundo em volume de água!' }
    ]
  },

  // ===== DEGRADAÇÃO E CONSERVAÇÃO DO SOLO (35-42) =====
  {
    id: 35, tipo: 'solo',
    q: '🌱 Qual é o papel das raízes em relação ao solo?',
    alternativas: [
      { texto: 'Segurar a terra, como uma rede debaixo do chão', correta: true, explicacao: 'Isso! As raízes são o "cinto de segurança" do solo! 🌱' },
      { texto: 'Fazer o solo desaparecer', correta: false, explicacao: 'Pelo contrário! As raízes protegem e mantêm o solo no lugar.' },
      { texto: 'Transformar a terra em areia mole', correta: false, explicacao: 'Raízes não mudam a terra assim! Elas seguram o solo e ajudam a manter a água.' }
    ]
  },
  {
    id: 36, tipo: 'solo',
    q: '☔ Como a vegetação protege o solo contra a chuva e o vento?',
    alternativas: [
      { texto: 'As folhas amortecem a chuva e as raízes seguram a terra', correta: true, explicacao: 'Isso! As plantas agem como um guarda-chuva e uma rede! ☔' },
      { texto: 'Ela faz uma parede de concreto', correta: false, explicacao: 'Nada de parede! A proteção vem das folhas e das raízes.' },
      { texto: 'Ela empurra o vento para longe', correta: false, explicacao: 'As plantas reduzem a força do vento e da chuva com suas folhas e raízes.' }
    ]
  },
  {
    id: 37, tipo: 'solo',
    q: '🏜️ O que acontece com o solo quando ele fica exposto, sem plantas?',
    alternativas: [
      { texto: 'Fica solto, é lavado pela chuva e perde nutrientes', correta: true, explicacao: 'Isso! Sem raízes, a água leva a terra e os nutrientes junto! 🏜️' },
      { texto: 'Fica mais forte e mais fértil', correta: false, explicacao: 'Errado! Sem proteção, o solo fica fraco e vai embora com a chuva.' },
      { texto: 'Vira pedra sólida instantaneamente', correta: false, explicacao: 'Não! O solo descoberto é lavado e perdido pela erosão.' }
    ]
  },
  {
    id: 38, tipo: 'solo',
    q: '🗑️ Qual destas é uma causa da degradação do solo?',
    alternativas: [
      { texto: 'O lixo jogado nos terrenos e nos rios', correta: true, explicacao: 'Isso! O lixo contamina e impede a terra de viver! 🗑️' },
      { texto: 'O plantio de espécies nativas', correta: false, explicacao: 'Plantar nativas CONSERVA o solo, não degrada.' },
      { texto: 'Manter as árvores em pé', correta: false, explicacao: 'Árvores em pé protegem o solo com as raízes!' }
    ]
  },
  {
    id: 39, tipo: 'solo',
    q: '🌳 Qual combinação ajuda a conservar o solo?',
    alternativas: [
      { texto: 'Manter árvores, plantar espécies nativas, evitar queimadas e recolher o lixo', correta: true, explicacao: 'Isso! Cuidados simples mantêm a terra saudável! 🌳' },
      { texto: 'Desmatar, queimar e jogar lixo no terreno', correta: false, explicacao: 'Isso tudo DEGRADA o solo! Conservar é fazer o contrário.' },
      { texto: 'Retirar toda a vegetação para o solo "respirar"', correta: false, explicacao: 'Sem vegetação, o solo fica exposto e é levado pela chuva!' }
    ]
  },
  {
    id: 40, tipo: 'solo',
    q: '💧 Como a vegetação ajuda a conservar a água?',
    alternativas: [
      { texto: 'Parte da água da chuva fica retida no solo em vez de escorrer toda', correta: true, explicacao: 'Isso! As raízes ajudam a terra a guardar água! 💧' },
      { texto: 'Ela faz a água evaporar mais rápido', correta: false, explicacao: 'Não! A vegetação ajuda a água a ficar no solo.' },
      { texto: 'Ela transforma a chuva em neve', correta: false, explicacao: 'Nada de neve! O papel é reter a água no terreno.' }
    ]
  },
  {
    id: 41, tipo: 'solo',
    q: '🚜 O que é "uso descuidado da terra"?',
    alternativas: [
      { texto: 'Plantar sempre no mesmo lugar, sem descanso, e sem proteger a vegetação', correta: true, explicacao: 'Isso! Quando a terra é explorada demais, ela se esgota! 🚜' },
      { texto: 'Plantar espécies nativas na área', correta: false, explicacao: 'Plantar nativas é um cuidado, não descuido!' },
      { texto: 'Deixar as nascentes protegidas pela mata', correta: false, explicacao: 'Isso é conservação! O descuido é explorar a terra sem cuidado.' }
    ]
  },
  {
    id: 42, tipo: 'solo',
    q: '⛰️ O que é erosão?',
    alternativas: [
      { texto: 'O desgaste e o arraste do solo pela chuva, pelo vento e pela água', correta: true, explicacao: 'Isso! A erosão é quando a terra é levada embora! ⛰️' },
      { texto: 'O crescimento das plantas', correta: false, explicacao: 'Crescimento é outra coisa! Erosão é perda do solo.' },
      { texto: 'A chuva caindo com força', correta: false, explicacao: 'A chuva é uma causa, mas erosão é o desgaste e o arraste da terra.' }
    ]
  },

  // ===== AÇÃO DA ÁGUA NA PAISAGEM (43-50) =====
  {
    id: 43, tipo: 'agua',
    q: '🌊 Como a água transforma a paisagem com o tempo?',
    alternativas: [
      { texto: 'Desgastando o solo e as rochas, transportando sedimentos e formando novas paisagens', correta: true, explicacao: 'Isso! A água é um artista que esculpe a terra! 🌊' },
      { texto: 'Deixando tudo do mesmo jeito para sempre', correta: false, explicacao: 'Pelo contrário! A água muda a paisagem aos poucos.' },
      { texto: 'Plantando árvores novas', correta: false, explicacao: 'Água não planta! Ela desgasta, transporta e esculpe o terreno.' }
    ]
  },
  {
    id: 44, tipo: 'agua',
    q: '🟤 Por que a água fica barrenta depois de uma chuva forte?',
    alternativas: [
      { texto: 'Porque carrega sedimentos: pedacinhos de terra e rocha arrancados pelo desgaste', correta: true, explicacao: 'Isso! O barro é a terra que a água arrastou! 🟤' },
      { texto: 'Porque alguém tinta a água de marrom', correta: false, explicacao: 'Nada de tinta! O barro vem dos sedimentos arrastados pela chuva.' },
      { texto: 'Porque a água esfriou', correta: false, explicacao: 'Temperatura não deixa a água barrenta! É o sedimento que faz isso.' }
    ]
  },
  {
    id: 45, tipo: 'agua',
    q: '➰ O que são rios meandrantes?',
    alternativas: [
      { texto: 'Rios cheios de curvas, formadas pela ação da água', correta: true, explicacao: 'Isso! Meandro é a curva do rio! 🔗' },
      { texto: 'Rios que correm em linha reta, sem curvas', correta: false, explicacao: 'O contrário! Meandro é a CURVA do rio.' },
      { texto: 'Rios que já secaram', correta: false, explicacao: 'Rio seco é outra coisa! Meandrante é o rio com curvas.' }
    ]
  },
  {
    id: 46, tipo: 'agua',
    q: '💦 Como as cachoeiras são formadas?',
    alternativas: [
      { texto: 'Onde a água cai de uma altura grande sobre a rocha, escavada pela erosão', correta: true, explicacao: 'Isso! A água desgasta o terreno e cai de cima! 💦' },
      { texto: 'Quando as pessoas abrem uma torneira enorme', correta: false, explicacao: 'Cachoeira é formação da natureza, não obra humana!' },
      { texto: 'Quando chove apenas uma vez por ano', correta: false, explicacao: 'A chuva ajuda, mas a cachoeira vem do desgaste da rocha pela água.' }
    ]
  },
  {
    id: 47, tipo: 'agua',
    q: '🗻 Como os vales profundos são formados?',
    alternativas: [
      { texto: 'Escavados pela água ao longo de muitos anos', correta: true, explicacao: 'Isso! A água vai "cavando" o terreno com o tempo! 🗻' },
      { texto: 'Em um dia, depois de uma chuva', correta: false, explicacao: 'Vale leva MILHARES de anos! Não se forma em um dia.' },
      { texto: 'Pelas construções das cidades', correta: false, explicacao: 'Construção humana não forma vales! É a ação da água.' }
    ]
  },
  {
    id: 48, tipo: 'agua',
    q: '🌿 Qual é o papel da vegetação nas margens dos rios?',
    alternativas: [
      { texto: 'Segurar a terra e reduzir o desgaste provocado pela água', correta: true, explicacao: 'Isso! As plantas protegem as margens de desabarem! 🌿' },
      { texto: 'Fazer o rio ficar mais barrento', correta: false, explicacao: 'Pelo contrário! A vegetação segura a terra e deixa a água mais limpa.' },
      { texto: 'Aumentar a velocidade da correnteza', correta: false, explicacao: 'As raízes seguram a margem; elas não aceleram o rio.' }
    ]
  },
  {
    id: 49, tipo: 'agua',
    q: '🌳 Por que desmatar a beira do rio é perigoso?',
    alternativas: [
      { texto: 'Sem as raízes, a margem desaba mais rápido com a chuva', correta: true, explicacao: 'Isso! A margem fica sem rede para segurar a terra! 🌳' },
      { texto: 'Porque o rio pode congelar', correta: false, explicacao: 'Rio não congela por ter margem limpa! O risco é o desabamento da margem.' },
      { texto: 'Porque os peixes vão embora por falta de árvores', correta: false, explicacao: 'Peixes não precisam de árvore, mas a margem precisa das raízes para não desabar.' }
    ]
  },
  {
    id: 50, tipo: 'agua',
    q: '🏜️ O que são sedimentos transportados pelos rios?',
    alternativas: [
      { texto: 'Pedacinhos de terra, areia e rocha arrastados pela correnteza', correta: true, explicacao: 'Isso! São os "restinhos" que a água carrega! 🏜️' },
      { texto: 'Peixes nadando em bando', correta: false, explicacao: 'Peixes são animais! Sedimento é terra e rocha transportadas.' },
      { texto: 'Folhas caindo do céu', correta: false, explicacao: 'Folhas não são sedimento! É terra, areia e pedras arrastadas pela água.' }
    ]
  },

  // ===== MINERAÇÃO E RECUPERAÇÃO AMBIENTAL (51-60) =====
  {
    id: 51, tipo: 'mineracao',
    q: '⛏️ O que é atividade mineradora?',
    alternativas: [
      { texto: 'Retirar recursos como areia, pedras e minérios da terra', correta: true, explicacao: 'Isso! É a extração de materiais do solo e dos morros! ⛏️' },
      { texto: 'Plantar árvores em área degradada', correta: false, explicacao: 'Isso é reflorestamento! Mineração é retirar areia, pedras e minérios.' },
      { texto: 'Fazer chuva artificial', correta: false, explicacao: 'Nada de chuva! Mineração é a extração de recursos minerais.' }
    ]
  },
  {
    id: 52, tipo: 'mineracao',
    q: '⛰️ O que a mineração faz com o relevo?',
    alternativas: [
      { texto: 'Altera morros, serras, vales e o solo', correta: true, explicacao: 'Isso! A extração muda a forma da terra! ⛰️' },
      { texto: 'Deixa o relevo exatamente igual', correta: false, explicacao: 'Muito pelo contrário: a mineração altera morros, serras e vales.' },
      { texto: 'Faz as montanhas crescerem', correta: false, explicacao: 'Montanhas não crescem com a mineração — a área é retirada e modificada.' }
    ]
  },
  {
    id: 53, tipo: 'mineracao',
    q: '🚰 Qual um dos riscos da mineração para a água?',
    alternativas: [
      { texto: 'A poluição da água, com lama e resíduos chegando aos rios', correta: true, explicacao: 'Isso! Os resíduos podem contaminar os rios e as nascentes! 🚰' },
      { texto: 'A água ficar mais gelada', correta: false, explicacao: 'O risco é a poluição, não a temperatura da água.' },
      { texto: 'O rio virar mar', correta: false, explicacao: 'Rio não vira mar! O risco é a contaminação com lama e resíduos.' }
    ]
  },
  {
    id: 54, tipo: 'mineracao',
    q: '😷 Quais problemas a mineração causa no ar e no entorno?',
    alternativas: [
      { texto: 'Poeira, barulho e erosão do solo descoberto', correta: true, explicacao: 'Isso! A poeira e o barulho afetam quem mora por perto! 😷' },
      { texto: 'Apenas cheiro de perfume', correta: false, explicacao: 'Nada de perfume! Os problemas são poeira, barulho e erosão.' },
      { texto: 'Folhas caindo das árvores', correta: false, explicacao: 'Queda natural de folhas não é problema da mineração.' }
    ]
  },
  {
    id: 55, tipo: 'mineracao',
    q: '📋 O que fazer ANTES de começar a minerar, para reduzir os impactos?',
    alternativas: [
      { texto: 'Planejar a atividade para reduzir os danos ao meio ambiente', correta: true, explicacao: 'Isso! Planejar antes é a chave para minerar com menos prejuízos! 📋' },
      { texto: 'Queimar a vegetação do entorno', correta: false, explicacao: 'Queimar só piora! O certo é planejar e proteger a área.' },
      { texto: 'Retirar todo o rio do lugar', correta: false, explicacao: 'Não se tira um rio! Proteger rios e nascentes faz parte do plano.' }
    ]
  },
  {
    id: 56, tipo: 'mineracao',
    q: '🏔️ O que significa "remodelar o relevo" na recuperação de uma área minerada?',
    alternativas: [
      { texto: 'Dar uma forma segura de novo ao terreno, devolvendo a paisagem', correta: true, explicacao: 'Isso! O terreno é remodelado para ficar estável e seguro! 🏔️' },
      { texto: 'Apagar a montanha da fotografia', correta: false, explicacao: 'Não é photoshop! É o trabalho de reestruturar o terreno.' },
      { texto: 'Esconder a área com uma tela', correta: false, explicacao: 'Tela não recupera nada! O terreno precisa ser remodelado e recoberto.' }
    ]
  },
  {
    id: 57, tipo: 'mineracao',
    q: '🛡️ Como se protege o solo depois da mineração?',
    alternativas: [
      { texto: 'Cobrindo-o contra a erosão e plantando árvores nativas', correta: true, explicacao: 'Isso! Cobrir a terra e plantar devolve a vida à área! 🛡️' },
      { texto: 'Deixando-o descoberto ao sol', correta: false, explicacao: 'Descoberto, o solo é levado pela chuva! É preciso cobrir e plantar.' },
      { texto: 'Jogando lixo por cima', correta: false, explicacao: 'Lixo polui! A recuperação é cobrir o solo e plantar nativas.' }
    ]
  },
  {
    id: 58, tipo: 'mineracao',
    q: '💧 Por que proteger rios e nascentes durante a mineração?',
    alternativas: [
      { texto: 'Para evitar que a poluição atinja a água que bebemos e onde os animais vivem', correta: true, explicacao: 'Isso! Água limpa é vida para pessoas e bichos! 💧' },
      { texto: 'Para deixar o rio mais barrento', correta: false, explicacao: 'Barro demais polui! O objetivo é manter a água limpa.' },
      { texto: 'Para os peixes ficarem mais pesados', correta: false, explicacao: 'Nada disso! Proteger a água é evitar a poluição.' }
    ]
  },
  {
    id: 59, tipo: 'mineracao',
    q: '🌳 Qual é o último passo da recuperação de uma área degradada?',
    alternativas: [
      { texto: 'Plantar árvores nativas para a vegetação voltar e as raízes segurarem a terra', correta: true, explicacao: 'Isso! O plantio devolve a vida e protege o solo! 🌳' },
      { texto: 'Construir um shopping center', correta: false, explicacao: 'Construção não recupera a natureza! O passo é plantar.' },
      { texto: 'Deixar o terreno abandonado', correta: false, explicacao: 'Abandonado, o solo continua se degradando! É preciso plantar.' }
    ]
  },
  {
    id: 60, tipo: 'mineracao',
    q: '♻️ Qual é a atitude correta em relação à mineração?',
    alternativas: [
      { texto: 'Fazer com planejamento e recuperar a área depois, para a natureza voltar', correta: true, explicacao: 'Isso! Minerar com responsabilidade é possível! ♻️' },
      { texto: 'Minerar sem cuidado e nunca recuperar nada', correta: false, explicacao: 'Sem recuperação, a área fica degradada para sempre.' },
      { texto: 'Proibir qualquer extração no planeta inteiro', correta: false, explicacao: 'Usamos minérios no dia a dia! O caminho é o planejamento e a recuperação.' }
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

// ===== ECO GUARDIÃO (baralho sem repetição + 2 formatos + níveis) =====
const bancoJogo = [
  // --- formato escolha (dica -> 4 opções) ---
  { modo: 'escolha', dica: '🌳 Retirada da vegetação para agricultura, pasto ou cidades!', opcoes: ['desmatamento', 'reflorestamento', 'manejo sustentável', 'preservação'], certa: 'desmatamento' },
  { modo: 'escolha', dica: '🔥 Uso do fogo para limpar áreas e renovar pastagens!', opcoes: ['queimada', 'chuva', 'plantação', 'mineração'], certa: 'queimada' },
  { modo: 'escolha', dica: '🐾 O desmatamento causa perda de...', opcoes: ['habitats', 'horários', 'receitas escolares', 'cores do céu'], certa: 'habitats' },
  { modo: 'escolha', dica: '♻️ Usar só o necessário, respeitando o tempo da natureza!', opcoes: ['manejo sustentável', 'desmatamento', 'queimada', 'poluição'], certa: 'manejo sustentável' },
  { modo: 'escolha', dica: '💧 Preservar inclui proteger as nascentes e os...', opcoes: ['cursos d\'água', 'semáforos', 'estacionamentos', 'quadras'], certa: 'cursos d\'água' },
  { modo: 'escolha', dica: '🌿 Qual plantio ajuda a preservar o meio ambiente?', opcoes: ['espécies nativas', 'plástico', 'papelão molhado', 'espelho'], certa: 'espécies nativas' },
  { modo: 'escolha', dica: '🌳 Floresta Amazônica: muito...', opcoes: ['úmida e densa', 'seca e espinhosa', 'baixa e retorcida', 'plana e sem árvores'], certa: 'úmida e densa' },
  { modo: 'escolha', dica: '🌿 Cerrado: árvores baixas e...', opcoes: ['retorcidas', 'geladas', 'subterrâneas', 'feitas de vidro'], certa: 'retorcidas' },
  { modo: 'escolha', dica: '🌵 Caatinga: seca e adaptada à...', opcoes: ['pouca água', 'muito gelo', 'neve alta', 'areia do deserto do Saara'], certa: 'pouca água' },
  { modo: 'escolha', dica: '🌾 Em qual vegetação predominam as gramíneas (capins)?', opcoes: ['campos', 'floresta amazônica', 'mata dos cocais', 'mangue'], certa: 'campos' },
  { modo: 'escolha', dica: '🌴 Mata dos Cocais: marcada pela presença de...', opcoes: ['palmeiras', 'cactus', 'pinheiros', 'bambus'], certa: 'palmeiras' },
  { modo: 'escolha', dica: '🌤️ Condições momentâneas da atmosfera em poucos dias!', opcoes: ['tempo atmosférico', 'clima', 'estação do ano', 'fuso horário'], certa: 'tempo atmosférico' },
  { modo: 'escolha', dica: '🌡️ Comportamento duradouro do tempo em muitos anos!', opcoes: ['clima', 'tempo atmosférico', 'vendaval', 'sol de maio'], certa: 'clima' },
  { modo: 'escolha', dica: '🏜️ Exemplo de clima: o sertão ser...', opcoes: ['quente e seco', 'nevado', 'tropical chuvoso o ano todo', 'frio e úmido'], certa: 'quente e seco' },
  { modo: 'escolha', dica: '⛲ Parte do rio onde ele começa!', opcoes: ['nascente', 'foz', 'afluente', 'delta'], certa: 'nascente' },
  { modo: 'escolha', dica: '🌊 Parte do rio onde ele termina, geralmente no mar!', opcoes: ['foz', 'nascente', 'leito', 'margem'], certa: 'foz' },
  { modo: 'escolha', dica: '🌿 Rios menores que deságuam em outro rio são os...', opcoes: ['afluentes', 'mares', 'lagos', 'oceanos'], certa: 'afluentes' },
  { modo: 'escolha', dica: '💧 Rio perene é aquele que tem água...', opcoes: ['o ano todo', 'só no verão', 'só à noite', 'uma vez por mês'], certa: 'o ano todo' },
  { modo: 'escolha', dica: '🇧🇷 O Rio Amazonas nasce em qual país?', opcoes: ['Peru', 'Brasil', 'Argentina', 'Chile'], certa: 'Peru' },
  { modo: 'escolha', dica: '🌊 O Rio Amazonas deságua no...', opcoes: ['Oceano Atlântico', 'Oceano Pacífico', 'Oceano Índico', 'Mediterrâneo'], certa: 'Oceano Atlântico' },
  { modo: 'escolha', dica: '🌱 As raízes seguram a terra e evitam a...', opcoes: ['erosão', 'fotografia', 'colheita', 'maré alta'], certa: 'erosão' },
  { modo: 'escolha', dica: '🏜️ Sem plantas, o solo fica solto e é...', opcoes: ['lavado pela chuva', 'protegido pelo vento', 'mais fértil para sempre', 'congelado'], certa: 'lavado pela chuva' },
  { modo: 'escolha', dica: '🗑️ Qual destas causa degradação do solo?', opcoes: ['lixo jogado nos terrenos', 'plantio de nativas', 'manter árvores em pé', 'proteger nascentes'], certa: 'lixo jogado nos terrenos' },
  { modo: 'escolha', dica: '🟤 Por que a água fica barrenta após chuva forte?', opcoes: ['carrega sedimentos', 'ganha corante', 'esfria muito', 'evapora'], certa: 'carrega sedimentos' },
  { modo: 'escolha', dica: '➰ Rios cheios de curvas são chamados de...', opcoes: ['meandrantes', 'retilíneos', 'secos', 'congelados'], certa: 'meandrantes' },
  { modo: 'escolha', dica: '🗻 Vales profundos são escavados pela...', opcoes: ['água ao longo dos anos', 'construção civil', 'areia do Saara', 'mão dos dinossauros'], certa: 'água ao longo dos anos' },
  { modo: 'escolha', dica: '🌿 Vegetação nas margens dos rios reduz o...', opcoes: ['desgaste provocado pela água', 'tamanho dos peixes', 'volume de chuva', 'número de afluentes'], certa: 'desgaste provocado pela água' },
  { modo: 'escolha', dica: '⛏️ Mineração retira areia, pedras e...', opcoes: ['minérios', 'nuvens', 'sombra', 'vento'], certa: 'minérios' },
  { modo: 'escolha', dica: '🚰 Risco da mineração: poluição da...', opcoes: ['água', 'internet', 'bíblioteca', 'sinal de celular'], certa: 'água' },
  { modo: 'escolha', dica: '🌳 Último passo da recuperação de área degradada!', opcoes: ['plantar árvores nativas', 'jogar lixo', 'queimar o pasto', 'tirar todas as plantas'], certa: 'plantar árvores nativas' },
  // --- formato verdade ou mito ---
  { modo: 'vf', frase: 'O desmatamento retira a vegetação para agricultura, pasto ou cidades.', certa: true, porque: 'Verdade! É exatamente isso: mata vira roça, pasto ou cidade! 🌳' },
  { modo: 'vf', frase: 'Queimadas ajudam o solo a ficar mais fértil.', certa: false, porque: 'Mito! O fogo empobrece o solo e a chuva leva a terra! 🔥' },
  { modo: 'vf', frase: 'No manejo sustentável, retira-se apenas o necessário.', certa: true, porque: 'Verdade! Assim a floresta tem tempo de se recuperar! ♻️' },
  { modo: 'vf', frase: 'A Caatinga é úmida e cheia de rios.', certa: false, porque: 'Mito! A Caatinga é seca e adaptada à pouca água! 🌵' },
  { modo: 'vf', frase: 'Nos Campos, predominam as gramíneas.', certa: true, porque: 'Verdade! Capins dominam, ideais para o gado! 🌾' },
  { modo: 'vf', frase: 'A Mata dos Cocais é marcada pelas palmeiras.', certa: true, porque: 'Verdade! Babaçu e buriti são palmeiras dos Cocais! 🌴' },
  { modo: 'vf', frase: 'O tempo atmosférico dura muitos anos.', certa: false, porque: 'Mito! O tempo muda em dias; o CLIMA é que dura muitos anos! ⏱️' },
  { modo: 'vf', frase: 'O sertão ser quente e seco é um exemplo de clima.', certa: true, porque: 'Verdade! É uma tendência duradoura da região! 🏜️' },
  { modo: 'vf', frase: 'A nascente é onde o rio termina.', certa: false, porque: 'Mito! A nascente é o começo; a Foz é onde ele termina! ⛲' },
  { modo: 'vf', frase: 'Um rio perene tem água o ano todo.', certa: true, porque: 'Verdade! Ele não seca nem na estação mais seca! 💧' },
  { modo: 'vf', frase: 'O Rio Amazonas nasce no Peru e deságua no Oceano Atlântico.', certa: true, porque: 'Verdade! Ele nasce nos Andes e vai para o Atlântico! 🇧🇷' },
  { modo: 'vf', frase: 'Sem plantas, o solo fica protegido da chuva.', certa: false, porque: 'Mito! Sem raízes, o solo fica solto e é lavado pela chuva! 🏜️' },
  { modo: 'vf', frase: 'Espécies nativas ajudam a preservar o meio ambiente.', certa: true, porque: 'Verdade! Elas já fazem parte do lugar e alimentam os animais! 🌿' },
  { modo: 'vf', frase: 'A vegetação nas margens dos rios aumenta o desgaste da água.', certa: false, porque: 'Mito! Ela REDUZ o desgaste, segurando a terra com as raízes! 🌿' },
  { modo: 'vf', frase: 'A mineração altera o relevo e pode poluir a água.', certa: true, porque: 'Verdade! Por isso é preciso planejar e recuperar a área! ⛏️' },
  { modo: 'vf', frase: 'Depois da mineração, basta abandonar a área.', certa: false, porque: 'Mito! É preciso remodelar o terreno, cobrir o solo e plantar! 🌳' }
];

const NIVEIS_JOGO = [
  '🌱 Aprendiz da Natureza',
  '🌿 Jardineiro Dedicado',
  '🌳 Protetor das Árvores',
  '🦜 Guardião dos Rios',
  '🏆 Mestre do Meio Ambiente'
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
