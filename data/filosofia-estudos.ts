export type FilosofiaResumo = {
  titulo: string
  texto: string
}

export type FilosofiaQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type FilosofiaEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, FilosofiaResumo>
  quiz: FilosofiaQuizPergunta[]
}

const respostaProcessoFilosofico =
  'No ENEM, Filosofia costuma aparecer ligada a argumentos, conceitos, contexto histórico, ética, política, conhecimento e crítica ao senso comum.'

export const filosofiaEstudos: FilosofiaEstudo[] = [
  {
    slug: 'filosofia-antiguidade-oriental',
    introducao:
      'A Filosofia na Antiguidade Oriental reúne tradições de pensamento ligadas a sociedades como Índia, China, Pérsia, Egito e outros povos antigos. Diferente da Filosofia grega, muitas dessas reflexões aparecem conectadas à religião, à moral, à organização social, à sabedoria prática e à busca por equilíbrio entre o ser humano, a comunidade e o cosmos.',
    conceitos: [
      'sabedoria oriental',
      'ética prática',
      'tradição',
      'harmonia',
      'espiritualidade',
      'cosmos',
      'ordem social',
    ],
    dicaEnem:
      'Quando o ENEM cobrar pensamento oriental, observe se o texto fala de equilíbrio, conduta moral, tradição, espiritualidade, harmonia social ou relação entre indivíduo e universo.',
    resumos: {
      'filosofia-oriental': {
        titulo: 'Filosofia Oriental',
        texto:
          'A Filosofia Oriental não pode ser entendida como uma única corrente, pois reúne tradições muito diferentes. Na Índia, por exemplo, o pensamento filosófico aparece ligado à busca por libertação espiritual, autoconhecimento, meditação, dever moral e compreensão do sofrimento. Na China, tradições como o confucionismo e o taoismo refletiram sobre harmonia social, papel da família, virtude, governo justo e equilíbrio com a natureza. Em muitos casos, a reflexão oriental não separa totalmente filosofia, religião e modo de vida. O foco está menos em criar teorias abstratas isoladas e mais em orientar a existência, a conduta e a convivência humana.',
      },
      'confucionismo': {
        titulo: 'Confucionismo',
        texto:
          'O confucionismo, associado a Confúcio, valoriza a ordem social, o respeito aos mais velhos, a educação, a família, a responsabilidade moral e o bom governo. Para essa tradição, uma sociedade equilibrada depende de indivíduos virtuosos que cumpram bem seus papéis sociais. A autoridade não deve ser apenas imposta pela força, mas sustentada pelo exemplo moral. No ENEM, esse tema pode aparecer em textos sobre ética, tradição, dever, hierarquia social, educação e harmonia coletiva.',
      },
      taoismo: {
        titulo: 'Taoismo',
        texto:
          'O taoismo, associado a Lao-Tsé, valoriza o Tao, entendido como o caminho ou princípio que organiza a realidade. Essa tradição defende simplicidade, espontaneidade, equilíbrio e respeito ao fluxo natural das coisas. A ideia de agir sem forçar, conhecida como wu wei, não significa passividade absoluta, mas uma ação em harmonia com a natureza e com as circunstâncias. No ENEM, o taoismo pode ser relacionado à crítica ao excesso de controle, à valorização da natureza e à busca por equilíbrio entre vida humana e ordem natural.',
      },
      budismo: {
        titulo: 'Budismo',
        texto:
          'O budismo nasce a partir dos ensinamentos de Siddhartha Gautama, o Buda. Essa tradição parte da percepção de que a existência humana envolve sofrimento, desejo, impermanência e apego. A superação do sofrimento depende de uma transformação da consciência, da prática ética, da meditação e do caminho do meio, evitando extremos. Embora tenha elementos religiosos, o budismo também apresenta forte dimensão filosófica ao discutir desejo, identidade, sofrimento, compaixão e libertação interior.',
      },
    },
    quiz: [
      {
        pergunta: 'Uma característica comum em muitas tradições da Filosofia Oriental é:',
        opcoes: [
          'A relação entre conduta, equilíbrio e modo de vida',
          'A defesa exclusiva da indústria moderna',
          'A negação de qualquer reflexão moral',
          'A separação total entre ser humano e sociedade',
        ],
        resposta: 'A relação entre conduta, equilíbrio e modo de vida',
      },
      {
        pergunta: 'O confucionismo valoriza principalmente:',
        opcoes: [
          'Educação, virtude, família e harmonia social',
          'A destruição de toda tradição',
          'O individualismo absoluto',
          'A ausência de regras sociais',
        ],
        resposta: 'Educação, virtude, família e harmonia social',
      },
      {
        pergunta: 'O taoismo está associado à ideia de:',
        opcoes: [
          'Harmonia com o caminho natural das coisas',
          'Controle técnico total da natureza',
          'Guerra permanente entre classes',
          'Separação entre política e moral',
        ],
        resposta: 'Harmonia com o caminho natural das coisas',
      },
      {
        pergunta: 'O budismo discute fortemente:',
        opcoes: [
          'Sofrimento, desejo, apego e libertação',
          'Apenas cálculo matemático',
          'Somente cidadania romana',
          'A origem das cidades industriais',
        ],
        resposta: 'Sofrimento, desejo, apego e libertação',
      },
      {
        pergunta: 'No ENEM, o pensamento oriental pode aparecer ligado a:',
        opcoes: [
          'Ética, espiritualidade, tradição e equilíbrio',
          'Somente fórmulas físicas',
          'Apenas genética molecular',
          'Exclusivamente cartografia',
        ],
        resposta: 'Ética, espiritualidade, tradição e equilíbrio',
      },
    ],
  },
  {
    slug: 'filosofia-antiguidade-ocidental',
    introducao:
      'A Filosofia Antiga Ocidental nasce no mundo grego como uma forma racional de investigar a natureza, a vida humana, a política, a verdade e a conduta moral. O foco é entender a passagem do mito ao logos e as perguntas feitas pelos primeiros filósofos.',
    conceitos: ['mito', 'logos', 'physis', 'sofistas', 'Sócrates', 'Platão', 'Aristóteles'],
    dicaEnem:
      'Em Filosofia, leia a pergunta procurando o conceito central. Muitas alternativas parecem bonitas, mas fogem do argumento do autor.',
    resumos: {
      'introducao-ao-mundo-grego': {
        titulo: 'Introdução ao Mundo Grego',
        texto:
          'O mundo grego era formado por pólis, cidades-Estado com vida política, religiosa e cultural intensa. Nesse ambiente, debates públicos, comércio, contato com outros povos e vida urbana favoreceram o surgimento da Filosofia. A explicação mítica continuou importante, mas os filósofos passaram a buscar explicações racionais para a natureza e para a vida humana. Essa passagem é chamada, de forma simplificada, de transição do mito ao logos. No ENEM, esse conteúdo costuma aparecer relacionado ao nascimento do pensamento racional, à vida política nas pólis e à valorização do debate.',
      },
      'pre-socratico': {
        titulo: 'Pré-Socráticos',
        texto:
          'Os pré-socráticos investigavam principalmente a physis, isto é, a natureza e o princípio de origem das coisas. Tales associou esse princípio à água; Anaximandro pensou o ápeiron; Heráclito destacou a mudança constante; Parmênides valorizou a permanência do ser; Demócrito defendeu a ideia de átomos. O mais importante não é decorar todos os nomes, mas perceber que esses pensadores tentavam explicar o cosmos por meio da razão, e não apenas por narrativas míticas.',
      },
      sofistas: {
        titulo: 'Sofistas',
        texto:
          'Os sofistas eram mestres de retórica e argumentação na Grécia Antiga. Eles ensinavam técnicas de persuasão importantes para a vida política nas pólis, especialmente em Atenas. Muitos foram criticados por relativizar a verdade e valorizar a eficácia do discurso. Ainda assim, tiveram papel importante na formação do cidadão, pois mostraram que a linguagem, a lei e os costumes podiam ser debatidos. Para o ENEM, é essencial relacionar sofistas a linguagem, convenção social, debate público, relativismo e democracia ateniense.',
      },
      'socraticos-socrates': {
        titulo: 'Sócrates',
        texto:
          'Sócrates defendia o exame racional da vida e a busca pelo conhecimento de si. Seu método envolvia diálogo, ironia e maiêutica: primeiro ele questionava certezas aparentes, depois conduzia o interlocutor a buscar definições mais consistentes. Para Sócrates, reconhecer a própria ignorância era um passo importante para a sabedoria. Sua filosofia tinha forte dimensão ética, pois ele acreditava que uma vida sem reflexão não era plenamente humana. No ENEM, Sócrates costuma aparecer ligado ao diálogo, à crítica ao senso comum e à busca por conceitos universais.',
      },
      'socraticos-platao': {
        titulo: 'Platão',
        texto:
          'Platão desenvolveu a teoria das ideias, distinguindo o mundo sensível, marcado por aparências e mudanças, e o mundo inteligível, onde estariam as ideias perfeitas e verdadeiras. Na política, defendia que a cidade justa deveria ser governada por filósofos, pois eles seriam capazes de conhecer o bem. A Alegoria da Caverna mostra a passagem da ignorância para o conhecimento e critica quem aceita apenas as aparências. No ENEM, Platão costuma ser cobrado em temas como conhecimento, educação, verdade, política e crítica à opinião.',
      },
      'socraticos-aristoteles': {
        titulo: 'Aristóteles',
        texto:
          'Aristóteles valorizava a observação do mundo concreto e a classificação dos seres. Para ele, todo ser pode ser entendido por causas, finalidade e realização de sua potência. Na ética, defendeu a virtude como equilíbrio e hábito racional, buscando a eudaimonia, geralmente traduzida como felicidade ou vida plena. Na política, via o ser humano como animal político, pois a vida em comunidade seria parte de sua natureza. No ENEM, Aristóteles aparece em questões sobre ética, finalidade, virtude, lógica, política e conhecimento baseado na experiência.',
      },
    },
    quiz: [
      {
        pergunta: 'A passagem do mito ao logos indica:',
        opcoes: [
          'Busca de explicações racionais',
          'Fim de qualquer pergunta',
          'Rejeição total da política',
          'Criação da ciência moderna industrial',
        ],
        resposta: 'Busca de explicações racionais',
      },
      {
        pergunta: 'Os pré-socráticos investigavam principalmente:',
        opcoes: [
          'A natureza e o princípio das coisas',
          'A indústria contemporânea',
          'A sociologia do trabalho',
          'A genética molecular',
        ],
        resposta: 'A natureza e o princípio das coisas',
      },
      {
        pergunta: 'Os sofistas ficaram associados ao ensino de:',
        opcoes: ['Retórica e persuasão', 'Citologia', 'Feudalismo', 'Cartografia'],
        resposta: 'Retórica e persuasão',
      },
      {
        pergunta: 'O método socrático valorizava:',
        opcoes: [
          'Diálogo e questionamento',
          'Memorização sem crítica',
          'Riqueza como verdade',
          'Silêncio político absoluto',
        ],
        resposta: 'Diálogo e questionamento',
      },
      {
        pergunta: 'Na Alegoria da Caverna, Platão representa:',
        opcoes: [
          'A passagem da ignorância ao conhecimento',
          'A defesa da opinião sem crítica',
          'A rejeição de toda educação',
          'A origem da agricultura',
        ],
        resposta: 'A passagem da ignorância ao conhecimento',
      },
    ],
  },
  {
    slug: 'filosofia-medieval',
    introducao:
      'A Filosofia Medieval se desenvolve em um contexto marcado pela forte presença do cristianismo, pela influência da Igreja e pelo diálogo entre fé e razão. Os filósofos medievais buscavam compreender Deus, a alma, a moral, o conhecimento e a ordem do mundo usando tanto a tradição religiosa quanto argumentos racionais.',
    conceitos: ['fé', 'razão', 'patrística', 'escolástica', 'Agostinho', 'Tomás de Aquino', 'teocentrismo'],
    dicaEnem:
      'Nas questões de Filosofia Medieval, observe se o texto discute a relação entre fé e razão, a existência de Deus, a moral cristã ou a influência da religião no conhecimento.',
    resumos: {
      patristica: {
        titulo: 'Patrística',
        texto:
          'A Patrística corresponde aos primeiros séculos da filosofia cristã, quando pensadores ligados à Igreja buscaram defender e organizar racionalmente a fé cristã. O principal nome é Santo Agostinho, que foi influenciado por Platão e valorizou a interioridade, a alma, a iluminação divina e a busca da verdade em Deus. Para Agostinho, a razão não deveria destruir a fé, mas ajudá-la a se compreender melhor. O ENEM pode cobrar esse tema em discussões sobre fé, verdade, pecado, livre-arbítrio e relação entre mundo material e espiritual.',
      },
      escolastica: {
        titulo: 'Escolástica',
        texto:
          'A Escolástica se desenvolveu principalmente nas universidades medievais e buscou conciliar a fé cristã com a razão filosófica, especialmente a partir da influência de Aristóteles. Seu maior representante foi Tomás de Aquino, que defendeu que fé e razão não são inimigas, pois ambas poderiam conduzir à verdade. Ele elaborou argumentos racionais para demonstrar a existência de Deus e organizou uma síntese entre filosofia aristotélica e teologia cristã. No ENEM, a Escolástica costuma aparecer ligada ao diálogo entre religião, lógica e conhecimento.',
      },
      'santo-agostinho': {
        titulo: 'Santo Agostinho',
        texto:
          'Santo Agostinho defendia que a verdade plena estava em Deus e que o ser humano deveria buscá-la no interior da alma. Sua filosofia foi marcada pela influência platônica, especialmente na valorização do mundo espiritual em relação ao mundo sensível. Ele discutiu temas como o problema do mal, o livre-arbítrio, o pecado e a graça divina. Para Agostinho, o mal não seria uma substância criada por Deus, mas ausência ou privação do bem. Esse raciocínio aparece com frequência em questões de filosofia cristã.',
      },
      'tomas-de-aquino': {
        titulo: 'Tomás de Aquino',
        texto:
          'Tomás de Aquino foi o principal nome da Escolástica. Influenciado por Aristóteles, ele valorizou a razão, a observação do mundo e a ideia de finalidade. Para ele, a razão humana poderia demonstrar certas verdades, como a existência de Deus, enquanto a fé revelaria verdades superiores. Sua filosofia não coloca fé e razão como opostas, mas como caminhos complementares. No ENEM, Tomás de Aquino costuma aparecer em questões sobre provas da existência de Deus, lei natural, finalidade e conciliação entre filosofia antiga e cristianismo.',
      },
    },
    quiz: [
      {
        pergunta: 'A Filosofia Medieval ficou marcada principalmente pela relação entre:',
        opcoes: ['Fé e razão', 'Indústria e proletariado', 'Genética e evolução', 'Cartografia e relevo'],
        resposta: 'Fé e razão',
      },
      {
        pergunta: 'Santo Agostinho foi influenciado principalmente por:',
        opcoes: ['Platão', 'Maquiavel', 'Marx', 'Comte'],
        resposta: 'Platão',
      },
      {
        pergunta: 'A Escolástica buscava:',
        opcoes: [
          'Conciliar fé cristã e razão filosófica',
          'Eliminar qualquer reflexão religiosa',
          'Negar o uso da lógica',
          'Substituir a filosofia pela cartografia',
        ],
        resposta: 'Conciliar fé cristã e razão filosófica',
      },
      {
        pergunta: 'Tomás de Aquino foi influenciado por:',
        opcoes: ['Aristóteles', 'Nietzsche', 'Sartre', 'Durkheim'],
        resposta: 'Aristóteles',
      },
      {
        pergunta: 'Na Filosofia Medieval, Deus costuma ser entendido como:',
        opcoes: [
          'Centro explicativo da realidade',
          'Apenas uma metáfora política moderna',
          'Um conceito sem relação com a verdade',
          'Uma criação da Revolução Industrial',
        ],
        resposta: 'Centro explicativo da realidade',
      },
    ],
  },
  {
    slug: 'filosofia-moderna-e-contemporanea',
    introducao:
      'A Filosofia Moderna e Contemporânea aprofunda debates sobre conhecimento, razão, ciência, Estado, liberdade, indivíduo, trabalho, moral e crítica à sociedade. Esse período inclui desde o racionalismo e o empirismo até críticas modernas à cultura, à técnica, ao poder e aos valores.',
    conceitos: [
      'racionalismo',
      'empirismo',
      'contratualismo',
      'iluminismo',
      'criticismo',
      'existencialismo',
      'ética',
      'poder',
    ],
    dicaEnem:
      'Nas questões modernas e contemporâneas, identifique se o problema é sobre conhecimento, política, moral, liberdade, ciência ou crítica social.',
    resumos: {
      racionalismo: {
        titulo: 'Racionalismo',
        texto:
          'O racionalismo moderno valoriza a razão como fonte fundamental do conhecimento. René Descartes é seu principal representante e buscou encontrar uma verdade segura, que resistisse à dúvida. Sua frase mais conhecida, “penso, logo existo”, expressa a ideia de que a própria atividade de pensar confirma a existência do sujeito. O racionalismo defende que o conhecimento verdadeiro depende de clareza, método e uso rigoroso da razão. No ENEM, esse tema costuma aparecer em oposição ao empirismo.',
      },
      empirismo: {
        titulo: 'Empirismo',
        texto:
          'O empirismo valoriza a experiência sensível como origem do conhecimento. Para autores como John Locke e David Hume, a mente humana não nasce cheia de ideias prontas; ela se forma a partir das experiências. Locke comparou a mente a uma tábula rasa, enquanto Hume destacou o papel do hábito e questionou certezas absolutas sobre causalidade. No ENEM, o empirismo costuma aparecer em debates sobre ciência, observação, experiência e limites do conhecimento humano.',
      },
      iluminismo: {
        titulo: 'Iluminismo',
        texto:
          'O Iluminismo foi um movimento intelectual que valorizou a razão, a liberdade, a ciência, a crítica ao absolutismo e a defesa de direitos. Seus pensadores questionaram privilégios, tradições autoritárias e formas de poder baseadas apenas na religião ou na hereditariedade. Esse movimento influenciou revoluções políticas, ideias de cidadania, constitucionalismo e direitos humanos. No ENEM, o Iluminismo pode aparecer ligado à modernidade, à crítica política e à construção do pensamento liberal.',
      },
      contratualismo: {
        titulo: 'Contratualismo',
        texto:
          'O contratualismo tenta explicar a origem do Estado a partir de um acordo, real ou hipotético, entre indivíduos. Hobbes defendia que, sem Estado, os seres humanos viveriam em conflito permanente, por isso seria necessário um poder forte. Locke defendia direitos naturais, como vida, liberdade e propriedade, e via o governo como protetor desses direitos. Rousseau criticava desigualdades sociais e defendia a vontade geral como base da legitimidade política. No ENEM, é comum comparar esses três autores.',
      },
      kant: {
        titulo: 'Kant',
        texto:
          'Immanuel Kant buscou superar a oposição entre racionalismo e empirismo. Para ele, o conhecimento começa com a experiência, mas não se limita a ela, pois a mente organiza os dados recebidos. Na ética, Kant defendeu o dever e o imperativo categórico, segundo o qual uma ação moral deve poder ser universalizada. Isso significa agir por princípio, e não apenas por interesse ou consequência. No ENEM, Kant aparece em questões sobre conhecimento, autonomia, dever e moralidade.',
      },
      'filosofia-contemporanea': {
        titulo: 'Filosofia Contemporânea',
        texto:
          'A Filosofia Contemporânea reúne correntes muito variadas, como existencialismo, fenomenologia, teoria crítica, filosofia da linguagem, pós-estruturalismo e debates sobre poder, técnica, cultura e identidade. Nietzsche criticou a moral tradicional e questionou valores estabelecidos. Sartre discutiu liberdade e responsabilidade. Foucault analisou relações entre saber, poder e instituições. A Escola de Frankfurt criticou a indústria cultural e a racionalidade técnica. No ENEM, esse bloco aparece em textos sobre liberdade, mídia, controle social, cultura de massa e crítica à modernidade.',
      },
    },
    quiz: [
      {
        pergunta: 'O racionalismo valoriza principalmente:',
        opcoes: ['A razão como fonte de conhecimento', 'Apenas a tradição oral', 'A negação de todo método', 'Somente a força física'],
        resposta: 'A razão como fonte de conhecimento',
      },
      {
        pergunta: 'O empirismo defende que o conhecimento se origina principalmente:',
        opcoes: ['Na experiência sensível', 'Na herança genética apenas', 'No poder militar', 'Na ausência de observação'],
        resposta: 'Na experiência sensível',
      },
      {
        pergunta: 'O Iluminismo está ligado à defesa de:',
        opcoes: ['Razão, liberdade e crítica ao absolutismo', 'Feudalismo e servidão', 'Teocracia obrigatória', 'Fim da ciência'],
        resposta: 'Razão, liberdade e crítica ao absolutismo',
      },
      {
        pergunta: 'O contratualismo discute principalmente:',
        opcoes: ['A origem e legitimidade do Estado', 'A fotossíntese', 'A estrutura celular', 'O relevo brasileiro'],
        resposta: 'A origem e legitimidade do Estado',
      },
      {
        pergunta: 'Na ética kantiana, uma ação moral deve estar ligada:',
        opcoes: ['Ao dever e à possibilidade de universalização', 'Somente ao interesse pessoal', 'Ao lucro imediato', 'À ausência de responsabilidade'],
        resposta: 'Ao dever e à possibilidade de universalização',
      },
    ],
  },
]

