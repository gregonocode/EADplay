export type HistoriaResumo = {
  titulo: string
  texto: string
}

export type HistoriaQuizPergunta = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type HistoriaEstudo = {
  slug: string
  introducao: string
  conceitos: string[]
  dicaEnem: string
  resumos: Record<string, HistoriaResumo>
  quiz: HistoriaQuizPergunta[]
}

const respostaProcessoHistorico =
  'No ENEM, o tema costuma aparecer ligado a processos históricos: causas, consequências, disputas sociais, economia, cultura e permanências no tempo.'

export const historiaEstudos: HistoriaEstudo[] = [
  {
    slug: 'introducao',
    introducao:
      'Estudar linha do tempo em História não é decorar datas soltas. O objetivo é entender a ordem dos processos e perceber como um acontecimento ajuda a explicar outro. A cronologia funciona como um mapa: ela mostra continuidades, rupturas, permanências e mudanças nas sociedades humanas.',
    conceitos: ['periodização', 'causa e consequência', 'permanências', 'rupturas', 'processo histórico'],
    dicaEnem:
      'Quando a questão trouxer uma data, use-a como pista de contexto. Pergunte qual processo estava acontecendo naquele período e quais grupos sociais estavam envolvidos.',
    resumos: {
      'linha-do-tempo': {
        titulo: 'Linha do tempo',
        texto:
          'A linha do tempo organiza os acontecimentos em sequência e ajuda a comparar períodos como Pré-História, Idade Antiga, Idade Média, Idade Moderna e Idade Contemporânea. Mais importante do que memorizar cada data é entender os marcos de mudança, como o surgimento da escrita, a formação dos Estados, a expansão marítima, as revoluções políticas e as transformações do trabalho. Em provas como o ENEM, a linha do tempo ajuda o estudante a evitar anacronismos, ou seja, confundir ideias, tecnologias ou formas de organização de épocas diferentes.',
      },
    },
    quiz: [
      {
        pergunta: 'Para que serve uma linha do tempo no estudo de História?',
        opcoes: ['Decorar nomes isolados', 'Organizar processos em sequência', 'Substituir a interpretação de fontes', 'Eliminar a ideia de mudança'],
        resposta: 'Organizar processos em sequência',
      },
      {
        pergunta: 'Qual habilidade é mais importante ao usar datas históricas no ENEM?',
        opcoes: ['Memorizar todas sem contexto', 'Relacionar datas a processos', 'Ignorar a ordem cronológica', 'Usar apenas curiosidades'],
        resposta: 'Relacionar datas a processos',
      },
      {
        pergunta: 'A passagem de um período histórico para outro costuma indicar:',
        opcoes: ['Uma mudança total e imediata', 'Apenas troca de calendário', 'Rupturas e permanências', 'Fim dos conflitos sociais'],
        resposta: 'Rupturas e permanências',
      },
      {
        pergunta: 'O surgimento da escrita é usado como marco tradicional para o início da:',
        opcoes: ['Idade Antiga', 'Idade Moderna', 'Idade Contemporânea', 'República'],
        resposta: 'Idade Antiga',
      },
      {
        pergunta: 'Em História, processo histórico significa:',
        opcoes: ['Um fato isolado', 'Uma transformação construída ao longo do tempo', 'Uma lenda sem fonte', 'Uma opinião individual'],
        resposta: 'Uma transformação construída ao longo do tempo',
      },
    ],
  },
  {
    slug: 'pre-historia',
    introducao:
      'A Pré-História estuda as sociedades humanas antes da escrita. O foco está nas formas de sobrevivência, nas técnicas, na vida coletiva e nas mudanças provocadas pela agricultura. Como não existem documentos escritos desse período, o estudo depende de vestígios arqueológicos, pinturas rupestres, ferramentas, fósseis e interpretações científicas.',
    conceitos: ['nomadismo', 'sedentarização', 'arte rupestre', 'Revolução Neolítica', 'fontes arqueológicas'],
    dicaEnem:
      'Preste atenção na relação entre técnica e modo de vida: ferramentas, fogo, agricultura e domesticação mudaram a organização social.',
    resumos: {
      'pre-historia': {
        titulo: 'Pré-História',
        texto:
          'No Paleolítico, os grupos humanos viviam principalmente da caça, pesca e coleta, com deslocamentos frequentes em busca de alimento. O domínio do fogo, a produção de ferramentas de pedra e a vida em pequenos grupos foram elementos importantes para a sobrevivência. No Neolítico, a agricultura e a domesticação de animais favoreceram a sedentarização, o crescimento de aldeias e a divisão de tarefas. Essa mudança não aconteceu de forma igual em todos os lugares, mas transformou profundamente a relação dos seres humanos com a natureza. A arte rupestre, os instrumentos de pedra e os vestígios arqueológicos são fontes importantes para estudar esse período.',
      },
    },
    quiz: [
      {
        pergunta: 'Qual mudança foi central na chamada Revolução Neolítica?',
        opcoes: ['Uso da moeda', 'Desenvolvimento da agricultura', 'Criação das fábricas', 'Formação dos parlamentos'],
        resposta: 'Desenvolvimento da agricultura',
      },
      {
        pergunta: 'O nomadismo está associado principalmente a grupos que:',
        opcoes: ['Viviam em cidades industriais', 'Dependiam de caça, pesca e coleta', 'Tinham Estados centralizados', 'Usavam escrita alfabética'],
        resposta: 'Dependiam de caça, pesca e coleta',
      },
      {
        pergunta: 'A arte rupestre é importante porque:',
        opcoes: ['É uma fonte sobre culturas antigas', 'Prova a existência de imprensa', 'Substitui todos os documentos escritos', 'Foi criada por Estados modernos'],
        resposta: 'É uma fonte sobre culturas antigas',
      },
      {
        pergunta: 'A sedentarização foi favorecida por:',
        opcoes: ['Agricultura e domesticação de animais', 'Expansão das ferrovias', 'Eleições diretas', 'Mercantilismo europeu'],
        resposta: 'Agricultura e domesticação de animais',
      },
      {
        pergunta: 'Uma fonte comum para estudar a Pré-História é:',
        opcoes: ['Jornais impressos', 'Vestígios arqueológicos', 'Constituições nacionais', 'Fotografias digitais'],
        resposta: 'Vestígios arqueológicos',
      },
    ],
  },
  {
    slug: 'idade-antiga',
    introducao:
      'A Idade Antiga reúne civilizações do Oriente e do Mediterrâneo. O estudo compara formas de Estado, religião, trabalho, cidadania, escravidão, comércio e cultura. É um período importante para entender a formação das primeiras cidades, dos impérios, das leis, da escrita e das instituições políticas.',
    conceitos: ['Estado teocrático', 'pólis', 'cidadania', 'escravidão antiga', 'República romana', 'império'],
    dicaEnem:
      'Compare a cidadania antiga com a atual. Na Grécia e em Roma, a participação política era limitada e excluía muitos grupos.',
    resumos: {
      'antiguidade-oriental': {
        titulo: 'Antiguidade Oriental',
        texto:
          'As civilizações orientais, como Egito e Mesopotâmia, desenvolveram agricultura irrigada, escrita, religiões politeístas e Estados centralizados. Em muitos casos, o poder político se misturava ao poder religioso, formando governos teocráticos. A vida econômica dependia dos rios, do trabalho coletivo e da administração de excedentes agrícolas. No Egito, o Rio Nilo foi essencial para a agricultura e para a organização social; na Mesopotâmia, os rios Tigre e Eufrates favoreceram cidades, comércio, leis e disputas territoriais. O ENEM costuma cobrar esse conteúdo relacionando ambiente natural, poder político e organização do trabalho.',
      },
      'antiguidade-classica-grecia': {
        titulo: 'Antiguidade Clássica - Grécia',
        texto:
          'A Grécia Antiga se destacou pela formação das pólis, cidades-Estado com autonomia política. Atenas ficou associada à democracia direta, embora limitada a cidadãos homens livres, excluindo mulheres, estrangeiros e escravizados. Esparta organizou uma sociedade militarizada, com forte disciplina e valorização da guerra. A cultura grega também marcou a filosofia, o teatro, os jogos, a mitologia e os debates sobre política. Para o ENEM, é importante perceber que a democracia antiga não era universal como se espera nas democracias modernas.',
      },
      'antiguidade-classica-roma': {
        titulo: 'Antiguidade Clássica - Roma',
        texto:
          'Roma passou por Monarquia, República e Império. Na República, havia disputas entre patrícios e plebeus por participação política, direitos e acesso às terras. A expansão territorial fortaleceu o exército, ampliou o comércio e aumentou o uso do trabalho escravizado. No Império, Roma consolidou uma grande rede administrativa, militar e comercial, mas também enfrentou crises econômicas, disputas pelo poder e pressão de povos externos. O direito romano, a língua latina, as obras públicas e a ideia de cidadania deixaram marcas duradouras na história ocidental.',
      },
    },
    quiz: [
      {
        pergunta: 'Uma característica comum de Egito e Mesopotâmia foi:',
        opcoes: ['Agricultura ligada aos rios', 'Democracia universal', 'Industrialização pesada', 'Ausência de religião'],
        resposta: 'Agricultura ligada aos rios',
      },
      {
        pergunta: 'Na Grécia Antiga, pólis significa:',
        opcoes: ['Cidade-Estado', 'Moeda romana', 'Templo egípcio', 'Exército persa'],
        resposta: 'Cidade-Estado',
      },
      {
        pergunta: 'A democracia ateniense era limitada porque excluía:',
        opcoes: ['Mulheres, estrangeiros e escravizados', 'Todos os homens livres', 'Todos os cidadãos', 'Os nascidos em Atenas'],
        resposta: 'Mulheres, estrangeiros e escravizados',
      },
      {
        pergunta: 'A República Romana foi marcada por conflitos entre:',
        opcoes: ['Patrícios e plebeus', 'Burgueses e proletários industriais', 'Servos e senhores feudais', 'Jesuítas e bandeirantes'],
        resposta: 'Patrícios e plebeus',
      },
      {
        pergunta: 'Um legado importante de Roma foi:',
        opcoes: ['Direito romano', 'Feudalismo japonês', 'Socialismo científico', 'Mercantilismo colonial'],
        resposta: 'Direito romano',
      },
    ],
  },
  {
    slug: 'alta-idade-media',
    introducao:
      'A Alta Idade Média mostra a reorganização da Europa depois da crise do Império Romano do Ocidente, com ruralização, fortalecimento da Igreja e formação do feudalismo. Também é um período de intensa circulação cultural, especialmente pelo Império Bizantino e pela expansão islâmica.',
    conceitos: ['ruralização', 'Igreja Católica', 'reinos germânicos', 'islamismo', 'feudalismo', 'descentralização política'],
    dicaEnem:
      'Evite pensar a Idade Média como período parado. O ENEM costuma cobrar trocas culturais, religião, poder local e relações de trabalho.',
    resumos: {
      'imperio-bizantino': {
        titulo: 'Império Bizantino',
        texto:
          'O Império Bizantino manteve a herança romana no Oriente, com capital em Constantinopla. Sua posição geográfica favoreceu o comércio entre Europa e Ásia, a defesa militar e o contato cultural com diferentes povos. O governo era centralizado, o imperador tinha grande autoridade política e religiosa, e o cristianismo ortodoxo se consolidou como base cultural. O Código de Justiniano reorganizou leis romanas e influenciou tradições jurídicas posteriores. No ENEM, o tema pode aparecer ligado à preservação da cultura clássica, às disputas religiosas e ao comércio no Mediterrâneo.',
      },
      'reinos-barbaros': {
        titulo: 'Reinos Bárbaros',
        texto:
          'Os reinos germânicos se formaram na Europa ocidental após a fragmentação do Império Romano do Ocidente. Eles combinaram costumes germânicos, tradições romanas e cristianismo, criando novas formas de poder local. A autoridade política tornou-se mais descentralizada, e a vida urbana perdeu força em várias regiões. Esse processo ajudou a formar as bases da sociedade medieval, marcada por vínculos pessoais, ruralização e fortalecimento da Igreja como instituição de unidade cultural.',
      },
      'imperio-dos-francos': {
        titulo: 'Império dos Francos',
        texto:
          'O Império dos Francos fortaleceu a relação entre monarquia e Igreja. Carlos Magno expandiu territórios, estimulou a administração imperial e apoiou a cultura escrita, especialmente nos mosteiros e escolas ligadas à Igreja. Sua coroação como imperador simbolizou a tentativa de reconstruir uma unidade política cristã no Ocidente. Depois de sua morte, a divisão do império contribuiu para a descentralização política europeia, favorecendo relações de dependência que se aproximam da lógica feudal.',
      },
      'civilizacao-islamica': {
        titulo: 'Civilização Islâmica',
        texto:
          'A civilização islâmica nasceu na Península Arábica no século VII e se expandiu por amplas regiões da Ásia, África e Europa. Além da religião, desenvolveu comércio, cidades, ciências, matemática, medicina, filosofia e intensa circulação cultural. As rotas comerciais islâmicas conectavam diferentes povos e contribuíam para a troca de conhecimentos. O ENEM pode cobrar esse tema mostrando que a Idade Média não foi marcada apenas pelo isolamento europeu, mas também por intercâmbios culturais importantes.',
      },
      feudalismo: {
        titulo: 'Feudalismo',
        texto:
          'O feudalismo se baseava na posse da terra, no poder local dos senhores e no trabalho servil. A sociedade era hierarquizada e marcada por relações de dependência, proteção e obrigações entre nobres, clero e camponeses. O servo não era escravizado, mas estava preso a obrigações como corveia, talha e banalidades. A economia era predominantemente agrária e de baixa circulação monetária. Para o ENEM, é importante relacionar feudalismo à descentralização política, ao poder da Igreja e às relações sociais de dependência.',
      },
    },
    quiz: [
      {
        pergunta: 'A Alta Idade Média na Europa teve como uma de suas marcas:',
        opcoes: ['Ruralização da sociedade', 'Industrialização urbana', 'Democracia liberal', 'Colonização da América'],
        resposta: 'Ruralização da sociedade',
      },
      {
        pergunta: 'A capital do Império Bizantino era:',
        opcoes: ['Constantinopla', 'Atenas', 'Paris', 'Lisboa'],
        resposta: 'Constantinopla',
      },
      {
        pergunta: 'No feudalismo, a economia estava fortemente ligada:',
        opcoes: ['À terra e ao trabalho servil', 'Ao trabalho assalariado fabril', 'À bolsa de valores', 'Ao comércio oceânico americano'],
        resposta: 'À terra e ao trabalho servil',
      },
      {
        pergunta: 'A civilização islâmica se destacou também por:',
        opcoes: ['Circulação comercial e cultural', 'Isolamento total da Europa', 'Ausência de cidades', 'Fim das ciências'],
        resposta: 'Circulação comercial e cultural',
      },
      {
        pergunta: 'A Igreja Católica na Idade Média:',
        opcoes: ['Tinha forte influência social e política', 'Não participava da vida cultural', 'Era proibida na Europa', 'Foi criada na Revolução Francesa'],
        resposta: 'Tinha forte influência social e política',
      },
    ],
  },
  {
    slug: 'baixa-idade-media',
    introducao:
      'A Baixa Idade Média foi marcada por transformações econômicas, urbanas, culturais e sociais que alteraram a estrutura feudal. O crescimento do comércio, das cidades e das universidades conviveu com crises, guerras, fome e epidemias.',
    conceitos: ['cruzadas', 'renascimento comercial', 'burguesia', 'crise do século XIV', 'monarquias nacionais'],
    dicaEnem:
      'Observe como o crescimento do comércio e das cidades enfraqueceu parte da ordem feudal e abriu caminho para mudanças da Idade Moderna.',
    resumos: {
      cruzadas: {
        titulo: 'Cruzadas',
        texto:
          'As Cruzadas foram expedições militares e religiosas organizadas por cristãos europeus entre os séculos XI e XIII, com o objetivo declarado de conquistar ou controlar áreas consideradas sagradas no Oriente. Além do aspecto religioso, envolveram interesses econômicos, territoriais e políticos. Elas ampliaram contatos entre Europa, Oriente Médio e Mediterrâneo, estimularam rotas comerciais e favoreceram o crescimento de cidades mercantis italianas. O ENEM pode cobrar as Cruzadas não apenas como conflito religioso, mas como parte de um processo de expansão econômica e cultural.',
      },
      'renascimento-comercial-e-urbano': {
        titulo: 'Renascimento Comercial e Urbano',
        texto:
          'A partir da Baixa Idade Média, o comércio europeu ganhou força com feiras, rotas terrestres e marítimas, circulação de moedas e crescimento das cidades. Surgiu uma burguesia ligada ao comércio e ao artesanato urbano, que passou a ter interesses diferentes da nobreza feudal. As cidades medievais se tornaram espaços de troca, produção e maior mobilidade social. Esse processo não acabou imediatamente com o feudalismo, mas enfraqueceu o isolamento rural e ajudou a preparar transformações econômicas posteriores.',
      },
      'crise-do-seculo-xiv': {
        titulo: 'Crise do Século XIV',
        texto:
          'O século XIV foi marcado por uma forte crise na Europa, envolvendo fome, guerras, revoltas camponesas e a Peste Negra. A redução da população abalou a produção agrícola, a oferta de trabalho e as relações servis. Muitos camponeses passaram a questionar obrigações feudais, enquanto senhores tentavam manter antigos privilégios. A crise acelerou mudanças econômicas e sociais, contribuindo para o enfraquecimento do feudalismo e para o fortalecimento gradual das monarquias.',
      },
      'monarquias-nacionais': {
        titulo: 'Monarquias Nacionais',
        texto:
          'As monarquias nacionais se fortaleceram com a centralização do poder nas mãos dos reis, a formação de exércitos permanentes, a cobrança de impostos e a criação de burocracias administrativas. Esse processo contou, muitas vezes, com o apoio da burguesia, interessada em unificar moedas, leis e mercados. A centralização política foi fundamental para a formação dos Estados modernos e para a expansão marítima europeia.',
      },
    },
    quiz: [
      {
        pergunta: 'As Cruzadas também contribuíram para:',
        opcoes: ['Ampliar contatos comerciais e culturais', 'Encerrar o comércio europeu', 'Eliminar as cidades', 'Criar a indústria moderna'],
        resposta: 'Ampliar contatos comerciais e culturais',
      },
      {
        pergunta: 'O crescimento das cidades medievais esteve ligado ao:',
        opcoes: ['Renascimento comercial', 'Fim da agricultura', 'Isolamento total da Europa', 'Desaparecimento da burguesia'],
        resposta: 'Renascimento comercial',
      },
      {
        pergunta: 'A Peste Negra fez parte da:',
        opcoes: ['Crise do século XIV', 'Revolução Industrial', 'Colonização da América', 'Guerra Fria'],
        resposta: 'Crise do século XIV',
      },
      {
        pergunta: 'As monarquias nacionais se caracterizaram por:',
        opcoes: ['Centralização do poder real', 'Ausência de impostos', 'Fim dos reis', 'Volta ao nomadismo'],
        resposta: 'Centralização do poder real',
      },
      {
        pergunta: 'A burguesia medieval estava principalmente ligada ao:',
        opcoes: ['Comércio e artesanato urbano', 'Trabalho servil obrigatório', 'Poder exclusivo da Igreja', 'Nomadismo agrícola'],
        resposta: 'Comércio e artesanato urbano',
      },
    ],
  },
  {
    slug: 'idade-moderna',
    introducao:
      'A Idade Moderna foi um período de grandes transformações na Europa e no mundo atlântico. Ela envolve Renascimento, Reforma, absolutismo, mercantilismo, expansão marítima e colonização. É uma fase importante para entender a formação do capitalismo comercial e dos Estados modernos.',
    conceitos: ['Renascimento', 'Reforma Protestante', 'absolutismo', 'mercantilismo', 'expansão marítima', 'colonização'],
    dicaEnem:
      'Relacione cultura, economia e poder: a expansão marítima, o absolutismo e o mercantilismo fazem parte de um mesmo contexto de fortalecimento dos Estados europeus.',
    resumos: {
      'renascimento-cultural': {
        titulo: 'Renascimento Cultural',
        texto:
          'O Renascimento Cultural foi um movimento intelectual e artístico que valorizou o humanismo, o racionalismo, a observação da natureza e a retomada de referências da Antiguidade Clássica. Ele não significou abandono total da religião, mas ampliou o interesse pelo ser humano, pela ciência, pela arte e pela crítica. O crescimento das cidades, o mecenato e o contato com novas ideias favoreceram esse movimento. No ENEM, o tema costuma aparecer ligado à mudança de mentalidade e à valorização da razão.',
      },
      'reforma-protestante-e-contrarreforma': {
        titulo: 'Reforma Protestante e Contrarreforma',
        texto:
          'A Reforma Protestante questionou práticas da Igreja Católica, como a venda de indulgências, e resultou na formação de novas religiões cristãs. Martinho Lutero defendeu a salvação pela fé e a leitura direta da Bíblia. A Contrarreforma foi a reação católica, com medidas como o Concílio de Trento, a atuação dos jesuítas e o fortalecimento da disciplina interna da Igreja. O tema envolve religião, política, imprensa, educação e disputas de poder na Europa moderna.',
      },
      absolutismo: {
        titulo: 'Absolutismo',
        texto:
          'O absolutismo foi uma forma de governo em que o rei concentrava grande poder político, militar, jurídico e fiscal. Ele se apoiava na nobreza, na burocracia, no exército e em teorias que justificavam a autoridade real. Apesar do nome, o poder do rei não era ilimitado em todos os sentidos, pois dependia de alianças e negociações. O absolutismo está ligado à formação dos Estados modernos e à centralização política europeia.',
      },
      mercantilismo: {
        titulo: 'Mercantilismo',
        texto:
          'O mercantilismo foi um conjunto de práticas econômicas adotadas por Estados europeus entre os séculos XV e XVIII. Defendia o acúmulo de metais preciosos, a balança comercial favorável, o protecionismo e o controle colonial. As colônias eram vistas como fornecedoras de matérias-primas e consumidoras de produtos metropolitanos. Esse sistema fortaleceu a expansão marítima, o comércio atlântico e a colonização da América.',
      },
      'expansao-maritima': {
        titulo: 'Expansão Marítima',
        texto:
          'A expansão marítima europeia foi impulsionada por interesses comerciais, busca por metais preciosos, novas rotas para o Oriente, fortalecimento dos Estados e avanços técnicos na navegação. Portugal e Espanha foram pioneiros por sua posição geográfica, experiência náutica e centralização política. Esse processo conectou continentes, ampliou o comércio mundial e também gerou colonização, escravização, violência e exploração de povos indígenas e africanos.',
      },
      'civilizacoes-pre-colombianas': {
        titulo: 'Civilizações Pré-Colombianas',
        texto:
          'Antes da chegada dos europeus, a América possuía sociedades diversas e complexas, como maias, astecas e incas. Elas desenvolveram cidades, agricultura, calendários, conhecimentos astronômicos, sistemas de tributos e formas próprias de organização política e religiosa. Estudar essas civilizações ajuda a combater a ideia equivocada de que a América era um espaço vazio ou sem história antes da colonização europeia.',
      },
    },
    quiz: [
      {
        pergunta: 'O Renascimento Cultural valorizou principalmente:',
        opcoes: ['Humanismo e razão', 'Fechamento das cidades', 'Fim da arte', 'Ausência de ciência'],
        resposta: 'Humanismo e razão',
      },
      {
        pergunta: 'A Reforma Protestante questionou práticas da:',
        opcoes: ['Igreja Católica', 'Revolução Francesa', 'ONU', 'República Romana'],
        resposta: 'Igreja Católica',
      },
      {
        pergunta: 'O absolutismo está ligado à:',
        opcoes: ['Centralização do poder real', 'Divisão total do poder feudal', 'Democracia direta ateniense', 'Ausência de Estado'],
        resposta: 'Centralização do poder real',
      },
      {
        pergunta: 'O mercantilismo defendia:',
        opcoes: ['Balança comercial favorável', 'Livre concorrência total', 'Fim das colônias', 'Ausência de intervenção estatal'],
        resposta: 'Balança comercial favorável',
      },
      {
        pergunta: 'As civilizações pré-colombianas mostram que:',
        opcoes: ['A América tinha sociedades complexas antes dos europeus', 'A América não tinha história', 'Só existiam grupos nômades', 'Não havia agricultura no continente'],
        resposta: 'A América tinha sociedades complexas antes dos europeus',
      },
    ],
  },
  {
    slug: 'brasil-colonia',
    introducao:
      'Brasil Colônia aborda a ocupação portuguesa, a economia açucareira, a mineração, a escravização africana, os povos indígenas, as revoltas coloniais e a relação de dependência entre colônia e metrópole. É um dos conteúdos mais cobrados por permitir ligação com economia, cultura, sociedade e desigualdades históricas.',
    conceitos: ['colonização', 'plantation', 'escravidão', 'pacto colonial', 'mineração', 'revoltas nativistas'],
    dicaEnem:
      'No Brasil Colônia, pense sempre na relação entre exploração econômica, trabalho escravizado, concentração de terras e controle metropolitano.',
    resumos: {
      'periodo-pre-colonial': {
        titulo: 'Período Pré-Colonial',
        texto:
          'O período pré-colonial corresponde às primeiras décadas após 1500, quando Portugal ainda não havia estruturado uma colonização efetiva do território. A principal atividade econômica foi a exploração do pau-brasil, realizada com uso de mão de obra indígena por meio do escambo. Nesse momento, o interesse português era mais comercial do que de povoamento. A ameaça de invasões estrangeiras e a necessidade de garantir a posse da terra levaram Portugal a iniciar a colonização de forma mais organizada.',
      },
      'economia-acucareira': {
        titulo: 'Economia Açucareira',
        texto:
          'A economia açucareira foi organizada principalmente no Nordeste, baseada no latifúndio, na monocultura, na produção para exportação e no trabalho escravizado. Esse modelo é conhecido como plantation. Os engenhos reuniam produção agrícola, processamento da cana e hierarquias sociais rígidas. A produção de açúcar conectava Brasil, Portugal, África e Europa, formando uma economia atlântica baseada na exploração colonial e no tráfico de pessoas escravizadas.',
      },
      'uniao-iberica-e-invasoes-holandesas': {
        titulo: 'União Ibérica e Invasões Holandesas',
        texto:
          'A União Ibérica ocorreu quando Portugal e Espanha ficaram sob o mesmo rei, entre 1580 e 1640. Nesse contexto, inimigos da Espanha passaram a atacar áreas portuguesas. Os holandeses invadiram regiões do Nordeste açucareiro e chegaram a controlar Pernambuco por um período. A administração de Maurício de Nassau estimulou obras urbanas, ciência e certa tolerância religiosa, mas os conflitos econômicos com senhores de engenho contribuíram para a Insurreição Pernambucana.',
      },
      'economia-mineradora': {
        titulo: 'Economia Mineradora',
        texto:
          'A mineração ganhou força no século XVIII, principalmente em Minas Gerais, Goiás e Mato Grosso. Ela deslocou o eixo econômico para o interior, estimulou a urbanização e aumentou a fiscalização portuguesa. A cobrança do quinto, a derrama e o controle sobre a circulação de ouro geraram tensões. A mineração também manteve o trabalho escravizado e aprofundou desigualdades sociais. O tema costuma aparecer no ENEM ligado à interiorização, ao controle fiscal e às revoltas coloniais.',
      },
      'revoltas-nativistas': {
        titulo: 'Revoltas Nativistas',
        texto:
          'As revoltas nativistas foram movimentos coloniais que expressavam tensões locais, mas não defendiam necessariamente a independência do Brasil. Elas envolveram disputas econômicas, conflitos entre colonos e autoridades metropolitanas, abastecimento, impostos e privilégios comerciais. Exemplos importantes são a Revolta de Beckman, a Guerra dos Mascates e a Revolta de Vila Rica. O ENEM pode cobrar esses movimentos como sinais de crise no sistema colonial.',
      },
      'movimentos-emancipacionistas': {
        titulo: 'Movimentos Emancipacionistas',
        texto:
          'Os movimentos emancipacionistas questionavam de forma mais direta o domínio português e foram influenciados por ideias iluministas, pela independência dos Estados Unidos e pela Revolução Francesa. A Inconfidência Mineira teve participação de elites locais insatisfeitas com a cobrança de impostos. A Conjuração Baiana teve caráter mais popular, defendendo igualdade, república e fim da escravidão. Comparar esses movimentos ajuda a perceber diferenças sociais e políticas dentro da crise colonial.',
      },
      'independencia-do-brasil': {
        titulo: 'Independência do Brasil',
        texto:
          'A Independência do Brasil resultou de um processo político ligado à crise do sistema colonial, à vinda da família real portuguesa em 1808, à abertura dos portos e às tensões entre elites brasileiras e Cortes portuguesas. O processo manteve a monarquia, a escravidão e grande parte das estruturas sociais anteriores. Por isso, o ENEM costuma tratar a independência não como ruptura total, mas como mudança política com muitas permanências sociais e econômicas.',
      },
    },
    quiz: [
      {
        pergunta: 'A economia açucareira colonial foi baseada principalmente em:',
        opcoes: ['Latifúndio, monocultura e escravidão', 'Pequena propriedade familiar', 'Trabalho assalariado industrial', 'Produção apenas para consumo local'],
        resposta: 'Latifúndio, monocultura e escravidão',
      },
      {
        pergunta: 'A mineração no século XVIII contribuiu para:',
        opcoes: ['Interiorização e urbanização', 'Fim da escravidão', 'Desaparecimento dos impostos', 'Isolamento do Brasil'],
        resposta: 'Interiorização e urbanização',
      },
      {
        pergunta: 'As revoltas nativistas geralmente expressavam:',
        opcoes: ['Tensões locais no sistema colonial', 'Defesa imediata da industrialização', 'Apoio total à metrópole', 'Fim da economia colonial'],
        resposta: 'Tensões locais no sistema colonial',
      },
      {
        pergunta: 'A Conjuração Baiana se diferenciou por ter:',
        opcoes: ['Maior participação popular e defesa de igualdade', 'Apoio exclusivo da Coroa portuguesa', 'Defesa da manutenção total da escravidão', 'Objetivo de restaurar o feudalismo'],
        resposta: 'Maior participação popular e defesa de igualdade',
      },
      {
        pergunta: 'A Independência do Brasil manteve como permanência importante:',
        opcoes: ['A escravidão', 'A república democrática', 'O voto universal', 'A reforma agrária'],
        resposta: 'A escravidão',
      },
    ],
  },
  {
    slug: 'brasil-imperio',
    introducao:
      'Brasil Império estuda o período monárquico após a independência, incluindo Primeiro Reinado, Período Regencial e Segundo Reinado. Os temas centrais são centralização política, revoltas, escravidão, economia cafeeira, construção do Estado nacional e crise da monarquia.',
    conceitos: ['monarquia', 'Constituição de 1824', 'regências', 'café', 'abolicionismo', 'crise imperial'],
    dicaEnem:
      'Observe as permanências da independência: o Brasil mudou politicamente, mas manteve escravidão, concentração de terras e exclusão social.',
    resumos: {
      'primeiro-reinado': {
        titulo: 'Primeiro Reinado',
        texto:
          'O Primeiro Reinado foi marcado pela tentativa de consolidar o Estado brasileiro após a independência. Dom Pedro I enfrentou conflitos políticos, autoritarismo, crise econômica e oposição de diferentes grupos. A Constituição de 1824 criou o Poder Moderador, fortalecendo a autoridade do imperador. A Confederação do Equador expressou resistência ao centralismo imperial. A abdicação de Dom Pedro I, em 1831, abriu caminho para o Período Regencial.',
      },
      'periodo-regencial': {
        titulo: 'Período Regencial',
        texto:
          'O Período Regencial foi uma fase de instabilidade política, pois o herdeiro do trono ainda era menor de idade. Houve disputas entre projetos centralizadores e descentralizadores, além de revoltas em várias regiões, como Cabanagem, Balaiada, Sabinada, Farroupilha e Revolta dos Malês. Essas revoltas revelam tensões sociais, regionais, raciais e econômicas. O ENEM costuma cobrar o período como momento de disputa pela construção do Estado nacional.',
      },
      'segundo-reinado': {
        titulo: 'Segundo Reinado',
        texto:
          'O Segundo Reinado, sob Dom Pedro II, foi marcado por estabilidade política relativa, crescimento da economia cafeeira, expansão ferroviária, imigração, Guerra do Paraguai e crise gradual da escravidão. O café fortaleceu elites do Sudeste e ampliou a integração com o mercado externo. A partir da segunda metade do século XIX, o movimento abolicionista ganhou força, e a monarquia passou a perder apoio de militares, republicanos, setores da Igreja e proprietários insatisfeitos com a abolição.',
      },
    },
    quiz: [
      {
        pergunta: 'A Constituição de 1824 criou um poder que fortalecia o imperador. Qual era?',
        opcoes: ['Poder Moderador', 'Poder Trabalhista', 'Poder Popular', 'Poder Federalista'],
        resposta: 'Poder Moderador',
      },
      {
        pergunta: 'O Período Regencial foi marcado por:',
        opcoes: ['Revoltas e instabilidade política', 'Fim de todos os conflitos', 'Industrialização completa', 'República presidencialista'],
        resposta: 'Revoltas e instabilidade política',
      },
      {
        pergunta: 'A principal economia de exportação do Segundo Reinado foi:',
        opcoes: ['Café', 'Petróleo', 'Soja mecanizada', 'Automóveis'],
        resposta: 'Café',
      },
      {
        pergunta: 'A crise da monarquia envolveu o desgaste com:',
        opcoes: ['Militares, republicanos e questão abolicionista', 'Somente povos vikings', 'Apenas cidades gregas', 'Exclusivamente o Império Bizantino'],
        resposta: 'Militares, republicanos e questão abolicionista',
      },
      {
        pergunta: 'Uma permanência importante após a independência foi:',
        opcoes: ['Manutenção da escravidão', 'Voto universal imediato', 'Reforma agrária ampla', 'Fim das elites rurais'],
        resposta: 'Manutenção da escravidão',
      },
    ],
  },
  {
    slug: 'brasil-republica',
    introducao:
      'Brasil República reúne temas como República da Espada, República Oligárquica, Era Vargas, governos populistas, Ditadura Militar e Nova República. É um conteúdo muito cobrado por permitir relação com cidadania, democracia, autoritarismo, economia e movimentos sociais.',
    conceitos: ['república', 'coronelismo', 'voto de cabresto', 'Era Vargas', 'populismo', 'ditadura', 'redemocratização'],
    dicaEnem:
      'Nas questões de República, observe quem participa da política e quem fica excluído. O ENEM gosta de cobrar cidadania, direitos sociais, autoritarismo e democracia.',
    resumos: {
      'republica-da-espada': {
        titulo: 'República da Espada',
        texto:
          'A República da Espada corresponde aos primeiros governos republicanos, liderados por militares como Deodoro da Fonseca e Floriano Peixoto. Foi um período de consolidação do novo regime, conflitos políticos, crise econômica e disputas sobre o modelo de república. A Constituição de 1891 instituiu o federalismo, o presidencialismo e a separação entre Igreja e Estado, mas a participação política continuou limitada.',
      },
      'republica-das-oligarquias': {
        titulo: 'República das Oligarquias',
        texto:
          'A República das Oligarquias foi marcada pelo domínio político das elites rurais, especialmente ligadas ao café. O coronelismo, o voto de cabresto e as fraudes eleitorais limitavam a participação popular. A política dos governadores e a influência de São Paulo e Minas Gerais organizaram a chamada política do café com leite. Apesar da aparência institucional republicana, grande parte da população permanecia excluída da cidadania política.',
      },
      'movimentos-sociais-na-republica-oligarquica': {
        titulo: 'Movimentos Sociais na República Oligárquica',
        texto:
          'Durante a República Oligárquica, diversos movimentos expressaram tensões sociais e exclusão. Canudos e Contestado envolveram populações pobres, religiosidade popular, disputa por terras e repressão do Estado. A Revolta da Vacina mostrou conflitos entre reforma urbana autoritária, saúde pública e população pobre. O movimento operário cresceu com a urbanização e a imigração, reivindicando melhores condições de trabalho.',
      },
      'era-vargas': {
        titulo: 'Era Vargas',
        texto:
          'A Era Vargas começou em 1930 e marcou forte centralização política, intervenção do Estado na economia, industrialização e criação de direitos trabalhistas. Vargas construiu uma imagem de líder próximo aos trabalhadores, mas também governou de forma autoritária, especialmente no Estado Novo. A CLT, a propaganda política, o nacionalismo econômico e o controle sobre sindicatos são temas recorrentes. O ENEM costuma explorar a ambiguidade entre direitos sociais e autoritarismo.',
      },
      'regime-militar': {
        titulo: 'Regime Militar',
        texto:
          'O Regime Militar começou em 1964 e foi marcado por autoritarismo, censura, repressão política, suspensão de direitos e controle das instituições. O AI-5 ampliou a perseguição a opositores e restringiu liberdades. Ao mesmo tempo, o governo investiu em obras e promoveu crescimento econômico em alguns períodos, conhecido como milagre econômico, acompanhado de concentração de renda e aumento da dívida. A redemocratização foi gradual e resultou na Constituição de 1988.',
      },
      'nova-republica': {
        titulo: 'Nova República',
        texto:
          'A Nova República começa com o processo de redemocratização após a Ditadura Militar. A Constituição de 1988 ampliou direitos civis, políticos e sociais, sendo chamada de Constituição Cidadã. O período envolve eleições diretas, reorganização partidária, lutas sociais, planos econômicos, impeachment, debates sobre desigualdade e fortalecimento das instituições democráticas. Para o ENEM, é essencial relacionar esse período à cidadania e aos direitos previstos na Constituição.',
      },
    },
    quiz: [
      {
        pergunta: 'A República Oligárquica foi marcada por:',
        opcoes: ['Coronelismo e voto de cabresto', 'Voto universal pleno', 'Fim das elites rurais', 'Socialismo no campo'],
        resposta: 'Coronelismo e voto de cabresto',
      },
      {
        pergunta: 'A Era Vargas combinou:',
        opcoes: ['Direitos trabalhistas e centralização autoritária', 'Ausência total do Estado', 'Fim da indústria', 'Democracia direta ateniense'],
        resposta: 'Direitos trabalhistas e centralização autoritária',
      },
      {
        pergunta: 'O AI-5 está associado ao:',
        opcoes: ['Aumento da repressão na Ditadura Militar', 'Fim da censura', 'Início da monarquia', 'Período colonial'],
        resposta: 'Aumento da repressão na Ditadura Militar',
      },
      {
        pergunta: 'A Constituição de 1988 é conhecida como:',
        opcoes: ['Constituição Cidadã', 'Carta Imperial', 'Lei Áurea', 'Código de Justiniano'],
        resposta: 'Constituição Cidadã',
      },
      {
        pergunta: 'Canudos e Contestado revelam:',
        opcoes: ['Conflitos sociais e repressão do Estado', 'Ausência de desigualdade', 'Apoio total das elites aos pobres', 'Industrialização completa'],
        resposta: 'Conflitos sociais e repressão do Estado',
      },
    ],
  },
  {
    slug: 'idade-contemporanea',
    introducao:
      'A Idade Contemporânea envolve revoluções políticas, industrialização, imperialismo, guerras mundiais, Guerra Fria, descolonização e transformações sociais. É um período essencial para entender democracia, capitalismo, socialismo, nacionalismos, conflitos globais e direitos humanos.',
    conceitos: ['Revolução Francesa', 'Revolução Industrial', 'imperialismo', 'guerras mundiais', 'Guerra Fria', 'descolonização'],
    dicaEnem:
      'O ENEM costuma cobrar a Idade Contemporânea conectando economia, ideologias, conflitos, tecnologia e impactos sociais.',
    resumos: {
      'revolucao-francesa': {
        titulo: 'Revolução Francesa',
        texto:
          'A Revolução Francesa foi um marco político do mundo contemporâneo, pois questionou privilégios do Antigo Regime e difundiu ideias de cidadania, igualdade jurídica e soberania popular. A crise econômica, a desigualdade social e a influência iluminista contribuíram para o processo revolucionário. Apesar de defender liberdade e igualdade, a revolução teve fases de conflito, radicalização e disputas entre grupos sociais. Seus impactos influenciaram movimentos políticos em várias partes do mundo.',
      },
      'revolucao-industrial': {
        titulo: 'Revolução Industrial',
        texto:
          'A Revolução Industrial transformou a produção com máquinas, fábricas, divisão do trabalho e uso de novas fontes de energia. Ela consolidou o capitalismo industrial, ampliou a urbanização e criou novas classes sociais, como burguesia industrial e proletariado. As condições de trabalho eram duras, com longas jornadas, baixos salários e exploração de mulheres e crianças. O ENEM costuma relacionar esse tema a trabalho, tecnologia, desigualdade e organização dos trabalhadores.',
      },
      imperialismo: {
        titulo: 'Neocolonialismo e Imperialismo',
        texto:
          'No século XIX, potências europeias expandiram seu domínio sobre áreas da África e da Ásia em busca de matérias-primas, mercados consumidores, áreas de investimento e prestígio político. O imperialismo foi justificado por discursos racistas e pela ideia de missão civilizadora. Na prática, gerou exploração econômica, violência, fronteiras artificiais e impactos duradouros nas sociedades colonizadas. O tema é importante para entender desigualdades internacionais e conflitos posteriores.',
      },
      'primeira-guerra-mundial': {
        titulo: 'Primeira Guerra Mundial',
        texto:
          'A Primeira Guerra Mundial foi resultado de tensões imperialistas, nacionalismos, corrida armamentista e sistemas de alianças. O conflito envolveu trincheiras, novas armas e enorme destruição humana. Ao final, o Tratado de Versalhes impôs punições à Alemanha, alimentando ressentimentos que contribuiriam para instabilidades futuras. A guerra também enfraqueceu impérios e alterou o equilíbrio político europeu.',
      },
      'segunda-guerra-mundial': {
        titulo: 'Segunda Guerra Mundial',
        texto:
          'A Segunda Guerra Mundial foi marcada pela expansão nazifascista, pelo totalitarismo, pelo Holocausto e por conflitos em escala global. Suas causas envolvem a crise do pós-Primeira Guerra, o Tratado de Versalhes, a crise de 1929, o expansionismo e a ascensão de regimes autoritários. O fim da guerra resultou na criação da ONU, na divisão geopolítica entre Estados Unidos e União Soviética e no início da Guerra Fria.',
      },
      'guerra-fria': {
        titulo: 'Guerra Fria',
        texto:
          'A Guerra Fria foi a disputa política, ideológica, econômica e militar entre Estados Unidos e União Soviética após a Segunda Guerra Mundial. O conflito não gerou guerra direta entre as superpotências, mas envolveu corrida armamentista, corrida espacial, propaganda, espionagem e guerras indiretas. Capitalismo e socialismo eram apresentados como modelos opostos. O ENEM pode cobrar esse tema a partir de mapas, charges, discursos e conflitos como Coreia, Vietnã e Cuba.',
      },
      'descolonizacao-afro-asiatica': {
        titulo: 'Descolonização Afro-Asiática',
        texto:
          'A descolonização afro-asiática ocorreu principalmente após a Segunda Guerra Mundial, quando colônias na África e na Ásia conquistaram independência. O enfraquecimento das potências europeias, o crescimento de movimentos nacionalistas e o contexto da Guerra Fria contribuíram para esse processo. Apesar da independência política, muitos países enfrentaram dependência econômica, fronteiras artificiais, conflitos internos e influência externa. O tema é importante para entender o mundo pós-colonial.',
      },
    },
    quiz: [
      {
        pergunta: 'A Revolução Francesa questionou principalmente:',
        opcoes: ['Privilégios do Antigo Regime', 'Direitos de cidadania', 'A ideia de igualdade jurídica', 'A soberania popular'],
        resposta: 'Privilégios do Antigo Regime',
      },
      {
        pergunta: 'A Revolução Industrial consolidou:',
        opcoes: ['O capitalismo industrial', 'O feudalismo rural', 'O nomadismo', 'A ausência de fábricas'],
        resposta: 'O capitalismo industrial',
      },
      {
        pergunta: 'O imperialismo do século XIX envolveu:',
        opcoes: ['Domínio europeu sobre África e Ásia', 'Fim da exploração colonial', 'Igualdade entre metrópoles e colônias', 'Ausência de racismo'],
        resposta: 'Domínio europeu sobre África e Ásia',
      },
      {
        pergunta: 'A Guerra Fria foi marcada pela disputa entre:',
        opcoes: ['Estados Unidos e União Soviética', 'Roma e Cartago', 'Portugal e Espanha no século XV', 'Egito e Mesopotâmia'],
        resposta: 'Estados Unidos e União Soviética',
      },
      {
        pergunta: 'A descolonização afro-asiática ganhou força principalmente após:',
        opcoes: ['A Segunda Guerra Mundial', 'A Pré-História', 'A Revolução Neolítica', 'A queda de Roma'],
        resposta: 'A Segunda Guerra Mundial',
      },
    ],
  },
]

