export type LiteraturaResumo = {
  titulo: string
  texto: string
}

export type LiteraturaQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type LiteraturaEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, LiteraturaResumo>
  quiz: LiteraturaQuizPergunta[]
}

const respostaProcessoLiterario =
  'No ENEM, Literatura costuma relacionar texto, contexto histórico, linguagem, estética, crítica social, identidade, cultura e efeitos de sentido.'

export const literaturaEstudos: LiteraturaEstudo[] = [
  {
    slug: 'escolas-literarias',
    introducao:
      'Escolas Literárias organizam movimentos, estilos e produções de diferentes épocas. O objetivo não é decorar uma lista rígida de autores e características, mas entender como cada movimento literário dialoga com seu contexto histórico, com os valores da sociedade e com as formas de linguagem usadas na época. No ENEM, a Literatura costuma aparecer por meio de trechos, poemas, músicas, crônicas e textos que exigem interpretação.',
    conceitos: [
      'estilo de época',
      'contexto histórico',
      'eu lírico',
      'narrador',
      'linguagem literária',
      'crítica social',
      'figuras de linguagem',
      'intertextualidade',
      'subjetividade',
      'estética',
    ],
    dicaEnem:
      'No ENEM, leia o trecho com atenção. A resposta quase sempre depende das marcas de linguagem, do contexto e do efeito de sentido, não apenas do nome da escola literária.',
    resumos: {
      trovadorismo: {
        titulo: 'Trovadorismo',
        texto:
          'O Trovadorismo foi a primeira manifestação literária em língua portuguesa, durante a Idade Média. Sua produção era marcada pela oralidade, pela musicalidade e pela forte ligação com a sociedade feudal. As cantigas eram feitas para serem cantadas, geralmente acompanhadas por instrumentos. As cantigas líricas se dividem em cantigas de amor e de amigo. Nas cantigas de amor, o eu lírico masculino idealiza uma mulher distante e superior, expressando sofrimento amoroso. Nas cantigas de amigo, a voz poética costuma ser feminina e fala de saudade, espera e ausência do amado. Já as cantigas satíricas, de escárnio e maldizer, criticavam pessoas e costumes da época.',
      },
      humanismo: {
        titulo: 'Humanismo',
        texto:
          'O Humanismo marca a transição entre a Idade Média e o Renascimento. Nesse período, há maior valorização do ser humano, da razão, dos conflitos sociais e da observação da realidade, sem abandono completo da religiosidade. Em Portugal, Gil Vicente é o principal nome, conhecido por seu teatro crítico e satírico. Suas peças mostram tipos sociais, como padres, nobres, camponeses, comerciantes e juízes, revelando vícios, hipocrisias e desigualdades. O Humanismo é importante porque começa a deslocar o olhar exclusivamente religioso para uma visão mais humana e social da existência.',
      },
      'classicismo-quinhentismo': {
        titulo: 'Classicismo / Quinhentismo',
        texto:
          'O Classicismo valoriza equilíbrio, razão, harmonia, clareza e retomada dos modelos greco-romanos. Em Portugal, Luís de Camões é o grande representante, especialmente com Os Lusíadas, obra que exalta as navegações portuguesas e combina heroísmo, mitologia clássica e projeto nacional. Já o Quinhentismo no Brasil está ligado ao início da colonização portuguesa. Inclui a literatura de informação, com cartas e relatos sobre a terra, e a literatura de catequese, usada pelos jesuítas para converter povos indígenas. No ENEM, o Quinhentismo costuma aparecer relacionado ao olhar europeu sobre o Brasil e à construção de imagens coloniais sobre a natureza e os povos originários.',
      },
      barroco: {
        titulo: 'Barroco',
        texto:
          'O Barroco expressa conflitos intensos entre corpo e alma, razão e fé, pecado e salvação, desejo terreno e vida espiritual. Sua linguagem é marcada por contrastes, antíteses, paradoxos, hipérboles, inversões sintáticas e jogos de palavras. O cultismo valoriza a forma elaborada e o uso de imagens sensoriais; o conceptismo valoriza o raciocínio, a argumentação e o jogo de ideias. No Brasil, Gregório de Matos se destacou pela poesia lírica, religiosa e satírica, criticando costumes da sociedade baiana. Padre Antônio Vieira se destacou nos sermões, usando argumentação sofisticada. O ENEM costuma cobrar a tensão, a dualidade e a crítica social barroca.',
      },
      'neoclassicismo-arcadismo': {
        titulo: 'Neoclassicismo / Arcadismo',
        texto:
          'O Arcadismo, também chamado de Neoclassicismo, retoma valores clássicos como simplicidade, equilíbrio, racionalidade, clareza e idealização da natureza. Os poetas adotavam pseudônimos pastoris e construíam uma paisagem campestre idealizada. Expressões como fugere urbem, que significa fugir da cidade, e locus amoenus, lugar agradável, ajudam a entender essa valorização da vida simples no campo. No Brasil, o Arcadismo dialoga com o contexto da mineração em Minas Gerais e com a Inconfidência Mineira. Cláudio Manuel da Costa, Tomás Antônio Gonzaga e Basílio da Gama são nomes importantes. O ENEM pode cobrar a contradição entre o ideal simples da poesia e a realidade colonial.',
      },
      romantismo: {
        titulo: 'Romantismo',
        texto:
          'O Romantismo valoriza subjetividade, sentimentalismo, liberdade criadora, nacionalismo, idealização amorosa e expressão individual. No Brasil, o movimento teve papel importante na construção de uma identidade nacional após a independência. A primeira geração romântica foi marcada pelo indianismo e pelo nacionalismo, com idealização do indígena como herói brasileiro. A segunda geração, chamada ultrarromântica, destacou pessimismo, melancolia, morte, solidão e amor impossível. A terceira geração, social ou condoreira, abordou temas políticos, como a crítica à escravidão. José de Alencar, Gonçalves Dias, Álvares de Azevedo e Castro Alves são nomes centrais.',
      },
      'realismo-parnasianismo': {
        titulo: 'Realismo / Parnasianismo',
        texto:
          'O Realismo surge como reação às idealizações românticas. Valoriza observação crítica da sociedade, análise psicológica, ironia, objetividade e denúncia da hipocrisia burguesa. Machado de Assis é o principal nome do Realismo brasileiro, com narradores irônicos, ambíguos e críticos das aparências sociais. Obras como Memórias Póstumas de Brás Cubas e Dom Casmurro questionam a verdade, a moral e a confiança no narrador. O Parnasianismo, por sua vez, valorizou o rigor formal, a métrica, a rima, a objetividade e o culto à beleza estética. Olavo Bilac é um nome importante. No ENEM, o contraste entre crítica realista e formalismo parnasiano pode aparecer em trechos comparativos.',
      },
      simbolismo: {
        titulo: 'Simbolismo',
        texto:
          'O Simbolismo valoriza subjetividade, musicalidade, sugestão, espiritualidade, mistério e linguagem sensorial. Em vez de descrever a realidade de forma direta, o texto simbolista busca sugerir sensações, estados de alma e atmosferas vagas. São comuns sinestesias, aliterações, metáforas e imagens ligadas ao sonho, à morte, à alma, à noite e ao indefinido. Cruz e Sousa é o principal nome do Simbolismo brasileiro, com uma poesia marcada por musicalidade, espiritualidade e tensão existencial. No ENEM, o Simbolismo pode aparecer ligado à linguagem sugestiva e à oposição ao excesso de objetividade do Realismo e do Parnasianismo.',
      },
      'pre-modernismo': {
        titulo: 'Pré-Modernismo',
        texto:
          'O Pré-Modernismo não é uma escola literária única, mas um período de transição entre as estéticas do século XIX e o Modernismo. Sua principal marca é a denúncia de um Brasil real, desigual e contraditório. Os autores abordaram sertão, racismo, pobreza, exclusão social, urbanização, fanatismo religioso, atraso político e tensões entre modernização e miséria. Euclides da Cunha, em Os Sertões, analisou a Guerra de Canudos e o sertanejo. Lima Barreto criticou o racismo, o falso patriotismo e a burocracia. Monteiro Lobato retratou o interior paulista. Augusto dos Anjos produziu poesia singular, misturando linguagem científica, pessimismo e reflexão sobre a matéria.',
      },
      'modernismo-brasileiro-1a-fase': {
        titulo: 'Modernismo Brasileiro - 1ª Fase',
        texto:
          'A primeira fase modernista brasileira começa simbolicamente com a Semana de Arte Moderna de 1922. Foi marcada pela ruptura com padrões acadêmicos, linguagem coloquial, humor, ironia, experimentação formal e busca por uma arte mais brasileira. Mário de Andrade, Oswald de Andrade e Manuel Bandeira são nomes centrais. O movimento criticou a imitação rígida da cultura europeia e valorizou temas nacionais, fala cotidiana, cultura popular e liberdade estética. O Manifesto Antropófago, de Oswald de Andrade, propôs a ideia de “devorar” influências estrangeiras e transformá-las em algo próprio da cultura brasileira.',
      },
      'modernismo-brasileiro-2a-fase': {
        titulo: 'Modernismo Brasileiro - 2ª Fase',
        texto:
          'A segunda fase modernista, de 1930 a 1945, apresenta maior amadurecimento formal e maior preocupação social, política e existencial. Na prosa, destacam-se os romances regionalistas, que abordam seca, pobreza, coronelismo, desigualdade, exploração e conflitos humanos. Graciliano Ramos, Rachel de Queiroz, Jorge Amado e José Lins do Rego são nomes importantes. Na poesia, autores como Carlos Drummond de Andrade, Cecília Meireles, Vinicius de Moraes e Murilo Mendes exploram temas como existência, tempo, amor, política, espiritualidade e linguagem. No ENEM, essa fase aparece muito ligada à crítica social e à representação do Brasil profundo.',
      },
      'modernismo-brasileiro-3a-fase': {
        titulo: 'Modernismo Brasileiro - 3ª Fase',
        texto:
          'A terceira fase modernista, a partir de 1945, reúne autores que aprofundaram a inovação linguística, a experimentação narrativa e a reflexão sobre a condição humana. Guimarães Rosa reinventou a linguagem regional, criando uma prosa poética e universal a partir do sertão. Clarice Lispector explorou a interioridade, a consciência, a identidade e os conflitos subjetivos. João Cabral de Melo Neto desenvolveu uma poesia rigorosa, objetiva e crítica, com destaque para Morte e Vida Severina. Essa fase mostra que o regional pode se tornar universal quando revela conflitos humanos profundos. No ENEM, é comum aparecerem questões sobre linguagem, subjetividade e crítica social.',
      },
      'literatura-contemporanea': {
        titulo: 'Literatura Contemporânea',
        texto:
          'A Literatura Contemporânea é marcada pela diversidade de vozes, temas, linguagens e formas. Ela aborda identidade, memória, periferia, gênero, racismo, violência urbana, migração, tecnologia, desigualdade, ancestralidade e fragmentação da experiência moderna. Muitos textos contemporâneos questionam narrativas oficiais e dão espaço a sujeitos historicamente silenciados. Também é comum a mistura de gêneros, a linguagem híbrida, a metalinguagem e a presença de referências da cultura de massa. No ENEM, a Literatura Contemporânea costuma exigir leitura crítica, percepção do lugar de fala e relação entre texto e sociedade.',
      },
    },
    quiz: [
      {
        pergunta: 'No Trovadorismo, as cantigas eram marcadas por:',
        opcoes: [
          'Oralidade e musicalidade',
          'Industrialização urbana',
          'Linguagem digital',
          'Romance psicológico moderno',
        ],
        resposta: 'Oralidade e musicalidade',
      },
      {
        pergunta: 'O Barroco costuma apresentar:',
        opcoes: [
          'Contrastes e conflitos entre corpo e alma',
          'Total ausência de religiosidade',
          'Linguagem sempre coloquial',
          'Negação de figuras de linguagem',
        ],
        resposta: 'Contrastes e conflitos entre corpo e alma',
      },
      {
        pergunta: 'O Romantismo brasileiro valorizou muito:',
        opcoes: [
          'Subjetividade e nacionalismo',
          'Objetividade científica absoluta',
          'Apenas forma fixa parnasiana',
          'Fim da idealização',
        ],
        resposta: 'Subjetividade e nacionalismo',
      },
      {
        pergunta: 'O Realismo se caracteriza por:',
        opcoes: [
          'Crítica social e análise psicológica',
          'Idealização extrema do amor',
          'Fuga total da realidade',
          'Ausência de ironia',
        ],
        resposta: 'Crítica social e análise psicológica',
      },
      {
        pergunta: 'A primeira fase modernista brasileira buscou:',
        opcoes: [
          'Ruptura estética e linguagem mais brasileira',
          'Retorno integral ao medievalismo',
          'Imitação rígida da Europa',
          'Proibir experimentação',
        ],
        resposta: 'Ruptura estética e linguagem mais brasileira',
      },
    ],
  },
  {
    slug: 'generos-literarios-e-interpretacao',
    introducao:
      'Gêneros literários e interpretação textual são fundamentais para o ENEM. O estudante precisa reconhecer características de poemas, narrativas, peças teatrais, crônicas, contos, romances e textos híbridos. Mais do que decorar classificações, é importante entender como a linguagem produz sentido, como a voz do texto se organiza e como o contexto influencia a leitura.',
    conceitos: [
      'gênero lírico',
      'gênero narrativo',
      'gênero dramático',
      'eu lírico',
      'narrador',
      'personagem',
      'tempo',
      'espaço',
      'enredo',
      'efeito de sentido',
    ],
    dicaEnem:
      'Em interpretação literária, identifique quem fala no texto, para quem fala, qual é o tom, quais imagens aparecem e que crítica ou sentimento está sendo construído.',
    resumos: {
      'genero-lirico': {
        titulo: 'Gênero Lírico',
        texto:
          'O gênero lírico é marcado pela expressão de sentimentos, percepções, emoções, reflexões e estados de alma. Geralmente aparece em poemas, mas nem todo poema é apenas sentimental. A voz que fala no poema é chamada de eu lírico, e não deve ser confundida automaticamente com o autor. O texto lírico usa recursos como ritmo, sonoridade, metáforas, repetições, imagens e figuras de linguagem. No ENEM, poemas são cobrados pela interpretação dos efeitos de sentido, e não pela simples identificação de rimas.',
      },
      'genero-narrativo': {
        titulo: 'Gênero Narrativo',
        texto:
          'O gênero narrativo apresenta uma sequência de acontecimentos envolvendo personagens, narrador, tempo, espaço e enredo. Pode aparecer em contos, romances, novelas, crônicas narrativas e fábulas. O narrador pode participar da história ou observá-la de fora. Também pode ser confiável ou ambíguo, como ocorre em algumas obras machadianas. No ENEM, é importante perceber o ponto de vista narrativo, a construção dos personagens e a crítica social presente na narrativa.',
      },
      'genero-dramatico': {
        titulo: 'Gênero Dramático',
        texto:
          'O gênero dramático é associado ao teatro e foi criado para ser encenado. Ele se organiza principalmente por diálogos, rubricas, conflitos e ações das personagens. A ausência de narrador tradicional faz com que o público compreenda a história por meio das falas e atitudes. No ENEM, textos dramáticos podem aparecer em questões sobre crítica social, humor, ironia, conflitos humanos e representação de tipos sociais.',
      },
      cronica: {
        titulo: 'Crônica',
        texto:
          'A crônica é um gênero muito presente no ENEM por aproximar literatura e cotidiano. Geralmente parte de uma situação comum, como uma cena urbana, conversa, notícia ou lembrança, e transforma esse acontecimento em reflexão, humor, crítica ou poesia. Sua linguagem costuma ser mais leve e próxima do leitor, mas pode carregar forte profundidade social. Autores como Rubem Braga, Carlos Drummond de Andrade, Luis Fernando Verissimo e Clarice Lispector são frequentemente associados ao gênero.',
      },
      'figuras-de-linguagem': {
        titulo: 'Figuras de Linguagem',
        texto:
          'Figuras de linguagem são recursos expressivos que ampliam os sentidos do texto. Metáfora cria comparação implícita; metonímia substitui um termo por outro relacionado; antítese aproxima ideias opostas; paradoxo une ideias contraditórias; hipérbole exagera; ironia diz algo sugerindo outro sentido; sinestesia mistura sensações. No ENEM, não basta saber o nome da figura: é preciso entender o efeito que ela produz no texto.',
      },
    },
    quiz: [
      {
        pergunta: 'No gênero lírico, quem fala no poema é chamado de:',
        opcoes: ['Eu lírico', 'Narrador científico', 'Personagem histórico obrigatório', 'Autor sempre'],
        resposta: 'Eu lírico',
      },
      {
        pergunta: 'O gênero narrativo geralmente apresenta:',
        opcoes: [
          'Narrador, personagens, tempo, espaço e enredo',
          'Apenas fórmulas matemáticas',
          'Somente argumentos jurídicos',
          'Ausência total de acontecimentos',
        ],
        resposta: 'Narrador, personagens, tempo, espaço e enredo',
      },
      {
        pergunta: 'A crônica costuma partir de:',
        opcoes: [
          'Situações do cotidiano',
          'Somente mitos antigos',
          'Equações químicas',
          'Mapas climáticos',
        ],
        resposta: 'Situações do cotidiano',
      },
      {
        pergunta: 'Ironia ocorre quando:',
        opcoes: [
          'O texto sugere sentido diferente do literal',
          'Toda frase é completamente neutra',
          'Não há intenção comunicativa',
          'A linguagem não produz efeito',
        ],
        resposta: 'O texto sugere sentido diferente do literal',
      },
      {
        pergunta: 'No ENEM, figuras de linguagem devem ser analisadas pelo:',
        opcoes: [
          'Efeito de sentido que produzem',
          'Número de letras da palavra',
          'Tamanho do parágrafo',
          'Nome decorado sem leitura',
        ],
        resposta: 'Efeito de sentido que produzem',
      },
    ],
  },
]

