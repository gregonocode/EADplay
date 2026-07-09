export type SociologiaResumo = {
  titulo: string
  texto: string
}

export type SociologiaQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type SociologiaEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, SociologiaResumo>
  quiz: SociologiaQuizPergunta[]
}

const respostaProcessoSociologico =
  'No ENEM, Sociologia costuma relacionar indivíduo, sociedade, cultura, trabalho, poder, desigualdade, instituições e mudanças sociais.'

export const sociologiaEstudos: SociologiaEstudo[] = [
  {
    slug: 'introducao-a-sociologia',
    introducao:
      'A introdução à Sociologia apresenta a sociedade como objeto de estudo científico. O objetivo é entender como as relações sociais, as instituições, as normas, os valores e os conflitos influenciam a vida dos indivíduos. A Sociologia ajuda a perceber que muitos comportamentos vistos como “naturais” são, na verdade, construídos socialmente.',
    conceitos: [
      'sociedade',
      'indivíduo',
      'instituições sociais',
      'socialização',
      'imaginação sociológica',
      'senso comum',
      'ciência social',
    ],
    dicaEnem:
      'Em Sociologia, desconfie de respostas que tratam problemas sociais como culpa apenas do indivíduo. O ENEM costuma cobrar relações entre comportamento individual, estrutura social e contexto histórico.',
    resumos: {
      'o-que-e-sociologia': {
        titulo: 'O que é Sociologia',
        texto:
          'Sociologia é a ciência que estuda as relações sociais, os grupos, as instituições, os conflitos e as formas de organização da vida coletiva. Ela surgiu em um contexto de grandes transformações provocadas pela Revolução Industrial, pela urbanização, pelo crescimento das cidades, pelas revoluções políticas e pela consolidação do capitalismo. Seu objetivo não é apenas opinar sobre a sociedade, mas analisá-la com conceitos, métodos e evidências. No ENEM, a Sociologia costuma aparecer em temas como desigualdade, trabalho, cultura, cidadania, violência, movimentos sociais e poder.',
      },
      'senso-comum-e-conhecimento-cientifico': {
        titulo: 'Senso Comum e Conhecimento Científico',
        texto:
          'O senso comum é formado por ideias, crenças e explicações do cotidiano, muitas vezes baseadas na experiência imediata, na tradição ou em opiniões repetidas socialmente. Ele pode conter percepções importantes, mas também pode reproduzir preconceitos e simplificações. O conhecimento sociológico busca ir além do senso comum, analisando dados, contextos, relações de poder e estruturas sociais. No ENEM, esse contraste aparece quando a questão pede uma leitura crítica de problemas sociais, evitando explicações rasas ou individualistas.',
      },
      socializacao: {
        titulo: 'Socialização',
        texto:
          'Socialização é o processo pelo qual os indivíduos aprendem valores, normas, comportamentos, papéis sociais e formas de convivência. Esse processo começa na família, continua na escola e se amplia por meio dos grupos de amigos, mídia, religião, trabalho e redes sociais. A socialização mostra que ninguém nasce pronto socialmente: aprendemos a falar, agir, consumir, obedecer regras, questionar normas e interpretar o mundo. No ENEM, o tema pode aparecer ligado à formação da identidade, juventude, cultura e instituições sociais.',
      },
      'instituicoes-sociais': {
        titulo: 'Instituições Sociais',
        texto:
          'Instituições sociais são formas organizadas e relativamente estáveis de regular a vida coletiva. Família, escola, Estado, religião, trabalho, justiça e mídia são exemplos. Elas orientam comportamentos, transmitem valores, estabelecem regras e ajudam a manter a ordem social. Ao mesmo tempo, também podem reproduzir desigualdades e ser alvo de disputas e transformações. O ENEM costuma cobrar instituições sociais em temas como educação, cidadania, controle social, violência, gênero, poder e mudança social.',
      },
    },
    quiz: [
      {
        pergunta: 'A Sociologia estuda principalmente:',
        opcoes: [
          'Relações sociais e instituições',
          'Somente células',
          'Apenas astros',
          'Exclusivamente contas matemáticas',
        ],
        resposta: 'Relações sociais e instituições',
      },
      {
        pergunta: 'Uma diferença entre senso comum e Sociologia é que a Sociologia busca:',
        opcoes: [
          'Analisar a sociedade com conceitos e método',
          'Repetir opiniões sem crítica',
          'Ignorar dados sociais',
          'Evitar qualquer explicação',
        ],
        resposta: 'Analisar a sociedade com conceitos e método',
      },
      {
        pergunta: 'Socialização é o processo pelo qual o indivíduo:',
        opcoes: [
          'Aprende normas, valores e comportamentos sociais',
          'Nasce sabendo todas as regras',
          'Evita contato com a sociedade',
          'Desenvolve apenas características biológicas',
        ],
        resposta: 'Aprende normas, valores e comportamentos sociais',
      },
      {
        pergunta: 'Família, escola, Estado e religião são exemplos de:',
        opcoes: [
          'Instituições sociais',
          'Organelas celulares',
          'Formas de relevo',
          'Fórmulas químicas',
        ],
        resposta: 'Instituições sociais',
      },
      {
        pergunta: 'Uma habilidade importante em Sociologia é:',
        opcoes: [
          'Analisar relações sociais criticamente',
          'Ignorar instituições',
          'Negar desigualdades',
          'Evitar conceitos',
        ],
        resposta: 'Analisar relações sociais criticamente',
      },
    ],
  },
  {
    slug: 'natureza-e-cultura',
    introducao:
      'O tema Natureza e Cultura discute a diferença entre aspectos biológicos da vida humana e comportamentos aprendidos socialmente. A Sociologia mostra que muitas práticas humanas não são determinadas apenas pela natureza, mas construídas pela cultura, pela história e pela convivência em sociedade.',
    conceitos: [
      'natureza',
      'cultura',
      'etnocentrismo',
      'relativismo cultural',
      'identidade',
      'diversidade cultural',
      'preconceito',
    ],
    dicaEnem:
      'Quando aparecer uma questão sobre cultura, evite respostas que tratem uma cultura como superior a outra. O ENEM costuma valorizar diversidade, respeito e análise crítica do etnocentrismo.',
    resumos: {
      cultura: {
        titulo: 'Cultura',
        texto:
          'Cultura é o conjunto de valores, crenças, costumes, símbolos, linguagens, técnicas, normas e modos de vida produzidos por um grupo social. Ela não se limita à arte ou ao conhecimento escolarizado; envolve também alimentação, religião, vestimentas, festas, formas de trabalho, hábitos cotidianos e maneiras de interpretar o mundo. A cultura é aprendida e transmitida socialmente, por isso varia entre sociedades e também dentro de uma mesma sociedade. No ENEM, cultura costuma aparecer ligada à identidade, diversidade, patrimônio, mídia e conflitos simbólicos.',
      },
      'natureza-e-comportamento-humano': {
        titulo: 'Natureza e Comportamento Humano',
        texto:
          'Os seres humanos possuem características biológicas, mas sua forma de viver é profundamente influenciada pela cultura. Comer, vestir-se, formar família, trabalhar, celebrar, educar filhos e organizar a política são práticas que mudam conforme o tempo e o espaço. A Sociologia critica explicações que tentam justificar desigualdades sociais como se fossem naturais. Muitas diferenças entre grupos são resultado de processos históricos, econômicos, políticos e culturais, não de uma suposta natureza fixa.',
      },
      etnocentrismo: {
        titulo: 'Etnocentrismo',
        texto:
          'Etnocentrismo é a tendência de julgar outras culturas a partir dos valores da própria cultura, considerando o próprio modo de vida como superior, normal ou mais correto. Essa postura pode gerar preconceito, intolerância, racismo, xenofobia e desvalorização de povos tradicionais. No ENEM, o etnocentrismo costuma aparecer em questões sobre colonização, diversidade cultural, povos indígenas, religiões de matriz africana, migrações e conflitos culturais.',
      },
      'relativismo-cultural': {
        titulo: 'Relativismo Cultural',
        texto:
          'Relativismo cultural é a postura de tentar compreender uma cultura a partir de seus próprios valores, contextos e significados, evitando julgamentos baseados em padrões externos. Isso não significa aceitar qualquer prática sem crítica, mas analisar os fenômenos culturais com cuidado histórico e social. O relativismo ajuda a combater preconceitos e a reconhecer a diversidade humana. No ENEM, esse conceito aparece como alternativa ao etnocentrismo.',
      },
    },
    quiz: [
      {
        pergunta: 'Cultura pode ser entendida como:',
        opcoes: [
          'Conjunto de valores, costumes, símbolos e modos de vida',
          'Apenas obras em museus',
          'Somente características biológicas',
          'Algo igual em todos os povos',
        ],
        resposta: 'Conjunto de valores, costumes, símbolos e modos de vida',
      },
      {
        pergunta: 'O etnocentrismo ocorre quando um grupo:',
        opcoes: [
          'Julga outras culturas a partir da própria cultura',
          'Compreende todas as culturas sem preconceito',
          'Evita qualquer comparação',
          'Defende sempre a diversidade cultural',
        ],
        resposta: 'Julga outras culturas a partir da própria cultura',
      },
      {
        pergunta: 'O relativismo cultural propõe:',
        opcoes: [
          'Compreender uma cultura em seu próprio contexto',
          'Considerar uma cultura superior a todas',
          'Eliminar a diversidade',
          'Explicar tudo apenas pela biologia',
        ],
        resposta: 'Compreender uma cultura em seu próprio contexto',
      },
      {
        pergunta: 'A Sociologia critica explicações que naturalizam desigualdades porque:',
        opcoes: [
          'Muitas desigualdades são históricas e sociais',
          'Toda diferença é exclusivamente genética',
          'A cultura não influencia ninguém',
          'A sociedade não muda',
        ],
        resposta: 'Muitas desigualdades são históricas e sociais',
      },
      {
        pergunta: 'No ENEM, o tema cultura costuma estar ligado a:',
        opcoes: [
          'Diversidade, identidade e respeito às diferenças',
          'Apenas cálculo de área',
          'Somente estrutura celular',
          'Classificação de rochas',
        ],
        resposta: 'Diversidade, identidade e respeito às diferenças',
      },
    ],
  },
  {
    slug: 'fundamentos-da-sociologia',
    introducao:
      'Os fundamentos da Sociologia envolvem conceitos essenciais para analisar a sociedade: poder, trabalho, cultura, desigualdade, cidadania, movimentos sociais, Estado, ideologia e mudança social. Esses temas ajudam a interpretar problemas contemporâneos e aparecem com frequência no ENEM.',
    conceitos: [
      'poder',
      'Estado',
      'cidadania',
      'trabalho',
      'desigualdade',
      'ideologia',
      'movimentos sociais',
      'controle social',
    ],
    dicaEnem:
      'Em questões sobre fundamentos sociológicos, procure identificar o problema social apresentado e qual conceito explica melhor a situação: desigualdade, poder, cidadania, trabalho, cultura ou instituição.',
    resumos: {
      poder: {
        titulo: 'Poder',
        texto:
          'Poder é a capacidade de influenciar, controlar ou orientar ações de indivíduos e grupos. Ele pode aparecer no Estado, nas leis, na economia, na cultura, na mídia, na escola, na família e nas relações de trabalho. O poder não atua apenas pela força; também pode funcionar por normas, discursos, valores e formas de convencimento. No ENEM, poder costuma aparecer ligado à política, cidadania, controle social, desigualdade, violência e participação democrática.',
      },
      estado: {
        titulo: 'Estado',
        texto:
          'O Estado é uma instituição política que organiza leis, território, governo, administração pública e uso legítimo da força. Ele cria políticas públicas, cobra impostos, regula conflitos, garante direitos e também pode reproduzir desigualdades dependendo de sua atuação. A Sociologia analisa o Estado não apenas como governo, mas como uma estrutura de poder que organiza a vida coletiva. No ENEM, esse tema aparece em debates sobre democracia, cidadania, direitos sociais, segurança pública e participação política.',
      },
      cidadania: {
        titulo: 'Cidadania',
        texto:
          'Cidadania envolve direitos e deveres dos indivíduos em uma sociedade. Ela inclui direitos civis, como liberdade e igualdade perante a lei; direitos políticos, como votar e participar das decisões; e direitos sociais, como educação, saúde, trabalho, moradia e previdência. A cidadania não é dada de forma igual para todos em todos os contextos: ela foi conquistada historicamente por lutas sociais. No ENEM, aparece ligada a movimentos sociais, Constituição, democracia, inclusão e desigualdade.',
      },
      trabalho: {
        titulo: 'Trabalho',
        texto:
          'O trabalho é uma atividade central na organização da sociedade, pois produz bens, serviços, renda, identidade e relações sociais. Na sociedade capitalista, o trabalho assalariado se tornou dominante, mas também surgiram formas de exploração, precarização, desemprego e desigualdade. A Sociologia analisa como o trabalho muda com a tecnologia, a industrialização, a automação, os aplicativos e a flexibilização das relações trabalhistas. No ENEM, trabalho costuma aparecer ligado a capitalismo, direitos, alienação, informalidade e desigualdade social.',
      },
      desigualdade: {
        titulo: 'Desigualdade Social',
        texto:
          'Desigualdade social é a distribuição desigual de renda, oportunidades, direitos, reconhecimento e acesso a bens essenciais. Ela envolve classe social, raça, gênero, região, escolaridade, moradia e trabalho. A Sociologia mostra que desigualdades não são apenas resultado de esforço individual, mas de estruturas históricas e sociais que favorecem alguns grupos e prejudicam outros. No ENEM, esse tema aparece em gráficos, textos sobre pobreza, violência, educação, racismo, gênero e políticas públicas.',
      },
      'movimentos-sociais': {
        titulo: 'Movimentos Sociais',
        texto:
          'Movimentos sociais são formas de organização coletiva que buscam defender direitos, denunciar injustiças ou transformar a sociedade. Podem envolver trabalhadores, mulheres, povos indígenas, população negra, estudantes, ambientalistas, moradores de periferia, pessoas com deficiência e outros grupos. Eles pressionam o Estado, disputam narrativas públicas e ampliam a democracia. No ENEM, movimentos sociais aparecem ligados à cidadania, participação política, direitos humanos e mudança social.',
      },
      ideologia: {
        titulo: 'Ideologia',
        texto:
          'Ideologia é um conjunto de ideias, valores e representações que orientam a forma como os indivíduos interpretam a realidade. Em uma leitura crítica, a ideologia pode ocultar desigualdades e fazer parecer natural aquilo que é socialmente produzido. Para Marx, por exemplo, a ideologia pode servir aos interesses da classe dominante ao mascarar relações de exploração. No ENEM, o conceito aparece em questões sobre mídia, trabalho, consumo, política, cultura e desigualdade.',
      },
    },
    quiz: [
      {
        pergunta: 'Cidadania envolve principalmente:',
        opcoes: [
          'Direitos e deveres na vida social',
          'Apenas consumo de produtos',
          'Somente força física',
          'Exclusivamente renda individual',
        ],
        resposta: 'Direitos e deveres na vida social',
      },
      {
        pergunta: 'Movimentos sociais são importantes porque:',
        opcoes: [
          'Organizam lutas por direitos e mudanças sociais',
          'Impedem toda participação política',
          'Existem apenas em empresas',
          'Substituem totalmente a sociedade',
        ],
        resposta: 'Organizam lutas por direitos e mudanças sociais',
      },
      {
        pergunta: 'A desigualdade social deve ser analisada considerando:',
        opcoes: [
          'Estruturas históricas, econômicas e sociais',
          'Apenas escolhas individuais isoladas',
          'Somente fatores biológicos',
          'Nenhuma relação com o Estado',
        ],
        resposta: 'Estruturas históricas, econômicas e sociais',
      },
      {
        pergunta: 'O trabalho na Sociologia é importante porque:',
        opcoes: [
          'Organiza produção, renda e relações sociais',
          'Não influencia a vida social',
          'É apenas uma atividade biológica',
          'Existe somente em sociedades antigas',
        ],
        resposta: 'Organiza produção, renda e relações sociais',
      },
      {
        pergunta: 'Ideologia pode ser entendida como:',
        opcoes: [
          'Conjunto de ideias que orienta a interpretação da realidade',
          'Uma organela celular',
          'Um fenômeno climático',
          'Uma fórmula matemática',
        ],
        resposta: 'Conjunto de ideias que orienta a interpretação da realidade',
      },
    ],
  },
  {
    slug: 'classicos',
    introducao:
      'Os clássicos da Sociologia ajudaram a criar formas científicas de analisar a sociedade moderna. Comte, Durkheim, Weber e Marx buscaram entender ordem social, mudança, capitalismo, trabalho, poder, cultura e conflitos.',
    conceitos: [
      'positivismo',
      'fato social',
      'ação social',
      'classe social',
      'capitalismo',
      'modernidade',
      'mais-valia',
      'burocracia',
    ],
    dicaEnem:
      'Nas questões de Sociologia, identifique o autor e o conceito. O ENEM costuma cobrar comparações entre ordem social, interpretação da ação e conflitos de classe.',
    resumos: {
      'augusto-comte': {
        titulo: 'Auguste Comte',
        texto:
          'Auguste Comte é associado ao positivismo e à ideia de que a sociedade poderia ser estudada cientificamente. Para ele, o conhecimento humano passaria por etapas, chegando ao estado positivo, baseado na observação e na ciência. Comte defendia ordem e progresso como bases para reorganizar a sociedade, especialmente em um contexto de mudanças políticas e sociais. Sua visão valorizava a estabilidade, a classificação dos saberes e a confiança no conhecimento científico. No ENEM, o positivismo pode aparecer ligado ao cientificismo, à influência na República brasileira e ao lema “Ordem e Progresso”.',
      },
      'emile-durkheim': {
        titulo: 'Émile Durkheim',
        texto:
          'Durkheim defendia que a Sociologia deveria estudar fatos sociais, isto é, maneiras de agir, pensar e sentir exteriores ao indivíduo e dotadas de coerção. Ele analisou solidariedade mecânica e orgânica, divisão do trabalho, educação, religião e anomia. Para Durkheim, a sociedade exerce forte influência sobre os indivíduos e possui regras que precisam ser compreendidas cientificamente. O ENEM costuma cobrar Durkheim em temas como coerção social, normas, instituições, educação, coesão social e efeitos da modernidade.',
      },
      'max-weber': {
        titulo: 'Max Weber',
        texto:
          'Weber destacou a ação social, isto é, a conduta humana orientada pelo sentido atribuído pelos indivíduos. Ele analisou tipos de dominação, racionalização, burocracia, religião e capitalismo. Diferente de explicações puramente econômicas, Weber valorizava cultura, valores e significados. Para ele, compreender a sociedade exige entender os sentidos que os sujeitos dão às suas ações. No ENEM, é comum aparecer a relação entre ação social, poder, Estado, burocracia, dominação legítima e racionalização da vida moderna.',
      },
      'karl-marx': {
        titulo: 'Karl Marx',
        texto:
          'Marx analisou a sociedade capitalista a partir das relações de produção, da luta de classes, da exploração do trabalho e da propriedade privada dos meios de produção. Para ele, a história das sociedades envolve conflitos entre classes com interesses opostos. Conceitos como burguesia, proletariado, mais-valia, ideologia e alienação são centrais. A mais-valia explica a apropriação, pelo capitalista, de parte do valor produzido pelo trabalhador. O ENEM costuma relacionar Marx a trabalho, desigualdade, exploração e crítica ao capitalismo.',
      },
    },
    quiz: [
      {
        pergunta: 'Auguste Comte é associado principalmente ao:',
        opcoes: [
          'Positivismo',
          'Existencialismo',
          'Romantismo literário',
          'Criacionismo biológico',
        ],
        resposta: 'Positivismo',
      },
      {
        pergunta: 'Para Durkheim, fato social é:',
        opcoes: [
          'Exterior ao indivíduo e dotado de coerção',
          'Uma escolha sem influência social',
          'Apenas opinião pessoal',
          'Um fenômeno biológico isolado',
        ],
        resposta: 'Exterior ao indivíduo e dotado de coerção',
      },
      {
        pergunta: 'Max Weber destacou o conceito de:',
        opcoes: ['Ação social', 'Mitose', 'Mais-valia biológica', 'Deriva continental'],
        resposta: 'Ação social',
      },
      {
        pergunta: 'Karl Marx analisou o capitalismo a partir de:',
        opcoes: [
          'Luta de classes e relações de produção',
          'Harmonia total entre classes',
          'Ausência de trabalho',
          'Negação da economia',
        ],
        resposta: 'Luta de classes e relações de produção',
      },
      {
        pergunta: 'O conceito de mais-valia está relacionado a:',
        opcoes: [
          'Exploração do trabalho no capitalismo',
          'Fusos horários',
          'Fotossíntese',
          'Cidadania ateniense',
        ],
        resposta: 'Exploração do trabalho no capitalismo',
      },
    ],
  },
]

