export type MatematicaResumo = {
  titulo: string
  texto: string
}

export type MatematicaQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type MatematicaEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, MatematicaResumo>
  quiz: MatematicaQuizPergunta[]
}

const respostaProcessoMatematico =
  'No ENEM, Matemática costuma cobrar interpretação de problemas, proporcionalidade, gráficos, funções, unidades, geometria, estatística e aplicações do cotidiano.'

export const matematicaEstudos: MatematicaEstudo[] = [
  {
    slug: 'basica-i',
    introducao:
      'Matemática Básica I revisa operações, potenciação, radiciação, expressões numéricas, múltiplos, divisores, MDC, MMC, polinômios, frações, números decimais e dízimas. Esse bloco é a base para quase todos os outros assuntos, porque muitos erros em questões mais difíceis acontecem por falhas em contas simples, sinais, unidades ou interpretação do enunciado.',
    conceitos: [
      'operações',
      'potenciação',
      'radiciação',
      'expressões numéricas',
      'MDC',
      'MMC',
      'frações',
      'decimais',
      'dízimas',
      'polinômios',
    ],
    dicaEnem:
      'Antes de calcular, traduza o texto do problema. Identifique os dados, a unidade, a pergunta final e a operação necessária. Muitas questões do ENEM são mais interpretação do que conta pesada.',
    resumos: {
      'operacoes-basicas': {
        titulo: 'Operações Básicas',
        texto:
          'As operações básicas envolvem adição, subtração, multiplicação e divisão. Elas aparecem em praticamente todos os assuntos da Matemática, desde porcentagem até geometria e estatística. O estudante precisa entender não apenas como calcular, mas também quando usar cada operação. Somar pode representar juntar quantidades; subtrair pode indicar diferença ou perda; multiplicar pode representar repetição, área ou proporção; dividir pode indicar repartição ou razão. No ENEM, operações básicas aparecem em consumo, preços, escalas, tabelas, gráficos, medidas, receitas, mapas e comparações entre propostas.',
      },
      'potenciacao-e-radiciacao': {
        titulo: 'Potenciação e Radiciação',
        texto:
          'Potenciação representa a multiplicação de fatores iguais. Por exemplo, 2³ significa 2 × 2 × 2. As propriedades das potências ajudam a simplificar expressões, resolver problemas de crescimento, trabalhar com notação científica e interpretar situações envolvendo áreas, volumes e escalas. A radiciação está relacionada à operação inversa da potenciação em muitos casos. Raízes aparecem em geometria, equações, medidas e teorema de Pitágoras. No ENEM, esse conteúdo costuma ser cobrado em problemas contextualizados, principalmente quando envolve unidades muito grandes ou muito pequenas.',
      },
      'expressoes-numericas': {
        titulo: 'Expressões Numéricas',
        texto:
          'Expressões numéricas combinam números, sinais, parênteses, colchetes, chaves e operações. A ordem correta de resolução é essencial: primeiro resolvem-se parênteses e agrupamentos, depois potências e raízes, em seguida multiplicações e divisões, e por fim somas e subtrações. Muitos erros acontecem por ignorar sinais negativos, inverter etapas ou resolver da esquerda para a direita sem respeitar prioridades. No ENEM, a expressão geralmente aparece dentro de um problema real, como cálculo de gastos, descontos, consumo de energia ou comparação de valores.',
      },
      'multiplos-divisores-mdc-e-mmc': {
        titulo: 'Múltiplos, Divisores, MDC e MMC',
        texto:
          'Múltiplos e divisores ajudam a resolver problemas de agrupamento, repartição, periodicidade e repetição de eventos. O MDC, máximo divisor comum, indica o maior número que divide duas ou mais quantidades ao mesmo tempo, sendo útil em problemas de divisão em partes iguais, cortes de materiais e organização de grupos. O MMC, mínimo múltiplo comum, indica o menor múltiplo compartilhado entre números, aparecendo em problemas de ciclos, encontros periódicos, horários, semáforos, remédios tomados em intervalos diferentes e eventos que se repetem.',
      },
      'operacoes-basicas-com-polinomios': {
        titulo: 'Operações Básicas com Polinômios',
        texto:
          'Polinômios são expressões algébricas formadas por termos com números, letras e expoentes naturais. Somar e subtrair polinômios exige reunir termos semelhantes, ou seja, termos que possuem a mesma parte literal. Na multiplicação, usa-se a propriedade distributiva, multiplicando cada termo por outro. Esse conteúdo prepara o estudante para equações, funções, produtos notáveis, fatoração e modelagem de situações reais. No ENEM, a álgebra costuma aparecer em fórmulas, padrões, relações entre grandezas e interpretação de modelos matemáticos.',
      },
      'fracoes-decimais-e-dizimas': {
        titulo: 'Frações, Decimais e Dízimas',
        texto:
          'Frações representam partes de um todo, razões, divisões ou comparações entre grandezas. Números decimais são outra forma de representar frações, principalmente aquelas relacionadas a potências de 10. Dízimas periódicas possuem repetição infinita de algarismos e podem ser convertidas em fração geratriz. Esse conteúdo é essencial para porcentagem, probabilidade, escalas, razão, proporção e estatística. No ENEM, é comum aparecer em questões sobre descontos, consumo, pesquisas, gráficos, mapas e divisão proporcional.',
      },
    },
    quiz: [
      {
        pergunta: 'Em expressões numéricas, o que deve ser resolvido primeiro?',
        opcoes: ['Parênteses', 'Somas finais', 'Unidades de medida', 'Texto do rodapé'],
        resposta: 'Parênteses',
      },
      {
        pergunta: 'MMC é muito usado em problemas de:',
        opcoes: [
          'Ciclos e encontros periódicos',
          'Apenas áreas de círculo',
          'Somente gráficos de barras',
          'Classificação biológica',
        ],
        resposta: 'Ciclos e encontros periódicos',
      },
      {
        pergunta: 'MDC indica:',
        opcoes: [
          'Maior divisor comum',
          'Menor divisor comum',
          'Média decimal composta',
          'Multiplicação de casas',
        ],
        resposta: 'Maior divisor comum',
      },
      {
        pergunta: 'Na soma de polinômios, devemos reunir:',
        opcoes: [
          'Termos semelhantes',
          'Apenas expoentes diferentes',
          'Todas as letras sem regra',
          'Somente constantes negativas',
        ],
        resposta: 'Termos semelhantes',
      },
      {
        pergunta: 'Uma fração pode representar:',
        opcoes: [
          'Parte de um todo ou uma razão',
          'Apenas número inteiro positivo',
          'Somente raiz quadrada',
          'Unidade de temperatura',
        ],
        resposta: 'Parte de um todo ou uma razão',
      },
    ],
  },
  {
    slug: 'basica-ii',
    introducao:
      'Matemática Básica II aprofunda temas muito cobrados no ENEM, como razão, proporção, porcentagem, regra de três, escalas, unidades de medida e sistemas de numeração. Esses conteúdos aparecem em situações práticas do cotidiano, como compras, mapas, receitas, velocidade, consumo, pesquisas e comparação de propostas.',
    conceitos: [
      'razão',
      'proporção',
      'porcentagem',
      'regra de três',
      'escala',
      'unidades de medida',
      'grandezas proporcionais',
      'sistema métrico',
    ],
    dicaEnem:
      'Sempre confira a unidade antes de resolver. Muitas questões ficam simples quando você percebe se está trabalhando com metros, quilômetros, litros, horas, minutos, porcentagem ou escala.',
    resumos: {
      'razao-e-proporcao': {
        titulo: 'Razão e Proporção',
        texto:
          'Razão é uma comparação entre duas grandezas por meio de uma divisão. Proporção é a igualdade entre duas razões. Esses conceitos aparecem em mapas, escalas, receitas, velocidade média, densidade, produtividade, consumo e divisão proporcional. No ENEM, a dificuldade geralmente não está na conta, mas em perceber quais grandezas estão sendo comparadas. Uma boa estratégia é escrever a relação entre os dados e verificar se a grandeza aumenta ou diminui junto com a outra.',
      },
      porcentagem: {
        titulo: 'Porcentagem',
        texto:
          'Porcentagem significa uma razão com denominador 100. Ela é usada para representar descontos, aumentos, taxas, juros, pesquisas, impostos, rendimento, inflação e variações de preço. Um aumento de 20% não é o mesmo que um desconto de 20% aplicado depois, pois a base de cálculo muda. No ENEM, porcentagem aparece com frequência em gráficos, tabelas e situações financeiras. É importante saber transformar porcentagens em frações ou números decimais para facilitar os cálculos.',
      },
      'regra-de-tres': {
        titulo: 'Regra de Três',
        texto:
          'Regra de três é um método para resolver problemas envolvendo grandezas proporcionais. Pode ser simples ou composta, direta ou inversa. Na proporção direta, quando uma grandeza aumenta, a outra também aumenta. Na proporção inversa, quando uma grandeza aumenta, a outra diminui. O ENEM costuma cobrar regra de três em problemas de produção, tempo, velocidade, consumo, quantidade de trabalhadores, receitas, escalas e rendimento de máquinas.',
      },
      escalas: {
        titulo: 'Escalas',
        texto:
          'Escala é a relação entre uma medida no desenho, mapa ou planta e a medida real. Uma escala 1:100 significa que 1 unidade no desenho corresponde a 100 unidades na realidade. Esse conteúdo aparece em mapas, maquetes, plantas de casas, distâncias e representações reduzidas ou ampliadas. No ENEM, é comum misturar escala com conversão de unidades, por isso é importante transformar centímetros, metros e quilômetros corretamente.',
      },
      'unidades-de-medida': {
        titulo: 'Unidades de Medida',
        texto:
          'Unidades de medida permitem comparar grandezas como comprimento, área, volume, massa, tempo e capacidade. O sistema métrico usa relações decimais, como metro, centímetro, quilômetro, litro, mililitro, grama e quilograma. Em áreas e volumes, a conversão exige cuidado maior, pois as unidades são quadradas ou cúbicas. No ENEM, unidades aparecem em consumo de água, energia, velocidade, área de terrenos, volume de reservatórios e interpretação de gráficos.',
      },
    },
    quiz: [
      {
        pergunta: 'Porcentagem representa uma razão com denominador:',
        opcoes: ['100', '10', '1.000 sempre', '2'],
        resposta: '100',
      },
      {
        pergunta: 'Na proporção inversa, quando uma grandeza aumenta, a outra:',
        opcoes: ['Diminui', 'Aumenta sempre', 'Fica obrigatoriamente igual', 'Some'],
        resposta: 'Diminui',
      },
      {
        pergunta: 'Uma escala 1:100 significa que:',
        opcoes: [
          '1 unidade no desenho representa 100 unidades reais',
          '100 unidades no desenho representam 1 unidade real sempre',
          'O desenho não tem relação com a realidade',
          'A medida real é sempre zero',
        ],
        resposta: '1 unidade no desenho representa 100 unidades reais',
      },
      {
        pergunta: 'Antes de resolver uma questão com medidas, é importante:',
        opcoes: [
          'Verificar e converter unidades',
          'Ignorar metros e centímetros',
          'Usar qualquer unidade sem padrão',
          'Eliminar os dados do problema',
        ],
        resposta: 'Verificar e converter unidades',
      },
      {
        pergunta: 'Razão é usada para:',
        opcoes: [
          'Comparar duas grandezas por divisão',
          'Somar palavras do enunciado',
          'Classificar seres vivos',
          'Medir apenas temperatura',
        ],
        resposta: 'Comparar duas grandezas por divisão',
      },
    ],
  },
  {
    slug: 'algebra',
    introducao:
      'Álgebra estuda expressões, equações, inequações, sistemas, produtos notáveis e fatoração. Ela permite representar situações com letras e resolver problemas em que uma quantidade desconhecida precisa ser encontrada. No ENEM, a Álgebra costuma aparecer em fórmulas, padrões, funções, problemas financeiros e relações entre grandezas.',
    conceitos: [
      'incógnita',
      'equação',
      'inequação',
      'sistema linear',
      'produto notável',
      'fatoração',
      'expressão algébrica',
      'modelagem',
    ],
    dicaEnem:
      'Quando aparecer uma situação com valor desconhecido, tente transformar o texto em uma equação. Defina o que a letra representa antes de começar a calcular.',
    resumos: {
      'equacoes-do-1o-grau': {
        titulo: 'Equações do 1º Grau',
        texto:
          'Equações do 1º grau possuem incógnita com expoente 1 e podem ser resolvidas isolando a variável. Elas aparecem em problemas de idade, preço, quantidade, salário, consumo, tarifas e comparação de planos. A principal habilidade é traduzir o enunciado para uma linguagem matemática. No ENEM, muitas questões não mostram a equação pronta; o estudante precisa montar a relação entre os dados.',
      },
      'equacoes-do-2o-grau': {
        titulo: 'Equações do 2º Grau',
        texto:
          'Equações do 2º grau possuem a forma ax² + bx + c = 0, com a diferente de zero. Elas podem ser resolvidas por fatoração, fórmula de Bhaskara ou análise gráfica. As raízes indicam os valores que tornam a equação verdadeira. Esse conteúdo aparece em problemas de área, movimento, lucro, otimização e funções quadráticas. Mais importante que decorar a fórmula é entender o significado das raízes dentro do contexto.',
      },
      inequacoes: {
        titulo: 'Inequações',
        texto:
          'Inequações são desigualdades matemáticas que usam sinais como maior que, menor que, maior ou igual e menor ou igual. Elas aparecem quando o problema envolve limites, condições, faixas de valores ou comparações. Ao multiplicar ou dividir uma inequação por número negativo, o sentido do sinal deve ser invertido. No ENEM, inequações podem aparecer em problemas de orçamento, quantidade mínima, capacidade máxima ou intervalos possíveis.',
      },
      'sistemas-lineares': {
        titulo: 'Sistemas Lineares',
        texto:
          'Sistemas lineares envolvem duas ou mais equações com incógnitas relacionadas. Eles podem ser resolvidos por substituição, adição ou comparação. No cotidiano, aparecem em problemas de preços de produtos, misturas, ingressos, quantidades e combinações. O ENEM costuma cobrar sistemas em situações contextualizadas, nas quais o estudante precisa montar as equações antes de resolver.',
      },
      'produtos-notaveis-e-fatoracao': {
        titulo: 'Produtos Notáveis e Fatoração',
        texto:
          'Produtos notáveis são padrões de multiplicação algébrica que facilitam cálculos, como quadrado da soma, quadrado da diferença e produto da soma pela diferença. Fatoração é o processo inverso, transformando uma expressão em produto de fatores. Esses conteúdos ajudam a simplificar expressões, resolver equações e entender funções. No ENEM, podem aparecer de forma indireta em problemas algébricos e geométricos.',
      },
    },
    quiz: [
      {
        pergunta: 'Uma equação do 1º grau possui incógnita com expoente:',
        opcoes: ['1', '2', '0 sempre', 'Negativo obrigatório'],
        resposta: '1',
      },
      {
        pergunta: 'Em uma inequação, ao multiplicar por número negativo, devemos:',
        opcoes: [
          'Inverter o sinal da desigualdade',
          'Apagar a incógnita',
          'Somar 100 ao resultado',
          'Ignorar a desigualdade',
        ],
        resposta: 'Inverter o sinal da desigualdade',
      },
      {
        pergunta: 'Sistemas lineares são úteis para resolver problemas com:',
        opcoes: [
          'Mais de uma incógnita relacionada',
          'Apenas figuras sem medidas',
          'Somente fenômenos biológicos',
          'Nenhuma equação',
        ],
        resposta: 'Mais de uma incógnita relacionada',
      },
      {
        pergunta: 'Fatoração transforma uma expressão em:',
        opcoes: [
          'Produto de fatores',
          'Texto sem números',
          'Gráfico circular',
          'Unidade de medida',
        ],
        resposta: 'Produto de fatores',
      },
      {
        pergunta: 'A fórmula de Bhaskara é usada em:',
        opcoes: [
          'Equações do 2º grau',
          'Porcentagem simples apenas',
          'MDC',
          'Conversão de litros',
        ],
        resposta: 'Equações do 2º grau',
      },
    ],
  },
  {
    slug: 'funcoes',
    introducao:
      'Funções descrevem relações entre variáveis. O conteúdo envolve função do 1º grau, função do 2º grau, função exponencial, função logarítmica, transformações de gráficos e matemática financeira. No ENEM, funções aparecem em gráficos, tabelas, fórmulas, crescimento populacional, custos, lucros, tarifas, juros e situações do cotidiano.',
    conceitos: [
      'variável',
      'domínio',
      'imagem',
      'gráfico',
      'função afim',
      'função quadrática',
      'função exponencial',
      'função logarítmica',
      'taxa de variação',
      'matemática financeira',
    ],
    dicaEnem:
      'Em funções, olhe o gráfico e pergunte: quando cresce, quando decresce, onde cruza os eixos, qual é a taxa de variação e o que cada variável representa no problema.',
    resumos: {
      'introducao-as-funcoes': {
        titulo: 'Introdução às Funções',
        texto:
          'Função é uma relação que associa cada valor de entrada a um único valor de saída. A variável independente geralmente é representada por x, enquanto a variável dependente pode ser y ou f(x). Funções podem aparecer em gráficos, tabelas, fórmulas ou descrições textuais. Elas são usadas para modelar custo, lucro, tempo, distância, temperatura, crescimento e consumo. No ENEM, é essencial interpretar o significado das variáveis e não apenas manipular fórmulas.',
      },
      'funcoes-do-1o-grau': {
        titulo: 'Funções do 1º Grau',
        texto:
          'A função do 1º grau tem forma f(x) = ax + b. O coeficiente a indica a taxa de variação e a inclinação da reta; o coeficiente b indica o ponto em que o gráfico cruza o eixo y. Se a é positivo, a função é crescente; se a é negativo, é decrescente. Esse tipo de função aparece em tarifas de aplicativo, contas de água, salário com comissão, custo fixo e variável, velocidade constante e comparação de planos.',
      },
      'funcoes-do-2o-grau': {
        titulo: 'Funções do 2º Grau',
        texto:
          'A função do 2º grau tem forma f(x) = ax² + bx + c e seu gráfico é uma parábola. O sinal de a define a concavidade: se a > 0, a parábola é voltada para cima; se a < 0, é voltada para baixo. As raízes indicam onde a parábola cruza o eixo x, e o vértice representa ponto de máximo ou mínimo. No ENEM, funções quadráticas aparecem em problemas de área, lançamento, lucro, custo e otimização.',
      },
      'funcoes-exponenciais-e-logaritmicas': {
        titulo: 'Funções Exponenciais e Logarítmicas',
        texto:
          'Funções exponenciais modelam crescimento ou decaimento proporcional, como juros compostos, crescimento populacional, proliferação de bactérias, radioatividade e valorização de investimentos. Logaritmos são operações inversas da potenciação e ajudam a resolver situações em que a incógnita está no expoente. No ENEM, o foco costuma ser interpretar crescimento rápido, decaimento e escalas como pH, intensidade sonora e terremotos.',
      },
      'transformacoes-de-graficos': {
        titulo: 'Transformações de Gráficos',
        texto:
          'Transformações de gráficos incluem deslocamentos, reflexões, alongamentos e compressões. Somar uma constante fora da função desloca o gráfico verticalmente; alterar o argumento da função pode deslocar o gráfico horizontalmente. Multiplicar a função por valores positivos ou negativos pode mudar escala ou refletir o gráfico. Esse tema ajuda a comparar modelos, interpretar mudanças visuais e compreender como pequenas alterações na fórmula afetam o comportamento da função.',
      },
      'equacoes-e-inequacoes-exponenciais': {
        titulo: 'Equações e Inequações Exponenciais',
        texto:
          'Equações exponenciais envolvem incógnita no expoente. Muitas podem ser resolvidas escrevendo potências na mesma base. Inequações exponenciais exigem cuidado com o comportamento da base: se a base é maior que 1, a função cresce; se está entre 0 e 1, a função decresce. Aplicações envolvem juros compostos, crescimento populacional, decaimento radioativo e modelos de multiplicação rápida.',
      },
      'equacoes-e-inequacoes-logaritmicas': {
        titulo: 'Equações e Inequações Logarítmicas',
        texto:
          'Equações logarítmicas usam propriedades dos logaritmos e exigem condição de existência: o logaritmando deve ser positivo e a base deve ser positiva e diferente de 1. Logaritmos aparecem em escalas que comprimem números muito grandes ou muito pequenos, como pH, escala Richter e decibéis. No ENEM, é comum que a questão cobre mais interpretação da escala do que cálculos longos.',
      },
      'matematica-financeira': {
        titulo: 'Matemática Financeira',
        texto:
          'Matemática financeira envolve porcentagem, juros simples, juros compostos, descontos, acréscimos, parcelas e comparação de propostas. Juros simples crescem linearmente, pois são calculados sempre sobre o capital inicial. Juros compostos crescem de forma exponencial, pois os juros passam a render sobre juros anteriores. Em problemas, identifique capital, taxa, tempo e montante. No ENEM, esse tema aparece em financiamentos, investimentos, compras parceladas, inflação e descontos sucessivos.',
      },
    },
    quiz: [
      {
        pergunta: 'Na função f(x)=ax+b, o coeficiente a indica:',
        opcoes: [
          'Taxa de variação',
          'Área total sempre',
          'Número de raízes complexas',
          'Valor máximo obrigatório',
        ],
        resposta: 'Taxa de variação',
      },
      {
        pergunta: 'O gráfico de uma função do 2º grau é:',
        opcoes: ['Parábola', 'Circunferência sempre', 'Reta vertical', 'Ponto único'],
        resposta: 'Parábola',
      },
      {
        pergunta: 'Juros compostos estão associados a:',
        opcoes: [
          'Crescimento exponencial',
          'Crescimento sempre nulo',
          'Subtração fixa apenas',
          'Divisão por zero',
        ],
        resposta: 'Crescimento exponencial',
      },
      {
        pergunta: 'Logaritmo é operação inversa de:',
        opcoes: ['Potenciação', 'Soma', 'Porcentagem', 'MMC'],
        resposta: 'Potenciação',
      },
      {
        pergunta: 'Em uma função, cada valor de entrada deve ter:',
        opcoes: [
          'Um único valor de saída',
          'Infinitas saídas obrigatórias',
          'Nenhuma saída',
          'Apenas saídas negativas',
        ],
        resposta: 'Um único valor de saída',
      },
    ],
  },
  {
    slug: 'geometria-plana',
    introducao:
      'Geometria Plana estuda figuras em duas dimensões, como triângulos, quadriláteros, polígonos, circunferências e círculos. O conteúdo envolve perímetro, área, ângulos, semelhança, teorema de Pitágoras e relações métricas. No ENEM, aparece em terrenos, plantas, mapas, construções, embalagens, pisos e situações de medição.',
    conceitos: [
      'ponto',
      'reta',
      'ângulo',
      'triângulo',
      'polígono',
      'perímetro',
      'área',
      'circunferência',
      'círculo',
      'Pitágoras',
      'semelhança',
    ],
    dicaEnem:
      'Em Geometria Plana, desenhe a situação quando possível. Identifique se a questão pede comprimento, área, ângulo, proporção ou comparação entre figuras.',
    resumos: {
      'angulos-e-poligonos': {
        titulo: 'Ângulos e Polígonos',
        texto:
          'Ângulos medem a abertura entre duas semirretas e aparecem em triângulos, polígonos, circunferências e problemas de direção. Polígonos são figuras fechadas formadas por segmentos de reta. A soma dos ângulos internos de um polígono depende do número de lados. No ENEM, esse conteúdo pode aparecer em mosaicos, construções, trajetórias, mapas e padrões geométricos.',
      },
      triangulos: {
        titulo: 'Triângulos',
        texto:
          'Triângulos são polígonos de três lados e possuem soma dos ângulos internos igual a 180°. Podem ser classificados pelos lados ou pelos ângulos. O teorema de Pitágoras vale para triângulos retângulos e relaciona catetos e hipotenusa. Semelhança de triângulos permite comparar medidas proporcionais. No ENEM, triângulos aparecem em rampas, sombras, alturas inacessíveis, mapas e estruturas.',
      },
      'quadrilateros-e-poligonos': {
        titulo: 'Quadriláteros e Polígonos',
        texto:
          'Quadriláteros são polígonos de quatro lados, como quadrado, retângulo, losango, paralelogramo e trapézio. Cada figura possui propriedades próprias de lados, ângulos e diagonais. Polígonos regulares possuem lados e ângulos iguais. O ENEM costuma cobrar áreas, perímetros e decomposição de figuras, em que uma forma maior pode ser dividida em partes mais simples.',
      },
      'areas-e-perimetros': {
        titulo: 'Áreas e Perímetros',
        texto:
          'Perímetro é a medida do contorno de uma figura. Área mede a superfície ocupada. Retângulos, triângulos, trapézios, círculos e polígonos podem aparecer em problemas de terrenos, pisos, pinturas, plantações e construção. Um erro comum é confundir área com perímetro. No ENEM, muitas questões exigem converter unidades e interpretar se a situação envolve comprimento linear ou superfície.',
      },
      'circunferencia-e-circulo': {
        titulo: 'Circunferência e Círculo',
        texto:
          'Circunferência é a linha formada por todos os pontos a uma mesma distância do centro. Círculo é a região interna limitada pela circunferência. O raio liga o centro a um ponto da circunferência, e o diâmetro corresponde ao dobro do raio. Comprimento da circunferência e área do círculo aparecem em rodas, praças, pistas, reservatórios e objetos circulares. O número π é essencial nesses cálculos.',
      },
    },
    quiz: [
      {
        pergunta: 'A soma dos ângulos internos de um triângulo é:',
        opcoes: ['180°', '90°', '360°', '45°'],
        resposta: '180°',
      },
      {
        pergunta: 'Perímetro mede:',
        opcoes: [
          'O contorno da figura',
          'A superfície interna sempre',
          'O volume de um sólido',
          'A massa de um objeto',
        ],
        resposta: 'O contorno da figura',
      },
      {
        pergunta: 'Área mede:',
        opcoes: [
          'A superfície ocupada',
          'Apenas o contorno',
          'A altura de qualquer objeto',
          'A velocidade média',
        ],
        resposta: 'A superfície ocupada',
      },
      {
        pergunta: 'O teorema de Pitágoras é usado em:',
        opcoes: [
          'Triângulos retângulos',
          'Todos os círculos',
          'Qualquer tabela',
          'Equações sem medidas',
        ],
        resposta: 'Triângulos retângulos',
      },
      {
        pergunta: 'O diâmetro de uma circunferência corresponde:',
        opcoes: [
          'Ao dobro do raio',
          'À metade do raio',
          'À área do círculo',
          'Ao valor de π sempre',
        ],
        resposta: 'Ao dobro do raio',
      },
    ],
  },
  {
    slug: 'geometria-espacial',
    introducao:
      'Geometria Espacial estuda sólidos em três dimensões, como prismas, cilindros, pirâmides, cones e esferas. O conteúdo envolve volume, área total, capacidade, planificações e relações entre medidas. No ENEM, aparece em caixas, reservatórios, embalagens, construções, objetos do cotidiano e comparação de capacidades.',
    conceitos: [
      'sólido geométrico',
      'volume',
      'área total',
      'prisma',
      'cilindro',
      'pirâmide',
      'cone',
      'esfera',
      'capacidade',
      'planificação',
    ],
    dicaEnem:
      'Em Geometria Espacial, identifique o sólido e veja se a pergunta pede volume, área, capacidade ou material necessário para cobrir a superfície.',
    resumos: {
      prismas: {
        titulo: 'Prismas',
        texto:
          'Prismas são sólidos com duas bases paralelas e congruentes. O volume de um prisma é calculado multiplicando a área da base pela altura. Caixas, salas, piscinas retangulares e embalagens costumam ser modeladas por prismas. No ENEM, prismas aparecem em problemas de capacidade, volume de água, quantidade de material e comparação entre formatos.',
      },
      cilindros: {
        titulo: 'Cilindros',
        texto:
          'Cilindros possuem duas bases circulares paralelas e uma superfície lateral curva. O volume depende da área da base circular e da altura. Latas, caixas d’água, tubos e reservatórios são exemplos comuns. O ENEM pode cobrar volume, área lateral, área total e conversão entre unidades de volume e capacidade, como cm³, m³, litros e mililitros.',
      },
      piramides: {
        titulo: 'Pirâmides',
        texto:
          'Pirâmides possuem uma base poligonal e faces laterais triangulares que se encontram em um vértice. O volume de uma pirâmide corresponde a um terço do produto entre a área da base e a altura. Esse conteúdo aparece em monumentos, embalagens, estruturas e comparação com prismas. O ENEM pode cobrar interpretação de fórmulas e identificação da altura correta.',
      },
      cones: {
        titulo: 'Cones',
        texto:
          'Cones possuem base circular e uma superfície lateral que se encontra em um vértice. Seu volume é um terço do volume de um cilindro com mesma base e mesma altura. Casquinhas, funis e alguns reservatórios podem ser modelados por cones. Em questões do ENEM, é importante diferenciar raio, altura e geratriz.',
      },
      esferas: {
        titulo: 'Esferas',
        texto:
          'Esferas são sólidos perfeitamente arredondados em que todos os pontos da superfície estão à mesma distância do centro. Bolas, planetas e gotas podem ser aproximados por esferas. O volume e a área da esfera envolvem o raio e o valor de π. No ENEM, esferas aparecem em problemas de comparação de volumes, objetos arredondados e interpretação de modelos.',
      },
    },
    quiz: [
      {
        pergunta: 'Volume mede:',
        opcoes: [
          'O espaço ocupado por um sólido',
          'Apenas o contorno de uma figura plana',
          'A inclinação de uma reta',
          'A média de uma lista',
        ],
        resposta: 'O espaço ocupado por um sólido',
      },
      {
        pergunta: 'O volume de um prisma é calculado por:',
        opcoes: [
          'Área da base vezes altura',
          'Perímetro vezes 2',
          'Raio dividido por π',
          'Soma dos ângulos internos',
        ],
        resposta: 'Área da base vezes altura',
      },
      {
        pergunta: 'Um cilindro possui bases:',
        opcoes: ['Circulares', 'Triangulares sempre', 'Quadradas obrigatoriamente', 'Sem forma definida'],
        resposta: 'Circulares',
      },
      {
        pergunta: 'O volume de uma pirâmide é:',
        opcoes: [
          'Um terço do produto entre área da base e altura',
          'Igual ao perímetro da base',
          'Sempre igual ao de uma esfera',
          'Independente da altura',
        ],
        resposta: 'Um terço do produto entre área da base e altura',
      },
      {
        pergunta: 'Litro é uma unidade associada principalmente a:',
        opcoes: ['Capacidade', 'Ângulo', 'Velocidade', 'Temperatura'],
        resposta: 'Capacidade',
      },
    ],
  },
  {
    slug: 'estatistica-probabilidade-e-combinatoria',
    introducao:
      'Estatística, Probabilidade e Combinatória são temas muito presentes no ENEM. Eles envolvem leitura de dados, gráficos, tabelas, médias, medidas de dispersão, contagem de possibilidades e cálculo de chances. São conteúdos ligados a pesquisas, indicadores sociais, jogos, sorteios, saúde, economia e tomada de decisão.',
    conceitos: [
      'média',
      'mediana',
      'moda',
      'amplitude',
      'gráfico',
      'tabela',
      'probabilidade',
      'evento',
      'combinatória',
      'arranjo',
      'combinação',
    ],
    dicaEnem:
      'Em estatística, leia título, legenda, eixo e unidade do gráfico. Em probabilidade, identifique casos favoráveis e casos possíveis. Em combinatória, veja se a ordem importa ou não.',
    resumos: {
      estatistica: {
        titulo: 'Estatística',
        texto:
          'Estatística organiza, interpreta e analisa dados. No ENEM, ela aparece em tabelas, gráficos de barras, gráficos de linhas, setores, histogramas e infográficos. O estudante precisa observar título, legenda, eixos, fonte, unidade e escala. Muitas questões podem ser resolvidas apenas com leitura atenta, sem fórmulas complexas. Estatística é muito usada em pesquisas eleitorais, saúde, economia, educação, meio ambiente e indicadores sociais.',
      },
      'media-mediana-e-moda': {
        titulo: 'Média, Mediana e Moda',
        texto:
          'Média é a soma dos valores dividida pela quantidade de dados. Mediana é o valor central quando os dados estão organizados em ordem. Moda é o valor que mais aparece. Cada medida pode ser mais adequada em uma situação. A média é sensível a valores muito altos ou muito baixos, enquanto a mediana pode representar melhor conjuntos com extremos. No ENEM, é comum comparar essas medidas para interpretar salários, notas, renda e pesquisas.',
      },
      probabilidade: {
        titulo: 'Probabilidade',
        texto:
          'Probabilidade mede a chance de um evento acontecer. Em situações simples, calcula-se pela razão entre casos favoráveis e casos possíveis. O resultado pode ser representado por fração, decimal ou porcentagem. Probabilidade aparece em jogos, sorteios, genética, pesquisas, previsão de eventos e análise de risco. No ENEM, a interpretação correta do espaço amostral é mais importante que decorar fórmulas.',
      },
      combinatoria: {
        titulo: 'Combinatória',
        texto:
          'Combinatória estuda maneiras de contar possibilidades. O princípio multiplicativo é usado quando uma escolha pode ser combinada com outras escolhas. Arranjos consideram a ordem dos elementos; combinações não consideram a ordem. Permutações organizam todos os elementos de um conjunto. No ENEM, combinatória aparece em senhas, placas, filas, cardápios, equipes, rotas e escolhas possíveis.',
      },
      'graficos-e-tabelas': {
        titulo: 'Gráficos e Tabelas',
        texto:
          'Gráficos e tabelas apresentam informações de forma visual. Para interpretá-los, é necessário observar título, legenda, eixos, escala, unidade de medida e fonte. Um erro comum é comparar valores sem verificar a unidade ou a proporção visual. O ENEM usa gráficos e tabelas em várias áreas, não apenas em Matemática. Por isso, essa habilidade ajuda também em Geografia, Biologia, Química e Ciências Humanas.',
      },
    },
    quiz: [
      {
        pergunta: 'A média aritmética é calculada por:',
        opcoes: [
          'Soma dos valores dividida pela quantidade',
          'Valor que mais aparece',
          'Valor central sempre sem ordenar',
          'Maior valor menos menor valor',
        ],
        resposta: 'Soma dos valores dividida pela quantidade',
      },
      {
        pergunta: 'A moda é:',
        opcoes: [
          'O valor que mais aparece',
          'Sempre o maior valor',
          'A soma de todos os dados',
          'A metade da média',
        ],
        resposta: 'O valor que mais aparece',
      },
      {
        pergunta: 'Probabilidade simples pode ser calculada por:',
        opcoes: [
          'Casos favoráveis divididos pelos casos possíveis',
          'Soma dos lados de uma figura',
          'Área vezes altura',
          'Número atômico dividido por massa',
        ],
        resposta: 'Casos favoráveis divididos pelos casos possíveis',
      },
      {
        pergunta: 'Em combinatória, quando a ordem não importa, usamos ideia de:',
        opcoes: ['Combinação', 'Velocidade média', 'Radiciação', 'Circunferência'],
        resposta: 'Combinação',
      },
      {
        pergunta: 'Ao ler um gráfico, é importante observar:',
        opcoes: [
          'Título, legenda, eixos e unidade',
          'Apenas as cores',
          'Somente o maior número',
          'Nada além da primeira barra',
        ],
        resposta: 'Título, legenda, eixos e unidade',
      },
    ],
  },
]

