export type BiologiaResumo = {
  titulo: string
  texto: string
}

export type BiologiaQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type BiologiaEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, BiologiaResumo>
  quiz: BiologiaQuizPergunta[]
}

const respostaProcessoBiologico =
  'No ENEM, Biologia costuma relacionar estruturas, funções, processos vitais, saúde, ambiente, tecnologia e impactos sociais.'

export const biologiaEstudos: BiologiaEstudo[] = [
  {
    slug: 'introducao',
    introducao:
      'A introdução à Biologia apresenta o estudo da vida, seus níveis de organização e as principais moléculas que formam os seres vivos. Essa base ajuda o estudante a entender células, metabolismo, genética, evolução, ecologia, saúde e biotecnologia sem tratar os temas como assuntos isolados.',
    conceitos: ['seres vivos', 'metabolismo', 'célula', 'bioquímica', 'homeostase', 'níveis de organização'],
    dicaEnem:
      'Em questões introdutórias, procure ligar estrutura e função: moléculas, células e organismos aparecem sempre conectados a processos vitais e a situações reais.',
    resumos: {
      'introducao-a-biologia': {
        titulo: 'Introdução à Biologia',
        texto:
          'Biologia é a ciência que estuda a vida em diferentes escalas. Os seres vivos apresentam organização celular, metabolismo, crescimento, reprodução, resposta a estímulos, hereditariedade, capacidade de adaptação e evolução. O estudo pode partir das moléculas e células, passar por tecidos, órgãos e sistemas, e chegar a populações, comunidades, ecossistemas e biosfera. No ENEM, a introdução aparece como base para interpretar problemas de saúde, impactos ambientais, biotecnologia, relações ecológicas e funcionamento do corpo humano.',
      },
      bioquimica: {
        titulo: 'Bioquímica',
        texto:
          'Bioquímica estuda as substâncias que compõem os seres vivos e participam dos processos vitais. A água atua como solvente, participa de reações químicas e ajuda na regulação térmica. Sais minerais compõem estruturas e regulam funções, como cálcio nos ossos e ferro na hemoglobina. Carboidratos fornecem energia; lipídios armazenam energia e formam membranas; proteínas atuam como enzimas, transportadores, defesa e sustentação; vitaminas regulam reações; DNA e RNA armazenam e expressam informações genéticas.',
      },
    },
    quiz: [
      {
        pergunta: 'Uma característica comum aos seres vivos é:',
        opcoes: ['Metabolismo', 'Ausência de células', 'Incapacidade de reprodução', 'Não responder a estímulos'],
        resposta: 'Metabolismo',
      },
      {
        pergunta: 'A água é importante nos seres vivos porque:',
        opcoes: ['Atua como solvente e ajuda na regulação térmica', 'Substitui todas as proteínas', 'Não participa de reações', 'Forma apenas o DNA'],
        resposta: 'Atua como solvente e ajuda na regulação térmica',
      },
      {
        pergunta: 'Carboidratos são frequentemente associados a:',
        opcoes: ['Fonte de energia', 'Código genético principal', 'Defesa por anticorpos apenas', 'Impermeabilização total da célula'],
        resposta: 'Fonte de energia',
      },
      {
        pergunta: 'Proteínas podem atuar como:',
        opcoes: ['Enzimas e estruturas celulares', 'Somente reserva de gordura', 'Apenas material hereditário', 'Substitutas da água'],
        resposta: 'Enzimas e estruturas celulares',
      },
      {
        pergunta: 'DNA e RNA estão ligados principalmente a:',
        opcoes: ['Informação genética', 'Digestão mecânica', 'Movimento dos ossos', 'Controle do clima'],
        resposta: 'Informação genética',
      },
    ],
  },
  {
    slug: 'citologia-estudo-da-celula',
    introducao:
      'Citologia estuda as células, unidades básicas da vida. O conteúdo envolve membrana plasmática, citoplasma, organelas, núcleo, divisão celular e relação entre estrutura e função.',
    conceitos: ['membrana plasmática', 'organela', 'núcleo', 'mitose', 'meiose', 'gametogênese'],
    dicaEnem:
      'Compare células procariontes e eucariontes, e sempre relacione cada organela à sua função no metabolismo celular.',
    resumos: {
      'introducao-ao-estudo-da-celula': {
        titulo: 'Introdução ao Estudo da Célula',
        texto:
          'A célula é a unidade estrutural e funcional dos seres vivos. Células procariontes não possuem núcleo delimitado por membrana e são típicas de bactérias e arqueas. Células eucariontes possuem núcleo organizado e organelas membranosas, ocorrendo em animais, plantas, fungos e protozoários. A teoria celular afirma que todos os seres vivos são formados por células, que a célula é a unidade básica da vida e que novas células surgem de células preexistentes.',
      },
      'envoltorios-celulares': {
        titulo: 'Envoltórios Celulares',
        texto:
          'A membrana plasmática delimita a célula e controla a entrada e saída de substâncias por permeabilidade seletiva. Ela é formada principalmente por fosfolipídios e proteínas, no modelo do mosaico fluido. Em células vegetais, fungos e bactérias, também pode haver parede celular, que oferece proteção e sustentação. Transporte passivo não gasta energia e ocorre a favor do gradiente; transporte ativo gasta ATP para mover substâncias contra o gradiente.',
      },
      citoplasma: {
        titulo: 'Citoplasma',
        texto:
          'O citoplasma contém o citosol, organelas e estruturas celulares. Ribossomos produzem proteínas; mitocôndrias realizam respiração celular; retículo endoplasmático participa da síntese e transporte de substâncias; complexo golgiense modifica, empacota e secreta moléculas; lisossomos fazem digestão intracelular; peroxissomos degradam substâncias tóxicas; cloroplastos realizam fotossíntese em células vegetais e algas.',
      },
      'estudo-do-nucleo': {
        titulo: 'Estudo do Núcleo',
        texto:
          'O núcleo abriga o DNA nas células eucariontes e controla atividades celulares por meio da expressão genética. A cromatina corresponde ao material genético associado a proteínas; durante a divisão celular, ela se condensa em cromossomos. O nucléolo participa da formação de ribossomos. Alterações no material genético podem afetar proteínas, características do organismo e até provocar doenças.',
      },
      'ciclo-celular-divisao-celular-e-gametogenese': {
        titulo: 'Ciclo Celular, Divisão Celular e Gametogênese',
        texto:
          'O ciclo celular envolve intérfase e divisão. Na intérfase, a célula cresce, realiza suas funções e duplica o DNA. Na mitose, uma célula origina duas células geneticamente iguais, importantes para crescimento, renovação e reparo. Na meiose, ocorre redução do número de cromossomos e formação de gametas, aumentando a variabilidade genética por crossing-over e segregação independente. Gametogênese é o processo de formação dos gametas masculinos e femininos.',
      },
    },
    quiz: [
      {
        pergunta: 'A membrana plasmática tem como função principal:',
        opcoes: ['Controlar entrada e saída de substâncias', 'Produzir todo o DNA', 'Armazenar bile', 'Realizar fotossíntese em animais'],
        resposta: 'Controlar entrada e saída de substâncias',
      },
      {
        pergunta: 'Mitocôndrias estão relacionadas principalmente a:',
        opcoes: ['Respiração celular', 'Digestão extracelular', 'Produção de parede bacteriana', 'Formação de ossos'],
        resposta: 'Respiração celular',
      },
      {
        pergunta: 'Cloroplastos realizam:',
        opcoes: ['Fotossíntese', 'Mitose animal', 'Transporte ativo de sódio apenas', 'Coagulação sanguínea'],
        resposta: 'Fotossíntese',
      },
      {
        pergunta: 'Na mitose, uma célula origina:',
        opcoes: ['Duas células geneticamente iguais', 'Quatro gametas haploides', 'Uma célula sem DNA', 'Apenas bactérias'],
        resposta: 'Duas células geneticamente iguais',
      },
      {
        pergunta: 'A meiose é importante porque:',
        opcoes: ['Forma gametas e aumenta variabilidade genética', 'Duplica órgãos inteiros', 'Impede reprodução sexuada', 'Elimina cromossomos de todas as células'],
        resposta: 'Forma gametas e aumenta variabilidade genética',
      },
    ],
  },
  {
    slug: 'bioenergetica',
    introducao:
      'Bioenergética estuda como os seres vivos obtêm, transformam e utilizam energia. Os principais processos são respiração celular, fermentação, fotossíntese e quimiossíntese.',
    conceitos: ['ATP', 'respiração celular', 'fermentação', 'fotossíntese', 'clorofila', 'cadeia alimentar'],
    dicaEnem:
      'Compare entradas e saídas dos processos: quem consome glicose, quem libera oxigênio, quem produz ATP e em quais condições cada processo ocorre.',
    resumos: {
      'fermentacao-e-respiracao-celular': {
        titulo: 'Fermentação e Respiração Celular',
        texto:
          'Respiração celular é o processo em que a glicose é degradada para produção de ATP, geralmente usando oxigênio como aceptor final de elétrons. Ocorre em etapas como glicólise, ciclo de Krebs e cadeia respiratória. Fermentação também começa pela glicólise, mas ocorre sem oxigênio e produz menos ATP. Fermentação alcoólica gera etanol e gás carbônico; fermentação lática produz ácido lático e ocorre, por exemplo, em músculos sob esforço intenso e em bactérias usadas na produção de iogurte.',
      },
      'fotossintese-e-quimiossintese': {
        titulo: 'Fotossíntese e Quimiossíntese',
        texto:
          'Fotossíntese converte energia luminosa em energia química, produzindo matéria orgânica a partir de água e gás carbônico, com liberação de oxigênio. Ocorre em cloroplastos de plantas, algas e alguns microrganismos. Quimiossíntese também produz matéria orgânica, mas usa energia liberada por reações químicas inorgânicas, comum em algumas bactérias. Esses processos sustentam cadeias alimentares e ciclos biogeoquímicos.',
      },
    },
    quiz: [
      {
        pergunta: 'A principal moeda energética da célula é:',
        opcoes: ['ATP', 'DNA', 'Celulose', 'Clorofila'],
        resposta: 'ATP',
      },
      {
        pergunta: 'A respiração celular aeróbica utiliza geralmente:',
        opcoes: ['Oxigênio', 'Gás nitrogênio como alimento', 'Luz como produto final', 'Etanol como único reagente'],
        resposta: 'Oxigênio',
      },
      {
        pergunta: 'A fermentação produz menos ATP porque:',
        opcoes: ['Não utiliza cadeia respiratória completa com oxigênio', 'Não envolve glicose', 'Só ocorre em plantas', 'Destrói todo o DNA'],
        resposta: 'Não utiliza cadeia respiratória completa com oxigênio',
      },
      {
        pergunta: 'Na fotossíntese, ocorre:',
        opcoes: ['Produção de matéria orgânica com energia luminosa', 'Consumo de oxigênio como único produto', 'Formação direta de gametas', 'Quebra de proteínas no lisossomo'],
        resposta: 'Produção de matéria orgânica com energia luminosa',
      },
      {
        pergunta: 'A quimiossíntese difere da fotossíntese porque:',
        opcoes: ['Usa energia de reações químicas inorgânicas', 'Depende sempre de luz solar', 'Não produz matéria orgânica', 'Ocorre apenas em mamíferos'],
        resposta: 'Usa energia de reações químicas inorgânicas',
      },
    ],
  },
  {
    slug: 'controle-celular',
    introducao:
      'Controle celular envolve o funcionamento do código genético, a síntese de proteínas, as mutações e suas consequências. É um tema que conecta citologia, genética, evolução, biotecnologia e saúde.',
    conceitos: ['DNA', 'RNA', 'código genético', 'síntese proteica', 'mutação gênica'],
    dicaEnem:
      'Quando a questão falar em mutação, observe se ela altera a proteína, se é herdável, se ocorre em célula somática ou germinativa e qual consequência biológica pode gerar.',
    resumos: {
      'visao-geral-do-codigo-genetico': {
        titulo: 'Visão Geral do Código Genético',
        texto:
          'O código genético é o conjunto de correspondências entre códons do RNA mensageiro e aminoácidos das proteínas. A informação sai do DNA por transcrição, formando RNA, e depois é traduzida nos ribossomos para formar proteínas. Esse processo é essencial porque muitas características do organismo dependem da produção de proteínas específicas. O código genético é praticamente universal, o que ajuda a explicar semelhanças entre os seres vivos e possibilita técnicas de biotecnologia.',
      },
      'mutacoes-genicas-e-suas-consequencias': {
        titulo: 'Mutações Gênicas e suas Consequências',
        texto:
          'Mutações são alterações no material genético. Podem ocorrer por erros de replicação ou pela ação de agentes mutagênicos, como radiações e certas substâncias químicas. Algumas mutações são neutras, outras prejudiciais e algumas podem gerar vantagens em determinado ambiente. Se ocorrerem em células germinativas, podem ser herdadas; se ocorrerem em células somáticas, afetam apenas o indivíduo. No ENEM, mutações aparecem ligadas a câncer, variabilidade genética, resistência bacteriana e evolução.',
      },
    },
    quiz: [
      {
        pergunta: 'O código genético relaciona:',
        opcoes: ['Códons e aminoácidos', 'Rios e bacias hidrográficas', 'Ossos e músculos apenas', 'Clima e vegetação'],
        resposta: 'Códons e aminoácidos',
      },
      {
        pergunta: 'A transcrição é o processo em que:',
        opcoes: ['Uma molécula de RNA é produzida a partir do DNA', 'A glicose vira ATP', 'O sangue coagula', 'A água evapora'],
        resposta: 'Uma molécula de RNA é produzida a partir do DNA',
      },
      {
        pergunta: 'A tradução ocorre principalmente:',
        opcoes: ['Nos ribossomos', 'No estômago', 'Nos ossos', 'No plasma sanguíneo'],
        resposta: 'Nos ribossomos',
      },
      {
        pergunta: 'Mutações em células germinativas podem:',
        opcoes: ['Ser transmitidas aos descendentes', 'Nunca afetar herança', 'Eliminar toda variabilidade', 'Transformar DNA em lipídio'],
        resposta: 'Ser transmitidas aos descendentes',
      },
      {
        pergunta: 'Um exemplo de consequência evolutiva de mutações é:',
        opcoes: ['Resistência de bactérias a antibióticos', 'Formação de nuvens', 'Erosão do relevo', 'Mudança de fuso horário'],
        resposta: 'Resistência de bactérias a antibióticos',
      },
    ],
  },
  {
    slug: 'histologia-animal-e-humana',
    introducao:
      'Histologia estuda os tecidos que formam o corpo dos animais. A compreensão dos tecidos ajuda a entender órgãos, sistemas, cicatrização, defesa, movimento e transmissão de impulsos nervosos.',
    conceitos: ['tecido epitelial', 'tecido conjuntivo', 'tecido muscular', 'tecido nervoso', 'matriz extracelular'],
    dicaEnem:
      'Relacione sempre o tipo de tecido à função: revestimento, sustentação, contração, transporte, defesa ou comunicação.',
    resumos: {
      'visao-geral-e-tecido-epitelial': {
        titulo: 'Visão Geral e Tecido Epitelial',
        texto:
          'Os tecidos animais são grupos de células especializadas que realizam funções específicas. O tecido epitelial reveste superfícies externas e internas, forma glândulas e atua em proteção, absorção, secreção e percepção sensorial. Possui células muito próximas e pouca matriz extracelular. Pode ser simples ou estratificado, pavimentoso, cúbico ou prismático. No ENEM, aparece em temas como pele, mucosas, glândulas, câncer e barreiras de proteção.',
      },
      'tecido-conjuntivo': {
        titulo: 'Tecido Conjuntivo',
        texto:
          'O tecido conjuntivo apresenta grande quantidade de matriz extracelular e funções variadas, como preenchimento, sustentação, nutrição, defesa e armazenamento. Inclui tecidos como conjuntivo propriamente dito, adiposo, cartilaginoso, ósseo e sanguíneo. O tecido adiposo armazena energia e ajuda no isolamento térmico; o ósseo sustenta e protege; o sangue transporta gases, nutrientes, hormônios e células de defesa.',
      },
      'tecido-muscular': {
        titulo: 'Tecido Muscular',
        texto:
          'O tecido muscular é especializado em contração. O músculo estriado esquelético é voluntário e ligado aos ossos; o músculo estriado cardíaco é involuntário e forma o coração; o músculo liso é involuntário e ocorre em órgãos internos, como intestino e vasos sanguíneos. A contração depende de proteínas como actina e miosina e está ligada ao consumo de ATP.',
      },
      'tecido-nervoso': {
        titulo: 'Tecido Nervoso',
        texto:
          'O tecido nervoso é responsável pela recepção, processamento e transmissão de informações. Neurônios conduzem impulsos nervosos e células da glia dão suporte, proteção e nutrição. A comunicação entre neurônios ocorre nas sinapses, geralmente com neurotransmissores. Esse tema se conecta a sentidos, movimento, memória, reflexos, sistema nervoso e efeitos de substâncias no organismo.',
      },
    },
    quiz: [
      {
        pergunta: 'O tecido epitelial tem como uma função comum:',
        opcoes: ['Revestimento e proteção', 'Produção de gametas apenas', 'Contração do coração somente', 'Condução de seiva'],
        resposta: 'Revestimento e proteção',
      },
      {
        pergunta: 'O tecido conjuntivo se caracteriza por:',
        opcoes: ['Grande quantidade de matriz extracelular', 'Ausência total de células', 'Ser sempre voluntário', 'Realizar fotossíntese'],
        resposta: 'Grande quantidade de matriz extracelular',
      },
      {
        pergunta: 'O tecido muscular depende diretamente de:',
        opcoes: ['Contração e uso de energia', 'Produção de clorofila', 'Formação de parede celular', 'Digestão de celulose em plantas'],
        resposta: 'Contração e uso de energia',
      },
      {
        pergunta: 'Neurônios são células relacionadas a:',
        opcoes: ['Condução de impulsos nervosos', 'Armazenamento de gordura apenas', 'Produção de xilema', 'Formação de sementes'],
        resposta: 'Condução de impulsos nervosos',
      },
      {
        pergunta: 'O sangue é considerado um tipo de:',
        opcoes: ['Tecido conjuntivo', 'Tecido epitelial estratificado', 'Tecido vegetal', 'Tecido meristemático'],
        resposta: 'Tecido conjuntivo',
      },
    ],
  },
  {
    slug: 'fisiologia-animal-e-humana',
    introducao:
      'Fisiologia animal e humana estuda o funcionamento dos sistemas do corpo. O foco é entender como digestão, respiração, circulação, excreção, coordenação nervosa, sentidos, hormônios e reprodução mantêm a homeostase.',
    conceitos: ['homeostase', 'digestão', 'respiração', 'circulação', 'excreção', 'sistema nervoso', 'sistema endócrino'],
    dicaEnem:
      'Em fisiologia, pense em integração. Um sistema raramente atua sozinho: respiração, circulação e metabolismo, por exemplo, funcionam de forma conectada.',
    resumos: {
      'sistema-digestorio': {
        titulo: 'Sistema Digestório',
        texto:
          'O sistema digestório transforma alimentos em moléculas menores que podem ser absorvidas e usadas pelo organismo. A digestão começa na boca com mastigação e ação da saliva, continua no estômago com suco gástrico e segue no intestino delgado, onde ocorre grande parte da digestão química e absorção. Fígado e pâncreas produzem secreções importantes, como bile e enzimas pancreáticas. O intestino grosso absorve água e participa da formação das fezes.',
      },
      'sistema-respiratorio': {
        titulo: 'Sistema Respiratório',
        texto:
          'O sistema respiratório realiza trocas gasosas entre o organismo e o ambiente. O ar passa por vias respiratórias até chegar aos alvéolos pulmonares, onde oxigênio entra no sangue e gás carbônico é eliminado. A ventilação depende da ação do diafragma e músculos intercostais. No ENEM, o tema costuma aparecer ligado a poluição do ar, tabagismo, doenças respiratórias, altitude, transporte de gases e relação com a respiração celular.',
      },
      'sistema-cardiovascular-ou-circulatorio': {
        titulo: 'Sistema Cardiovascular ou Circulatório',
        texto:
          'O sistema cardiovascular transporta sangue, gases, nutrientes, hormônios, resíduos metabólicos e células de defesa. O coração bombeia sangue por artérias, veias e capilares. A circulação pulmonar leva sangue aos pulmões para trocas gasosas; a circulação sistêmica distribui sangue ao corpo. Pressão arterial, aterosclerose, infarto e hábitos de vida são temas frequentes em questões de saúde pública.',
      },
      'sistema-excretor': {
        titulo: 'Sistema Excretor',
        texto:
          'O sistema excretor remove resíduos nitrogenados e ajuda a controlar água, sais minerais e pH do organismo. Nos seres humanos, os rins filtram o sangue e formam a urina nos néfrons. A filtração, reabsorção e secreção tubular permitem eliminar substâncias tóxicas e conservar moléculas úteis. O tema se relaciona a desidratação, hipertensão, insuficiência renal e equilíbrio interno.',
      },
      'sistema-nervoso': {
        titulo: 'Sistema Nervoso',
        texto:
          'O sistema nervoso coordena respostas rápidas do organismo por meio de impulsos nervosos. O sistema nervoso central inclui encéfalo e medula espinal; o periférico inclui nervos e gânglios. Neurônios transmitem impulsos e se comunicam por sinapses. Reflexos, percepção sensorial, movimento, memória e efeitos de drogas no sistema nervoso são abordagens comuns no ENEM.',
      },
      'sistema-tegumentar-e-mente': {
        titulo: 'Sistema Tegumentar e Mente',
        texto:
          'O sistema tegumentar, formado principalmente pela pele, atua como barreira de proteção, regula a temperatura, evita perda excessiva de água e participa da percepção sensorial. A pele também se relaciona à produção de vitamina D e à defesa contra microrganismos. Quando associado ao tema mente, o ENEM pode abordar percepção, saúde, hábitos, envelhecimento, exposição solar e prevenção.',
      },
      'sistema-sensorial': {
        titulo: 'Sistema Sensorial',
        texto:
          'O sistema sensorial permite perceber estímulos do ambiente e do próprio corpo. Visão, audição, olfato, paladar e tato dependem de receptores específicos que transformam estímulos em impulsos nervosos. A interpretação ocorre no sistema nervoso central. Questões podem envolver deficiência sensorial, tecnologia assistiva, luz, som, equilíbrio e proteção dos órgãos dos sentidos.',
      },
      'sistema-endocrino-e-reprodutor': {
        titulo: 'Sistema Endócrino e Sistema Reprodutor',
        texto:
          'O sistema endócrino regula funções por meio de hormônios produzidos por glândulas como hipófise, tireoide, pâncreas, suprarrenais e gônadas. Hormônios atuam no crescimento, metabolismo, glicemia, resposta ao estresse e reprodução. O sistema reprodutor produz gametas e hormônios sexuais, permitindo reprodução sexuada. Ciclo menstrual, fecundação, gestação, contracepção e ISTs são temas importantes.',
      },
    },
    quiz: [
      {
        pergunta: 'A maior parte da absorção de nutrientes ocorre no:',
        opcoes: ['Intestino delgado', 'Esôfago', 'Pulmão', 'Rim'],
        resposta: 'Intestino delgado',
      },
      {
        pergunta: 'As trocas gasosas nos pulmões ocorrem principalmente nos:',
        opcoes: ['Alvéolos', 'Ossos', 'Rins', 'Músculos'],
        resposta: 'Alvéolos',
      },
      {
        pergunta: 'O coração tem como função principal:',
        opcoes: ['Bombear sangue', 'Filtrar urina', 'Produzir bile', 'Digerir proteínas'],
        resposta: 'Bombear sangue',
      },
      {
        pergunta: 'Os néfrons estão relacionados a:',
        opcoes: ['Formação da urina', 'Visão', 'Produção de saliva', 'Contração do estômago'],
        resposta: 'Formação da urina',
      },
      {
        pergunta: 'Hormônios são mensageiros químicos produzidos pelo sistema:',
        opcoes: ['Endócrino', 'Digestório apenas', 'Ósseo', 'Tegumentar apenas'],
        resposta: 'Endócrino',
      },
    ],
  },
  {
    slug: 'sexualidade-e-desenvolvimento-embrionario',
    introducao:
      'Sexualidade e desenvolvimento embrionário envolvem reprodução, contracepção, ISTs, fecundação e formação inicial do organismo. O conteúdo deve ser estudado com foco científico, saúde, prevenção e responsabilidade.',
    conceitos: ['fecundação', 'embriologia', 'contracepção', 'ISTs', 'desenvolvimento embrionário'],
    dicaEnem:
      'O ENEM costuma cobrar prevenção, acesso à informação, métodos contraceptivos e etapas gerais do desenvolvimento, evitando respostas baseadas apenas em senso comum.',
    resumos: {
      'sexualidade-dsts-e-contraceptivos': {
        titulo: 'Sexualidade, ISTs e Contraceptivos',
        texto:
          'Sexualidade envolve aspectos biológicos, sociais, afetivos e de saúde. Infecções sexualmente transmissíveis, como HIV, sífilis, HPV, gonorreia e clamídia, podem ser prevenidas com informação, preservativos, vacinação quando disponível e acompanhamento de saúde. Métodos contraceptivos podem ser de barreira, hormonais, intrauterinos, comportamentais ou definitivos, com diferentes eficácias. O ENEM costuma abordar prevenção, políticas públicas, autonomia, responsabilidade e redução de riscos.',
      },
      embriologia: {
        titulo: 'Embriologia',
        texto:
          'Embriologia estuda o desenvolvimento do organismo a partir da fecundação. Após a união dos gametas, forma-se o zigoto, que passa por divisões celulares chamadas clivagens, formando mórula e blástula. Depois ocorre gastrulação, etapa importante para formação dos folhetos embrionários, que originam tecidos e órgãos. Anexos embrionários, como placenta, âmnio e cordão umbilical, têm funções de proteção, nutrição, trocas e desenvolvimento.',
      },
    },
    quiz: [
      {
        pergunta: 'Preservativos são importantes porque:',
        opcoes: ['Ajudam a prevenir ISTs e gravidez', 'Eliminam todos os riscos sem exceção', 'Substituem vacinação', 'Impedem qualquer doença respiratória'],
        resposta: 'Ajudam a prevenir ISTs e gravidez',
      },
      {
        pergunta: 'A fecundação forma inicialmente o:',
        opcoes: ['Zigoto', 'Alvéolo', 'Néfron', 'Cloroplasto'],
        resposta: 'Zigoto',
      },
      {
        pergunta: 'A gastrulação está relacionada à formação:',
        opcoes: ['Dos folhetos embrionários', 'Da urina', 'Da bile', 'Do oxigênio atmosférico'],
        resposta: 'Dos folhetos embrionários',
      },
      {
        pergunta: 'O HPV pode ser prevenido também por:',
        opcoes: ['Vacinação e uso de preservativo', 'Apenas beber água', 'Evitar mapas', 'Dormir menos'],
        resposta: 'Vacinação e uso de preservativo',
      },
      {
        pergunta: 'A placenta participa principalmente de:',
        opcoes: ['Trocas entre mãe e embrião/feto', 'Produção de clorofila', 'Digestão no estômago', 'Contração muscular voluntária'],
        resposta: 'Trocas entre mãe e embrião/feto',
      },
    ],
  },
  {
    slug: 'virus-e-microorganismos',
    introducao:
      'Vírus e microrganismos abrangem formas de vida microscópicas e agentes infecciosos. O estudo envolve classificação, saúde pública, ciclos de doenças, vacinas, antibióticos, decomposição e importância ecológica.',
    conceitos: ['vírus', 'bactérias', 'protozoários', 'fungos', 'vacinas', 'antibióticos'],
    dicaEnem:
      'Diferencie vírus de seres celulares e evite confundir antibióticos com antivirais. O ENEM costuma relacionar microrganismos a saúde, saneamento, vacinas e ambiente.',
    resumos: {
      'classificacao-dos-seres-vivos': {
        titulo: 'Classificação dos Seres Vivos',
        texto:
          'A classificação dos seres vivos organiza a diversidade biológica em grupos com base em semelhanças, parentesco evolutivo e características celulares. Categorias como domínio, reino, filo, classe, ordem, família, gênero e espécie ajudam a nomear e comparar organismos. A nomenclatura científica evita confusões causadas por nomes populares. No ENEM, classificação aparece ligada à evolução, biodiversidade, conservação e doenças.',
      },
      'virus-e-prions': {
        titulo: 'Vírus e Príons',
        texto:
          'Vírus são acelulares, formados por material genético envolvido por cápsula proteica e, em alguns casos, envelope lipídico. Eles dependem de células hospedeiras para se multiplicar. Podem causar doenças como gripe, dengue, Covid-19, HPV e HIV. Príons são proteínas alteradas capazes de induzir mudanças em outras proteínas, associadas a doenças neurodegenerativas raras. Vacinas, higiene, controle de vetores e políticas públicas são estratégias de prevenção.',
      },
      'reino-monera-as-bacterias': {
        titulo: 'Reino Monera: As Bactérias',
        texto:
          'Bactérias são organismos procariontes, unicelulares e muito diversos. Podem viver no solo, água, corpo humano e ambientes extremos. Algumas causam doenças, mas muitas são essenciais para decomposição, ciclos do nitrogênio, produção de alimentos, biotecnologia e microbiota. Antibióticos atuam contra bactérias, mas o uso inadequado favorece seleção de bactérias resistentes, tema muito cobrado no ENEM.',
      },
      'reino-protista-algas-e-protozoarios': {
        titulo: 'Reino Protista: Algas e Protozoários',
        texto:
          'Protistas incluem algas e protozoários. Algas podem realizar fotossíntese e são importantes produtoras nos ambientes aquáticos, além de participarem da produção de oxigênio. Protozoários são heterotróficos e alguns causam doenças, como malária, doença de Chagas, leishmaniose e amebíase. Questões do ENEM costumam relacionar protozooses a saneamento, vetores, condições sociais e prevenção.',
      },
      'reino-fungi': {
        titulo: 'Reino Fungi',
        texto:
          'Fungos são eucariontes, heterotróficos por absorção e podem ser unicelulares, como leveduras, ou pluricelulares, como bolores e cogumelos. Atuam como decompositores, fazem associações ecológicas, produzem alimentos, bebidas, antibióticos e também podem causar micoses. Sua importância ecológica está na reciclagem da matéria orgânica e na manutenção de ciclos naturais.',
      },
    },
    quiz: [
      {
        pergunta: 'Vírus são considerados acelulares porque:',
        opcoes: ['Não possuem organização celular própria', 'São formados por tecidos', 'Têm núcleo completo', 'Realizam fotossíntese'],
        resposta: 'Não possuem organização celular própria',
      },
      {
        pergunta: 'Antibióticos atuam principalmente contra:',
        opcoes: ['Bactérias', 'Vírus sempre', 'Príons sempre', 'Todas as doenças'],
        resposta: 'Bactérias',
      },
      {
        pergunta: 'O uso inadequado de antibióticos pode favorecer:',
        opcoes: ['Resistência bacteriana', 'Formação de cloroplastos', 'Aumento de rios', 'Fim da seleção natural'],
        resposta: 'Resistência bacteriana',
      },
      {
        pergunta: 'Algas são importantes porque:',
        opcoes: ['Atuam como produtoras em ambientes aquáticos', 'São todos parasitas humanos', 'Não fazem fotossíntese', 'Não possuem relação com cadeias alimentares'],
        resposta: 'Atuam como produtoras em ambientes aquáticos',
      },
      {
        pergunta: 'Fungos têm papel ecológico importante como:',
        opcoes: ['Decompositores', 'Produtores de sementes', 'Animais vertebrados', 'Órgãos do sistema nervoso'],
        resposta: 'Decompositores',
      },
    ],
  },
  {
    slug: 'reino-animal',
    introducao:
      'Reino Animal reúne organismos eucariontes, pluricelulares e heterotróficos. O estudo compara poríferos, cnidários, platelmintos, nematelmintos, moluscos, anelídeos, artrópodes, equinodermos e cordados.',
    conceitos: ['invertebrados', 'vertebrados', 'simetria', 'folhetos embrionários', 'celoma', 'cordados'],
    dicaEnem:
      'Em zoologia, compare grupos por características evolutivas, modo de vida, importância ecológica e relação com saúde humana.',
    resumos: {
      'visao-geral-e-estudo-comparativo': {
        titulo: 'Visão Geral e Estudo Comparativo',
        texto:
          'O estudo comparativo dos animais observa características como presença de tecidos, simetria corporal, cavidade corporal, segmentação, sistema digestório, circulação, respiração, excreção e reprodução. A comparação ajuda a perceber tendências evolutivas, como aumento da complexidade corporal e especialização de sistemas. No ENEM, zoologia aparece em biodiversidade, parasitoses, ecologia, evolução e impactos humanos.',
      },
      poriferos: {
        titulo: 'Poríferos',
        texto:
          'Poríferos, como as esponjas, são animais aquáticos simples, sem tecidos verdadeiros e com corpo cheio de poros. Alimentam-se por filtração, fazendo a água circular pelo corpo. Apesar da simplicidade, têm importância ecológica nos ambientes aquáticos e ajudam a entender etapas iniciais da evolução animal.',
      },
      cnidarios: {
        titulo: 'Cnidários',
        texto:
          'Cnidários incluem águas-vivas, corais, anêmonas e hidras. Possuem tecidos verdadeiros, simetria radial e células urticantes chamadas cnidócitos, usadas na defesa e captura de alimento. Corais formam recifes importantes para a biodiversidade marinha, mas são sensíveis ao aquecimento, poluição e acidificação dos oceanos.',
      },
      platelmintos: {
        titulo: 'Platelmintos',
        texto:
          'Platelmintos são vermes de corpo achatado. Alguns são de vida livre, como planárias, e outros são parasitas, como tênias e esquistossomos. Doenças causadas por platelmintos estão ligadas a saneamento, higiene, consumo de água e alimentos contaminados e contato com ambientes contaminados.',
      },
      nematelmintos: {
        titulo: 'Nematelmintos',
        texto:
          'Nematelmintos são vermes cilíndricos, com tubo digestório completo. Podem ser de vida livre ou parasitas. Exemplos de doenças relacionadas são ascaridíase, ancilostomose e filariose. O ENEM costuma associar essas doenças a saneamento básico, solo contaminado, água, higiene e desigualdade social.',
      },
      moluscos: {
        titulo: 'Moluscos',
        texto:
          'Moluscos incluem caracóis, lesmas, ostras, mexilhões, polvos e lulas. Possuem corpo mole, geralmente com manto e, em muitos casos, concha. Alguns são importantes na alimentação, outros participam de cadeias ecológicas e alguns podem atuar como hospedeiros intermediários de parasitas.',
      },
      anelideos: {
        titulo: 'Anelídeos',
        texto:
          'Anelídeos são vermes segmentados, como minhocas, sanguessugas e poliquetas. Minhocas têm papel importante na aeração e fertilidade do solo. A segmentação corporal representa avanço evolutivo por permitir maior especialização das partes do corpo.',
      },
      artropodes: {
        titulo: 'Artrópodes',
        texto:
          'Artrópodes formam o grupo animal mais diverso, incluindo insetos, aracnídeos, crustáceos e miriápodes. Possuem exoesqueleto de quitina, corpo segmentado e apêndices articulados. Têm enorme importância ecológica, agrícola, econômica e médica, pois incluem polinizadores, pragas, vetores de doenças e organismos de cadeias alimentares.',
      },
      equinodermos: {
        titulo: 'Equinodermos',
        texto:
          'Equinodermos são animais marinhos, como estrelas-do-mar, ouriços e pepinos-do-mar. Possuem sistema ambulacrário, endoesqueleto calcário e, em adultos, simetria radial. Têm importância ecológica nos ambientes marinhos e ajudam a entender relações evolutivas com os cordados.',
      },
      cordados: {
        titulo: 'Cordados',
        texto:
          'Cordados possuem, em alguma fase da vida, notocorda, tubo nervoso dorsal, fendas faringianas e cauda pós-anal. Incluem vertebrados como peixes, anfíbios, répteis, aves e mamíferos. O estudo compara adaptações à água e ao ambiente terrestre, reprodução, respiração, circulação e regulação de temperatura.',
      },
    },
    quiz: [
      {
        pergunta: 'Poríferos se alimentam principalmente por:',
        opcoes: ['Filtração', 'Fotossíntese', 'Mastigação com dentes', 'Produção de sementes'],
        resposta: 'Filtração',
      },
      {
        pergunta: 'Cnidários possuem células chamadas:',
        opcoes: ['Cnidócitos', 'Neurônios motores apenas', 'Hemácias', 'Estômatos'],
        resposta: 'Cnidócitos',
      },
      {
        pergunta: 'Artrópodes apresentam:',
        opcoes: ['Exoesqueleto e apêndices articulados', 'Corpo sem segmentação sempre', 'Ausência de quitina', 'Notocorda em adultos sempre'],
        resposta: 'Exoesqueleto e apêndices articulados',
      },
      {
        pergunta: 'Minhocas são importantes porque:',
        opcoes: ['Ajudam na aeração e fertilidade do solo', 'Produzem clorofila', 'Causam sempre malária', 'Não participam do ambiente'],
        resposta: 'Ajudam na aeração e fertilidade do solo',
      },
      {
        pergunta: 'Uma característica dos cordados é:',
        opcoes: ['Presença de notocorda em alguma fase', 'Ausência total de sistema nervoso', 'Corpo sempre sem órgãos', 'Parede celular de celulose'],
        resposta: 'Presença de notocorda em alguma fase',
      },
    ],
  },
  {
    slug: 'reino-vegetal',
    introducao:
      'Reino Vegetal reúne organismos eucariontes, pluricelulares e fotossintetizantes. O estudo compara briófitas, pteridófitas, gimnospermas e angiospermas, destacando adaptações ao ambiente terrestre.',
    conceitos: ['fotossíntese', 'vasos condutores', 'semente', 'flor', 'fruto', 'alternância de gerações'],
    dicaEnem:
      'Compare os grupos vegetais por presença de vasos condutores, sementes, flores e frutos. Esses critérios ajudam a resolver muitas questões.',
    resumos: {
      'visao-geral-briofitas-e-pteridofitas': {
        titulo: 'Visão Geral, Briófitas e Pteridófitas',
        texto:
          'As plantas conquistaram o ambiente terrestre com adaptações como cutícula, embrião protegido, vasos condutores, sementes, flores e frutos. Briófitas, como musgos, não possuem vasos condutores verdadeiros e dependem da água para reprodução. Pteridófitas, como samambaias, possuem vasos condutores, mas não produzem sementes. Nos dois grupos, a água ainda é importante para o deslocamento dos gametas masculinos.',
      },
      'gimnospermas-e-angiospermas': {
        titulo: 'Gimnospermas e Angiospermas',
        texto:
          'Gimnospermas produzem sementes, mas não formam frutos; pinheiros são exemplos comuns. Angiospermas produzem flores e frutos, sendo o grupo vegetal mais diverso. Flores favorecem a polinização e frutos auxiliam a dispersão de sementes. Esses avanços aumentaram o sucesso reprodutivo das plantas em diferentes ambientes. No ENEM, o tema aparece ligado a alimentação, agricultura, biodiversidade e relações ecológicas.',
      },
    },
    quiz: [
      {
        pergunta: 'Briófitas dependem de água para reprodução porque:',
        opcoes: ['Seus gametas masculinos precisam se deslocar até o feminino', 'Produzem frutos secos', 'São todas marinhas', 'Não possuem células'],
        resposta: 'Seus gametas masculinos precisam se deslocar até o feminino',
      },
      {
        pergunta: 'Pteridófitas diferem das briófitas por possuírem:',
        opcoes: ['Vasos condutores', 'Flores e frutos', 'Sementes protegidas por fruto', 'Ausência de clorofila'],
        resposta: 'Vasos condutores',
      },
      {
        pergunta: 'Gimnospermas produzem:',
        opcoes: ['Sementes sem frutos', 'Frutos carnosos sempre', 'Flores completas sempre', 'Apenas esporos sem semente'],
        resposta: 'Sementes sem frutos',
      },
      {
        pergunta: 'Angiospermas se destacam por apresentar:',
        opcoes: ['Flores e frutos', 'Ausência de vasos', 'Somente reprodução aquática', 'Corpo sem tecidos'],
        resposta: 'Flores e frutos',
      },
      {
        pergunta: 'Frutos ajudam principalmente na:',
        opcoes: ['Dispersão de sementes', 'Respiração pulmonar', 'Formação de ossos', 'Produção de urina'],
        resposta: 'Dispersão de sementes',
      },
    ],
  },
  {
    slug: 'morfologia-vegetal',
    introducao:
      'Morfologia vegetal estuda os órgãos das plantas e suas funções. Raiz, caule, folha, flor, fruto e semente devem ser entendidos como estruturas ligadas à sobrevivência e reprodução.',
    conceitos: ['raiz', 'caule', 'folha', 'tecidos vegetais', 'transporte vegetal', 'hormônios vegetais', 'germinação'],
    dicaEnem:
      'Associe a estrutura vegetal à função: absorção, condução, sustentação, fotossíntese, trocas gasosas, reprodução ou dispersão.',
    resumos: {
      'visao-geral-raiz-caule-e-folha': {
        titulo: 'Visão Geral, Raiz, Caule e Folha',
        texto:
          'A raiz fixa a planta e absorve água e sais minerais. O caule sustenta folhas, flores e frutos, além de conduzir seiva. As folhas realizam fotossíntese, trocas gasosas e transpiração. Modificações desses órgãos permitem adaptações, como raízes tuberosas de reserva, caules subterrâneos e folhas modificadas em espinhos. O ENEM costuma relacionar morfologia vegetal a adaptação, agricultura e ambiente.',
      },
      'tecidos-vegetais': {
        titulo: 'Tecidos Vegetais',
        texto:
          'Tecidos vegetais incluem meristemas, responsáveis pelo crescimento, e tecidos adultos, como revestimento, sustentação, preenchimento e condução. Xilema transporta seiva bruta, formada por água e sais minerais; floema transporta seiva elaborada, rica em açúcares produzidos na fotossíntese. Essa organização permite crescimento, transporte, proteção e adaptação das plantas.',
      },
      'nutricao-vegetal-e-trocas-gasosas': {
        titulo: 'Nutrição Vegetal e Trocas Gasosas',
        texto:
          'A nutrição vegetal envolve absorção de água e sais pelas raízes, transporte pelo xilema, fotossíntese nas folhas e distribuição de açúcares pelo floema. As trocas gasosas ocorrem principalmente pelos estômatos, estruturas que controlam entrada de gás carbônico, saída de oxigênio e perda de água por transpiração. A abertura e fechamento dos estômatos dependem de luz, água e condições ambientais.',
      },
      'transporte-vegetal': {
        titulo: 'Transporte Vegetal',
        texto:
          'O transporte vegetal ocorre principalmente pelo xilema e floema. No xilema, a subida da seiva bruta é explicada por transpiração, coesão e adesão da água. No floema, a seiva elaborada se desloca das regiões produtoras, como folhas, para regiões consumidoras ou de reserva. Esse conteúdo aparece em questões sobre seca, irrigação, produtividade agrícola e adaptação das plantas.',
      },
      'hormonios-vegetais-e-fotoperiodismo': {
        titulo: 'Hormônios Vegetais e Fotoperiodismo',
        texto:
          'Hormônios vegetais regulam crescimento, desenvolvimento e respostas ao ambiente. Auxinas participam do alongamento celular e tropismos; giberelinas estimulam crescimento e germinação; citocininas favorecem divisão celular; etileno atua no amadurecimento de frutos; ácido abscísico relaciona-se ao fechamento estomático e dormência. Fotoperiodismo é a resposta das plantas à duração do dia e da noite, importante para floração.',
      },
      'germinacao-e-movimentos-vegetais': {
        titulo: 'Germinação e Movimentos Vegetais',
        texto:
          'Germinação é o início do desenvolvimento do embrião presente na semente, dependendo de água, oxigênio, temperatura adequada e, em alguns casos, luz. Movimentos vegetais incluem tropismos, orientados por estímulos, como fototropismo e gravitropismo, e nastismos, que não dependem da direção do estímulo. Esses mecanismos aumentam a sobrevivência das plantas em diferentes ambientes.',
      },
    },
    quiz: [
      {
        pergunta: 'A raiz tem como função comum:',
        opcoes: ['Fixação e absorção de água e sais', 'Produção de gametas animais', 'Bombeamento de sangue', 'Formação de neurônios'],
        resposta: 'Fixação e absorção de água e sais',
      },
      {
        pergunta: 'O xilema transporta principalmente:',
        opcoes: ['Seiva bruta', 'Seiva elaborada apenas', 'Hormônios animais', 'Sangue arterial'],
        resposta: 'Seiva bruta',
      },
      {
        pergunta: 'Os estômatos participam de:',
        opcoes: ['Trocas gasosas e transpiração', 'Contração muscular', 'Filtração renal', 'Produção de anticorpos'],
        resposta: 'Trocas gasosas e transpiração',
      },
      {
        pergunta: 'O etileno está relacionado principalmente a:',
        opcoes: ['Amadurecimento de frutos', 'Contração do coração', 'Produção de bile', 'Formação de neurônios'],
        resposta: 'Amadurecimento de frutos',
      },
      {
        pergunta: 'Fototropismo é resposta da planta à:',
        opcoes: ['Luz', 'Pressão arterial', 'Saliva', 'Temperatura corporal humana'],
        resposta: 'Luz',
      },
    ],
  },
  {
    slug: 'genetica',
    introducao:
      'Genética estuda hereditariedade, variação biológica, genes, cromossomos e padrões de transmissão de características. O ENEM costuma relacionar genética a saúde, biotecnologia, grupos sanguíneos e diversidade.',
    conceitos: ['gene', 'alelo', 'genótipo', 'fenótipo', 'Mendel', 'herança ligada ao sexo'],
    dicaEnem:
      'Em problemas de Genética, identifique genótipos, fenótipos, dominância, probabilidades e se a herança envolve autossomos ou cromossomos sexuais.',
    resumos: {
      '1a-lei-de-mendel-e-suas-variacoes': {
        titulo: '1ª Lei de Mendel e suas Variações',
        texto:
          'A 1ª Lei de Mendel, ou lei da segregação dos fatores, afirma que cada característica é determinada por pares de fatores, hoje chamados alelos, que se separam na formação dos gametas. Em dominância completa, um alelo dominante mascara o recessivo. Em dominância incompleta, o heterozigoto apresenta fenótipo intermediário; em codominância, os dois alelos se expressam ao mesmo tempo. Essa lei é base para compreender cruzamentos, heredogramas e probabilidades genéticas.',
      },
      'polialelia-e-grupos-sanguineos': {
        titulo: 'Polialelia e Grupos Sanguíneos',
        texto:
          'Polialelia ocorre quando há mais de dois alelos possíveis para um gene na população. O sistema ABO é exemplo clássico: alelos IA, IB e i determinam tipos sanguíneos A, B, AB e O. IA e IB são codominantes entre si e dominantes sobre i. O fator Rh também é importante em transfusões, gestação e eritroblastose fetal. No ENEM, o tema costuma aparecer em situações familiares e de saúde.',
      },
      'heranca-e-sexo': {
        titulo: 'Herança e Sexo',
        texto:
          'Heranças relacionadas ao sexo envolvem genes localizados nos cromossomos sexuais, principalmente o X. Como homens geralmente possuem apenas um cromossomo X, alelos recessivos ligados ao X podem se manifestar com maior frequência neles. Daltonismo e hemofilia são exemplos comuns em exercícios. O estudo exige observar heredogramas, padrões familiares e diferenças entre herança autossômica e ligada ao sexo.',
      },
      '2a-lei-de-mendel': {
        titulo: '2ª Lei de Mendel',
        texto:
          'A 2ª Lei de Mendel, ou lei da segregação independente, afirma que genes localizados em cromossomos diferentes tendem a se distribuir independentemente na formação dos gametas. Ela explica cruzamentos envolvendo duas ou mais características. Em muitos exercícios, o quadro de Punnett e a multiplicação de probabilidades ajudam a resolver as proporções esperadas.',
      },
      linkage: {
        titulo: 'Linkage',
        texto:
          'Linkage ocorre quando genes estão no mesmo cromossomo e tendem a ser herdados juntos. Quanto mais próximos, menor a chance de separação por crossing-over. Esse tema mostra que a segregação independente não vale para todos os genes. A frequência de recombinação pode ser usada para estimar distância entre genes em mapas cromossômicos.',
      },
      'interacao-genica': {
        titulo: 'Interação Gênica',
        texto:
          'Interação gênica ocorre quando dois ou mais genes influenciam a mesma característica. Um exemplo comum é a epistasia, quando um gene interfere na expressão de outro. Essas interações explicam fenótipos que não seguem proporções mendelianas simples, sendo importantes para entender características complexas, como pigmentação, forma de órgãos e certos padrões hereditários.',
      },
      citogenetica: {
        titulo: 'Citogenética',
        texto:
          'Citogenética estuda cromossomos, cariótipos e alterações cromossômicas. Alterações numéricas, como trissomias, podem causar síndromes, como a síndrome de Down. Alterações estruturais incluem deleções, duplicações, inversões e translocações. O ENEM pode cobrar cariótipos, meiose, não disjunção cromossômica e impactos dessas alterações na saúde.',
      },
      'genetica-de-populacoes': {
        titulo: 'Genética de Populações',
        texto:
          'Genética de populações estuda frequências de alelos e genótipos em grupos. Mutação, seleção natural, deriva genética, fluxo gênico e cruzamentos não aleatórios alteram essas frequências. Esse conteúdo se conecta diretamente com evolução, adaptação, biodiversidade e resistência de microrganismos a medicamentos.',
      },
    },
    quiz: [
      {
        pergunta: 'A 1ª Lei de Mendel trata principalmente da:',
        opcoes: ['Segregação dos alelos na formação dos gametas', 'Origem das mitocôndrias', 'Formação do relevo', 'Digestão de proteínas'],
        resposta: 'Segregação dos alelos na formação dos gametas',
      },
      {
        pergunta: 'No sistema ABO, o tipo sanguíneo AB ocorre por:',
        opcoes: ['Codominância entre IA e IB', 'Ausência de alelos', 'Mutação sempre letal', 'Dominância do alelo i'],
        resposta: 'Codominância entre IA e IB',
      },
      {
        pergunta: 'Heranças ligadas ao cromossomo X recessivas aparecem mais em homens porque eles:',
        opcoes: ['Possuem apenas um cromossomo X', 'Não possuem cromossomos', 'Têm dois alelos dominantes sempre', 'Não produzem gametas'],
        resposta: 'Possuem apenas um cromossomo X',
      },
      {
        pergunta: 'Linkage significa que genes:',
        opcoes: ['Estão no mesmo cromossomo e tendem a ser herdados juntos', 'Sempre ficam em cromossomos diferentes', 'Não sofrem recombinação nunca', 'Não possuem relação com hereditariedade'],
        resposta: 'Estão no mesmo cromossomo e tendem a ser herdados juntos',
      },
      {
        pergunta: 'A síndrome de Down está associada geralmente a:',
        opcoes: ['Trissomia do cromossomo 21', 'Ausência de DNA em todas as células', 'Falta de membrana plasmática', 'Duplicação de todos os órgãos'],
        resposta: 'Trissomia do cromossomo 21',
      },
    ],
  },
  {
    slug: 'biotecnologia-e-engenharia-genetica',
    introducao:
      'Biotecnologia e engenharia genética estudam o uso de seres vivos, células, enzimas e DNA para produzir soluções em saúde, agricultura, indústria e ambiente.',
    conceitos: ['DNA recombinante', 'transgênicos', 'clonagem', 'terapia gênica', 'PCR', 'bioética'],
    dicaEnem:
      'Observe benefícios, riscos, regulação e impactos sociais. O ENEM costuma cobrar biotecnologia com leitura crítica, e não apenas definição técnica.',
    resumos: {
      'biotecnologia-e-engenharia-genetica': {
        titulo: 'Biotecnologia e Engenharia Genética',
        texto:
          'Biotecnologia usa organismos ou partes deles para produzir bens e serviços, como vacinas, antibióticos, alimentos fermentados, enzimas, testes diagnósticos e biorremediação. Engenharia genética permite manipular DNA, inserir genes de interesse, produzir organismos transgênicos e estudar doenças. Técnicas como DNA recombinante, PCR, sequenciamento e edição gênica ampliaram possibilidades na medicina e agricultura, mas levantam debates sobre segurança, acesso, ética, patentes, biodiversidade e impactos ambientais.',
      },
    },
    quiz: [
      {
        pergunta: 'Biotecnologia pode envolver:',
        opcoes: ['Uso de organismos em processos úteis', 'Apenas estudo de planetas', 'Somente construção civil', 'Eliminação da genética'],
        resposta: 'Uso de organismos em processos úteis',
      },
      {
        pergunta: 'Organismos transgênicos são aqueles que:',
        opcoes: ['Receberam material genético por técnicas de engenharia genética', 'Nunca possuem DNA', 'São sempre vírus', 'Não se reproduzem'],
        resposta: 'Receberam material genético por técnicas de engenharia genética',
      },
      {
        pergunta: 'PCR é uma técnica usada para:',
        opcoes: ['Amplificar trechos de DNA', 'Bombear sangue', 'Produzir bile', 'Formar rochas'],
        resposta: 'Amplificar trechos de DNA',
      },
      {
        pergunta: 'Um debate comum em biotecnologia envolve:',
        opcoes: ['Ética, segurança e impactos sociais', 'Somente relevo e clima', 'Ausência de aplicação prática', 'Fim de toda pesquisa científica'],
        resposta: 'Ética, segurança e impactos sociais',
      },
      {
        pergunta: 'Vacinas podem ser relacionadas à biotecnologia porque:',
        opcoes: ['Envolvem conhecimento biológico aplicado à saúde', 'São sempre feitas de petróleo', 'Não têm relação com imunidade', 'Substituem saneamento completamente'],
        resposta: 'Envolvem conhecimento biológico aplicado à saúde',
      },
    ],
  },
  {
    slug: 'origem-da-vida-e-evolucao',
    introducao:
      'Origem da vida e evolução explicam como a vida pode ter surgido e como os seres vivos se modificam ao longo do tempo. O tema conecta evidências científicas, seleção natural, adaptação e biodiversidade.',
    conceitos: ['origem da vida', 'abiogênese', 'biogênese', 'evolução', 'seleção natural', 'adaptação'],
    dicaEnem:
      'Em evolução, cuidado com ideias de progresso ou intenção. A seleção natural favorece características vantajosas em determinado ambiente.',
    resumos: {
      'origem-da-vida': {
        titulo: 'Origem da Vida',
        texto:
          'As explicações científicas sobre a origem da vida envolvem a passagem de hipóteses antigas, como abiogênese, para a biogênese, defendida por experimentos como os de Redi e Pasteur. A hipótese da evolução química propõe que moléculas orgânicas simples teriam se formado na Terra primitiva e, ao longo do tempo, originado sistemas mais complexos. O experimento de Miller e Urey é frequentemente lembrado por simular condições da atmosfera primitiva e produzir moléculas orgânicas.',
      },
      evolucao: {
        titulo: 'Evolução',
        texto:
          'Evolução é a mudança das populações ao longo das gerações. A seleção natural, proposta por Darwin e Wallace, ocorre quando indivíduos com características vantajosas em determinado ambiente sobrevivem e deixam mais descendentes. Evidências da evolução incluem fósseis, anatomia comparada, embriologia, biogeografia e genética molecular. O ENEM costuma relacionar evolução a resistência bacteriana, adaptação, biodiversidade e impactos ambientais.',
      },
    },
    quiz: [
      {
        pergunta: 'A biogênese defende que:',
        opcoes: ['Seres vivos surgem de outros seres vivos', 'Vida surge sempre de matéria bruta espontaneamente', 'Não existe reprodução', 'DNA não participa da vida'],
        resposta: 'Seres vivos surgem de outros seres vivos',
      },
      {
        pergunta: 'O experimento de Miller e Urey está relacionado à:',
        opcoes: ['Formação de moléculas orgânicas em condições simuladas', 'Produção de gametas humanos', 'Formação de ossos', 'Classificação de mapas'],
        resposta: 'Formação de moléculas orgânicas em condições simuladas',
      },
      {
        pergunta: 'Seleção natural favorece:',
        opcoes: ['Características vantajosas em determinado ambiente', 'Indivíduos por escolha consciente da natureza', 'Sempre os maiores organismos', 'Ausência de variação'],
        resposta: 'Características vantajosas em determinado ambiente',
      },
      {
        pergunta: 'Fósseis são importantes porque:',
        opcoes: ['Servem como evidências da história da vida', 'Substituem o DNA em todos os organismos vivos', 'São sempre organismos atuais', 'Não têm valor científico'],
        resposta: 'Servem como evidências da história da vida',
      },
      {
        pergunta: 'Resistência bacteriana a antibióticos é exemplo de:',
        opcoes: ['Evolução por seleção natural', 'Fim da variabilidade', 'Fotossíntese animal', 'Geração espontânea'],
        resposta: 'Evolução por seleção natural',
      },
    ],
  },
  {
    slug: 'ecologia',
    introducao:
      'Ecologia estuda as relações entre os seres vivos e o ambiente. O conteúdo envolve níveis ecológicos, fluxo de energia, ciclos da matéria, relações ecológicas, dinâmica de populações, biomas e impactos ambientais.',
    conceitos: ['ecossistema', 'cadeia alimentar', 'fluxo de energia', 'ciclos biogeoquímicos', 'relações ecológicas', 'biomas'],
    dicaEnem:
      'Em Ecologia, leia gráficos e situações-problema. O ENEM costuma cobrar impactos ambientais, conservação, desequilíbrios e ações humanas.',
    resumos: {
      'visao-geral-e-conceitos': {
        titulo: 'Visão Geral e Conceitos',
        texto:
          'Ecologia analisa indivíduos, populações, comunidades, ecossistemas e biosfera. Habitat é o local onde a espécie vive; nicho ecológico é o papel que ela desempenha, incluindo alimentação, reprodução e relações com outros organismos. Cadeias e teias alimentares mostram transferência de matéria e energia. Produtores, consumidores e decompositores mantêm o funcionamento dos ecossistemas.',
      },
      'materia-e-energia-de-ecossistemas': {
        titulo: 'Matéria e Energia de Ecossistemas',
        texto:
          'A energia entra nos ecossistemas principalmente pela fotossíntese e flui em sentido único, dos produtores aos consumidores e decompositores, com perdas em forma de calor. A matéria, por outro lado, circula em ciclos biogeoquímicos, como água, carbono e nitrogênio. Alterações humanas nesses ciclos podem causar aquecimento global, eutrofização, chuva ácida e desequilíbrios ambientais.',
      },
      'dinamica-das-populacoes-e-comunidades': {
        titulo: 'Dinâmica das Populações e Comunidades',
        texto:
          'Populações variam conforme natalidade, mortalidade, imigração e emigração. Crescimento populacional depende de recursos, predadores, doenças e competição. Comunidades são formadas por populações que interagem por relações como competição, predação, parasitismo, mutualismo e comensalismo. Sucessão ecológica é a mudança gradual da comunidade ao longo do tempo.',
      },
      'biomas-terrestres-e-aquaticos': {
        titulo: 'Biomas Terrestres e Aquáticos',
        texto:
          'Biomas são grandes conjuntos de ecossistemas definidos por clima, vegetação, fauna e dinâmica ambiental. No Brasil, Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampas possuem características próprias e sofrem diferentes pressões humanas. Ecossistemas aquáticos incluem rios, lagos, manguezais, oceanos e recifes, essenciais para biodiversidade, clima, pesca e equilíbrio ambiental.',
      },
      'impactos-e-problemas-ambientais': {
        titulo: 'Impactos e Problemas Ambientais',
        texto:
          'Impactos ambientais resultam de atividades humanas como desmatamento, queimadas, mineração, poluição, urbanização desordenada, agropecuária intensiva e consumo excessivo. Consequências incluem perda de biodiversidade, erosão, assoreamento, contaminação da água, mudanças climáticas e injustiça ambiental. O ENEM cobra soluções integradas, como fiscalização, educação ambiental, tecnologias limpas, restauração ecológica e políticas públicas.',
      },
    },
    quiz: [
      {
        pergunta: 'Nicho ecológico representa:',
        opcoes: ['O papel da espécie no ambiente', 'Apenas o endereço da espécie', 'Uma molécula de DNA', 'Um órgão do sistema digestório'],
        resposta: 'O papel da espécie no ambiente',
      },
      {
        pergunta: 'Nos ecossistemas, a energia:',
        opcoes: ['Flui e se perde parcialmente como calor', 'Recicla eternamente sem perdas', 'Nunca depende de produtores', 'É produzida apenas por animais'],
        resposta: 'Flui e se perde parcialmente como calor',
      },
      {
        pergunta: 'Decompositores são importantes porque:',
        opcoes: ['Reciclam matéria orgânica', 'Produzem todos os gametas', 'Eliminam a necessidade de produtores', 'Não participam dos ciclos naturais'],
        resposta: 'Reciclam matéria orgânica',
      },
      {
        pergunta: 'Sucessão ecológica é:',
        opcoes: ['Mudança gradual de comunidades ao longo do tempo', 'Uma divisão celular', 'Um método contraceptivo', 'A formação de anticorpos'],
        resposta: 'Mudança gradual de comunidades ao longo do tempo',
      },
      {
        pergunta: 'Um impacto do desmatamento é:',
        opcoes: ['Perda de biodiversidade e desequilíbrio ecológico', 'Aumento garantido de espécies nativas', 'Fim dos conflitos ambientais', 'Eliminação da erosão'],
        resposta: 'Perda de biodiversidade e desequilíbrio ecológico',
      },
    ],
  },
  {
    slug: 'programa-de-saude',
    introducao:
      'Programa de Saúde reúne temas de prevenção, parasitoses, doenças, saneamento, drogas, hábitos de vida e políticas públicas. O foco é entender saúde como resultado de fatores biológicos, sociais e ambientais.',
    conceitos: ['saúde pública', 'saneamento', 'parasitismo', 'prevenção', 'drogas', 'vacinação'],
    dicaEnem:
      'Ao estudar saúde, observe agente causador, transmissão, prevenção, tratamento, condições sociais e papel das políticas públicas.',
    resumos: {
      'conceitos-basicos': {
        titulo: 'Conceitos Básicos',
        texto:
          'Saúde não é apenas ausência de doença. Envolve bem-estar físico, mental e social, além de acesso a alimentação, moradia, saneamento, educação, vacinação, lazer e atendimento médico. Doenças podem ser infecciosas, genéticas, degenerativas, carenciais ou relacionadas a hábitos e ambiente. O ENEM costuma abordar saúde de forma interdisciplinar, associando biologia, sociedade e políticas públicas.',
      },
      parasitismo: {
        titulo: 'Parasitismo',
        texto:
          'Parasitismo é uma relação ecológica em que um organismo vive às custas de outro, causando prejuízo. Parasitoses humanas podem ser causadas por vermes, protozoários, bactérias, vírus e fungos. Muitas estão associadas à falta de saneamento, água contaminada, vetores e condições precárias de moradia. Prevenção envolve higiene, saneamento básico, vacinação quando disponível, controle de vetores e educação em saúde.',
      },
      'problemas-fisiologicos': {
        titulo: 'Problemas Fisiológicos',
        texto:
          'Problemas fisiológicos envolvem alterações no funcionamento do corpo, como diabetes, hipertensão, obesidade, anemias, doenças respiratórias e cardiovasculares. Podem ter causas genéticas, ambientais, alimentares ou relacionadas a hábitos de vida. O ENEM costuma cobrar interpretação de gráficos, prevenção, alimentação equilibrada, atividade física, políticas de saúde e desigualdade no acesso ao cuidado.',
      },
      drogas: {
        titulo: 'Drogas',
        texto:
          'Drogas são substâncias que alteram o funcionamento do organismo, especialmente do sistema nervoso. Podem ser lícitas ou ilícitas, medicamentosas ou recreativas. O uso problemático pode afetar saúde, relações sociais, aprendizagem, trabalho e segurança. Em provas, o tema aparece ligado a prevenção, dependência, políticas públicas, redução de danos, informação científica e cuidado em saúde, sem simplificações moralistas.',
      },
    },
    quiz: [
      {
        pergunta: 'Saúde, em sentido amplo, envolve:',
        opcoes: ['Bem-estar físico, mental e social', 'Apenas ausência de febre', 'Somente força muscular', 'Apenas genética'],
        resposta: 'Bem-estar físico, mental e social',
      },
      {
        pergunta: 'Saneamento básico ajuda a prevenir:',
        opcoes: ['Doenças de transmissão hídrica e parasitoses', 'Todos os acidentes de trânsito', 'Mutações sempre', 'Fotossíntese'],
        resposta: 'Doenças de transmissão hídrica e parasitoses',
      },
      {
        pergunta: 'Parasitismo é uma relação em que:',
        opcoes: ['Um organismo se beneficia prejudicando outro', 'Os dois sempre se beneficiam', 'Não há interação', 'Apenas plantas participam'],
        resposta: 'Um organismo se beneficia prejudicando outro',
      },
      {
        pergunta: 'Hipertensão e diabetes podem estar relacionadas a:',
        opcoes: ['Hábitos, genética e condições de vida', 'Somente mapas', 'Ausência de células', 'Produção de clorofila'],
        resposta: 'Hábitos, genética e condições de vida',
      },
      {
        pergunta: 'No ENEM, o tema drogas costuma ser tratado com foco em:',
        opcoes: ['Saúde, prevenção e políticas públicas', 'Instruções de uso', 'Incentivo ao consumo', 'Apenas curiosidade'],
        resposta: 'Saúde, prevenção e políticas públicas',
      },
    ],
  },
]

