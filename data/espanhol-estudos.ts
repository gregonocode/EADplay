export type EspanholResumo = {
  titulo: string
  texto: string
}

export type EspanholQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type EspanholEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, EspanholResumo>
  quiz: EspanholQuizPergunta[]
}

const respostaProcessoEspanhol =
  'No ENEM, Espanhol costuma cobrar interpretação de textos, cognatos, falsos cognatos, gênero textual, conectores, vocabulário, inferência e sentido em contexto.'

export const espanholEstudos: EspanholEstudo[] = [
  {
    slug: 'espanhol',
    introducao:
      'Espanhol no ENEM é principalmente leitura e interpretação. A prova não costuma cobrar tradução literal nem regras gramaticais isoladas. O estudante precisa reconhecer vocabulário em contexto, identificar o gênero textual, perceber a intenção comunicativa, interpretar informações explícitas e implícitas e tomar cuidado com palavras parecidas com o português que podem ter sentidos diferentes.',
    conceitos: [
      'vocabulário',
      'cognatos',
      'falsos cognatos',
      'interpretação',
      'conectores',
      'gênero textual',
      'inferência',
      'intenção comunicativa',
      'contexto',
    ],
    dicaEnem:
      'Cuidado com falsos cognatos. Palavras parecidas com português podem ter significado diferente em espanhol. Antes de marcar a resposta, observe o contexto, o título, o gênero textual e os conectores.',
    resumos: {
      vocabulario: {
        titulo: 'Vocabulário',
        texto:
          'O vocabulário em espanhol deve ser estudado em contexto, e não apenas por listas de palavras soltas. Muitos termos são cognatos, ou seja, palavras parecidas com o português e com sentido semelhante, como familia, importante, cultura, problema e educación. Esses cognatos ajudam bastante na leitura. Porém, existem falsos cognatos, palavras que parecem ter um sentido em português, mas significam outra coisa em espanhol. Por exemplo, embarazada significa grávida, e não envergonhada; exquisito significa saboroso ou refinado, e não estranho; oficina significa escritório, e não necessariamente oficina mecânica. No ENEM, o sentido correto costuma depender do tema, do gênero textual e das pistas ao redor da palavra.',
      },
      'interpretacao-de-texto': {
        titulo: 'Interpretação de Texto',
        texto:
          'Interpretar um texto em espanhol envolve identificar o tema, o objetivo, o público-alvo, o gênero textual, a opinião do autor e as informações explícitas e implícitas. O ENEM costuma usar tirinhas, campanhas sociais, notícias, poemas, anúncios, textos digitais, charges e fragmentos de opinião. O leitor deve usar título, imagens, cognatos, conectores e contexto para inferir sentido sem traduzir palavra por palavra. Muitas vezes, a pergunta não exige que o estudante saiba todas as palavras, mas que compreenda a mensagem central e a intenção comunicativa do texto.',
      },
      'basico-de-gramatica': {
        titulo: 'Básico de Gramática',
        texto:
          'A gramática básica em espanhol ajuda na leitura e na interpretação. Artigos, pronomes, verbos, tempos verbais, gênero, número, conectores e preposições indicam relações entre ideias. Por exemplo, os pronomes ajudam a identificar quem fala ou de quem se fala; os tempos verbais ajudam a perceber passado, presente, futuro, hipótese ou ordem; os conectores mostram relações como oposição, causa, consequência, tempo e concessão. No ENEM, a gramática aparece aplicada ao sentido do texto, não como regra isolada.',
      },
      cognatos: {
        titulo: 'Cognatos',
        texto:
          'Cognatos são palavras de línguas diferentes que possuem forma parecida e sentido semelhante. Em espanhol e português, há muitos cognatos por causa da origem latina das duas línguas. Palavras como importante, natural, social, cultura, familia, problema e información costumam ajudar o estudante a compreender o texto mesmo sem conhecer todos os termos. No entanto, é importante não depender apenas da semelhança visual. O contexto sempre deve confirmar o sentido da palavra, pois nem toda palavra parecida tem significado igual.',
      },
      'falsos-cognatos': {
        titulo: 'Falsos Cognatos',
        texto:
          'Falsos cognatos são palavras parecidas com palavras do português, mas que possuem significado diferente. Eles são uma das principais armadilhas em questões de espanhol. Alguns exemplos comuns são: embarazada, que significa grávida; apellido, que significa sobrenome; rato, que significa momento ou intervalo de tempo; largo, que significa comprido; oficina, que significa escritório; e vaso, que pode significar copo. No ENEM, os falsos cognatos aparecem para testar se o estudante está realmente lendo o contexto ou apenas traduzindo automaticamente pela aparência da palavra.',
      },
      conectores: {
        titulo: 'Conectores',
        texto:
          'Conectores são palavras ou expressões que ligam ideias e ajudam a entender a organização do texto. Em espanhol, pero indica oposição; porque indica causa; aunque indica concessão; mientras indica tempo ou simultaneidade; sin embargo indica contraste; por eso indica consequência; además indica adição; e por lo tanto indica conclusão. Reconhecer conectores é essencial para compreender argumentos, críticas, comparações e mudanças de direção no texto. No ENEM, muitas respostas dependem de perceber se uma frase apresenta oposição, explicação, consequência ou conclusão.',
      },
      'generos-textuais': {
        titulo: 'Gêneros Textuais',
        texto:
          'Gêneros textuais são formas de comunicação usadas em situações específicas. Em espanhol, o ENEM pode trazer campanhas de conscientização, notícias, entrevistas, tirinhas, charges, poemas, letras de música, anúncios e textos de redes sociais. Cada gênero possui uma finalidade: informar, convencer, criticar, emocionar, orientar ou provocar reflexão. Identificar o gênero ajuda a entender a intenção do texto. Uma campanha, por exemplo, geralmente busca conscientizar o leitor; uma propaganda tenta persuadir; uma tirinha pode usar humor para fazer crítica social.',
      },
      inferencia: {
        titulo: 'Inferência',
        texto:
          'Inferência é a capacidade de chegar a uma conclusão a partir de pistas presentes no texto. Em espanhol, isso é muito importante porque o estudante pode não conhecer todas as palavras. A inferência pode ser feita observando título, imagem, palavras conhecidas, conectores, repetição de termos e tom do texto. Inferir não é chutar; é construir uma interpretação apoiada em sinais do próprio texto. No ENEM, questões com charges, tirinhas e campanhas costumam exigir essa habilidade.',
      },
      'variacao-linguistica': {
        titulo: 'Variação Linguística no Espanhol',
        texto:
          'O espanhol é falado em muitos países e apresenta variações de vocabulário, pronúncia e uso conforme a região. O espanhol da Espanha pode ter diferenças em relação ao espanhol da Argentina, México, Colômbia, Chile, Uruguai e outros países. Palavras, expressões e formas de tratamento podem variar. No ENEM, essa diversidade pode aparecer em textos culturais, músicas, falas de personagens e campanhas. O importante é entender que a língua é viva, diversa e ligada à cultura dos povos que a utilizam.',
      },
    },
    quiz: [
      {
        pergunta: 'No ENEM, Espanhol cobra principalmente:',
        opcoes: [
          'Interpretação de textos',
          'Conjugação isolada sem texto',
          'Apenas tradução literal',
          'Somente pronúncia',
        ],
        resposta: 'Interpretação de textos',
      },
      {
        pergunta: 'A palavra "embarazada" em espanhol significa:',
        opcoes: ['Grávida', 'Envergonhada', 'Cansada', 'Doente sempre'],
        resposta: 'Grávida',
      },
      {
        pergunta: 'Cognatos são palavras que:',
        opcoes: [
          'Parecem com palavras de outra língua e podem ter sentido semelhante',
          'Sempre têm sentido oposto',
          'Nunca ajudam na leitura',
          'Só existem em verbos',
        ],
        resposta: 'Parecem com palavras de outra língua e podem ter sentido semelhante',
      },
      {
        pergunta: 'O conector "pero" geralmente indica:',
        opcoes: ['Oposição', 'Causa obrigatória', 'Adição sem contraste', 'Tempo futuro'],
        resposta: 'Oposição',
      },
      {
        pergunta: 'Uma boa estratégia de leitura em espanhol é:',
        opcoes: [
          'Usar contexto, título e cognatos',
          'Ignorar imagens',
          'Traduzir sem ler o todo',
          'Chutar pelos falsos cognatos',
        ],
        resposta: 'Usar contexto, título e cognatos',
      },
    ],
  },
  {
    slug: 'leitura-e-estrategias',
    introducao:
      'Leitura e estratégias em espanhol ajudam o estudante a resolver questões do ENEM mesmo sem conhecer todo o vocabulário. O foco está em reconhecer pistas do texto, identificar a ideia principal, perceber a intenção do autor e usar semelhanças com o português com cuidado.',
    conceitos: [
      'ideia principal',
      'pistas de contexto',
      'informação explícita',
      'informação implícita',
      'título',
      'imagem',
      'intenção do autor',
      'público-alvo',
    ],
    dicaEnem:
      'Antes de olhar as alternativas, tente responder mentalmente: qual é o assunto do texto, quem fala, para quem fala e com qual objetivo?',
    resumos: {
      'ideia-principal': {
        titulo: 'Ideia Principal',
        texto:
          'A ideia principal é a mensagem central do texto. Para identificá-la, observe o título, a imagem, as palavras repetidas, o gênero textual e a conclusão. Em muitos textos do ENEM, a ideia principal não está em uma única frase, mas no conjunto das informações. O estudante deve evitar se prender a uma palavra desconhecida e tentar compreender o sentido geral. Essa estratégia ajuda principalmente em textos curtos, campanhas, tirinhas e notícias.',
      },
      'informacoes-explicitas': {
        titulo: 'Informações Explícitas',
        texto:
          'Informações explícitas são aquelas que aparecem diretamente no texto. Questões desse tipo pedem que o estudante localize dados, personagens, ações, opiniões ou acontecimentos mencionados claramente. Mesmo assim, é preciso atenção, pois as alternativas podem trocar palavras, generalizar informações ou apresentar detalhes que não estão no texto. Uma boa estratégia é voltar ao trecho exato antes de marcar a resposta.',
      },
      'informacoes-implicitas': {
        titulo: 'Informações Implícitas',
        texto:
          'Informações implícitas não aparecem de forma direta, mas podem ser compreendidas por meio de pistas. O leitor precisa interpretar tom, contexto, ironia, imagem, escolha de palavras e relação entre ideias. Em espanhol, questões de informação implícita exigem cuidado para não confundir inferência com opinião pessoal. A resposta correta sempre deve estar sustentada por elementos do texto.',
      },
      'titulo-e-imagem': {
        titulo: 'Título e Imagem',
        texto:
          'Títulos e imagens são pistas importantes para a interpretação. O título pode apresentar o tema, antecipar uma crítica ou criar expectativa. A imagem pode reforçar, contradizer ou complementar o texto verbal. Em tirinhas, charges, campanhas e anúncios, a relação entre linguagem verbal e não verbal é essencial. No ENEM, muitas questões só são resolvidas quando o estudante considera texto e imagem juntos.',
      },
      'intencao-comunicativa': {
        titulo: 'Intenção Comunicativa',
        texto:
          'A intenção comunicativa é o objetivo do texto. Um texto pode informar, convencer, denunciar, criticar, orientar, emocionar ou divertir. Em espanhol, o ENEM costuma perguntar qual é a finalidade do texto ou que efeito ele busca produzir no leitor. Para identificar a intenção, observe o gênero textual, o público-alvo, o tom, os verbos usados e a situação comunicativa.',
      },
    },
    quiz: [
      {
        pergunta: 'A ideia principal de um texto é:',
        opcoes: [
          'A mensagem central',
          'A menor palavra',
          'Sempre o nome do autor',
          'Uma informação fora do texto',
        ],
        resposta: 'A mensagem central',
      },
      {
        pergunta: 'Informação explícita é aquela que:',
        opcoes: [
          'Aparece diretamente no texto',
          'Precisa ser totalmente inventada',
          'Nunca está escrita',
          'Depende apenas da opinião do leitor',
        ],
        resposta: 'Aparece diretamente no texto',
      },
      {
        pergunta: 'Informação implícita deve ser entendida por:',
        opcoes: [
          'Pistas do texto',
          'Chute aleatório',
          'Tradução de uma única palavra',
          'Ignorar o contexto',
        ],
        resposta: 'Pistas do texto',
      },
      {
        pergunta: 'Em tirinhas e charges, é importante analisar:',
        opcoes: [
          'Texto verbal e imagem juntos',
          'Apenas uma palavra isolada',
          'Somente a cor de fundo',
          'Nada da situação comunicativa',
        ],
        resposta: 'Texto verbal e imagem juntos',
      },
      {
        pergunta: 'Intenção comunicativa é:',
        opcoes: [
          'O objetivo do texto',
          'A quantidade de letras',
          'Uma regra de acentuação',
          'Um falso cognato sempre',
        ],
        resposta: 'O objetivo do texto',
      },
    ],
  },
]

