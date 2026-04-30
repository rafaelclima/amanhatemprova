/* ============================================================
   REVISÃO DE MATEMÁTICA — Grandezas e Medidas | 1º Ano EM
   Conteúdo pedagógico + Lógica completa
   ============================================================ */

// ============================================================
// BANCO DE QUESTÕES — QUIZ (50 questões)
// ============================================================
const bancoQuestoesQuiz = [
  // --- COMPRIMENTO (questões 1-12) ---
  {
    id: 1,
    enunciado: 'Um engenheiro precisa converter 2,5 km para metros. Qual o valor correto?',
    alternativas: [
      { texto: '25 m' },
      { texto: '250 m' },
      { texto: '2.500 m' },
      { texto: '25.000 m' },
      { texto: '250.000 m' }
    ],
    resposta: 'C',
    explicacao: 'Para converter km para m, multiplica-se por 1.000. Logo, 2,5 × 1.000 = 2.500 m.',
    explicacaoAlternativas: [
      'Incorreta: seria o valor se dividisse por 100, sem sentido aqui.',
      'Incorreta: seria 2,5 × 100, que daria 250 m — mas km → m é × 1.000.',
      'Correta: 2,5 × 1.000 = 2.500 m.',
      'Incorreta: seria 2,5 × 10.000, fator que não existe nessa conversão.',
      'Incorreta: seria 2,5 × 100.000, muito acima do correto.'
    ]
  },
  {
    id: 2,
    enunciado: 'Uma régua escolar tem 30 cm. Essa medida equivale a quantos milímetros?',
    alternativas: [
      { texto: '0,3 mm' },
      { texto: '3 mm' },
      { texto: '30 mm' },
      { texto: '300 mm' },
      { texto: '3.000 mm' }
    ],
    resposta: 'D',
    explicacao: 'Para converter cm para mm, multiplica-se por 10. Logo, 30 × 10 = 300 mm.',
    explicacaoAlternativas: [
      'Incorreta: seria 30 ÷ 100 = 0,3, que converte para metro.',
      'Incorreta: seria 30 ÷ 10 = 3, inversão da conversão.',
      'Incorreta: seria manter o valor, sem conversão.',
      'Correta: 30 × 10 = 300 mm.',
      'Incorreta: seria 30 × 100, fator de cm para metro, não para mm.'
    ]
  },
  {
    id: 3,
    enunciado: 'A distância entre duas cidades é de 120.000 m. Em quilômetros, essa distância é de:',
    alternativas: [
      { texto: '1,2 km' },
      { texto: '12 km' },
      { texto: '120 km' },
      { texto: '1.200 km' },
      { texto: '12.000 km' }
    ],
    resposta: 'C',
    explicacao: 'Para converter m para km, divide-se por 1.000. Logo, 120.000 ÷ 1.000 = 120 km.',
    explicacaoAlternativas: [
      'Incorreta: seria 120.000 ÷ 100.000 = 1,2, mas o fator é 1.000.',
      'Incorreta: seria 120.000 ÷ 10.000 = 12.',
      'Correta: 120.000 ÷ 1.000 = 120 km.',
      'Incorreta: seria 120.000 ÷ 100 = 1.200.',
      'Incorreta: seria 120.000 ÷ 10 = 12.000.'
    ]
  },
  {
    id: 4,
    enunciado: 'Um fio de cabelo tem aproximadamente 0,07 mm de espessura. Em centímetros, essa medida equivale a:',
    alternativas: [
      { texto: '0,0007 cm' },
      { texto: '0,007 cm' },
      { texto: '0,07 cm' },
      { texto: '0,7 cm' },
      { texto: '7 cm' }
    ],
    resposta: 'B',
    explicacao: 'Para converter mm para cm, divide-se por 10. Logo, 0,07 ÷ 10 = 0,007 cm.',
    explicacaoAlternativas: [
      'Incorreta: seria dividir por 100 ao invés de 10.',
      'Correta: 0,07 ÷ 10 = 0,007 cm.',
      'Incorreta: seria manter o valor sem conversão.',
      'Incorreta: seria multiplicar por 10 ao invés de dividir.',
      'Incorreta: seria multiplicar por 100.'
    ]
  },
  {
    id: 5,
    enunciado: 'Qual das alternativas apresenta a conversão correta: 1,8 m para centímetros?',
    alternativas: [
      { texto: '0,018 cm' },
      { texto: '0,18 cm' },
      { texto: '18 cm' },
      { texto: '180 cm' },
      { texto: '1.800 cm' }
    ],
    resposta: 'D',
    explicacao: '1 metro = 100 centímetros. Portanto, 1,8 × 100 = 180 cm.',
    explicacaoAlternativas: [
      'Incorreta: seria dividir por 100 (1,8 ÷ 100).',
      'Incorreta: seria dividir por 10.',
      'Incorreta: seria multiplicar por 10.',
      'Correta: 1,8 × 100 = 180 cm.',
      'Incorreta: seria multiplicar por 1.000 (confundindo com mm).'
    ]
  },
  {
    id: 6,
    enunciado: 'Uma polegada equivale a 2,54 cm. Quantos centímetros têm 5 polegadas?',
    alternativas: [
      { texto: '7,54 cm' },
      { texto: '10,16 cm' },
      { texto: '12,70 cm' },
      { texto: '15,24 cm' },
      { texto: '25,40 cm' }
    ],
    resposta: 'C',
    explicacao: '5 × 2,54 = 12,70 cm.',
    explicacaoAlternativas: [
      'Incorreta: seria 5 + 2,54.',
      'Incorreta: seria 4 × 2,54.',
      'Correta: 5 × 2,54 = 12,70 cm.',
      'Incorreta: seria 6 × 2,54.',
      'Incorreta: seria 10 × 2,54.'
    ]
  },
  {
    id: 7,
    enunciado: 'A altura de uma porta padrão é 2,10 m. Em milímetros, essa altura é:',
    alternativas: [
      { texto: '21 mm' },
      { texto: '210 mm' },
      { texto: '2.100 mm' },
      { texto: '21.000 mm' },
      { texto: '210.000 mm' }
    ],
    resposta: 'C',
    explicacao: '1 m = 1.000 mm. Portanto, 2,10 × 1.000 = 2.100 mm.',
    explicacaoAlternativas: [
      'Incorreta: seria 2,10 × 10.',
      'Incorreta: seria 2,10 × 100.',
      'Correta: 2,10 × 1.000 = 2.100 mm.',
      'Incorreta: seria 2,10 × 10.000.',
      'Incorreta: seria 2,10 × 100.000.'
    ]
  },
  {
    id: 8,
    enunciado: 'Um terreno tem 0,45 km de frente. Qual é essa medida em metros?',
    alternativas: [
      { texto: '4,5 m' },
      { texto: '45 m' },
      { texto: '450 m' },
      { texto: '4.500 m' },
      { texto: '45.000 m' }
    ],
    resposta: 'C',
    explicacao: '1 km = 1.000 m. Logo, 0,45 × 1.000 = 450 m.',
    explicacaoAlternativas: [
      'Incorreta: seria multiplicar por 10.',
      'Incorreta: seria multiplicar por 100.',
      'Correta: 0,45 × 1.000 = 450 m.',
      'Incorreta: seria multiplicar por 10.000.',
      'Incorreta: seria multiplicar por 100.000.'
    ]
  },
  {
    id: 9,
    enunciado: 'O diâmetro de uma célula é 0,000005 m. Em notação científica, esse valor é:',
    alternativas: [
      { texto: '5 × 10⁵ m' },
      { texto: '5 × 10⁴ m' },
      { texto: '5 × 10⁻⁴ m' },
      { texto: '5 × 10⁻⁵ m' },
      { texto: '5 × 10⁻⁶ m' }
    ],
    resposta: 'E',
    explicacao: '0,000005 = 5 × 10⁻⁶. A vírgula anda 6 casas para a direita, expoente negativo.',
    explicacaoAlternativas: [
      'Incorreta: expoente positivo 5.',
      'Incorreta: expoente positivo 4.',
      'Incorreta: expoente -4 (seria 0,0005).',
      'Incorreta: expoente -5 (seria 0,00005).',
      'Correta: 5 × 10⁻⁶ m.'
    ]
  },
  {
    id: 10,
    enunciado: 'A distância da Terra ao Sol é aproximadamente 150.000.000 km. Em notação científica:',
    alternativas: [
      { texto: '1,5 × 10⁶ km' },
      { texto: '1,5 × 10⁷ km' },
      { texto: '1,5 × 10⁸ km' },
      { texto: '15 × 10⁷ km' },
      { texto: '15 × 10⁶ km' }
    ],
    resposta: 'C',
    explicacao: '150.000.000 = 1,5 × 10⁸. A vírgula anda 8 casas para a esquerda.',
    explicacaoAlternativas: [
      'Incorreta: 10⁶ seria 1.500.000.',
      'Incorreta: 10⁷ seria 15.000.000.',
      'Correta: 1,5 × 10⁸ km.',
      'Incorreta: 15 × 10⁷ = 150.000.000 está correto matematicamente, mas não está na notação científica padrão (deve ser 1,5 × 10⁸).',
      'Incorreta: 15 × 10⁶ = 15.000.000.'
    ]
  },
  {
    id: 11,
    enunciado: 'Um campo de futebol tem 110 m de comprimento. Em hectômetros (hm), quanto vale?',
    alternativas: [
      { texto: '0,11 hm' },
      { texto: '1,1 hm' },
      { texto: '11 hm' },
      { texto: '110 hm' },
      { texto: '1.100 hm' }
    ],
    resposta: 'B',
    explicacao: '1 hm = 100 m. Logo, 110 ÷ 100 = 1,1 hm.',
    explicacaoAlternativas: [
      'Incorreta: seria dividir por 1.000.',
      'Correta: 110 ÷ 100 = 1,1 hm.',
      'Incorreta: seria manter o valor.',
      'Incorreta: seria multiplicar por 1.',
      'Incorreta: seria multiplicar por 10.'
    ]
  },
  {
    id: 12,
    enunciado: 'A espessura de uma folha de papel é cerca de 0,1 mm. Quantas folhas seriam necessárias para formar uma pilha de 1 cm de altura?',
    alternativas: [
      { texto: '10 folhas' },
      { texto: '50 folhas' },
      { texto: '100 folhas' },
      { texto: '500 folhas' },
      { texto: '1.000 folhas' }
    ],
    resposta: 'C',
    explicacao: '1 cm = 10 mm. Cada folha tem 0,1 mm. Logo, 10 ÷ 0,1 = 100 folhas.',
    explicacaoAlternativas: [
      'Incorreta: seria 1 ÷ 0,1 = 10 (1 mm).',
      'Incorreta: seria 5 mm.',
      'Correta: 10 mm ÷ 0,1 mm = 100 folhas.',
      'Incorreta: seria 50 mm.',
      'Incorreta: seria 100 mm = 10 cm.'
    ]
  },

  // --- MASSA (questões 13-22) ---
  {
    id: 13,
    enunciado: 'Uma pessoa comprou 2,3 kg de carne. Esse valor corresponde a quantos gramas?',
    alternativas: [
      { texto: '23 g' },
      { texto: '230 g' },
      { texto: '2.300 g' },
      { texto: '23.000 g' },
      { texto: '230.000 g' }
    ],
    resposta: 'C',
    explicacao: '1 kg = 1.000 g. Logo, 2,3 × 1.000 = 2.300 g.',
    explicacaoAlternativas: [
      'Incorreta: seria multiplicar por 10.',
      'Incorreta: seria multiplicar por 100.',
      'Correta: 2,3 × 1.000 = 2.300 g.',
      'Incorreta: seria multiplicar por 10.000.',
      'Incorreta: seria multiplicar por 100.000.'
    ]
  },
  {
    id: 14,
    enunciado: 'Um comprimido tem 500 mg de princípio ativo. Em gramas, essa quantidade é:',
    alternativas: [
      { texto: '0,005 g' },
      { texto: '0,05 g' },
      { texto: '0,5 g' },
      { texto: '5 g' },
      { texto: '50 g' }
    ],
    resposta: 'C',
    explicacao: '1 g = 1.000 mg. Logo, 500 ÷ 1.000 = 0,5 g.',
    explicacaoAlternativas: [
      'Incorreta: seria dividir por 100.000.',
      'Incorreta: seria dividir por 10.000.',
      'Correta: 500 ÷ 1.000 = 0,5 g.',
      'Incorreta: seria multiplicar por 10.',
      'Incorreta: seria multiplicar por 100.'
    ]
  },
  {
    id: 15,
    enunciado: 'Um caminhão transporta 8 toneladas de areia. Em quilogramas, são:',
    alternativas: [
      { texto: '80 kg' },
      { texto: '800 kg' },
      { texto: '8.000 kg' },
      { texto: '80.000 kg' },
      { texto: '800.000 kg' }
    ],
    resposta: 'C',
    explicacao: '1 tonelada (t) = 1.000 kg. Logo, 8 × 1.000 = 8.000 kg.',
    explicacaoAlternativas: [
      'Incorreta: seria 8 × 10.',
      'Incorreta: seria 8 × 100.',
      'Correta: 8 × 1.000 = 8.000 kg.',
      'Incorreta: seria 8 × 10.000.',
      'Incorreta: seria 8 × 100.000.'
    ]
  },
  {
    id: 16,
    enunciado: 'Uma joia tem 0,075 kg de ouro. Em miligramas, essa massa é de:',
    alternativas: [
      { texto: '75 mg' },
      { texto: '750 mg' },
      { texto: '7.500 mg' },
      { texto: '75.000 mg' },
      { texto: '750.000 mg' }
    ],
    resposta: 'D',
    explicacao: '1 kg = 1.000.000 mg. Logo, 0,075 × 1.000.000 = 75.000 mg.',
    explicacaoAlternativas: [
      'Incorreta: seria 0,075 × 1.000.',
      'Incorreta: seria 0,075 × 10.000.',
      'Incorreta: seria 0,075 × 100.000.',
      'Correta: 0,075 × 1.000.000 = 75.000 mg.',
      'Incorreta: seria 0,075 × 10.000.000.'
    ]
  },
  {
    id: 17,
    enunciado: 'O peso máximo permitido para uma bagagem de mão é 10 kg. Em gramas, esse limite é:',
    alternativas: [
      { texto: '100 g' },
      { texto: '1.000 g' },
      { texto: '10.000 g' },
      { texto: '100.000 g' },
      { texto: '1.000.000 g' }
    ],
    resposta: 'C',
    explicacao: '1 kg = 1.000 g. Logo, 10 × 1.000 = 10.000 g.',
    explicacaoAlternativas: [
      'Incorreta: seria 10 × 10.',
      'Incorreta: seria 10 × 100.',
      'Correta: 10 × 1.000 = 10.000 g.',
      'Incorreta: seria 10 × 10.000.',
      'Incorreta: seria 10 × 100.000.'
    ]
  },
  {
    id: 18,
    enunciado: 'Uma xícara de açúcar tem aproximadamente 180 g. Em mg, essa massa equivale a:',
    alternativas: [
      { texto: '1.800 mg' },
      { texto: '18.000 mg' },
      { texto: '180.000 mg' },
      { texto: '1.800.000 mg' },
      { texto: '18.000.000 mg' }
    ],
    resposta: 'C',
    explicacao: '1 g = 1.000 mg. Logo, 180 × 1.000 = 180.000 mg.',
    explicacaoAlternativas: [
      'Incorreta: seria 180 × 10.',
      'Incorreta: seria 180 × 100.',
      'Correta: 180 × 1.000 = 180.000 mg.',
      'Incorreta: seria 180 × 10.000.',
      'Incorreta: seria 180 × 100.000.'
    ]
  },
  {
    id: 19,
    enunciado: 'A massa da Terra é aproximadamente 5,97 × 10²⁴ kg. Escreva esse valor sem notação científica (em palavras):',
    alternativas: [
      { texto: '5.970.000.000.000.000.000.000.000 kg' },
      { texto: '597.000.000.000.000.000.000.000 kg' },
      { texto: '5.970.000.000.000.000.000.000 kg' },
      { texto: '59.700.000.000.000.000.000.000 kg' },
      { texto: '597.000.000.000.000.000.000 kg' }
    ],
    resposta: 'A',
    explicacao: '5,97 × 10²⁴ = 5,97 seguido de 24 casas = 5.970.000.000.000.000.000.000.000 kg (5 septilhões e 970 sextilhões de kg).',
    explicacaoAlternativas: [
      'Correta.',
      'Incorreta: seria 5,97 × 10²³.',
      'Incorreta: seria 5,97 × 10²¹.',
      'Incorreta: seria 5,97 × 10²².',
      'Incorreta: seria 5,97 × 10²⁰.'
    ]
  },
  {
    id: 20,
    enunciado: 'Um pacote de arroz tem 5 kg. Quantos pacotes são necessários para obter 1 tonelada?',
    alternativas: [
      { texto: '20 pacotes' },
      { texto: '50 pacotes' },
      { texto: '100 pacotes' },
      { texto: '200 pacotes' },
      { texto: '500 pacotes' }
    ],
    resposta: 'D',
    explicacao: '1 t = 1.000 kg. 1.000 ÷ 5 = 200 pacotes.',
    explicacaoAlternativas: [
      'Incorreta: 20 × 5 = 100 kg.',
      'Incorreta: 50 × 5 = 250 kg.',
      'Incorreta: 100 × 5 = 500 kg.',
      'Correta: 200 × 5 = 1.000 kg = 1 t.',
      'Incorreta: 500 × 5 = 2.500 kg = 2,5 t.'
    ]
  },
  {
    id: 21,
    enunciado: 'Um átomo de oxigênio tem massa de 2,66 × 10⁻²³ g. Quantos átomos aproximadamente existem em 16 g de oxigênio?',
    alternativas: [
      { texto: '3,0 × 10²²' },
      { texto: '3,0 × 10²³' },
      { texto: '6,0 × 10²²' },
      { texto: '6,0 × 10²³' },
      { texto: '1,2 × 10²⁴' }
    ],
    resposta: 'D',
    explicacao: '16 ÷ (2,66 × 10⁻²³) ≈ 6,02 × 10²³ átomos (número de Avogadro).',
    explicacaoAlternativas: [
      'Incorreta.',
      'Incorreta.',
      'Incorreta: seria metade do número de Avogadro.',
      'Correta: ~6,0 × 10²³ átomos.',
      'Incorreta: seria o dobro.'
    ]
  },
  {
    id: 22,
    enunciado: 'Converta 0,0035 kg para miligramas:',
    alternativas: [
      { texto: '3,5 mg' },
      { texto: '35 mg' },
      { texto: '350 mg' },
      { texto: '3.500 mg' },
      { texto: '35.000 mg' }
    ],
    resposta: 'D',
    explicacao: '1 kg = 1.000.000 mg. 0,0035 × 1.000.000 = 3.500 mg.',
    explicacaoAlternativas: [
      'Incorreta.',
      'Incorreta.',
      'Incorreta.',
      'Correta: 3.500 mg.',
      'Incorreta.'
    ]
  },

  // --- CAPACIDADE E VOLUME (questões 23-34) ---
  {
    id: 23,
    enunciado: 'Uma garrafa de refrigerante tem 2 litros. Em mililitros, essa capacidade é:',
    alternativas: [
      { texto: '20 mL' },
      { texto: '200 mL' },
      { texto: '2.000 mL' },
      { texto: '20.000 mL' },
      { texto: '200.000 mL' }
    ],
    resposta: 'C',
    explicacao: '1 L = 1.000 mL. Logo, 2 × 1.000 = 2.000 mL.',
    explicacaoAlternativas: [
      'Incorreta: 2 × 10.',
      'Incorreta: 2 × 100.',
      'Correta: 2 × 1.000 = 2.000 mL.',
      'Incorreta: 2 × 10.000.',
      'Incorreta: 2 × 100.000.'
    ]
  },
  {
    id: 24,
    enunciado: 'Uma piscina tem capacidade para 45.000 litros. Em metros cúbicos (m³), isso equivale a:',
    alternativas: [
      { texto: '0,45 m³' },
      { texto: '4,5 m³' },
      { texto: '45 m³' },
      { texto: '450 m³' },
      { texto: '4.500 m³' }
    ],
    resposta: 'C',
    explicacao: '1 m³ = 1.000 L. Logo, 45.000 ÷ 1.000 = 45 m³.',
    explicacaoAlternativas: [
      'Incorreta: seria dividir por 100.000.',
      'Incorreta: seria dividir por 10.000.',
      'Correta: 45.000 ÷ 1.000 = 45 m³.',
      'Incorreta: seria dividir por 100.',
      'Incorreta: seria dividir por 10.'
    ]
  },
  {
    id: 25,
    enunciado: 'Um copo tem 300 mL. Quantos copos são necessários para encher uma jarra de 1,5 L?',
    alternativas: [
      { texto: '2 copos' },
      { texto: '3 copos' },
      { texto: '4 copos' },
      { texto: '5 copos' },
      { texto: '6 copos' }
    ],
    resposta: 'D',
    explicacao: '1,5 L = 1.500 mL. 1.500 ÷ 300 = 5 copos.',
    explicacaoAlternativas: [
      'Incorreta: 600 mL.',
      'Incorreta: 900 mL.',
      'Incorreta: 1.200 mL.',
      'Correta: 5 × 300 = 1.500 mL = 1,5 L.',
      'Incorreta: 1.800 mL = 1,8 L.'
    ]
  },
  {
    id: 26,
    enunciado: 'Um tanque cilíndrico tem 2,5 m³ de volume. Sua capacidade em litros é:',
    alternativas: [
      { texto: '25 L' },
      { texto: '250 L' },
      { texto: '2.500 L' },
      { texto: '25.000 L' },
      { texto: '250.000 L' }
    ],
    resposta: 'C',
    explicacao: '1 m³ = 1.000 L. Logo, 2,5 × 1.000 = 2.500 L.',
    explicacaoAlternativas: [
      'Incorreta: 2,5 × 10.',
      'Incorreta: 2,5 × 100.',
      'Correta: 2,5 × 1.000 = 2.500 L.',
      'Incorreta: 2,5 × 10.000.',
      'Incorreta: 2,5 × 100.000.'
    ]
  },
  {
    id: 27,
    enunciado: 'Uma colher de chá tem aproximadamente 5 mL. Quantas colheres de chá cabem em 1 litro?',
    alternativas: [
      { texto: '20 colheres' },
      { texto: '50 colheres' },
      { texto: '100 colheres' },
      { texto: '200 colheres' },
      { texto: '500 colheres' }
    ],
    resposta: 'D',
    explicacao: '1 L = 1.000 mL. 1.000 ÷ 5 = 200 colheres.',
    explicacaoAlternativas: [
      'Incorreta: 100 mL.',
      'Incorreta: 250 mL.',
      'Incorreta: 500 mL.',
      'Correta: 200 × 5 = 1.000 mL.',
      'Incorreta: 2.500 mL.'
    ]
  },
  {
    id: 28,
    enunciado: 'Uma caixa d\'água tem 0,75 m³. Em centímetros cúbicos (cm³), esse volume é:',
    alternativas: [
      { texto: '750 cm³' },
      { texto: '7.500 cm³' },
      { texto: '75.000 cm³' },
      { texto: '750.000 cm³' },
      { texto: '7.500.000 cm³' }
    ],
    resposta: 'D',
    explicacao: '1 m³ = 1.000.000 cm³. Logo, 0,75 × 1.000.000 = 750.000 cm³.',
    explicacaoAlternativas: [
      'Incorreta: seria 0,75 × 1.000.',
      'Incorreta: seria 0,75 × 10.000.',
      'Incorreta: seria 0,75 × 100.000.',
      'Correta: 0,75 × 1.000.000 = 750.000 cm³.',
      'Incorreta: seria 0,75 × 10.000.000.'
    ]
  },
  {
    id: 29,
    enunciado: 'Sabe-se que 1 cm³ = 1 mL. Um cubo de aresta 10 cm tem volume de 1.000 cm³. Sua capacidade em litros é:',
    alternativas: [
      { texto: '0,1 L' },
      { texto: '0,5 L' },
      { texto: '1 L' },
      { texto: '10 L' },
      { texto: '100 L' }
    ],
    resposta: 'C',
    explicacao: '1.000 cm³ = 1.000 mL = 1 L.',
    explicacaoAlternativas: [
      'Incorreta.',
      'Incorreta.',
      'Correta: 1.000 cm³ = 1 L.',
      'Incorreta.',
      'Incorreta.'
    ]
  },
  {
    id: 30,
    enunciado: 'Um caminhão-pipa transporta 8.000 L de água. Esse volume em m³ corresponde a:',
    alternativas: [
      { texto: '0,8 m³' },
      { texto: '8 m³' },
      { texto: '80 m³' },
      { texto: '800 m³' },
      { texto: '8.000 m³' }
    ],
    resposta: 'B',
    explicacao: '1 m³ = 1.000 L. Logo, 8.000 ÷ 1.000 = 8 m³.',
    explicacaoAlternativas: [
      'Incorreta: seria dividir por 10.000.',
      'Correta: 8.000 ÷ 1.000 = 8 m³.',
      'Incorreta: seria dividir por 100.',
      'Incorreta: seria dividir por 10.',
      'Incorreta: seria manter o valor.'
    ]
  },
  {
    id: 31,
    enunciado: 'Uma lata de refrigerante tem 350 mL. Quantas latas são necessárias para obter 3,5 L?',
    alternativas: [
      { texto: '5 latas' },
      { texto: '8 latas' },
      { texto: '10 latas' },
      { texto: '12 latas' },
      { texto: '15 latas' }
    ],
    resposta: 'C',
    explicacao: '3,5 L = 3.500 mL. 3.500 ÷ 350 = 10 latas.',
    explicacaoAlternativas: [
      'Incorreta: 1.750 mL.',
      'Incorreta: 2.800 mL.',
      'Correta: 10 × 350 = 3.500 mL.',
      'Incorreta: 4.200 mL.',
      'Incorreta: 5.250 mL.'
    ]
  },
  {
    id: 32,
    enunciado: 'O consumo de água de uma família foi de 15 m³ no mês. Em litros, esse consumo foi de:',
    alternativas: [
      { texto: '150 L' },
      { texto: '1.500 L' },
      { texto: '15.000 L' },
      { texto: '150.000 L' },
      { texto: '1.500.000 L' }
    ],
    resposta: 'C',
    explicacao: '1 m³ = 1.000 L. Logo, 15 × 1.000 = 15.000 L.',
    explicacaoAlternativas: [
      'Incorreta: 15 × 10.',
      'Incorreta: 15 × 100.',
      'Correta: 15 × 1.000 = 15.000 L.',
      'Incorreta: 15 × 10.000.',
      'Incorreta: 15 × 100.000.'
    ]
  },
  {
    id: 33,
    enunciado: 'Converta 0,025 m³ para litros:',
    alternativas: [
      { texto: '0,25 L' },
      { texto: '2,5 L' },
      { texto: '25 L' },
      { texto: '250 L' },
      { texto: '2.500 L' }
    ],
    resposta: 'C',
    explicacao: '0,025 m³ × 1.000 = 25 L.',
    explicacaoAlternativas: [
      'Incorreta.',
      'Incorreta.',
      'Correta: 25 L.',
      'Incorreta.',
      'Incorreta.'
    ]
  },
  {
    id: 34,
    enunciado: 'O volume de uma piscina olímpica é cerca de 2.500 m³. Em litros, isso equivale a:',
    alternativas: [
      { texto: '250.000 L' },
      { texto: '2.500.000 L' },
      { texto: '25.000.000 L' },
      { texto: '250.000.000 L' },
      { texto: '2.500.000.000 L' }
    ],
    resposta: 'B',
    explicacao: '2.500 m³ × 1.000 = 2.500.000 L (2,5 milhões de litros).',
    explicacaoAlternativas: [
      'Incorreta: seria multiplicar por 100.',
      'Correta: 2.500 × 1.000 = 2.500.000 L.',
      'Incorreta: seria multiplicar por 10.000.',
      'Incorreta: seria multiplicar por 100.000.',
      'Incorreta: seria multiplicar por 1.000.000.'
    ]
  },

  // --- TEMPO (questões 35-42) ---
  {
    id: 35,
    enunciado: 'Um filme tem duração de 2 horas e 15 minutos. Em minutos, essa duração é de:',
    alternativas: [
      { texto: '75 min' },
      { texto: '115 min' },
      { texto: '135 min' },
      { texto: '150 min' },
      { texto: '215 min' }
    ],
    resposta: 'C',
    explicacao: '2 h = 120 min. 120 + 15 = 135 minutos.',
    explicacaoAlternativas: [
      'Incorreta: seria 60 + 15.',
      'Incorreta: seria 100 + 15.',
      'Correta: 120 + 15 = 135 min.',
      'Incorreta: seria 2 × 60 + 30.',
      'Incorreta: seria 200 + 15.'
    ]
  },
  {
    id: 36,
    enunciado: '3.600 segundos equivalem a:',
    alternativas: [
      { texto: '6 minutos' },
      { texto: '10 minutos' },
      { texto: '36 minutos' },
      { texto: '60 minutos' },
      { texto: '100 minutos' }
    ],
    resposta: 'D',
    explicacao: '1 minuto = 60 segundos. 3.600 ÷ 60 = 60 minutos = 1 hora.',
    explicacaoAlternativas: [
      'Incorreta: 360 s.',
      'Incorreta: 600 s.',
      'Incorreta: seria 3.600 ÷ 100.',
      'Correta: 3.600 ÷ 60 = 60 min.',
      'Incorreta: seria 3.600 ÷ 36.'
    ]
  },
  {
    id: 37,
    enunciado: 'Quantos segundos têm 1 dia (24 horas)?',
    alternativas: [
      { texto: '3.600 s' },
      { texto: '14.400 s' },
      { texto: '43.200 s' },
      { texto: '86.400 s' },
      { texto: '172.800 s' }
    ],
    resposta: 'D',
    explicacao: '24 × 60 × 60 = 86.400 segundos.',
    explicacaoAlternativas: [
      'Incorreta: 1 hora.',
      'Incorreta: 4 horas.',
      'Incorreta: 12 horas.',
      'Correta: 24 × 3.600 = 86.400 s.',
      'Incorreta: 48 horas.'
    ]
  },
  {
    id: 38,
    enunciado: 'Uma viagem durou 5,5 horas. Em minutos, essa duração é:',
    alternativas: [
      { texto: '55 min' },
      { texto: '300 min' },
      { texto: '330 min' },
      { texto: '350 min' },
      { texto: '550 min' }
    ],
    resposta: 'C',
    explicacao: '5,5 h = 5 h 30 min. 5 × 60 + 30 = 330 minutos.',
    explicacaoAlternativas: [
      'Incorreta: seria 0,55 × 100.',
      'Incorreta: seria 5 × 60 = 300 (ignora o 0,5).',
      'Correta: 5,5 × 60 = 330 min.',
      'Incorreta.',
      'Incorreta: seria 5,5 × 100.'
    ]
  },
  {
    id: 39,
    enunciado: 'Uma pessoa correu 10 km em 50 minutos. Qual foi seu ritmo médio em minutos por km?',
    alternativas: [
      { texto: '4 min/km' },
      { texto: '5 min/km' },
      { texto: '6 min/km' },
      { texto: '8 min/km' },
      { texto: '10 min/km' }
    ],
    resposta: 'B',
    explicacao: '50 min ÷ 10 km = 5 min/km.',
    explicacaoAlternativas: [
      'Incorreta.',
      'Correta: 50 ÷ 10 = 5 min/km.',
      'Incorreta.',
      'Incorreta.',
      'Incorreta.'
    ]
  },
  {
    id: 40,
    enunciado: 'Um evento começou às 14h30 e terminou às 17h15. Quanto tempo durou?',
    alternativas: [
      { texto: '2h15min' },
      { texto: '2h30min' },
      { texto: '2h45min' },
      { texto: '3h00min' },
      { texto: '3h15min' }
    ],
    resposta: 'C',
    explicacao: 'Das 14h30 às 17h30 = 3h. Mas terminou às 17h15, então 3h − 15min = 2h45min.',
    explicacaoAlternativas: [
      'Incorreta.',
      'Incorreta.',
      'Correta: 2h45min.',
      'Incorreta: seria se terminasse 17h30.',
      'Incorreta.'
    ]
  },
  {
    id: 41,
    enunciado: 'Converta 0,4 horas para minutos:',
    alternativas: [
      { texto: '4 min' },
      { texto: '24 min' },
      { texto: '40 min' },
      { texto: '48 min' },
      { texto: '60 min' }
    ],
    resposta: 'B',
    explicacao: '0,4 × 60 = 24 minutos.',
    explicacaoAlternativas: [
      'Incorreta: seria 0,4 × 10.',
      'Correta: 0,4 × 60 = 24 min.',
      'Incorreta: seria 0,4 × 100.',
      'Incorreta.',
      'Incorreta: 1 hora.'
    ]
  },
  {
    id: 42,
    enunciado: 'Uma lâmpada ficou acesa por 90.000 segundos. Isso equivale a:',
    alternativas: [
      { texto: '1 hora e 30 minutos' },
      { texto: '15 horas' },
      { texto: '25 horas' },
      { texto: '1 dia e 1 hora' },
      { texto: '1 dia, 1 hora e 30 minutos' }
    ],
    resposta: 'D',
    explicacao: '90.000 ÷ 3.600 = 25 horas = 1 dia (24h) + 1 hora.',
    explicacaoAlternativas: [
      'Incorreta: 5.400 s.',
      'Incorreta: 54.000 s.',
      'Correta: 25 h = 1 dia e 1 h.',
      'Incorreta.',
      'Incorreta: seria 91.800 s.'
    ]
  },

  // --- ÁREA (questões 43-50) ---
  {
    id: 43,
    enunciado: 'Um terreno retangular tem 20 m de frente por 30 m de fundo. Sua área em m² é:',
    alternativas: [
      { texto: '50 m²' },
      { texto: '100 m²' },
      { texto: '300 m²' },
      { texto: '600 m²' },
      { texto: '900 m²' }
    ],
    resposta: 'D',
    explicacao: 'Área = 20 × 30 = 600 m².',
    explicacaoAlternativas: [
      'Incorreta: seria 20 + 30.',
      'Incorreta: seria (20 + 30) × 2.',
      'Incorreta: seria 10 × 30.',
      'Correta: 20 × 30 = 600 m².',
      'Incorreta: seria 30 × 30.'
    ]
  },
  {
    id: 44,
    enunciado: 'Um hectare (ha) equivale a 10.000 m². Um sítio de 2,5 ha tem quantos m²?',
    alternativas: [
      { texto: '250 m²' },
      { texto: '2.500 m²' },
      { texto: '25.000 m²' },
      { texto: '250.000 m²' },
      { texto: '2.500.000 m²' }
    ],
    resposta: 'C',
    explicacao: '2,5 × 10.000 = 25.000 m².',
    explicacaoAlternativas: [
      'Incorreta: seria 2,5 × 100.',
      'Incorreta: seria 2,5 × 1.000.',
      'Correta: 2,5 × 10.000 = 25.000 m².',
      'Incorreta: seria 2,5 × 100.000.',
      'Incorreta: seria 2,5 × 1.000.000.'
    ]
  },
  {
    id: 45,
    enunciado: 'Uma sala tem 15 m² de área. Em centímetros quadrados (cm²), essa área é:',
    alternativas: [
      { texto: '1.500 cm²' },
      { texto: '15.000 cm²' },
      { texto: '150.000 cm²' },
      { texto: '1.500.000 cm²' },
      { texto: '15.000.000 cm²' }
    ],
    resposta: 'C',
    explicacao: '1 m² = 10.000 cm² (pois 1 m = 100 cm, e 100² = 10.000). Logo, 15 × 10.000 = 150.000 cm².',
    explicacaoAlternativas: [
      'Incorreta: seria 15 × 100.',
      'Incorreta: seria 15 × 1.000.',
      'Correta: 15 × 10.000 = 150.000 cm².',
      'Incorreta: seria 15 × 100.000.',
      'Incorreta: seria 15 × 1.000.000.'
    ]
  },
  {
    id: 46,
    enunciado: 'O estado de Sergipe tem aproximadamente 22.000 km². Em hectares (ha), essa área é:',
    alternativas: [
      { texto: '220.000 ha' },
      { texto: '2.200.000 ha' },
      { texto: '22.000.000 ha' },
      { texto: '220.000.000 ha' },
      { texto: '2.200.000.000 ha' }
    ],
    resposta: 'B',
    explicacao: '1 km² = 100 ha. Logo, 22.000 × 100 = 2.200.000 ha.',
    explicacaoAlternativas: [
      'Incorreta: seria 22.000 × 10.',
      'Correta: 22.000 × 100 = 2.200.000 ha.',
      'Incorreta: seria 22.000 × 1.000.',
      'Incorreta: seria 22.000 × 10.000.',
      'Incorreta: seria 22.000 × 100.000.'
    ]
  },
  {
    id: 47,
    enunciado: 'Uma folha A4 tem 62.370 mm². Em cm², essa área é:',
    alternativas: [
      { texto: '6,237 cm²' },
      { texto: '62,37 cm²' },
      { texto: '623,7 cm²' },
      { texto: '6.237 cm²' },
      { texto: '62.370 cm²' }
    ],
    resposta: 'C',
    explicacao: '1 cm² = 100 mm². Logo, 62.370 ÷ 100 = 623,7 cm².',
    explicacaoAlternativas: [
      'Incorreta: seria dividir por 10.000.',
      'Incorreta: seria dividir por 1.000.',
      'Correta: 62.370 ÷ 100 = 623,7 cm².',
      'Incorreta: seria dividir por 10.',
      'Incorreta: seria manter o valor.'
    ]
  },
  {
    id: 48,
    enunciado: 'Um campo de futebol oficial tem área máxima de 10.800 m². Em km², isso equivale a:',
    alternativas: [
      { texto: '0,00108 km²' },
      { texto: '0,0108 km²' },
      { texto: '0,108 km²' },
      { texto: '1,08 km²' },
      { texto: '10,8 km²' }
    ],
    resposta: 'B',
    explicacao: '1 km² = 1.000.000 m². Logo, 10.800 ÷ 1.000.000 = 0,0108 km².',
    explicacaoAlternativas: [
      'Incorreta: seria dividir por 10.000.000.',
      'Correta: 10.800 ÷ 1.000.000 = 0,0108 km².',
      'Incorreta: seria dividir por 100.000.',
      'Incorreta: seria dividir por 10.000.',
      'Incorreta: seria dividir por 1.000.'
    ]
  },
  {
    id: 49,
    enunciado: 'Converta 0,5 km² para m²:',
    alternativas: [
      { texto: '5.000 m²' },
      { texto: '50.000 m²' },
      { texto: '500.000 m²' },
      { texto: '5.000.000 m²' },
      { texto: '50.000.000 m²' }
    ],
    resposta: 'C',
    explicacao: '1 km² = 1.000.000 m². 0,5 × 1.000.000 = 500.000 m².',
    explicacaoAlternativas: [
      'Incorreta: seria 0,5 × 10.000.',
      'Incorreta: seria 0,5 × 100.000.',
      'Correta: 0,5 × 1.000.000 = 500.000 m².',
      'Incorreta.',
      'Incorreta.'
    ]
  },
  {
    id: 50,
    enunciado: 'Um azulejo quadrado tem 20 cm de lado. Sua área em m² é:',
    alternativas: [
      { texto: '0,004 m²' },
      { texto: '0,04 m²' },
      { texto: '0,4 m²' },
      { texto: '4 m²' },
      { texto: '40 m²' }
    ],
    resposta: 'B',
    explicacao: 'Lado = 20 cm = 0,2 m. Área = 0,2 × 0,2 = 0,04 m².',
    explicacaoAlternativas: [
      'Incorreta: seria 0,02 × 0,2.',
      'Correta: 0,2 × 0,2 = 0,04 m².',
      'Incorreta.',
      'Incorreta.',
      'Incorreta.'
    ]
  }
];

