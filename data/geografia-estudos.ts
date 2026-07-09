export type GeografiaResumo = {
  titulo: string
  texto: string
}

export type GeografiaQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type GeografiaEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, GeografiaResumo>
  quiz: GeografiaQuizPergunta[]
}

const respostaProcessoGeografico =
  'No ENEM, Geografia costuma relacionar natureza, sociedade, economia, tecnologia, território e impactos ambientais. Por isso, o estudante deve observar mapas, gráficos, escalas, conflitos, redes de circulação, desigualdades e transformações no espaço geográfico.'

export const geografiaEstudos: GeografiaEstudo[] = [
  {
    slug: 'geografia-fisica',
    introducao:
      'Geografia Física estuda os elementos naturais da superfície terrestre e as relações entre relevo, clima, vegetação, hidrografia, solos, dinâmica interna da Terra e ação humana sobre a natureza. O foco não é decorar nomes de rios, climas ou formas de relevo, mas compreender como esses elementos se combinam nas paisagens e como interferem na vida social, econômica e ambiental.',
    conceitos: ['relevo', 'clima', 'vegetação', 'hidrografia', 'cartografia', 'dinâmica natural', 'paisagem', 'escala geográfica'],
    dicaEnem:
      'Ao responder questões de Geografia Física, conecte o fenômeno natural ao espaço onde ele ocorre, à escala analisada e aos impactos para a sociedade. O ENEM gosta de cobrar mapas, gráficos climáticos, imagens de satélite, problemas ambientais e relações entre natureza e uso do território.',
    resumos: {
      astronomia: {
        titulo: 'Astronomia',
        texto:
          'Na Geografia escolar, Astronomia ajuda a entender localização, orientação e alguns fenômenos que interferem diretamente na organização do espaço. Os movimentos da Terra são essenciais: a rotação explica a sucessão de dias e noites e serve de base para a organização dos fusos horários; a translação, combinada com a inclinação do eixo terrestre, explica a variação de insolação ao longo do ano e as estações. Também é importante compreender coordenadas geográficas, latitude, longitude, orientação pelos pontos cardeais e leitura de mapas. No ENEM, esse tema costuma aparecer ligado a fusos horários, localização no globo, incidência solar, estações do ano, agricultura, clima e interpretação de mapas.',
      },
      'geologia-e-relevo': {
        titulo: 'Geologia e Relevo',
        texto:
          'Geologia estuda a estrutura, a origem e a história da Terra. O relevo é resultado da combinação entre forças internas, como tectonismo, vulcanismo e abalos sísmicos, e forças externas, como intemperismo, erosão, transporte e sedimentação. Planaltos, planícies, depressões, serras e chapadas não são formas fixas: estão em constante transformação ao longo do tempo geológico. No Brasil, predominam estruturas geológicas antigas, bastante desgastadas pela erosão, o que ajuda a explicar a ausência de dobramentos modernos e grandes cadeias montanhosas recentes. O ENEM costuma relacionar relevo a ocupação humana, agricultura, mineração, risco ambiental, uso do solo e formação de paisagens.',
      },
      cartografia: {
        titulo: 'Cartografia',
        texto:
          'Cartografia é a linguagem dos mapas e uma das ferramentas mais importantes da Geografia. Ela envolve escala, legenda, orientação, coordenadas geográficas, projeções cartográficas, mapas temáticos, anamorfoses, imagens de satélite e geotecnologias. A escala indica a relação entre o tamanho real e o tamanho representado no mapa; já as projeções tentam representar a Terra, que é aproximadamente esférica, em uma superfície plana, sempre gerando algum tipo de distorção. Nenhum mapa é totalmente neutro, pois toda representação seleciona informações e pode valorizar alguns aspectos em detrimento de outros. No ENEM, cartografia aparece muito em interpretação de mapas, comparação de escalas, leitura de gráficos, análise de território e compreensão de desigualdades espaciais.',
      },
      clima: {
        titulo: 'Clima',
        texto:
          'Clima é o comportamento médio da atmosfera em longos períodos, enquanto tempo atmosférico é a condição momentânea, como chuva, calor, frio ou nebulosidade em determinado dia. Os principais fatores climáticos são latitude, altitude, massas de ar, maritimidade, continentalidade, relevo, vegetação e correntes marítimas. No Brasil, a posição tropical favorece temperaturas elevadas em grande parte do território, mas a distribuição das chuvas varia bastante entre Amazônia, Nordeste semiárido, Centro-Oeste, litoral e Sul. O ENEM costuma cobrar climogramas, massas de ar, fenômenos como El Niño e La Niña, mudanças climáticas, ilhas de calor, secas, enchentes e impactos sociais dos eventos extremos.',
      },
      vegetacao: {
        titulo: 'Vegetação',
        texto:
          'A vegetação reflete a combinação entre clima, relevo, solo, disponibilidade de água e ação humana. Florestas densas tendem a ocorrer em áreas quentes e úmidas; formações abertas aparecem onde há estação seca mais marcada, solos específicos ou maior frequência de queimadas naturais e antrópicas. No Brasil, Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal, Pampas e outras formações revelam grande diversidade ambiental. Esses biomas também sofrem diferentes pressões: avanço agropecuário, mineração, urbanização, extração ilegal de madeira, queimadas e fragmentação de habitats. No ENEM, é comum relacionar vegetação a biodiversidade, desmatamento, povos tradicionais, clima, água e políticas de preservação.',
      },
      hidrografia: {
        titulo: 'Hidrografia',
        texto:
          'Hidrografia estuda rios, bacias hidrográficas, lagos, aquíferos, oceanos e a distribuição da água no espaço. Uma bacia hidrográfica é a área drenada por um rio principal e seus afluentes. Os rios são importantes para abastecimento, transporte, geração de energia, agricultura, pesca, lazer, biodiversidade e organização das cidades. O Brasil possui grandes bacias, como Amazônica, Tocantins-Araguaia, São Francisco, Paraná, Paraguai e Uruguai. O ENEM costuma relacionar hidrografia a crise hídrica, assoreamento, poluição, barragens, hidrelétricas, conflitos pelo uso da água, irrigação, saneamento e impactos socioambientais.',
      },
    },
    quiz: [
      {
        pergunta: 'Qual é a diferença correta entre tempo atmosférico e clima?',
        opcoes: ['Tempo é momentâneo; clima é média de longo prazo', 'Tempo é sempre anual; clima é diário', 'Clima muda a cada hora; tempo nunca muda', 'Não existe diferença'],
        resposta: 'Tempo é momentâneo; clima é média de longo prazo',
      },
      {
        pergunta: 'A cartografia é importante porque:',
        opcoes: ['Representa e interpreta o espaço por mapas', 'Elimina a necessidade de escala', 'Mostra a Terra sem distorções', 'Serve apenas para decorar capitais'],
        resposta: 'Representa e interpreta o espaço por mapas',
      },
      {
        pergunta: 'O relevo é transformado principalmente pela ação combinada de:',
        opcoes: ['Forças internas e externas', 'Apenas eleições políticas', 'Somente atividades industriais', 'Apenas limites estaduais'],
        resposta: 'Forças internas e externas',
      },
      {
        pergunta: 'Bacia hidrográfica é:',
        opcoes: ['Área drenada por um rio principal e afluentes', 'Uma montanha isolada', 'Um tipo de vegetação', 'Uma zona de fuso horário'],
        resposta: 'Área drenada por um rio principal e afluentes',
      },
      {
        pergunta: 'A vegetação de uma área depende muito de:',
        opcoes: ['Clima, solo, relevo e água', 'Apenas propaganda turística', 'Somente fronteiras políticas', 'Exclusivamente moeda local'],
        resposta: 'Clima, solo, relevo e água',
      },
    ],
  },
  {
    slug: 'geografia-tematica',
    introducao:
      'Geografia Temática conecta recursos naturais, energia, agropecuária, indústria, transportes e organização econômica do território. O objetivo é entender como a sociedade usa o espaço, como as atividades produtivas se distribuem e como elas geram impactos ambientais, desigualdades regionais, redes de circulação e conflitos por recursos.',
    conceitos: ['recursos naturais', 'matriz energética', 'agropecuária', 'industrialização', 'transportes', 'território', 'logística', 'commodities'],
    dicaEnem:
      'Observe sempre quem se beneficia, quais impactos aparecem e como as redes de transporte, energia e produção organizam o território. Em Geografia Temática, o ENEM costuma misturar economia, ambiente, tecnologia, trabalho e desigualdade.',
    resumos: {
      'recursos-minerais': {
        titulo: 'Recursos Minerais',
        texto:
          'Recursos minerais são matérias-primas extraídas da crosta terrestre, como ferro, bauxita, manganês, cobre, ouro, níquel, nióbio e petróleo. Eles são fundamentais para indústria, construção civil, tecnologia, geração de energia, exportações e infraestrutura. Porém, a mineração também pode provocar grandes impactos socioambientais, como desmatamento, contaminação da água e do solo, alteração de paisagens, conflitos com comunidades locais e dependência econômica de produtos primários. No Brasil, a mineração tem forte peso em estados como Minas Gerais, Pará e Goiás. No ENEM, esse tema costuma aparecer ligado a logística, exportação de commodities, rompimento de barragens, conflitos territoriais e sustentabilidade.',
      },
      energia: {
        titulo: 'Energia',
        texto:
          'Energia movimenta a economia, os transportes, a indústria, as cidades e o cotidiano. As fontes podem ser renováveis, como hidrelétrica, solar, eólica e biomassa, ou não renováveis, como petróleo, carvão mineral, gás natural e urânio. O Brasil possui uma matriz elétrica com forte participação das hidrelétricas, o que é uma vantagem em termos de renovabilidade, mas também cria dependência do regime de chuvas e gera impactos com barragens, deslocamento de populações, alteração de rios e perda de biodiversidade. O ENEM costuma cobrar matriz energética, transição energética, combustíveis fósseis, crise hídrica, energia limpa, impactos ambientais e desigualdade no acesso à energia.',
      },
      agropecuaria: {
        titulo: 'Agropecuária',
        texto:
          'A agropecuária envolve agricultura e criação de animais. Ela pode ocorrer em pequenas propriedades familiares, importantes para a produção de alimentos básicos, ou em grandes propriedades mecanizadas, muitas vezes voltadas à exportação de commodities como soja, milho, carne, café e algodão. O agronegócio tem grande peso econômico no Brasil, mas está ligado a temas sensíveis como concentração fundiária, mecanização, êxodo rural, uso de agrotóxicos, desmatamento, queimadas, conflitos no campo, trabalho precário e pressão sobre biomas como Cerrado, Amazônia e Pantanal. O ENEM costuma comparar agricultura familiar e agronegócio, produção de alimentos, segurança alimentar e impactos socioambientais.',
      },
      industria: {
        titulo: 'Indústria',
        texto:
          'A indústria transforma matérias-primas em bens de consumo, máquinas, equipamentos e produtos tecnológicos. Sua localização depende de fatores como mercado consumidor, mão de obra, energia, transporte, disponibilidade de matérias-primas, infraestrutura, tecnologia, incentivos públicos e redes de circulação. A industrialização brasileira se concentrou historicamente no Sudeste, especialmente em São Paulo, mas houve desconcentração relativa com a instalação de indústrias em outras regiões. Também é importante entender a passagem do fordismo para modelos mais flexíveis, a automação, a terceirização e a reestruturação produtiva. O ENEM costuma relacionar indústria a urbanização, trabalho, tecnologia, globalização e desigualdade regional.',
      },
      transporte: {
        titulo: 'Transporte',
        texto:
          'Transportes organizam a circulação de pessoas, mercadorias, serviços e informações no território. Rodovias, ferrovias, hidrovias, dutovias, portos e aeroportos possuem custos, alcances e impactos diferentes. No Brasil, a forte dependência do transporte rodoviário aumenta custos logísticos, consumo de combustíveis, emissão de poluentes e desgaste das estradas. Ferrovias e hidrovias poderiam ser mais usadas para cargas pesadas e longas distâncias, mas exigem planejamento e investimento. O ENEM costuma relacionar transporte a integração regional, escoamento da produção agropecuária, comércio exterior, urbanização, mobilidade urbana e sustentabilidade.',
      },
    },
    quiz: [
      {
        pergunta: 'Uma característica da matriz elétrica brasileira é:',
        opcoes: ['Grande importância da hidreletricidade', 'Ausência de fontes renováveis', 'Uso exclusivo de carvão mineral', 'Proibição de biomassa'],
        resposta: 'Grande importância da hidreletricidade',
      },
      {
        pergunta: 'A mineração pode gerar:',
        opcoes: ['Impactos socioambientais e conflitos territoriais', 'Apenas benefícios sem riscos', 'Fim da necessidade de transporte', 'Redução total da desigualdade'],
        resposta: 'Impactos socioambientais e conflitos territoriais',
      },
      {
        pergunta: 'O agronegócio brasileiro está associado a:',
        opcoes: ['Exportações e pressão sobre biomas', 'Ausência de mecanização', 'Fim da concentração fundiária', 'Produção apenas para subsistência'],
        resposta: 'Exportações e pressão sobre biomas',
      },
      {
        pergunta: 'A dependência rodoviária no Brasil tende a:',
        opcoes: ['Aumentar custos logísticos e consumo de combustíveis', 'Eliminar todos os gargalos', 'Substituir completamente os portos', 'Impedir circulação de mercadorias'],
        resposta: 'Aumentar custos logísticos e consumo de combustíveis',
      },
      {
        pergunta: 'A localização industrial depende de fatores como:',
        opcoes: ['Mercado, transporte, energia e mão de obra', 'Apenas clima polar', 'Somente vegetação natural', 'Exclusivamente altitude'],
        resposta: 'Mercado, transporte, energia e mão de obra',
      },
    ],
  },
  {
    slug: 'geografia-humana',
    introducao:
      'Geografia Humana analisa população, migrações, urbanização, comércio, globalização, redes, inserção do Brasil no mundo e questões ambientais. Ela mostra como as sociedades produzem, ocupam, disputam e transformam o espaço geográfico, criando paisagens, territórios, fluxos e desigualdades.',
    conceitos: ['população', 'migração', 'urbanização', 'redes', 'globalização', 'questões ambientais', 'desigualdade socioespacial'],
    dicaEnem:
      'Em Geografia Humana, leia mapas, gráficos e textos pensando em desigualdade, redes, escalas, impactos sociais e conflitos. O ENEM valoriza interpretação de dados e relação entre processos locais e globais.',
    resumos: {
      populacao: {
        titulo: 'População',
        texto:
          'O estudo da população envolve crescimento vegetativo, estrutura etária, expectativa de vida, natalidade, mortalidade, fecundidade, distribuição pelo território e condições de vida. A transição demográfica ajuda a explicar a passagem de altas taxas de natalidade e mortalidade para taxas menores, processo ligado à urbanização, industrialização, melhoria da saúde, escolarização e mudanças culturais. No Brasil, a queda da fecundidade e o envelhecimento populacional geram desafios para previdência, saúde, mercado de trabalho e políticas públicas. O ENEM costuma cobrar pirâmides etárias, bônus demográfico, desigualdades regionais e indicadores sociais.',
      },
      migracoes: {
        titulo: 'Migrações',
        texto:
          'Migração é o deslocamento de pessoas no espaço, podendo ser interna ou internacional, temporária ou permanente, voluntária ou forçada. As causas podem ser econômicas, ambientais, políticas, culturais, familiares ou relacionadas a guerras e perseguições. No Brasil, as migrações internas foram marcadas pelo êxodo rural, pelo deslocamento de nordestinos para o Sudeste industrializado, pela ocupação de fronteiras agrícolas e por fluxos recentes para cidades médias. No cenário mundial, refugiados, xenofobia, crise migratória, fronteiras e desigualdade entre países são temas frequentes. O ENEM costuma cobrar fatores de expulsão e atração, trabalho, redes migratórias e direitos humanos.',
      },
      urbanizacao: {
        titulo: 'Urbanização',
        texto:
          'Urbanização é o crescimento da população urbana e da importância econômica, política e cultural das cidades. No Brasil, ela ocorreu de forma rápida e desigual, ligada à industrialização, ao êxodo rural, à concentração de serviços e à modernização do campo. Como o crescimento urbano foi muitas vezes maior que a capacidade de planejamento, surgiram problemas como segregação socioespacial, favelização, déficit habitacional, mobilidade precária, enchentes, saneamento insuficiente, violência urbana, poluição e ilhas de calor. O ENEM costuma relacionar urbanização a metropolização, redes urbanas, direito à cidade, transporte público e desigualdade.',
      },
      comercio: {
        titulo: 'Comércio',
        texto:
          'Comércio envolve trocas de mercadorias, serviços e capitais em diferentes escalas, do mercado local ao comércio internacional. A globalização intensificou redes de produção e consumo, fazendo com que partes de um mesmo produto sejam produzidas em vários países. Isso criou cadeias globais de valor, ampliou a circulação de mercadorias e aumentou a dependência de infraestrutura logística e tecnologia. No ENEM, comércio pode aparecer ligado a blocos econômicos, Organização Mundial do Comércio, protecionismo, commodities, dependência tecnológica, desigualdades entre países, transporte marítimo, portos e acordos internacionais.',
      },
      'brasil-no-mundo': {
        titulo: 'Brasil no Mundo',
        texto:
          'O Brasil participa da economia mundial como grande produtor de commodities minerais e agropecuárias, além de possuir indústria diversificada, grande mercado consumidor, biodiversidade, recursos hídricos e papel diplomático relevante. Sua posição internacional envolve oportunidades e desafios: dependência de exportações primárias, necessidade de agregar tecnologia aos produtos, disputas comerciais, pressão ambiental, acordos internacionais e busca por desenvolvimento sustentável. O ENEM costuma cobrar a posição do Brasil na divisão internacional do trabalho, relações Sul-Sul, Mercosul, BRICS, Amazônia, comércio exterior e geopolítica ambiental.',
      },
      'questoes-ambientais': {
        titulo: 'Questões Ambientais',
        texto:
          'Questões ambientais resultam da relação entre sociedade e natureza. Desmatamento, queimadas, poluição, crise hídrica, aquecimento global, perda de biodiversidade, desertificação, enchentes, descarte de resíduos e injustiça ambiental afetam grupos sociais de maneira desigual. Populações pobres, povos tradicionais e moradores de áreas de risco costumam sofrer mais com os impactos. O ENEM costuma cobrar soluções integradas, como preservação, fiscalização, educação ambiental, tecnologia, saneamento, mudança nos padrões de consumo, transição energética e políticas públicas. Também é comum aparecer a ideia de desenvolvimento sustentável, que busca conciliar economia, sociedade e ambiente.',
      },
    },
    quiz: [
      {
        pergunta: 'A transição demográfica ajuda a explicar:',
        opcoes: ['Mudanças nas taxas de natalidade e mortalidade', 'Apenas formação de montanhas', 'Somente rotas de rios', 'A origem das rochas'],
        resposta: 'Mudanças nas taxas de natalidade e mortalidade',
      },
      {
        pergunta: 'A urbanização brasileira foi marcada por:',
        opcoes: ['Crescimento rápido e desigual das cidades', 'Ausência de problemas urbanos', 'Predomínio total da vida rural atual', 'Fim da segregação socioespacial'],
        resposta: 'Crescimento rápido e desigual das cidades',
      },
      {
        pergunta: 'Migrações podem ocorrer por:',
        opcoes: ['Fatores econômicos, políticos e ambientais', 'Apenas vontade turística', 'Somente relevo plano', 'Obrigatoriamente por comércio exterior'],
        resposta: 'Fatores econômicos, políticos e ambientais',
      },
      {
        pergunta: 'Na globalização, o comércio mundial se caracteriza por:',
        opcoes: ['Redes produtivas e fluxos internacionais', 'Isolamento total dos países', 'Fim dos transportes', 'Ausência de tecnologia'],
        resposta: 'Redes produtivas e fluxos internacionais',
      },
      {
        pergunta: 'Uma questão ambiental urbana comum é:',
        opcoes: ['Ilhas de calor e poluição', 'Glaciação permanente', 'Ausência de resíduos', 'Fim do consumo de energia'],
        resposta: 'Ilhas de calor e poluição',
      },
    ],
  },
  {
    slug: 'geografia-regional',
    introducao:
      'Geografia Regional estuda formas de dividir, comparar e interpretar o território. No Brasil, as regiões ajudam a analisar população, economia, natureza, redes urbanas, desigualdades, infraestrutura e políticas públicas. O mais importante é entender que regiões não existem apenas por natureza: elas são construções usadas para explicar diferenças e relações no espaço.',
    conceitos: ['regionalização', 'Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul', 'complexos geoeconômicos', 'desigualdade regional'],
    dicaEnem:
      'Lembre que regiões não são naturais e fixas: são critérios de análise criados para interpretar diferenças e relações no território. Sempre observe qual critério está sendo usado: econômico, natural, histórico, social ou político.',
    resumos: {
      'divisoes-regionais': {
        titulo: 'Divisões Regionais',
        texto:
          'Regionalizar é dividir o espaço a partir de critérios de análise. O Brasil pode ser estudado pelas cinco regiões do IBGE, pelos complexos geoeconômicos ou por outras propostas de regionalização. Cada divisão destaca aspectos diferentes, como economia, história, rede urbana, natureza, cultura ou políticas públicas. A divisão do IBGE é muito usada para estatísticas oficiais, enquanto os complexos geoeconômicos destacam relações econômicas e históricas mais amplas. No ENEM, o importante é perceber que o mapa não é apenas desenho: ele expressa uma interpretação do território.',
      },
      'amazonia-e-regiao-norte': {
        titulo: 'Amazônia e Região Norte',
        texto:
          'A Região Norte possui grande extensão territorial, baixa densidade demográfica em muitas áreas, forte presença da Floresta Amazônica, rios extensos, biodiversidade e enorme diversidade sociocultural. A circulação fluvial é muito importante, e a ocupação do território envolve povos indígenas, comunidades ribeirinhas, unidades de conservação, cidades, mineração, agropecuária e grandes obras de infraestrutura. Os temas mais cobrados envolvem desmatamento, queimadas, povos tradicionais, fronteira agropecuária, mineração, biodiversidade, transporte fluvial, conflitos pela terra e geopolítica da Amazônia.',
      },
      'regiao-nordeste': {
        titulo: 'Região Nordeste',
        texto:
          'O Nordeste apresenta grande diversidade interna. O litoral é mais urbanizado e turístico; a Zona da Mata tem história ligada à cana-de-açúcar; o Agreste é área de transição; e o Sertão semiárido enfrenta longos períodos de estiagem. A região também possui polos industriais, agricultura irrigada, energia eólica, cultura forte e importantes metrópoles. O ENEM costuma cobrar seca, indústria da seca, concentração fundiária, migrações, desigualdade social, turismo, cultura regional e convivência com o semiárido, mostrando que a seca é um fenômeno natural, mas seus impactos dependem das condições sociais e políticas.',
      },
      'centro-oeste': {
        titulo: 'Centro-Oeste',
        texto:
          'O Centro-Oeste se destaca pela agropecuária moderna, expansão do agronegócio, produção de grãos e carnes, presença do Cerrado e do Pantanal, além de Brasília como centro político do país. A região tem baixa densidade demográfica relativa em muitas áreas, mas passou por forte transformação com a mecanização agrícola, abertura de rodovias e expansão da fronteira agropecuária. Os impactos ambientais incluem desmatamento do Cerrado, queimadas, assoreamento, pressão sobre recursos hídricos e ameaças ao Pantanal. No ENEM, é comum aparecer a relação entre agronegócio, logística, biodiversidade e conflitos fundiários.',
      },
      sudeste: {
        titulo: 'Sudeste',
        texto:
          'O Sudeste concentra grande parte da população, da indústria, dos serviços, da urbanização, da renda e da infraestrutura brasileira. São Paulo, Rio de Janeiro e Belo Horizonte exercem forte influência econômica e urbana, formando redes de comando financeiro, industrial, tecnológico e cultural. A região teve papel central na industrialização brasileira e ainda concentra muitas atividades de alto valor. Ao mesmo tempo, apresenta desigualdades socioespaciais, periferização, favelização, problemas de mobilidade, poluição, enchentes, ilhas de calor e pressão sobre recursos naturais. O ENEM costuma cobrar metropolização, desconcentração industrial e contrastes urbanos.',
      },
      sul: {
        titulo: 'Sul',
        texto:
          'A Região Sul possui forte urbanização, agroindústria, pequenas e médias propriedades em várias áreas, clima subtropical, influência de imigrações europeias e importante integração com países vizinhos. A economia combina agricultura mecanizada, pecuária, indústria, serviços e comércio. A região apresenta indicadores sociais relativamente elevados em comparação à média nacional, mas também possui desigualdades internas, conflitos agrários, problemas urbanos e desafios ambientais. Nos últimos anos, enchentes, eventos climáticos extremos e uso do solo passaram a ser temas importantes para analisar a região. No ENEM, o Sul pode aparecer ligado ao clima, agroindústria, Mercosul e integração regional.',
      },
    },
    quiz: [
      {
        pergunta: 'Regionalizar significa:',
        opcoes: ['Dividir o espaço por critérios de análise', 'Apagar diferenças territoriais', 'Criar países independentes', 'Ignorar dados sociais'],
        resposta: 'Dividir o espaço por critérios de análise',
      },
      {
        pergunta: 'A Região Norte é frequentemente associada a:',
        opcoes: ['Amazônia, rios extensos e biodiversidade', 'Clima polar permanente', 'Maior concentração industrial do país', 'Ausência de conflitos ambientais'],
        resposta: 'Amazônia, rios extensos e biodiversidade',
      },
      {
        pergunta: 'Um tema central do Nordeste no ENEM é:',
        opcoes: ['Semiárido, desigualdades e migrações', 'Tundra e permafrost', 'Somente indústria automobilística', 'Ausência de diversidade interna'],
        resposta: 'Semiárido, desigualdades e migrações',
      },
      {
        pergunta: 'O Centro-Oeste se destaca atualmente por:',
        opcoes: ['Agronegócio, Cerrado e Brasília', 'Maior litoral do Brasil', 'Clima exclusivamente polar', 'Baixa participação agropecuária'],
        resposta: 'Agronegócio, Cerrado e Brasília',
      },
      {
        pergunta: 'O Sudeste brasileiro concentra:',
        opcoes: ['População, indústria e serviços', 'A maior parte da Floresta Amazônica', 'Apenas atividades extrativas tradicionais', 'Todas as áreas sem urbanização'],
        resposta: 'População, indústria e serviços',
      },
    ],
  },
  {
    slug: 'geografia-america',
    introducao:
      'Geografia da América estuda a organização territorial, econômica, social e ambiental do continente americano. O tema envolve América Anglo-Saxônica, América Latina, países andinos, México, América Central, Caribe, Estados Unidos e Canadá, sempre relacionando colonização, desenvolvimento, desigualdade, redes econômicas e integração regional.',
    conceitos: ['América Latina', 'América Anglo-Saxônica', 'países andinos', 'Caribe', 'EUA', 'Canadá', 'desigualdade', 'integração regional'],
    dicaEnem:
      'Compare os diferentes processos de colonização, desenvolvimento econômico e inserção internacional. O ENEM costuma explorar desigualdades, dependência econômica, migrações, fronteiras e influência dos Estados Unidos no continente.',
    resumos: {
      'america-do-sul-paises-andinos': {
        titulo: 'América do Sul - Países Andinos',
        texto:
          'Os países andinos, como Bolívia, Peru, Equador, Colômbia e Chile, possuem forte influência da Cordilheira dos Andes em seu clima, relevo, ocupação e economia. A região apresenta grande diversidade cultural, com presença importante de povos indígenas, agricultura de altitude, mineração, turismo e cidades localizadas em áreas elevadas. No ENEM, os países andinos podem aparecer ligados a relevo, tectonismo, mineração, desigualdade social, cultura indígena, integração sul-americana e conflitos por recursos naturais.',
      },
      'america-do-sul-paises-platinos': {
        titulo: 'América do Sul - Países Platinos',
        texto:
          'Os países platinos, como Argentina, Uruguai e Paraguai, estão ligados à Bacia Platina e possuem relações históricas e econômicas importantes com o Brasil. A região tem forte presença agropecuária, áreas urbanizadas, comércio regional e integração pelo Mercosul. A Argentina possui tradição industrial e agroexportadora; o Uruguai tem forte urbanização e agropecuária; o Paraguai possui importância energética pela Usina de Itaipu e produção agrícola. No ENEM, o tema pode aparecer ligado a Mercosul, integração regional, hidrografia e comércio.',
      },
      mexico: {
        titulo: 'México',
        texto:
          'O México possui posição estratégica entre a América Latina e os Estados Unidos. Sua economia é marcada por industrialização, petróleo, turismo, agricultura e forte integração com o mercado norte-americano. A fronteira com os EUA é uma das áreas mais dinâmicas e tensionadas do mundo, envolvendo migração, comércio, maquiladoras e controle migratório. O país também possui grande herança indígena e colonial. No ENEM, o México costuma aparecer ligado a migrações, fronteiras, dependência econômica, integração produtiva e desigualdade social.',
      },
      'america-central-e-caribe': {
        titulo: 'América Central e Caribe',
        texto:
          'A América Central e o Caribe apresentam grande fragmentação territorial, ilhas, pequenos países, economias dependentes do turismo, agricultura tropical, serviços financeiros e remessas de migrantes. A região também está sujeita a furacões, terremotos e vulnerabilidades socioambientais. Historicamente, sofreu forte influência externa, especialmente dos Estados Unidos, em questões políticas, militares e econômicas. No ENEM, pode aparecer em temas como dependência econômica, turismo, desastres naturais, migração, desigualdade e geopolítica regional.',
      },
      eua: {
        titulo: 'EUA',
        texto:
          'Os Estados Unidos são uma potência econômica, militar, tecnológica e cultural. Seu território possui grande diversidade natural, rede urbana complexa, agricultura moderna, indústria avançada, centros financeiros, universidades e forte capacidade de inovação. O país exerce influência global por meio de empresas transnacionais, moeda, tecnologia, cultura, forças armadas e organismos internacionais. No ENEM, os EUA aparecem ligados a globalização, geopolítica, migrações, fronteira com o México, consumo, tecnologia, disputas comerciais e impactos ambientais.',
      },
      canada: {
        titulo: 'Canadá',
        texto:
          'O Canadá possui grande extensão territorial, baixa densidade demográfica em muitas áreas, clima frio em grande parte do território e economia desenvolvida baseada em indústria, serviços, tecnologia, mineração, energia e recursos naturais. A população se concentra principalmente ao sul, próxima à fronteira com os Estados Unidos. O país também tem debates importantes sobre povos originários, imigração e exploração de recursos no Ártico. No ENEM, o Canadá pode aparecer em comparações com os EUA, questões ambientais, clima, recursos naturais e desenvolvimento humano.',
      },
    },
    quiz: [
      {
        pergunta: 'A Cordilheira dos Andes influencia fortemente:',
        opcoes: ['Relevo, clima e ocupação dos países andinos', 'Apenas a moeda local', 'Somente a língua oficial', 'A ausência de mineração'],
        resposta: 'Relevo, clima e ocupação dos países andinos',
      },
      {
        pergunta: 'O México se destaca na América por:',
        opcoes: ['Integração econômica e fronteira com os EUA', 'Isolamento total do comércio mundial', 'Ausência de migrações', 'Clima polar em todo o território'],
        resposta: 'Integração econômica e fronteira com os EUA',
      },
      {
        pergunta: 'A América Central e o Caribe são frequentemente associados a:',
        opcoes: ['Turismo, vulnerabilidade ambiental e influência externa', 'Grandes cadeias montanhosas geladas', 'Ausência de ilhas', 'Industrialização superior aos EUA'],
        resposta: 'Turismo, vulnerabilidade ambiental e influência externa',
      },
      {
        pergunta: 'Os Estados Unidos exercem influência mundial por meio de:',
        opcoes: ['Tecnologia, economia, cultura e poder militar', 'Apenas agricultura familiar', 'Isolamento político', 'Ausência de empresas globais'],
        resposta: 'Tecnologia, economia, cultura e poder militar',
      },
      {
        pergunta: 'A população canadense concentra-se principalmente:',
        opcoes: ['Ao sul, próxima à fronteira com os EUA', 'No extremo Ártico', 'Somente em ilhas tropicais', 'No interior desértico sem cidades'],
        resposta: 'Ao sul, próxima à fronteira com os EUA',
      },
    ],
  },
  {
    slug: 'geografia-africa-europa-asia',
    introducao:
      'Este bloco reúne África, Europa e Ásia, regiões fundamentais para entender geopolítica, economia mundial, conflitos, colonialismo, industrialização, desigualdades e globalização. O ENEM costuma cobrar esses espaços relacionando história, território, recursos naturais, população, fronteiras, religião, energia e disputas internacionais.',
    conceitos: ['África', 'Europa', 'Rússia', 'Oriente Médio', 'Ásia de Monções', 'Tigres Asiáticos', 'Japão', 'geopolítica'],
    dicaEnem:
      'Não estude continentes como listas de países. Relacione localização, recursos naturais, história, economia, conflitos, população e papel na globalização.',
    resumos: {
      africa: {
        titulo: 'África',
        texto:
          'A África é um continente diverso, com grande variedade de povos, línguas, religiões, climas, biomas e economias. Sua formação territorial atual foi profundamente marcada pelo colonialismo europeu e pela partilha do continente, que criou fronteiras artificiais e intensificou conflitos. Apesar de muitas vezes ser retratada apenas pela pobreza, a África possui grandes reservas minerais, crescimento urbano, juventude populacional, produção cultural intensa e economias em transformação. O ENEM costuma cobrar colonialismo, neocolonialismo, apartheid, conflitos étnicos, fome, recursos naturais, desertificação, migrações e inserção desigual na economia global.',
      },
      europa: {
        titulo: 'Europa',
        texto:
          'A Europa possui forte urbanização, industrialização histórica, elevada integração econômica e grande influência política e cultural no mundo. O continente foi centro da Revolução Industrial, do colonialismo, das guerras mundiais e da formação da União Europeia. Atualmente, enfrenta desafios como envelhecimento populacional, imigração, xenofobia, crise energética, desigualdades entre leste e oeste, nacionalismos e impactos da guerra na Ucrânia. No ENEM, a Europa aparece ligada à integração regional, União Europeia, Estado de bem-estar social, geopolítica, migrações e transição energética.',
      },
      russia: {
        titulo: 'Rússia',
        texto:
          'A Rússia é o maior país do mundo em extensão territorial, com enorme riqueza em recursos naturais, como gás natural, petróleo, minerais e florestas. Seu território se estende pela Europa e pela Ásia, possuindo baixa densidade demográfica em muitas áreas e forte concentração populacional na porção oeste. A Rússia tem grande importância geopolítica, militar e energética. No ENEM, o país pode aparecer ligado à Guerra Fria, fim da União Soviética, disputas territoriais, energia, conflitos no Leste Europeu, Ártico e relações com Europa e Ásia.',
      },
      'oriente-medio': {
        titulo: 'Oriente Médio',
        texto:
          'O Oriente Médio possui grande importância geopolítica por sua localização estratégica, reservas de petróleo e gás natural, diversidade religiosa e conflitos territoriais. A região reúne povos árabes, persas, turcos, judeus, curdos e outros grupos, além de religiões como islamismo, cristianismo e judaísmo. Muitos conflitos envolvem fronteiras, recursos, disputas políticas, intervenção externa e questões religiosas. No ENEM, o Oriente Médio aparece ligado a petróleo, água, Israel e Palestina, guerras, migrações forçadas, Primavera Árabe e influência das potências mundiais.',
      },
      'asia-de-moncoes': {
        titulo: 'Ásia de Monções',
        texto:
          'A Ásia de Monções inclui áreas do Sul e Sudeste Asiático influenciadas pelo regime de ventos sazonais conhecidos como monções. Esses ventos alteram a distribuição das chuvas ao longo do ano e são fundamentais para a agricultura, especialmente o cultivo de arroz. Ao mesmo tempo, chuvas intensas podem provocar enchentes, deslizamentos e prejuízos sociais. A região concentra grandes populações, cidades densas, economias em crescimento e desigualdades. No ENEM, o tema pode aparecer em questões sobre clima, agricultura, população, riscos ambientais e urbanização.',
      },
      'tigres-asiaticos': {
        titulo: 'Tigres Asiáticos',
        texto:
          'Os Tigres Asiáticos são economias que se industrializaram rapidamente a partir da segunda metade do século XX, como Coreia do Sul, Taiwan, Hong Kong e Singapura. O crescimento esteve ligado a investimentos em educação, tecnologia, exportações, planejamento estatal, atração de capitais e integração ao comércio mundial. Esses países se tornaram importantes produtores de eletrônicos, navios, tecnologia e serviços. No ENEM, o tema costuma aparecer ligado à industrialização tardia, globalização, Estado desenvolvimentista, exportações e mudança na divisão internacional do trabalho.',
      },
      japao: {
        titulo: 'Japão',
        texto:
          'O Japão é um país insular, montanhoso, com poucos recursos naturais e grande dependência de importações de matérias-primas e energia. Apesar dessas limitações, tornou-se uma potência industrial e tecnológica, com destaque para automóveis, eletrônicos, robótica e organização produtiva. O território japonês está em área de encontro de placas tectônicas, o que favorece terremotos, tsunamis e vulcanismo. O ENEM costuma cobrar Japão em temas como industrialização, tecnologia, envelhecimento populacional, riscos naturais, urbanização e economia global.',
      },
    },
    quiz: [
      {
        pergunta: 'A formação territorial africana atual foi muito marcada por:',
        opcoes: ['Colonialismo europeu e fronteiras artificiais', 'Isolamento total da Europa', 'Ausência de recursos naturais', 'Industrialização homogênea'],
        resposta: 'Colonialismo europeu e fronteiras artificiais',
      },
      {
        pergunta: 'A União Europeia representa principalmente:',
        opcoes: ['Integração econômica e política regional', 'Um bloco militar da América', 'Uma organização sem comércio', 'A divisão colonial da África'],
        resposta: 'Integração econômica e política regional',
      },
      {
        pergunta: 'O Oriente Médio tem grande importância geopolítica por causa de:',
        opcoes: ['Petróleo, localização estratégica e conflitos', 'Ausência de religiões', 'Clima polar permanente', 'Falta total de recursos energéticos'],
        resposta: 'Petróleo, localização estratégica e conflitos',
      },
      {
        pergunta: 'As monções são importantes na Ásia porque:',
        opcoes: ['Influenciam chuvas e agricultura', 'Impedem qualquer cultivo', 'Eliminam enchentes', 'São apenas correntes marítimas frias'],
        resposta: 'Influenciam chuvas e agricultura',
      },
      {
        pergunta: 'Os Tigres Asiáticos ficaram conhecidos por:',
        opcoes: ['Industrialização rápida e exportações', 'Economia baseada só em agricultura tradicional', 'Ausência de tecnologia', 'Isolamento comercial'],
        resposta: 'Industrialização rápida e exportações',
      },
    ],
  },
  {
    slug: 'globalizacao-e-conflitos',
    introducao:
      'Globalização e conflitos internacionais ajudam a entender a organização do mundo atual. O tema envolve capitalismo, blocos econômicos, organismos internacionais, redes produtivas, circulação de capitais, guerras, disputas territoriais, tensões regionais e papel das potências mundiais.',
    conceitos: ['globalização', 'capitalismo', 'blocos econômicos', 'ONU', 'geopolítica', 'conflitos regionais', 'Nova Ordem Mundial'],
    dicaEnem:
      'O ENEM costuma cobrar globalização de forma crítica. Observe fluxos de mercadorias, capitais, pessoas e informações, mas também desigualdades, dependência, conflitos e impactos ambientais.',
    resumos: {
      'fases-do-capitalismo': {
        titulo: 'Fases do Capitalismo',
        texto:
          'O capitalismo passou por diferentes fases. O capitalismo comercial esteve ligado às Grandes Navegações, ao colonialismo e ao mercantilismo. O capitalismo industrial ganhou força com a Revolução Industrial, a mecanização e o trabalho assalariado. O capitalismo financeiro e monopolista ampliou o papel dos bancos, bolsas, grandes empresas e investimentos internacionais. Atualmente, a globalização intensificou fluxos de capitais, informações, mercadorias e tecnologia. No ENEM, esse tema aparece ligado à divisão internacional do trabalho, desigualdade, consumo, imperialismo e transformações produtivas.',
      },
      'orgaos-internacionais': {
        titulo: 'Órgãos Internacionais',
        texto:
          'Órgãos internacionais são instituições criadas para mediar relações entre países, definir normas, promover cooperação ou influenciar decisões econômicas e políticas. Entre eles estão ONU, FMI, Banco Mundial, OMC, OMS e outros organismos multilaterais. A ONU busca atuar em segurança, direitos humanos e desenvolvimento; o FMI e o Banco Mundial têm forte influência financeira; a OMC regula disputas comerciais. No ENEM, esses órgãos aparecem ligados a soberania, conflitos, desigualdade, comércio, saúde global e governança internacional.',
      },
      'blocos-supranacionais': {
        titulo: 'Blocos Supranacionais',
        texto:
          'Blocos supranacionais ou econômicos são formas de integração entre países para facilitar comércio, circulação, cooperação política ou políticas comuns. A União Europeia é o exemplo mais avançado, com moeda comum em parte dos países e instituições compartilhadas. Mercosul, USMCA e outros blocos também expressam estratégias de integração regional. No ENEM, blocos aparecem em temas sobre globalização, acordos comerciais, soberania, protecionismo, migrações, circulação de mercadorias e disputas entre países.',
      },
      'eua-guerra-do-terror': {
        titulo: 'EUA - Guerra do Terror',
        texto:
          'A chamada Guerra do Terror foi impulsionada pelos Estados Unidos após os atentados de 11 de setembro de 2001. Ela envolveu intervenções militares, aumento da vigilância, combate a grupos classificados como terroristas e mudanças na política externa norte-americana. Guerras no Afeganistão e no Iraque marcaram esse período e geraram debates sobre soberania, direitos humanos, petróleo, segurança internacional e islamofobia. No ENEM, o tema pode aparecer ligado à Nova Ordem Mundial, unilateralismo, geopolítica do Oriente Médio e conflitos contemporâneos.',
      },
      'conflitos-na-ex-iugoslavia': {
        titulo: 'Conflitos na Ex-Iugoslávia',
        texto:
          'Os conflitos na Ex-Iugoslávia ocorreram após a fragmentação do país nos anos 1990, em meio a nacionalismos, disputas étnicas, religiosas e territoriais. A região dos Bálcãs tornou-se palco de guerras, deslocamentos forçados e violência contra populações civis. O caso mostra como o fim da Guerra Fria não significou ausência de conflitos, mas uma reorganização das tensões geopolíticas. No ENEM, o tema pode aparecer ligado a nacionalismo, fragmentação territorial, limpeza étnica, intervenção internacional e disputas identitárias.',
      },
      'conflitos-na-russia': {
        titulo: 'Conflitos na Rússia',
        texto:
          'Os conflitos envolvendo a Rússia estão ligados à herança da União Soviética, à disputa por influência no espaço pós-soviético, a questões étnicas e à geopolítica energética. Chechênia, Geórgia, Crimeia e Ucrânia são exemplos de áreas marcadas por tensões. A Rússia busca manter influência regional e controlar áreas estratégicas, enquanto países vizinhos muitas vezes se aproximam da União Europeia ou da OTAN. No ENEM, o tema pode aparecer ligado à Guerra Fria, energia, fronteiras, nacionalismo, OTAN e disputas territoriais.',
      },
      'india-x-paquistao': {
        titulo: 'Índia x Paquistão',
        texto:
          'O conflito entre Índia e Paquistão tem origem na partilha da Índia britânica em 1947 e envolve disputas territoriais, religiosas e políticas, especialmente pela região da Caxemira. A Índia tem maioria hindu, enquanto o Paquistão foi criado como país de maioria muçulmana. Ambos possuem armas nucleares, o que aumenta a importância geopolítica do conflito. No ENEM, esse tema pode aparecer ligado a colonialismo, fronteiras artificiais, nacionalismo, religião, armas nucleares e tensões no Sul da Ásia.',
      },
      'israel-x-palestina': {
        titulo: 'Israel x Palestina',
        texto:
          'O conflito entre Israel e Palestina envolve disputas territoriais, históricas, políticas, religiosas e nacionais. A criação do Estado de Israel em 1948, o deslocamento de palestinos, as guerras árabe-israelenses, a ocupação de territórios, os assentamentos, a situação de Gaza e da Cisjordânia e o status de Jerusalém são pontos centrais. É um dos conflitos mais cobrados por sua complexidade geopolítica e humanitária. No ENEM, o tema pode aparecer ligado a colonialismo, nacionalismo, Oriente Médio, direitos humanos, fronteiras e atuação de organismos internacionais.',
      },
    },
    quiz: [
      {
        pergunta: 'A globalização pode ser entendida como:',
        opcoes: ['Intensificação de fluxos econômicos, culturais e informacionais', 'Fim de todas as desigualdades', 'Isolamento dos países', 'Ausência de tecnologia'],
        resposta: 'Intensificação de fluxos econômicos, culturais e informacionais',
      },
      {
        pergunta: 'Um exemplo de bloco econômico avançado é:',
        opcoes: ['União Europeia', 'Cordilheira dos Andes', 'Aquífero Guarani', 'Deserto do Saara'],
        resposta: 'União Europeia',
      },
      {
        pergunta: 'A Guerra do Terror está ligada principalmente:',
        opcoes: ['À política externa dos EUA após 11 de setembro', 'À Revolução Industrial inglesa', 'Ao feudalismo europeu', 'À independência do Brasil'],
        resposta: 'À política externa dos EUA após 11 de setembro',
      },
      {
        pergunta: 'O conflito Índia x Paquistão envolve fortemente a região da:',
        opcoes: ['Caxemira', 'Patagônia', 'Sibéria', 'Amazônia'],
        resposta: 'Caxemira',
      },
      {
        pergunta: 'O conflito Israel x Palestina envolve principalmente:',
        opcoes: ['Disputa territorial, nacional e política', 'Apenas competição esportiva', 'Ausência de questões religiosas', 'Somente clima desértico'],
        resposta: 'Disputa territorial, nacional e política',
      },
    ],
  },
]

