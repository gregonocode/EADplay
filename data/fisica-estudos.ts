export type FisicaResumo = {
  titulo: string
  texto: string
}

export type FisicaQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type FisicaEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, FisicaResumo>
  quiz: FisicaQuizPergunta[]
}

const respostaProcessoFisico =
  'No ENEM, Física costuma relacionar grandezas, unidades, modelos, gráficos, energia, movimento, forças, eletricidade, ondas, calor e situações do cotidiano.'

export const fisicaEstudos: FisicaEstudo[] = [
  {
    slug: 'ferramentas-gerais',
    introducao:
      'Ferramentas Gerais de Física revisa unidades, vetores, cinemática, forças, trabalho, energia, potência e hidrostática. Esses conceitos formam a base para interpretar problemas físicos, principalmente aqueles que envolvem movimento, transporte, máquinas, segurança, fluidos e consumo de energia.',
    conceitos: [
      'grandezas',
      'unidades',
      'vetores',
      'movimento',
      'força',
      'energia',
      'trabalho',
      'potência',
      'pressão',
      'empuxo',
    ],
    dicaEnem:
      'Antes de usar fórmula, identifique grandezas, unidades e o fenômeno descrito. Muitos erros surgem de unidade errada, leitura apressada do gráfico ou aplicação de fórmula sem entender a situação.',
    resumos: {
      'unidades-de-grandeza': {
        titulo: 'Unidades de Grandeza',
        texto:
          'Grandezas físicas são propriedades que podem ser medidas, como comprimento, tempo, massa, velocidade, força, energia, potência e temperatura. O Sistema Internacional utiliza unidades como metro, segundo, quilograma, newton, joule, watt e kelvin. Saber converter unidades é essencial, pois o ENEM frequentemente mistura quilômetros com metros, horas com segundos, gramas com quilogramas e litros com metros cúbicos. Mais importante do que decorar unidades é entender o que cada grandeza representa dentro do problema.',
      },
      vetores: {
        titulo: 'Vetores',
        texto:
          'Vetores são grandezas que possuem módulo, direção e sentido. Deslocamento, velocidade, aceleração e força são exemplos de grandezas vetoriais. Diferente das grandezas escalares, que possuem apenas valor e unidade, vetores dependem da orientação no espaço. Duas forças de mesmo módulo podem produzir efeitos diferentes se tiverem direções ou sentidos distintos. No ENEM, vetores aparecem em deslocamentos, resultante de forças, equilíbrio, movimentos em duas dimensões e interpretação de esquemas.',
      },
      cinematica: {
        titulo: 'Cinemática',
        texto:
          'Cinemática é a parte da Física que descreve os movimentos sem estudar suas causas. Ela envolve posição, deslocamento, distância percorrida, velocidade, aceleração e tempo. A velocidade indica a rapidez com que a posição muda, enquanto a aceleração indica a variação da velocidade. O ENEM costuma cobrar cinemática por meio de gráficos, situações de transporte, deslocamentos urbanos, velocidades médias, ultrapassagens e interpretação de trajetos. Ler corretamente o enunciado é fundamental para diferenciar distância percorrida de deslocamento.',
      },
      'conceitos-de-vetor': {
        titulo: 'Conceitos de Vetor',
        texto:
          'Para trabalhar com vetores, é preciso considerar orientação. Vetores na mesma direção podem ser somados ou subtraídos conforme o sentido. Em duas dimensões, é comum decompor um vetor em componentes horizontal e vertical. Essa decomposição ajuda a resolver problemas de lançamento, plano inclinado, forças aplicadas em ângulo e equilíbrio. No ENEM, muitas questões não exigem cálculo vetorial avançado, mas exigem entender quando uma grandeza possui direção e sentido.',
      },
      aceleracao: {
        titulo: 'Aceleração',
        texto:
          'Aceleração é a variação da velocidade em determinado intervalo de tempo. Quando a velocidade aumenta, diminui ou muda de direção, existe aceleração. No movimento uniformemente variado, a aceleração é constante, o que permite usar equações horárias e interpretar gráficos de velocidade por tempo. Um carro freando, um objeto em queda e um veículo fazendo curva são situações que envolvem aceleração. No ENEM, esse tema aparece ligado a segurança no trânsito, tempo de frenagem e análise de gráficos.',
      },
      'movimento-uniforme': {
        titulo: 'Movimento Uniforme',
        texto:
          'Movimento uniforme ocorre quando a velocidade permanece constante e a aceleração é nula. Nesse caso, a posição varia de forma linear com o tempo. A relação principal envolve distância, velocidade e tempo. Problemas de movimento uniforme costumam tratar de deslocamentos em estradas, encontros entre veículos, ultrapassagens, caminhadas, corridas e transporte público. No gráfico da posição pelo tempo, o movimento uniforme é representado por uma reta, e sua inclinação indica a velocidade.',
      },
      forcas: {
        titulo: 'Forças',
        texto:
          'Força é uma interação capaz de alterar o estado de movimento de um corpo ou deformá-lo. Pela segunda lei de Newton, a força resultante é igual ao produto da massa pela aceleração. Peso, normal, atrito, tração e força elástica aparecem com frequência em problemas. O peso depende da gravidade, enquanto a massa é uma propriedade do corpo. O ENEM costuma associar forças a transporte, esportes, elevadores, segurança, frenagem, colisões e uso de equipamentos.',
      },
      'trabalho-energia-e-potencia': {
        titulo: 'Trabalho, Energia e Potência',
        texto:
          'Trabalho mede a transferência de energia realizada por uma força ao longo de um deslocamento. Energia é a capacidade de produzir transformações e pode aparecer em várias formas, como cinética, potencial, térmica, elétrica e química. Potência indica a rapidez com que a energia é transferida ou consumida. Uma máquina potente realiza a mesma tarefa em menos tempo ou realiza mais trabalho no mesmo intervalo. No ENEM, esse conteúdo aparece em máquinas, aparelhos elétricos, consumo residencial, exercícios físicos, motores e eficiência energética.',
      },
      'energia-mecanica': {
        titulo: 'Energia Mecânica',
        texto:
          'Energia mecânica é a soma da energia cinética com a energia potencial. A energia cinética está ligada ao movimento, enquanto a energia potencial pode estar relacionada à altura ou à deformação de uma mola. Em sistemas conservativos, sem perdas significativas por atrito ou resistência do ar, a energia mecânica se conserva. Em situações reais, parte dessa energia pode ser transformada em calor, som e deformações. O ENEM costuma cobrar esse tema em quedas, rampas, montanhas-russas, esportes e colisões.',
      },
      hidrostatica: {
        titulo: 'Hidrostática',
        texto:
          'Hidrostática estuda fluidos em repouso, como líquidos e gases em equilíbrio. A pressão depende da força aplicada e da área de contato. Em líquidos, a pressão aumenta com a profundidade, por isso mergulhadores e barragens sofrem maior pressão em regiões mais profundas. O princípio de Pascal explica o funcionamento de prensas hidráulicas, freios hidráulicos e elevadores automotivos. O princípio de Arquimedes explica o empuxo, força vertical para cima que atua sobre corpos imersos em fluidos, sendo essencial para entender flutuação de barcos, submarinos e objetos na água.',
      },
    },
    quiz: [
      {
        pergunta: 'No Sistema Internacional, a unidade de força é:',
        opcoes: ['Newton', 'Joule', 'Metro', 'Watt-hora'],
        resposta: 'Newton',
      },
      {
        pergunta: 'Uma grandeza vetorial possui:',
        opcoes: [
          'Módulo, direção e sentido',
          'Apenas valor numérico',
          'Somente unidade monetária',
          'Apenas temperatura',
        ],
        resposta: 'Módulo, direção e sentido',
      },
      {
        pergunta: 'Movimento uniforme tem:',
        opcoes: [
          'Velocidade constante',
          'Aceleração sempre crescente',
          'Força resultante infinita',
          'Velocidade sempre zero',
        ],
        resposta: 'Velocidade constante',
      },
      {
        pergunta: 'Pela segunda lei de Newton, força resultante é:',
        opcoes: [
          'Massa vezes aceleração',
          'Massa dividida por temperatura',
          'Velocidade vezes tempo sempre',
          'Pressão vezes calor',
        ],
        resposta: 'Massa vezes aceleração',
      },
      {
        pergunta: 'O empuxo está relacionado ao princípio de:',
        opcoes: ['Arquimedes', 'Mendel', 'Le Chatelier', 'Comte'],
        resposta: 'Arquimedes',
      },
    ],
  },
  {
    slug: 'termologia',
    introducao:
      'Termologia estuda temperatura, calor, dilatação, mudanças de estado físico, transmissão de calor, gases e máquinas térmicas. Esse conteúdo aparece no ENEM em situações como aquecimento global, garrafas térmicas, motores, geladeiras, panela de pressão, clima, combustíveis e eficiência energética.',
    conceitos: [
      'temperatura',
      'calor',
      'equilíbrio térmico',
      'dilatação',
      'condução',
      'convecção',
      'radiação',
      'gases',
      'máquinas térmicas',
    ],
    dicaEnem:
      'Não confunda calor com temperatura. Temperatura mede o grau de agitação das partículas; calor é energia térmica em trânsito por diferença de temperatura.',
    resumos: {
      'temperatura-e-calor': {
        titulo: 'Temperatura e Calor',
        texto:
          'Temperatura está relacionada ao grau de agitação das partículas de um corpo. Calor é energia térmica transferida de um corpo para outro devido à diferença de temperatura. Quando dois corpos com temperaturas diferentes entram em contato, ocorre troca de calor até atingir equilíbrio térmico. No ENEM, esse tema aparece em situações de aquecimento, resfriamento, sensação térmica, preparo de alimentos, clima e funcionamento de aparelhos.',
      },
      'escalas-termometricas': {
        titulo: 'Escalas Termométricas',
        texto:
          'Escalas termométricas são formas de medir temperatura. As mais comuns são Celsius, Fahrenheit e Kelvin. A escala Celsius é usada no cotidiano brasileiro, enquanto Kelvin é muito usada em Física por começar no zero absoluto. Converter temperaturas exige atenção às fórmulas e ao contexto. O ENEM pode cobrar escalas em situações de clima, laboratório, indústria e interpretação de gráficos.',
      },
      dilatacao: {
        titulo: 'Dilatação Térmica',
        texto:
          'Dilatação térmica é a variação das dimensões de um corpo causada pela mudança de temperatura. Em geral, quando a temperatura aumenta, os corpos se expandem; quando diminui, contraem. Esse fenômeno aparece em trilhos de trem, pontes, fios elétricos, tampas metálicas e construções. Por isso, muitas estruturas possuem juntas de dilatação, que evitam rachaduras ou deformações provocadas pela variação térmica.',
      },
      'transmissao-de-calor': {
        titulo: 'Transmissão de Calor',
        texto:
          'O calor pode ser transmitido por condução, convecção e radiação. Condução ocorre principalmente em sólidos, por contato entre partículas. Convecção ocorre em fluidos, como líquidos e gases, por movimento de massas aquecidas e resfriadas. Radiação ocorre por ondas eletromagnéticas e não precisa de meio material, como o calor do Sol chegando à Terra. O ENEM costuma relacionar esse tema a garrafas térmicas, roupas, clima, aquecimento de ambientes e isolamento térmico.',
      },
      'mudancas-de-estado-fisico': {
        titulo: 'Mudanças de Estado Físico',
        texto:
          'Mudanças de estado físico incluem fusão, solidificação, vaporização, condensação e sublimação. Durante a mudança de estado de uma substância pura, a temperatura pode permanecer constante enquanto há troca de calor. Esse conteúdo aparece em evaporação do suor, formação de nuvens, funcionamento de geladeiras, derretimento de gelo e processos industriais. O ENEM costuma cobrar interpretação de gráficos de aquecimento e resfriamento.',
      },
      gases: {
        titulo: 'Gases',
        texto:
          'O estudo dos gases relaciona pressão, volume, temperatura e quantidade de matéria. Quando um gás é aquecido, suas partículas se movimentam mais rapidamente. Se o volume for mantido constante, a pressão tende a aumentar. Se a pressão for mantida constante, o volume pode aumentar. Esse conteúdo aparece em pneus, balões, panela de pressão, mergulho, motores e atmosfera. O ENEM costuma cobrar relações qualitativas mais do que contas complexas.',
      },
      'maquinas-termicas': {
        titulo: 'Máquinas Térmicas',
        texto:
          'Máquinas térmicas transformam parte do calor recebido em trabalho, como motores de carros e usinas termoelétricas. Nenhuma máquina térmica transforma todo o calor em trabalho útil; sempre há perdas, geralmente para o ambiente. O rendimento mede a eficiência da máquina. Esse tema aparece em combustíveis, motores, sustentabilidade, poluição, energia e limitações impostas pelas leis da Termodinâmica.',
      },
    },
    quiz: [
      {
        pergunta: 'Calor é:',
        opcoes: [
          'Energia térmica em trânsito',
          'A mesma coisa que temperatura',
          'Uma unidade de massa',
          'Uma força elétrica',
        ],
        resposta: 'Energia térmica em trânsito',
      },
      {
        pergunta: 'A transmissão de calor que não precisa de meio material é:',
        opcoes: ['Radiação', 'Condução', 'Convecção', 'Atrito'],
        resposta: 'Radiação',
      },
      {
        pergunta: 'Juntas de dilatação em pontes servem para:',
        opcoes: [
          'Permitir expansão e contração térmica',
          'Aumentar o peso da ponte',
          'Impedir qualquer movimento de carros',
          'Eliminar a gravidade',
        ],
        resposta: 'Permitir expansão e contração térmica',
      },
      {
        pergunta: 'A escala Kelvin começa no:',
        opcoes: ['Zero absoluto', 'Ponto de fusão do ferro', 'Valor 100 °C', 'Ponto de ebulição do álcool'],
        resposta: 'Zero absoluto',
      },
      {
        pergunta: 'Máquinas térmicas transformam parte do calor recebido em:',
        opcoes: ['Trabalho', 'Massa', 'Carga nuclear', 'DNA'],
        resposta: 'Trabalho',
      },
    ],
  },
  {
    slug: 'ondulatoria-e-optica',
    introducao:
      'Ondulatória e Óptica estudam ondas, som, luz, reflexão, refração, lentes, espelhos e fenômenos associados à propagação de energia. Esse bloco aparece no ENEM em temas como visão, instrumentos ópticos, fibra óptica, eco, ultrassom, poluição sonora, arco-íris e tecnologias de comunicação.',
    conceitos: [
      'onda',
      'frequência',
      'comprimento de onda',
      'amplitude',
      'som',
      'luz',
      'reflexão',
      'refração',
      'lentes',
      'espelhos',
    ],
    dicaEnem:
      'Em questões de ondas, identifique se a onda é mecânica ou eletromagnética. Em óptica, observe se o fenômeno envolve reflexão, refração ou formação de imagem.',
    resumos: {
      ondas: {
        titulo: 'Ondas',
        texto:
          'Ondas são perturbações que transportam energia sem transportar matéria de forma permanente. Podem ser mecânicas, quando precisam de meio material, como o som, ou eletromagnéticas, quando se propagam até no vácuo, como a luz. As principais grandezas são frequência, período, comprimento de onda, amplitude e velocidade. No ENEM, ondas aparecem em comunicação, medicina, música, terremotos, radares, micro-ondas e tecnologias sem fio.',
      },
      som: {
        titulo: 'Som',
        texto:
          'O som é uma onda mecânica longitudinal que precisa de um meio material para se propagar. Ele não se propaga no vácuo. Altura está relacionada à frequência, permitindo diferenciar sons graves e agudos. Intensidade está relacionada à energia da onda e à sensação de som forte ou fraco. Timbre permite diferenciar fontes sonoras diferentes, mesmo com mesma frequência. O ENEM costuma cobrar som em poluição sonora, instrumentos musicais, eco, ultrassom e saúde auditiva.',
      },
      luz: {
        titulo: 'Luz',
        texto:
          'A luz é uma onda eletromagnética capaz de se propagar no vácuo. Ela permite a visão e está presente em fenômenos como sombra, cores, reflexão, refração, dispersão e absorção. A luz branca pode ser decomposta em várias cores, como ocorre no arco-íris. No ENEM, a luz aparece em espelhos, lentes, fibra óptica, câmeras, olhos, microscópios e tecnologias de transmissão de informação.',
      },
      reflexao: {
        titulo: 'Reflexão',
        texto:
          'Reflexão ocorre quando uma onda retorna ao encontrar uma superfície. Em espelhos planos, a imagem formada é virtual, direita e do mesmo tamanho do objeto. A reflexão também explica eco, retrovisores, periscópios e alguns instrumentos ópticos. No ENEM, é comum associar reflexão a formação de imagens, segurança no trânsito, arquitetura, acústica e uso de espelhos.',
      },
      refracao: {
        titulo: 'Refração',
        texto:
          'Refração ocorre quando uma onda muda de meio e sofre alteração em sua velocidade, podendo mudar também sua direção. Esse fenômeno explica a aparente quebra de um lápis dentro da água, o funcionamento de lentes e a propagação da luz em fibras ópticas. No ENEM, refração aparece em problemas sobre visão, óculos, lentes corretivas, microscópios, câmeras e fenômenos atmosféricos.',
      },
      'lentes-e-espelhos': {
        titulo: 'Lentes e Espelhos',
        texto:
          'Lentes e espelhos formam imagens por refração e reflexão. Lentes convergentes podem concentrar raios de luz e são usadas em lupas, câmeras e correção de hipermetropia. Lentes divergentes espalham raios e são usadas na correção de miopia. Espelhos côncavos e convexos formam imagens com características diferentes dependendo da posição do objeto. O ENEM costuma cobrar aplicações práticas, como óculos, retrovisores e instrumentos ópticos.',
      },
    },
    quiz: [
      {
        pergunta: 'Uma onda transporta principalmente:',
        opcoes: ['Energia', 'Matéria de forma permanente', 'Massa nuclear', 'Células vivas'],
        resposta: 'Energia',
      },
      {
        pergunta: 'O som é uma onda:',
        opcoes: [
          'Mecânica',
          'Eletromagnética que se propaga no vácuo',
          'Sem frequência',
          'Sem energia',
        ],
        resposta: 'Mecânica',
      },
      {
        pergunta: 'A luz é uma onda:',
        opcoes: ['Eletromagnética', 'Sempre mecânica', 'Que precisa de ar', 'Sem velocidade'],
        resposta: 'Eletromagnética',
      },
      {
        pergunta: 'Refração ocorre quando a onda:',
        opcoes: [
          'Muda de meio e altera sua velocidade',
          'Desaparece completamente',
          'Não interage com nada',
          'Vira massa',
        ],
        resposta: 'Muda de meio e altera sua velocidade',
      },
      {
        pergunta: 'Lentes divergentes são usadas com frequência para corrigir:',
        opcoes: ['Miopia', 'Ferrugem', 'Empuxo', 'Dilatação dos metais'],
        resposta: 'Miopia',
      },
    ],
  },
  {
    slug: 'eletricidade-e-magnetismo',
    introducao:
      'Eletricidade e Magnetismo estudam cargas elétricas, corrente, tensão, resistência, circuitos, potência elétrica, consumo de energia, campo magnético e indução eletromagnética. É um dos blocos mais cobrados no ENEM por estar ligado ao cotidiano, contas de luz, aparelhos domésticos, segurança elétrica e geração de energia.',
    conceitos: [
      'carga elétrica',
      'corrente elétrica',
      'tensão',
      'resistência',
      'circuito',
      'potência elétrica',
      'energia elétrica',
      'campo magnético',
      'indução eletromagnética',
    ],
    dicaEnem:
      'Em eletricidade, observe se a questão fala de tensão, corrente, resistência, potência ou consumo. Em contas de luz, fique atento à unidade quilowatt-hora.',
    resumos: {
      eletrostatica: {
        titulo: 'Eletrostática',
        texto:
          'Eletrostática estuda cargas elétricas em repouso. Corpos podem ficar eletrizados por atrito, contato ou indução. Cargas de mesmo sinal se repelem, enquanto cargas de sinais opostos se atraem. Esse conteúdo aparece em choques ao tocar objetos, atração de pequenos papéis por objetos eletrizados, para-raios, impressoras e fenômenos atmosféricos. No ENEM, o foco costuma ser conceitual e aplicado.',
      },
      'corrente-tensao-e-resistencia': {
        titulo: 'Corrente, Tensão e Resistência',
        texto:
          'Corrente elétrica é o movimento ordenado de cargas elétricas. Tensão elétrica é a diferença de potencial que impulsiona esse movimento. Resistência é a oposição à passagem da corrente. A Lei de Ohm relaciona essas grandezas por U = R × i. No ENEM, esse conteúdo aparece em circuitos simples, aparelhos domésticos, fios, chuveiros elétricos, lâmpadas e segurança no uso da eletricidade.',
      },
      circuitos: {
        titulo: 'Circuitos Elétricos',
        texto:
          'Circuitos elétricos podem ter componentes associados em série ou em paralelo. Em série, a corrente é a mesma nos componentes, mas a tensão se divide. Em paralelo, a tensão é a mesma nos ramos, mas a corrente se divide. Instalações residenciais usam associação em paralelo para que aparelhos funcionem de forma independente. O ENEM costuma cobrar interpretação de esquemas e consequências de ligar ou desligar componentes.',
      },
      'potencia-e-consumo-eletrico': {
        titulo: 'Potência e Consumo Elétrico',
        texto:
          'Potência elétrica indica a taxa de consumo ou transformação de energia. Pode ser calculada por relações como P = U × i. O consumo de energia elétrica geralmente aparece em quilowatt-hora, unidade usada nas contas de luz. Um aparelho de maior potência consome mais energia se ficar ligado pelo mesmo tempo que outro de menor potência. O ENEM cobra esse tema em chuveiros, geladeiras, lâmpadas, ar-condicionado e economia doméstica.',
      },
      magnetismo: {
        titulo: 'Magnetismo',
        texto:
          'Magnetismo envolve ímãs, polos magnéticos e campos magnéticos. Polos iguais se repelem e polos diferentes se atraem. Correntes elétricas também podem gerar campos magnéticos, o que conecta eletricidade e magnetismo. Esse conteúdo aparece em bússolas, motores elétricos, alto-falantes, cartões magnéticos e equipamentos industriais. No ENEM, muitas questões cobram aplicações tecnológicas e interpretação de fenômenos.',
      },
      'inducao-eletromagnetica': {
        titulo: 'Indução Eletromagnética',
        texto:
          'Indução eletromagnética ocorre quando a variação de um campo magnético gera corrente elétrica. Esse princípio é fundamental para geradores, usinas elétricas, transformadores, carregadores por indução e diversos equipamentos. Em uma usina, energia mecânica pode ser usada para mover turbinas e gerar eletricidade por indução. O ENEM costuma relacionar esse tema a produção de energia, eficiência e tecnologia.',
      },
    },
    quiz: [
      {
        pergunta: 'Corrente elétrica é:',
        opcoes: [
          'Movimento ordenado de cargas',
          'Quantidade de calor sempre',
          'Massa de um fio',
          'Volume de água',
        ],
        resposta: 'Movimento ordenado de cargas',
      },
      {
        pergunta: 'A Lei de Ohm relaciona:',
        opcoes: [
          'Tensão, resistência e corrente',
          'Massa, volume e densidade',
          'Temperatura, calor e pressão',
          'Frequência, período e som',
        ],
        resposta: 'Tensão, resistência e corrente',
      },
      {
        pergunta: 'Nas instalações residenciais, os aparelhos geralmente ficam em:',
        opcoes: ['Paralelo', 'Série obrigatoriamente', 'Curto-circuito', 'Movimento uniforme'],
        resposta: 'Paralelo',
      },
      {
        pergunta: 'O consumo de energia elétrica na conta de luz costuma ser medido em:',
        opcoes: ['kWh', 'Newton', 'Metro por segundo', 'Kelvin'],
        resposta: 'kWh',
      },
      {
        pergunta: 'A indução eletromagnética é importante para:',
        opcoes: [
          'Geração de energia elétrica',
          'Formação de proteínas',
          'Evaporação da água apenas',
          'Cálculo de MDC',
        ],
        resposta: 'Geração de energia elétrica',
      },
    ],
  },
]

