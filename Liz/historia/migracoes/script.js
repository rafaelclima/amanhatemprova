// ===== BANCO DE QUESTÕES (60) =====
// Cap. 7 — De tão longe ao Brasil | Cap. 8 — As migrações na atualidade
const bancoQuestoes = [
  // ===== IMIGRANTES A CAMINHO DO BRASIL (1-8) =====
  {
    id: 1, tipo: 'chegada',
    q: '🧳 Imigrante é...',
    alternativas: [
      { texto: 'Quem chega de outro país para morar aqui', correta: true, explicacao: 'Isso! IMigrante = quem ENTRA no país para viver nele! 🛬' },
      { texto: 'Quem sai do Brasil para morar em outro país', correta: false, explicacao: 'Esse é o EMigrante, o que SAI! Imigrante é quem CHEGA!' },
      { texto: 'Quem vai à praia nas férias', correta: false, explicacao: 'Férias são viagem de passeio! Imigrante é quem se MUDA de país!' }
    ]
  },
  {
    id: 2, tipo: 'chegada',
    q: '✈️ Quem sai do seu país para morar em outro é...',
    alternativas: [
      { texto: 'Emigrante', correta: true, explicacao: 'Isso! EMigrante = quem SAI do país de origem! ✈️' },
      { texto: 'Imigrante', correta: false, explicacao: 'Imigrante é quem CHEGA! Quem sai é o EMigrante!' },
      { texto: 'Turista', correta: false, explicacao: 'Turista passeia e volta! Emigrante vai para MORAR!' }
    ]
  },
  {
    id: 3, tipo: 'chegada',
    q: '😢 Por que muitas famílias deixaram a Europa e a Ásia para vir ao Brasil no século XIX?',
    alternativas: [
      { texto: 'Passavam por pobreza, fome e falta de terra, e buscavam vida melhor', correta: true, explicacao: 'Isso! Muitos queriam escapar da miséria e começar de novo, com terra e trabalho! 😢➡️🏠' },
      { texto: 'Queriam conhecer o carnaval', correta: false, explicacao: 'Não era passeio! Eles fugiam da pobreza e da falta de trabalho!' },
      { texto: 'Perderam uma aposta', correta: false, explicacao: 'Nada disso! Foi a busca por uma vida melhor que trouxe essas famílias!' }
    ]
  },
  {
    id: 4, tipo: 'chegada',
    q: '☕ Depois do fim da escravidão (1888), do que os fazendeiros precisavam?',
    alternativas: [
      { texto: 'De trabalhadores para as lavouras', correta: true, explicacao: 'Isso! Com o fim da escravidão, faltavam mãos nas fazendas de café — e o Brasil chamou imigrantes! ☕' },
      { texto: 'De máquinas gigantes', correta: false, explicacao: 'As máquinas da época não faziam a colheita! Eram pessoas que trabalhavam!' },
      { texto: 'De turistas para visitar a fazenda', correta: false, explicacao: 'Era trabalho de verdade! Precisavam de trabalhadores nas plantações!' }
    ]
  },
  {
    id: 5, tipo: 'chegada',
    q: '🚢 Como os imigrantes atravessavam o oceano para chegar ao Brasil?',
    alternativas: [
      { texto: 'Em navios, em viagens que duravam semanas', correta: true, explicacao: 'Isso! A travessia era longa: muitas semanas dentro do navio! 🚢' },
      { texto: 'De avião, em poucas horas', correta: false, explicacao: 'Avião só foi inventado muito depois! Naquela época era NAVIO!' },
      { texto: 'Nadando com boias', correta: false, explicacao: 'Imagina só! Eram navios, com viagens de semanas!' }
    ]
  },
  {
    id: 6, tipo: 'chegada',
    q: '🥱 Como era a viagem nos navios de imigrantes?',
    alternativas: [
      { texto: 'Cheia de gente, com pouca comida e doenças', correta: true, explicacao: 'Isso! Era muito difícil: muitas pessoas juntas, alimentação fraca e doenças no caminho! 😢' },
      { texto: 'Confortável, com quartos só para cada família', correta: false, explicacao: 'Nada confortável! As pessoas viajavam amontoadas! 🚢' },
      { texto: 'Rápida, de um dia para o outro', correta: false, explicacao: 'Não! Durava semanas e semanas! 🚢' }
    ]
  },
  {
    id: 7, tipo: 'chegada',
    q: '⚓ Em qual porto de São Paulo muitos imigrantes chegaram?',
    alternativas: [
      { texto: 'No porto de Santos', correta: true, explicacao: 'Isso! Muitos imigrantes desembarcaram em Santos e seguiram para a Hospedaria dos Imigrantes! ⚓' },
      { texto: 'No porto de Manaus', correta: false, explicacao: 'Manaus está no meio da floresta, no Amazonas! O porto paulista é SANTOS!' },
      { texto: 'No porto de Fortaleza', correta: false, explicacao: 'Fortaleza fica no Ceará! Em São Paulo, o grande porto é SANTOS!' }
    ]
  },
  {
    id: 8, tipo: 'chegada',
    q: '🇯🇵 Qual navio trouxe os primeiros imigrantes japoneses para o Brasil, em 1908?',
    alternativas: [
      { texto: 'Kasato Maru', correta: true, explicacao: 'Isso! O Kasato Maru chegou em 1908, e muitos japoneses foram trabalhar nas fazendas de café de São Paulo! 🇯🇵' },
      { texto: 'Titanic', correta: false, explicacao: 'O Titanic naufragou em 1912! O navio dos primeiros japoneses foi o KASATO MARU!' },
      { texto: 'Santa Maria', correta: false, explicacao: 'Santa Maria era o navio de Colombo! O dos japoneses, em 1908, foi o KASATO MARU!' }
    ]
  },
  // ===== MUITO TRABALHO, POUCAS RIQUEZAS (9-16) =====
  {
    id: 9, tipo: 'trabalho',
    q: '🌾 Onde foi trabalhar a maioria dos imigrantes que chegou a São Paulo?',
    alternativas: [
      { texto: 'Nas fazendas de café', correta: true, explicacao: 'Isso! Eles cuidavam do cafezal, colhiam e secavam o café! ☕' },
      { texto: 'Nas praias, vendendo sorvete', correta: false, explicacao: 'Nada de praia! O trabalho era nas FAZENDAS DE CAFÉ!' },
      { texto: 'Nas minas de ouro', correta: false, explicacao: 'A época do ouro foi bem antes! Esses imigrantes foram para o CAFÉ!' }
    ]
  },
  {
    id: 10, tipo: 'trabalho',
    q: '🌾 Para onde foram os imigrantes alemães e italianos que formaram colônias?',
    alternativas: [
      { texto: 'Para o Sul do Brasil (Rio Grande do Sul, Santa Catarina e Paraná)', correta: true, explicacao: 'Isso! No Sul eles recebiam um pedaço de terra e formavam colônias! 🌾' },
      { texto: 'Para o meio do oceano', correta: false, explicacao: 'No oceano não dá para plantar! Eles foram para o SUL do Brasil!' },
      { texto: 'Para o deserto do Saara', correta: false, explicacao: 'O Saara fica na África! As colônias de alemães e italianos foram no SUL do Brasil!' }
    ]
  },
  {
    id: 11, tipo: 'trabalho',
    q: '🌅 Como era a jornada de trabalho nas fazendas?',
    alternativas: [
      { texto: 'De sol a sol: começava bem cedo e acabava quando escurecia', correta: true, explicacao: 'Isso! Trabalhavam do amanhecer ao anoitecer, e era muito cansativo! 💪' },
      { texto: 'Só duas horinhas por dia', correta: false, explicacao: 'Muito pelo contrário! Trabalhavam o dia inteiro, DE SOL A SOL!' },
      { texto: 'Só quando queriam', correta: false, explicacao: 'Eles precisavam trabalhar todos os dias, e muito! ☀️' }
    ]
  },
  {
    id: 12, tipo: 'trabalho',
    q: '👨‍👩‍👧‍👦 Quem trabalhava nas fazendas de café?',
    alternativas: [
      { texto: 'A família inteira, inclusive as crianças', correta: true, explicacao: 'Isso! Todos trabalhavam, e as crianças muitas vezes não conseguiam estudar! 👨‍👩‍👧‍👦' },
      { texto: 'Só os adultos', correta: false, explicacao: 'Não! As crianças também trabalhavam — e por isso ficavam longe da escola!' },
      { texto: 'Só os visitantes', correta: false, explicacao: 'Visitas não colhem café! A FAMÍLIA inteira trabalhava!' }
    ]
  },
  {
    id: 13, tipo: 'trabalho',
    q: '💸 Por que muitas famílias de imigrantes ficavam endividadas?',
    alternativas: [
      { texto: 'Porque compravam na venda da fazenda e gastavam mais do que recebiam', correta: true, explicacao: 'Isso! O pagamento era pequeno e a dívida na venda da fazenda só crescia! 😢' },
      { texto: 'Porque emprestavam dinheiro para o fazendeiro', correta: false, explicacao: 'Era o contrário: ELES deviam ao patrão, não o patrão a eles!' },
      { texto: 'Porque perderam dinheiro no banco', correta: false, explicacao: 'Não era banco! A dívida era na VENDA da fazenda, onde compravam comida!' }
    ]
  },
  {
    id: 14, tipo: 'trabalho',
    q: '🤔 As promessas de terra e vida melhor feitas aos imigrantes foram sempre cumpridas?',
    alternativas: [
      { texto: 'Não! Muitos trabalharam muito e ganharam pouco', correta: true, explicacao: 'Isso! A propaganda prometia muito, mas a realidade era de muito trabalho e pouca riqueza! 💪' },
      { texto: 'Sim! Todos ficaram ricos na hora', correta: false, explicacao: 'Mito! Ficou tudo na promessa, e a vida foi bem difícil no começo!' },
      { texto: 'Sim! Ganharam terras enormes de presente', correta: false, explicacao: 'Não! Muitos não receberam a terra prometida e ficaram presos às dívidas!' }
    ]
  },
  {
    id: 15, tipo: 'trabalho',
    q: '🎉 Mesmo depois de tanta luta, o que muitas famílias de imigrantes conseguiram fazer?',
    alternativas: [
      { texto: 'Juntar dinheiro, comprar um pedaço de terra ou trabalhar na cidade', correta: true, explicacao: 'Isso! Com muito esforço, muitas famílias conseguiram seu pedacinho de terra ou trabalho nas fábricas e no comércio! 🎉' },
      { texto: 'Voltar voando para casa', correta: false, explicacao: 'Avião nem existia! Muitos ficaram e construíram a vida aqui!' },
      { texto: 'Ganhar na loteria', correta: false, explicacao: 'Não era sorte: foi MUITO TRABALHO e muita economia! 💪' }
    ]
  },
  {
    id: 16, tipo: 'trabalho',
    q: '🏙️ O que o trabalho dos imigrantes ajudou a construir no Brasil?',
    alternativas: [
      { texto: 'As plantações, as fábricas, o comércio e as cidades', correta: true, explicacao: 'Isso! Com o trabalho deles, o Brasil cresceu e mudou bastante! 🏙️' },
      { texto: 'Somente uma casa', correta: false, explicacao: 'Foi muito mais! As cidades, as fábricas e o comércio cresceram com esse trabalho!' },
      { texto: 'Nada, eles só descansaram', correta: false, explicacao: 'Eles trabalharam MUITO! O Brasil cresceu com a força dessas famílias!' }
    ]
  },
  // ===== UMA DIFÍCIL ADAPTAÇÃO (17-24) =====
  {
    id: 17, tipo: 'adaptacao',
    q: '🔄 O que significa se adaptar a um lugar novo?',
    alternativas: [
      { texto: 'Acostumar-se com a língua, a comida, o clima e os costumes do lugar', correta: true, explicacao: 'Isso! Adaptar-se é aprender a viver no lugar novo — e não é nada fácil! 🔄' },
      { texto: 'Mudar de roupa', correta: false, explicacao: 'Roupa é só roupagem! Adaptar-se é acostumar-se com todo o jeito de viver do lugar novo!' },
      { texto: 'Esquecer tudo do seu país', correta: false, explicacao: 'Nada disso! Adaptar-se é conviver com o novo SEM esquecer sua cultura!' }
    ]
  },
  {
    id: 18, tipo: 'adaptacao',
    q: '🗣️ Qual foi uma das maiores dificuldades dos imigrantes no Brasil?',
    alternativas: [
      { texto: 'A língua portuguesa e a saudade da família que ficou longe', correta: true, explicacao: 'Isso! Idioma novo, clima diferente, comida diferente e muita saudade! 😢' },
      { texto: 'Achar chocolate', correta: false, explicacao: 'O difícil era entender a língua e a saudade da família, não o chocolate!' },
      { texto: 'Andar de bicicleta', correta: false, explicacao: 'Nada disso! A dificuldade era a LÍNGUA, o CLIMA e a SAUDADE!' }
    ]
  },
  {
    id: 19, tipo: 'adaptacao',
    q: '😠 Alguns imigrantes sofreram preconceito e maus-tratos. Isso foi certo?',
    alternativas: [
      { texto: 'Não! Ninguém deve ser tratado mal por ser diferente', correta: true, explicacao: 'Muito bem! Ser diferente não é motivo para preconceito: todos merecem respeito! ❤️' },
      { texto: 'Sim, porque eram de outro país', correta: false, explicacao: 'De jeito nenhum! Preconceito é sempre errado, com qualquer pessoa!' },
      { texto: 'Sim, porque falavam outra língua', correta: false, explicacao: 'Falar outra língua não é defeito! Todos merecem respeito!' }
    ]
  },
  {
    id: 20, tipo: 'adaptacao',
    q: '🎉 Como os imigrantes mantiveram viva a cultura de seus países?',
    alternativas: [
      { texto: 'Com colônias, igrejas, clubes, festas, comidas e jornais na língua de origem', correta: true, explicacao: 'Isso! Eles mantiveram suas tradições vivas — e ainda ensinaram muito para nós! 🎉' },
      { texto: 'Parando de falar com todos', correta: false, explicacao: 'Nada disso! Eles se organizaram em colônias, clubes e festas!' },
      { texto: 'Escondendo tudo o que trouxeram', correta: false, explicacao: 'Ao contrário! Eles mostraram e compartilharam sua cultura! 🍝' }
    ]
  },
  {
    id: 21, tipo: 'adaptacao',
    q: '🍝 Quais comidas os italianos trouxeram para o Brasil?',
    alternativas: [
      { texto: 'Pizza e macarrão', correta: true, explicacao: 'Isso! Pizza e macarrão são marcas italianas que amamos até hoje! 🍝' },
      { texto: 'Sushi e sashimi', correta: false, explicacao: 'Esses vieram do Japão! Os italianos trouxeram PIZZA E MACARRÃO!' },
      { texto: 'Quibe e esfiha', correta: false, explicacao: 'Esses são sírios e libaneses! Os italianos trouxeram pizza e macarrão!' }
    ]
  },
  {
    id: 22, tipo: 'adaptacao',
    q: '🥙 Quais comidas os sírios e libaneses trouxeram?',
    alternativas: [
      { texto: 'Quibe e esfiha', correta: true, explicacao: 'Isso! Quibe e esfiha são delícias do Oriente Médio que viraram brasileiríssimas! 🥙' },
      { texto: 'Pizza e macarrão', correta: false, explicacao: 'Esses são italianos! Sírios e libaneses trouxeram QUIBE e ESFIHA!' },
      { texto: 'Sushi e origami', correta: false, explicacao: 'Sushi e origami são do Japão! Quibe e esfiha são sírios e libaneses!' }
    ]
  },
  {
    id: 23, tipo: 'adaptacao',
    q: '🥋 O que os japoneses trouxeram para a cultura brasileira?',
    alternativas: [
      { texto: 'Judô, caratê, origami e sushi', correta: true, explicacao: 'Isso! Esportes, dobraduras e comidas que fazem parte da nossa vida! 🥋' },
      { texto: 'Oktoberfest e enfeites de Natal', correta: false, explicacao: 'Esses vieram dos alemães! Os japoneses trouxeram judô, caratê, origami e sushi!' },
      { texto: 'Pizza e macarrão', correta: false, explicacao: 'Esses são italianos! Do Japão vieram o judô, o caratê, o origami e o sushi!' }
    ]
  },
  {
    id: 24, tipo: 'adaptacao',
    q: '🇧🇷 Com o tempo, o que aconteceu com os imigrantes e seus descendentes?',
    alternativas: [
      { texto: 'Se misturaram ao povo brasileiro e a cultura deles virou parte do Brasil', correta: true, explicacao: 'Isso! Hoje comemos pizza e sushi, e tudo isso é cultura brasileira também! 🇧🇷' },
      { texto: 'Voltaram todos para seus países', correta: false, explicacao: 'Muitos ficaram e criaram famílias aqui: seus descendentes são brasileiros!' },
      { texto: 'Esqueceram completamente sua cultura', correta: false, explicacao: 'Nada disso! Eles mantiveram tradições — e a cultura deles ficou no Brasil para sempre!' }
    ]
  },
  // ===== MIGRANTES A CAMINHO DA AMAZÔNIA (25-36) =====
  {
    id: 25, tipo: 'amazonia',
    q: '🧭 Qual é a diferença entre MIGRANTE e IMIGRANTE?',
    alternativas: [
      { texto: 'Migrante se muda dentro do próprio país; imigrante vem de outro país', correta: true, explicacao: 'Isso! Quem se muda do Nordeste para a Amazônia é migrante; quem vem de outro país é imigrante! 🧭' },
      { texto: 'Os dois são a mesma coisa, sem diferença', correta: false, explicacao: 'Tem diferença sim! Migrante se muda dentro do país; imigrante vem de fora!' },
      { texto: 'Migrante é quem viaja de avião', correta: false, explicacao: 'O meio de transporte não importa! Migrante se muda dentro do próprio país!' }
    ]
  },
  {
    id: 26, tipo: 'amazonia',
    q: '🌵 Por que muitos nordestinos se mudaram para a Amazônia?',
    alternativas: [
      { texto: 'Fugindo da seca e buscando terra e trabalho', correta: true, explicacao: 'Isso! A seca deixava tudo difícil, e a Amazônia parecia ter trabalho e futuro! 🌳' },
      { texto: 'Para esquiar na neve', correta: false, explicacao: 'Na Amazônia não neva! Eles iam em busca de trabalho e terra!' },
      { texto: 'Para ver o mar', correta: false, explicacao: 'A Amazônia é floresta! Eles foram atrás de trabalho, fugindo da seca!' }
    ]
  },
  {
    id: 27, tipo: 'amazonia',
    q: '🌳 Qual árvore da Amazônia produz o látex, que vira borracha?',
    alternativas: [
      { texto: 'A seringueira', correta: true, explicacao: 'Isso! Da seringueira sai o látex, o "leite" branco que vira borracha! 🌳' },
      { texto: 'A laranjeira', correta: false, explicacao: 'A laranjeira dá laranja! A árvore da borracha é a SERINGUEIRA!' },
      { texto: 'A roseira', correta: false, explicacao: 'Essa dá rosas! A árvore do látex é a SERINGUEIRA!' }
    ]
  },
  {
    id: 28, tipo: 'amazonia',
    q: '🥛 O que é o látex?',
    alternativas: [
      { texto: 'Um "leite" branco que sai da seringueira e vira borracha', correta: true, explicacao: 'Isso! O látex parece leite e é a matéria-prima da borracha! 🥛' },
      { texto: 'Um tipo de peixe do rio', correta: false, explicacao: 'Peixe nada! O látex é o SUCO LEITOSO da seringueira!' },
      { texto: 'Uma fruta típica da floresta', correta: false, explicacao: 'Fruta é outra coisa! Látex é o líquido que sai da SERINGUEIRA!' }
    ]
  },
  {
    id: 29, tipo: 'amazonia',
    q: '⚙️ Para que serve a borracha que vem da Amazônia?',
    alternativas: [
      { texto: 'Para fazer pneus, solas de sapato e muitos objetos', correta: true, explicacao: 'Isso! Pneus, solas, mangueiras... a borracha está em um monte de coisas! ⚙️' },
      { texto: 'Para fazer suco', correta: false, explicacao: 'Suco se faz com fruta! A borracha vira PNEU, sola de sapato e outros objetos!' },
      { texto: 'Para iluminar a casa', correta: false, explicacao: 'Iluminar é com lâmpada! A borracha serve para fazer pneus e solas!' }
    ]
  },
  {
    id: 30, tipo: 'amazonia',
    q: '💰 O que foi o ciclo da borracha?',
    alternativas: [
      { texto: 'Um tempo em que o mundo comprava a borracha da Amazônia e a região ficou rica', correta: true, explicacao: 'Isso! Entre o fim do século XIX e o começo do XX, a borracha da Amazônia era vendida para o mundo todo! 💰' },
      { texto: 'Uma festa da floresta', correta: false, explicacao: 'Foi um período de muito COMÉRCIO de borracha, não uma festa!' },
      { texto: 'Um campeonato de futebol', correta: false, explicacao: 'Futebol é outro assunto! O ciclo da borracha foi o auge da VENDA de borracha da Amazônia!' }
    ]
  },
  {
    id: 31, tipo: 'amazonia',
    q: '🏙️ Quais cidades cresceram e ficaram ricas com a borracha?',
    alternativas: [
      { texto: 'Manaus e Belém', correta: true, explicacao: 'Isso! As duas cidades cresceram muito com o dinheiro da borracha! 🏙️' },
      { texto: 'São Paulo e Curitiba', correta: false, explicacao: 'Essas cresceram com o café e a indústria! Na borracha, foram MANAUS e BELÉM!' },
      { texto: 'Salvador e Recife', correta: false, explicacao: 'Essas brilharam com o açúcar! Com a borracha, foram MANAUS e BELÉM!' }
    ]
  },
  {
    id: 32, tipo: 'amazonia',
    q: '🎭 Qual construção famosa mostra a riqueza de Manaus na época da borracha?',
    alternativas: [
      { texto: 'O Teatro Amazonas', correta: true, explicacao: 'Isso! Manaus construiu um teatro lindo, com materiais vindos da Europa! 🎭' },
      { texto: 'A Torre Eiffel', correta: false, explicacao: 'Essa fica em Paris! Em Manaus, a obra famosa é o TEATRO AMAZONAS!' },
      { texto: 'O Cristo Redentor', correta: false, explicacao: 'Esse fica no Rio! A riqueza de Manaus aparece no TEATRO AMAZONAS!' }
    ]
  },
  {
    id: 33, tipo: 'amazonia',
    q: '🪓 Quem eram os seringueiros?',
    alternativas: [
      { texto: 'Trabalhadores que tiravam o látex das seringueiras na floresta', correta: true, explicacao: 'Isso! Eles entravam na mata para cortar as seringueiras e recolher o látex! 🪓' },
      { texto: 'Vendedores de seringa de remédio', correta: false, explicacao: 'Nada disso! Seringueiro é quem trabalha com a SERINGUEIRA, a árvore da borracha!' },
      { texto: 'Pilotos de avião', correta: false, explicacao: 'Avião não entra na floresta fechada! Seringueiros trabalham com o LÁTEX!' }
    ]
  },
  {
    id: 34, tipo: 'amazonia',
    q: '😢 Como era a vida dos seringueiros?',
    alternativas: [
      { texto: 'Trabalho pesado, poucas riquezas, dívidas com o patrão e doenças', correta: true, explicacao: 'Isso! De novo: muito trabalho e poucas riquezas! Eles viviam isolados e doentes, como a malária! 😢' },
      { texto: 'Fácil e cheia de dinheiro', correta: false, explicacao: 'Muito pelo contrário! Trabalhavam demais e quase não viam dinheiro por causa das dívidas!' },
      { texto: 'Eles só passeavam na floresta', correta: false, explicacao: 'Passeio nada! O trabalho era pesado, na floresta, longe da família!' }
    ]
  },
  {
    id: 35, tipo: 'amazonia',
    q: '🪖 Quem foram os soldados da borracha?',
    alternativas: [
      { texto: 'Nordestinos enviados à Amazônia para tirar borracha durante a 2ª Guerra Mundial', correta: true, explicacao: 'Isso! Em 1943, milhares de nordestinos foram para a Amazônia tirar borracha para o mundo! 🪖' },
      { texto: 'Soldados que usavam armadura de borracha', correta: false, explicacao: 'Nada de armadura! Eles iam TIRAR BORRACHA das seringueiras, na época da guerra!' },
      { texto: 'Turistas que visitaram a floresta', correta: false, explicacao: 'Eles foram TRABALHAR, não passear! Eram nordestinos enviados pelo governo!' }
    ]
  },
  {
    id: 36, tipo: 'amazonia',
    q: '😥 O que aconteceu com muitos soldados da borracha?',
    alternativas: [
      { texto: 'Adoeceram e morreram na floresta, e muitos nunca receberam o prometido', correta: true, explicacao: 'Isso! Foi uma história muito triste: muitos morreram de doença e nunca receberam o que lhes foi prometido. 😥' },
      { texto: 'Ficaram milionários', correta: false, explicacao: 'Muito triste: eles ganharam pouco, adoeceram e muitos nunca receberam o prometido!' },
      { texto: 'Voltaram todos felizes e ricos', correta: false, explicacao: 'Não foi assim. Muitos morreram na floresta sem receber o que foi prometido. 😢' }
    ]
  },
  // ===== AS MIGRAÇÕES NA ATUALIDADE (37-44) =====
  {
    id: 37, tipo: 'atualidade',
    q: '🌍 As migrações acontecem só no passado?',
    alternativas: [
      { texto: 'Não! As pessoas migram até hoje, no mundo inteiro', correta: true, explicacao: 'Isso! As migrações continuam acontecendo todos os dias! 🌍' },
      { texto: 'Sim, hoje ninguém mais se muda', correta: false, explicacao: 'Mito! Hoje mesmo há milhões de pessoas migrando pelo mundo!' },
      { texto: 'Só em filmes', correta: false, explicacao: 'Nada disso! As migrações são bem reais e acontecem todos os dias!' }
    ]
  },
  {
    id: 38, tipo: 'atualidade',
    q: '🏠 O que leva as pessoas a migrar hoje em dia?',
    alternativas: [
      { texto: 'Procurar trabalho, estudo, segurança e um novo lar', correta: true, explicacao: 'Isso! Buscar uma vida melhor é o principal motivo das migrações! 🌍' },
      { texto: 'Só a vontade de conhecer parques', correta: false, explicacao: 'Parques são passeio! Quem migra busca TRABALHO, ESTUDO e SEGURANÇA!' },
      { texto: 'Ganhar um prêmio', correta: false, explicacao: 'Migração não é prêmio! É a busca por uma vida digna e segura!' }
    ]
  },
  {
    id: 39, tipo: 'atualidade',
    q: '🌪️ Qual destes motivos faz uma família deixar tudo e ir para outro país?',
    alternativas: [
      { texto: 'Guerras, desastres naturais, pobreza e falta de trabalho', correta: true, explicacao: 'Isso! Quando não há segurança nem trabalho, migrar é a saída! 🌪️' },
      { texto: 'Falta de chocolate em casa', correta: false, explicacao: 'Isso não faz ninguém deixar o país! As causas são graves: guerra, desastres e pobreza!' },
      { texto: 'Saudade do futebol', correta: false, explicacao: 'Não! Os motivos são sérios: guerra, desastres naturais, pobreza e falta de trabalho!' }
    ]
  },
  {
    id: 40, tipo: 'atualidade',
    q: '🇻🇪 De qual país vizinho muitas pessoas vieram para o Brasil nos últimos anos?',
    alternativas: [
      { texto: 'Da Venezuela', correta: true, explicacao: 'Isso! Muitos venezuelanos entraram pelo estado de Roraima em busca de trabalho e comida! 🇻🇪' },
      { texto: 'Do Japão', correta: false, explicacao: 'O Japão fica longe, do outro lado do mundo! O vizinho de onde muita gente veio é a VENEZUELA!' },
      { texto: 'Da Alemanha', correta: false, explicacao: 'A Alemanha fica na Europa! O país vizinho do norte do Brasil é a VENEZUELA!' }
    ]
  },
  {
    id: 41, tipo: 'atualidade',
    q: '🌎 O Brasil recebe imigrantes de vários países hoje em dia?',
    alternativas: [
      { texto: 'Sim! Venezuelanos, haitianos, bolivianos, sírios e ucranianos, entre outros', correta: true, explicacao: 'Isso! O Brasil continua sendo um país de chegada, formado por muitas culturas! 🌎' },
      { texto: 'Não, as pessoas pararam de vir', correta: false, explicacao: 'Mito! O Brasil recebe pessoas de muitos países até hoje!' },
      { texto: 'Só de um país', correta: false, explicacao: 'Não! Vem gente de vários lugares: Venezuela, Haiti, Bolívia, Síria, Ucrânia...' }
    ]
  },
  {
    id: 42, tipo: 'atualidade',
    q: '✈️ Como se chama o brasileiro que sai do Brasil para morar em outro país?',
    alternativas: [
      { texto: 'Emigrante', correta: true, explicacao: 'Isso! Ele sai do Brasil, então é EMIGRANTE! Muitos brasileiros vivem em Portugal, no Japão e nos Estados Unidos! ✈️' },
      { texto: 'Imigrante', correta: false, explicacao: 'Imigrante é quem CHEGA ao país! Quem SAI do Brasil é EMIGRANTE!' },
      { texto: 'Refugiado', correta: false, explicacao: 'Refugiado é quem foge de guerra e perseguição! Brasileiro que vai morar fora é EMIGRANTE!' }
    ]
  },
  {
    id: 43, tipo: 'atualidade',
    q: '🚚 O que é o êxodo rural?',
    alternativas: [
      { texto: 'A saída de pessoas do campo para as cidades', correta: true, explicacao: 'Isso! Êxodo rural é quando as pessoas deixam a zona rural e vão viver nas cidades! 🚚' },
      { texto: 'Uma festa no campo', correta: false, explicacao: 'Festa nada! É a MUDANÇA das pessoas do campo para a cidade!' },
      { texto: 'O caminho dos animais migratórios', correta: false, explicacao: 'Nada disso! Êxodo rural é sobre PESSOAS deixando o campo para morar na cidade!' }
    ]
  },
  {
    id: 44, tipo: 'atualidade',
    q: '🇧🇷 Qual migração acontece muito dentro do Brasil?',
    alternativas: [
      { texto: 'Do Nordeste para o Sudeste e o Sul, em busca de trabalho', correta: true, explicacao: 'Isso! Muitas pessoas deixam o Nordeste para tentar a vida em São Paulo e em outras cidades! 🇧🇷' },
      { texto: 'Do Brasil para a Lua', correta: false, explicacao: 'Ninguém mora na Lua! As migrações são entre os estados e regiões do Brasil!' },
      { texto: 'Do Nordeste para o Polo Norte', correta: false, explicacao: 'O Polo Norte fica longe demais e é gelado! A migração é dentro do Brasil!' }
    ]
  },
  // ===== PROCURANDO ABRIGO (45-52) =====
  {
    id: 45, tipo: 'abrigo',
    q: '🏠 O que é um abrigo?',
    alternativas: [
      { texto: 'Um lugar seguro para ficar, com cama, comida e proteção', correta: true, explicacao: 'Isso! Abrigo é proteção: um lugar onde a pessoa pode descansar em segurança! 🏠' },
      { texto: 'Um parque de diversões', correta: false, explicacao: 'Parque é diversão! Abrigo é um lugar SEGURO para quem perdeu tudo!' },
      { texto: 'Uma loja de brinquedos', correta: false, explicacao: 'Loja é comércio! Abrigo é acolhimento e proteção!' }
    ]
  },
  {
    id: 46, tipo: 'abrigo',
    q: '🌊 Quando alguém precisa de abrigo com urgência?',
    alternativas: [
      { texto: 'Quando perde a casa em enchentes, terremotos, furacões ou guerras', correta: true, explicacao: 'Isso! Sem casa e sem segurança, a pessoa precisa de um abrigo na hora! 🌊' },
      { texto: 'Quando quer dormir mais tarde', correta: false, explicacao: 'Sono é outra coisa! Abrigo urgente é para quem perdeu tudo!' },
      { texto: 'Quando a TV quebra', correta: false, explicacao: 'TV não é motivo para abrigo! Abrigo é para quem perdeu a CASA!' }
    ]
  },
  {
    id: 47, tipo: 'abrigo',
    q: '🤝 O que é a Operação Acolhida?',
    alternativas: [
      { texto: 'A ação que recebe os venezuelanos em Roraima, com abrigo, comida, vacinas e documentos', correta: true, explicacao: 'Isso! É o governo brasileiro, com organizações parceiras, cuidando de quem chega! 🤝' },
      { texto: 'Uma competição de futebol', correta: false, explicacao: 'Nada de bola! É uma AÇÃO de acolhimento, com abrigo, vacinas e documentos!' },
      { texto: 'Um feriado nacional', correta: false, explicacao: 'Não é feriado! É um trabalho de recepção e cuidado com quem chega de outro país!' }
    ]
  },
  {
    id: 48, tipo: 'abrigo',
    q: '🎒 O que as pessoas recebem nos abrigos e no acolhimento no Brasil?',
    alternativas: [
      { texto: 'Cama, comida, banho, remédios, documentos e aulas de português', correta: true, explicacao: 'Isso! As famílias recebem cuidado completo para poderem recomeçar! 🎒' },
      { texto: 'Só uma passagem de ônibus', correta: false, explicacao: 'É muito mais! Cama, comida, remédios, documentos e aulas de português!' },
      { texto: 'Só um mapa do Brasil', correta: false, explicacao: 'Um mapa só não resolve! O acolhimento oferece cuidado completo!' }
    ]
  },
  {
    id: 49, tipo: 'abrigo',
    q: '🕊️ Quais organizações ajudam imigrantes e refugiados no Brasil?',
    alternativas: [
      { texto: 'A ONU (com o ACNUR), igrejas e ONGs', correta: true, explicacao: 'Isso! Muitas organizações trabalham juntas no acolhimento, junto com o governo! 🕊️' },
      { texto: 'Só times de futebol', correta: false, explicacao: 'Time de futebol não faz esse trabalho! A ONU (ACNUR), igrejas e ONGs sim!' },
      { texto: 'Ninguém ajuda', correta: false, explicacao: 'Muita gente ajuda! ONU/ACNUR, igrejas, ONGs e também pessoas comuns como você!' }
    ]
  },
  {
    id: 50, tipo: 'abrigo',
    q: '❤️ O que significa acolher alguém?',
    alternativas: [
      { texto: 'Receber bem, com respeito, cuidado e amizade', correta: true, explicacao: 'Isso! Acolher é abrir espaço no coração e ajudar a pessoa a se sentir em casa! ❤️' },
      { texto: 'Mandar a pessoa embora', correta: false, explicacao: 'Isso é o contrário de acolher! Acolher é RECEBER bem, com respeito!' },
      { texto: 'Fingir que a pessoa não existe', correta: false, explicacao: 'Nunca! Acolher é exatamente o oposto: ver, ouvir e ajudar! ❤️' }
    ]
  },
  {
    id: 51, tipo: 'abrigo',
    q: '🏫 Como você pode acolher um colega novo que veio de outro país?',
    alternativas: [
      { texto: 'Sendo amigo, convidando para brincar e respeitando sua cultura', correta: true, explicacao: 'Isso! Amizade e respeito fazem toda a diferença para quem chegou de longe! 🏫' },
      { texto: 'Rindo porque ele fala diferente', correta: false, explicacao: 'Isso machuca! Nada de rir: ACOLHER é ajudar e incluir!' },
      { texto: 'Ignorando para ele não ter amigos', correta: false, explicacao: 'Que triste seria! Todo mundo merece amigos e acolhimento!' }
    ]
  },
  {
    id: 52, tipo: 'abrigo',
    q: '📄 Por que muitas pessoas chegam sem documentos?',
    alternativas: [
      { texto: 'Porque tiveram que sair às pressas, fugindo do perigo', correta: true, explicacao: 'Isso! Muitas vezes não deu tempo de pegar nada — e ainda assim elas têm direito à proteção! 📄' },
      { texto: 'Porque esqueceram na gaveta', correta: false, explicacao: 'Não foi esquecimento! Elas fugiram rápido demais por causa do perigo!' },
      { texto: 'Porque não gostam de papel', correta: false, explicacao: 'Nada disso! Elas tiveram que sair correndo, sem tempo de pegar nada!' }
    ]
  },
  // ===== BUSCANDO SEGURANÇA E PROTEÇÃO (53-60) =====
  {
    id: 53, tipo: 'protecao',
    q: '🛡️ Quem é um refugiado?',
    alternativas: [
      { texto: 'Alguém que teve que fugir de seu país por causa de guerras, violência ou perseguição', correta: true, explicacao: 'Isso! O refugiado foge porque corre perigo e precisa de proteção! 🛡️' },
      { texto: 'Alguém que viaja para conhecer o mundo', correta: false, explicacao: 'Viajar é por escolha! Refugiado foge de GUERRA e PERSEGUIÇÃO!' },
      { texto: 'Alguém que mudou de casa no mesmo bairro', correta: false, explicacao: 'Isso é uma mudança comum! Refugiado foge de perigo em outro país!' }
    ]
  },
  {
    id: 54, tipo: 'protecao',
    q: '🤔 Qual é a diferença entre imigrante e refugiado?',
    alternativas: [
      { texto: 'O imigrante escolhe se mudar; o refugiado foge porque precisa, para se proteger', correta: true, explicacao: 'Isso! O refugiado não pode voltar para casa: seria perigoso demais! 🤔' },
      { texto: 'Não existe diferença nenhuma', correta: false, explicacao: 'Existe sim! O refugiado FOGE de um perigo e precisa de proteção especial!' },
      { texto: 'O refugiado é quem viaja de férias', correta: false, explicacao: 'Férias nada! Refugiado foge de guerra e perseguição!' }
    ]
  },
  {
    id: 55, tipo: 'protecao',
    q: '🚫 Um refugiado pode ser devolvido ao país de onde fugiu?',
    alternativas: [
      { texto: 'Não! A proteção internacional impede que ele volte para o perigo', correta: true, explicacao: 'Isso! Ninguém pode ser enviado de volta para um lugar onde corre risco de vida! 🚫' },
      { texto: 'Sim, a qualquer momento', correta: false, explicacao: 'De jeito nenhum! A proteção internacional impede a devolução para o perigo!' },
      { texto: 'Só se ele quiser', correta: false, explicacao: 'Não é uma escolha simples: devolver alguém ao perigo é proibido pela proteção internacional!' }
    ]
  },
  {
    id: 56, tipo: 'protecao',
    q: '🕊️ Qual agência da ONU cuida dos refugiados no mundo todo?',
    alternativas: [
      { texto: 'ACNUR', correta: true, explicacao: 'Isso! O ACNUR é a agência da ONU que protege os refugiados! 🕊️' },
      { texto: 'IBGE', correta: false, explicacao: 'O IBGE faz pesquisas e censos! Quem cuida de refugiados é o ACNUR!' },
      { texto: 'INSS', correta: false, explicacao: 'O INSS cuida de aposentadorias! Refugiados são protegidos pelo ACNUR!' }
    ]
  },
  {
    id: 57, tipo: 'protecao',
    q: '📜 O que o Brasil tem para proteger quem chega fugindo de guerras?',
    alternativas: [
      { texto: 'Uma lei do refúgio (de 1997) e um órgão que analisa os pedidos', correta: true, explicacao: 'Isso! O Brasil tem uma lei de refúgio desde 1997 e analisa os pedidos de quem precisa de proteção! 📜' },
      { texto: 'Nada, não existe proteção', correta: false, explicacao: 'Existe sim! O Brasil tem uma LEI DO REFÚGIO, de 1997!' },
      { texto: 'Apenas uma placa na fronteira', correta: false, explicacao: 'Muito mais que isso! Há uma lei específica de refúgio, de 1997!' }
    ]
  },
  {
    id: 58, tipo: 'protecao',
    q: '🎒 O que uma criança refugiada tem direito de fazer no Brasil?',
    alternativas: [
      { texto: 'Estudar na escola, brincar e ser protegida, como todas as crianças', correta: true, explicacao: 'Isso! Escola, brincadeira e proteção são direitos de TODAS as crianças! 🎒' },
      { texto: 'Ficar em casa sem estudar', correta: false, explicacao: 'Não! Toda criança tem direito à ESCOLA, inclusive as refugiadas!' },
      { texto: 'Trabalhar em vez de estudar', correta: false, explicacao: 'Criança não trabalha! Criança ESTUDA e BRINCA — e isso vale para todas!' }
    ]
  },
  {
    id: 59, tipo: 'protecao',
    q: '🌍 De quais lugares o Brasil já recebeu refugiados?',
    alternativas: [
      { texto: 'Síria, Ucrânia, Afeganistão, Venezuela e outros países', correta: true, explicacao: 'Isso! O Brasil já acolheu pessoas de vários lugares do mundo que fugiam de guerras e conflitos! 🌍' },
      { texto: 'Somente de um país', correta: false, explicacao: 'De vários! Síria, Ucrânia, Afeganistão, Venezuela e outros lugares!' },
      { texto: 'De nenhum lugar', correta: false, explicacao: 'O Brasil recebeu refugiados de vários países, como Síria, Ucrânia e Venezuela!' }
    ]
  },
  {
    id: 60, tipo: 'protecao',
    q: '❤️ Qual é a melhor atitude com quem chega de tão longe?',
    alternativas: [
      { texto: 'Acolher com respeito e amizade — nossos antepassados também foram imigrantes!', correta: true, explicacao: 'Isso! Um dia foram nossos avós ou bisavós que chegaram de longe e precisaram de ajuda! ❤️' },
      { texto: 'Virar as costas', correta: false, explicacao: 'Isso não é jeito de tratar ninguém! Acolher é receber bem, com respeito!' },
      { texto: 'Falar mal da pessoa', correta: false, explicacao: 'Falar mal machuca e espalha preconceito! Acolher é o caminho do bem! ❤️' }
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

// ===== JOGO DAS MIGRAÇÕES (baralho sem repetição + 2 formatos + níveis) =====
const bancoJogo = [
  // --- formato escolha (dica -> 4 opções) ---
  { modo: 'escolha', dica: '🧳 Quem CHEGA de outro país para morar aqui é...', opcoes: ['imigrante', 'emigrante', 'turista', 'piloto'], certa: 'imigrante' },
  { modo: 'escolha', dica: '✈️ Quem SAI do seu país para morar em outro é...', opcoes: ['emigrante', 'imigrante', 'visitante', 'cientista'], certa: 'emigrante' },
  { modo: 'escolha', dica: '🚢 Navio que trouxe os primeiros japoneses em 1908!', opcoes: ['Kasato Maru', 'Titanic', 'Santa Maria', 'Barco do Papi'], certa: 'Kasato Maru' },
  { modo: 'escolha', dica: '☕ Onde a maioria dos imigrantes foi trabalhar em São Paulo!', opcoes: ['fazenda de café', 'praia', 'shopping', 'estádio'], certa: 'fazenda de café' },
  { modo: 'escolha', dica: '⚓ Porto de São Paulo onde muitos imigrantes chegaram!', opcoes: ['Santos', 'Salvador', 'Fortaleza', 'Manaus'], certa: 'Santos' },
  { modo: 'escolha', dica: '🌳 Árvore da floresta que dá o látex da borracha!', opcoes: ['seringueira', 'laranjeira', 'roseira', 'bananeira'], certa: 'seringueira' },
  { modo: 'escolha', dica: '🥛 O látex, "leite" da seringueira, vira...', opcoes: ['borracha', 'suco', 'chocolate', 'sorvete'], certa: 'borracha' },
  { modo: 'escolha', dica: '🪓 Trabalhador que tira o látex dentro da floresta!', opcoes: ['seringueiro', 'pescador', 'motorista', 'padeiro'], certa: 'seringueiro' },
  { modo: 'escolha', dica: '🎭 Teatro famoso construído na riqueza da borracha!', opcoes: ['Teatro Amazonas', 'Torre Eiffel', 'Cristo Redentor', 'Maracanã'], certa: 'Teatro Amazonas' },
  { modo: 'escolha', dica: '🪖 Nordestinos enviados à Amazônia na 2ª Guerra Mundial!', opcoes: ['soldados da borracha', 'soldados do café', 'marinheiros', 'astronautas'], certa: 'soldados da borracha' },
  { modo: 'escolha', dica: '🤝 Ação que recebe os venezuelanos em Roraima!', opcoes: ['Operação Acolhida', 'Operação Carnaval', 'Operação Férias', 'Operação Pipoca'], certa: 'Operação Acolhida' },
  { modo: 'escolha', dica: '🛡️ Quem foge de guerra e perseguição é...', opcoes: ['refugiado', 'turista', 'aventureiro', 'colecionador'], certa: 'refugiado' },
  { modo: 'escolha', dica: '🕊️ Agência da ONU que protege os refugiados!', opcoes: ['ACNUR', 'IBGE', 'INSS', 'Correios'], certa: 'ACNUR' },
  { modo: 'escolha', dica: '🚚 A saída de pessoas do campo para a cidade é...', opcoes: ['êxodo rural', 'êxodo urbano', 'passeio', 'recreio'], certa: 'êxodo rural' },
  { modo: 'escolha', dica: '🍝 Comida trazida pelos imigrantes italianos!', opcoes: ['pizza e macarrão', 'sushi', 'quibe', 'tacos'], certa: 'pizza e macarrão' },
  { modo: 'escolha', dica: '🥙 Comida trazida pelos sírios e libaneses!', opcoes: ['quibe e esfiha', 'pizza', 'sushi', 'pipoca'], certa: 'quibe e esfiha' },
  // --- formato verdade ou mito ---
  { modo: 'vf', frase: 'A viagem nos navios de imigrantes era rápida e confortável.', certa: false, porque: 'Mito! Durava semanas, com muita gente junta e pouco conforto! 🚢' },
  { modo: 'vf', frase: 'Depois do fim da escravidão, faltavam trabalhadores nas fazendas de café.', certa: true, porque: 'Verdade! Por isso o Brasil chamou tantos imigrantes! ☕' },
  { modo: 'vf', frase: 'Os imigrantes ficaram ricos logo que chegaram ao Brasil.', certa: false, porque: 'Mito! Foi muito trabalho e poucas riquezas! 💪' },
  { modo: 'vf', frase: 'Nas fazendas, a família inteira trabalhava, inclusive as crianças.', certa: true, porque: 'Verdade! E por isso muitas crianças não conseguiam estudar! 👨‍👩‍👧‍👦' },
  { modo: 'vf', frase: 'Foi fácil se adaptar: a língua e a comida eram iguais às do país deles.', certa: false, porque: 'Mito! Foi muito difícil: idioma novo, clima diferente e saudade! 😢' },
  { modo: 'vf', frase: 'Imigrantes trouxeram comidas e festas que hoje fazem parte do Brasil.', certa: true, porque: 'Verdade! Pizza, sushi, quibe, Oktoberfest... tudo isso é nosso também! 🍕' },
  { modo: 'vf', frase: 'Migrante é quem se muda dentro do próprio país.', certa: true, porque: 'Verdade! Como os nordestinos que foram para a Amazônia! 🌳' },
  { modo: 'vf', frase: 'A borracha vem do látex da seringueira.', certa: true, porque: 'Verdade! O "leite" branco da árvore vira borracha! 🌳' },
  { modo: 'vf', frase: 'No ciclo da borracha, Manaus e Belém empobreceram.', certa: false, porque: 'Mito! Elas ficaram RICAS: Manaus construiu até o Teatro Amazonas! 🎭' },
  { modo: 'vf', frase: 'Os seringueiros ganharam muito dinheiro com a borracha.', certa: false, porque: 'Mito! Trabalhavam muito e ganhavam pouco, cheios de dívidas! 😢' },
  { modo: 'vf', frase: 'Os soldados da borracha foram nordestinos enviados à Amazônia em 1943.', certa: true, porque: 'Verdade! Muitos adoeceram e nunca receberam o que foi prometido! 🪖' },
  { modo: 'vf', frase: 'As migrações só aconteciam no passado.', certa: false, porque: 'Mito! As pessoas migram até HOJE, no mundo inteiro! 🌍' },
  { modo: 'vf', frase: 'Refugiado é quem foge de guerra ou perseguição e precisa de proteção.', certa: true, porque: 'Verdade! E não pode ser devolvido para o perigo! 🛡️' },
  { modo: 'vf', frase: 'Quem chega sem documento não tem nenhum direito.', certa: false, porque: 'Mito! Quem foge tem direito ao refúgio e à proteção, mesmo sem documentos! 📄' },
  { modo: 'vf', frase: 'Crianças refugiadas têm direito de estudar na escola.', certa: true, porque: 'Verdade! Escola é direito de TODAS as crianças! 🎒' }
];

const NIVEIS_JOGO = [
  '🧳 Viajante Curioso',
  '🚢 Passageiro dos Mares',
  '🌳 Amigo da Floresta',
  '🏠 Anfitrião Acolhedor',
  '🏆 Mestre das Migrações'
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