// ============================================================
// BANCO DE QUESTÕES — SIMULADO (10 questões)
// ============================================================
const bancoQuestoesSimulado = [
  {
    id: 'S1',
    enunciado: '(ENEM adaptado) Um mecânico precisa medir a espessura de uma lâmina metálica e dispõe de um micrômetro que indica 0,035 mm. Essa medida, em centímetros, é igual a:',
    alternativas: [
      { texto: '0,00035 cm' },
      { texto: '0,0035 cm' },
      { texto: '0,035 cm' },
      { texto: '0,35 cm' },
      { texto: '3,5 cm' }
    ],
    resposta: 'B',
    explicacao: '1 mm = 0,1 cm. Logo, 0,035 × 0,1 = 0,0035 cm. Ou: dividir por 10.'
  },
  {
    id: 'S2',
    enunciado: 'Uma indústria produz parafusos com 1,5 cm de comprimento. Para um relatório técnico, essa medida deve ser expressa em metros e em notação científica. O valor correto é:',
    alternativas: [
      { texto: '1,5 × 10⁻¹ m' },
      { texto: '1,5 × 10⁻² m' },
      { texto: '1,5 × 10⁻³ m' },
      { texto: '1,5 × 10⁻⁴ m' },
      { texto: '1,5 × 10 m' }
    ],
    resposta: 'B',
    explicacao: '1,5 cm = 0,015 m = 1,5 × 10⁻² m.'
  },
  {
    id: 'S3',
    enunciado: 'Uma receita pede 0,25 kg de farinha. Uma balança digital indica apenas valores em gramas. Qual valor deve aparecer na balança?',
    alternativas: [
      { texto: '2,5 g' },
      { texto: '25 g' },
      { texto: '250 g' },
      { texto: '2.500 g' },
      { texto: '25.000 g' }
    ],
    resposta: 'C',
    explicacao: '1 kg = 1.000 g. 0,25 × 1.000 = 250 g.'
  },
  {
    id: 'S4',
    enunciado: 'O consumo mensal de água de uma escola é de 120 m³. A diretora quer expressar esse valor em litros para um cartaz de conscientização. O valor correto é:',
    alternativas: [
      { texto: '12.000 L' },
      { texto: '120.000 L' },
      { texto: '1.200.000 L' },
      { texto: '12.000.000 L' },
      { texto: '120.000.000 L' }
    ],
    resposta: 'B',
    explicacao: '1 m³ = 1.000 L. 120 × 1.000 = 120.000 L.'
  },
  {
    id: 'S5',
    enunciado: 'Uma pessoa tem 1,78 m de altura. Essa medida em mm é:',
    alternativas: [
      { texto: '17,8 mm' },
      { texto: '178 mm' },
      { texto: '1.780 mm' },
      { texto: '17.800 mm' },
      { texto: '178.000 mm' }
    ],
    resposta: 'C',
    explicacao: '1 m = 1.000 mm. 1,78 × 1.000 = 1.780 mm.'
  },
  {
    id: 'S6',
    enunciado: 'Uma prova começou às 7h45 e tem duração de 3,5 horas. A que horas a prova terminará?',
    alternativas: [
      { texto: '10h15' },
      { texto: '10h45' },
      { texto: '11h00' },
      { texto: '11h15' },
      { texto: '11h30' }
    ],
    resposta: 'D',
    explicacao: '3,5 h = 3h30min. 7h45 + 3h30 = 11h15.'
  },
  {
    id: 'S7',
    enunciado: 'O Brasil tem área territorial de aproximadamente 8.516.000 km². Em notação científica, esse valor é:',
    alternativas: [
      { texto: '8,516 × 10³ km²' },
      { texto: '8,516 × 10⁴ km²' },
      { texto: '8,516 × 10⁵ km²' },
      { texto: '8,516 × 10⁶ km²' },
      { texto: '8,516 × 10⁷ km²' }
    ],
    resposta: 'D',
    explicacao: '8.516.000 = 8,516 × 10⁶ (vírgula anda 6 casas para a esquerda).'
  },
  {
    id: 'S8',
    enunciado: 'Um tanque tem formato cúbico com aresta de 2 m. Qual é o volume do tanque em litros?',
    alternativas: [
      { texto: '800 L' },
      { texto: '2.000 L' },
      { texto: '4.000 L' },
      { texto: '8.000 L' },
      { texto: '16.000 L' }
    ],
    resposta: 'D',
    explicacao: 'Volume = 2³ = 8 m³. 8 m³ × 1.000 = 8.000 L.'
  },
  {
    id: 'S9',
    enunciado: 'Um carro percorre 270 km em 3 horas. Sua velocidade média, em metros por segundo (m/s), é:',
    alternativas: [
      { texto: '15 m/s' },
      { texto: '25 m/s' },
      { texto: '50 m/s' },
      { texto: '75 m/s' },
      { texto: '90 m/s' }
    ],
    resposta: 'B',
    explicacao: 'Vm = 270 ÷ 3 = 90 km/h. Para converter km/h → m/s, divide por 3,6: 90 ÷ 3,6 = 25 m/s.'
  },
  {
    id: 'S10',
    enunciado: 'Uma reserva florestal tem 350 hectares. Uma lei exige que a área seja expressa em km² nos documentos oficiais. O valor correto é:',
    alternativas: [
      { texto: '0,35 km²' },
      { texto: '3,5 km²' },
      { texto: '35 km²' },
      { texto: '350 km²' },
      { texto: '3.500 km²' }
    ],
    resposta: 'B',
    explicacao: '1 km² = 100 ha. Logo, 350 ÷ 100 = 3,5 km².'
  }
];

