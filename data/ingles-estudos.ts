export type InglesResumo = {
  titulo: string
  texto: string
}

export type InglesQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type InglesEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, InglesResumo>
  quiz: InglesQuizPergunta[]
}

const respostaProcessoIngles =
  'No ENEM, Inglês costuma cobrar leitura e interpretação, vocabulário em contexto, pronomes, referência textual, gênero textual, inferência de sentido, cognatos e intenção comunicativa.'

export const inglesEstudos: InglesEstudo[] = [
  {
    slug: 'reading-and-pronouns',
    introducao:
      'Inglês no ENEM não costuma cobrar gramática isolada ou tradução palavra por palavra. A prova valoriza leitura, interpretação, identificação de informações, inferência de sentido e reconhecimento da função comunicativa do texto. O conteúdo de pronomes é importante porque ajuda o estudante a entender a quem ou a que uma palavra se refere dentro do texto, evitando confusões na interpretação.',
    conceitos: [
      'reading comprehension',
      'context clues',
      'personal pronouns',
      'reflexive pronouns',
      'indefinite pronouns',
      'possessive pronouns',
      'interrogative pronouns',
      'textual reference',
      'cognates',
      'false cognates',
    ],
    dicaEnem:
      'Em leitura, sublinhe pronomes, palavras repetidas, cognatos e conectivos. Depois volte ao texto para descobrir o referente e a ideia principal. Muitas questões cobram exatamente essa relação.',
    resumos: {
      'reading-comprehension': {
        titulo: 'Reading Comprehension',
        texto:
          'Reading comprehension significa compreensão de leitura. No ENEM, o estudante precisa entender a ideia principal do texto, localizar informações explícitas, perceber o objetivo comunicativo e inferir sentidos a partir do contexto. Não é necessário traduzir cada palavra. Muitas vezes, título, imagem, gênero textual, palavras conhecidas, cognatos e conectivos já ajudam bastante. O foco da prova costuma estar em textos reais, como tirinhas, campanhas, notícias, poemas, letras de música, anúncios e textos informativos.',
      },
      'context-clues': {
        titulo: 'Context Clues',
        texto:
          'Context clues são pistas de contexto usadas para descobrir o sentido de uma palavra ou expressão desconhecida. Essas pistas podem aparecer antes ou depois da palavra, em exemplos, contrastes, explicações, imagens ou no tema geral do texto. No ENEM, essa habilidade é essencial porque o aluno pode não conhecer todo o vocabulário. Em vez de travar em uma palavra difícil, o ideal é observar o assunto, o gênero textual e as relações entre as frases.',
      },
      cognates: {
        titulo: 'Cognates',
        texto:
          'Cognates são palavras em inglês parecidas com palavras em português e que possuem sentido semelhante, como information, important, culture, family, problem e different. Eles ajudam muito na leitura rápida de textos do ENEM. Porém, é preciso cuidado com os false cognates, ou falsos cognatos, que parecem uma palavra em português, mas possuem outro sentido. Por exemplo, actually significa “na verdade”, e não “atualmente”; pretend significa “fingir” ou “ter a intenção”, dependendo do contexto, e não necessariamente “pretender” no uso comum do português.',
      },
      personal: {
        titulo: 'Personal Pronouns',
        texto:
          'Personal pronouns substituem pessoas, objetos, animais, grupos ou ideias. Como sujeito, aparecem formas como I, you, he, she, it, we e they. Como objeto, aparecem me, you, him, her, it, us e them. No texto, esses pronomes ajudam a identificar quem pratica ou recebe uma ação. O ENEM pode perguntar a quem um pronome como they, it, them, he ou she se refere. Para responder, é necessário voltar ao trecho anterior e observar o termo retomado.',
      },
      reflexive: {
        titulo: 'Reflexive Pronouns',
        texto:
          'Reflexive pronouns indicam que a ação volta para o próprio sujeito ou reforçam uma ideia. Exemplos: myself, yourself, himself, herself, itself, ourselves, yourselves e themselves. Em uma frase como “She taught herself”, o pronome mostra que ela ensinou a si mesma. Também pode ter valor enfático, como em “I did it myself”, indicando que a própria pessoa realizou a ação. No ENEM, o mais importante é perceber se o pronome indica reflexividade ou ênfase.',
      },
      indefinite: {
        titulo: 'Indefinite Pronouns',
        texto:
          'Indefinite pronouns referem-se a pessoas, coisas ou quantidades de modo indefinido. Exemplos incluem someone, anyone, everyone, nobody, something, anything, everything, many, few, much e little. Eles são importantes para interpretar generalizações, ausência, quantidade, indefinição e ideias vagas em textos. Palavras com some geralmente aparecem em frases afirmativas ou ofertas, enquanto any aparece com frequência em perguntas e negativas. No ENEM, o contexto costuma ser mais importante do que uma regra isolada.',
      },
      possessive: {
        titulo: 'Possessive Pronouns',
        texto:
          'Possessive pronouns e possessive adjectives indicam posse, pertencimento ou relação. My, your, his, her, its, our e their acompanham substantivos, como em “my book” ou “their house”. Mine, yours, his, hers, ours e theirs substituem substantivos, como em “This book is mine”. Em leitura, esses termos ajudam a identificar pertencimento, autoria, vínculo entre personagens e relação entre ideias. No ENEM, podem aparecer em textos narrativos, campanhas, músicas e tirinhas.',
      },
      interrogative: {
        titulo: 'Interrogative Pronouns',
        texto:
          'Interrogative pronouns introduzem perguntas diretas ou indiretas. Who pergunta sobre pessoa; what pergunta sobre coisa, informação ou ideia; which indica escolha entre opções; whose pergunta sobre posse; whom aparece como objeto em contextos mais formais. No ENEM, esses pronomes aparecem em entrevistas, textos informativos, tirinhas, chamadas publicitárias e enunciados. Mesmo quando o aluno não conhece todas as palavras da frase, o pronome interrogativo ajuda a entender o tipo de informação procurada.',
      },
      'textual-reference': {
        titulo: 'Textual Reference',
        texto:
          'Textual reference é a relação entre uma palavra e o termo ao qual ela se refere no texto. Pronomes, advérbios e expressões como this, that, these, those, here, there, it, they e them podem retomar ideias, pessoas, objetos ou situações mencionadas antes. Essa habilidade é muito cobrada no ENEM, porque entender o referente evita interpretações erradas. Sempre que aparecer um pronome, volte ao trecho anterior e pergunte: “Quem ou o que está sendo retomado aqui?”',
      },
    },
    quiz: [
      {
        pergunta: 'In the sentence "They are studying", the pronoun "they" is:',
        opcoes: ['Personal pronoun', 'Possessive adjective', 'Article', 'Preposition'],
        resposta: 'Personal pronoun',
      },
      {
        pergunta: 'Which option is a reflexive pronoun?',
        opcoes: ['Myself', 'Their', 'Who', 'Many'],
        resposta: 'Myself',
      },
      {
        pergunta: 'In reading, the pronoun "it" usually refers to:',
        opcoes: [
          'A previous idea, object or animal',
          'Only a person plural',
          'A verb tense',
          'A number always',
        ],
        resposta: 'A previous idea, object or animal',
      },
      {
        pergunta: 'Which option indicates possession?',
        opcoes: ['Mine', 'Someone', 'What', 'Themselves'],
        resposta: 'Mine',
      },
      {
        pergunta: 'The pronoun "who" is commonly used to ask about:',
        opcoes: ['People', 'Places only', 'Time only', 'Objects only'],
        resposta: 'People',
      },
    ],
  },
  {
    slug: 'text-genres-and-vocabulary',
    introducao:
      'Text genres and vocabulary ajudam o estudante a interpretar textos em inglês a partir do tipo de texto, da finalidade comunicativa e do vocabulário em contexto. No ENEM, é comum aparecerem anúncios, campanhas sociais, poemas, músicas, notícias, tirinhas, charges, cartazes e textos digitais. Entender o gênero textual ajuda a descobrir a intenção do autor.',
    conceitos: [
      'text genre',
      'main idea',
      'purpose',
      'advertisement',
      'comic strip',
      'song lyrics',
      'news',
      'campaign',
      'vocabulary in context',
      'inference',
    ],
    dicaEnem:
      'Antes de tentar traduzir tudo, identifique o gênero textual. Pergunte: isso é uma propaganda, notícia, tirinha, campanha, música ou poema? O formato já dá pistas sobre a intenção do texto.',
    resumos: {
      'text-genres': {
        titulo: 'Text Genres',
        texto:
          'Text genres são gêneros textuais, ou seja, formas de comunicação usadas em contextos sociais específicos. Uma notícia informa; uma propaganda tenta convencer; uma campanha social busca conscientizar; uma tirinha pode produzir humor ou crítica; uma letra de música pode expressar sentimentos ou posicionamentos. No ENEM, reconhecer o gênero ajuda a interpretar a finalidade do texto. Muitas questões perguntam o objetivo comunicativo, a crítica presente ou o público-alvo.',
      },
      'main-idea': {
        titulo: 'Main Idea',
        texto:
          'Main idea é a ideia principal de um texto. Para encontrá-la, observe título, imagens, palavras repetidas, primeiro e último parágrafo, além do tema geral. Em textos curtos do ENEM, a ideia principal costuma estar relacionada ao objetivo comunicativo: informar, criticar, alertar, divulgar, emocionar ou convencer. O estudante não precisa entender todas as palavras para captar a mensagem central.',
      },
      purpose: {
        titulo: 'Purpose',
        texto:
          'Purpose significa propósito ou finalidade. Um texto pode ter como objetivo informar, persuadir, denunciar, orientar, entreter, emocionar ou conscientizar. No ENEM, perguntas sobre purpose são muito comuns. Uma campanha sobre meio ambiente, por exemplo, pode ter a finalidade de alertar a população; uma propaganda pode tentar convencer o leitor a consumir; uma tirinha pode criticar um comportamento social por meio do humor.',
      },
      'vocabulary-in-context': {
        titulo: 'Vocabulary in Context',
        texto:
          'Vocabulary in context significa interpretar o vocabulário dentro da frase e do texto. Uma palavra pode mudar de sentido dependendo do contexto. Além disso, algumas palavras conhecidas podem formar expressões com significado diferente quando aparecem juntas. No ENEM, o aluno deve evitar traduzir palavra por palavra sem observar o sentido geral. O ideal é perceber se a palavra indica ação, qualidade, oposição, consequência, causa, crítica ou ironia.',
      },
      inference: {
        titulo: 'Inference',
        texto:
          'Inference é a habilidade de chegar a uma conclusão com base em pistas do texto. A informação pode não estar escrita diretamente, mas pode ser percebida pelo contexto, pela imagem, pelo humor, pela escolha de palavras ou pela situação comunicativa. No ENEM, inferência aparece muito em tirinhas, charges, campanhas e poemas. Inferir não é chutar: é construir uma resposta apoiada em sinais presentes no texto.',
      },
      connectors: {
        titulo: 'Connectors',
        texto:
          'Connectors são palavras que ligam ideias e indicam relações de sentido. But indica oposição; because indica causa; so indica consequência; although indica concessão; and indica adição; however indica contraste; therefore indica conclusão. Reconhecer conectivos ajuda a entender a lógica do texto, mesmo sem conhecer todo o vocabulário. No ENEM, conectivos são importantes para interpretar argumentos, críticas e mudanças de direção no texto.',
      },
    },
    quiz: [
      {
        pergunta: 'The main idea of a text is:',
        opcoes: [
          'Its central message',
          'Only the longest word',
          'A random detail',
          'Always the author’s name',
        ],
        resposta: 'Its central message',
      },
      {
        pergunta: 'The purpose of an advertisement is usually to:',
        opcoes: ['Persuade the reader', 'Hide all information', 'Describe cells', 'Solve equations'],
        resposta: 'Persuade the reader',
      },
      {
        pergunta: 'The connector "but" usually indicates:',
        opcoes: ['Contrast', 'Addition only', 'Cause', 'Time'],
        resposta: 'Contrast',
      },
      {
        pergunta: 'Inference means:',
        opcoes: [
          'Understanding something from clues',
          'Ignoring the text',
          'Translating only the title',
          'Choosing without reading',
        ],
        resposta: 'Understanding something from clues',
      },
      {
        pergunta: 'In ENEM English questions, text genres help identify:',
        opcoes: [
          'The communicative purpose',
          'Only the number of letters',
          'A chemical formula',
          'The exact weight of the text',
        ],
        resposta: 'The communicative purpose',
      },
    ],
  },
]