export function getFilosofiaEstudo(slug: string) {
  return filosofiaEstudos.find((estudo) => estudo.slug === slug)
}

export function getFilosofiaResumoFallback(topico: string): FilosofiaResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado a partir dos conceitos, argumentos e problemas filosóficos envolvidos. ${respostaProcessoFilosofico} Observe o autor, a pergunta central e a diferença entre opinião comum e reflexão crítica.`,
  }
}

export function getFilosofiaQuizFallback(
  titulo: string,
  topicos: string[],
): FilosofiaQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo}?`,
      opcoes: [
        'Entender conceitos e argumentos',
        'Decorar frases sem contexto',
        'Ignorar autores',
        'Responder por opinião pessoal apenas',
      ],
      resposta: 'Entender conceitos e argumentos',
    },
    {
      pergunta: `${primeiroTopico} deve ser analisado buscando:`,
      opcoes: [
        'Problema filosófico e contexto',
        'Apenas nomes soltos',
        'Somente fórmulas matemáticas',
        'Nenhuma relação com pensamento crítico',
      ],
      resposta: 'Problema filosófico e contexto',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, é importante observar:`,
      opcoes: [
        'Conceitos, tese e argumento',
        'Somente datas sem ideias',
        'Apenas mapas físicos',
        'Nenhuma interpretação',
      ],
      resposta: 'Conceitos, tese e argumento',
    },
    {
      pergunta: 'Uma questão de Filosofia no ENEM geralmente cobra:',
      opcoes: [
        'Interpretação de conceitos',
        'Cópia de biografia',
        'Cálculo de velocidade',
        'Classificação de rochas',
      ],
      resposta: 'Interpretação de conceitos',
    },
    {
      pergunta: 'A atitude filosófica envolve:',
      opcoes: [
        'Questionamento crítico',
        'Aceitar tudo sem pensar',
        'Rejeitar argumentos',
        'Evitar leitura',
      ],
      resposta: 'Questionamento crítico',
    },
  ]
}