export function getBiologiaEstudo(slug: string) {
  return biologiaEstudos.find((estudo) => estudo.slug === slug)
}

export function getBiologiaResumoFallback(topico: string): BiologiaResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado relacionando estrutura e função. ${respostaProcessoBiologico} Observe moléculas, células, organismos, processos metabólicos e relações com saúde, ambiente, tecnologia e sociedade.`,
  }
}

export function getBiologiaQuizFallback(
  titulo: string,
  topicos: string[],
): BiologiaQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo} para o ENEM?`,
      opcoes: [
        'Relacionar estrutura, função e processo biológico',
        'Decorar termos sem entender função',
        'Ignorar células e metabolismo',
        'Separar totalmente vida e ambiente',
      ],
      resposta: 'Relacionar estrutura, função e processo biológico',
    },
    {
      pergunta: `${primeiroTopico} deve ser analisado considerando:`,
      opcoes: [
        'Como estruturas biológicas realizam funções',
        'Apenas nomes isolados',
        'Somente datas históricas',
        'Ausência de relação com organismos',
      ],
      resposta: 'Como estruturas biológicas realizam funções',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, um caminho correto é observar:`,
      opcoes: [
        'Processos, moléculas, células e efeitos no organismo',
        'Apenas opiniões pessoais',
        'Somente fronteiras territoriais',
        'Nenhuma relação com saúde',
      ],
      resposta: 'Processos, moléculas, células e efeitos no organismo',
    },
    {
      pergunta: `Em questões sobre ${titulo}, uma alternativa forte costuma:`,
      opcoes: [
        'Conectar conceito biológico a situações reais',
        'Eliminar relações com ambiente',
        'Ignorar evidências científicas',
        'Negar funcionamento celular',
      ],
      resposta: 'Conectar conceito biológico a situações reais',
    },
    {
      pergunta: 'Uma habilidade importante em Biologia é:',
      opcoes: [
        'Interpretar esquemas, gráficos e processos vitais',
        'Evitar leitura de imagens',
        'Responder sem analisar função',
        'Memorizar sem compreender',
      ],
      resposta: 'Interpretar esquemas, gráficos e processos vitais',
    },
  ]
}