// ============================================================
// RESUMO — CONTEÚDO PEDAGÓGICO
// ============================================================
function popularResumo() {
  // Introdução
  document.getElementById('resumo-intro').innerHTML = `
    <p>As <strong>grandezas</strong> são tudo aquilo que pode ser medido: comprimento, massa, tempo, temperatura, entre outras. Já as <strong>medidas</strong> são os valores numéricos associados a uma unidade padrão.</p>
    <p>No Sistema Internacional de Unidades (SI), cada grandeza possui uma <strong>unidade base</strong>:</p>
    <ul>
      <li><strong>Comprimento:</strong> metro (m)</li>
      <li><strong>Massa:</strong> quilograma (kg)</li>
      <li><strong>Tempo:</strong> segundo (s)</li>
      <li><strong>Volume:</strong> metro cúbico (m³)</li>
      <li><strong>Área:</strong> metro quadrado (m²)</li>
    </ul>
    <p>Nesta revisão, focaremos nas <strong>conversões entre unidades</strong> — um dos temas mais cobrados em provas como ENEM e vestibulares.</p>
  `;

  // Comprimento
  document.getElementById('resumo-comprimento').innerHTML = `
    <p>O <strong>metro (m)</strong> é a unidade base de comprimento no SI. Seus múltiplos e submúltiplos seguem potências de 10:</p>
    <ul>
      <li><strong>km</strong> (quilômetro) = 1.000 m</li>
      <li><strong>hm</strong> (hectômetro) = 100 m</li>
      <li><strong>dam</strong> (decâmetro) = 10 m</li>
      <li><strong>m</strong> (metro) = 1 m</li>
      <li><strong>dm</strong> (decímetro) = 0,1 m</li>
      <li><strong>cm</strong> (centímetro) = 0,01 m</li>
      <li><strong>mm</strong> (milímetro) = 0,001 m</li>
    </ul>
    <p><strong>Regra prática:</strong> para converter, desloque a vírgula conforme a direção:</p>
    <ul>
      <li>De uma unidade <strong>maior para menor</strong> → <strong>multiplica</strong> por 10 a cada degrau</li>
      <li>De uma unidade <strong>menor para maior</strong> → <strong>divide</strong> por 10 a cada degrau</li>
    </ul>
    <p><strong>Exemplo:</strong> 5 km → m: 5 × 1.000 = 5.000 m<br>
    <strong>Exemplo:</strong> 350 cm → m: 350 ÷ 100 = 3,5 m</p>
  `;

  // Massa
  document.getElementById('resumo-massa').innerHTML = `
    <p>O <strong>quilograma (kg)</strong> é a unidade base de massa no SI. Assim como o comprimento, os múltiplos e submúltiplos usam potências de 10:</p>
    <ul>
      <li><strong>t</strong> (tonelada) = 1.000 kg</li>
      <li><strong>kg</strong> (quilograma) = 1.000 g</li>
      <li><strong>hg</strong> (hectograma) = 100 g</li>
      <li><strong>dag</strong> (decagrama) = 10 g</li>
      <li><strong>g</strong> (grama) = 1 g</li>
      <li><strong>dg</strong> (decigrama) = 0,1 g</li>
      <li><strong>cg</strong> (centigrama) = 0,01 g</li>
      <li><strong>mg</strong> (miligrama) = 0,001 g</li>
    </ul>
    <p><strong>Atenção:</strong> O kg é a única unidade base do SI que já possui um prefixo (quilo). Por isso, as conversões são feitas a partir do <strong>grama</strong>.</p>
  `;

  // Volume
  document.getElementById('resumo-volume').innerHTML = `
    <p>A unidade base de volume no SI é o <strong>metro cúbico (m³)</strong>, mas no dia a dia usamos o <strong>litro (L)</strong>.</p>
    <p><strong>Relações fundamentais:</strong></p>
    <ul>
      <li>1 m³ = 1.000 L</li>
      <li>1 L = 1.000 mL = 1 dm³</li>
      <li>1 mL = 1 cm³</li>
    </ul>
    <p><strong>Conversão de unidades cúbicas:</strong> como as unidades são elevadas ao cubo, o fator de conversão também é elevado:</p>
    <ul>
      <li>1 m³ = 1.000.000 cm³ (pois 1 m = 100 cm → 100³ = 1.000.000)</li>
      <li>1 cm³ = 0,000001 m³</li>
    </ul>
  `;

  // Tempo
  document.getElementById('resumo-tempo').innerHTML = `
    <p>O <strong>segundo (s)</strong> é a unidade base de tempo no SI. Diferente das outras grandezas, o tempo <strong>não segue o sistema decimal</strong>:</p>
    <ul>
      <li>1 min = 60 s</li>
      <li>1 h = 60 min = 3.600 s</li>
      <li>1 dia = 24 h = 1.440 min = 86.400 s</li>
    </ul>
    <p><strong>Conversão de horas decimais:</strong> quando um valor de hora tem parte decimal (ex: 2,5 h), a parte decimal representa fração de hora:</p>
    <ul>
      <li>0,5 h = 30 min (pois 0,5 × 60 = 30)</li>
      <li>0,25 h = 15 min</li>
      <li>0,1 h = 6 min</li>
    </ul>
  `;

  // Área
  document.getElementById('resumo-area').innerHTML = `
    <p>A unidade base de área no SI é o <strong>metro quadrado (m²)</strong>. Por serem unidades ao quadrado, os fatores de conversão também são elevados ao quadrado:</p>
    <ul>
      <li>1 m² = 10.000 cm² (pois 1 m = 100 cm → 100² = 10.000)</li>
      <li>1 km² = 1.000.000 m²</li>
      <li>1 hectare (ha) = 10.000 m²</li>
      <li>1 km² = 100 ha</li>
    </ul>
    <p><strong>Dica:</strong> O hectare é muito usado em áreas rurais e questões do ENEM. Lembre-se: 1 ha = 10.000 m² (um quadrado de 100 m × 100 m).</p>
  `;

  // Tabela de conversão
  document.getElementById('tabela-conversao').innerHTML = `
    <thead>
      <tr>
        <th>Grandeza</th>
        <th>De</th>
        <th>Para</th>
        <th>Operação</th>
        <th>Fator</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Comprimento</td><td>km</td><td>m</td><td>×</td><td>1.000</td></tr>
      <tr><td>Comprimento</td><td>m</td><td>cm</td><td>×</td><td>100</td></tr>
      <tr><td>Comprimento</td><td>cm</td><td>mm</td><td>×</td><td>10</td></tr>
      <tr><td>Comprimento</td><td>mm</td><td>cm</td><td>÷</td><td>10</td></tr>
      <tr><td>Comprimento</td><td>cm</td><td>m</td><td>÷</td><td>100</td></tr>
      <tr><td>Comprimento</td><td>m</td><td>km</td><td>÷</td><td>1.000</td></tr>
      <tr><td>Massa</td><td>t</td><td>kg</td><td>×</td><td>1.000</td></tr>
      <tr><td>Massa</td><td>kg</td><td>g</td><td>×</td><td>1.000</td></tr>
      <tr><td>Massa</td><td>g</td><td>mg</td><td>×</td><td>1.000</td></tr>
      <tr><td>Massa</td><td>mg</td><td>g</td><td>÷</td><td>1.000</td></tr>
      <tr><td>Massa</td><td>g</td><td>kg</td><td>÷</td><td>1.000</td></tr>
      <tr><td>Volume</td><td>m³</td><td>L</td><td>×</td><td>1.000</td></tr>
      <tr><td>Volume</td><td>L</td><td>mL</td><td>×</td><td>1.000</td></tr>
      <tr><td>Volume</td><td>mL</td><td>L</td><td>÷</td><td>1.000</td></tr>
      <tr><td>Tempo</td><td>h</td><td>min</td><td>×</td><td>60</td></tr>
      <tr><td>Tempo</td><td>min</td><td>s</td><td>×</td><td>60</td></tr>
      <tr><td>Tempo</td><td>s</td><td>min</td><td>÷</td><td>60</td></tr>
      <tr><td>Área</td><td>km²</td><td>m²</td><td>×</td><td>1.000.000</td></tr>
      <tr><td>Área</td><td>ha</td><td>m²</td><td>×</td><td>10.000</td></tr>
      <tr><td>Área</td><td>m²</td><td>cm²</td><td>×</td><td>10.000</td></tr>
    </tbody>
  `;

  // Exemplos práticos
  document.getElementById('resumo-exemplos').innerHTML = `
    <div class="resumo__exemplo">
      <div class="resumo__exemplo-titulo">Exemplo 1 — Conversão de comprimento</div>
      <div class="resumo__exemplo-texto">
        Uma estrada tem 3,2 km. Para expressar em metros: <strong>3,2 × 1.000 = 3.200 m</strong>.<br>
        Em centímetros: <strong>3.200 × 100 = 320.000 cm</strong>.
      </div>
    </div>

    <div class="resumo__exemplo">
      <div class="resumo__exemplo-titulo">Exemplo 2 — Conversão de massa</div>
      <div class="resumo__exemplo-texto">
        Um pacote tem 500 g. Em kg: <strong>500 ÷ 1.000 = 0,5 kg</strong>.<br>
        Em mg: <strong>500 × 1.000 = 500.000 mg</strong>.
      </div>
    </div>

    <div class="resumo__exemplo">
      <div class="resumo__exemplo-titulo">Exemplo 3 — Velocidade (km/h para m/s)</div>
      <div class="resumo__exemplo-texto">
        Um carro está a 72 km/h. Para converter para m/s: <strong>72 ÷ 3,6 = 20 m/s</strong>.<br>
        Motivo: 1 km/h = 1.000 m / 3.600 s = 1/3,6 m/s.
      </div>
    </div>

    <div class="resumo__exemplo">
      <div class="resumo__exemplo-titulo">Exemplo 4 — Volume</div>
      <div class="resumo__exemplo-texto">
        Uma piscina tem 5 m × 3 m × 1,5 m = 22,5 m³.<br>
        Em litros: <strong>22,5 × 1.000 = 22.500 L</strong>.<br>
        Em mL: <strong>22.500 × 1.000 = 22.500.000 mL</strong>.
      </div>
    </div>

    <div class="resumo__exemplo">
      <div class="resumo__exemplo-titulo">Exemplo 5 — Notação Científica</div>
      <div class="resumo__exemplo-texto">
        A distância média da Terra à Lua é 384.400 km.<br>
        Em notação científica: <strong>3,844 × 10⁵ km</strong> ou <strong>3,844 × 10⁸ m</strong>.
      </div>
    </div>
  `;

  // Recursos externos
  document.getElementById('resumo-recursos').innerHTML = `
    <div class="resumo__recurso">
      <strong>🌐 Sites confiáveis:</strong><br>
      <a href="https://www.gov.br/inmetro/pt-br/centrais-de-conteudo/publicacoes/documentos-tecnicos-em-metrologia/sistema-internacional-de-unidades-si.pdf" target="_blank" rel="noopener">
        INMETRO — Sistema Internacional de Unidades (SI)
      </a>
      <div class="resumo__recurso-descricao">Documento oficial do INMETRO com todas as unidades do SI, prefixos e regras de conversão.</div>
      <br>
      <a href="https://brasilescola.uol.com.br/matematica/sistema-internacional-unidades.htm" target="_blank" rel="noopener">
        Brasil Escola — Unidades de Medida
      </a>
      <div class="resumo__recurso-descricao">Explicação didática com exemplos práticos de conversão entre unidades.</div>
      <br>
      <a href="https://www.todamateria.com.br/unidades-de-medida/" target="_blank" rel="noopener">
        Toda Matéria — Unidades de Medida
      </a>
      <div class="resumo__recurso-descricao">Resumo completo com tabelas de conversão de comprimento, massa, volume e tempo.</div>
    </div>

    <div class="resumo__recurso">
      <strong>🎬 Vídeos recomendados:</strong><br>
      <a href="https://www.youtube.com/watch?v=UQqF6J6fOqk" target="_blank" rel="noopener">
        Conversão de Unidades — Ferretto Matemática
      </a>
      <div class="resumo__recurso-descricao">Aula completa sobre conversão de unidades de comprimento, área, volume e muito mais.</div>
      <br>
      <a href="https://www.youtube.com/watch?v=fL_6rUfFNwA" target="_blank" rel="noopener">
        Unidades de Medida — Prof. Rafael Procopio (Matemática Rio)
      </a>
      <div class="resumo__recurso-descricao">Explicação descontraída com macetes para decorar as conversões mais importantes.</div>
      <br>
      <a href="https://www.youtube.com/watch?v=6hTaxEWPrJk" target="_blank" rel="noopener">
        Notação Científica e Unidades — Equaciona com Paulo Pereira
      </a>
      <div class="resumo__recurso-descricao">Relação entre notação científica e unidades de medida, muito útil para o ENEM.</div>
    </div>
  `;
}

