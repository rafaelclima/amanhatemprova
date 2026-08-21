const bancoQuestoes = [
  // ===== MEDIDAS DE TEMPO (10) =====
  { id: 1, tipo: 'tempo', q: 'Quantos minutos tem 1 hora?',
    alternativas: [
      { texto: '60 minutos', correta: true, explicacao: '1 hora tem 60 minutos. O ponteiro grande dá uma volta completa!' },
      { texto: '100 minutos', correta: false, explicacao: 'Não é 100! 1 hora tem 60 minutos.' },
      { texto: '30 minutos', correta: false, explicacao: '30 minutos é meia hora. 1 hora inteira tem 60 minutos!' }
    ] },
  { id: 2, tipo: 'tempo', q: 'Quantos segundos tem 1 minuto?',
    alternativas: [
      { texto: '60 segundos', correta: true, explicacao: '1 minuto tem 60 segundos!' },
      { texto: '100 segundos', correta: false, explicacao: 'Não é 100! 1 minuto tem 60 segundos.' },
      { texto: '30 segundos', correta: false, explicacao: '30 segundos é meio minuto. 1 minuto tem 60 segundos.' }
    ] },
  { id: 3, tipo: 'tempo', q: 'Quantas horas tem 1 dia?',
    alternativas: [
      { texto: '24 horas', correta: true, explicacao: '1 dia tem 24 horas — é o tempo que a Terra leva para dar uma volta!' },
      { texto: '12 horas', correta: false, explicacao: '12 horas é meio dia. 1 dia completo tem 24 horas!' },
      { texto: '60 horas', correta: false, explicacao: '60 é de minutos! 1 dia tem 24 horas.' }
    ] },
  { id: 4, tipo: 'tempo', q: 'Quantos dias tem 1 semana?',
    alternativas: [
      { texto: '7 dias', correta: true, explicacao: '1 semana tem 7 dias: segunda a domingo!' },
      { texto: '5 dias', correta: false, explicacao: '5 dias são só os dias úteis. 1 semana tem 7 dias!' },
      { texto: '10 dias', correta: false, explicacao: 'Não! 1 semana tem 7 dias.' }
    ] },
  { id: 5, tipo: 'tempo', q: 'Quanto é 2 horas em minutos? Calcule: 2 × 60',
    alternativas: [
      { texto: '120 minutos', correta: true, explicacao: '2 × 60 = 120. Então 2 horas têm 120 minutos!' },
      { texto: '100 minutos', correta: false, explicacao: 'Não é 100! 2 horas = 2 × 60 = 120 minutos.' },
      { texto: '60 minutos', correta: false, explicacao: '60 minutos é 1 hora. 2 horas são 120 minutos!' }
    ] },
  { id: 6, tipo: 'tempo', q: 'Quanto é 1 hora e 30 minutos em minutos?',
    alternativas: [
      { texto: '90 minutos', correta: true, explicacao: '1 hora = 60 min + 30 min = 90 minutos!' },
      { texto: '130 minutos', correta: false, explicacao: 'Não! 60 + 30 = 90, não 130.' },
      { texto: '60 minutos', correta: false, explicacao: '60 minutos é só 1 hora. 1 h e 30 min = 90 minutos!' }
    ] },
  { id: 7, tipo: 'tempo', q: 'Quantos segundos tem 3 minutos? Calcule: 3 × 60',
    alternativas: [
      { texto: '180 segundos', correta: true, explicacao: '3 × 60 = 180 segundos!' },
      { texto: '300 segundos', correta: false, explicacao: '300 seria 5 minutos. 3 minutos = 180 segundos!' },
      { texto: '60 segundos', correta: false, explicacao: '60 segundos é 1 minuto. 3 minutos = 180 segundos!' }
    ] },
  { id: 8, tipo: 'tempo', q: 'Se agora são 14h no relógio digital, que horas são no analógico?',
    alternativas: [
      { texto: '2 horas da tarde', correta: true, explicacao: '14h = 12h + 2h, então é 2 horas da tarde!' },
      { texto: '14 horas da noite', correta: false, explicacao: '14h é de tarde! 14 - 12 = 2 horas da tarde.' },
      { texto: '4 horas da tarde', correta: false, explicacao: '16h seria 4 da tarde. 14h é 2 horas da tarde!' }
    ] },
  { id: 9, tipo: 'tempo', q: 'Quantos meses tem 2 anos?',
    alternativas: [
      { texto: '24 meses', correta: true, explicacao: '1 ano tem 12 meses, então 2 anos = 2 × 12 = 24 meses!' },
      { texto: '12 meses', correta: false, explicacao: '12 meses é 1 ano. 2 anos têm 24 meses!' },
      { texto: '20 meses', correta: false, explicacao: 'Não! 2 anos = 24 meses (2 × 12).' }
    ] },
  { id: 10, tipo: 'tempo', q: 'Quantas horas tem 3 dias? Calcule: 3 × 24',
    alternativas: [
      { texto: '72 horas', correta: true, explicacao: '3 × 24 = 72 horas!' },
      { texto: '48 horas', correta: false, explicacao: '48 horas são 2 dias. 3 dias = 72 horas!' },
      { texto: '60 horas', correta: false, explicacao: '60 é de minutos! 3 dias = 72 horas.' }
    ] },
  // ===== MEDIDAS DE MASSA (7) =====
  { id: 11, tipo: 'massa', q: 'Qual instrumento usamos para medir a massa (o “peso”)?',
    alternativas: [
      { texto: 'Balança', correta: true, explicacao: 'A balança mede a massa: de cozinha, de mercado ou digital!' },
      { texto: 'Régua', correta: false, explicacao: 'Régua mede comprimento! Para massa usamos a balança.' },
      { texto: 'Termômetro', correta: false, explicacao: 'Termômetro mede temperatura! Para massa usamos a balança.' }
    ] },
  { id: 12, tipo: 'massa', q: 'Quantos gramas tem 1 quilograma (1 kg)?',
    alternativas: [
      { texto: '1.000 gramas', correta: true, explicacao: '1 kg = 1.000 g!' },
      { texto: '100 gramas', correta: false, explicacao: '100 gramas é só 0,1 kg. 1 kg tem 1.000 gramas!' },
      { texto: '10 gramas', correta: false, explicacao: 'Muito pouco! 1 kg = 1.000 gramas.' }
    ] },
  { id: 13, tipo: 'massa', q: 'Quanto é 3 kg em gramas? Calcule: 3 × 1.000',
    alternativas: [
      { texto: '3.000 g', correta: true, explicacao: '3 × 1.000 = 3.000 gramas!' },
      { texto: '300 g', correta: false, explicacao: '300 g é 0,3 kg. 3 kg = 3.000 g!' },
      { texto: '30.000 g', correta: false, explicacao: 'Muito! 3 kg = 3.000 g (3 × 1.000).' }
    ] },
  { id: 14, tipo: 'massa', q: 'Quanto é 500 g em quilogramas?',
    alternativas: [
      { texto: '0,5 kg (meio quilo)', correta: true, explicacao: '500 g é metade de 1.000 g, então é 0,5 kg ou meio quilo!' },
      { texto: '5 kg', correta: false, explicacao: '5 kg são 5.000 g! 500 g é 0,5 kg.' },
      { texto: '50 kg', correta: false, explicacao: '50 kg são 50.000 g! 500 g é 0,5 kg.' }
    ] },
  { id: 15, tipo: 'massa', q: 'O que mede a massa: a régua ou a balança?',
    alternativas: [
      { texto: 'A balança', correta: true, explicacao: 'Balança mede massa (kg, g). Régua mede comprimento!' },
      { texto: 'A régua', correta: false, explicacao: 'Régua mede comprimento! Massa se mede com balança.' },
      { texto: 'O relógio', correta: false, explicacao: 'Relógio mede tempo! Massa se mede com balança.' }
    ] },
  { id: 16, tipo: 'massa', q: 'Quanto é 2 toneladas (2 t) em quilogramas?',
    alternativas: [
      { texto: '2.000 kg', correta: true, explicacao: '1 tonelada = 1.000 kg, então 2 t = 2.000 kg!' },
      { texto: '200 kg', correta: false, explicacao: '200 kg é 0,2 t. 2 toneladas = 2.000 kg!' },
      { texto: '20.000 kg', correta: false, explicacao: 'Muito! 2 t = 2.000 kg.' }
    ] },
  { id: 17, tipo: 'massa', q: 'Um pacote tem 250 g. Quantos pacotes são necessários para formar 1 kg?',
    alternativas: [
      { texto: '4 pacotes', correta: true, explicacao: '250 × 4 = 1.000 g = 1 kg! São 4 pacotes.' },
      { texto: '2 pacotes', correta: false, explicacao: '2 × 250 = 500 g (meio quilo). Para 1 kg são 4 pacotes!' },
      { texto: '10 pacotes', correta: false, explicacao: '10 × 250 = 2.500 g. Para 1 kg são 4 pacotes (4 × 250 = 1.000).' }
    ] },
  // ===== MEDIDAS DE COMPRIMENTO (8) =====
  { id: 18, tipo: 'comprimento', q: 'Qual unidade usamos para medir comprimento?',
    alternativas: [
      { texto: 'Metro (m), centímetro (cm) e quilômetro (km)', correta: true, explicacao: 'Comprimento se mede com m, cm, km e mm!' },
      { texto: 'Litro (L) e mililitro (mL)', correta: false, explicacao: 'Litro mede capacidade (líquidos)! Comprimento usa m, cm, km.' },
      { texto: 'Quilograma (kg) e grama (g)', correta: false, explicacao: 'kg e g medem massa! Comprimento usa m, cm, km.' }
    ] },
  { id: 19, tipo: 'comprimento', q: 'Quantos centímetros tem 1 metro?',
    alternativas: [
      { texto: '100 cm', correta: true, explicacao: '1 m = 100 cm!' },
      { texto: '10 cm', correta: false, explicacao: '10 cm é 0,1 m. 1 metro tem 100 cm!' },
      { texto: '1.000 cm', correta: false, explicacao: '1.000 cm são 10 metros. 1 m = 100 cm.' }
    ] },
  { id: 20, tipo: 'comprimento', q: 'Quantos metros tem 1 quilômetro?',
    alternativas: [
      { texto: '1.000 m', correta: true, explicacao: '1 km = 1.000 m!' },
      { texto: '100 m', correta: false, explicacao: '100 m é 0,1 km. 1 km tem 1.000 m!' },
      { texto: '10.000 m', correta: false, explicacao: '10 km têm 10.000 m. 1 km = 1.000 m.' }
    ] },
  { id: 21, tipo: 'comprimento', q: 'Quanto é 5 metros em centímetros? Calcule: 5 × 100',
    alternativas: [
      { texto: '500 cm', correta: true, explicacao: '5 × 100 = 500 cm!' },
      { texto: '50 cm', correta: false, explicacao: '50 cm é 0,5 m. 5 m = 500 cm!' },
      { texto: '5.000 cm', correta: false, explicacao: '5.000 cm são 50 m. 5 m = 500 cm.' }
    ] },
  { id: 22, tipo: 'comprimento', q: 'Quanto é 3 km em metros? Calcule: 3 × 1.000',
    alternativas: [
      { texto: '3.000 m', correta: true, explicacao: '3 × 1.000 = 3.000 metros!' },
      { texto: '300 m', correta: false, explicacao: '300 m é 0,3 km. 3 km = 3.000 m!' },
      { texto: '30.000 m', correta: false, explicacao: '30 km têm 30.000 m. 3 km = 3.000 m.' }
    ] },
  { id: 23, tipo: 'comprimento', q: 'Qual instrumento mede comprimento?',
    alternativas: [
      { texto: 'Régua, trena ou fita métrica', correta: true, explicacao: 'Régua, trena e fita métrica medem comprimento!' },
      { texto: 'Balança', correta: false, explicacao: 'Balança mede massa! Comprimento se mede com régua.' },
      { texto: 'Termômetro', correta: false, explicacao: 'Termômetro mede temperatura! Comprimento se mede com régua.' }
    ] },
  { id: 24, tipo: 'comprimento', q: '250 cm equivalem a quantos metros?',
    alternativas: [
      { texto: '2,5 m (2 m e 50 cm)', correta: true, explicacao: '200 cm = 2 m, sobram 50 cm. Então 250 cm = 2,5 m!' },
      { texto: '25 m', correta: false, explicacao: '25 m são 2.500 cm! 250 cm = 2,5 m.' },
      { texto: '0,25 m', correta: false, explicacao: '0,25 m são 25 cm. 250 cm = 2,5 m!' }
    ] },
  { id: 25, tipo: 'comprimento', q: 'O que é maior: 1 km ou 800 m?',
    alternativas: [
      { texto: '1 km (1.000 m)', correta: true, explicacao: '1 km = 1.000 m, que é maior que 800 m!' },
      { texto: '800 m', correta: false, explicacao: '800 m é menor! 1 km = 1.000 m > 800 m.' },
      { texto: 'São iguais', correta: false, explicacao: 'Não! 1 km = 1.000 m, maior que 800 m.' }
    ] },
  // ===== MEDIDAS DE CAPACIDADE (7) =====
  { id: 26, tipo: 'capacidade', q: 'Qual unidade usamos para medir capacidade (líquidos)?',
    alternativas: [
      { texto: 'Litro (L) e mililitro (mL)', correta: true, explicacao: 'Capacidade de líquidos se mede com L e mL!' },
      { texto: 'Quilograma (kg)', correta: false, explicacao: 'kg mede massa! Capacidade usa L e mL.' },
      { texto: 'Metro (m)', correta: false, explicacao: 'Metro mede comprimento! Capacidade usa L e mL.' }
    ] },
  { id: 27, tipo: 'capacidade', q: 'Quantos mililitros tem 1 litro?',
    alternativas: [
      { texto: '1.000 mL', correta: true, explicacao: '1 L = 1.000 mL!' },
      { texto: '100 mL', correta: false, explicacao: '100 mL é 0,1 L. 1 litro tem 1.000 mL!' },
      { texto: '10 mL', correta: false, explicacao: 'Muito pouco! 1 L = 1.000 mL.' }
    ] },
  { id: 28, tipo: 'capacidade', q: 'Quanto é 2 litros em mililitros? Calcule: 2 × 1.000',
    alternativas: [
      { texto: '2.000 mL', correta: true, explicacao: '2 × 1.000 = 2.000 mL!' },
      { texto: '200 mL', correta: false, explicacao: '200 mL é 0,2 L. 2 L = 2.000 mL!' },
      { texto: '20.000 mL', correta: false, explicacao: '20 L têm 20.000 mL. 2 L = 2.000 mL.' }
    ] },
  { id: 29, tipo: 'capacidade', q: 'Quanto é 1.500 mL em litros?',
    alternativas: [
      { texto: '1,5 L', correta: true, explicacao: '1.000 mL = 1 L, sobram 500 mL. Então 1.500 mL = 1,5 L!' },
      { texto: '15 L', correta: false, explicacao: '15 L são 15.000 mL! 1.500 mL = 1,5 L.' },
      { texto: '0,15 L', correta: false, explicacao: '0,15 L são 150 mL. 1.500 mL = 1,5 L!' }
    ] },
  { id: 30, tipo: 'capacidade', q: 'Quantos copos de 200 mL são necessários para encher 1 litro?',
    alternativas: [
      { texto: '5 copos', correta: true, explicacao: '200 × 5 = 1.000 mL = 1 L! São 5 copos.' },
      { texto: '2 copos', correta: false, explicacao: '2 × 200 = 400 mL (menos da metade). Para 1 L são 5 copos!' },
      { texto: '10 copos', correta: false, explicacao: '10 × 200 = 2.000 mL = 2 L! Para 1 L são 5 copos.' }
    ] },
  { id: 31, tipo: 'capacidade', q: 'Uma garrafa de 2 L tem quantos mililitros?',
    alternativas: [
      { texto: '2.000 mL', correta: true, explicacao: '2 × 1.000 = 2.000 mL!' },
      { texto: '200 mL', correta: false, explicacao: '200 mL é um copo! 2 L = 2.000 mL.' },
      { texto: '20 mL', correta: false, explicacao: 'Muito pouco! 2 L = 2.000 mL.' }
    ] },
  { id: 32, tipo: 'capacidade', q: 'O que mede capacidade: o termômetro ou o copo graduado?',
    alternativas: [
      { texto: 'O copo graduado', correta: true, explicacao: 'Copo graduado mede líquidos (capacidade). Termômetro mede temperatura!' },
      { texto: 'O termômetro', correta: false, explicacao: 'Termômetro mede temperatura! Capacidade se mede com copo graduado.' },
      { texto: 'A régua', correta: false, explicacao: 'Régua mede comprimento! Capacidade se mede com copo graduado.' }
    ] },
  // ===== MEDIDAS DE TEMPERATURA (6) =====
  { id: 33, tipo: 'temperatura', q: 'Qual unidade usamos para medir temperatura?',
    alternativas: [
      { texto: 'Grau Celsius (°C)', correta: true, explicacao: 'Temperatura se mede em graus Celsius (°C)!' },
      { texto: 'Litro (L)', correta: false, explicacao: 'Litro mede capacidade! Temperatura usa °C.' },
      { texto: 'Metro (m)', correta: false, explicacao: 'Metro mede comprimento! Temperatura usa °C.' }
    ] },
  { id: 34, tipo: 'temperatura', q: 'Qual instrumento mede a temperatura?',
    alternativas: [
      { texto: 'Termômetro', correta: true, explicacao: 'O termômetro mede a temperatura em °C!' },
      { texto: 'Balança', correta: false, explicacao: 'Balança mede massa! Temperatura se mede com termômetro.' },
      { texto: 'Régua', correta: false, explicacao: 'Régua mede comprimento! Temperatura se mede com termômetro.' }
    ] },
  { id: 35, tipo: 'temperatura', q: 'A que temperatura a água ferve?',
    alternativas: [
      { texto: '100 °C', correta: true, explicacao: 'A água ferve a 100 °C!' },
      { texto: '0 °C', correta: false, explicacao: '0 °C é quando a água congela e vira gelo! Ferver é 100 °C.' },
      { texto: '37 °C', correta: false, explicacao: '37 °C é a temperatura do nosso corpo! Água ferve a 100 °C.' }
    ] },
  { id: 36, tipo: 'temperatura', q: 'A que temperatura a água congela e vira gelo?',
    alternativas: [
      { texto: '0 °C', correta: true, explicacao: 'A 0 °C a água congela e vira gelo!' },
      { texto: '100 °C', correta: false, explicacao: '100 °C é quando a água ferve! Gelo é 0 °C.' },
      { texto: '50 °C', correta: false, explicacao: '50 °C é muito quente! Gelo é 0 °C.' }
    ] },
  { id: 37, tipo: 'temperatura', q: 'Qual é a temperatura aproximada do corpo humano saudável?',
    alternativas: [
      { texto: '37 °C', correta: true, explicacao: 'Nosso corpo fica por volta de 37 °C. Acima de 37,5 °C é febre!' },
      { texto: '0 °C', correta: false, explicacao: '0 °C é gelo! Nosso corpo é ~37 °C.' },
      { texto: '100 °C', correta: false, explicacao: '100 °C é água fervendo! Nosso corpo é ~37 °C.' }
    ] },
  { id: 38, tipo: 'temperatura', q: '-5 °C indica um dia quente ou frio?',
    alternativas: [
      { texto: 'Frio (muito frio!)', correta: true, explicacao: '-5 °C é abaixo de zero, muito frio! Temperaturas negativas são frias.' },
      { texto: 'Quente', correta: false, explicacao: 'Quente seria 30 °C! -5 °C é muito frio.' },
      { texto: 'Temperatura ambiente', correta: false, explicacao: 'Ambiente é ~25 °C. -5 °C é muito frio!' }
    ] },
  // ===== TABELAS (8) =====
  { id: 39, tipo: 'tabela', q: 'O que é o título de uma tabela?',
    alternativas: [
      { texto: 'Diz do que a tabela fala', correta: true, explicacao: 'O título explica o assunto da tabela!' },
      { texto: 'A última linha da tabela', correta: false, explicacao: 'Última linha são dados! O título fica em cima e diz do que se trata.' },
      { texto: 'O preço de um produto', correta: false, explicacao: 'Preço pode estar na tabela, mas o título diz do que ela fala!' }
    ] },
  { id: 40, tipo: 'tabela', q: 'As colunas de uma tabela são verticais ou horizontais?',
    alternativas: [
      { texto: 'Verticais (em pé)', correta: true, explicacao: 'Colunas ficam em pé (verticais) e linhas ficam deitadas (horizontais)!' },
      { texto: 'Horizontais (deitadas)', correta: false, explicacao: 'Horizontais são as linhas! Colunas são verticais (em pé).' },
      { texto: 'Diagonais', correta: false, explicacao: 'Não! Colunas são verticais (em pé).' }
    ] },
  { id: 41, tipo: 'tabela', q: 'As linhas de uma tabela são verticais ou horizontais?',
    alternativas: [
      { texto: 'Horizontais (deitadas)', correta: true, explicacao: 'Linhas ficam deitadas (horizontais)!' },
      { texto: 'Verticais (em pé)', correta: false, explicacao: 'Verticais são as colunas! Linhas são horizontais (deitadas).' },
      { texto: 'Circulares', correta: false, explicacao: 'Não! Linhas são horizontais (deitadas).' }
    ] },
  { id: 42, tipo: 'tabela', q: 'O que é o cabeçalho de uma tabela?',
    alternativas: [
      { texto: 'A primeira linha que explica cada coluna', correta: true, explicacao: 'O cabeçalho fica no topo e diz o que cada coluna significa!' },
      { texto: 'A última coluna', correta: false, explicacao: 'Não! O cabeçalho é a primeira linha no topo.' },
      { texto: 'A fonte da tabela', correta: false, explicacao: 'Fonte diz de onde vieram os dados. Cabeçalho explica as colunas!' }
    ] },
  { id: 43, tipo: 'tabela', q: 'O que é a fonte de uma tabela?',
    alternativas: [
      { texto: 'De onde vieram os dados', correta: true, explicacao: 'A fonte mostra a origem dos dados: “Fonte: pesquisa da turma”!' },
      { texto: 'O título da tabela', correta: false, explicacao: 'Título diz do que se trata. Fonte diz de onde vieram os dados!' },
      { texto: 'A cor da tabela', correta: false, explicacao: 'Cor é visual! Fonte é de onde vieram os dados.' }
    ] },
  { id: 44, tipo: 'tabela', q: 'Para encontrar um dado na tabela, o que cruzamos?',
    alternativas: [
      { texto: 'A linha e a coluna', correta: true, explicacao: 'Cruze a linha (horizontal) com a coluna (vertical) para achar o dado!' },
      { texto: 'Apenas a cor', correta: false, explicacao: 'Cor não ajuda! Cruze a linha e a coluna.' },
      { texto: 'O título e a fonte', correta: false, explicacao: 'Título e fonte explicam a tabela, mas o dado está no cruzamento de linha e coluna!' }
    ] },
  { id: 45, tipo: 'tabela', q: 'Uma tabela mostra “Frutas favoritas da turma”. Onde você procura “maçã”?',
    alternativas: [
      { texto: 'Na linha ou coluna que lista as frutas', correta: true, explicacao: 'Procure na coluna/linha onde estão os nomes das frutas!' },
      { texto: 'Na fonte da tabela', correta: false, explicacao: 'Fonte diz de onde vieram os dados! O nome “maçã” está nas linhas/colunas das frutas.' },
      { texto: 'No título', correta: false, explicacao: 'Título diz “Frutas favoritas”. O nome “maçã” está nos dados da tabela!' }
    ] },
  { id: 46, tipo: 'tabela', q: 'Tabelas servem para...',
    alternativas: [
      { texto: 'organizar informações e dados', correta: true, explicacao: 'Tabelas organizam dados em linhas e colunas para facilitar a leitura!' },
      { texto: 'medir temperatura', correta: false, explicacao: 'Temperatura se mede com termômetro! Tabelas organizam informações.' },
      { texto: 'desenhar polígonos', correta: false, explicacao: 'Polígonos são figuras! Tabelas organizam informações.' }
    ] },
  // ===== GRÁFICO DE COLUNAS (8) =====
  { id: 47, tipo: 'grafico_colunas', q: 'Como são as colunas no gráfico de colunas?',
    alternativas: [
      { texto: 'Verticais (em pé)', correta: true, explicacao: 'No gráfico de colunas, as colunas ficam em pé (verticais)!' },
      { texto: 'Horizontais (deitadas)', correta: false, explicacao: 'Horizontais são barras! Colunas são verticais (em pé).' },
      { texto: 'Circulares', correta: false, explicacao: 'Não! Colunas são verticais (em pé).' }
    ] },
  { id: 48, tipo: 'grafico_colunas', q: 'Como são as barras no gráfico de barras?',
    alternativas: [
      { texto: 'Horizontais (deitadas)', correta: true, explicacao: 'No gráfico de barras, as barras ficam deitadas (horizontais)!' },
      { texto: 'Verticais (em pé)', correta: false, explicacao: 'Verticais são colunas! Barras são horizontais (deitadas).' },
      { texto: 'Diagonais', correta: false, explicacao: 'Não! Barras são horizontais (deitadas).' }
    ] },
  { id: 49, tipo: 'grafico_colunas', q: 'No gráfico de colunas, o que indica a coluna mais alta?',
    alternativas: [
      { texto: 'O maior valor', correta: true, explicacao: 'Quanto mais alta a coluna, maior o valor! A mais alta é o maior número.' },
      { texto: 'O menor valor', correta: false, explicacao: 'Menor valor é a coluna mais baixa! A mais alta é o maior valor.' },
      { texto: 'A cor mais bonita', correta: false, explicacao: 'Cor não importa! Altura da coluna indica o valor: mais alta = maior.' }
    ] },
  { id: 50, tipo: 'grafico_colunas', q: 'O gráfico pictográfico usa o quê para representar quantidades?',
    alternativas: [
      { texto: 'Desenhos (pictogramas)', correta: true, explicacao: 'Pictográfico usa desenhos! Cada desenho vale uma quantidade.' },
      { texto: 'Apenas números', correta: false, explicacao: 'Números ficam no eixo! Pictográfico usa desenhos.' },
      { texto: 'Linhas retas', correta: false, explicacao: 'Polígonos têm linhas! Pictográfico usa desenhos (pictogramas).' }
    ] },
  { id: 51, tipo: 'grafico_colunas', q: 'Para entender um pictográfico, o que você precisa ver?',
    alternativas: [
      { texto: 'A legenda que diz quanto cada desenho vale', correta: true, explicacao: 'A legenda explica quanto cada desenho vale! Sem ela, não dá para contar.' },
      { texto: 'Apenas a cor', correta: false, explicacao: 'Cor não diz o valor! Precisa ver a legenda.' },
      { texto: 'O título da tabela', correta: false, explicacao: 'Título ajuda, mas o valor de cada desenho está na legenda!' }
    ] },
  { id: 52, tipo: 'grafico_colunas', q: 'Todo gráfico precisa ter título, eixos e legenda?',
    alternativas: [
      { texto: 'Sim, para entendermos os dados', correta: true, explicacao: 'Título, eixos e legenda explicam o gráfico! Sem eles fica confuso.' },
      { texto: 'Não, gráfico não precisa de nada', correta: false, explicacao: 'Precisa sim! Título, eixos e legenda são essenciais.' },
      { texto: 'Só precisa de cor', correta: false, explicacao: 'Cor ajuda, mas gráfico precisa de título, eixos e legenda!' }
    ] },
  { id: 53, tipo: 'grafico_colunas', q: 'Se no pictográfico cada bola vale 5 e há 3 bolas, quantas bolas ao todo?',
    alternativas: [
      { texto: '15 bolas (3 × 5)', correta: true, explicacao: '3 × 5 = 15 bolas!' },
      { texto: '8 bolas (3 + 5)', correta: false, explicacao: 'Não é soma! É 3 × 5 = 15 (3 bolas valendo 5 cada).' },
      { texto: '5 bolas', correta: false, explicacao: '5 é o valor de cada bola! 3 bolas × 5 = 15 bolas.' }
    ] },
  { id: 54, tipo: 'grafico_colunas', q: 'Qual a diferença entre gráfico de colunas e de barras?',
    alternativas: [
      { texto: 'A orientação: colunas verticais, barras horizontais', correta: true, explicacao: 'Colunas ficam em pé (verticais) e barras ficam deitadas (horizontais)!' },
      { texto: 'Não há diferença', correta: false, explicacao: 'Há sim! Colunas são verticais e barras são horizontais.' },
      { texto: 'Um usa números e outro não', correta: false, explicacao: 'Os dois usam números! A diferença é a orientação.' }
    ] },
  // ===== GRÁFICO DE BARRAS E PICTOGRÁFICO (8) =====
  { id: 55, tipo: 'grafico_barras_pict', q: 'O pictográfico é útil para...',
    alternativas: [
      { texto: 'visualizar quantidades com desenhos', correta: true, explicacao: 'Pictográfico usa desenhos para mostrar quantidades de forma visual!' },
      { texto: 'medir temperatura', correta: false, explicacao: 'Temperatura se mede com termômetro! Pictográfico visualiza quantidades.' },
      { texto: 'medir massa', correta: false, explicacao: 'Massa se mede com balança! Pictográfico visualiza quantidades.' }
    ] },
  { id: 56, tipo: 'grafico_barras_pict', q: 'Cada desenho no pictográfico vale...',
    alternativas: [
      { texto: 'o que a legenda disser', correta: true, explicacao: 'A legenda diz quanto cada desenho vale: pode ser 2, 5, 10...' },
      { texto: 'sempre 1', correta: false, explicacao: 'Nem sempre 1! Depende da legenda: pode valer 5, 10...' },
      { texto: 'sempre 100', correta: false, explicacao: 'Não! O valor está na legenda: pode ser 2, 5, 10...' }
    ] },
  { id: 57, tipo: 'grafico_barras_pict', q: 'Gráfico de barras ajuda a comparar...',
    alternativas: [
      { texto: 'quantidades', correta: true, explicacao: 'Gráficos comparam quantidades: qual barra é maior ou menor!' },
      { texto: 'temperaturas de planetas', correta: false, explicacao: 'Pode comparar isso também, mas gráficos comparam quantidades em geral!' },
      { texto: 'cores de roupa', correta: false, explicacao: 'Pode, mas gráficos comparam quantidades: números e valores!' }
    ] },
  { id: 58, tipo: 'grafico_barras_pict', q: 'Se a barra mais comprida vale 50, ela representa...',
    alternativas: [
      { texto: 'o maior valor', correta: true, explicacao: 'Barra mais comprida = maior valor!' },
      { texto: 'o menor valor', correta: false, explicacao: 'Menor valor é barra mais curta! Mais comprida = maior valor.' },
      { texto: 'um erro', correta: false, explicacao: 'Não é erro! Barra mais comprida = maior valor.' }
    ] },
  { id: 59, tipo: 'grafico_barras_pict', q: 'Se 2 desenhos de estrela valem 10 cada, quanto valem juntos?',
    alternativas: [
      { texto: '20 (2 × 10)', correta: true, explicacao: '2 × 10 = 20!' },
      { texto: '12 (2 + 10)', correta: false, explicacao: 'Não é soma! É 2 × 10 = 20.' },
      { texto: '10', correta: false, explicacao: '10 é cada uma! 2 estrelas × 10 = 20.' }
    ] },
  { id: 60, tipo: 'grafico_barras_pict', q: 'Para saber quanto vale cada símbolo no pictográfico, você deve...',
    alternativas: [
      { texto: 'ver a legenda', correta: true, explicacao: 'A legenda explica o valor de cada símbolo!' },
      { texto: 'adivinhar', correta: false, explicacao: 'Não precisa adivinhar! É só ver a legenda.' },
      { texto: 'medir com régua', correta: false, explicacao: 'Régua mede comprimento! Valor do símbolo está na legenda.' }
    ] },
  { id: 61, tipo: 'grafico_barras_pict', q: 'Gráficos ajudam a...',
    alternativas: [
      { texto: 'visualizar dados rapidamente', correta: true, explicacao: 'Gráficos deixam os dados visuais e fáceis de comparar!' },
      { texto: 'medir o peso', correta: false, explicacao: 'Peso se mede com balança! Gráficos visualizam dados.' },
      { texto: 'desenhar polígonos', correta: false, explicacao: 'Polígonos são figuras! Gráficos visualizam dados.' }
    ] },
  { id: 62, tipo: 'grafico_barras_pict', q: 'O título do gráfico serve para...',
    alternativas: [
      { texto: 'saber do que o gráfico trata', correta: true, explicacao: 'O título diz o assunto do gráfico!' },
      { texto: 'medir a temperatura', correta: false, explicacao: 'Temperatura se mede com termômetro! Título diz do que se trata.' },
      { texto: 'contar os lados de um polígono', correta: false, explicacao: 'Lados são de polígonos! Título diz do que o gráfico trata.' }
    ] },
  // ===== POLÍGONOS (8) =====
  { id: 63, tipo: 'poligonos', q: 'O que é um polígono?',
    alternativas: [
      { texto: 'Figura plana fechada feita só com segmentos de reta', correta: true, explicacao: 'Polígono é fechado, sem curvas, só com linhas retas!' },
      { texto: 'Figura com curvas', correta: false, explicacao: 'Com curvas não é polígono! Polígono tem só segmentos de reta.' },
      { texto: 'Figura aberta', correta: false, explicacao: 'Polígono é fechado! Figura aberta não é polígono.' }
    ] },
  { id: 64, tipo: 'poligonos', q: 'Quantos lados tem um triângulo?',
    alternativas: [
      { texto: '3 lados', correta: true, explicacao: 'Tri = 3! Triângulo tem 3 lados e 3 vértices.' },
      { texto: '4 lados', correta: false, explicacao: '4 lados é quadrado! Triângulo tem 3 lados.' },
      { texto: '5 lados', correta: false, explicacao: '5 lados é pentágono! Triângulo tem 3.' }
    ] },
  { id: 65, tipo: 'poligonos', q: 'Quantos lados tem um quadrado?',
    alternativas: [
      { texto: '4 lados iguais', correta: true, explicacao: 'Quadrado tem 4 lados iguais e 4 vértices!' },
      { texto: '3 lados', correta: false, explicacao: '3 lados é triângulo! Quadrado tem 4 lados iguais.' },
      { texto: '6 lados', correta: false, explicacao: '6 lados é hexágono! Quadrado tem 4 lados iguais.' }
    ] },
  { id: 66, tipo: 'poligonos', q: 'Quantos lados tem um retângulo?',
    alternativas: [
      { texto: '4 lados (2 pares iguais)', correta: true, explicacao: 'Retângulo tem 4 lados: 2 maiores e 2 menores!' },
      { texto: '3 lados', correta: false, explicacao: '3 lados é triângulo! Retângulo tem 4 lados.' },
      { texto: '5 lados', correta: false, explicacao: '5 lados é pentágono! Retângulo tem 4 lados.' }
    ] },
  { id: 67, tipo: 'poligonos', q: 'Quantos lados tem um pentágono?',
    alternativas: [
      { texto: '5 lados', correta: true, explicacao: 'Penta = 5! Pentágono tem 5 lados e 5 vértices.' },
      { texto: '4 lados', correta: false, explicacao: '4 lados é quadrado! Pentágono tem 5 lados.' },
      { texto: '6 lados', correta: false, explicacao: '6 lados é hexágono! Pentágono tem 5.' }
    ] },
  { id: 68, tipo: 'poligonos', q: 'Quantos lados tem um hexágono?',
    alternativas: [
      { texto: '6 lados', correta: true, explicacao: 'Hexa = 6! Hexágono tem 6 lados e 6 vértices.' },
      { texto: '5 lados', correta: false, explicacao: '5 lados é pentágono! Hexágono tem 6 lados.' },
      { texto: '8 lados', correta: false, explicacao: '8 lados é octógono! Hexágono tem 6.' }
    ] },
  { id: 69, tipo: 'poligonos', q: 'O círculo é um polígono?',
    alternativas: [
      { texto: 'Não, porque tem curva', correta: true, explicacao: 'Polígono só tem segmentos de reta. Círculo tem curva, então não é polígono!' },
      { texto: 'Sim, é um polígono', correta: false, explicacao: 'Não! Polígono não tem curvas. Círculo tem curva, então não é polígono.' },
      { texto: 'Sim, tem 1 lado', correta: false, explicacao: 'Círculo não tem lados retos! Não é polígono porque tem curva.' }
    ] },
  { id: 70, tipo: 'poligonos', q: 'Quantos vértices tem um pentágono?',
    alternativas: [
      { texto: '5 vértices', correta: true, explicacao: 'Pentágono tem 5 lados e 5 vértices (os cantinhos)!' },
      { texto: '4 vértices', correta: false, explicacao: '4 vértices é quadrado! Pentágono tem 5 vértices.' },
      { texto: '6 vértices', correta: false, explicacao: '6 vértices é hexágono! Pentágono tem 5.' }
    ] }
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

// ===== JOGO DO CÁLCULO (com contas) =====
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
  const tipos = ['h_min','min_s','dia_h','kg_g','m_cm','km_m','L_mL','copos','pict','poligono','grafico'];
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];
  let pergunta = '';
  let resposta = 0;
  let unidade = '';

  switch (tipo) {
    case 'h_min': {
      const h = Math.floor(Math.random() * 4) + 1;
      pergunta = `Quanto é ${h} h em minutos?`;
      resposta = h * 60;
      unidade = 'min';
      break;
    }
    case 'min_s': {
      const m = Math.floor(Math.random() * 4) + 2;
      pergunta = `Quanto é ${m} min em segundos?`;
      resposta = m * 60;
      unidade = 's';
      break;
    }
    case 'dia_h': {
      const d = Math.floor(Math.random() * 3) + 2;
      pergunta = `Quanto é ${d} dias em horas?`;
      resposta = d * 24;
      unidade = 'h';
      break;
    }
    case 'kg_g': {
      const k = Math.floor(Math.random() * 4) + 1;
      if (Math.random() < 0.5) {
        pergunta = `Quanto é ${k} kg em gramas?`;
        resposta = k * 1000;
        unidade = 'g';
      } else {
        const g = (k * 1000) / 2;
        pergunta = `Quanto é ${g} g em kg?`;
        resposta = g / 1000;
        unidade = 'kg';
        // para evitar decimais com vírgula, usar formato 0,5
      }
      break;
    }
    case 'm_cm': {
      const m = Math.floor(Math.random() * 5) + 1;
      pergunta = `Quanto é ${m} m em centímetros?`;
      resposta = m * 100;
      unidade = 'cm';
      break;
    }
    case 'km_m': {
      const km = Math.floor(Math.random() * 4) + 1;
      pergunta = `Quanto é ${km} km em metros?`;
      resposta = km * 1000;
      unidade = 'm';
      break;
    }
    case 'L_mL': {
      const L = Math.floor(Math.random() * 3) + 1;
      if (Math.random() < 0.5) {
        pergunta = `Quanto é ${L} L em mililitros?`;
        resposta = L * 1000;
        unidade = 'mL';
      } else {
        pergunta = `Quantos copos de 250 mL enchem ${L} L?`;
        resposta = (L * 1000) / 250;
        unidade = 'copos';
      }
      break;
    }
    case 'copos': {
      pergunta = `Quantos copos de 200 mL enchem 1 litro?`;
      resposta = 5;
      unidade = 'copos';
      break;
    }
    case 'pict': {
      const val = [2,5,10][Math.floor(Math.random()*3)];
      const qtd = Math.floor(Math.random()*3)+2;
      pergunta = `No pictográfico cada ⭐ vale ${val}. Quanto valem ${qtd} estrelas?`;
      resposta = val * qtd;
      unidade = '';
      break;
    }
    case 'poligono': {
      const polis = [
        { nome: 'triângulo', lados: 3 },
        { nome: 'quadrado', lados: 4 },
        { nome: 'retângulo', lados: 4 },
        { nome: 'pentágono', lados: 5 },
        { nome: 'hexágono', lados: 6 }
      ];
      const p = polis[Math.floor(Math.random()*polis.length)];
      pergunta = `Quantos lados tem um ${p.nome}?`;
      resposta = p.lados;
      unidade = 'lados';
      break;
    }
    case 'grafico': {
      const vals = [10,20,30,40];
      const a = vals[Math.floor(Math.random()*vals.length)];
      let b;
      do { b = vals[Math.floor(Math.random()*vals.length)]; } while (b===a);
      pergunta = `Gráfico: coluna A = ${a}, coluna B = ${b}. Qual é maior?`;
      resposta = Math.max(a,b);
      unidade = '';
      // resposta será o valor maior, mas pergunta é qual maior — mostrar valor
      break;
    }
  }

  // formatar resposta com unidade se houver
  let respostaTexto = String(resposta);
  if (unidade === 'kg' && String(resposta).includes('.')) respostaTexto = String(resposta).replace('.', ',') + ' kg';
  else if (unidade) respostaTexto = resposta + (unidade === 'copos' || unidade === 'lados' ? ` ${unidade}` : ` ${unidade}`);
  // para pergunta de gráfico, resposta é o número maior
  if (tipo === 'grafico') pergunta = `Gráfico: coluna A = ${pergunta.match(/A = (\d+)/)[1]}, coluna B = ${pergunta.match(/B = (\d+)/)[1]}. Qual valor é maior?`;

  const opcoes = [resposta];
  // gerar 3 fakes próximos
  while (opcoes.length < 4) {
    let fake;
    if (typeof resposta === 'number' && resposta < 10) fake = resposta + Math.floor(Math.random()*6) - 2;
    else if (resposta < 100) fake = resposta + (Math.floor(Math.random()*20) - 10);
    else if (resposta < 1000) fake = resposta + (Math.floor(Math.random()*200) - 100);
    else fake = resposta + (Math.floor(Math.random()*1000) - 500);
    if (fake < 0) fake = Math.abs(fake);
    if (fake !== resposta && !opcoes.includes(fake) && fake >= 0) opcoes.push(fake);
  }

  // para kg com vírgula, fake precisa ser formatado igual
  const opcoesTexto = opcoes.map(v => {
    if (unidade === 'kg' && String(v).includes('.')) return String(v).replace('.', ',') + ' kg';
    if (unidade) return v + (unidade === 'copos' || unidade === 'lados' ? ` ${unidade}` : ` ${unidade}`);
    return String(v);
  });

  // embaralhar
  for (let i = opcoesTexto.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opcoesTexto[i], opcoesTexto[j]] = [opcoesTexto[j], opcoesTexto[i]];
    [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
  }

  document.getElementById('jogo-pergunta').textContent = pergunta;
  const container = document.getElementById('jogo-opcoes');
  // precisamos mapear texto -> valor original para onclick correto
  // vamos usar índice: encontrar índice da resposta correta em opcoes
  const idxCorreto = opcoes.indexOf(resposta);
  const textoCorreto = opcoesTexto[idxCorreto];
  container.innerHTML = opcoesTexto.map(v =>
    `<button class="jogo-opcao" data-resposta="${v}" onclick="responderJogo(this, '${textoCorreto.replace(/'/g, "\\'")}')">${v}</button>`
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
    document.getElementById('jogo-mensagem').textContent = `❌ Era ${respostaCorreta}. Tente a próxima!`;
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