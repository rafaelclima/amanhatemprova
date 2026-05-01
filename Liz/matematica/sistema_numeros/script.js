// =====================================================
// BANCO DE 50 QUESTÕES - Sistemas de Numeração
// =====================================================

const bancoQuestoes = [
  // Questões 1-10: Números Romanos - Símbolos Básicos
  {
    id: 1,
    tipo: 'romano',
    q: 'Qual é o símbolo romano que representa o número 1?',
    alternativas: [
      { texto: 'I', correta: true, explicacao: 'O símbolo I representa uma unidade (1). É o mais simples dos números romanos!' },
      { texto: 'V', correta: false, explicacao: 'O V representa 5, não 1. Pense em uma mão aberta com 5 dedos!' },
      { texto: 'X', correta: false, explicacao: 'O X representa 10. É como duas mãos cruzadas ou os braços levantados!' }
    ]
  },
  {
    id: 2,
    tipo: 'romano',
    q: 'Como se escreve o número 5 em algarismos romanos?',
    alternativas: [
      { texto: 'V', correta: true, explicacao: 'O V representa 5. É o símbolo que parece uma mão aberta!' },
      { texto: 'X', correta: false, explicacao: 'O X representa 10, não 5. Vamos tentar novamente!' },
      { texto: 'L', correta: false, explicacao: 'O L representa 50. O número 5 é V!' }
    ]
  },
  {
    id: 3,
    tipo: 'romano',
    q: 'Qual símbolo romano representa o número 10?',
    alternativas: [
      { texto: 'X', correta: true, explicacao: 'O X representa 10. Parece duas mãos cruzadas!' },
      { texto: 'I', correta: false, explicacao: 'O I representa 1. O 10 é X!' },
      { texto: 'C', correta: false, explicacao: 'O C representa 100. O 10 é X!' }
    ]
  },
  {
    id: 4,
    tipo: 'romano',
    q: 'Qual é o valor do símbolo L em números romanos?',
    alternativas: [
      { texto: '50', correta: true, explicacao: 'L representa 50. Os romanos usavam este símbolo para representar 50!' },
      { texto: '5', correta: false, explicacao: '5 é representado por V. L representa 50!' },
      { texto: '100', correta: false, explicacao: '100 é representado por C. L representa 50!' }
    ]
  },
  {
    id: 5,
    tipo: 'romano',
    q: 'Qual símbolo representa 100 em números romanos?',
    alternativas: [
      { texto: 'C', correta: true, explicacao: 'C representa 100. Vem da palavra latina "centum" que significa cem!' },
      { texto: 'D', correta: false, explicacao: 'D representa 500, não 100. O símbolo para 100 é C!' },
      { texto: 'M', correta: false, explicacao: 'M representa 1000. Para 100 usamos C!' }
    ]
  },
  {
    id: 6,
    tipo: 'romano',
    q: 'Qual é o valor do símbolo D?',
    alternativas: [
      { texto: '500', correta: true, explicacao: 'D representa 500. Vem de "quinquegenti" em latim!' },
      { texto: '100', correta: false, explicacao: '100 é C. D representa 500!' },
      { texto: '1000', correta: false, explicacao: '1000 é M. D representa 500!' }
    ]
  },
  {
    id: 7,
    tipo: 'romano',
    q: 'O símbolo M representa qual número?',
    alternativas: [
      { texto: '1.000', correta: true, explicacao: 'M representa 1.000. Vem de "mille" que significa mil em latim!' },
      { texto: '500', correta: false, explicacao: '500 é D. M representa 1.000!' },
      { texto: '100', correta: false, explicacao: '100 é C. M representa 1.000!' }
    ]
  },
  {
    id: 8,
    tipo: 'romano',
    q: 'Quantos I podemos usar seguidos no máximo?',
    alternativas: [
      { texto: '3', correta: true, explicacao: 'No máximo 3 símbolos iguais podem ser usados em sequência. IIII não é usado!' },
      { texto: '5', correta: false, explicacao: 'Não podemos usar mais de 3. Para 4 usamos IV (5-1)!' },
      { texto: '10', correta: false, explanatory: 'O limite é 3. Para números maiores usamos outras regras!' }
    ]
  },
  {
    id: 9,
    tipo: 'romano',
    q: 'Qual símbolo representa o zero no sistema romano?',
    alternativas: [
      { texto: 'Não existia', correta: true, explicacao: 'Os romanos não tinham símbolo para o zero. Eles não precisavam dele!' },
      { texto: 'N', correta: false, explicacao: 'N não era usado pelos romanos para representar zero!' },
      { texto: '0', correta: false, explicacao: 'O zero (0) é um símbolo moderno. Os romanos não tinham nenhum símbolo para zero!' }
    ]
  },
  {
    id: 10,
    tipo: 'romano',
    q: 'Para escrever 4 em números romanos, qual é a forma correta?',
    alternativas: [
      { texto: 'IV', correta: true, explicacao: 'IV = 5 - 1 = 4. Quando um símbolo menor vem antes de um maior, subtraímos!' },
      { texto: 'IIII', correta: false, explicacao: 'IIII não é usado. O máximo são 3 símbolos iguais (III). Use IV para 4!' },
      { texto: 'VI', correta: false, explicacao: 'VI = 5 + 1 = 6, não 4. Para 4 use IV!' }
    ]
  },

  // Questões 11-20: Números Romanos - Regras de Soma e Subtração
  {
    id: 11,
    tipo: 'romano',
    q: 'Quanto vale VI em números romanos?',
    alternativas: [
      { texto: '6', correta: true, explicacao: 'VI = 5 + 1 = 6. Quando símbolos maiores vêm depois de menores, somamos!' },
      { texto: '4', correta: false, explicacao: '4 é IV. VI = 6 (5 + 1)!' },
      { texto: '7', correta: false, explicacao: 'VII = 7. VI = 6!' }
    ]
  },
  {
    id: 12,
    tipo: 'romano',
    q: 'Qual é o valor de XI?',
    alternativas: [
      { texto: '11', correta: true, explicacao: 'XI = 10 + 1 = 11. Simples, não é?' },
      { texto: '9', correta: false, explicacao: '9 é IX. XI = 11 (10 + 1)!' },
      { texto: '6', correta: false, explicacao: '6 é VI. XI = 11!' }
    ]
  },
  {
    id: 13,
    tipo: 'romano',
    q: 'Quanto vale IX?',
    alternativas: [
      { texto: '9', correta: true, explicacao: 'IX = 10 - 1 = 9. O I (1) vem antes do X (10), então subtraímos!' },
      { texto: '11', correta: false, explicacao: '11 é XI. IX = 9 (10 - 1)!' },
      { texto: '8', correta: false, explicacao: '8 é VIII. IX = 9!' }
    ]
  },
  {
    id: 14,
    tipo: 'romano',
    q: 'Qual é o valor de XIV?',
    alternativas: [
      { texto: '14', correta: true, explicacao: 'XIV = 10 + (5 - 1) = 14. Primeiro subtrai, depois soma!' },
      { texto: '15', correta: false, explicacao: '15 é XV. XIV = 14!' },
      { texto: '6', correta: false, explicacao: '6 é VI. XIV = 14!' }
    ]
  },
  {
    id: 15,
    tipo: 'romano',
    q: 'Como se escreve o número 20 em algarismos romanos?',
    alternativas: [
      { texto: 'XX', correta: true, explicacao: 'XX = 10 + 10 = 20. Dois X significa duas vezes 10!' },
      { texto: 'II', correta: false, explicacao: 'II = 2. Para 20 usamos XX!' },
      { texto: 'X', correta: false, explicacao: 'X = 10. Para 20 usamos XX (10 + 10)!' }
    ]
  },
  {
    id: 16,
    tipo: 'romano',
    q: 'Qual é o valor de XL?',
    alternativas: [
      { texto: '40', correta: true, explicacao: 'XL = 50 - 10 = 40. O X (10) vem antes do L (50), então subtraímos!' },
      { texto: '60', correta: false, explicacao: '60 é LX. XL = 40!' },
      { texto: '50', correta: false, explicacao: '50 é L. XL = 40 (50 - 10)!' }
    ]
  },
  {
    id: 17,
    tipo: 'romano',
    q: 'Quanto vale LX?',
    alternativas: [
      { texto: '60', correta: true, explicacao: 'LX = 50 + 10 = 60. O X vem depois de L, então somamos!' },
      { texto: '40', correta: false, explicacao: '40 é XL. LX = 60!' },
      { texto: '15', correta: false, explicacao: '15 é XV. LX = 60!' }
    ]
  },
  {
    id: 18,
    tipo: 'romano',
    q: 'Como se escreve 90 em números romanos?',
    alternativas: [
      { texto: 'XC', correta: true, explicacao: 'XC = 100 - 10 = 90. O X vem antes do C, então subtraímos!' },
      { texto: 'C', correta: false, explicacao: 'C = 100. Para 90 usamos XC!' },
      { texto: 'L', correta: false, explanatory: 'L = 50. Para 90 usamos XC (100 - 10)!' }
    ]
  },
  {
    id: 19,
    tipo: 'romano',
    q: 'Qual é o valor de CD?',
    alternativas: [
      { texto: '400', correta: true, explicacao: 'CD = 500 - 100 = 400. O C vem antes do D, então subtraímos!' },
      { texto: '600', correta: false, explicacao: '600 é DC. CD = 400!' },
      { texto: '100', correta: false, explicacao: '100 é C. CD = 400 (500 - 100)!' }
    ]
  },
  {
    id: 20,
    tipo: 'romano',
    q: 'Quanto vale CM?',
    alternativas: [
      { texto: '900', correta: true, explicacao: 'CM = 1000 - 100 = 900. O C vem antes do M, então subtraímos!' },
      { texto: '100', correta: false, explicacao: '100 é C. CM = 900!' },
      { texto: '1100', correta: false, explanatory: 'CM = 900, não 1100. Para 1100 seria MC!' }
    ]
  },

  // Questões 21-30: Ordens e Classes
  {
    id: 21,
    tipo: 'ordens',
    q: 'Em 4.567, qual é a ordem do algarismo 5?',
    alternativas: [
      { texto: 'Unidades de milhar', correta: true, explicacao: 'O 5 está na posição do milhar (5 × 1000 = 5.000). É a 4ª ordem da direita!' },
      { texto: 'Centenas', correta: false, explicacao: 'O 5 está na posição do milhar. As centenas são a 3ª ordem!' },
      { texto: 'Dezenas', correta: false, explicacao: 'O 5 está na posição do milhar. As dezenas são a 2ª ordem!' }
    ]
  },
  {
    id: 22,
    tipo: 'ordens',
    q: 'Quantas ordens tem o número 345?',
    alternativas: [
      { texto: '3 ordens', correta: true, explicacao: '345 tem 3 algarismos, então tem 3 ordens: centenas, dezenas e unidades!' },
      { texto: '2 ordens', correta: false, explanatory: '345 tem 3 algarismos: 3, 4 e 5. São 3 ordens!' },
      { texto: '4 ordens', correta: false, explanatory: '345 só tem 3 algarismos, logo 3 ordens!' }
    ]
  },
  {
    id: 23,
    tipo: 'ordens',
    q: 'Quantas classes tem o número 1.234.567?',
    alternativas: [
      { texto: '3 classes', correta: true, explição: '1.234.567 tem: classe dos milhões (1), milhares (234) e unidades (567). São 3 classes!' },
      { texto: '2 classes', correta: false, explanatory: 'Tem 3 classes: unidades, milhares e milhões!' },
      { texto: '4 classes', correta: false, explanatory: 'Não tem 4 classes. São 3: milhões, milhares e unidades!' }
    ]
  },
  {
    id: 24,
    tipo: 'ordens',
    q: 'Em 987, qual algarismo está na ordem das centenas?',
    alternativas: [
      { texto: '9', correta: true, explicacao: 'O 9 está na primeira posição (da esquerda), que é a ordem das centenas!' },
      { texto: '8', correta: false, explanatory: '8 está na segunda posição, que é a ordem das dezenas!' },
      { texto: '7', correta: false, explanatory: '7 está na terceira posição, que é a ordem das unidades!' }
    ]
  },
  {
    id: 25,
    tipo: 'ordens',
    q: 'Qual é a maior ordem de um número de 6 algarismos?',
    alternativas: [
      { texto: 'Centenas de milhar', correta: true, explicacao: 'Em um número de 6 algarismos, a primeira posição é acentena de milhar!' },
      { texto: 'Unidades de milhar', correta: false, explanatory: 'Unidades de milhar é a 4ª ordem. A maior é a 6ª: centenas de milhar!' },
      { texto: 'Dezenas de milhar', correta: false, explanatory: 'Dezenas de milhar é a 5ª ordem. A maior é a 6ª: centenas de milhar!' }
    ]
  },
  {
    id: 26,
    tipo: 'ordens',
    q: 'A classe das unidades termina em qual ordem?',
    alternativas: [
      { texto: 'Unidades', correta: true, explicacao: 'A classe das unidades é composta por: unidades, dezenas e centenas (termina em unidades)!' },
      { texto: 'Centenas', correta: false, explanatory: 'Centenas é a primeira ordem da classe das unidades!' },
      { texto: 'Dezenas', correta: false, explanatory: 'Dezenas é a segunda ordem. A classe termina na terceira: unidades!' }
    ]
  },
  {
    id: 27,
    tipo: 'ordens',
    q: 'Quantas ordens tem a classe dos milhares?',
    alternativas: [
      { texto: '3 ordens', correta: true, explicacao: 'A classe dos milhares tem: unidades de milhar, dezenas de milhar e centenas de milhar!' },
      { texto: '2 ordens', correta: false, explanatory: 'Tem 3 ordens: unidades, dezenas e centenas de milhar!' },
      { texto: '4 ordens', correta: false, explanatory: 'Cada classe tem exatamente 3 ordens!' }
    ]
  },
  {
    id: 28,
    tipo: 'ordens',
    q: 'Em 56.789, qual algarismo está na ordem das dezenas de milhar?',
    alternativas: [
      { texto: '5', correta: true, explicacao: 'O 5 está na primeira posição (esquerda) da classe dos milhares: é a ordem das dezenas de milhar!' },
      { texto: '6', correta: false, explanatory: '6 está na segunda posição: unidades de milhar!' },
      { texto: '7', correta: false, explanatory: '7 está na terceira posição da classe das unidades!' }
    ]
  },
  {
    id: 29,
    tipo: 'ordens',
    q: 'O número 100.000 tem quantas ordens?',
    alternativas: [
      { texto: '6 ordens', correta: true, explicacao: '100.000 = 1 seguido de 5 zeros = 6 algarismos = 6 ordens!' },
      { texto: '5 ordens', correta: false, explanatory: '100.000 tem 6 algarismos (1 e cinco zeros), então 6 ordens!' },
      { texto: '7 ordens', correta: false, explanatory: '100.000 = 100 mil = 6 algarismos, não 7!' }
    ]
  },
  {
    id: 30,
    tipo: 'ordens',
    q: 'Qual é a primeira ordem da classe dos milhões?',
    alternativas: [
      { texto: 'Unidades de milhão', correta: true, explicacao: 'A classe dos milhões começa com as unidades de milhão!' },
      { texto: 'Centenas de milhão', correta: false, explanatory: 'Centenas de milhão é a 3ª ordem da classe dos milhões!' },
      { texto: 'Dezenas de milhão', correta: false, explanatory: 'Dezenas de milhão é a 2ª ordem. A primeira é unidades de milhão!' }
    ]
  },

  // Questões 31-40: Decomposição
  {
    id: 31,
    tipo: 'decomposicao',
    q: 'Na decomposição de 2.456, qual é o valor do algarismo 4?',
    alternativas: [
      { texto: '400', correta: true, explicacao: '4 está na posição das centenas: 4 × 100 = 400!' },
      { texto: '4.000', correta: false, explanatory: '4.000 seria se o 4 estivesse na posição das unidades de milhar!' },
      { texto: '40', correta: false, explanatory: '40 seria se o 4 estivesse na posição das dezenas!' }
    ]
  },
  {
    id: 32,
    tipo: 'decomposicao',
    q: 'Quanto representa o algarismo 7 no número 3.784?',
    alternativas: [
      { texto: '700', correta: true, explicacao: 'O 7 está na posição das centenas (3ª ordem): 7 × 100 = 700!' },
      { texto: '70', correta: false, explanatory: '70 seria se o 7 estivesse na posição das dezenas!' },
      { texto: '7.000', correta: false, explanatory: '7.000 seria se o 7 estivesse na posição das unidades de milhar!' }
    ]
  },
  {
    id: 33,
    tipo: 'decomposicao',
    q: 'Qual é a decomposição do número 5.608?',
    alternativas: [
      { texto: '5.000 + 600 + 8', correta: true, explicacao: '5 está no milhar (5.000), 6 nas centenas (600), 0 nas dezenas (não representa), 8 nas unidades (8)!' },
      { texto: '5.000 + 600 + 80 + 8', correta: false, explanatory: 'O zero não representa valor, então não entra na decomposição!' },
      { texto: '5.000 + 60 + 8', correta: false, explanatory: 'O 6 está na posição das centenas (600), não dezenas!' }
    ]
  },
  {
    id: 34,
    tipo: 'decomposicao',
    q: 'No número 9.876, qual algarismo representa 800?',
    alternativas: [
      { texto: '8', correta: true, explicacao: 'O 8 está na posição das centenas: 8 × 100 = 800!' },
      { texto: '9', correta: false, explanatory: '9 está na posição das unidades de milhar (9.000)!' },
      { texto: '7', correta: false, explanatory: '7 está na posição das dezenas (70)!' }
    ]
  },
  {
    id: 35,
    tipo: 'decomposicao',
    q: 'A decomposição 800 + 40 + 5 corresponde a qual número?',
    alternativas: [
      { texto: '845', correta: true, explicacao: '800 + 40 + 5 = 845. São 8 centenas, 4 dezenas e 5 unidades!' },
      { texto: '8450', correta: false, explanatory: '8450 teria 4 na posição das dezenas de milhar!' },
      { texto: '854', correta: false, explanatory: '854 seria 800 + 50 + 4!' }
    ]
  },
  {
    id: 36,
    tipo: 'decomposicao',
    q: 'Quantas dezenas tem o número 3.470?',
    alternativas: [
      { texto: '347 dezenas', correta: true, explicacao: '3.470 ÷ 10 = 347. Podemos formar 347 grupos de 10!' },
      { texto: '34 dezenas', correta: false, explanatory: '34 dezenas seria se o número fosse 340!' },
      { texto: '3470 dezenas', correta: false, explanatory: '3470 ÷ 10 = 347 dezenas!' }
    ]
  },
  {
    id: 37,
    tipo: 'decomposicao',
    q: 'O número 7.000 + 300 + 20 + 1 é igual a:',
    alternativas: [
      { texto: '7.321', correta: true, explicacao: '7.000 + 300 + 20 + 1 = 7.321. Somando tudo!' },
      { texto: '7.032', correta: false, explanatory: '7.032 teria 0 dezenas, não 20!' },
      { texto: '7.302', correta: false, explanatory: '7.302 teria 0 unidades, não 1!' }
    ]
  },
  {
    id: 38,
    tipo: 'decomposicao',
    q: 'No número 1.234, o algarismo 2 representa:',
    alternativas: [
      { texto: '200', correta: true, explicacao: 'O 2 está na posição das centenas: 2 × 100 = 200!' },
      { texto: '2.000', correta: false, explanatory: '2.000 seria se o 2 estivesse na posição das unidades de milhar!' },
      { texto: '20', correta: false, explanatory: '20 seria se o 2 estivesse na posição das dezenas!' }
    ]
  },
  {
    id: 39,
    tipo: 'decomposicao',
    q: 'Quanto vale o algarismo 5 em 5.000?',
    alternativas: [
      { texto: '5.000', correta: true, explicacao: 'O 5 está na posição das unidades de milhar: 5 × 1.000 = 5.000!' },
      { texto: '500', correta: false, explanatory: '500 seria se o 5 estivesse na posição das centenas!' },
      { texto: '5', correta: false, explanatory: '5 seria se o 5 estivesse na posição das unidades!' }
    ]
  },
  {
    id: 40,
    tipo: 'decomposicao',
    q: 'Decompondo o número 456, obtemos:',
    alternativas: [
      { texto: '400 + 50 + 6', correta: true, explicacao: '456 = 4 centenas + 5 dezenas + 6 unidades = 400 + 50 + 6!' },
      { texto: '40 + 50 + 6', correta: false, explanatory: '40 seria se o primeiro algarismo fosse 4 na posição das dezenas!' },
      { texto: '400 + 5 + 6', correta: false, explanatory: '400 + 5 + 6 = 411, não 456!' }
    ]
  },

  // Questões 41-50: Sequências e Sucessor/Antecessor
  {
    id: 41,
    tipo: 'sequencia',
    q: 'Qual é o sucessor do número 99?',
    alternativas: [
      { texto: '100', correta: true, explicacao: 'Sucessor é o número que vem depois. 99 + 1 = 100!' },
      { texto: '98', correta: false, explanatory: '98 é o antecessor (número anterior), não o sucessor!' },
      { texto: '101', correta: false, explanatory: '101 seria o sucessor de 100. O sucessor de 99 é 100!' }
    ]
  },
  {
    id: 42,
    tipo: 'sequencia',
    q: 'Qual é o antecessor do número 1.000?',
    alternativas: [
      { texto: '999', correta: true, explicacao: 'Antecessor é o número que vem antes. 1.000 - 1 = 999!' },
      { texto: '1.001', correta: false, explanatory: '1.001 é o sucessor, não o antecessor!' },
      { texto: '900', correta: false, explanatory: '900 não tem relação com 1.000. O antecessor é 999!' }
    ]
  },
  {
    id: 43,
    tipo: 'sequencia',
    q: 'Qual é o 5º número par depois de 10?',
    alternativas: [
      { texto: '20', correta: true, explicacao: 'Números pares depois de 10: 12, 14, 16, 18, 20. O 5º é 20!' },
      { texto: '18', correta: false, explanatory: '18 é o 4º número par. O 5º é 20!' },
      { texto: '22', correta: false, explanatory: '22 seria o 6º número par!' }
    ]
  },
  {
    id: 44,
    tipo: 'sequencia',
    q: 'Qual é o próximo número na sequência: 5, 10, 15, 20, ?',
    alternativas: [
      { texto: '25', correta: true, explicacao: 'A sequência aumenta de 5 em 5. 20 + 5 = 25!' },
      { texto: '30', correta: false, explanatory: '30 seria 25 + 5. O próximo é 25!' },
      { texto: '15', correta: false, explanatory: '15 já está na sequência. O próximo é 25!' }
    ]
  },
  {
    id: 45,
    tipo: 'sequencia',
    q: 'Qual é o antecessor de 500?',
    alternativas: [
      { texto: '499', correta: true, explicacao: '499 vem antes de 500. É o antecessor!' },
      { texto: '501', correta: false, explanatory: '501 vem depois de 500, é o sucessor!' },
      { texto: '400', correta: false, explanatory: '400 está muito antes. O antecessor de 500 é 499!' }
    ]
  },
  {
    id: 46,
    tipo: 'sequencia',
    q: 'Na sequência de 100 em 100: 100, 200, 300, ... qual é o 7º número?',
    alternativas: [
      { texto: '700', correta: true, explicacao: '100 × 7 = 700. O 7º número da sequência é 700!' },
      { texto: '600', correta: false, explanatory: '600 é o 6º número. O 7º é 700!' },
      { texto: '800', correta: false, explanatory: '800 é o 8º número!' }
    ]
  },
  {
    id: 47,
    tipo: 'sequencia',
    q: 'Qual é o sucessor de 2.999?',
    alternativas: [
      { texto: '3.000', correta: true, explicacao: '2.999 + 1 = 3.000. É o próximo milhar!' },
      { texto: '3.001', correta: false, explanatory: '3.001 seria o sucessor de 3.000!' },
      { texto: '2.998', correta: false, explanatory: '2.998 é o antecessor!' }
    ]
  },
  {
    id: 48,
    tipo: 'sequencia',
    q: 'A sequência decrescente 50, 45, 40, ... qual é o próximo número?',
    alternativas: [
      { texto: '35', correta: true, explicacao: 'Diminui de 5 em 5. 40 - 5 = 35!' },
      { texto: '30', correta: false, explanatory: '30 seria o 5º número. O próximo é 35!' },
      { texto: '40', correta: false, explanatory: '40 é o número atual. O próximo é 35!' }
    ]
  },
  {
    id: 49,
    tipo: 'sequencia',
    q: 'Qual é o 10º número da sequência: 2, 4, 6, 8, ...?',
    alternativas: [
      { texto: '20', correta: true, explicacao: 'Números pares: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. O 10º é 20!' },
      { texto: '18', correta: false, explanatory: '18 é o 9º número. O 10º é 20!' },
      { texto: '22', correta: false, explanatory: '22 seria o 11º número!' }
    ]
  },
  {
    id: 50,
    tipo: 'sequencia',
    q: 'Qual é o menor número de 4 algarismos?',
    alternativas: [
      { texto: '1.000', correta: true, explicacao: '1.000 é o primeiro número com 4 algarismos. Antes dele vem 999 (3 algarismos)!' },
      { texto: '999', correta: false, explanatory: '999 tem 3 algarismos, não 4!' },
      { texto: '1.001', correta: false, explanatory: '1.001 vem depois de 1.000!' }
    ]
  }
];

