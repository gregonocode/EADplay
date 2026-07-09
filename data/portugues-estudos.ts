export type PortuguesResumo = {
  titulo: string
  texto: string
}

export type PortuguesQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type PortuguesEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, PortuguesResumo>
  quiz: PortuguesQuizPergunta[]
}

const respostaProcessoLinguistico =
  'No ENEM, Português costuma relacionar gramática, interpretação, efeitos de sentido, variedade linguística, coesão, coerência e uso da linguagem em contextos reais.'

export const portuguesEstudos: PortuguesEstudo[] = [
  {
    slug: 'morfologia',
    introducao:
      'Morfologia estuda as classes de palavras e suas funções na construção de sentido. O objetivo não é decorar listas de nomes gramaticais, mas entender como substantivos, artigos, adjetivos, numerais, pronomes, verbos, advérbios, conectivos e outras classes atuam dentro do texto. No ENEM, a gramática geralmente aparece ligada à interpretação, à coesão, à intenção comunicativa e aos efeitos de sentido.',
    conceitos: [
      'classe de palavra',
      'substantivo',
      'artigo',
      'adjetivo',
      'numeral',
      'pronome',
      'verbo',
      'advérbio',
      'conectivo',
      'interjeição',
      'sentido no texto',
      'coesão',
    ],
    dicaEnem:
      'Em gramática no ENEM, observe o contexto. A mesma palavra pode mudar de classe ou função conforme o uso no texto. A prova costuma cobrar o efeito que a escolha gramatical produz, não apenas a classificação isolada.',
    resumos: {
      substantivo: {
        titulo: 'Substantivo',
        texto:
          'Substantivo é a classe de palavras que nomeia seres, objetos, lugares, sentimentos, ideias, ações, fenômenos e conceitos. Pode ser comum, próprio, concreto, abstrato, simples, composto, primitivo, derivado ou coletivo. No texto, os substantivos ajudam a construir os temas centrais, os referentes e as imagens apresentadas ao leitor. Também são importantes para a coesão, pois podem ser retomados por pronomes, sinônimos ou expressões equivalentes. No ENEM, o substantivo costuma ser cobrado não como uma definição decorada, mas por seu papel na construção de sentido, na referenciação e na organização das ideias.',
      },
      artigo: {
        titulo: 'Artigo',
        texto:
          'Artigo é a classe que acompanha o substantivo e indica definição ou indefinição. Artigos definidos, como o, a, os e as, apontam para algo mais específico ou já conhecido pelo leitor. Artigos indefinidos, como um, uma, uns e umas, indicam algo mais geral, novo ou não especificado. O artigo também pode substantivar palavras de outras classes, como em “o belo”, “o viver” ou “um não”. No ENEM, o artigo pode aparecer em questões sobre sentido, generalização, especificidade e efeitos de referência dentro do texto.',
      },
      adjetivo: {
        titulo: 'Adjetivo',
        texto:
          'Adjetivo é a classe que caracteriza, qualifica ou especifica o substantivo. Pode indicar qualidade, estado, origem, aparência, avaliação, pertencimento ou julgamento. Em textos literários, jornalísticos e argumentativos, o adjetivo pode revelar ponto de vista, ironia, crítica, subjetividade ou tentativa de persuasão. Um mesmo substantivo pode produzir sentidos diferentes conforme o adjetivo que o acompanha. Por isso, no ENEM, é importante perceber se o adjetivo apenas descreve algo ou se carrega opinião e posicionamento do autor.',
      },
      numeral: {
        titulo: 'Numeral',
        texto:
          'Numeral expressa quantidade, ordem, fração ou multiplicação. Pode ser cardinal, como um, dois e três; ordinal, como primeiro e segundo; fracionário, como meio e terço; ou multiplicativo, como dobro e triplo. Em textos informativos, dados numéricos ajudam a construir precisão, credibilidade e efeito de objetividade. Porém, números também podem ser usados de forma persuasiva, dependendo do contexto. No ENEM, numerais aparecem em reportagens, gráficos, tabelas, textos científicos, campanhas e questões que exigem leitura crítica de dados.',
      },
      pronome: {
        titulo: 'Pronome',
        texto:
          'Pronome substitui ou acompanha nomes, ajudando na coesão textual e evitando repetições desnecessárias. Pronomes pessoais, possessivos, demonstrativos, indefinidos, relativos e interrogativos podem retomar informações anteriores ou antecipar elementos que ainda serão apresentados. Eles ajudam a identificar quem fala, com quem se fala, de quem se fala e a que termo o texto se refere. No ENEM, pronomes são cobrados principalmente em questões de referenciação, ambiguidade, coesão e interpretação de trechos.',
      },
      'funcoes-pronome-se': {
        titulo: 'Funções do Pronome Se',
        texto:
          'A palavra “se” pode exercer várias funções na língua portuguesa. Pode ser pronome reflexivo, quando o sujeito pratica e recebe a ação, como em “ele se cortou”. Pode ser partícula apassivadora, quando a frase pode ser transformada para a voz passiva, como em “vendem-se casas”. Pode ser índice de indeterminação do sujeito, quando não se sabe ou não se quer indicar quem pratica a ação, como em “precisa-se de funcionários”. Também pode ser parte integrante do verbo ou partícula expletiva. Para identificar a função, observe o verbo, a transitividade, o sujeito e o sentido da frase.',
      },
      conectivos: {
        titulo: 'Conectivos',
        texto:
          'Conectivos são palavras ou expressões que articulam ideias e estabelecem relações de sentido entre partes do texto. Eles podem indicar causa, consequência, oposição, conclusão, adição, explicação, condição, comparação, finalidade ou tempo. Exemplos comuns são: porque, portanto, porém, além disso, embora, se, quando e para que. Os conectivos são fundamentais para a coesão e para a argumentação. Trocar um conectivo pode mudar completamente o sentido do enunciado. No ENEM, esse conteúdo aparece muito em interpretação, redação e análise de textos argumentativos.',
      },
      interjeicao: {
        titulo: 'Interjeição',
        texto:
          'Interjeição é uma palavra ou expressão usada para manifestar emoção, surpresa, dor, alegria, medo, indignação, alívio, chamamento ou apelo. Exemplos incluem “ah!”, “nossa!”, “ei!”, “ufa!” e “socorro!”. É muito comum em diálogos, quadrinhos, textos com marcas de oralidade e situações comunicativas mais espontâneas. Seu sentido depende fortemente do contexto, da pontuação e da entonação sugerida. No ENEM, interjeições podem aparecer em charges, tirinhas e textos que exploram humor ou expressividade.',
      },
      verbo: {
        titulo: 'Verbo',
        texto:
          'Verbo é a classe de palavras que indica ação, estado, fenômeno da natureza, mudança ou processo. Flexiona-se em pessoa, número, tempo, modo e voz. Os tempos verbais organizam a temporalidade do texto, indicando passado, presente, futuro, continuidade, conclusão ou hipótese. Os modos verbais também produzem sentido: o indicativo sugere certeza, o subjuntivo indica possibilidade, dúvida ou desejo, e o imperativo expressa ordem, pedido ou orientação. No ENEM, verbos ajudam a perceber ponto de vista, sequência narrativa, instruções, argumentação e grau de certeza de uma informação.',
      },
      adverbio: {
        titulo: 'Advérbio',
        texto:
          'Advérbio modifica verbo, adjetivo ou outro advérbio, indicando circunstâncias como tempo, lugar, modo, intensidade, negação, afirmação, dúvida, causa ou finalidade. Palavras como hoje, aqui, bem, muito, talvez e não podem alterar significativamente o sentido de uma frase. Em textos argumentativos, advérbios podem reforçar posicionamentos, suavizar afirmações, indicar incerteza ou intensificar críticas. No ENEM, é comum que o advérbio seja cobrado pelo efeito de sentido que produz no texto.',
      },
      'funcoes-da-palavra-que': {
        titulo: 'Funções da Palavra Que',
        texto:
          'A palavra “que” pode desempenhar diferentes funções dependendo do contexto. Pode ser pronome relativo, quando retoma um termo anterior, como em “o livro que comprei”. Pode ser conjunção integrante, quando introduz uma oração que completa o sentido de um verbo, como em “espero que você venha”. Também pode funcionar como conjunção comparativa, conjunção consecutiva, partícula expletiva, advérbio ou interjeição. Para analisar corretamente, observe se a palavra retoma algo, se introduz uma oração, se estabelece relação de sentido ou se apenas reforça uma expressão.',
      },
      'analise-morfologica': {
        titulo: 'Análise Morfológica',
        texto:
          'Análise morfológica identifica a classe gramatical das palavras em uma frase. O ponto principal é analisar o uso real no contexto, pois uma mesma palavra pode pertencer a classes diferentes dependendo da função que exerce. Por exemplo, “jantar” pode ser verbo em “vou jantar” e substantivo em “o jantar está pronto”. No ENEM, a análise morfológica costuma aparecer conectada à interpretação: o aluno precisa entender como a escolha de uma classe gramatical contribui para o sentido, a coesão e a intenção comunicativa.',
      },
    },
    quiz: [
      {
        pergunta: 'Morfologia estuda principalmente:',
        opcoes: [
          'Classes de palavras',
          'Somente pontuação',
          'Apenas versos literários',
          'Exclusivamente mapas',
        ],
        resposta: 'Classes de palavras',
      },
      {
        pergunta: 'A classe que nomeia seres, ideias e objetos é:',
        opcoes: ['Substantivo', 'Advérbio', 'Conjunção', 'Interjeição'],
        resposta: 'Substantivo',
      },
      {
        pergunta: 'Conectivos são importantes porque:',
        opcoes: [
          'Estabelecem relações de sentido entre ideias',
          'Eliminam a coesão',
          'Servem apenas para rimar',
          'Não mudam sentido nunca',
        ],
        resposta: 'Estabelecem relações de sentido entre ideias',
      },
      {
        pergunta: 'Verbos podem indicar:',
        opcoes: [
          'Ação, estado ou fenômeno',
          'Apenas nomes de pessoas',
          'Somente artigos',
          'Exclusivamente números',
        ],
        resposta: 'Ação, estado ou fenômeno',
      },
      {
        pergunta: 'Na análise morfológica, o mais importante é:',
        opcoes: [
          'Observar a palavra no contexto',
          'Classificar sem ler',
          'Ignorar a frase',
          'Usar sempre a mesma classe',
        ],
        resposta: 'Observar a palavra no contexto',
      },
    ],
  },
  {
    slug: 'sintaxe',
    introducao:
      'Sintaxe estuda a organização das palavras dentro da oração e das orações dentro do período. Ela analisa funções como sujeito, predicado, objeto, complemento nominal, adjunto, aposto, vocativo e tipos de oração. No ENEM, a sintaxe costuma ser cobrada pelo efeito de sentido, pela clareza textual, pela coesão e pela relação entre ideias.',
    conceitos: [
      'oração',
      'período',
      'sujeito',
      'predicado',
      'objeto direto',
      'objeto indireto',
      'adjunto adverbial',
      'aposto',
      'vocativo',
      'oração subordinada',
      'oração coordenada',
    ],
    dicaEnem:
      'Em sintaxe, pergunte qual termo se liga a qual palavra e que relação de sentido aparece: causa, consequência, condição, oposição, explicação ou conclusão.',
    resumos: {
      sujeito: {
        titulo: 'Sujeito',
        texto:
          'Sujeito é o termo sobre o qual se declara algo na oração. Pode ser simples, composto, oculto, indeterminado ou inexistente, dependendo da estrutura da frase. Identificar o sujeito ajuda a compreender quem pratica ou sofre uma ação, quem está em determinado estado ou a que elemento se refere o predicado. No ENEM, o sujeito aparece em questões de concordância, ambiguidade, voz verbal e interpretação de sentido.',
      },
      predicado: {
        titulo: 'Predicado',
        texto:
          'Predicado é aquilo que se declara sobre o sujeito. Pode ser verbal, nominal ou verbo-nominal. O predicado verbal tem como núcleo um verbo de ação ou processo; o nominal tem como núcleo um nome, geralmente acompanhado de verbo de ligação; o verbo-nominal apresenta dois núcleos, um verbo e um nome. Entender o predicado ajuda a perceber se a frase destaca ação, estado, característica ou mudança.',
      },
      complementos: {
        titulo: 'Complementos Verbais',
        texto:
          'Complementos verbais completam o sentido de verbos transitivos. O objeto direto completa o verbo sem preposição obrigatória; o objeto indireto completa o verbo com preposição. A transitividade verbal depende do uso no contexto, pois um mesmo verbo pode mudar de comportamento conforme a frase. No ENEM, esse conteúdo pode aparecer em questões sobre regência, ambiguidade e sentido textual.',
      },
      'adjuntos-e-complemento-nominal': {
        titulo: 'Adjuntos e Complemento Nominal',
        texto:
          'Adjuntos adnominais caracterizam ou especificam substantivos, enquanto adjuntos adverbiais indicam circunstâncias como tempo, lugar, modo, causa, intensidade ou finalidade. O complemento nominal completa o sentido de nomes, como substantivos abstratos, adjetivos ou advérbios. Diferenciar esses termos ajuda na interpretação e na pontuação. No ENEM, o foco costuma ser o efeito que esses elementos produzem no texto.',
      },
      'oracoes-coordenadas': {
        titulo: 'Orações Coordenadas',
        texto:
          'Orações coordenadas são sintaticamente independentes, mas podem manter relações de sentido entre si. Podem ser aditivas, adversativas, alternativas, conclusivas ou explicativas. Conectivos como “e”, “mas”, “ou”, “portanto” e “porque” ajudam a indicar essas relações. No ENEM, orações coordenadas são cobradas principalmente pela relação argumentativa que estabelecem.',
      },
      'oracoes-subordinadas': {
        titulo: 'Orações Subordinadas',
        texto:
          'Orações subordinadas dependem sintaticamente de outra oração. Podem ser substantivas, adjetivas ou adverbiais. As subordinadas adverbiais indicam relações como causa, consequência, condição, concessão, comparação, finalidade e tempo. As adjetivas caracterizam um termo anterior e podem ser restritivas ou explicativas. No ENEM, esse conteúdo aparece muito ligado ao efeito de sentido e ao uso da vírgula.',
      },
    },
    quiz: [
      {
        pergunta: 'Sintaxe estuda principalmente:',
        opcoes: [
          'A organização dos termos na oração',
          'A origem das espécies',
          'Somente a métrica dos poemas',
          'A tabela periódica',
        ],
        resposta: 'A organização dos termos na oração',
      },
      {
        pergunta: 'Sujeito é o termo sobre o qual:',
        opcoes: [
          'Se declara algo',
          'Sempre aparece uma preposição',
          'Nunca há verbo',
          'Só existe em perguntas',
        ],
        resposta: 'Se declara algo',
      },
      {
        pergunta: 'Objeto direto completa o verbo:',
        opcoes: [
          'Sem preposição obrigatória',
          'Sempre com artigo definido',
          'Apenas em frases sem sujeito',
          'Somente em orações sem sentido',
        ],
        resposta: 'Sem preposição obrigatória',
      },
      {
        pergunta: 'Orações coordenadas adversativas indicam:',
        opcoes: ['Oposição', 'Soma', 'Alternância apenas', 'Tempo passado'],
        resposta: 'Oposição',
      },
      {
        pergunta: 'Orações subordinadas adverbiais podem indicar:',
        opcoes: [
          'Causa, condição, tempo ou concessão',
          'Somente nome próprio',
          'Apenas classe gramatical',
          'Nenhuma relação de sentido',
        ],
        resposta: 'Causa, condição, tempo ou concessão',
      },
    ],
  },
  {
    slug: 'interpretacao-e-semantica',
    introducao:
      'Interpretação e Semântica estudam como os sentidos são construídos nos textos. Esse bloco envolve inferência, pressupostos, implícitos, ambiguidade, polissemia, sinonímia, antonímia, ironia, humor, intertextualidade e efeitos de sentido. É uma das áreas mais importantes para o ENEM, pois aparece em praticamente toda a prova de Linguagens.',
    conceitos: [
      'interpretação',
      'inferência',
      'sentido literal',
      'sentido figurado',
      'polissemia',
      'ambiguidade',
      'ironia',
      'humor',
      'intertextualidade',
      'pressuposto',
      'implícito',
    ],
    dicaEnem:
      'Na interpretação, volte sempre ao texto. Evite respostas baseadas apenas na sua opinião. Procure pistas linguísticas, contexto, tom, intenção e relação entre as partes.',
    resumos: {
      interpretacao: {
        titulo: 'Interpretação de Texto',
        texto:
          'Interpretar um texto é compreender informações explícitas e implícitas, identificar a intenção comunicativa, perceber relações entre ideias e reconhecer o efeito produzido pela linguagem. No ENEM, a interpretação exige atenção ao enunciado e às alternativas, pois muitas respostas parecem corretas, mas extrapolam o texto ou contradizem alguma informação. Uma boa leitura observa título, gênero textual, público-alvo, contexto, escolhas vocabulares e estrutura argumentativa.',
      },
      inferencia: {
        titulo: 'Inferência',
        texto:
          'Inferência é a conclusão que o leitor constrói a partir de pistas presentes no texto. Nem tudo é dito de forma direta; muitas informações precisam ser percebidas por meio do contexto, da escolha das palavras, do tom e da relação entre ideias. No ENEM, inferir não significa imaginar qualquer coisa, mas chegar a uma interpretação sustentada pelo texto. Questões com tirinhas, charges, crônicas e textos publicitários cobram bastante essa habilidade.',
      },
      polissemia: {
        titulo: 'Polissemia',
        texto:
          'Polissemia ocorre quando uma mesma palavra possui mais de um sentido, dependendo do contexto. Por exemplo, “banco” pode indicar uma instituição financeira ou um assento. A polissemia é muito usada em humor, publicidade, poesia e textos que exploram duplo sentido. No ENEM, é comum que uma questão cobre o sentido específico de uma palavra no trecho, e não seu significado isolado no dicionário.',
      },
      ambiguidade: {
        titulo: 'Ambiguidade',
        texto:
          'Ambiguidade ocorre quando uma frase ou expressão permite mais de uma interpretação. Pode ser causada por posição de palavras, pronomes sem referente claro, pontuação inadequada ou duplo sentido. Em alguns textos, a ambiguidade é um problema de clareza; em outros, é usada intencionalmente para criar humor, ironia ou efeito poético. No ENEM, o estudante precisa perceber se a ambiguidade prejudica ou enriquece o sentido.',
      },
      ironia: {
        titulo: 'Ironia',
        texto:
          'Ironia ocorre quando o texto diz algo, mas sugere um sentido diferente ou até oposto ao literal. Ela depende do contexto e da capacidade do leitor de perceber contraste entre o que é dito e o que realmente se quer comunicar. A ironia aparece em charges, tirinhas, crônicas, textos literários, comentários críticos e publicidade. No ENEM, costuma estar ligada à crítica social e ao humor.',
      },
      intertextualidade: {
        titulo: 'Intertextualidade',
        texto:
          'Intertextualidade é a relação entre textos. Um texto pode retomar, citar, parodiar, adaptar ou transformar outro texto, imagem, música, obra literária, notícia ou discurso conhecido. Para compreender a intertextualidade, o leitor precisa perceber a referência e o novo sentido produzido. No ENEM, esse tema aparece em charges, campanhas, poemas, músicas, memes e textos que dialogam com obras famosas ou discursos sociais.',
      },
    },
    quiz: [
      {
        pergunta: 'Inferência é:',
        opcoes: [
          'Conclusão construída a partir de pistas do texto',
          'Resposta sem relação com o texto',
          'Cópia de uma palavra isolada',
          'Erro obrigatório de leitura',
        ],
        resposta: 'Conclusão construída a partir de pistas do texto',
      },
      {
        pergunta: 'Polissemia ocorre quando uma palavra:',
        opcoes: [
          'Possui mais de um sentido conforme o contexto',
          'Tem apenas um significado fixo',
          'Não pode ser usada em textos',
          'É sempre estrangeira',
        ],
        resposta: 'Possui mais de um sentido conforme o contexto',
      },
      {
        pergunta: 'Ironia depende principalmente de:',
        opcoes: [
          'Contraste entre sentido literal e intenção',
          'Ausência total de contexto',
          'Uso exclusivo de números',
          'Repetição sem sentido',
        ],
        resposta: 'Contraste entre sentido literal e intenção',
      },
      {
        pergunta: 'Intertextualidade é:',
        opcoes: [
          'Relação entre textos',
          'Erro de concordância',
          'Tipo de equação',
          'Classe de palavra invariável',
        ],
        resposta: 'Relação entre textos',
      },
      {
        pergunta: 'No ENEM, uma boa interpretação deve se apoiar:',
        opcoes: [
          'Nas pistas do texto e do contexto',
          'Apenas na opinião pessoal',
          'Somente no tamanho do texto',
          'Em uma palavra fora do trecho',
        ],
        resposta: 'Nas pistas do texto e do contexto',
      },
    ],
  },
  {
    slug: 'variacao-linguistica-e-generos-textuais',
    introducao:
      'Variação linguística e gêneros textuais mostram que a língua muda conforme região, grupo social, situação comunicativa, época, suporte e intenção. O ENEM valoriza a compreensão da língua como fenômeno vivo, diverso e adequado a diferentes contextos, combatendo preconceitos linguísticos.',
    conceitos: [
      'variação linguística',
      'norma-padrão',
      'preconceito linguístico',
      'registro formal',
      'registro informal',
      'gênero textual',
      'função da linguagem',
      'contexto comunicativo',
      'adequação',
    ],
    dicaEnem:
      'Em questões sobre variação linguística, cuidado com alternativas preconceituosas. O ENEM costuma valorizar a adequação ao contexto, não a ideia de que só existe uma forma correta de falar.',
    resumos: {
      'variacao-linguistica': {
        titulo: 'Variação Linguística',
        texto:
          'Variação linguística é o fenômeno pelo qual a língua apresenta diferentes formas de uso. Essas variações podem ser regionais, sociais, históricas ou situacionais. Um falante pode usar linguagem mais informal em uma conversa com amigos e linguagem mais formal em uma entrevista de emprego. Nenhuma variedade é inferior por natureza; cada uma tem seu contexto de uso. No ENEM, esse tema aparece em textos que discutem preconceito linguístico, identidade, oralidade, cultura popular e norma-padrão.',
      },
      'norma-padrao': {
        titulo: 'Norma-Padrão',
        texto:
          'A norma-padrão é uma variedade prestigiada da língua, usada em contextos formais, documentos oficiais, textos acadêmicos, provas, jornais e situações profissionais. Ela é importante para a comunicação em muitos espaços sociais, mas não deve ser usada para desvalorizar outras variedades linguísticas. O ENEM costuma cobrar a diferença entre adequação linguística e preconceito linguístico, mostrando que o domínio da norma-padrão é importante, mas a diversidade da língua também deve ser respeitada.',
      },
      'generos-textuais': {
        titulo: 'Gêneros Textuais',
        texto:
          'Gêneros textuais são formas relativamente estáveis de comunicação usadas em situações sociais específicas. Exemplos incluem notícia, reportagem, artigo de opinião, crônica, tirinha, charge, propaganda, receita, manual, carta, e-mail, meme, entrevista e resenha. Cada gênero possui finalidade, estrutura, linguagem e público-alvo próprios. No ENEM, identificar o gênero ajuda a entender a intenção do texto e o efeito de sentido produzido.',
      },
      'funcoes-da-linguagem': {
        titulo: 'Funções da Linguagem',
        texto:
          'Funções da linguagem indicam diferentes finalidades comunicativas. A função referencial informa; a emotiva expressa sentimentos do emissor; a conativa busca influenciar o receptor; a poética valoriza a forma da mensagem; a fática testa ou mantém o contato; e a metalinguística fala sobre o próprio código. No ENEM, essas funções aparecem em propagandas, poemas, notícias, diálogos, manuais e textos que refletem sobre a própria linguagem.',
      },
      'adequacao-linguistica': {
        titulo: 'Adequação Linguística',
        texto:
          'Adequação linguística é a escolha da forma de linguagem mais apropriada para uma situação comunicativa. Uma mensagem para amigos pode aceitar informalidade, abreviações e gírias; já uma redação, uma entrevista ou um documento oficial exigem maior formalidade. Adequar a linguagem não significa abandonar a identidade do falante, mas reconhecer o contexto, o objetivo, o público e o gênero textual. No ENEM, esse tema aparece com frequência em questões de variação e comunicação.',
      },
    },
    quiz: [
      {
        pergunta: 'Variação linguística mostra que a língua:',
        opcoes: [
          'Muda conforme contexto, região e grupo social',
          'É sempre igual em todos os lugares',
          'Não possui usos diferentes',
          'Só existe na norma-padrão',
        ],
        resposta: 'Muda conforme contexto, região e grupo social',
      },
      {
        pergunta: 'Preconceito linguístico ocorre quando:',
        opcoes: [
          'Uma variedade é tratada como inferior',
          'A diversidade linguística é respeitada',
          'O contexto é considerado',
          'O falante adapta sua linguagem',
        ],
        resposta: 'Uma variedade é tratada como inferior',
      },
      {
        pergunta: 'Gêneros textuais possuem:',
        opcoes: [
          'Finalidade, estrutura e contexto de uso',
          'Sempre o mesmo formato',
          'Apenas versos e rimas',
          'Somente linguagem matemática',
        ],
        resposta: 'Finalidade, estrutura e contexto de uso',
      },
      {
        pergunta: 'A função conativa da linguagem busca:',
        opcoes: [
          'Influenciar o receptor',
          'Apenas informar dados neutros',
          'Falar do próprio código',
          'Testar fórmulas químicas',
        ],
        resposta: 'Influenciar o receptor',
      },
      {
        pergunta: 'Adequação linguística significa:',
        opcoes: [
          'Escolher a linguagem conforme a situação',
          'Usar sempre gírias',
          'Nunca variar a fala',
          'Rejeitar a norma-padrão em todo contexto',
        ],
        resposta: 'Escolher a linguagem conforme a situação',
      },
    ],
  },
]