// ============================================================
// ESTADO GLOBAL
// ============================================================
const estado = {
  abaAtiva: 'resumo',

  // Quiz
  quizQuestoes: [],
  quizIndiceAtual: 0,
  quizAcertos: 0,
  quizRespondida: false,
  quizRespostas: [],

  // Simulado
  simuladoQuestoes: [],
  simuladoIndiceAtual: 0,
  simuladoRespostas: [],
  simuladoTimerSegundos: 0,
  simuladoTimerInterval: null,

  // Histórico de resultados
  historico: []
};

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  popularResumo();
  carregarHistorico();
  configurarNavegacao();
  configurarQuiz();
  configurarSimulado();
  configurarResultados();
});

// ============================================================
// NAVEGAÇÃO POR ABAS
// ============================================================
function configurarNavegacao() {
  const tabs = document.querySelectorAll('.nav__tab');
  const secoes = {
    resumo: document.getElementById('secao-resumo'),
    quiz: document.getElementById('secao-quiz'),
    simulado: document.getElementById('secao-simulado'),
    resultados: document.getElementById('secao-resultados')
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabAlvo = tab.dataset.tab;

      // Atualiza classes ativas
      tabs.forEach(t => t.classList.remove('nav__tab--active'));
      tab.classList.add('nav__tab--active');

      // Mostra seção correspondente
      Object.values(secoes).forEach(s => s.classList.remove('section--active'));
      if (secoes[tabAlvo]) {
        secoes[tabAlvo].classList.add('section--active');
      }

      estado.abaAtiva = tabAlvo;

      // Se for a aba de resultados, atualiza o histórico
      if (tabAlvo === 'resultados') {
        atualizarPainelResultados();
      }

      // Scroll suave para o topo ao trocar de aba
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// ============================================================
// QUIZ — LÓGICA
// ============================================================
function configurarQuiz() {
  const btnIniciar = document.getElementById('btn-iniciar-quiz');
  btnIniciar.addEventListener('click', iniciarQuiz);
}

function iniciarQuiz() {
  if (bancoQuestoesQuiz.length < 10) {
    alert('O banco de questões do Quiz ainda está sendo preparado.');
    return;
  }

  // Seleciona 10 questões aleatórias
  const embaralhadas = [...bancoQuestoesQuiz].sort(() => Math.random() - 0.5);
  estado.quizQuestoes = embaralhadas.slice(0, 10);
  estado.quizIndiceAtual = 0;
  estado.quizAcertos = 0;
  estado.quizRespostas = [];

  // Mostra tela de andamento
  document.getElementById('quiz-inicio').classList.add('quiz--oculto');
  document.getElementById('quiz-andamento').classList.remove('quiz--oculto');
  document.getElementById('quiz-resultado-final').classList.add('quiz--oculto');

  renderizarQuestaoQuiz();
}

function renderizarQuestaoQuiz() {
  const questao = estado.quizQuestoes[estado.quizIndiceAtual];
  const indice = estado.quizIndiceAtual;

  // Atualiza barra de progresso
  document.getElementById('quiz-numero-atual').textContent = indice + 1;
  document.getElementById('quiz-acertos-parciais').textContent = estado.quizAcertos;
  document.getElementById('quiz-barra-progresso').style.width =
    ((indice) / 10 * 100) + '%';

  // Atualiza card da questão
  document.getElementById('quiz-questao-numero').textContent = indice + 1;
  document.getElementById('quiz-enunciado').textContent = questao.enunciado;

  // Renderiza alternativas
  const containerAlternativas = document.getElementById('quiz-alternativas');
  containerAlternativas.innerHTML = '';

  const letras = ['A', 'B', 'C', 'D', 'E'];

  questao.alternativas.forEach((alt, i) => {
    const div = document.createElement('div');
    div.className = 'alternativa';
    div.innerHTML = `
      <span class="alternativa__letra">${letras[i]}</span>
      <span class="alternativa__texto">${alt.texto}</span>
    `;
    div.addEventListener('click', () => selecionarAlternativaQuiz(letras[i], div));
    containerAlternativas.appendChild(div);
  });

  // Esconde feedback e botão próximo
  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.add('questao__feedback--oculto');
  feedback.classList.remove('questao__feedback--acerto', 'questao__feedback--erro');

  const btnProximo = document.getElementById('quiz-btn-proximo');
  btnProximo.classList.add('questao__btn--oculto');
  btnProximo.onclick = null;

  estado.quizRespondida = false;

  // Scroll para o topo da questão
  document.getElementById('quiz-questao').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selecionarAlternativaQuiz(letraSelecionada, elementoClicado) {
  if (estado.quizRespondida) return;

  const questao = estado.quizQuestoes[estado.quizIndiceAtual];
  const acertou = letraSelecionada === questao.resposta;
  const letras = ['A', 'B', 'C', 'D', 'E'];

  estado.quizRespondida = true;

  // Registra resposta
  estado.quizRespostas.push({
    questaoId: questao.id,
    selecionada: letraSelecionada,
    correta: questao.resposta,
    acertou: acertou
  });

  if (acertou) {
    estado.quizAcertos++;
    document.getElementById('quiz-acertos-parciais').textContent = estado.quizAcertos;
  }

  // Atualiza barra de progresso
  const indice = estado.quizIndiceAtual;
  document.getElementById('quiz-barra-progresso').style.width =
    ((indice + 1) / 10 * 100) + '%';

  // Destaca todas as alternativas
  const alternativas = document.querySelectorAll('#quiz-alternativas .alternativa');
  alternativas.forEach((alt, i) => {
    alt.style.pointerEvents = 'none';
    alt.classList.remove('alternativa--selecionada');

    if (letras[i] === questao.resposta) {
      alt.classList.add('alternativa--correta');
    } else if (letras[i] === letraSelecionada && !acertou) {
      alt.classList.add('alternativa--errada');
    }
  });

  // Mostra feedback
  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.remove('questao__feedback--oculto');

  if (acertou) {
    feedback.classList.add('questao__feedback--acerto');
    feedback.innerHTML = `
      <div class="questao__feedback-titulo">✅ Correto!</div>
      <div class="questao__feedback-explicacao">${questao.explicacao}</div>
    `;
  } else {
    feedback.classList.add('questao__feedback--erro');
    const letraCorreta = questao.resposta;
    const textoCorreto = questao.alternativas.find((_, i) => letras[i] === letraCorreta)?.texto || '';

    feedback.innerHTML = `
      <div class="questao__feedback-titulo">❌ Incorreto</div>
      <div class="questao__feedback-explicacao">
        <p><strong>Resposta correta: ${letraCorreta}) ${textoCorreto}</strong></p>
        <p>${questao.explicacao}</p>
      </div>
    `;
  }

  // Explicação de todas as alternativas (se disponível)
  if (questao.explicacaoAlternativas) {
    const divExplicacoes = document.createElement('div');
    divExplicacoes.style.marginTop = '0.75rem';
    divExplicacoes.style.paddingTop = '0.75rem';
    divExplicacoes.style.borderTop = '1px solid var(--cor-borda)';

    questao.explicacaoAlternativas.forEach((exp, i) => {
      const p = document.createElement('p');
      p.innerHTML = `<strong>${letras[i]})</strong> ${exp}`;
      p.style.marginBottom = '0.25rem';
      p.style.fontSize = '0.85rem';
      divExplicacoes.appendChild(p);
    });

    feedback.appendChild(divExplicacoes);
  }

  // Mostra botão próximo
  const btnProximo = document.getElementById('quiz-btn-proximo');
  btnProximo.classList.remove('questao__btn--oculto');

  const ehUltima = estado.quizIndiceAtual >= 9;
  btnProximo.textContent = ehUltima ? 'Ver Resultado' : 'Próxima Questão';

  btnProximo.onclick = () => {
    if (ehUltima) {
      finalizarQuiz();
    } else {
      estado.quizIndiceAtual++;
      renderizarQuestaoQuiz();
    }
  };

  // Scroll para ver o feedback
  feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function finalizarQuiz() {
  const total = estado.quizQuestoes.length;
  const acertos = estado.quizAcertos;
  const percentual = Math.round((acertos / total) * 100);

  // Esconde andamento, mostra resultado
  document.getElementById('quiz-andamento').classList.add('quiz--oculto');
  document.getElementById('quiz-resultado-final').classList.remove('quiz--oculto');

  // Renderiza resultado
  const container = document.getElementById('quiz-resultado-card');
  const { classeTitulo, classeCirculo, titulo, mensagem } =
    avaliarDesempenho(percentual);

  container.innerHTML = `
    <h2 class="resultado-card__titulo ${classeTitulo}">${titulo}</h2>

    <div class="resultado-card__percentual">
      <div class="resultado-card__circulo ${classeCirculo}">${percentual}%</div>
    </div>

    <div class="resultado-card__stats">
      <div class="resultado-card__stat">
        <div class="resultado-card__stat-valor resultado-card__stat-valor--acerto">${acertos}</div>
        <div class="resultado-card__stat-rotulo">Acertos</div>
      </div>
      <div class="resultado-card__stat">
        <div class="resultado-card__stat-valor resultado-card__stat-valor--erro">${total - acertos}</div>
        <div class="resultado-card__stat-rotulo">Erros</div>
      </div>
      <div class="resultado-card__stat">
        <div class="resultado-card__stat-valor">${total}</div>
        <div class="resultado-card__stat-rotulo">Total</div>
      </div>
    </div>

    <p class="resultado-card__mensagem">${mensagem}</p>

    <div class="resultado-card__botoes">
      <button class="btn btn--secundario" onclick="iniciarQuiz()">Refazer Quiz</button>
      <button class="btn btn--primario" onclick="irParaSimulado()">Fazer Simulado</button>
    </div>
  `;

  // Salva no histórico
  salvarResultado('Quiz', acertos, total, percentual);
}

// ============================================================
// SIMULADO — LÓGICA
// ============================================================
function configurarSimulado() {
  const btnIniciar = document.getElementById('btn-iniciar-simulado');
  btnIniciar.addEventListener('click', iniciarSimulado);

  const btnFinalizar = document.getElementById('btn-finalizar-simulado');
  btnFinalizar.addEventListener('click', abrirModalConfirmacao);

  // Modal
  document.getElementById('modal-btn-cancelar').addEventListener('click', fecharModal);
  document.getElementById('modal-btn-confirmar').addEventListener('click', finalizarSimulado);
}

function iniciarSimulado() {
  if (bancoQuestoesSimulado.length < 10) {
    alert('O banco de questões do Simulado ainda está sendo preparado.');
    return;
  }

  // Seleciona 10 questões aleatórias
  const embaralhadas = [...bancoQuestoesSimulado].sort(() => Math.random() - 0.5);
  estado.simuladoQuestoes = embaralhadas.slice(0, 10);
  estado.simuladoIndiceAtual = 0;
  estado.simuladoRespostas = new Array(10).fill(null);

  // Mostra tela de andamento
  document.getElementById('simulado-inicio').classList.add('simulado--oculto');
  document.getElementById('simulado-andamento').classList.remove('simulado--oculto');
  document.getElementById('simulado-resultado-final').classList.add('simulado--oculto');

  // Inicia timer
  estado.simuladoTimerSegundos = 0;
  atualizarTimer();
  estado.simuladoTimerInterval = setInterval(() => {
    estado.simuladoTimerSegundos++;
    atualizarTimer();
  }, 1000);

  renderizarQuestaoSimulado();
  renderizarNavegacaoSimulado();
}

function renderizarQuestaoSimulado() {
  const questao = estado.simuladoQuestoes[estado.simuladoIndiceAtual];
  const indice = estado.simuladoIndiceAtual;

  // Atualiza barra de progresso
  document.getElementById('simulado-numero-atual').textContent = indice + 1;
  document.getElementById('simulado-barra-progresso').style.width =
    (indice / 10 * 100) + '%';

  // Questão
  document.getElementById('simulado-questao-numero').textContent = indice + 1;
  document.getElementById('simulado-enunciado').textContent = questao.enunciado;

  // Alternativas
  const containerAlternativas = document.getElementById('simulado-alternativas');
  containerAlternativas.innerHTML = '';

  const letras = ['A', 'B', 'C', 'D', 'E'];
  const respostaAtual = estado.simuladoRespostas[indice];

  questao.alternativas.forEach((alt, i) => {
    const div = document.createElement('div');
    div.className = 'alternativa';
    if (letras[i] === respostaAtual) {
      div.classList.add('alternativa--selecionada');
    }
    div.innerHTML = `
      <span class="alternativa__letra">${letras[i]}</span>
      <span class="alternativa__texto">${alt.texto}</span>
    `;
    div.addEventListener('click', () => selecionarAlternativaSimulado(letras[i]));
    containerAlternativas.appendChild(div);
  });

  // Botões anterior/próximo
  document.getElementById('simulado-btn-anterior').disabled = indice === 0;
  document.getElementById('simulado-btn-proximo').textContent =
    indice === 9 ? 'Finalizar' : 'Próxima →';

  document.getElementById('simulado-btn-anterior').onclick = () => {
    if (indice > 0) {
      estado.simuladoIndiceAtual--;
      renderizarQuestaoSimulado();
      atualizarNavegacaoSimulado();
    }
  };

  document.getElementById('simulado-btn-proximo').onclick = () => {
    if (indice < 9) {
      estado.simuladoIndiceAtual++;
      renderizarQuestaoSimulado();
      atualizarNavegacaoSimulado();
    } else {
      abrirModalConfirmacao();
    }
  };

  atualizarNavegacaoSimulado();
  document.getElementById('simulado-questao').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selecionarAlternativaSimulado(letraSelecionada) {
  const indice = estado.simuladoIndiceAtual;
  estado.simuladoRespostas[indice] = letraSelecionada;

  // Atualiza visual das alternativas
  const alternativas = document.querySelectorAll('#simulado-alternativas .alternativa');
  const letras = ['A', 'B', 'C', 'D', 'E'];

  alternativas.forEach((alt, i) => {
    alt.classList.remove('alternativa--selecionada');
    if (letras[i] === letraSelecionada) {
      alt.classList.add('alternativa--selecionada');
    }
  });

  atualizarNavegacaoSimulado();
}

function renderizarNavegacaoSimulado() {
  const container = document.getElementById('simulado-navegacao');
  container.innerHTML = '';

  for (let i = 0; i < 10; i++) {
    const bolinha = document.createElement('button');
    bolinha.className = 'simulado__nav-bolinha';
    bolinha.textContent = i + 1;

    if (i === estado.simuladoIndiceAtual) {
      bolinha.classList.add('simulado__nav-bolinha--atual');
    } else if (estado.simuladoRespostas[i] !== null) {
      bolinha.classList.add('simulado__nav-bolinha--respondida');
    }

    bolinha.addEventListener('click', () => {
      estado.simuladoIndiceAtual = i;
      renderizarQuestaoSimulado();
    });

    container.appendChild(bolinha);
  }
}

function atualizarNavegacaoSimulado() {
  const bolinhas = document.querySelectorAll('.simulado__nav-bolinha');
  bolinhas.forEach((bolinha, i) => {
    bolinha.classList.remove('simulado__nav-bolinha--atual', 'simulado__nav-bolinha--respondida');
    if (i === estado.simuladoIndiceAtual) {
      bolinha.classList.add('simulado__nav-bolinha--atual');
    } else if (estado.simuladoRespostas[i] !== null) {
      bolinha.classList.add('simulado__nav-bolinha--respondida');
    }
  });
}

function atualizarTimer() {
  const minutos = Math.floor(estado.simuladoTimerSegundos / 60);
  const segundos = estado.simuladoTimerSegundos % 60;
  const formatado =
    String(minutos).padStart(2, '0') + ':' + String(segundos).padStart(2, '0');
  document.getElementById('simulado-timer').textContent = formatado;
}

function abrirModalConfirmacao() {
  const naoRespondidas = estado.simuladoRespostas.filter(r => r === null).length;
  document.getElementById('modal-questoes-faltantes').textContent = naoRespondidas;
  document.getElementById('modal-confirmacao').classList.remove('modal--oculto');
}

function fecharModal() {
  document.getElementById('modal-confirmacao').classList.add('modal--oculto');
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('modal-confirmacao');
    if (!modal.classList.contains('modal--oculto')) {
      fecharModal();
    }
  }
});

// Fechar modal clicando fora
document.getElementById('modal-confirmacao').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    fecharModal();
  }
});