export function getHistoriaEstudo(slug: string) {
  return historiaEstudos.find((estudo) => estudo.slug === slug)
}

export function getHistoriaResumoFallback(topico: string): HistoriaResumo {
  return {
    titulo: topico,
    texto: `${topico} deve ser estudado como parte de um processo histórico. ${respostaProcessoHistorico} Observe os grupos envolvidos, os conflitos, a economia, a cultura, as disputas de poder e as mudanças que permaneceram nos períodos seguintes.`,
  }
}

export function getHistoriaQuizFallback(
  titulo: string,
  topicos: string[],
): HistoriaQuizPergunta[] {
  const primeiroTopico = topicos[0] ?? titulo
  const segundoTopico = topicos[1] ?? titulo

  return [
    {
      pergunta: `Qual é uma boa forma de estudar ${titulo} para o ENEM?`,
      opcoes: [
        'Relacionar causas, consequências e contexto histórico',
        'Decorar apenas uma data sem contexto',
        'Ignorar os grupos sociais envolvidos',
        'Tratar o tema como fato isolado',
      ],
      resposta: 'Relacionar causas, consequências e contexto histórico',
    },
    {
      pergunta: `${primeiroTopico} deve ser entendido principalmente como:`,
      opcoes: [
        'Parte de um processo histórico mais amplo',
        'Um acontecimento sem relação com a sociedade',
        'Um tema sem fontes ou interpretações',
        'Uma curiosidade fora do conteúdo',
      ],
      resposta: 'Parte de um processo histórico mais amplo',
    },
    {
      pergunta: `Ao analisar ${segundoTopico}, o estudante deve observar:`,
      opcoes: [
        'Poder, economia, cultura e conflitos sociais',
        'Apenas nomes de personagens',
        'Somente datas comemorativas',
        'A ausência de mudanças históricas',
      ],
      resposta: 'Poder, economia, cultura e conflitos sociais',
    },
    {
      pergunta: `Em questões sobre ${titulo}, uma alternativa forte costuma:`,
      opcoes: [
        'Conectar o tema ao contexto do período',
        'Apresentar anacronismos evidentes',
        'Misturar períodos sem explicar relações',
        'Negar conflitos e disputas sociais',
      ],
      resposta: 'Conectar o tema ao contexto do período',
    },
    {
      pergunta: `Uma habilidade importante para revisar ${titulo} é:`,
      opcoes: [
        'Comparar permanências e rupturas',
        'Eliminar a interpretação histórica',
        'Evitar leitura de fontes',
        'Memorizar respostas sem entender',
      ],
      resposta: 'Comparar permanências e rupturas',
    },
  ]
}
