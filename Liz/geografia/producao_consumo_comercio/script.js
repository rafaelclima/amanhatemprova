// ===== BANCO DE QUESTÕES (60) =====
// Cap. 7 — Produção, consumo e circulação de mercadorias | Cap. 8 — A circulação de mercadorias e o comércio
const bancoQuestoes = [
  // ===== CAMPO E CIDADE: UMA RELAÇÃO DE DEPENDÊNCIA (1-12) =====
  {
    id: 1, tipo: 'campo_cidade',
    q: '🌱 O que é o campo (zona rural)?',
    alternativas: [
      { texto: 'O lugar com plantações, criações de animais e mais natureza', correta: true, explicacao: 'Isso! No campo há sítios, fazendas, plantações, animais e muito verde! 🌱' },
      { texto: 'O lugar com muitos prédios e avenidas', correta: false, explicacao: 'Essa é a CIDADE! O campo tem plantações, animais e mais natureza!' },
      { texto: 'O lugar onde ficam os portos e aeroportos', correta: false, explicacao: 'Portos e aeroportos ficam nas cidades! O campo é a zona rural, cheia de plantações!' }
    ]
  },
  {
    id: 2, tipo: 'campo_cidade',
    q: '🏙️ O que é a cidade (zona urbana)?',
    alternativas: [
      { texto: 'O lugar com muitas casas, prédios, ruas e comércio', correta: true, explicacao: 'Isso! A cidade tem muita gente junta, ruas movimentadas, lojas, escolas e hospitais! 🏙️' },
      { texto: 'O lugar onde só existem plantações', correta: false, explicacao: 'Plantações são do CAMPO! A cidade tem prédios, ruas, comércio e serviços!' },
      { texto: 'O lugar onde vivem apenas os animais', correta: false, explicacao: 'Nada disso! Na cidade vivem milhões de pessoas! Animais de criação ficam no campo!' }
    ]
  },
  {
    id: 3, tipo: 'campo_cidade',
    q: '🤝 Por que dizemos que campo e cidade têm uma RELAÇÃO DE DEPENDÊNCIA?',
    alternativas: [
      { texto: 'Porque um precisa do outro para viver', correta: true, explicacao: 'Isso! Sem o campo, a cidade fica sem comida; sem a cidade, o campo fica sem ferramentas e serviços! 🤝' },
      { texto: 'Porque são lugares iguais', correta: false, explicacao: 'Eles são bem diferentes! A dependência é porque UM PRECISA DO OUTRO!' },
      { texto: 'Porque ficam sempre longe um do outro', correta: false, explicacao: 'A distância não é o motivo! Eles dependem um do outro: um não vive sem o outro!' }
    ]
  },
  {
    id: 4, tipo: 'campo_cidade',
    q: '🥬 O que o CAMPO envia para a cidade?',
    alternativas: [
      { texto: 'Alimentos e matérias-primas', correta: true, explicacao: 'Isso! Arroz, feijão, frutas, leite, carne, algodão e madeira saem do campo para a cidade! 🥬' },
      { texto: 'Produtos industrializados', correta: false, explicacao: 'Esses vêm da CIDADE! O campo manda ALIMENTOS e MATÉRIAS-PRIMAS!' },
      { texto: 'Médicos e professores', correta: false, explicacao: 'Profissionais e serviços vêm da cidade! Do campo vêm alimentos e matérias-primas!' }
    ]
  },
  {
    id: 5, tipo: 'campo_cidade',
    q: '🏭 O que a CIDADE envia para o campo?',
    alternativas: [
      { texto: 'Produtos industrializados e serviços', correta: true, explicacao: 'Isso! Roupas, remédios, tratores, adubos e serviços como médicos, escolas e bancos! 🏭' },
      { texto: 'Somente frutas e verduras', correta: false, explicacao: 'Frutas e verduras vêm do CAMPO! A cidade manda produtos industrializados e serviços!' },
      { texto: 'Apenas animais', correta: false, explicacao: 'A criação de animais é do campo! A cidade manda produtos da indústria e serviços!' }
    ]
  },
  {
    id: 6, tipo: 'campo_cidade',
    q: '🚜 Em quais atividades as pessoas trabalham no CAMPO?',
    alternativas: [
      { texto: 'Agricultura, pecuária e extrativismo', correta: true, explicacao: 'Isso! Plantar, criar animais e tirar recursos da natureza: esse é o trabalho do campo! 🚜' },
      { texto: 'No comércio e nos bancos', correta: false, explicacao: 'Comércio e bancos ficam na CIDADE! No campo é agricultura, pecuária e extrativismo!' },
      { texto: 'Em fábricas e shoppings', correta: false, explicacao: 'Esses são trabalhos da cidade! No campo: agricultura, pecuária e extrativismo!' }
    ]
  },
  {
    id: 7, tipo: 'campo_cidade',
    q: '🏢 Em quais atividades as pessoas trabalham na CIDADE?',
    alternativas: [
      { texto: 'Na indústria, no comércio e nos serviços', correta: true, explicacao: 'Isso! Fábricas, lojas, escolas, hospitais e bancos: tudo isso é trabalho urbano! 🏢' },
      { texto: 'Somente na plantação de arroz', correta: false, explicacao: 'Plantação é do campo! Na cidade o trabalho é na indústria, no comércio e nos serviços!' },
      { texto: 'Cuidando de galinhas e bois', correta: false, explicacao: 'Isso é pecuária, atividade do CAMPO! Na cidade: indústria, comércio e serviços!' }
    ]
  },
  {
    id: 8, tipo: 'campo_cidade',
    q: '🍽️ O que aconteceria com a cidade se o campo parasse de produzir?',
    alternativas: [
      { texto: 'A cidade ficaria sem alimentos', correta: true, explicacao: 'Isso! A cidade depende do campo para ter comida na mesa! 🍽️' },
      { texto: 'Nada mudaria', correta: false, explicacao: 'Mudaria tudo! Sem o campo, faltariam alimentos na cidade!' },
      { texto: 'A cidade produziria tudo sozinha', correta: false, explicacao: 'A cidade não planta! Ela precisa do campo para ter alimentos!' }
    ]
  },
  {
    id: 9, tipo: 'campo_cidade',
    q: '🌾 O que é MATÉRIA-PRIMA?',
    alternativas: [
      { texto: 'O material que vem da natureza ou do campo e é transformado nas fábricas', correta: true, explicacao: 'Isso! A matéria-prima é o começo de tudo: o algodão, o leite, a madeira, o trigo! 🌾' },
      { texto: 'O produto pronto que compramos no mercado', correta: false, explicacao: 'Esse é o produto final! Matéria-prima é o MATERIAL que a fábrica transforma!' },
      { texto: 'O dinheiro usado nas compras', correta: false, explicacao: 'Dinheiro é dinheiro! Matéria-prima é o material que vem da natureza e é transformado!' }
    ]
  },
  {
    id: 10, tipo: 'campo_cidade',
    q: '👕 O algodão, que vem do campo, é matéria-prima para fazer...',
    alternativas: [
      { texto: 'Tecido e roupas', correta: true, explicacao: 'Isso! O algodão vai para a fábrica e vira tecido, que vira roupa! 👕' },
      { texto: 'Pão', correta: false, explicacao: 'O pão vem do TRIGO! O algodão vira TECIDO e ROUPA!' },
      { texto: 'Vidro', correta: false, explicacao: 'O vidro vem da areia! O algodão vira tecido e roupa!' }
    ]
  },
  {
    id: 11, tipo: 'campo_cidade',
    q: '🥛 O leite, que vem do campo, é matéria-prima para fazer...',
    alternativas: [
      { texto: 'Queijo, iogurte e manteiga', correta: true, explicacao: 'Isso! Na indústria, o leite se transforma em queijo, iogurte e manteiga! 🥛' },
      { texto: 'Móveis', correta: false, explicacao: 'Móveis vêm da MADEIRA! Do leite saem queijo, iogurte e manteiga!' },
      { texto: 'Tecido', correta: false, explicacao: 'Tecido vem do ALGODÃO! O leite vira queijo, iogurte e manteiga!' }
    ]
  },
  {
    id: 12, tipo: 'campo_cidade',
    q: '🪵 A madeira, que vem da natureza, é matéria-prima para fazer...',
    alternativas: [
      { texto: 'Móveis e papel', correta: true, explicacao: 'Isso! A madeira vira mesa, cadeira, cama e também papel! 🪵' },
      { texto: 'Queijo', correta: false, explicacao: 'Queijo vem do LEITE! A madeira vira móveis e papel!' },
      { texto: 'Refrigerante', correta: false, explicacao: 'Refrigerante é feito na fábrica com outros ingredientes! A madeira vira móveis e papel!' }
    ]
  },
  // ===== PRODUZINDO PARA CONSUMIR (13-28) =====
  {
    id: 13, tipo: 'producao_consumo',
    q: '🏭 O que é PRODUZIR?',
    alternativas: [
      { texto: 'Fazer produtos, transformando recursos da natureza em coisas que usamos', correta: true, explicacao: 'Isso! Produzir é plantar, criar, extrair e fabricar: é fazer os produtos que usamos! 🏭' },
      { texto: 'Usar os produtos até acabarem', correta: false, explicacao: 'Isso é CONSUMIR! Produzir é FAZER os produtos!' },
      { texto: 'Jogar fora o que não usamos mais', correta: false, explicacao: 'Isso é descartar! Produzir é criar e fabricar os produtos!' }
    ]
  },
  {
    id: 14, tipo: 'producao_consumo',
    q: '🍽️ O que é CONSUMIR?',
    alternativas: [
      { texto: 'Usar os produtos para atender às nossas necessidades', correta: true, explicacao: 'Isso! Consumimos quando comemos, vestimos, estudamos e brincamos! 🍽️' },
      { texto: 'Fabricar produtos na fábrica', correta: false, explicacao: 'Fabricar é PRODUZIR! Consumir é USAR os produtos!' },
      { texto: 'Plantar e colher no campo', correta: false, explicacao: 'Isso é produção agrícola! Consumir é usar os produtos que chegam até nós!' }
    ]
  },
  {
    id: 15, tipo: 'producao_consumo',
    q: '🙋 Quem é consumidor?',
    alternativas: [
      { texto: 'Todos nós, que usamos os produtos no dia a dia', correta: true, explicacao: 'Isso! Quando você come, bebe, se veste ou usa o celular, você está consumindo! 🙋' },
      { texto: 'Somente quem trabalha na fábrica', correta: false, explicacao: 'Não! TODOS nós somos consumidores, inclusive as crianças!' },
      { texto: 'Somente quem vende os produtos', correta: false, explicacao: 'Quem vende também consome! Todos nós somos consumidores!' }
    ]
  },
  {
    id: 16, tipo: 'producao_consumo',
    q: '🏠 Quais destes são necessidades básicas para viver?',
    alternativas: [
      { texto: 'Alimentação, moradia, saúde e educação', correta: true, explicacao: 'Isso! Comida, casa, saúde e escola são necessidades de todas as pessoas! 🏠' },
      { texto: 'Videogame, pipoca e brinquedos', correta: false, explicacao: 'Brincar é importante, mas as necessidades básicas são alimentação, moradia, saúde e educação!' },
      { texto: 'Somente brinquedos', correta: false, explicacao: 'Brinquedo é diversão! Necessidades básicas: alimentação, moradia, saúde e educação!' }
    ]
  },
  {
    id: 17, tipo: 'producao_consumo',
    q: '🌾 O que a AGRICULTURA produz?',
    alternativas: [
      { texto: 'Alimentos como arroz, feijão, frutas e verduras', correta: true, explicacao: 'Isso! Agricultura é o plantio e a colheita dos alimentos! 🌾' },
      { texto: 'Celulares e computadores', correta: false, explicacao: 'Esses são produtos da INDÚSTRIA! A agricultura produz alimentos!' },
      { texto: 'Apenas pedras e minérios', correta: false, explicacao: 'Minérios vêm do EXTRATIVISMO! A agricultura planta e colhe alimentos!' }
    ]
  },
  {
    id: 18, tipo: 'producao_consumo',
    q: '🐄 O que é a PECUÁRIA?',
    alternativas: [
      { texto: 'A criação de animais', correta: true, explicacao: 'Isso! Boi, vaca, porco, galinha e outros animais são criados na pecuária! 🐄' },
      { texto: 'O plantio de flores', correta: false, explicacao: 'Plantar é AGRICULTURA! Pecuária é a CRIAÇÃO DE ANIMAIS!' },
      { texto: 'A venda em supermercados', correta: false, explicacao: 'Vender é comércio! Pecuária é criar animais!' }
    ]
  },
  {
    id: 19, tipo: 'producao_consumo',
    q: '🌳 O que é o EXTRATIVISMO?',
    alternativas: [
      { texto: 'Tirar recursos da natureza, como madeira, minérios e pescado', correta: true, explicacao: 'Isso! Extrair é retirar: madeira, minérios, borracha, peixes e frutos da natureza! 🌳' },
      { texto: 'Fazer produtos na fábrica', correta: false, explicacao: 'Fabricar é INDÚSTRIA! Extrativismo é RETIRAR recursos da natureza!' },
      { texto: 'Vender produtos na feira', correta: false, explicacao: 'Vender é comércio! Extrativismo é tirar recursos da natureza!' }
    ]
  },
  {
    id: 20, tipo: 'producao_consumo',
    q: '🏭 O que a INDÚSTRIA faz?',
    alternativas: [
      { texto: 'Transforma a matéria-prima em produtos industrializados', correta: true, explicacao: 'Isso! Na fábrica, a matéria-prima vira produto: o trigo vira pão, o algodão vira roupa! 🏭' },
      { texto: 'Planta e colhe os alimentos', correta: false, explicacao: 'Isso é agricultura! A indústria TRANSFORMA a matéria-prima!' },
      { texto: 'Cria os animais no pasto', correta: false, explicacao: 'Isso é pecuária! A indústria transforma matéria-prima em produto industrializado!' }
    ]
  },
  {
    id: 21, tipo: 'producao_consumo',
    q: '📦 Qual é a ordem do caminho de um produto?',
    alternativas: [
      { texto: 'Matéria-prima → indústria → transporte → comércio → consumidor', correta: true, explicacao: 'Isso! Do campo para a fábrica, depois para a loja e, finalmente, para a nossa casa! 📦' },
      { texto: 'Consumidor → indústria → matéria-prima', correta: false, explicacao: 'É o contrário! Primeiro a matéria-prima, depois a indústria, o transporte, o comércio e o consumidor!' },
      { texto: 'Loja → matéria-prima → fábrica', correta: false, explicacao: 'A loja é quase o fim do caminho! A ordem começa na MATÉRIA-PRIMA!' }
    ]
  },
  {
    id: 22, tipo: 'producao_consumo',
    q: '🧶 O que é um produto ARTESANAL?',
    alternativas: [
      { texto: 'Feito à mão, em pequena quantidade', correta: true, explicacao: 'Isso! Um bolo da vovó, uma rede, uma panela de barro: feitos à mão, um a um! 🧶' },
      { texto: 'Feito por máquinas, em grande quantidade', correta: false, explicacao: 'Esse é o INDUSTRIALIZADO! Artesanal é feito À MÃO!' },
      { texto: 'Feito em outro país', correta: false, explicacao: 'Lugar de origem é outra coisa! Artesanal é o produto feito À MÃO!' }
    ]
  },
  {
    id: 23, tipo: 'producao_consumo',
    q: '⚙️ O que é um produto INDUSTRIALIZADO?',
    alternativas: [
      { texto: 'Feito por máquinas na fábrica, em grande quantidade', correta: true, explicacao: 'Isso! Biscoito, refrigerante, sabão e celular são feitos em grande quantidade na indústria! ⚙️' },
      { texto: 'Feito à mão, um por um', correta: false, explicacao: 'Esse é o ARTESANAL! Industrializado é feito por MÁQUINAS, em grande quantidade!' },
      { texto: 'Colhido direto da natureza', correta: false, explicacao: 'Isso é produto natural! Industrializado passa pela FÁBRICA!' }
    ]
  },
  {
    id: 24, tipo: 'producao_consumo',
    q: '🛒 Qual destes é um produto NATURAL (in natura)?',
    alternativas: [
      { texto: 'A banana comprada na feira', correta: true, explicacao: 'Isso! A banana vai da bananeira direto para a feira, sem passar pela fábrica! 🛒' },
      { texto: 'O refrigerante', correta: false, explicacao: 'O refrigerante é INDUSTRIALIZADO! A banana é natural!' },
      { texto: 'O biscoito recheado', correta: false, explicacao: 'O biscoito é feito na fábrica! Natural é a banana, que é colhida e vendida!' }
    ]
  },
  {
    id: 25, tipo: 'producao_consumo',
    q: '🚧 O que acontece se faltar transporte entre o campo e a cidade?',
    alternativas: [
      { texto: 'As mercadorias não chegam ao consumidor', correta: true, explicacao: 'Isso! Sem transporte, o alimento fica no campo e não chega à mesa das pessoas! 🚧' },
      { texto: 'Os produtos ficam mais rápidos', correta: false, explicacao: 'Não existe isso! Sem transporte, as mercadorias NÃO CHEGAM ao consumidor!' },
      { texto: 'Nada muda', correta: false, explicacao: 'Muda muito! O transporte é essencial para as mercadorias chegarem até nós!' }
    ]
  },
  {
    id: 26, tipo: 'producao_consumo',
    q: '♻️ O que é CONSUMO CONSCIENTE?',
    alternativas: [
      { texto: 'Comprar só o necessário, sem desperdício, e reciclar', correta: true, explicacao: 'Isso! Consumir com consciência é cuidar do dinheiro, dos recursos e do planeta! ♻️' },
      { texto: 'Comprar tudo o que aparecer na frente', correta: false, explicacao: 'Isso é o contrário! Consumo consciente é comprar só o necessário e evitar desperdício!' },
      { texto: 'Jogar fora o que sobrar', correta: false, explicacao: 'Nada disso! Consumo consciente é justamente EVITAR o desperdício e reciclar!' }
    ]
  },
  {
    id: 27, tipo: 'producao_consumo',
    q: '🍲 Como podemos evitar o desperdício de comida em casa?',
    alternativas: [
      { texto: 'Servir só o que vamos comer e aproveitar os alimentos', correta: true, explicacao: 'Isso! Comprar e servir a quantidade certa ajuda o bolso e o planeta! 🍲' },
      { texto: 'Deixar a comida no prato e jogar fora', correta: false, explicacao: 'Isso é desperdício! Servir a quantidade certa e reaproveitar é o certo!' },
      { texto: 'Comprar muito mais do que precisamos', correta: false, explicacao: 'Comprar demais estraga e vira desperdício! O certo é comprar o necessário!' }
    ]
  },
  {
    id: 28, tipo: 'producao_consumo',
    q: '🙌 Quantas pessoas participam do caminho de um pãozinho até a sua casa?',
    alternativas: [
      { texto: 'Muitas: do agricultor ao vendedor, passando por motoristas e operários', correta: true, explicacao: 'Isso! Por trás de cada produto há o trabalho de muita gente — por isso devemos valorizar! 🙌' },
      { texto: 'Só uma pessoa', correta: false, explicacao: 'Muito mais! Plantar, transportar, moer, assar e vender: cada etapa tem trabalhadores!' },
      { texto: 'Ninguém, o pão aparece sozinho', correta: false, explicacao: 'O pão não aparece sozinho! Ele é fruto de MUITO trabalho!' }
    ]
  },
  // ===== CIRCULAÇÃO DE MERCADORIAS (29-44) =====
  {
    id: 29, tipo: 'circulacao',
    q: '📦 O que é MERCADORIA?',
    alternativas: [
      { texto: 'O produto que é feito para ser vendido', correta: true, explicacao: 'Isso! Quando a produção vai para a venda, ela se torna mercadoria! 📦' },
      { texto: 'Uma ferramenta da cozinha', correta: false, explicacao: 'Nada disso! Mercadoria é todo produto feito para ser VENDIDO!' },
      { texto: 'O dinheiro da feira', correta: false, explicacao: 'Dinheiro serve para pagar a mercadoria! Mercadoria é o PRODUTO vendido!' }
    ]
  },
  {
    id: 30, tipo: 'circulacao',
    q: '🛣️ O que é CIRCULAÇÃO DE MERCADORIAS?',
    alternativas: [
      { texto: 'O caminho que a mercadoria faz do produtor até o consumidor', correta: true, explicacao: 'Isso! Ela sai do sítio ou da fábrica e viaja até chegar às nossas mãos! 🛣️' },
      { texto: 'O passeio dos caminhoneiros nas férias', correta: false, explicacao: 'Nada de férias! Circulação é o CAMINHO das mercadorias até o consumidor!' },
      { texto: 'A volta das mercadorias para a fábrica', correta: false, explicacao: 'Não! A circulação vai do PRODUTOR até o CONSUMIDOR!' }
    ]
  },
  {
    id: 31, tipo: 'circulacao',
    q: '🚛 Qual é o transporte mais usado no Brasil para levar mercadorias?',
    alternativas: [
      { texto: 'O caminhão, pelas rodovias', correta: true, explicacao: 'Isso! Boa parte das mercadorias brasileiras viaja por estradas em caminhões! 🚛' },
      { texto: 'A carroça', correta: false, explicacao: 'A carroça só é usada em alguns lugares e para pouca carga! O campeão é o CAMINHÃO!' },
      { texto: 'O submarino', correta: false, explicacao: 'Submarino não leva mercadorias! No Brasil, o caminhão é o transporte mais usado!' }
    ]
  },
  {
    id: 32, tipo: 'circulacao',
    q: '🚂 Por onde circulam os trens de carga?',
    alternativas: [
      { texto: 'Pelas ferrovias', correta: true, explicacao: 'Isso! As ferrovias são os caminhos de ferro por onde os trens levam cargas pesadas! 🚂' },
      { texto: 'Pelas rodovias', correta: false, explicacao: 'Rodovias são estradas de asfalto, para caminhões! Os trens andam nas FERROVIAS!' },
      { texto: 'Pelo ar', correta: false, explicacao: 'Trem não voa! Ele anda nos trilhos das FERROVIAS!' }
    ]
  },
  {
    id: 33, tipo: 'circulacao',
    q: '🚢 Onde os navios carregam e descarregam mercadorias?',
    alternativas: [
      { texto: 'Nos portos', correta: true, explicacao: 'Isso! O porto é o lugar onde os navios atracam para carregar e descarregar! 🚢' },
      { texto: 'Nas feiras livres', correta: false, explicacao: 'Feira é lugar de venda de alimentos! Os navios ficam nos PORTOS!' },
      { texto: 'Nos aeroportos', correta: false, explicacao: 'Aeroporto é para aviões! Navio fica no PORTO!' }
    ]
  },
  {
    id: 34, tipo: 'circulacao',
    q: '✈️ Para que serve o transporte de cargas por avião?',
    alternativas: [
      { texto: 'Para produtos leves, valiosos ou que estragam fácil — é o mais rápido', correta: true, explicacao: 'Isso! O avião é rápido e caro, por isso leva cargas especiais, como flores e vacinas! ✈️' },
      { texto: 'Para levar cargas muito pesadas, como minérios', correta: false, explicacao: 'Cargas pesadíssimas vão de navio ou trem! O avião leva cargas leves e urgentes!' },
      { texto: 'Para passear com os turistas', correta: false, explicacao: 'Turismo é outra coisa! No transporte de cargas, o avião leva produtos rápidos e valiosos!' }
    ]
  },
  {
    id: 35, tipo: 'circulacao',
    q: '❄️ O que é um caminhão frigorífico?',
    alternativas: [
      { texto: 'Um caminhão gelado, para carnes, frutas e leite não estragarem', correta: true, explicacao: 'Isso! O frio conserva os alimentos durante a viagem! ❄️' },
      { texto: 'Um caminhão que vende sorvete na rua', correta: false, explicacao: 'Nada disso! Frigorífico é o caminhão que mantém a mercadoria GELADA para não estragar!' },
      { texto: 'Um caminhão muito veloz', correta: false, explicacao: 'Velocidade é outra coisa! Frigorífico é o caminhão com refrigeração!' }
    ]
  },
  {
    id: 36, tipo: 'circulacao',
    q: '📦 Para que servem as EMBALAGENS das mercadorias?',
    alternativas: [
      { texto: 'Proteger os produtos e informar nome, validade e origem', correta: true, explicacao: 'Isso! A embalagem protege na viagem e traz informações importantes para o consumidor! 📦' },
      { texto: 'Somente para deixar o produto bonito', correta: false, explicacao: 'A beleza é só uma parte! A embalagem PROTEGE e INFORMA (nome, validade e origem)!' },
      { texto: 'Para o produto pesar mais', correta: false, explicacao: 'Nada disso! A embalagem protege e informa!' }
    ]
  },
  {
    id: 37, tipo: 'circulacao',
    q: '🏬 O que é um centro de distribuição?',
    alternativas: [
      { texto: 'O lugar onde as mercadorias são separadas e guardadas antes de ir para as lojas', correta: true, explicacao: 'Isso! É como um grande depósito que organiza as cargas para as lojas da cidade! 🏬' },
      { texto: 'O lugar onde a comida é plantada', correta: false, explicacao: 'Plantar é no campo! O centro de distribuição separa e guarda mercadorias para as lojas!' },
      { texto: 'A casa do consumidor', correta: false, explicacao: 'Nada disso! É um espaço grande onde as mercadorias são organizadas antes de chegarem às lojas!' }
    ]
  },
  {
    id: 38, tipo: 'circulacao',
    q: '🥕 Onde compramos frutas e verduras direto de quem produz?',
    alternativas: [
      { texto: 'Na feira livre', correta: true, explicacao: 'Isso! Na feira, muitas vezes o próprio produtor vende o que plantou! 🥕' },
      { texto: 'No aeroporto', correta: false, explicacao: 'Aeroporto é para aviões! Frutas e verduras direto do produtor se compram na FEIRA!' },
      { texto: 'No banco', correta: false, explicacao: 'Banco cuida de dinheiro! Feira livre é o lugar das frutas e verduras!' }
    ]
  },
  {
    id: 39, tipo: 'circulacao',
    q: '🛒 Qual é o lugar onde encontramos muitos produtos diferentes juntos?',
    alternativas: [
      { texto: 'O supermercado', correta: true, explicacao: 'Isso! No supermercado há alimentos, produtos de limpeza, higiene e muito mais! 🛒' },
      { texto: 'A plantação', correta: false, explicacao: 'Na plantação há só o que é cultivado ali! Muitos produtos juntos ficam no SUPERMERCADO!' },
      { texto: 'A fábrica', correta: false, explicacao: 'A fábrica faz UM tipo de produto! O supermercado reúne muitos produtos diferentes!' }
    ]
  },
  {
    id: 40, tipo: 'circulacao',
    q: '💻 Como se chama a compra feita pela internet, com entrega em casa?',
    alternativas: [
      { texto: 'Comércio virtual (compras on-line)', correta: true, explicacao: 'Isso! No comércio virtual, a mercadoria viaja até a porta da nossa casa! 💻' },
      { texto: 'Feira livre', correta: false, explicacao: 'Na feira a gente vai e escolhe! Pela internet, é o comércio VIRTUAL!' },
      { texto: 'Importação de brinquedos', correta: false, explicacao: 'Importar é comprar de outro país! Compra pela internet é comércio VIRTUAL!' }
    ]
  },
  {
    id: 41, tipo: 'circulacao',
    q: '👷 Quem são os estivadores?',
    alternativas: [
      { texto: 'Trabalhadores que carregam e descarregam as mercadorias nos portos', correta: true, explicacao: 'Isso! Eles trabalham nos portos, movimentando as cargas dos navios! 👷' },
      { texto: 'Motoristas de caminhão nas estradas', correta: false, explicacao: 'Esses são os CAMINHONEIROS! Estivadores trabalham nos PORTOS!' },
      { texto: 'Pilotos de avião cargueiro', correta: false, explicacao: 'Pilotos voam! Estivadores trabalham no PORTO, carregando e descarregando mercadorias!' }
    ]
  },
  {
    id: 42, tipo: 'circulacao',
    q: '🚚 Quem leva as mercadorias pelas estradas do Brasil?',
    alternativas: [
      { texto: 'Os caminhoneiros', correta: true, explicacao: 'Isso! Eles percorrem longas distâncias para que os produtos cheguem às cidades! 🚚' },
      { texto: 'Os feirantes', correta: false, explicacao: 'Feirantes vendem na feira! Nas estradas, quem leva as mercadorias são os CAMINHONEIROS!' },
      { texto: 'Os professores', correta: false, explicacao: 'Professores ensinam! Nas estradas, o transporte é feito pelos caminhoneiros!' }
    ]
  },
  {
    id: 43, tipo: 'circulacao',
    q: '⚖️ O que é necessário para a mercadoria chegar até você?',
    alternativas: [
      { texto: 'O trabalho de muitas pessoas: motoristas, feirantes, vendedores e outros', correta: true, explicacao: 'Isso! Cada produto que usamos passou pelas mãos de muita gente! ⚖️' },
      { texto: 'Apenas sorte', correta: false, explicacao: 'Sorte não leva mercadoria! É o TRABALHO de muitas pessoas que faz o produto chegar!' },
      { texto: 'Nada, ela chega sozinha', correta: false, explicacao: 'Ela não anda sozinha! Alguém plantou, fabricou, transportou e vendeu!' }
    ]
  },
  {
    id: 44, tipo: 'circulacao',
    q: '🚢 O que costuma ser levado dentro de contêineres nos navios?',
    alternativas: [
      { texto: 'Mercadorias de todos os tipos, protegidas para a viagem', correta: true, explicacao: 'Isso! Os contêineres são caixas gigantes que protegem as cargas nos navios! 🚢' },
      { texto: 'Somente passageiros', correta: false, explicacao: 'Passageiros vão em navios de passageiros! Nos contêineres vão MERCADORIAS!' },
      { texto: 'Apenas água do mar', correta: false, explicacao: 'Imagina! Os contêineres levam mercadorias de um país para o outro!' }
    ]
  },
  // ===== PRODUTOS CONSUMIDOS DENTRO E FORA DO PAÍS (45-60) =====
  {
    id: 45, tipo: 'mundo',
    q: '📤 O que é EXPORTAÇÃO?',
    alternativas: [
      { texto: 'Quando o Brasil vende produtos para outros países', correta: true, explicacao: 'Isso! Exportar é VENDER para fora: o produto sai do país! 📤' },
      { texto: 'Quando o Brasil compra produtos de outros países', correta: false, explicacao: 'Isso é IMPORTAÇÃO! Exportação é VENDER para outros países!' },
      { texto: 'Quando compramos na feira do bairro', correta: false, explicacao: 'Isso é comércio interno! Exportação é a venda para OUTROS PAÍSES!' }
    ]
  },
  {
    id: 46, tipo: 'mundo',
    q: '📥 O que é IMPORTAÇÃO?',
    alternativas: [
      { texto: 'Quando o Brasil compra produtos de outros países', correta: true, explicacao: 'Isso! Importar é COMPRAR de fora: o produto entra no país! 📥' },
      { texto: 'Quando o Brasil vende para outros países', correta: false, explicacao: 'Isso é EXPORTAÇÃO! Importação é COMPRAR de outros países!' },
      { texto: 'Quando o produto é feito na nossa cidade', correta: false, explicacao: 'Produto feito aqui é produção nacional! Importação é o que vem de FORA!' }
    ]
  },
  {
    id: 47, tipo: 'mundo',
    q: '☕ Qual destes produtos o Brasil EXPORTA muito?',
    alternativas: [
      { texto: 'Café', correta: true, explicacao: 'Isso! O café brasileiro é famoso e vendido para o mundo inteiro! ☕' },
      { texto: 'Computadores', correta: false, explicacao: 'Computadores o Brasil costuma IMPORTAR! Um produto que exportamos muito é o CAFÉ!' },
      { texto: 'Remédios', correta: false, explicacao: 'Remédios são importados! O Brasil exporta café, soja, carne e açúcar!' }
    ]
  },
  {
    id: 48, tipo: 'mundo',
    q: '📱 Qual destes produtos o Brasil costuma IMPORTAR?',
    alternativas: [
      { texto: 'Aparelhos eletrônicos e remédios', correta: true, explicacao: 'Isso! Muitos celulares, computadores e remédios vêm de outros países! 📱' },
      { texto: 'Café', correta: false, explicacao: 'Café nós PRODUZIMOS e exportamos! Importamos eletrônicos e remédios!' },
      { texto: 'Carne', correta: false, explicacao: 'O Brasil é um grande produtor de carne e exporta muito! Importamos eletrônicos e remédios!' }
    ]
  },
  {
    id: 49, tipo: 'mundo',
    q: '🌾 Por que o Brasil precisa IMPORTAR trigo para fazer pão?',
    alternativas: [
      { texto: 'Porque não produzimos trigo suficiente para todo o consumo', correta: true, explicacao: 'Isso! Nosso clima não é ideal para o trigo, então compramos de outros países! 🌾' },
      { texto: 'Porque o trigo não existe no Brasil', correta: false, explicacao: 'Ele existe, mas produzimos pouco! Por isso precisamos importar!' },
      { texto: 'Porque o pão é feito de arroz', correta: false, explicacao: 'Pão é feito de TRIGO! E como produzimos pouco, importamos de outros países!' }
    ]
  },
  {
    id: 50, tipo: 'mundo',
    q: '🇧🇷 O que é COMÉRCIO INTERNO?',
    alternativas: [
      { texto: 'A compra e a venda dentro do próprio país', correta: true, explicacao: 'Isso! Quando o produto é vendido de um estado para outro, é comércio interno! 🇧🇷' },
      { texto: 'A compra e a venda entre países', correta: false, explicacao: 'Isso é o comércio EXTERNO! Interno é DENTRO do Brasil!' },
      { texto: 'A venda apenas na feira', correta: false, explicacao: 'A feira é um dos lugares de comércio! Comércio interno é toda venda DENTRO do país!' }
    ]
  },
  {
    id: 51, tipo: 'mundo',
    q: '🌍 O que é COMÉRCIO EXTERNO?',
    alternativas: [
      { texto: 'O comércio entre países, com exportação e importação', correta: true, explicacao: 'Isso! É o comércio que atravessa as fronteiras, entre um país e outro! 🌍' },
      { texto: 'O comércio dentro do estado', correta: false, explicacao: 'Isso é comércio interno! Externo é ENTRE PAÍSES!' },
      { texto: 'A venda de produtos na porta de casa', correta: false, explicacao: 'Nada disso! Comércio externo é o que acontece ENTRE PAÍSES!' }
    ]
  },
  {
    id: 52, tipo: 'mundo',
    q: '🍇 Qual é um exemplo de COMÉRCIO INTERNO?',
    alternativas: [
      { texto: 'O açaí do Pará sendo vendido no Rio de Janeiro', correta: true, explicacao: 'Isso! Está tudo dentro do Brasil: é comércio interno! 🍇' },
      { texto: 'O café do Brasil sendo vendido nos Estados Unidos', correta: false, explicacao: 'Aí sai do país: é comércio EXTERNO! Interno é dentro do Brasil!' },
      { texto: 'Um carro alemão comprado pelo Brasil', correta: false, explicacao: 'Isso é importação, comércio EXTERNO! Interno é a venda entre estados brasileiros!' }
    ]
  },
  {
    id: 53, tipo: 'mundo',
    q: '☕ Qual é um exemplo de COMÉRCIO EXTERNO?',
    alternativas: [
      { texto: 'O café brasileiro sendo vendido para os Estados Unidos', correta: true, explicacao: 'Isso! O produto atravessa a fronteira: é comércio externo (exportação)! ☕' },
      { texto: 'O café de Minas sendo vendido em São Paulo', correta: false, explicacao: 'Continua dentro do Brasil: é comércio INTERNO!' },
      { texto: 'Uma compra na feira do bairro', correta: false, explicacao: 'Feira do bairro é comércio interno! Externo é ENTRE PAÍSES!' }
    ]
  },
  {
    id: 54, tipo: 'mundo',
    q: '⚖️ O que acontece quando um país VENDE mais do que COMPRA?',
    alternativas: [
      { texto: 'Ele ganha dinheiro com o comércio', correta: true, explicacao: 'Isso! Vender mais do que comprar é bom para a economia do país! ⚖️' },
      { texto: 'Ele fica sem produtos', correta: false, explicacao: 'Ao contrário! Vender mais do que comprar traz dinheiro para o país!' },
      { texto: 'Ele precisa fechar as lojas', correta: false, explicacao: 'Nada disso! Vender mais do que comprar é bom para a economia!' }
    ]
  },
  {
    id: 55, tipo: 'mundo',
    q: '🔎 Por que devemos observar a VALIDADE e a ORIGEM dos produtos?',
    alternativas: [
      { texto: 'Para não consumir produto estragado ou irregular — é um direito do consumidor', correta: true, explicacao: 'Isso! Saber o que compramos é um direito nosso e cuida da nossa saúde! 🔎' },
      { texto: 'Porque é bonito ler o rótulo', correta: false, explicacao: 'O motivo é sério: saber a validade e a origem protege a nossa saúde e o nosso bolso!' },
      { texto: 'Para gastar mais tempo no mercado', correta: false, explicacao: 'Nada disso! Observar validade e origem é um DIREITO do consumidor!' }
    ]
  },
  {
    id: 56, tipo: 'mundo',
    q: '🚫 Por que produtos PIRATAS e CONTRABANDEADOS são um problema?',
    alternativas: [
      { texto: 'São ilegais, podem fazer mal à saúde e não têm garantia', correta: true, explicacao: 'Isso! Além de ilegais, esses produtos não passam por controle e podem ser perigosos! 🚫' },
      { texto: 'Porque são mais baratos e bons', correta: false, explicacao: 'Barato demais é sinal de perigo! Pirata é ILEGAL e pode fazer mal!' },
      { texto: 'Porque são muito bonitos', correta: false, explicacao: 'A aparência engana! Produtos piratas são ilegais e sem garantia!' }
    ]
  },
  {
    id: 57, tipo: 'mundo',
    q: '🇧🇷 Por que é bom valorizar os produtos da nossa região?',
    alternativas: [
      { texto: 'Porque ajuda os produtores locais e fortalece a economia do lugar', correta: true, explicacao: 'Isso! Comprar do produtor da região ajuda quem vive perto de nós! 🇧🇷' },
      { texto: 'Porque os produtos de fora são sempre ruins', correta: false, explicacao: 'Não é isso! Produtos de fora podem ser bons; valorizar os locais ajuda a economia da nossa região!' },
      { texto: 'Porque assim não precisamos de transporte', correta: false, explicacao: 'O transporte continua existindo! O bom é ajudar quem produz perto de nós!' }
    ]
  },
  {
    id: 58, tipo: 'mundo',
    q: '🏬 Como um produto chega até o supermercado?',
    alternativas: [
      { texto: 'Do produtor → transporte → centro de distribuição → loja', correta: true, explicacao: 'Isso! Cada etapa tem trabalhadores e lugares próprios! 🏬' },
      { texto: 'O supermercado fabrica tudo o que vende', correta: false, explicacao: 'Nada disso! O supermercado RECEBE produtos de vários produtores!' },
      { texto: 'Ele cai do céu', correta: false, explicacao: 'Imagina! O produto percorre um caminho: produtor, transporte, distribuição e loja!' }
    ]
  },
  {
    id: 59, tipo: 'mundo',
    q: '🚢 Qual transporte é usado para levar mercadorias de um país para outro pelo mar?',
    alternativas: [
      { texto: 'O navio cargueiro', correta: true, explicacao: 'Isso! Os navios cargueiros levam contêineres cheios de mercadorias entre os países! 🚢' },
      { texto: 'A bicicleta', correta: false, explicacao: 'A bicicleta faz entregas pequenas na cidade! Entre países, quem viaja é o NAVIO!' },
      { texto: 'O trator', correta: false, explicacao: 'Trator trabalha no campo! Entre países, as mercadorias vão de NAVIO!' }
    ]
  },
  {
    id: 60, tipo: 'mundo',
    q: '🛍️ Qual é a melhor atitude na hora de comprar?',
    alternativas: [
      { texto: 'Comprar só o necessário, conferindo a validade e a origem', correta: true, explicacao: 'Isso! Assim você economiza, evita desperdício e faz um consumo consciente! 🛍️' },
      { texto: 'Comprar tudo o que vê pela frente', correta: false, explicacao: 'Assim vem o desperdício! O certo é comprar só o necessário e conferir as informações!' },
      { texto: 'Escolher só pelo preço mais barato, sem olhar nada', correta: false, explicacao: 'Preço importa, mas é preciso conferir validade e origem: barato estragado não vale!' }
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

// ===== JOGO DO COMÉRCIO (baralho sem repetição + 2 formatos + níveis) =====
const bancoJogo = [
  // --- formato escolha (dica -> 4 opções) ---
  { modo: 'escolha', dica: '🥬 Vem do CAMPO para a cidade!', opcoes: ['alimentos', 'celular', 'remédio', 'geladeira'], certa: 'alimentos' },
  { modo: 'escolha', dica: '🚜 Vem da CIDADE para o campo!', opcoes: ['trator e ferramentas', 'mandioca', 'ovos', 'leite'], certa: 'trator e ferramentas' },
  { modo: 'escolha', dica: '🌾 O que vem da natureza e é transformado na fábrica é...', opcoes: ['matéria-prima', 'mercadoria pronta', 'embalagem', 'dinheiro'], certa: 'matéria-prima' },
  { modo: 'escolha', dica: '🥛 O leite é matéria-prima para fazer...', opcoes: ['queijo e iogurte', 'pão', 'roupas', 'móveis'], certa: 'queijo e iogurte' },
  { modo: 'escolha', dica: '👕 O algodão, depois da fábrica, vira...', opcoes: ['tecido e roupa', 'pão', 'papel', 'vidro'], certa: 'tecido e roupa' },
  { modo: 'escolha', dica: '🏭 Quem transforma matéria-prima em produto industrializado?', opcoes: ['a indústria', 'a feira', 'o porto', 'a escola'], certa: 'a indústria' },
  { modo: 'escolha', dica: '🧶 Produto feito à mão, em pouca quantidade, é...', opcoes: ['artesanal', 'industrializado', 'importado', 'exportado'], certa: 'artesanal' },
  { modo: 'escolha', dica: '🚛 Transporte campeão nas rodovias brasileiras!', opcoes: ['caminhão', 'navio', 'avião', 'metrô'], certa: 'caminhão' },
  { modo: 'escolha', dica: '🚂 Por onde andam os trens de carga?', opcoes: ['ferrovias', 'rodovias', 'aeroportos', 'portos'], certa: 'ferrovias' },
  { modo: 'escolha', dica: '🚢 Onde os navios carregam e descarregam mercadorias?', opcoes: ['nos portos', 'nas feiras', 'nos shoppings', 'nos sítios'], certa: 'nos portos' },
  { modo: 'escolha', dica: '✈️ Transporte rápido, para produtos que estragam fácil!', opcoes: ['avião', 'carroça', 'bicicleta', 'trem'], certa: 'avião' },
  { modo: 'escolha', dica: '🥕 Lugar onde o produtor vende frutas e verduras direto para você!', opcoes: ['feira livre', 'aeroporto', 'banco', 'fábrica'], certa: 'feira livre' },
  { modo: 'escolha', dica: '📤 Quando o Brasil VENDE para outros países, é...', opcoes: ['exportação', 'importação', 'produção', 'reciclagem'], certa: 'exportação' },
  { modo: 'escolha', dica: '📥 Quando o Brasil COMPRA de outros países, é...', opcoes: ['importação', 'exportação', 'desperdício', 'plantação'], certa: 'importação' },
  { modo: 'escolha', dica: '☕ Produto que o Brasil exporta bastante!', opcoes: ['café', 'remédio', 'celular', 'videogame'], certa: 'café' },
  { modo: 'escolha', dica: '🌾 Produto que o Brasil precisa importar para fazer pão!', opcoes: ['trigo', 'arroz', 'feijão', 'mandioca'], certa: 'trigo' },
  // --- formato verdade ou mito ---
  { modo: 'vf', frase: 'O campo e a cidade dependem um do outro.', certa: true, porque: 'Verdade! É a relação de dependência: um precisa do outro! 🤝' },
  { modo: 'vf', frase: 'A cidade produz os alimentos que o campo consome.', certa: false, porque: 'Mito! É o CONTRÁRIO: o campo produz os alimentos e a cidade os consome! 🥬' },
  { modo: 'vf', frase: 'Matéria-prima é o material que vem da natureza e é transformado na fábrica.', certa: true, porque: 'Verdade! Como o leite, o algodão, o trigo e a madeira! 🌾' },
  { modo: 'vf', frase: 'Todos nós somos consumidores.', certa: true, porque: 'Verdade! Consumimos comida, roupa, água, transporte e diversão! 🙋' },
  { modo: 'vf', frase: 'Produto artesanal é feito por máquinas, em grande quantidade.', certa: false, porque: 'Mito! Artesanal é feito À MÃO, um por um! Quem usa máquinas é a indústria! 🧶' },
  { modo: 'vf', frase: 'Mercadoria é o produto feito para ser vendido.', certa: true, porque: 'Verdade! Quando o produto vai para a venda, ele é uma mercadoria! 📦' },
  { modo: 'vf', frase: 'No Brasil, a maior parte das mercadorias viaja em caminhões pelas rodovias.', certa: true, porque: 'Verdade! O caminhão é o transporte mais usado nas nossas estradas! 🚛' },
  { modo: 'vf', frase: 'O avião é o transporte mais usado para cargas muito pesadas.', certa: false, porque: 'Mito! Cargas pesadas vão de navio ou trem! O avião é rápido, mas leva cargas leves e urgentes! ✈️' },
  { modo: 'vf', frase: 'O caminhão frigorífico mantém a mercadoria gelada para não estragar.', certa: true, porque: 'Verdade! Carnes, frutas e leite viajam geladinhos! ❄️' },
  { modo: 'vf', frase: 'Exportação é quando o país compra produtos de outros países.', certa: false, porque: 'Mito! Exportação é VENDER para fora! Comprar de fora é IMPORTAÇÃO! 📤' },
  { modo: 'vf', frase: 'O comércio interno acontece dentro do próprio país.', certa: true, porque: 'Verdade! Como o açaí do Pará sendo vendido no Rio! 🇧🇷' },
  { modo: 'vf', frase: 'Produtos piratas são seguros só porque são mais baratos.', certa: false, porque: 'Mito! São ILEGAIS, podem fazer mal à saúde e não têm garantia! 🚫' },
  { modo: 'vf', frase: 'Comprar só o necessário e reciclar é consumo consciente.', certa: true, porque: 'Verdade! Assim cuidamos do dinheiro, dos recursos e do planeta! ♻️' },
  { modo: 'vf', frase: 'O açaí do Pará vendido no Rio de Janeiro é comércio externo.', certa: false, porque: 'Mito! Os dois lugares estão no Brasil: é comércio INTERNO! 🍇' },
  { modo: 'vf', frase: 'Quando o país vende mais do que compra, ele ganha dinheiro com o comércio.', certa: true, porque: 'Verdade! Vender mais do que comprar é bom para a economia! ⚖️' }
];

const NIVEIS_JOGO = [
  '🌱 Aprendiz do Campo',
  '🚚 Motorista das Mercadorias',
  '🛒 Feirante Esperto',
  '🏭 Mestre da Indústria',
  '🏆 Rei do Comércio'
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