function finalizarSimulado() {
  fecharModal();

  // Para o timer
  clearInterval(estado.simuladoTimerInterval);

  let acertos = 0;
  const letras = ['A', 'B', 'C', 'D', 'E'];

  // Calcula acertos
  estado.simuladoQuestoes.forEach((questao, i) => {
    if (estado.simuladoRespostas[i] === questao.resposta) {
      acertos++;
    }
  });

  const total = estado.simuladoQuestoes.length;
  const percentual = Math.round((acertos / total) * 100);

  // Esconde andamento, mostra resultado
  document.getElementById('simulado-andamento').classList.add('simulado--oculto');
  document.getElementById('simulado-resultado-final').classList.remove('simulado--oculto');

  // Renderiza resultado
  const container = document.getElementById('simulado-resultado-card');
  const { classeTitulo, classeCirculo, titulo, mensagem } =
    avaliarDesempenho(percentual);

  const minutos = Math.floor(estado.simuladoTimerSegundos / 60);
  const segundos = estado.simuladoTimerSegundos % 60;
  const tempoFormatado =
    String(minutos).padStart(2, '0') + ':' + String(segundos).padStart(2, '0');

  container.innerHTML = `
    <h2 class="resultado-card__titulo ${classeTitulo}">${titulo}</h2>

    <div class="resultado-card__percentual">
      <div class="resultado-card__circulo ${classeCirculo}">${percentual}%</div>
    </div>

    <div class="resultado-card__stats">
      <div class="resultado-card__stat">
        <div class="resultado-card__stat-valor resultado-card__stat-valor--acerto">${acertos}</div>
        <div class="resultado-card__stat-rotulo">Acertos</div>
      </div>
      <div class="resultado-card__stat">
        <div class="resultado-card__stat-valor resultado-card__stat-valor--erro">${total - acertos}</div>
        <div class="resultado-card__stat-rotulo">Erros</div>
      </div>
      <div class="resultado-card__stat">
        <div class="resultado-card__stat-valor">${tempoFormatado}</div>
        <div class="resultado-card__stat-rotulo">Tempo</div>
      </div>
    </div>

    <p class="resultado-card__mensagem">${mensagem}</p>

    <div class="resultado-card__botoes">
      <button class="btn btn--secundario" onclick="iniciarSimulado()">Refazer Simulado</button>
      <button class="btn btn--primario" onclick="irParaQuiz()">Fazer Quiz</button>
    </div>
  `;

  // Renderiza gabarito
  renderizarGabaritoSimulado();

  // Salva no histórico
  salvarResultado('Simulado', acertos, total, percentual);
}