export function getGeografiaEstudo(slug: string) {
  return geografiaEstudos.find((estudo) => estudo.slug === slug)
}

export function getGeografiaResumoFallback(topico: string): GeografiaResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado relacionando natureza, sociedade e território. ${respostaProcessoGeografico} Observe escalas, mapas, redes, impactos, conflitos, fluxos e desigualdades espaciais. No ENEM, quase sempre o tema aparece ligado a interpretação de texto, mapa, gráfico ou situação-problema.`,
  }
}

export function getGeografiaQuizFallback(
  titulo: string,
  topicos: string[],
): GeografiaQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo} para o ENEM?`,
      opcoes: [
        'Relacionar sociedade, natureza e território',
        'Decorar nomes sem interpretar mapas',
        'Ignorar escalas geográficas',
        'Separar totalmente ambiente e sociedade',
      ],
      resposta: 'Relacionar sociedade, natureza e território',
    },
    {
      pergunta: `${primeiroTopico} deve ser analisado considerando:`,
      opcoes: [
        'Contexto espacial, impactos e relações sociais',
        'Apenas nomes isolados',
        'Somente datas históricas',
        'Ausência de transformações',
      ],
      resposta: 'Contexto espacial, impactos e relações sociais',
    },
    {
      pergunta: `Ao estudar ${segundoTopico}, um caminho correto é observar:`,
      opcoes: [
        'Escalas, mapas, fluxos e desigualdades',
        'Apenas opiniões pessoais',
        'Somente fronteiras sem contexto',
        'Nenhuma relação com a economia',
      ],
      resposta: 'Escalas, mapas, fluxos e desigualdades',
    },
    {
      pergunta: `Em questões sobre ${titulo}, uma alternativa forte costuma:`,
      opcoes: [
        'Conectar fenômenos naturais e sociais',
        'Eliminar impactos ambientais',
        'Ignorar o território',
        'Negar a existência de redes',
      ],
      resposta: 'Conectar fenômenos naturais e sociais',
    },
    {
      pergunta: `Uma habilidade importante em Geografia é:`,
      opcoes: [
        'Interpretar mapas, gráficos e paisagens',
        'Evitar leitura de mapas',
        'Responder sem analisar escala',
        'Memorizar sem compreender',
      ],
      resposta: 'Interpretar mapas, gráficos e paisagens',
    },
  ]
}