export function getFisicaEstudo(slug: string) {
  return fisicaEstudos.find((estudo) => estudo.slug === slug)
}

export function getFisicaResumoFallback(topico: string): FisicaResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado relacionando grandezas, unidades e fenômenos. ${respostaProcessoFisico} Observe gráficos, vetores, fórmulas, unidades e situações do cotidiano.`,
  }
}

export function getFisicaQuizFallback(
  titulo: string,
  topicos: string[],
): FisicaQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo}?`,
      opcoes: [
        'Relacionar grandezas, unidades e fenômenos',
        'Decorar fórmula sem entender',
        'Ignorar unidades',
        'Evitar gráficos',
      ],
      resposta: 'Relacionar grandezas, unidades e fenômenos',
    },
    {
      pergunta: `${primeiroTopico} deve ser analisado considerando:`,
      opcoes: [
        'Medidas e unidades corretas',
        'Apenas opiniões pessoais',
        'Somente nomes históricos',
        'Nenhum cálculo',
      ],
      resposta: 'Medidas e unidades corretas',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, observe:`,
      opcoes: [
        'Direção, sentido e módulo quando houver vetores',
        'Apenas cor do objeto',
        'Nenhuma unidade',
        'Somente literatura',
      ],
      resposta: 'Direção, sentido e módulo quando houver vetores',
    },
    {
      pergunta: 'No ENEM, Física aparece muito ligada a:',
      opcoes: [
        'Cotidiano, energia, movimento e gráficos',
        'Somente biografias',
        'Apenas gramática',
        'Exclusivamente filosofia antiga',
      ],
      resposta: 'Cotidiano, energia, movimento e gráficos',
    },
    {
      pergunta: 'Uma habilidade importante em Física é:',
      opcoes: [
        'Interpretar fenômenos antes de aplicar fórmulas',
        'Aplicar fórmulas sem ler',
        'Ignorar unidade',
        'Não conferir resultado',
      ],
      resposta: 'Interpretar fenômenos antes de aplicar fórmulas',
    },
  ]
}