export function getEspanholEstudo(slug: string) {
  return espanholEstudos.find((estudo) => estudo.slug === slug)
}

export function getEspanholResumoFallback(topico: string): EspanholResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado em textos reais. ${respostaProcessoEspanhol} Observe cognatos, falsos cognatos, conectores, gênero textual, intenção comunicativa e pistas de contexto.`,
  }
}

export function getEspanholQuizFallback(
  titulo: string,
  topicos: string[],
): EspanholQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo}?`,
      opcoes: [
        'Ler textos e interpretar pelo contexto',
        'Traduzir palavra solta sempre',
        'Ignorar gênero textual',
        'Evitar cognatos',
      ],
      resposta: 'Ler textos e interpretar pelo contexto',
    },
    {
      pergunta: `${primeiroTopico} deve ser entendido considerando:`,
      opcoes: [
        'Tema, contexto e uso real',
        'Apenas lista decorada',
        'Somente pronúncia',
        'Nenhum texto',
      ],
      resposta: 'Tema, contexto e uso real',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, observe:`,
      opcoes: [
        'Informações explícitas e implícitas',
        'Somente a primeira palavra',
        'Apenas números',
        'Nenhuma imagem',
      ],
      resposta: 'Informações explícitas e implícitas',
    },
    {
      pergunta: 'Falsos cognatos exigem cuidado porque:',
      opcoes: [
        'Parecem palavras do português, mas podem ter outro sentido',
        'Nunca aparecem em provas',
        'Sempre têm tradução igual',
        'São apenas nomes próprios',
      ],
      resposta: 'Parecem palavras do português, mas podem ter outro sentido',
    },
    {
      pergunta: 'Uma habilidade importante em Espanhol é:',
      opcoes: [
        'Inferir sentido pelo contexto',
        'Ignorar conectores',
        'Não ler o título',
        'Evitar comparação com português',
      ],
      resposta: 'Inferir sentido pelo contexto',
    },
  ]
}