export function getSociologiaEstudo(slug: string) {
  return sociologiaEstudos.find((estudo) => estudo.slug === slug)
}

export function getSociologiaResumoFallback(topico: string): SociologiaResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado relacionando sociedade, instituições, cultura, trabalho e poder. ${respostaProcessoSociologico} Observe conceitos, autores, exemplos sociais e desigualdades.`,
  }
}

export function getSociologiaQuizFallback(
  titulo: string,
  topicos: string[],
): SociologiaQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo}?`,
      opcoes: [
        'Relacionar autores, conceitos e realidade social',
        'Decorar nomes sem conceitos',
        'Ignorar desigualdades',
        'Responder sem ler o enunciado',
      ],
      resposta: 'Relacionar autores, conceitos e realidade social',
    },
    {
      pergunta: `${primeiroTopico} deve ser analisado considerando:`,
      opcoes: [
        'Contexto social e conceito do autor',
        'Apenas biografia',
        'Somente mapas naturais',
        'Nenhuma relação com sociedade',
      ],
      resposta: 'Contexto social e conceito do autor',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, procure identificar:`,
      opcoes: [
        'Como o autor explica a vida social',
        'Apenas fórmulas químicas',
        'Somente clima e relevo',
        'Nenhum conceito',
      ],
      resposta: 'Como o autor explica a vida social',
    },
    {
      pergunta: 'Uma habilidade importante em Sociologia é:',
      opcoes: [
        'Analisar relações sociais criticamente',
        'Ignorar instituições',
        'Negar desigualdades',
        'Evitar conceitos',
      ],
      resposta: 'Analisar relações sociais criticamente',
    },
    {
      pergunta: 'Sociologia estuda principalmente:',
      opcoes: [
        'Relações sociais e instituições',
        'Somente células',
        'Apenas astros',
        'Exclusivamente contas matemáticas',
      ],
      resposta: 'Relações sociais e instituições',
    },
  ]
}