export function getLiteraturaEstudo(slug: string) {
  return literaturaEstudos.find((estudo) => estudo.slug === slug)
}

export function getLiteraturaResumoFallback(topico: string): LiteraturaResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado relacionando texto, linguagem e contexto histórico. ${respostaProcessoLiterario} Observe marcas estéticas, temas, crítica social, voz do texto e efeitos de sentido.`,
  }
}

export function getLiteraturaQuizFallback(
  titulo: string,
  topicos: string[],
): LiteraturaQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo}?`,
      opcoes: [
        'Relacionar texto, linguagem e contexto',
        'Decorar nomes sem ler trechos',
        'Ignorar estilo',
        'Evitar interpretação',
      ],
      resposta: 'Relacionar texto, linguagem e contexto',
    },
    {
      pergunta: `${primeiroTopico} deve ser analisado considerando:`,
      opcoes: [
        'Marcas de linguagem e contexto histórico',
        'Apenas data solta',
        'Somente cálculo',
        'Nenhuma relação com texto',
      ],
      resposta: 'Marcas de linguagem e contexto histórico',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, observe:`,
      opcoes: [
        'Temas, forma e efeitos de sentido',
        'Apenas nome do autor',
        'Somente tamanho do texto',
        'Nada do contexto',
      ],
      resposta: 'Temas, forma e efeitos de sentido',
    },
    {
      pergunta: 'No ENEM, Literatura costuma cobrar:',
      opcoes: [
        'Interpretação de trechos e contexto cultural',
        'Listas decoradas sem texto',
        'Apenas biografia',
        'Somente gramática normativa',
      ],
      resposta: 'Interpretação de trechos e contexto cultural',
    },
    {
      pergunta: 'Uma habilidade importante em Literatura é:',
      opcoes: [
        'Perceber linguagem, voz e crítica social',
        'Ignorar figuras de linguagem',
        'Não ler o trecho',
        'Responder sem contexto',
      ],
      resposta: 'Perceber linguagem, voz e crítica social',
    },
  ]
}