function renderizarGabaritoSimulado() {
  const container = document.getElementById('simulado-gabarito');
  const letras = ['A', 'B', 'C', 'D', 'E'];

  container.innerHTML = '<h2 style="text-align:center; margin-bottom:1rem;">Gabarito Comentado</h2>';

  estado.simuladoQuestoes.forEach((questao, i) => {
    const respostaAluno = estado.simuladoRespostas[i];
    const acertou = respostaAluno === questao.resposta;
    const letraCorreta = questao.resposta;
    const textoCorreto = questao.alternativas.find((_, idx) => letras[idx] === letraCorreta)?.texto || '';

    const div = document.createElement('div');
    div.className = 'gabarito-item';

    div.innerHTML = `
      <div class="gabarito-item__cabecalho">
        <span class="gabarito-item__numero">Questão ${i + 1}</span>
        <span class="gabarito-item__status ${acertou ? 'gabarito-item__status--acerto' : 'gabarito-item__status--erro'}">
          ${acertou ? '✓ Acertou' : '✗ Errou'}
        </span>
      </div>
      <p class="gabarito-item__enunciado">${questao.enunciado}</p>
      <div class="gabarito-item__info">
        <span><strong>Sua resposta:</strong> ${respostaAluno || '(não respondida)'}</span>
        <span><strong>Correta:</strong> ${letraCorreta}) ${textoCorreto}</span>
      </div>
      <div class="gabarito-item__explicacao">${questao.explicacao}</div>
    `;

    container.appendChild(div);
  });

  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// RESULTADOS — HISTÓRICO
// ============================================================
function configurarResultados() {
  document.getElementById('btn-ir-quiz').addEventListener('click', () => {
    document.querySelector('.nav__tab[data-tab="quiz"]').click();
  });
}

function salvarResultado(tipo, acertos, total, percentual) {
  const resultado = {
    tipo,
    acertos,
    total,
    percentual,
    data: new Date().toLocaleString('pt-BR')
  };

  estado.historico.unshift(resultado);

  // Salva no localStorage
  try {
    localStorage.setItem('revisao-matematica-historico', JSON.stringify(estado.historico));
  } catch (e) {
    console.warn('Não foi possível salvar o histórico no localStorage.');
  }

  atualizarPainelResultados();
}

function carregarHistorico() {
  try {
    const dados = localStorage.getItem('revisao-matematica-historico');
    if (dados) {
      estado.historico = JSON.parse(dados);
    }
  } catch (e) {
    estado.historico = [];
  }
}

function atualizarPainelResultados() {
  const vazio = document.getElementById('resultados-vazio');
  const historico = document.getElementById('resultados-historico');
  const cards = document.getElementById('resultados-cards');

  if (estado.historico.length === 0) {
    vazio.classList.remove('resultados--oculto');
    historico.classList.add('resultados--oculto');
  } else {
    vazio.classList.add('resultados--oculto');
    historico.classList.remove('resultados--oculto');

    cards.innerHTML = estado.historico.map(r => {
      const { classeCirculo } = avaliarDesempenho(r.percentual);
      return `
        <div class="resultado-historico-card">
          <div class="resultado-historico-card__info">
            <span class="resultado-historico-card__tipo">${r.tipo}</span>
            <span class="resultado-historico-card__data">${r.data}</span>
          </div>
          <div class="resultado-historico-card__score">
            <span class="resultado-historico-card__percentual ${classeCirculo}">
              ${r.percentual}%
            </span>
            <span class="resultado-historico-card__detalhe">
              ${r.acertos}/${r.total} acertos
            </span>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ============================================================
// AVALIAÇÃO DE DESEMPENHO
// ============================================================
function avaliarDesempenho(percentual) {
  if (percentual >= 90) {
    return {
      classeTitulo: 'resultado-card__titulo--otimo',
      classeCirculo: 'resultado-card__circulo--otimo',
      titulo: '🌟 Excelente!',
      mensagem: 'Parabéns! Você demonstrou um domínio excelente sobre grandezas e medidas. Continue assim que a prova será tranquila!'
    };
  } else if (percentual >= 70) {
    return {
      classeTitulo: 'resultado-card__titulo--bom',
      classeCirculo: 'resultado-card__circulo--bom',
      titulo: '👍 Muito Bom!',
      mensagem: 'Você tem uma boa base, mas ainda pode melhorar. Revise os tópicos em que errou e tente novamente.'
    };
  } else if (percentual >= 50) {
    return {
      classeTitulo: 'resultado-card__titulo--regular',
      classeCirculo: 'resultado-card__circulo--regular',
      titulo: '📚 Precisa Estudar Mais',
      mensagem: 'Você está no caminho certo, mas ainda tem lacunas importantes. Volte ao resumo, estude as conversões e refaça o quiz.'
    };
  } else {
    return {
      classeTitulo: 'resultado-card__titulo--ruim',
      classeCirculo: 'resultado-card__circulo--ruim',
      titulo: '⚠️ Atenção!',
      mensagem: 'Seu desempenho indica que você precisa revisar o conteúdo com mais calma. Leia o resumo com atenção, anote as dúvidas e tente novamente.'
    };
  }
}

// ============================================================
// UTILITÁRIOS DE NAVEGAÇÃO
// ============================================================
function irParaSimulado() {
  document.querySelector('.nav__tab[data-tab="simulado"]').click();
}

function irParaQuiz() {
  document.querySelector('.nav__tab[data-tab="quiz"]').click();
}

// ============================================================
// EXPORTAÇÃO PARA USO NO HTML (eventos inline)
// ============================================================
window.iniciarQuiz = iniciarQuiz;
window.iniciarSimulado = iniciarSimulado;
window.irParaQuiz = irParaQuiz;
window.irParaSimulado = irParaSimulado;
window.fecharModal = fecharModal;
window.finalizarSimulado = finalizarSimulado;