export function getPortuguesEstudo(slug: string) {
  return portuguesEstudos.find((estudo) => estudo.slug === slug)
}

export function getPortuguesResumoFallback(topico: string): PortuguesResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado pelo uso no texto. ${respostaProcessoLinguistico} Observe contexto, classe gramatical, função sintática, coesão, intenção comunicativa e efeito de sentido.`,
  }
}

export function getPortuguesQuizFallback(
  titulo: string,
  topicos: string[],
): PortuguesQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo}?`,
      opcoes: [
        'Analisar palavras no contexto',
        'Decorar sem ler o texto',
        'Ignorar sentido',
        'Evitar exemplos',
      ],
      resposta: 'Analisar palavras no contexto',
    },
    {
      pergunta: `${primeiroTopico} deve ser entendido considerando:`,
      opcoes: [
        'Classe, função e efeito de sentido',
        'Apenas ordem alfabética',
        'Somente data histórica',
        'Nenhum contexto',
      ],
      resposta: 'Classe, função e efeito de sentido',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, observe:`,
      opcoes: [
        'Uso no texto e relação com outras palavras',
        'Somente cor da página',
        'Apenas números',
        'Nada da frase',
      ],
      resposta: 'Uso no texto e relação com outras palavras',
    },
    {
      pergunta: 'No ENEM, gramática costuma aparecer ligada a:',
      opcoes: [
        'Interpretação e efeito de sentido',
        'Classificação isolada sempre',
        'Somente decoreba',
        'Cálculo de velocidade',
      ],
      resposta: 'Interpretação e efeito de sentido',
    },
    {
      pergunta: 'Uma habilidade importante em Português é:',
      opcoes: [
        'Ler contexto e inferir sentido',
        'Ignorar o enunciado',
        'Não reler alternativas',
        'Evitar coesão',
      ],
      resposta: 'Ler contexto e inferir sentido',
    },
  ]
}