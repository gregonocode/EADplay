export type QuimicaResumo = {
  titulo: string
  texto: string
}

export type QuimicaQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type QuimicaEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, QuimicaResumo>
  quiz: QuimicaQuizPergunta[]
}

const respostaProcessoQuimico =
  'No ENEM, Química costuma relacionar estrutura da matéria, transformações, energia, ambiente, tecnologia, saúde, indústria e situações do cotidiano.'

export const quimicaEstudos: QuimicaEstudo[] = [
  {
    slug: 'atomica',
    introducao:
      'Química Atômica estuda a estrutura da matéria, os modelos atômicos, a organização da tabela periódica, as ligações químicas, a radioatividade e a formação de moléculas. Esse conteúdo é importante porque ajuda a entender por que as substâncias possuem propriedades diferentes, como reatividade, solubilidade, condutividade, polaridade e estabilidade.',
    conceitos: [
      'átomo',
      'próton',
      'nêutron',
      'elétron',
      'número atômico',
      'tabela periódica',
      'ligação química',
      'radioatividade',
      'molécula',
      'polaridade',
    ],
    dicaEnem:
      'Em questões de Química Atômica, conecte estrutura eletrônica, posição na tabela periódica, propriedades periódicas e tipo de ligação formada. O ENEM costuma cobrar menos decoreba e mais interpretação de situações.',
    resumos: {
      'teoria-atomica': {
        titulo: 'Teoria Atômica',
        texto:
          'A teoria atômica evoluiu conforme novas evidências experimentais surgiram. Dalton imaginou os átomos como esferas maciças, indivisíveis e características de cada elemento. Thomson, ao identificar o elétron, mostrou que o átomo possuía partículas menores. Rutherford, com o experimento da lâmina de ouro, propôs um núcleo pequeno, denso e positivo, cercado por uma região praticamente vazia. Bohr organizou os elétrons em níveis de energia, explicando melhor certos comportamentos da luz emitida por átomos. O modelo atual trabalha com orbitais, probabilidade e distribuição eletrônica. No ENEM, o mais importante é relacionar cada modelo às evidências que o sustentaram e aos seus limites.',
      },
      'estrutura-atomica': {
        titulo: 'Estrutura Atômica',
        texto:
          'O átomo é formado por núcleo e eletrosfera. No núcleo ficam prótons, com carga positiva, e nêutrons, sem carga elétrica. Na eletrosfera ficam os elétrons, com carga negativa. O número atômico corresponde ao número de prótons e identifica o elemento químico. A massa atômica está relacionada principalmente à soma de prótons e nêutrons. Átomos de um mesmo elemento com números diferentes de nêutrons são chamados isótopos. Íons são átomos ou grupos de átomos que ganham ou perdem elétrons, ficando com carga elétrica.',
      },
      'classificacao-periodica-dos-elementos': {
        titulo: 'Classificação Periódica dos Elementos',
        texto:
          'A tabela periódica organiza os elementos em ordem crescente de número atômico e agrupa elementos com propriedades semelhantes. As famílias ou grupos indicam elementos com comportamentos químicos parecidos, pois possuem configurações eletrônicas externas semelhantes. Os períodos indicam os níveis de energia ocupados pelos elétrons. Metais costumam ser bons condutores, maleáveis e tendem a perder elétrons. Ametais apresentam maior tendência a ganhar ou compartilhar elétrons. Gases nobres têm baixa reatividade por possuírem camada de valência estável. No ENEM, a tabela periódica aparece como ferramenta de previsão de propriedades.',
      },
      'propriedades-periodicas': {
        titulo: 'Propriedades Periódicas',
        texto:
          'As propriedades periódicas variam de modo previsível na tabela. O raio atômico tende a aumentar para baixo e para a esquerda, pois há mais camadas eletrônicas e menor atração efetiva sobre os elétrons externos. A eletronegatividade e a energia de ionização tendem a aumentar para cima e para a direita, pois os átomos atraem elétrons com mais força. Essas tendências ajudam a explicar reatividade, polaridade das ligações, formação de íons e comportamento das substâncias. Em provas do ENEM, o tema costuma aparecer em comparações entre elementos.',
      },
      'ligacoes-quimicas': {
        titulo: 'Ligações Químicas',
        texto:
          'Ligações químicas unem átomos para formar substâncias mais estáveis. A ligação iônica ocorre por transferência de elétrons, geralmente entre metal e ametal, formando íons de cargas opostas que se atraem. A ligação covalente ocorre por compartilhamento de elétrons, geralmente entre ametais, formando moléculas. A ligação metálica ocorre entre átomos metálicos, com elétrons deslocalizados, o que explica propriedades como condutividade elétrica, brilho, maleabilidade e ductilidade. O ENEM costuma relacionar ligações às propriedades dos materiais.',
      },
      radioatividade: {
        titulo: 'Radioatividade',
        texto:
          'Radioatividade é a emissão espontânea de radiações por núcleos instáveis. Pode envolver partículas alfa, partículas beta e radiação gama. A radiação alfa tem menor poder de penetração, enquanto a gama possui maior capacidade de atravessar materiais. A meia-vida é o tempo necessário para metade dos núcleos radioativos de uma amostra decair. O tema aparece em medicina nuclear, radioterapia, datação de fósseis, energia nuclear, acidentes ambientais e debates sobre riscos e benefícios do uso da radiação.',
      },
      'estudo-de-moleculas': {
        titulo: 'Estudo de Moléculas',
        texto:
          'Moléculas resultam de ligações entre átomos e possuem geometria, polaridade e propriedades específicas. A polaridade depende da diferença de eletronegatividade entre os átomos e da geometria molecular. Uma molécula pode ter ligações polares e ainda assim ser apolar, dependendo da simetria. Substâncias polares tendem a se dissolver melhor em solventes polares, enquanto substâncias apolares interagem melhor com substâncias apolares. Essa ideia ajuda a entender solubilidade, detergentes, óleos, água, medicamentos e processos biológicos.',
      },
    },
    quiz: [
      {
        pergunta: 'O número atômico de um elemento indica:',
        opcoes: [
          'Número de prótons',
          'Número de moléculas',
          'Massa da solução',
          'Quantidade de ligações covalentes',
        ],
        resposta: 'Número de prótons',
      },
      {
        pergunta: 'A ligação iônica ocorre principalmente por:',
        opcoes: [
          'Transferência de elétrons',
          'Compartilhamento igual de prótons',
          'Fusão de núcleos',
          'Evaporação de moléculas',
        ],
        resposta: 'Transferência de elétrons',
      },
      {
        pergunta: 'Na tabela periódica, gases nobres apresentam, em geral:',
        opcoes: [
          'Baixa reatividade',
          'Alta tendência a formar sais iônicos sempre',
          'Ausência de elétrons',
          'Mesmo número atômico',
        ],
        resposta: 'Baixa reatividade',
      },
      {
        pergunta: 'Meia-vida radioativa é:',
        opcoes: [
          'Tempo para metade da amostra decair',
          'Tempo para dobrar a massa',
          'Temperatura de ebulição',
          'Velocidade da luz no vácuo',
        ],
        resposta: 'Tempo para metade da amostra decair',
      },
      {
        pergunta: 'A polaridade molecular depende principalmente de:',
        opcoes: [
          'Eletronegatividade e geometria',
          'Apenas cor da substância',
          'Número de páginas da tabela',
          'Somente temperatura ambiente',
        ],
        resposta: 'Eletronegatividade e geometria',
      },
    ],
  },
  {
    slug: 'fisico-quimica',
    introducao:
      'Físico-Química estuda soluções, concentrações, energia das reações, velocidade, equilíbrio químico, propriedades coligativas e comportamento das substâncias em diferentes condições. É uma área muito cobrada no ENEM porque aparece em rótulos, medicamentos, combustíveis, alimentos, tratamento de água, poluição, indústria e fenômenos do cotidiano.',
    conceitos: [
      'solução',
      'soluto',
      'solvente',
      'concentração',
      'entalpia',
      'cinética química',
      'equilíbrio químico',
      'propriedades coligativas',
      'osmose',
      'diluição',
    ],
    dicaEnem:
      'Leia unidades e grandezas com calma. Muitas questões misturam concentração, temperatura, energia, gráficos, rendimento e interpretação de situações reais.',
    resumos: {
      'solucoes-conceitos-gerais': {
        titulo: 'Soluções - Conceitos Gerais',
        texto:
          'Solução é uma mistura homogênea formada por soluto e solvente. O soluto é a substância dissolvida; o solvente é o componente em maior quantidade, geralmente a água em soluções aquosas. A solubilidade depende da natureza das substâncias, da temperatura e, no caso dos gases, também da pressão. Uma solução pode ser insaturada, saturada ou supersaturada, dependendo da quantidade de soluto dissolvida. O ENEM costuma relacionar soluções a medicamentos, soro fisiológico, poluição da água, bebidas, limpeza e tratamento de água.',
      },
      'solucoes-concentracoes': {
        titulo: 'Soluções - Concentrações',
        texto:
          'Concentração expressa a quantidade de soluto em determinada quantidade de solução ou solvente. Pode aparecer em g/L, mol/L, porcentagem, ppm e outras unidades. A concentração comum relaciona massa de soluto e volume de solução. A concentração molar relaciona quantidade de matéria, em mol, e volume. Em questões do ENEM, é comum interpretar rótulos, bulas, gráficos e situações de preparo de soluções. O cuidado com unidades é essencial para evitar erro.',
      },
      diluicao: {
        titulo: 'Diluição',
        texto:
          'Diluir uma solução significa adicionar solvente, diminuindo a concentração, mas mantendo a mesma quantidade de soluto. Esse processo aparece no preparo de medicamentos, produtos de limpeza, bebidas e soluções laboratoriais. A relação entre concentração e volume antes e depois da diluição costuma ser usada em exercícios simples. No cotidiano, diluir não significa “destruir” o soluto, mas espalhá-lo em um volume maior de solvente.',
      },
      termoquimica: {
        titulo: 'Termoquímica',
        texto:
          'Termoquímica estuda o calor envolvido nas reações químicas. Reações exotérmicas liberam energia para o ambiente, como combustões. Reações endotérmicas absorvem energia, como alguns processos de decomposição. A entalpia ajuda a comparar a energia dos reagentes e dos produtos. Esse conteúdo aparece em combustíveis, metabolismo, alimentos, aquecimento global, eficiência energética e escolha de fontes de energia. O ENEM costuma cobrar interpretação de gráficos de energia e impactos ambientais.',
      },
      'cinetica-quimica': {
        titulo: 'Cinética Química',
        texto:
          'Cinética química estuda a velocidade das reações e os fatores que a alteram. Temperatura, concentração, superfície de contato, pressão em gases e catalisadores podem acelerar reações. Quanto maior a temperatura, maior tende a ser a energia das partículas e a frequência de colisões eficazes. Catalisadores diminuem a energia de ativação sem serem consumidos no processo. Esse tema aparece em conservação de alimentos, combustão, digestão, indústria, medicamentos e conversores catalíticos.',
      },
      'equilibrios-quimicos': {
        titulo: 'Equilíbrios Químicos',
        texto:
          'Equilíbrio químico ocorre em reações reversíveis quando as velocidades direta e inversa se igualam. Isso não significa que a reação parou, mas que as concentrações permanecem constantes em escala macroscópica. O princípio de Le Chatelier ajuda a prever deslocamentos quando há mudança de concentração, pressão ou temperatura. O tema é importante em processos industriais, equilíbrio ácido-base do sangue, oceanos, chuva ácida e produção de substâncias como amônia.',
      },
      'propriedades-coligativas': {
        titulo: 'Propriedades Coligativas',
        texto:
          'Propriedades coligativas dependem do número de partículas de soluto dispersas no solvente, e não da identidade química dessas partículas. Incluem tonoscopia, ebulioscopia, crioscopia e osmose. A adição de soluto pode diminuir a pressão de vapor, aumentar a temperatura de ebulição e diminuir a temperatura de congelamento. Esses fenômenos aparecem em temas como soro fisiológico, conservação de alimentos, adição de sal ao gelo, funcionamento de membranas e equilíbrio hídrico das células.',
      },
    },
    quiz: [
      {
        pergunta: 'Em uma solução aquosa, a água geralmente atua como:',
        opcoes: [
          'Solvente',
          'Catalisador obrigatório',
          'Produto gasoso',
          'Indicador radioativo',
        ],
        resposta: 'Solvente',
      },
      {
        pergunta: 'Diluir uma solução significa:',
        opcoes: [
          'Diminuir a concentração adicionando solvente',
          'Aumentar a massa de soluto sempre',
          'Transformar soluto em gás',
          'Criar uma substância pura',
        ],
        resposta: 'Diminuir a concentração adicionando solvente',
      },
      {
        pergunta: 'Reações exotérmicas:',
        opcoes: [
          'Liberam energia',
          'Absorvem sempre luz solar',
          'Não envolvem calor',
          'Só ocorrem no vácuo',
        ],
        resposta: 'Liberam energia',
      },
      {
        pergunta: 'Catalisadores aumentam a velocidade porque:',
        opcoes: [
          'Diminuem a energia de ativação',
          'Aumentam sempre a temperatura do universo',
          'São consumidos totalmente',
          'Impedem choques entre partículas',
        ],
        resposta: 'Diminuem a energia de ativação',
      },
      {
        pergunta: 'O princípio de Le Chatelier é usado para analisar:',
        opcoes: [
          'Deslocamento de equilíbrio',
          'Classificação de ossos',
          'Cálculo de área',
          'Movimento uniforme',
        ],
        resposta: 'Deslocamento de equilíbrio',
      },
    ],
  },
  {
    slug: 'quimica-geral',
    introducao:
      'Química Geral reúne fundamentos essenciais para entender a matéria, suas propriedades, suas transformações e as leis que organizam as reações químicas. Esse bloco serve como base para interpretar fenômenos do cotidiano, processos industriais, questões ambientais e cálculos simples usados no ENEM.',
    conceitos: [
      'matéria',
      'substância',
      'mistura',
      'transformação química',
      'transformação física',
      'mol',
      'massa molar',
      'estequiometria',
      'balanceamento',
    ],
    dicaEnem:
      'Em Química Geral, identifique se a questão trata de uma transformação física ou química, observe massas, proporções, fórmulas e conservação dos átomos.',
    resumos: {
      'materia-e-propriedades': {
        titulo: 'Matéria e Propriedades',
        texto:
          'Matéria é tudo que possui massa e ocupa lugar no espaço. Ela pode ser analisada por propriedades gerais, como massa, volume e impenetrabilidade, e por propriedades específicas, como densidade, ponto de fusão, ponto de ebulição e solubilidade. Essas propriedades ajudam a identificar substâncias e separar misturas. No ENEM, esse conteúdo aparece em situações de laboratório, tratamento de água, combustíveis, alimentos, materiais e fenômenos cotidianos.',
      },
      'substancias-e-misturas': {
        titulo: 'Substâncias e Misturas',
        texto:
          'Substância pura possui composição definida e propriedades constantes. Mistura é a reunião de duas ou mais substâncias. Misturas homogêneas apresentam uma única fase visível, como água com sal dissolvido. Misturas heterogêneas apresentam mais de uma fase, como água e óleo. Separar misturas exige escolher métodos adequados, como filtração, decantação, destilação, centrifugação, evaporação e separação magnética. O ENEM cobra bastante a aplicação desses métodos em água, lixo, petróleo e alimentos.',
      },
      'transformacoes-da-materia': {
        titulo: 'Transformações da Matéria',
        texto:
          'Transformações físicas não alteram a composição da substância, como mudanças de estado físico, dissolução e fragmentação. Transformações químicas formam novas substâncias, como combustão, oxidação, fermentação e decomposição. Evidências de reação química podem incluir liberação de gás, mudança de cor, formação de precipitado, variação de temperatura e emissão de luz. No ENEM, é importante interpretar o fenômeno antes de aplicar fórmulas.',
      },
      'leis-ponderais': {
        titulo: 'Leis Ponderais',
        texto:
          'As leis ponderais ajudam a entender a conservação e as proporções nas reações químicas. A Lei de Lavoisier afirma que, em sistema fechado, a massa total dos reagentes é igual à massa total dos produtos. A Lei de Proust afirma que uma substância composta apresenta proporções fixas entre seus elementos. Essas ideias sustentam o balanceamento de equações e os cálculos estequiométricos. O ENEM pode cobrar essas leis em reações de combustão, indústria e experimentos simples.',
      },
      estequiometria: {
        titulo: 'Estequiometria',
        texto:
          'Estequiometria estuda as proporções quantitativas entre reagentes e produtos em uma reação química. Para resolver problemas, é necessário balancear a equação, interpretar a proporção em mols, converter massas quando necessário e observar reagente limitante quando houver excesso. Esse tema aparece em produção industrial, rendimento de reações, combustíveis, emissão de gases, medicamentos e preparo de materiais. O mais importante é compreender a proporção da reação, não apenas decorar contas.',
      },
    },
    quiz: [
      {
        pergunta: 'Uma transformação química é caracterizada por:',
        opcoes: [
          'Formação de novas substâncias',
          'Apenas mudança de tamanho',
          'Mudança de posição no espaço',
          'Variação de formato sem alterar composição',
        ],
        resposta: 'Formação de novas substâncias',
      },
      {
        pergunta: 'Água e óleo formam uma mistura:',
        opcoes: ['Heterogênea', 'Homogênea', 'Pura simples', 'Gasosa sempre'],
        resposta: 'Heterogênea',
      },
      {
        pergunta: 'A Lei de Lavoisier está relacionada à:',
        opcoes: [
          'Conservação da massa',
          'Criação de massa do nada',
          'Destruição dos átomos',
          'Mudança do número atômico',
        ],
        resposta: 'Conservação da massa',
      },
      {
        pergunta: 'Antes de fazer cálculo estequiométrico, é importante:',
        opcoes: [
          'Balancear a equação química',
          'Ignorar os coeficientes',
          'Eliminar os produtos',
          'Escolher respostas ao acaso',
        ],
        resposta: 'Balancear a equação química',
      },
      {
        pergunta: 'Filtração é um método usado para separar:',
        opcoes: [
          'Sólido não dissolvido de um líquido',
          'Dois gases nobres sempre',
          'Átomos de uma molécula',
          'Prótons e elétrons',
        ],
        resposta: 'Sólido não dissolvido de um líquido',
      },
    ],
  },
  {
    slug: 'quimica-organica',
    introducao:
      'Química Orgânica estuda compostos do carbono, suas estruturas, funções, propriedades e reações. Esse conteúdo aparece no ENEM ligado a combustíveis, alimentos, medicamentos, plásticos, polímeros, perfumes, bebidas, biotecnologia, meio ambiente e substâncias presentes no cotidiano.',
    conceitos: [
      'carbono',
      'cadeia carbônica',
      'hidrocarboneto',
      'função orgânica',
      'álcool',
      'ácido carboxílico',
      'éster',
      'polímero',
      'isomeria',
    ],
    dicaEnem:
      'Em Química Orgânica, observe o grupo funcional. Ele ajuda a prever nome, propriedades, solubilidade, acidez, cheiro, uso e comportamento da substância.',
    resumos: {
      'introducao-a-organica': {
        titulo: 'Introdução à Química Orgânica',
        texto:
          'A Química Orgânica estuda principalmente compostos que possuem carbono. O carbono é capaz de formar quatro ligações covalentes e criar cadeias longas, ramificadas, abertas, fechadas, saturadas ou insaturadas. Essa diversidade explica a enorme quantidade de compostos orgânicos existentes. Embora muitos compostos orgânicos estejam ligados aos seres vivos, a Química Orgânica também inclui substâncias sintéticas, como plásticos, medicamentos, combustíveis e solventes.',
      },
      hidrocarbonetos: {
        titulo: 'Hidrocarbonetos',
        texto:
          'Hidrocarbonetos são compostos formados apenas por carbono e hidrogênio. Eles podem ser alcanos, alcenos, alcinos, aromáticos ou outras estruturas. Estão presentes em combustíveis como gasolina, diesel, gás natural e derivados do petróleo. Sua combustão libera energia, mas também pode gerar poluentes, como gás carbônico e monóxido de carbono. No ENEM, hidrocarbonetos aparecem frequentemente em temas sobre matriz energética, combustíveis fósseis, poluição e efeito estufa.',
      },
      'funcoes-organicas': {
        titulo: 'Funções Orgânicas',
        texto:
          'Funções orgânicas são grupos de compostos com propriedades semelhantes por possuírem o mesmo grupo funcional. Álcoois possuem hidroxila ligada a carbono saturado; aldeídos e cetonas possuem carbonila; ácidos carboxílicos apresentam carboxila; ésteres estão associados a aromas e sabores; aminas contêm nitrogênio e aparecem em substâncias biológicas e medicamentos. Reconhecer funções orgânicas ajuda a interpretar propriedades e usos das substâncias.',
      },
      isomeria: {
        titulo: 'Isomeria',
        texto:
          'Isomeria ocorre quando compostos possuem a mesma fórmula molecular, mas estruturas ou arranjos espaciais diferentes. Isômeros podem apresentar propriedades físicas, químicas e biológicas distintas. Isso é muito importante em medicamentos, pois moléculas com mesma fórmula podem ter efeitos diferentes no organismo. No ENEM, isomeria aparece associada à estrutura das moléculas, à atividade biológica, a alimentos, fármacos e materiais.',
      },
      polimeros: {
        titulo: 'Polímeros',
        texto:
          'Polímeros são macromoléculas formadas pela repetição de unidades menores chamadas monômeros. Podem ser naturais, como celulose, amido, proteínas e DNA, ou sintéticos, como plástico, nylon, PET e borracha sintética. Os polímeros têm grande importância industrial, mas também geram preocupação ambiental devido ao descarte inadequado e à persistência de muitos plásticos no ambiente. O ENEM costuma relacionar polímeros a reciclagem, sustentabilidade e consumo.',
      },
    },
    quiz: [
      {
        pergunta: 'A Química Orgânica estuda principalmente compostos que possuem:',
        opcoes: ['Carbono', 'Apenas ferro', 'Somente gases nobres', 'Exclusivamente sódio'],
        resposta: 'Carbono',
      },
      {
        pergunta: 'Hidrocarbonetos são formados por:',
        opcoes: [
          'Carbono e hidrogênio',
          'Sódio e cloro',
          'Cálcio e oxigênio',
          'Nitrogênio e hélio',
        ],
        resposta: 'Carbono e hidrogênio',
      },
      {
        pergunta: 'O grupo funcional é importante porque:',
        opcoes: [
          'Ajuda a identificar propriedades da substância',
          'Elimina a existência de ligações',
          'Transforma todo composto em metal',
          'Impede reações químicas',
        ],
        resposta: 'Ajuda a identificar propriedades da substância',
      },
      {
        pergunta: 'Isomeria ocorre quando compostos possuem:',
        opcoes: [
          'Mesma fórmula molecular e estruturas diferentes',
          'Mesmo nome e massas sempre diferentes',
          'Ausência de carbono',
          'Somente ligações metálicas',
        ],
        resposta: 'Mesma fórmula molecular e estruturas diferentes',
      },
      {
        pergunta: 'Polímeros são formados pela repetição de:',
        opcoes: ['Monômeros', 'Prótons livres', 'Íons radioativos apenas', 'Gases nobres'],
        resposta: 'Monômeros',
      },
    ],
  },
  {
    slug: 'eletroquimica-e-quimica-ambiental',
    introducao:
      'Eletroquímica e Química Ambiental conectam reações de oxirredução, pilhas, baterias, eletrólise, corrosão, poluição, tratamento de água, chuva ácida, efeito estufa e sustentabilidade. É um dos blocos mais úteis para o ENEM porque relaciona conceitos químicos com tecnologia e problemas ambientais.',
    conceitos: [
      'oxidação',
      'redução',
      'pilha',
      'bateria',
      'eletrólise',
      'corrosão',
      'poluição',
      'chuva ácida',
      'tratamento de água',
      'sustentabilidade',
    ],
    dicaEnem:
      'Quando aparecer pilha, bateria ou corrosão, pense em transferência de elétrons. Quando aparecer ambiente, relacione substâncias, impactos, fontes poluidoras e possíveis soluções.',
    resumos: {
      oxirreducao: {
        titulo: 'Oxirredução',
        texto:
          'Reações de oxirredução envolvem transferência de elétrons. Oxidação é perda de elétrons; redução é ganho de elétrons. O agente redutor sofre oxidação e provoca a redução de outra espécie. O agente oxidante sofre redução e provoca a oxidação de outra espécie. Esse conteúdo aparece em corrosão, metabolismo, pilhas, baterias, fotossíntese, respiração celular, tratamento de minérios e processos industriais.',
      },
      'pilhas-e-baterias': {
        titulo: 'Pilhas e Baterias',
        texto:
          'Pilhas e baterias transformam energia química em energia elétrica por meio de reações espontâneas de oxirredução. Em uma pilha, os elétrons fluem do ânodo para o cátodo pelo circuito externo. Baterias estão presentes em celulares, carros, computadores e diversos equipamentos. O descarte inadequado pode contaminar solo e água com metais e outras substâncias perigosas. No ENEM, o tema costuma envolver funcionamento, impacto ambiental e reciclagem.',
      },
      eletrolise: {
        titulo: 'Eletrólise',
        texto:
          'Eletrólise é um processo não espontâneo que usa energia elétrica para provocar uma reação química. Ela pode ser aplicada na obtenção de metais, produção de substâncias, galvanização e revestimento de objetos. Diferente das pilhas, que geram corrente elétrica, a eletrólise consome corrente elétrica. O ENEM pode cobrar a diferença entre processos espontâneos e não espontâneos, além de aplicações tecnológicas.',
      },
      corrosao: {
        titulo: 'Corrosão',
        texto:
          'Corrosão é um processo de deterioração de materiais, especialmente metais, por reações químicas com o ambiente. A ferrugem do ferro é um exemplo comum, envolvendo oxigênio e umidade. A corrosão gera prejuízos econômicos, riscos em estruturas e necessidade de proteção. Pintura, galvanização, ligas metálicas e metais de sacrifício são formas de reduzir o processo. No ENEM, corrosão aparece ligada a oxirredução e conservação de materiais.',
      },
      'quimica-ambiental': {
        titulo: 'Química Ambiental',
        texto:
          'Química Ambiental estuda as substâncias e transformações químicas que ocorrem no ambiente, além dos impactos das atividades humanas. Poluição do ar, chuva ácida, contaminação da água, excesso de fertilizantes, metais pesados, plásticos, gases do efeito estufa e tratamento de resíduos são temas frequentes. O ENEM costuma cobrar não só o problema, mas também a origem química, os impactos sociais e ambientais e possíveis formas de mitigação.',
      },
      'tratamento-de-agua': {
        titulo: 'Tratamento de Água',
        texto:
          'O tratamento de água envolve etapas como captação, coagulação, floculação, decantação, filtração, desinfecção e fluoretação. Cada etapa possui uma função: agrupar partículas, separar impurezas, remover sólidos e eliminar microrganismos. Esse conteúdo aparece bastante no ENEM porque relaciona Química, saúde pública, saneamento básico e cidadania. A falta de tratamento adequado pode causar doenças e ampliar desigualdades sociais.',
      },
    },
    quiz: [
      {
        pergunta: 'Oxidação corresponde a:',
        opcoes: [
          'Perda de elétrons',
          'Ganho obrigatório de prótons',
          'Ausência de reação',
          'Formação de moléculas sem elétrons',
        ],
        resposta: 'Perda de elétrons',
      },
      {
        pergunta: 'Pilhas transformam energia:',
        opcoes: [
          'Química em elétrica',
          'Elétrica em nuclear sempre',
          'Solar em mecânica apenas',
          'Térmica em genética',
        ],
        resposta: 'Química em elétrica',
      },
      {
        pergunta: 'A eletrólise é um processo que:',
        opcoes: [
          'Consome energia elétrica para provocar reação',
          'Sempre ocorre sem energia',
          'Não envolve íons',
          'É igual à filtração',
        ],
        resposta: 'Consome energia elétrica para provocar reação',
      },
      {
        pergunta: 'A corrosão do ferro está relacionada a:',
        opcoes: [
          'Reações de oxirredução',
          'Fotossíntese',
          'Ligação peptídica',
          'Formação de DNA',
        ],
        resposta: 'Reações de oxirredução',
      },
      {
        pergunta: 'O tratamento de água é importante porque:',
        opcoes: [
          'Reduz impurezas e microrganismos',
          'Aumenta sempre a poluição',
          'Remove todos os átomos da água',
          'Transforma água em metal',
        ],
        resposta: 'Reduz impurezas e microrganismos',
      },
    ],
  },
]