export function getMatematicaEstudo(slug: string) {
  return matematicaEstudos.find((estudo) => estudo.slug === slug)
}

export function getMatematicaResumoFallback(topico: string): MatematicaResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado com foco em interpretação, operações e aplicações. ${respostaProcessoMatematico} Observe dados, unidades, gráficos, proporções e relações entre grandezas.`,
  }
}

export function getMatematicaQuizFallback(
  titulo: string,
  topicos: string[],
): MatematicaQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo}?`,
      opcoes: [
        'Interpretar dados antes de calcular',
        'Chutar sem ler',
        'Ignorar unidades',
        'Decorar sem praticar',
      ],
      resposta: 'Interpretar dados antes de calcular',
    },
    {
      pergunta: `${primeiroTopico} deve ser resolvido observando:`,
      opcoes: [
        'Operações e significado do problema',
        'Apenas palavras bonitas',
        'Somente contexto histórico',
        'Nenhum dado',
      ],
      resposta: 'Operações e significado do problema',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, é importante:`,
      opcoes: [
        'Aplicar propriedades corretamente',
        'Ignorar sinais',
        'Evitar exemplos',
        'Eliminar cálculos',
      ],
      resposta: 'Aplicar propriedades corretamente',
    },
    {
      pergunta: 'No ENEM, Matemática cobra muito:',
      opcoes: [
        'Gráficos, proporção e cotidiano',
        'Somente teoremas sem contexto',
        'Apenas nomes de autores',
        'Exclusivamente datas',
      ],
      resposta: 'Gráficos, proporção e cotidiano',
    },
    {
      pergunta: 'Uma habilidade essencial em Matemática é:',
      opcoes: [
        'Modelar situações com números e relações',
        'Evitar raciocínio',
        'Não conferir resposta',
        'Ignorar escala',
      ],
      resposta: 'Modelar situações com números e relações',
    },
  ]
}