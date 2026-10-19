// ===== BANCO DE QUESTÕES (72) =====
// Cap. 11 — Novos problemas, números novos | Cap. 12 — Números racionais e sua representação fracionária
const bancoQuestoes = [
  // ===== SISTEMA MONETÁRIO (1-12) =====
  {
    id: 1, tipo: 'sistema_monetario',
    q: '💰 Qual é a moeda oficial do Brasil?',
    alternativas: [
      { texto: 'O real (R$)', correta: true, explicacao: 'Isso! A moeda do Brasil é o REAL, escrito com a letra R e o símbolo $. Foi criado em 1994!' },
      { texto: 'O cruzeiro', correta: false, explicacao: 'O cruzeiro foi a moeda antiga, antes do Plano Real! Hoje a moeda é o REAL (R$).' },
      { texto: 'O dólar', correta: false, explicacao: 'O dólar é a moeda dos Estados Unidos! A moeda do Brasil é o REAL (R$).' }
    ]
  },
  {
    id: 2, tipo: 'sistema_monetario',
    q: '🪙 Quantos centavos formam 1 real?',
    alternativas: [
      { texto: '100 centavos', correta: true, explicacao: 'Isso! 1 real = 100 centavos. Por isso existem moedas de 1, 5, 10, 25 e 50 centavos!' },
      { texto: '10 centavos', correta: false, explicacao: 'São 10 moedas de 10 centavos que formam 1 real. Mas 1 real tem 100 centavos!' },
      { texto: '1.000 centavos', correta: false, explicacao: '1.000 centavos seriam 10 reais! 1 real tem 100 centavos.' }
    ]
  },
  {
    id: 3, tipo: 'sistema_monetario',
    q: '✏️ Como se escreve 1 real e 50 centavos?',
    alternativas: [
      { texto: 'R$ 1,50', correta: true, explicacao: 'Isso! A vírgula separa os reais dos centavos: 1 real e 50 centavos = R$ 1,50.' },
      { texto: 'R$ 1,05', correta: false, explicacao: 'R$ 1,05 é 1 real e 5 centavos! Para 1 real e 50 centavos escrevemos R$ 1,50.' },
      { texto: 'R$ 150,00', correta: false, explicacao: 'R$ 150,00 é cento e cinquenta reais! 1 real e 50 centavos é R$ 1,50.' }
    ]
  },
  {
    id: 4, tipo: 'sistema_monetario',
    q: '🪙 Quais são moedas que existem no Brasil?',
    alternativas: [
      { texto: 'R$ 0,01, R$ 0,05, R$ 0,10, R$ 0,25, R$ 0,50 e R$ 1,00', correta: true, explicacao: 'Isso! São as moedas de 1, 5, 10, 25 e 50 centavos e a moeda de 1 real!' },
      { texto: 'R$ 2,00, R$ 5,00 e R$ 10,00', correta: false, explicacao: 'Essas são CÉDULAS (notas) de dinheiro, não moedas! As moedas vão até R$ 1,00.' },
      { texto: 'Só a moeda de R$ 1,00', correta: false, explicacao: 'Tem mais do que essa! Também existem moedas de 1, 5, 10, 25 e 50 centavos.' }
    ]
  },
  {
    id: 5, tipo: 'sistema_monetario',
    q: '💵 Quais são as CÉDULAS (notas) que existem no Brasil?',
    alternativas: [
      { texto: 'R$ 2, R$ 5, R$ 10, R$ 20, R$ 50, R$ 100 e R$ 200', correta: true, explicacao: 'Isso! São as sete cédulas em circulação no Brasil!' },
      { texto: 'R$ 1, R$ 2 e R$ 3', correta: false, explicacao: 'Não existem notas de 1 ou 3 reais! As cédulas são de 2, 5, 10, 20, 50, 100 e 200 reais.' },
      { texto: 'R$ 5, R$ 10 e R$ 15', correta: false, explicacao: 'Não existe nota de R$ 15! As cédulas são de 2, 5, 10, 20, 50, 100 e 200 reais.' }
    ]
  },
  {
    id: 6, tipo: 'sistema_monetario',
    q: '🇧🇷 Em 1994 o Brasil criou uma moeda nova. Qual foi?',
    alternativas: [
      { texto: 'O real', correta: true, explicacao: 'Isso! O Plano Real entrou em vigor em 1994 e criou o REAL, que é a moeda até hoje!' },
      { texto: 'O cruzeiro novo', correta: false, explicacao: 'O cruzeiro novo veio antes (anos 70)! Em 1994 nasceu o REAL.' },
      { texto: 'O cruzado', correta: false, explicacao: 'O cruzado foi criado em 1986! Em 1994 foi criado o REAL.' }
    ]
  },
  {
    id: 7, tipo: 'sistema_monetario',
    q: '🪙 Qual é o valor de 3 moedas de R$ 0,50?',
    alternativas: [
      { texto: 'R$ 1,50', correta: true, explicacao: 'Isso! 0,50 + 0,50 + 0,50 = 1,50. Três moedas de 50 centavos valem R$ 1,50.' },
      { texto: 'R$ 0,15', correta: false, explicacao: 'R$ 0,15 seria 3 moedas de 5 centavos! Com 3 moedas de R$ 0,50 são R$ 1,50.' },
      { texto: 'R$ 3,50', correta: false, explicacao: 'Seria se cada moeda valesse mais de 1 real! 3 × 0,50 = R$ 1,50.' }
    ]
  },
  {
    id: 8, tipo: 'sistema_monetario',
    q: '🪙 4 moedas de R$ 0,25 valem quanto?',
    alternativas: [
      { texto: 'R$ 1,00', correta: true, explicacao: 'Isso! 0,25 × 4 = 1,00. Quatro moedas de 25 centavos formam 1 real!' },
      { texto: 'R$ 0,50', correta: false, explicacao: 'R$ 0,50 seria 2 moedas de 25 centavos! Com 4 moedas são R$ 1,00.' },
      { texto: 'R$ 4,00', correta: false, explicacao: 'Seria se cada moeda valesse 1 real! 4 × 0,25 = R$ 1,00.' }
    ]
  },
  {
    id: 9, tipo: 'sistema_monetario',
    q: '⚖️ Qual é o maior valor: R$ 19,90 ou R$ 20,05?',
    alternativas: [
      { texto: 'R$ 20,05', correta: true, explicacao: 'Isso! Primeiro olhamos a parte inteira: 19 reais é menos que 20 reais, então R$ 20,05 é maior.' },
      { texto: 'R$ 19,90', correta: false, explicacao: 'R$ 19,90 tem 19 reais, e R$ 20,05 tem 20 reais. Então R$ 20,05 é maior!' },
      { texto: 'São iguais', correta: false, explicacao: 'Não são! 19 reais é menos que 20 reais: o maior valor é R$ 20,05.' }
    ]
  },
  {
    id: 10, tipo: 'sistema_monetario',
    q: '💸 Ana tinha R$ 27,50 e gastou R$ 8,00. Quanto sobrou?',
    alternativas: [
      { texto: 'R$ 19,50', correta: true, explicacao: 'Isso! 27,50 − 8,00 = 19,50. Assim é que se calcula o troco!' },
      { texto: 'R$ 35,50', correta: false, explicacao: 'Isso seria somar! Para saber quanto SOBROU, subtraímos: 27,50 − 8,00 = R$ 19,50.' },
      { texto: 'R$ 19,05', correta: false, explicacao: 'Cuidado com o alinhamento! 27,50 − 8,00 = 19,50 (não 19,05).' }
    ]
  },
  {
    id: 11, tipo: 'sistema_monetario',
    q: '🔢 O que significa R$ 1.500,00?',
    alternativas: [
      { texto: 'Mil e quinhentos reais', correta: true, explicacao: 'Isso! O ponto separa os milhares: R$ 1.500,00 é mil e quinhentos reais.' },
      { texto: 'Um real e cinquenta centavos', correta: false, explicacao: 'Isso seria R$ 1,50! Com ponto de milhar, R$ 1.500,00 é mil e quinhentos reais.' },
      { texto: 'Quinze reais', correta: false, explicacao: 'Quinze reais é R$ 15,00. R$ 1.500,00 é mil e quinhentos reais!' }
    ]
  },
  {
    id: 12, tipo: 'sistema_monetario',
    q: '🧾 Lucas pagou R$ 8,00 numa compra de R$ 6,50. Qual foi o troco?',
    alternativas: [
      { texto: 'R$ 1,50', correta: true, explicacao: 'Isso! 8,00 − 6,50 = 1,50. Esse dinheiro que sobra é o troco!' },
      { texto: 'R$ 0,50', correta: false, explicacao: 'Faltou a parcela dos 50 centavos! 8,00 − 6,50 = R$ 1,50.' },
      { texto: 'R$ 2,50', correta: false, explicacao: 'Seria 8,00 − 5,50. Como a compra foi R$ 6,50, o troco é R$ 1,50.' }
    ]
  },
  // ===== OPERAÇÕES COM DECIMAIS (13-24) =====
  {
    id: 13, tipo: 'operacoes_decimais',
    q: '➕ Quanto é R$ 12,50 + R$ 7,30?',
    alternativas: [
      { texto: 'R$ 19,80', correta: true, explicacao: 'Isso! Alinhando as vírgulas: 12,50 + 7,30 = 19,80.' },
      { texto: 'R$ 19,30', correta: false, explicacao: 'Seria 12,00 + 7,30! Com os centavos: 12,50 + 7,30 = R$ 19,80.' },
      { texto: 'R$ 20,80', correta: false, explicacao: 'Seria 12,50 + 8,30! O resultado certo é R$ 19,80.' }
    ]
  },
  {
    id: 14, tipo: 'operacoes_decimais',
    q: '➖ Quanto é R$ 20,00 − R$ 8,35?',
    alternativas: [
      { texto: 'R$ 11,65', correta: true, explicacao: 'Isso! 20,00 − 8,35 = 11,65. Assim calculamos o troco do dia a dia.' },
      { texto: 'R$ 12,65', correta: false, explicacao: 'Seria 20,00 − 7,35! O resultado certo é R$ 11,65.' },
      { texto: 'R$ 11,25', correta: false, explicacao: 'Cuidado nos centavos: 20,00 − 8,35 = 11,65 (não 11,25).' }
    ]
  },
  {
    id: 15, tipo: 'operacoes_decimais',
    q: '🧩 Quanto é R$ 4,50 + R$ 3,00?',
    alternativas: [
      { texto: 'R$ 7,50', correta: true, explicacao: 'Isso! Escrevemos 4,50 + 3,00 (com o zero para alinhar a vírgula) = R$ 7,50.' },
      { texto: 'R$ 7,05', correta: false, explicacao: 'Seria 4,05 + 3,00! O resultado certo é R$ 7,50.' },
      { texto: 'R$ 8,50', correta: false, explicacao: 'Seria 5,50 + 3,00! 4,50 + 3,00 = R$ 7,50.' }
    ]
  },
  {
    id: 16, tipo: 'operacoes_decimais',
    q: '🛒 Um caderno custa R$ 2,50. Quanto custam 3 cadernos?',
    alternativas: [
      { texto: 'R$ 7,50', correta: true, explicacao: 'Isso! 2,50 × 3 = 7,50. Multipliquei o preço pela quantidade!' },
      { texto: 'R$ 6,50', correta: false, explicacao: 'Seria 2,50 + 2,50 + 1,50! Multiplicando: 2,50 × 3 = R$ 7,50.' },
      { texto: 'R$ 2,75', correta: false, explicacao: 'Isso é dividir por 10! Para 3 cadernos: 2,50 × 3 = R$ 7,50.' }
    ]
  },
  {
    id: 17, tipo: 'operacoes_decimais',
    q: '🍫 Três amigos dividiram R$ 12,00 igualmente. Quanto ficou para cada um?',
    alternativas: [
      { texto: 'R$ 4,00', correta: true, explicacao: 'Isso! 12,00 ÷ 3 = 4,00. Cada amigo ficou com R$ 4,00!' },
      { texto: 'R$ 3,60', correta: false, explicacao: 'Seria 12,00 ÷ 3,33! 12,00 ÷ 3 = R$ 4,00 para cada um.' },
      { texto: 'R$ 4,30', correta: false, explicacao: 'Seria 13,00 − 8,70! A divisão correta é 12,00 ÷ 3 = R$ 4,00.' }
    ]
  },
  {
    id: 18, tipo: 'operacoes_decimais',
    q: '💡 Como dividir R$ 4,50 igualmente entre 3 pessoas?',
    alternativas: [
      { texto: 'Transformar em centavos: 450 ÷ 3 = 150 centavos = R$ 1,50', correta: true, explicacao: 'Isso! A estratégia dos centavos resolve: 450 centavos ÷ 3 = 150 centavos = R$ 1,50 para cada uma.' },
      { texto: 'Dividir só o 4 por 3 e esquecer os centavos', correta: false, explicacao: 'Assim o resultado fica errado! Transforme em centavos: 450 ÷ 3 = 150 = R$ 1,50.' },
      { texto: 'Dividir 4,5 por 3 e arredondar para 1', correta: false, explicacao: 'Arredondar perde dinheiro! O certo é 450 centavos ÷ 3 = 150 centavos = R$ 1,50.' }
    ]
  },
  {
    id: 19, tipo: 'operacoes_decimais',
    q: '🥣 Uma caixa de cereal custa R$ 3,50. Quanto custam 4 caixas?',
    alternativas: [
      { texto: 'R$ 14,00', correta: true, explicacao: 'Isso! 3,50 × 4 = 14,00. Preço × quantidade = quanto vou gastar.' },
      { texto: 'R$ 12,50', correta: false, explicacao: 'Seria 3,50 + 3,50 + 3,50 + 2,00! Multiplicando: 3,50 × 4 = R$ 14,00.' },
      { texto: 'R$ 7,00', correta: false, explicacao: 'Isso seria o dobro (2 caixas)! Para 4 caixas: 3,50 × 4 = R$ 14,00.' }
    ]
  },
  {
    id: 20, tipo: 'operacoes_decimais',
    q: '👛 Joana tinha R$ 25,00 e gastou R$ 16,70. Quanto sobrou?',
    alternativas: [
      { texto: 'R$ 8,30', correta: true, explicacao: 'Isso! 25,00 − 16,70 = 8,30.' },
      { texto: 'R$ 9,30', correta: false, explicacao: 'Seria 25,00 − 15,70! O resultado certo é R$ 8,30.' },
      { texto: 'R$ 8,70', correta: false, explicacao: 'Cuidado nos centavos: 25,00 − 16,70 = 8,30 (não 8,70).' }
    ]
  },
  {
    id: 21, tipo: 'operacoes_decimais',
    q: '📐 O que devemos fazer primeiro para somar 4,5 + 3?',
    alternativas: [
      { texto: 'Completar com zeros e alinhar as vírgulas (4,50 + 3,00)', correta: true, explicacao: 'Isso! Alinhar as vírgulas garante o resultado certo: 4,50 + 3,00 = 7,50.' },
      { texto: 'Somar só os números inteiros (4 + 3)', correta: false, explicacao: 'Faltam os centavos! Escreva 4,50 + 3,00 = R$ 7,50.' },
      { texto: 'Trocar a vírgula por ponto', correta: false, explicacao: 'No Brasil a vírgula separa os centavos! Alinhe: 4,50 + 3,00 = 7,50.' }
    ]
  },
  {
    id: 22, tipo: 'operacoes_decimais',
    q: '📝 Quanto vale 10,25 + 3,7?',
    alternativas: [
      { texto: '13,95', correta: true, explicacao: 'Isso! 3,7 vira 3,70 e 10,25 + 3,70 = 13,95.' },
      { texto: '13,75', correta: false, explicacao: 'Seria 10,05 + 3,70! O resultado certo é 13,95.' },
      { texto: '14,25', correta: false, explicacao: 'Seria 10,55 + 3,70! 10,25 + 3,70 = 13,95.' }
    ]
  },
  {
    id: 23, tipo: 'operacoes_decimais',
    q: '🧾 Quanto vale 9,9 − 4,35?',
    alternativas: [
      { texto: '5,55', correta: true, explicacao: 'Isso! 9,9 vira 9,90 e 9,90 − 4,35 = 5,55.' },
      { texto: '5,65', correta: false, explicacao: 'Seria 10,00 − 4,35! 9,90 − 4,35 = 5,55.' },
      { texto: '5,45', correta: false, explicacao: 'Cuidado nos centavos! 9,90 − 4,35 = 5,55 (não 5,45).' }
    ]
  },
  {
    id: 24, tipo: 'operacoes_decimais',
    q: '🪙 Quanto é R$ 0,50 × 8?',
    alternativas: [
      { texto: 'R$ 4,00', correta: true, explicacao: 'Isso! 0,50 × 8 = 4,00. Oito moedas de 50 centavos formam 4 reais!' },
      { texto: 'R$ 8,50', correta: false, explicacao: 'Seria 0,50 + 8,00! Multiplicando: 0,50 × 8 = R$ 4,00.' },
      { texto: 'R$ 0,08', correta: false, explicacao: 'Isso é trocar os fatores! O resultado é R$ 4,00.' }
    ]
  },
  // ===== COMPARTILHAR, DIVIDIR, REPARTIR (25-36) =====
  {
    id: 25, tipo: 'compartilhar',
    q: '🤝 O que significa DIVIDIR?',
    alternativas: [
      { texto: 'Repartir em partes iguais', correta: true, explicacao: 'Isso! Dividir é repartir a mesma quantidade em partes iguais.' },
      { texto: 'Multiplicar', correta: false, explicacao: 'Multiplicar é somar o mesmo número várias vezes! Dividir é repartir em partes iguais.' },
      { texto: 'Somar sempre o mesmo número', correta: false, explicacao: 'Isso é multiplicar! Dividir é repartir a quantidade em partes iguais.' }
    ]
  },
  {
    id: 26, tipo: 'compartilhar',
    q: '🍬 24 balas foram divididas igualmente entre 6 crianças. Quantas balas cada uma recebeu?',
    alternativas: [
      { texto: '4 balas', correta: true, explicacao: 'Isso! 24 ÷ 6 = 4. Cada criança recebeu 4 balas.' },
      { texto: '3 balas', correta: false, explicacao: 'Seria 18 ÷ 6! Com 24 balas são 4 para cada uma.' },
      { texto: '6 balas', correta: false, explicacao: 'Seria o número de crianças! Cada uma recebeu 4 balas (24 ÷ 6 = 4).' }
    ]
  },
  {
    id: 27, tipo: 'compartilhar',
    q: '🍫 25 balas divididas entre 4 crianças: cada uma recebe 6 balas. Quantas sobram?',
    alternativas: [
      { texto: '1 bala', correta: true, explicacao: 'Isso! 6 × 4 = 24 e sobra 1 bala. Essa sobra é o RESTO da divisão.' },
      { texto: '2 balas', correta: false, explicacao: 'Seria se cada uma recebesse 5! Com 6 cada: 6 × 4 = 24, sobra 1 bala.' },
      { texto: '4 balas', correta: false, explicacao: 'Seria uma bala para cada criança! Como cada uma recebeu 6, sobra apenas 1 bala.' }
    ]
  },
  {
    id: 28, tipo: 'compartilhar',
    q: '📖 Na conta 24 ÷ 6 = 4, como se chama o número 4?',
    alternativas: [
      { texto: 'Quociente', correta: true, explicacao: 'Isso! O dividendo é o 24, o divisor é o 6 e o resultado (4) é o QUOCIENTE.' },
      { texto: 'Dividendo', correta: false, explicacao: 'O dividendo é o 24, o número que vai ser dividido! O 4 é o QUOCIENTE.' },
      { texto: 'Divisor', correta: false, explicacao: 'O divisor é o 6, por onde dividimos! O resultado 4 chama-se QUOCIENTE.' }
    ]
  },
  {
    id: 29, tipo: 'compartilhar',
    q: '🍫 18 chocolates para 3 crianças, igualmente. Quantos chocolates cada uma recebe?',
    alternativas: [
      { texto: '6 chocolates', correta: true, explicacao: 'Isso! 18 ÷ 3 = 6. Cada criança recebe 6 chocolates.' },
      { texto: '3 chocolates', correta: false, explicacao: 'Seria 9 ÷ 3! Com 18 chocolates são 6 para cada uma.' },
      { texto: '5 chocolates', correta: false, explicacao: 'Seria 15 ÷ 3! 18 ÷ 3 = 6 chocolates para cada criança.' }
    ]
  },
  {
    id: 30, tipo: 'compartilhar',
    q: '🔢 Qual é o resto da divisão 47 ÷ 5?',
    alternativas: [
      { texto: '2', correta: true, explicacao: 'Isso! 5 × 9 = 45 e 47 − 45 = 2. Então 47 ÷ 5 = 9 e sobra 2.' },
      { texto: '5', correta: false, explicacao: 'O resto é sempre MENOR que o divisor! 5 × 9 = 45, então sobra 2.' },
      { texto: '7', correta: false, explicacao: 'Não dá para sobrar 7! 5 × 9 = 45 e sobra 2 (o resto é menor que 5).' }
    ]
  },
  {
    id: 31, tipo: 'compartilhar',
    q: '📏 Qual é a relação entre o RESTO e o DIVISOR?',
    alternativas: [
      { texto: 'O resto é sempre menor que o divisor', correta: true, explicacao: 'Isso! O resto sempre é menor que o divisor: em 25 ÷ 4, o resto 1 é menor que 4.' },
      { texto: 'O resto é sempre igual ao divisor', correta: false, explicacao: 'Nunca! Se o resto fosse igual ao divisor, dava para dividir mais um pouco. O resto é MENOR.' },
      { texto: 'O resto é sempre maior que o divisor', correta: false, explicacao: 'Ao contrário! Se o resto fosse maior, caberiam mais partes: o resto é sempre MENOR que o divisor.' }
    ]
  },
  {
    id: 32, tipo: 'compartilhar',
    q: '🍕 Uma pizza foi dividida em 8 partes iguais e Liz comeu 3. Que fração da pizza ela comeu?',
    alternativas: [
      { texto: '3/8', correta: true, explicacao: 'Isso! 3 partes comidas de um total de 8 partes iguais: 3/8 da pizza.' },
      { texto: '8/3', correta: false, explicacao: 'O inverso! Foram 3 partes de 8: a fração é 3/8.' },
      { texto: '1/3', correta: false, explicacao: 'Seria se o total fosse 3! Como a pizza tem 8 partes, Liz comeu 3/8.' }
    ]
  },
  {
    id: 33, tipo: 'compartilhar',
    q: '🍕 Uma pizza de 8 pedaços foi repartida igualmente entre 4 amigos. Quantos pedaços cada um recebe?',
    alternativas: [
      { texto: '2 pedaços', correta: true, explicacao: 'Isso! 8 ÷ 4 = 2. Cada amigo recebeu 2 pedaços (metade da pizza: 1/2).' },
      { texto: '4 pedaços', correta: false, explicacao: 'Seria 16 pedaços! Com 8 pedaços, cada um recebe 2 (8 ÷ 4 = 2).' },
      { texto: '8 pedaços', correta: false, explicacao: 'Seria se cada um ficasse com a pizza inteira! Cada amigo recebeu 2 pedaços.' }
    ]
  },
  {
    id: 34, tipo: 'compartilhar',
    q: '🧠 Qual destas quantidades pode ser escrita como fração (ou seja, é um número racional)?',
    alternativas: [
      { texto: '0,5', correta: true, explicacao: 'Isso! 0,5 = 5/10 = 1/2. Todo decimal pode ser escrito como fração.' },
      { texto: 'A cor azul do céu', correta: false, explicacao: 'Cor não é número! Só as quantidades numéricas podem virar fração.' },
      { texto: 'A saudade da vovó', correta: false, explicacao: 'Sentimento não é número! Apenas quantidades como 0,5, 1/2 e 3 são racionais.' }
    ]
  },
  {
    id: 35, tipo: 'compartilhar',
    q: '✏️ Como o número 2 pode ser escrito na forma de fração?',
    alternativas: [
      { texto: '2/1', correta: true, explicacao: 'Isso! 2 ÷ 1 = 2, então 2 = 2/1. Os números inteiros também são racionais!' },
      { texto: '1/2', correta: false, explicacao: '1/2 é a metade! Para escrever o 2 como fração usamos 2/1.' },
      { texto: '2/2', correta: false, explicacao: '2/2 vale 1! Para escrever 2 como fração, usamos 2/1.' }
    ]
  },
  {
    id: 36, tipo: 'compartilhar',
    q: '➗ "Meio" corresponde a qual fração?',
    alternativas: [
      { texto: '1/2', correta: true, explicacao: 'Isso! Dividir o todo em 2 partes iguais e pegar 1 é a metade: 1/2.' },
      { texto: '1/4', correta: false, explicacao: '1/4 é um quarto! A metade é 1/2 (divida o todo em 2 partes iguais).' },
      { texto: '2/1', correta: false, explicacao: '2/1 vale 2! A metade de um todo é 1/2.' }
    ]
  },
  // ===== REPRESENTAÇÕES DOS NÚMEROS RACIONAIS (37-48) =====
  {
    id: 37, tipo: 'representacoes',
    q: '🔢 Na fração 3/4, o número de baixo (o denominador) representa:',
    alternativas: [
      { texto: 'Em quantas partes iguais o todo foi dividido', correta: true, explicacao: 'Isso! O denominador 4 diz que o todo foi dividido em 4 partes iguais.' },
      { texto: 'Quantas partes foram tomadas', correta: false, explicacao: 'Essas são as 3 partes tomadas (o numerador)! O denominador 4 é o total de partes iguais.' },
      { texto: 'As partes que sobraram', correta: false, explicacao: 'Não! Em 3/4, 3 partes foram tomadas de um total de 4 partes iguais.' }
    ]
  },
  {
    id: 38, tipo: 'representacoes',
    q: '🔢 Na fração 3/4, o número de cima (o numerador) representa:',
    alternativas: [
      { texto: 'Quantas partes foram tomadas', correta: true, explicacao: 'Isso! O numerador 3 diz quantas das 4 partes iguais foram tomadas.' },
      { texto: 'O total de partes iguais', correta: false, explicacao: 'O total de partes é o denominador (4)! O numerador 3 são as partes tomadas.' },
      { texto: 'A parte que sobrou', correta: false, explicacao: 'A parte que sobrou seria 1/4! Em 3/4, o 3 indica as partes tomadas.' }
    ]
  },
  {
    id: 39, tipo: 'representacoes',
    q: '🗣️ Como se lê a fração 2/5?',
    alternativas: [
      { texto: 'Dois quintos', correta: true, explicacao: 'Isso! Lemos o numerador (dois) e o denominador (quintos): 2/5 = dois quintos.' },
      { texto: 'Dois meios', correta: false, explicacao: 'Dois meios é 2/2! A fração 2/5 se lê DOIS QUINTOS.' },
      { texto: 'Dois terços', correta: false, explicacao: 'Dois terços é 2/3! A fração 2/5 se lê dois quintos.' }
    ]
  },
  {
    id: 40, tipo: 'representacoes',
    q: '🟰 Qual das frações é equivalente a 1/2?',
    alternativas: [
      { texto: '2/4', correta: true, explicacao: 'Isso! 2/4 tem o dobro do numerador e do denominador: representa a mesma metade!' },
      { texto: '1/4', correta: false, explicacao: '1/4 é a quarta parte, não a metade! 1/2 = 2/4 = 4/8.' },
      { texto: '4/2', correta: false, explicacao: '4/2 vale 2! A fração equivalente a 1/2 é 2/4 (ou 3/6, 4/8).' }
    ]
  },
  {
    id: 41, tipo: 'representacoes',
    q: '🟰 3/6 é equivalente a qual fração?',
    alternativas: [
      { texto: '1/2', correta: true, explicacao: 'Isso! Dividindo numerador e denominador por 3: 3÷3 = 1 e 6÷3 = 2. Fica 1/2!' },
      { texto: '3/3', correta: false, explicacao: '3/3 vale 1! Para simplificar 3/6 dividimos os dois por 3 e chegamos a 1/2.' },
      { texto: '6/3', correta: false, explicacao: '6/3 vale 2! Simplificando 3/6 (por 3) o resultado é 1/2.' }
    ]
  },
  {
    id: 42, tipo: 'representacoes',
    q: '✂️ Simplificando a fração 4/8, chegamos a:',
    alternativas: [
      { texto: '1/2', correta: true, explicacao: 'Isso! Dividindo os dois números por 4: 4÷4 = 1 e 8÷4 = 2. A fração simplificada é 1/2.' },
      { texto: '2/4', correta: false, explicacao: '2/4 ainda pode ser simplificada! A forma mais simples de 4/8 é 1/2 (dividindo por 4).' },
      { texto: '4/4', correta: false, explicacao: 'Isso vale 1! Simplificando 4/8 (por 4), obtemos 1/2.' }
    ]
  },
  {
    id: 43, tipo: 'representacoes',
    q: '📦 A fração 10/100 corresponde a:',
    alternativas: [
      { texto: '1/10', correta: true, explicacao: 'Isso! Dividindo por 10: 10÷10 = 1 e 100÷10 = 10. Simplificando, 1/10.' },
      { texto: '1/100', correta: false, explicacao: '1/100 é a centésima parte! 10/100 simplificado (dividindo por 10) é 1/10.' },
      { texto: '10/1', correta: false, explicacao: 'Isso vale 10! 10/100 simplificado é 1/10 (a décima parte).' }
    ]
  },
  {
    id: 44, tipo: 'representacoes',
    q: '🔼 A fração 5/3 é maior que 1. Como pode ser escrita?',
    alternativas: [
      { texto: '1 e 2/3 (um e dois terços)', correta: true, explicacao: 'Isso! 5/3 = 3/3 + 2/3 = 1 e 2/3. É o chamado número misto.' },
      { texto: '1 e 3/2', correta: false, explicacao: 'Isso passa de 1! O certo é 1 e 2/3 (pois 5 = 3 + 2 e o denominador continua 3).' },
      { texto: '2 e 1/3', correta: false, explicacao: '2 e 1/3 vale 7/3! Como 5 = 3 + 2, o misto é 1 e 2/3.' }
    ]
  },
  {
    id: 45, tipo: 'representacoes',
    q: '🍫 O número misto 1 e 1/2 (um e meio) é igual a:',
    alternativas: [
      { texto: '3/2', correta: true, explicacao: 'Isso! 1 e 1/2 = 2/2 + 1/2 = 3/2. E 3/2 = 1,5 em decimal.' },
      { texto: '1/2', correta: false, explicacao: '1/2 é só a metade! Um e meio é 3/2 (ou 1,5).' },
      { texto: '2/1', correta: false, explicacao: '2/1 vale 2! Um e meio é 3/2 = 1,5.' }
    ]
  },
  {
    id: 46, tipo: 'representacoes',
    q: '🥧 Um círculo é dividido em 4 partes iguais e 3 partes são pintadas. Que fração é representada?',
    alternativas: [
      { texto: '3/4', correta: true, explicacao: 'Isso! 3 partes pintadas de um total de 4 partes iguais: 3/4.' },
      { texto: '4/3', correta: false, explicacao: 'O inverso! Foram pintadas 3 de 4 partes: a fração é 3/4.' },
      { texto: '1/4', correta: false, explicacao: '1/4 é a parte NÃO pintada! Como 3 partes foram pintadas, é 3/4.' }
    ]
  },
  {
    id: 47, tipo: 'representacoes',
    q: '📏 Dividimos o intervalo de 0 a 1 em 4 partes iguais. Onde fica a fração 3/4?',
    alternativas: [
      { texto: 'No terceiro ponto de marcação a partir do zero', correta: true, explicacao: 'Isso! Cada parte vale 1/4, então 3/4 fica no terceiro ponto depois do zero.' },
      { texto: 'No meio do intervalo', correta: false, explicacao: 'O meio é 1/2! 3/4 fica no terceiro ponto de marcação.' },
      { texto: 'No primeiro ponto depois do zero', correta: false, explicacao: 'O primeiro ponto é 1/4! 3/4 é o terceiro ponto de marcação.' }
    ]
  },
  {
    id: 48, tipo: 'representacoes',
    q: '🔗 O número 1,5 pode ser escrito como fração. Qual?',
    alternativas: [
      { texto: '15/10 (ou 3/2)', correta: true, explicacao: 'Isso! 1,5 tem 1 casa depois da vírgula, então o denominador é 10: 15/10, que simplificado é 3/2.' },
      { texto: '1/5', correta: false, explicacao: '1/5 vale 0,2! 1,5 = 15/10 = 3/2 (ou 1 e 1/2).' },
      { texto: '5/1', correta: false, explicacao: '5/1 vale 5! 1,5 escrito como fração é 15/10 = 3/2.' }
    ]
  },
  // ===== FRAÇÃO DE QUANTIDADES (49-60) =====
  {
    id: 49, tipo: 'fracao_quantidades',
    q: '🍬 Quanto é 1/4 de 20 balas?',
    alternativas: [
      { texto: '5 balas', correta: true, explicacao: 'Isso! 20 ÷ 4 = 5. Cada uma recebe uma quarta parte: 5 balas.' },
      { texto: '20 balas', correta: false, explicacao: 'Isso é o todo! Para achar 1/4, dividimos: 20 ÷ 4 = 5 balas.' },
      { texto: '80 balas', correta: false, explicacao: 'Isso é 20 × 4! Para a fração de uma quantidade dividimos pelo denominador: 20 ÷ 4 = 5.' }
    ]
  },
  {
    id: 50, tipo: 'fracao_quantidades',
    q: '🍬 Quanto é 3/4 de 20 balas?',
    alternativas: [
      { texto: '15 balas', correta: true, explicacao: 'Isso! 20 ÷ 4 = 5 e 5 × 3 = 15. Três quartos de 20 balas são 15.' },
      { texto: '5 balas', correta: false, explicacao: '5 é só 1/4 de 20! Para 3/4: 20 ÷ 4 = 5 e depois 5 × 3 = 15 balas.' },
      { texto: '12 balas', correta: false, explicacao: 'Seria 20 − 8! Para 3/4 dividimos e multiplicamos: 20 ÷ 4 = 5, 5 × 3 = 15.' }
    ]
  },
  {
    id: 51, tipo: 'fracao_quantidades',
    q: '🍬 Metade de 30 balas é quantas balas?',
    alternativas: [
      { texto: '15 balas', correta: true, explicacao: 'Isso! 30 ÷ 2 = 15. A metade de 30 balas são 15 balas.' },
      { texto: '30 balas', correta: false, explicacao: 'Isso é o todo! A metade é 30 ÷ 2 = 15 balas.' },
      { texto: '60 balas', correta: false, explicacao: 'Isso é o dobro! Para a metade dividimos: 30 ÷ 2 = 15 balas.' }
    ]
  },
  {
    id: 52, tipo: 'fracao_quantidades',
    q: '💰 Quanto é 1/4 de R$ 20,00?',
    alternativas: [
      { texto: 'R$ 5,00', correta: true, explicacao: 'Isso! 20 ÷ 4 = 5. Um quarto de R$ 20,00 é R$ 5,00.' },
      { texto: 'R$ 4,00', correta: false, explicacao: 'Seria 20 − 16! Para 1/4 dividimos: 20 ÷ 4 = R$ 5,00.' },
      { texto: 'R$ 20,00', correta: false, explicacao: 'Isso é o todo! 1/4 de R$ 20,00 = 20 ÷ 4 = R$ 5,00.' }
    ]
  },
  {
    id: 53, tipo: 'fracao_quantidades',
    q: '⏰ Quanto é 1/2 hora, em minutos?',
    alternativas: [
      { texto: '30 minutos', correta: true, explicacao: 'Isso! 1 hora tem 60 minutos, então a metade (1/2) é 60 ÷ 2 = 30 minutos.' },
      { texto: '15 minutos', correta: false, explicacao: '15 minutos é 1/4 de hora! A metade de 60 minutos é 30.' },
      { texto: '60 minutos', correta: false, explicacao: 'Isso é a hora inteira! 1/2 de hora são 30 minutos.' }
    ]
  },
  {
    id: 54, tipo: 'fracao_quantidades',
    q: '⏰ Quanto é 1/4 de hora, em minutos?',
    alternativas: [
      { texto: '15 minutos', correta: true, explicacao: 'Isso! 60 ÷ 4 = 15. Um quarto de hora são 15 minutos.' },
      { texto: '30 minutos', correta: false, explicacao: '30 minutos é a metade da hora! 1/4 de hora = 60 ÷ 4 = 15 minutos.' },
      { texto: '25 minutos', correta: false, explicacao: 'Não é assim que se divide uma hora! 1/4 de 60 minutos = 15 minutos.' }
    ]
  },
  {
    id: 55, tipo: 'fracao_quantidades',
    q: '⏰ Quanto é 3/4 de hora, em minutos?',
    alternativas: [
      { texto: '45 minutos', correta: true, explicacao: 'Isso! 60 ÷ 4 = 15 e 15 × 3 = 45. Três quartos de hora são 45 minutos.' },
      { texto: '30 minutos', correta: false, explicacao: '30 minutos é a metade! Para 3/4: 60 ÷ 4 = 15 e 15 × 3 = 45 minutos.' },
      { texto: '75 minutos', correta: false, explicacao: 'Passaria de 1 hora! 3/4 de 60 minutos = 45 minutos.' }
    ]
  },
  {
    id: 56, tipo: 'fracao_quantidades',
    q: '🍕 Uma pizza tem 8 pedaços. Você comeu 1/4 da pizza. Quantos pedaços comeu?',
    alternativas: [
      { texto: '2 pedaços', correta: true, explicacao: 'Isso! 8 ÷ 4 = 2. Um quarto da pizza são 2 pedaços.' },
      { texto: '4 pedaços', correta: false, explicacao: '4 pedaços é a metade (1/2)! Um quarto de 8 pedaços é 2.' },
      { texto: '8 pedaços', correta: false, explicacao: 'Isso é a pizza inteira! 1/4 de 8 pedaços = 8 ÷ 4 = 2 pedaços.' }
    ]
  },
  {
    id: 57, tipo: 'fracao_quantidades',
    q: '🛠️ Qual é o caminho certo para calcular 1/4 de 20?',
    alternativas: [
      { texto: 'Dividir 20 por 4', correta: true, explicacao: 'Isso! Para calcular a fração de uma quantidade: divide pelo denominador (20 ÷ 4 = 5) e multiplica pelo numerador.' },
      { texto: 'Multiplicar 20 por 4', correta: false, explicacao: 'Isso daria 80 (o quádruplo)! Para 1/4 dividimos: 20 ÷ 4 = 5.' },
      { texto: 'Dividir 4 por 20', correta: false, explicacao: 'Invertemos a conta! Para 1/4 de 20: 20 ÷ 4 = 5.' }
    ]
  },
  {
    id: 58, tipo: 'fracao_quantidades',
    q: '➕ Como calculamos 1/4 + 2/4?',
    alternativas: [
      { texto: 'Somamos os numeradores: 3/4', correta: true, explicacao: 'Isso! Com o mesmo denominador, somamos só os numeradores: 1 + 2 = 3, então 3/4.' },
      { texto: 'Somamos numerador e denominador: 1+2 / 4+4', correta: false, explicacao: 'Não! Com denominador igual, mantemos o 4 e somamos os numeradores: 1/4 + 2/4 = 3/4.' },
      { texto: 'Multiplicamos: 1 × 2 = 2/4', correta: false, explicacao: 'Multiplicar não serve para somar! 1/4 + 2/4 = 3/4 (mesmo denominador).' }
    ]
  },
  {
    id: 59, tipo: 'fracao_quantidades',
    q: '🍬 3/8 de 40 bombons foram distribuídos. Quantos bombons isso é?',
    alternativas: [
      { texto: '15 bombons', correta: true, explicacao: 'Isso! 40 ÷ 8 = 5 e 5 × 3 = 15 bombons.' },
      { texto: '8 bombons', correta: false, explicacao: '8 é só 1/5 de 40! Para 3/8: 40 ÷ 8 = 5 e 5 × 3 = 15.' },
      { texto: '5 bombons', correta: false, explicacao: '5 bombons é 1/8 de 40! Três oitavos são 15 bombons.' }
    ]
  },
  {
    id: 60, tipo: 'fracao_quantidades',
    q: '🍰 Quanto vale 1/2 + 1/2?',
    alternativas: [
      { texto: '1 inteiro (a pizza toda!)', correta: true, explicacao: 'Isso! 1/2 + 1/2 = 2/2 = 1. Duas metades formam um inteiro!' },
      { texto: '1/4', correta: false, explicacao: '1/4 seria se dividíssemos por 4! Somando as duas metades: 2/2 = 1 inteiro.' },
      { texto: '1/2', correta: false, explicacao: 'Falta uma metade! 1/2 + 1/2 = 2/2 = 1 inteiro.' }
    ]
  },
  // ===== REPRESENTAÇÃO DECIMAL E FRACIONÁRIA (61-72) =====
  {
    id: 61, tipo: 'decimal_fracionario',
    q: '🔢 Como escrevemos 1/2 na forma decimal?',
    alternativas: [
      { texto: '0,5', correta: true, explicacao: 'Isso! 1/2 = 5/10 = 0,5. A metade de 1 é cinco décimos!' },
      { texto: '0,2', correta: false, explicacao: '0,2 é 1/5! A metade (1/2) vale 0,5.' },
      { texto: '0,25', correta: false, explicacao: '0,25 é um quarto! 1/2 = 0,5.' }
    ]
  },
  {
    id: 62, tipo: 'decimal_fracionario',
    q: '🔢 Como escrevemos 1/4 na forma decimal?',
    alternativas: [
      { texto: '0,25', correta: true, explicacao: 'Isso! 1/4 = 25/100 = 0,25. Um quarto de 100 partes é 25.' },
      { texto: '0,5', correta: false, explicacao: '0,5 é a metade! 1/4 = 25/100 = 0,25.' },
      { texto: '0,4', correta: false, explicacao: 'Não se pega só o numerador! 1/4 = 25/100 = 0,25.' }
    ]
  },
  {
    id: 63, tipo: 'decimal_fracionario',
    q: '🔢 Como escrevemos 3/4 na forma decimal?',
    alternativas: [
      { texto: '0,75', correta: true, explicacao: 'Isso! 3/4 = 75/100 = 0,75. Três quartos de 100 partes é 75.' },
      { texto: '0,3', correta: false, explicacao: '0,3 seria 3/10! 3/4 = 75/100 = 0,75.' },
      { texto: '0,34', correta: false, explicacao: 'Mistura as casas! 3/4 = 0,75 (pois 3 × 25 = 75).' }
    ]
  },
  {
    id: 64, tipo: 'decimal_fracionario',
    q: '🔢 Como escrevemos 1/10 na forma decimal?',
    alternativas: [
      { texto: '0,1', correta: true, explicacao: 'Isso! 1/10 é a décima parte: 0,1.' },
      { texto: '0,01', correta: false, explicacao: '0,01 é 1/100 (a centésima parte)! 1/10 = 0,1.' },
      { texto: '10', correta: false, explicacao: 'Isso é o número 10! 1/10 na forma decimal é 0,1.' }
    ]
  },
  {
    id: 65, tipo: 'decimal_fracionario',
    q: '🔙 Como escrevemos 0,5 na forma de fração?',
    alternativas: [
      { texto: '5/10 (ou 1/2)', correta: true, explicacao: 'Isso! 0,5 tem 1 casa depois da vírgula, então o denominador é 10: 5/10, que simplificado é 1/2.' },
      { texto: '5/1', correta: false, explicacao: '5/1 vale 5! 0,5 = 5/10 = 1/2.' },
      { texto: '1/5', correta: false, explicacao: 'Cuidado! 1/5 vale 0,2. O decimal 0,5 é 5/10 = 1/2.' }
    ]
  },
  {
    id: 66, tipo: 'decimal_fracionario',
    q: '🔙 Como escrevemos 0,25 na forma de fração?',
    alternativas: [
      { texto: '25/100 (ou 1/4)', correta: true, explicacao: 'Isso! 0,25 tem 2 casas depois da vírgula, então o denominador é 100: 25/100 = 1/4.' },
      { texto: '2/5', correta: false, explicacao: '2/5 vale 0,4! 0,25 = 25/100 = 1/4.' },
      { texto: '1/25', correta: false, explicacao: '1/25 vale 0,04! 0,25 = 25/100 = 1/4.' }
    ]
  },
  {
    id: 67, tipo: 'decimal_fracionario',
    q: '🔙 Como escrevemos 0,75 na forma de fração?',
    alternativas: [
      { texto: '3/4', correta: true, explicacao: 'Isso! 0,75 = 75/100 e dividindo por 25 chegamos a 3/4.' },
      { texto: '7/5', correta: false, explicacao: '7/5 vale 1,4! 0,75 = 75/100 = 3/4.' },
      { texto: '75/1', correta: false, explicacao: 'Isso vale 75! 0,75 = 3/4.' }
    ]
  },
  {
    id: 68, tipo: 'decimal_fracionario',
    q: '🔙 Como escrevemos 0,1 na forma de fração?',
    alternativas: [
      { texto: '1/10', correta: true, explicacao: 'Isso! 0,1 tem 1 casa depois da vírgula: 1/10 (a décima parte).' },
      { texto: '1/100', correta: false, explicacao: '1/100 vale 0,01! 0,1 = 1/10.' },
      { texto: '10/1', correta: false, explicacao: 'Isso vale 10! 0,1 = 1/10.' }
    ]
  },
  {
    id: 69, tipo: 'decimal_fracionario',
    q: '🔙 Como escrevemos 1,5 na forma de fração?',
    alternativas: [
      { texto: '15/10 (ou 3/2)', correta: true, explicacao: 'Isso! 1,5 tem 1 casa decimal, então denominador 10: 15/10 = 3/2 = 1 e 1/2.' },
      { texto: '1/5', correta: false, explicacao: '1/5 vale 0,2! 1,5 = 15/10 = 3/2.' },
      { texto: '5/1', correta: false, explicacao: '5/1 vale 5! 1,5 escrito como fração é 15/10 = 3/2.' }
    ]
  },
  {
    id: 70, tipo: 'decimal_fracionario',
    q: '🟰 0,5 e 0,50 representam:',
    alternativas: [
      { texto: 'A mesma quantidade', correta: true, explicacao: 'Isso! 0,5 = 5/10 = 0,50 = 50/100. As duas são a mesma metade!' },
      { texto: '0,5 é maior que 0,50', correta: false, explicacao: 'São iguais! 0,5 = 0,50 = 0,500. O zero à direita não muda o valor.' },
      { texto: '0,50 é maior que 0,5', correta: false, explicacao: 'São iguais! 0,50 = 0,5 = 5/10. Nenhum é maior.' }
    ]
  },
  {
    id: 71, tipo: 'decimal_fracionario',
    q: '⚖️ Qual é o maior: 0,25 ou 0,5?',
    alternativas: [
      { texto: '0,5', correta: true, explicacao: 'Isso! 0,25 = 25/100 e 0,5 = 50/100. Como 50 > 25, 0,5 é maior.' },
      { texto: '0,25', correta: false, explicacao: 'Não! 0,25 = 25/100 é menor que 0,5 = 50/100.' },
      { texto: 'São iguais', correta: false, explicacao: 'São diferentes! 25/100 < 50/100, então 0,5 é maior.' }
    ]
  },
  {
    id: 72, tipo: 'decimal_fracionario',
    q: '🔢 Como escrevemos 1/5 na forma decimal?',
    alternativas: [
      { texto: '0,2', correta: true, explicacao: 'Isso! 1/5 = 2/10 = 0,2. Se você divide 100 em 5 partes iguais, cada parte tem 20.' },
      { texto: '0,5', correta: false, explicacao: '0,5 é 1/2! 1/5 = 2/10 = 0,2.' },
      { texto: '0,05', correta: false, explicacao: '0,05 é 1/20! 1/5 = 0,2.' }
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

// ===== JOGO DA LOJINHA (baralho sem repetição + 2 formatos + níveis) =====
const bancoJogo = [
  // --- formato escolha (contas do dia a dia) ---
  { modo: 'escolha', dica: '💰 Quanto é R$ 12,50 + R$ 7,30?', opcoes: ['R$ 19,80', 'R$ 19,30', 'R$ 20,80', 'R$ 17,80'], certa: 'R$ 19,80' },
  { modo: 'escolha', dica: '💵 Quanto é R$ 20,00 − R$ 8,35?', opcoes: ['R$ 11,65', 'R$ 12,65', 'R$ 11,35', 'R$ 10,65'], certa: 'R$ 11,65' },
  { modo: 'escolha', dica: '🛒 Um caderno custa R$ 2,50. Quanto custam 3?', opcoes: ['R$ 7,50', 'R$ 6,50', 'R$ 2,75', 'R$ 5,00'], certa: 'R$ 7,50' },
  { modo: 'escolha', dica: '🍫 R$ 4,50 ÷ 3 = ?', opcoes: ['R$ 1,50', 'R$ 1,45', 'R$ 0,15', 'R$ 4,50'], certa: 'R$ 1,50' },
  { modo: 'escolha', dica: '🪙 Quantos centavos tem 1 real?', opcoes: ['100', '10', '1.000', '50'], certa: '100' },
  { modo: 'escolha', dica: '💶 Qual é a moeda do Brasil?', opcoes: ['Real', 'Cruzeiro', 'Dólar', 'Euro'], certa: 'Real' },
  { modo: 'escolha', dica: '🧾 25,00 − 16,70 = ?', opcoes: ['8,30', '9,30', '8,70', '7,30'], certa: '8,30' },
  { modo: 'escolha', dica: '📊 10,25 + 3,7 = ?', opcoes: ['13,95', '13,75', '14,25', '12,95'], certa: '13,95' },
  { modo: 'escolha', dica: '🪙 3 moedas de R$ 0,50 valem quanto?', opcoes: ['R$ 1,50', 'R$ 0,15', 'R$ 3,50', 'R$ 1,05'], certa: 'R$ 1,50' },
  { modo: 'escolha', dica: '💸 Troco: pagou R$ 10,00 numa compra de R$ 7,30', opcoes: ['R$ 2,70', 'R$ 3,70', 'R$ 2,30', 'R$ 1,70'], certa: 'R$ 2,70' },
  { modo: 'escolha', dica: '🍕 Pizza dividida em 8 partes iguais, você comeu 3. Que fração?', opcoes: ['3/8', '8/3', '1/3', '3/5'], certa: '3/8' },
  { modo: 'escolha', dica: '🍬 24 balas ÷ 6 crianças = ?', opcoes: ['4', '3', '6', '2'], certa: '4' },
  { modo: 'escolha', dica: '➗ Na divisão 47 ÷ 5, quanto sobra?', opcoes: ['2', '5', '7', '1'], certa: '2' },
  { modo: 'escolha', dica: '🍫 25 balas ÷ 4 crianças: cada uma recebe 6. Quantas sobram?', opcoes: ['1', '2', '4', '0'], certa: '1' },
  { modo: 'escolha', dica: '🔢 1/2 em número decimal é:', opcoes: ['0,5', '0,2', '0,25', '0,12'], certa: '0,5' },
  { modo: 'escolha', dica: '🔢 3/4 em número decimal é:', opcoes: ['0,75', '0,3', '0,34', '0,43'], certa: '0,75' },
  { modo: 'escolha', dica: '🔢 1/4 em número decimal é:', opcoes: ['0,25', '0,5', '0,4', '0,2'], certa: '0,25' },
  { modo: 'escolha', dica: '🔙 0,25 escrito como fração é:', opcoes: ['1/4', '25/1', '2/5', '1/25'], certa: '1/4' },
  { modo: 'escolha', dica: '🔙 0,5 escrito como fração é:', opcoes: ['1/2', '5/1', '1/5', '0/5'], certa: '1/2' },
  { modo: 'escolha', dica: '🍕 1/4 de 20 pizzas = ?', opcoes: ['5', '20', '80', '4'], certa: '5' },
  { modo: 'escolha', dica: '🎂 3/4 de 20 = ?', opcoes: ['15', '5', '12', '18'], certa: '15' },
  { modo: 'escolha', dica: '🎁 1/4 de R$ 20,00 = ?', opcoes: ['R$ 5,00', 'R$ 4,00', 'R$ 20,00', 'R$ 10,00'], certa: 'R$ 5,00' },
  { modo: 'escolha', dica: '⏰ 1/2 hora, em minutos, é:', opcoes: ['30 min', '15 min', '60 min', '45 min'], certa: '30 min' },
  { modo: 'escolha', dica: '⏰ 3/4 de hora, em minutos, é:', opcoes: ['45 min', '30 min', '60 min', '75 min'], certa: '45 min' },
  { modo: 'escolha', dica: '📝 1/4 + 2/4 = ?', opcoes: ['3/4', '2/8', '3/8', '1/4'], certa: '3/4' },
  { modo: 'escolha', dica: '✂️ Simplificando 4/8 fica:', opcoes: ['1/2', '2/4', '4/4', '8/4'], certa: '1/2' },
  { modo: 'escolha', dica: '🟰 Qual fração é equivalente a 1/2?', opcoes: ['2/4', '1/4', '4/2', '1/3'], certa: '2/4' },
  { modo: 'escolha', dica: '🧾 Quantos centavos tem R$ 1,50?', opcoes: ['150', '15', '1.500', '50'], certa: '150' },
  { modo: 'escolha', dica: '🛒 4 caixas de cereal de R$ 3,50 custam:', opcoes: ['R$ 14,00', 'R$ 12,50', 'R$ 7,00', 'R$ 3,50'], certa: 'R$ 14,00' },
  { modo: 'escolha', dica: '🍫 3/8 de 40 bombons = ?', opcoes: ['15', '8', '5', '24'], certa: '15' },
  { modo: 'escolha', dica: '✏️ 2 escrito como fração é:', opcoes: ['2/1', '1/2', '2/2', '1/1'], certa: '2/1' },
  // --- formato verdade ou mito ---
  { modo: 'vf', frase: 'Um real é dividido em 100 centavos.', certa: true, porque: 'Verdade! 1 real = 100 centavos, e por isso a vírgula aparece nos preços! 🪙' },
  { modo: 'vf', frase: 'No Brasil usamos a vírgula para separar os centavos.', certa: true, porque: 'Verdade! Ex.: R$ 12,50 é 12 reais e 50 centavos. 🇧🇷' },
  { modo: 'vf', frase: 'R$ 1.500,00 é o mesmo que R$ 1,50.', certa: false, porque: 'Mito! O ponto separa os milhares: R$ 1.500,00 é mil e quinhentos reais! 🚫' },
  { modo: 'vf', frase: 'Ao somar decimais, precisamos alinhar as vírgulas.', certa: true, porque: 'Verdade! E completar com zeros à direita: 4,50 + 3,00 = 7,50. ➕' },
  { modo: 'vf', frase: 'Ao dividir R$ 4,50 por 3, cada um fica com R$ 1,50.', certa: true, porque: 'Verdade! 450 centavos ÷ 3 = 150 centavos = R$ 1,50! 🍫' },
  { modo: 'vf', frase: 'O resto de uma divisão é sempre menor que o divisor.', certa: true, porque: 'Verdade! Em 25 ÷ 4 o resto é 1, que é menor que 4. 📏' },
  { modo: 'vf', frase: '3/4 se lê "três quartos".', certa: true, porque: 'Verdade! Lemos o numerador (três) e o denominador (quartos). 🗣️' },
  { modo: 'vf', frase: '1/2 e 2/4 representam a mesma quantidade.', certa: true, porque: 'Verdade! São duas formas de escrever a mesma metade! 🟰' },
  { modo: 'vf', frase: 'Todo número racional pode ser escrito como uma fração.', certa: true, porque: 'Verdade! Até o 2 é 2/1 e o 0,5 é 5/10! 🧠' },
  { modo: 'vf', frase: '0,5 é maior que 0,25.', certa: true, porque: 'Verdade! 0,5 = 50/100 e 0,25 = 25/100, então 0,5 é maior. ⚖️' },
  { modo: 'vf', frase: 'Para calcular 1/4 de 20, multiplicamos 20 por 4.', certa: false, porque: 'Mito! Isso daria 80! O certo é dividir: 20 ÷ 4 = 5. 🛠️' },
  { modo: 'vf', frase: 'A fração 5/3 pode ser escrita como 1 e 2/3.', certa: true, porque: 'Verdade! 5/3 = 3/3 + 2/3 = 1 e 2/3. 🔼' },
  { modo: 'vf', frase: 'Para dividir dinheiro igualmente, uma estratégia é transformar tudo em centavos.', certa: true, porque: 'Verdade! 450 centavos ÷ 3 = 150 = R$ 1,50! 💡' },
  { modo: 'vf', frase: '0,25 e 0,250 são quantidades diferentes.', certa: false, porque: 'Mito! São iguais: 0,25 = 0,250 = 25/100. 🟰' },
  { modo: 'vf', frase: 'Existe uma cédula de R$ 200 no Brasil.', certa: true, porque: 'Verdade! As cédulas são de 2, 5, 10, 20, 50, 100 e 200 reais! 💵' },
  { modo: 'vf', frase: 'O número 0,5 corresponde a 1/2.', certa: true, porque: 'Verdade! 0,5 = 5/10 = 1/2, a metade! 🍕' },
  { modo: 'vf', frase: 'Quando dividimos 25 balas entre 4 crianças, cada uma recebe 6 balas e sobra 1.', certa: true, porque: 'Verdade! 6 × 4 = 24 e sobra 1 bala (o resto). 🍬' },
  { modo: 'vf', frase: '1 real vale 10 centavos.', certa: false, porque: 'Mito! 1 real vale 100 centavos! 🪙' }
];

const NIVEIS_JOGO = [
  '💰 Aprendiz de Troco',
  '🧮 Calculador de Centavos',
  '🍕 Fração Ninja',
  '🔄 Decimal Pro',
  '🏆 Mestre do Dinheiro'
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
  // evita repetir "Verdade!/Mito!" no texto da explicação
  const porque = item.porque.replace(/^(Verdade|Mito)!\s*/, '');
  pontuar(acertou, btn, btns, corretaTexto,
    (item.certa ? 'Verdade! ' : 'Mito! ') + porque,
    (item.certa ? '❌ Era VERDADE! ' : '❌ Era MITO! ') + porque);
}