export function getQuimicaEstudo(slug: string) {
  return quimicaEstudos.find((estudo) => estudo.slug === slug)
}

export function getQuimicaResumoFallback(topico: string): QuimicaResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado relacionando estrutura, transformação e propriedades da matéria. ${respostaProcessoQuimico} Observe fórmulas, unidades, energia, partículas, aplicações no cotidiano e impactos ambientais.`,
  }
}

export function getQuimicaQuizFallback(
  titulo: string,
  topicos: string[],
): QuimicaQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo}?`,
      opcoes: [
        'Relacionar conceitos químicos a transformações reais',
        'Decorar sem entender partículas',
        'Ignorar unidades',
        'Evitar fórmulas',
      ],
      resposta: 'Relacionar conceitos químicos a transformações reais',
    },
    {
      pergunta: `${primeiroTopico} deve ser analisado considerando:`,
      opcoes: [
        'Matéria, propriedades e transformações',
        'Apenas nomes soltos',
        'Somente política',
        'Nenhuma evidência',
      ],
      resposta: 'Matéria, propriedades e transformações',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, observe:`,
      opcoes: [
        'Unidades, partículas e relações entre substâncias',
        'Apenas opiniões pessoais',
        'Somente datas',
        'Nada do cotidiano',
      ],
      resposta: 'Unidades, partículas e relações entre substâncias',
    },
    {
      pergunta: 'Uma habilidade importante em Química é:',
      opcoes: [
        'Interpretar fórmulas, gráficos e fenômenos',
        'Ignorar rótulos',
        'Evitar cálculos simples',
        'Negar experimentos',
      ],
      resposta: 'Interpretar fórmulas, gráficos e fenômenos',
    },
    {
      pergunta: 'No ENEM, Química aparece muito ligada a:',
      opcoes: [
        'Ambiente, tecnologia e cotidiano',
        'Somente nomes de cientistas',
        'Apenas literatura',
        'Exclusivamente mapas políticos',
      ],
      resposta: 'Ambiente, tecnologia e cotidiano',
    },
  ]
}