export function getInglesEstudo(slug: string) {
  return inglesEstudos.find((estudo) => estudo.slug === slug)
}

export function getInglesResumoFallback(topico: string): InglesResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado em frases e textos reais. ${respostaProcessoIngles} Observe referente, função no texto, gênero textual, pistas de contexto e intenção comunicativa.`,
  }
}

export function getInglesQuizFallback(
  titulo: string,
  topicos: string[],
): InglesQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `What is a good way to study ${titulo}?`,
      opcoes: [
        'Read words in context',
        'Translate isolated words only',
        'Ignore the text',
        'Avoid pronoun references',
      ],
      resposta: 'Read words in context',
    },
    {
      pergunta: `${primeiroTopico} should be understood by checking:`,
      opcoes: [
        'Its function and reference in the sentence',
        'Only its color',
        'A math formula',
        'No context',
      ],
      resposta: 'Its function and reference in the sentence',
    },
    {
      pergunta: `When studying ${segundoTopico}, pay attention to:`,
      opcoes: [
        'Context clues',
        'Random guessing',
        'Only punctuation',
        'No reading',
      ],
      resposta: 'Context clues',
    },
    {
      pergunta: 'In ENEM English questions, pronouns often test:',
      opcoes: [
        'Textual reference',
        'Chemical reaction',
        'Geological age',
        'Brazilian law only',
      ],
      resposta: 'Textual reference',
    },
    {
      pergunta: 'A useful reading skill is:',
      opcoes: [
        'Infer meaning from context',
        'Ignore cognates',
        'Skip the title always',
        'Avoid rereading',
      ],
      resposta: 'Infer meaning from context',
    },
  ]
}