// Função para selecionar 10 questões aleatórias
function selecionarQuestoes() {
  const questoes = [...bancoQuestoes];
  const selecionadas = [];
  
  for (let i = 0; i < 10; i++) {
    const indice = Math.floor(Math.random() * questoes.length);
    selecionadas.push(questoes.splice(indice, 1)[0]);
  }
  
  return selecionadas;
}

let questoesQuiz = [];
let questoesSimulado = [];

// =====================================================
// NAVEGAÇÃO POR ABAS
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      document.getElementById(target).classList.add('active');
      
      if (target === 'quiz' && questoesQuiz.length === 0) {
        carregarQuiz();
      } else if (target === 'simulado' && questoesSimulado.length === 0) {
        carregarSimulado();
      } else if (target === 'gamificacao') {
        carregarJogo();
      }
    });
  });

  // Inicializar com a primeira aba
  tabBtns[0].click();
});

// =====================================================
// QUIZ - 10 QUESTÕES ALEATÓRIAS
// =====================================================
function carregarQuiz() {
  if (questoesQuiz.length === 0) {
    questoesQuiz = selecionarQuestoes();
  }
  
  const container = document.getElementById('quiz-container');
  let html = '';
  
  questoesQuiz.forEach((q, i) => {
    html += `
      <div class="questao-card" data-questao="${i}">
        <p><strong>Questão ${i + 1}:</strong> ${q.q}</p>
        <div class="alternativas-container">
          ${q.alternativas.map((alt, j) => `
            <label class="alternativa-item">
              <input type="radio" name="quiz-${i}" value="${j}" data-correta="${alt.correta}">
              <span class="alternativa-texto">${alt.texto}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

function finalizarQuiz() {
  const container = document.getElementById('quiz-container');
  const cartoes = container.querySelectorAll('.questao-card');
  let acertos = 0;
  let html = '';
  
  cartoes.forEach((cartao, i) => {
    const selecionado = cartao.querySelector(`input[name="quiz-${i}"]:checked`);
    const alternativas = cartao.querySelectorAll('.alternativa-item');
    const questao = questoesQuiz[i];
    
    alternativas.forEach((alt, j) => {
      alt.classList.remove('correta', 'incorreta');
      const input = alt.querySelector('input');
      const texto = alt.querySelector('.alternativa-texto');
      const explicacao = questao.alternativas[j].explicacao;
      
      if (questao.alternativas[j].correta) {
        alt.classList.add('correta');
        alt.innerHTML += `<div class="explicacao">✓ ${explicacao}</div>`;
      } else if (input.checked && !questao.alternativas[j].correta) {
        alt.classList.add('incorreta');
        alt.innerHTML += `<div class="explicacao">✗ ${explicacao}</div>`;
      }
    });
    
    if (selecionado && selecionado.getAttribute('data-correta') === 'true') {
      acertos++;
    }
  });
  
  const percentual = (acertos / 10) * 100;
  let mensagem = '';
  
  if (percentual === 100) {
    mensagem = '🎉 Incrível! Você acertou tudo!';
  } else if (percentual >= 70) {
    mensagem = '👍 Muito bem! Você está no caminho certo!';
  } else if (percentual >= 50) {
    mensagem = '📚 Bom esforço! Continue estudando!';
  } else {
    mensagem = '💪 Não desanime! Revise o conteúdo e tente novamente!';
  }
  
  document.getElementById('quiz-result').classList.remove('hidden');
  document.querySelector('#quiz-result .score-text').textContent = `${acertos}/10 (${percentual}%)`;
  document.querySelector('#quiz-result .message-text').textContent = mensagem;
  
  // Scroll até o resultado
  document.getElementById('quiz-result').scrollIntoView({ behavior: 'smooth' });
}

// =====================================================
// SIMULADO - 10 QUESTÕES ALEATÓRIAS
// =====================================================
function carregarSimulado() {
  if (questoesSimulado.length === 0) {
    questoesSimulado = selecionarQuestoes();
  }
  
  const container = document.getElementById('simulado-container');
  let html = '';
  
  questoesSimulado.forEach((q, i) => {
    html += `
      <div class="questao-simulado" data-questao="${i}">
        <p><strong>Questão ${i + 1}:</strong> ${q.q}</p>
        <div class="alternativas-container">
          ${q.alternativas.map((alt, j) => `
            <label class="alternativa-item">
              <input type="radio" name="simulado-${i}" value="${j}" data-correta="${alt.correta}">
              <span class="alternativa-texto">${alt.texto}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
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
      const input = alt.querySelector('input');
      const texto = alt.querySelector('.alternativa-texto');
      const explicacao = questao.alternativas[j].explicacao;
      
      if (questao.alternativas[j].correta) {
        alt.classList.add('correta');
        alt.innerHTML += `<div class="explicacao">✓ ${explicacao}</div>`;
      } else if (input.checked && !questao.alternativas[j].correta) {
        alt.classList.add('incorreta');
        alt.innerHTML += `<div class="explicacao">✗ ${explicacao}</div>`;
      }
    });
    
    if (selecionado && selecionado.getAttribute('data-correta') === 'true') {
      acertos++;
    }
  });
  
  const percentual = (acertos / 10) * 100;
  let mensagem = '';
  
  if (percentual === 100) {
    mensagem = '🏆 Excelente! Você está pronto para a prova!';
  } else if (percentual >= 70) {
    mensagem = '👏 Muito bem! Você tirou nota boa!';
  } else if (percentual >= 50) {
    mensagem = '📖 Bom trabalho! Continue estudando!';
  } else {
    mensagem = '📝 Precisa de mais atenção. Revise o conteúdo!';
  }
  
  document.getElementById('simulado-result').classList.remove('hidden');
  document.querySelector('#simulado-result .score-text').textContent = `${acertos}/10 (${percentual}%)`;
  document.querySelector('#simulado-result .message-text').textContent = mensagem;
  
  document.getElementById('simulado-result').scrollIntoView({ behavior: 'smooth' });
}

// =====================================================
// GAMIFICAÇÃO - Jogo de Associação Visual
// =====================================================
const associacoes = [
  { id: 1, esquerda: 'Egípcio', direita: 'Usava símbolos para potências de 10', iconeEsq: '🏛️' },
  { id: 2, esquerda: 'Maia', direita: 'Base 20 (usava mãos e pés)', iconeEsq: '🏺' },
  { id: 3, esquerda: 'Romano', direita: 'Usava letras do alfabeto latino', iconeEsq: '🗿' },
  { id: 4, esquerda: 'Indo-arábico', direita: 'Sistema atual com zero', iconeEsq: '📊' },
  { id: 5, esquerda: 'I (romano)', direita: 'Representa o número 1', iconeEsq: 'Ⅰ' },
  { id: 6, esquerda: 'V (romano)', direita: 'Representa o número 5', iconeEsq: 'Ⅴ' },
  { id: 7, esquerda: 'X (romano)', direita: 'Representa o número 10', iconeEsq: 'Ⅹ' },
  { id: 8, esquerda: 'Zero maia', direita: 'Uma espiral 🕸️', iconeEsq: '🕸️' }
];

let acertosJogo = 0;
let pontosJogo = 0;
let selecionadoEsquerda = null;
let selecionadoDireita = null;

function carregarJogo() {
  const container = document.getElementById('gamification-container');
  
  // Resetar contadores
  acertosJogo = 0;
  pontosJogo = 0;
  selecionadoEsquerda = null;
  selecionadoDireita = null;
  document.getElementById('acertos-jogo').textContent = '0';
  document.getElementById('pontos-jogo').textContent = '0';
  
  // Embaralhar associações
  const itens = [...associacoes].sort(() => Math.random() - 0.5);
  
  // Criar colunas
  const esquerdaItens = [...itens].sort(() => Math.random() - 0.5);
  const direitaItens = [...itens].sort(() => Math.random() - 0.5);
  
  let html = `
    <div class="jogo-associacao">
      <div class="jogo-coluna">
        <h4>Sistemas de Numeração</h4>
        <div class="jogo-itens esquerda">
          ${esquerdaItens.map(item => `
            <button class="jogo-card" data-id="${item.id}" data-lado="esquerda" data-texto="${item.esquerda}">
              <span class="jogo-icone">${item.iconeEsq}</span>
              <span>${item.esquerda}</span>
            </button>
          `).join('')}
        </div>
      </div>
      <div class="jogo-coluna">
        <h4>Descrições</h4>
        <div class="jogo-itens direita">
          ${direitaItens.map(item => `
            <button class="jogo-card" data-id="${item.id}" data-lado="direita" data-texto="${item.direita}">
              <span>${item.direita}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
    <div id="jogo-mensagem" class="jogo-mensagem">
      Clique em um item de cada lado para fazer a associação!
    </div>
  `;
  
  container.innerHTML = html;
  
  // Adicionar eventos de clique
  container.querySelectorAll('.jogo-card').forEach(card => {
    card.addEventListener('click', () => handleCardClick(card));
  });
}

function handleCardClick(card) {
  const lado = card.getAttribute('data-lado');
  const id = card.getAttribute('data-id');
  const container = document.getElementById('gamification-container');
  const mensagem = document.getElementById('jogo-mensagem');
  
  // Remover seleção anterior do mesmo lado
  container.querySelectorAll(`.jogo-card[data-lado="${lado}"]`).forEach(c => {
    c.classList.remove('selecionado');
  });
  
  // Selecionar atual
  card.classList.add('selecionado');
  
  if (lado === 'esquerda') {
    selecionadoEsquerda = id;
  } else {
    selecionadoDireita = id;
  }
  
  // Verificar se tem dois selecionados
  if (selecionadoEsquerda && selecionadoDireita) {
    // Verificar se estão corretos
    if (selecionadoEsquerda === selecionadoDireita) {
      acertosJogo++;
      pontosJogo += 100;
      
      // Marcar como correta visualmente
      container.querySelector(`.jogo-card[data-id="${selecionadoEsquerda}"][data-lado="esquerda"]`).classList.add('correta');
      container.querySelector(`.jogo-card[data-id="${selecionadoDireita}"][data-lado="direita"]`).classList.add('correta');
      container.querySelector(`.jogo-card[data-id="${selecionadoEsquerda}"][data-lado="esquerda"]`).classList.add('desabilitado');
      container.querySelector(`.jogo-card[data-id="${selecionadoDireita}"][data-lado="direita"]`).classList.add('desabilitado');
      
      mensagem.innerHTML = '✅ Correto! +100 pontos';
      mensagem.className = 'jogo-mensagem correta';
      
      // Animação de pontos
      mostrarAnimacaoPontos(100);
    } else {
      pontosJogo -= 20;
      
      // Marcar como incorreta temporariamente
      container.querySelector(`.jogo-card[data-id="${selecionadoEsquerda}"][data-lado="esquerda"]`).classList.add('incorreta');
      container.querySelector(`.jogo-card[data-id="${selecionadoDireita}"][data-lado="direita"]`).classList.add('incorreta');
      
      mensagem.innerHTML = '❌ Errou! Tente novamente (-20 pontos)';
      mensagem.className = 'jogo-mensagem incorreta';
      
      // Remover classes de erro após um tempo
      setTimeout(() => {
        container.querySelectorAll('.jogo-card').forEach(c => {
          c.classList.remove('incorreta', 'selecionado');
        });
      }, 800);
    }
    
    // Atualizar display
    document.getElementById('acertos-jogo').textContent = acertosJogo;
    document.getElementById('pontos-jogo').textContent = Math.max(0, pontosJogo);
    
    // Resetar selections
    selecionadoEsquerda = null;
    selecionadoDireita = null;
    
    // Verificar se completou o jogo
    const corretas = container.querySelectorAll('.jogo-card.correta').length;
    if (corretas === associacoes.length * 2) {
      mensagem.innerHTML = '🎉 Parabéns! Você completou todas as associações!';
      mensagem.className = 'jogo-mensagem conclusao';
    }
  }
}

function mostrarAnimacaoPontos(qtd) {
  const animacao = document.createElement('div');
  animacao.className = 'pontos-animacao';
  animacao.textContent = `+${qtd} pontos!`;
  document.body.appendChild(animacao);
  
  setTimeout(() => animacao.remove(), 1500);
}

function finalizarJogo() {
  const container = document.getElementById('gamification-container');
  const corretas = container.querySelectorAll('.jogo-card.correta').length / 2;
  const total = associacoes.length;
  const percentual = (corretas / total) * 100;
  
  document.getElementById('gamification-result').classList.remove('hidden');
  document.querySelector('#gamification-result .score-text').textContent = `${corretas}/${total} acertos (${percentual}%)`;
  
  if (percentual === 100) {
    document.querySelector('#gamification-result .message-text').textContent = '🏆 Incrível! Você acertou todas as associações!';
  } else if (percentual >= 70) {
    document.querySelector('#gamification-result .message-text').textContent = '👏 Muito bem! Você está entendendo direitinho!';
  } else if (percentual >= 50) {
    document.querySelector('#gamification-result .message-text').textContent = '👍 Bom trabalho! Continue praticando!';
  } else {
    document.querySelector('#gamification-result .message-text').textContent = '📚 Que tal tentar novamente? Você consegue!';
  }
}

// =====================================================
// BOTÕES DE RETRY
// =====================================================
document.getElementById('btnRetryQuiz').addEventListener('click', () => {
  questoesQuiz = selecionarQuestoes();
  document.getElementById('quiz-result').classList.add('hidden');
  carregarQuiz();
});

document.getElementById('btnRetrySimulado').addEventListener('click', () => {
  questoesSimulado = selecionarQuestoes();
  document.getElementById('simulado-result').classList.add('hidden');
  carregarSimulado();
});

document.getElementById('btnRetryGame').addEventListener('click', () => {
  document.getElementById('gamification-result').classList.add('hidden');
  carregarJogo();
});

// =====================================================
// ESTILOS ADICIONAIS PARA FEEDBACK
// =====================================================
const style = document.createElement('style');
style.textContent = `
  .alternativas-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }
  
  .alternativa-item {
    background: rgba(255, 255, 255, 0.08);
    padding: 12px 15px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .alternativa-item:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: var(--primary);
  }
  
  .alternativa-item input {
    margin-right: 10px;
  }
  
  .alternativa-item.correta {
    background: rgba(34, 197, 94, 0.2);
    border-color: #22c55e;
  }
  
  .alternativa-item.incorreta {
    background: rgba(239, 68, 68, 0.2);
    border-color: #ef4444;
  }
  
  .explicacao {
    margin-top: 8px;
    padding: 8px;
    border-radius: 6px;
    font-size: 0.85rem;
    display: none;
  }
  
  .alternativa-item.correta .explicacao,
  .alternativa-item.incorreta .explicacao {
    display: block;
    color: var(--text);
    background: rgba(0, 0, 0, 0.2);
  }
  
  .jogo-input {
    margin-top: 10px;
  }
  
  .feedback-jogo {
    margin-top: 10px;
    padding: 8px;
    border-radius: 6px;
    font-weight: 600;
  }
  
  .feedback-jogo.correta {
    color: #4ade80;
  }
  
  .feedback-jogo.incorreta {
    color: #f87171;
  }
`;
document.head.appendChild(style);