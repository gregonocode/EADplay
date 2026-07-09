# EADPlay — Especificação do Aplicativo de Estudos ENEM 2026

## Objetivo

Criar a área do aplicativo em `app/aplicativo`, onde o usuário encontra uma lista de matérias e conteúdos para estudar para o ENEM 2026.

A experiência deve parecer um aplicativo de estudos simples e direto, com visual moderno. Cada conteúdo listado deve funcionar como uma aula curta. Na lista, cada item pode ter um ícone de play, semelhante a uma playlist de música. Ao clicar, o usuário entra em uma página de estudo com textos, títulos e subtítulos, parecida com um mini blog.

Depois de estudar o conteúdo, o usuário deve fazer um quiz sobre aquele assunto.

---

## Rotas principais

### 1. Lista do aplicativo

Rota:

```txt
app/aplicativo/page.tsx
```

Função:

- Mostrar lista de matérias.
- Mostrar conteúdos dentro de cada matéria.
- Cada conteúdo deve ter um botão/ícone de play.
- Ao clicar no conteúdo, levar para a página de estudo.

Exemplo de navegação:

```txt
/app/aplicativo
/app/aplicativo/historia/idade-antiga
/app/aplicativo/geografia/geografia-fisica
/app/aplicativo/biologia/citologia-estudo-da-celula
```

---

### 2. Página de estudo

Rota sugerida:

```txt
app/aplicativo/[materia]/[slug]/page.tsx
```

Função:

- Mostrar o título do conteúdo.
- Mostrar subtópicos do conteúdo.
- Gerar texto explicativo para cada subtópico.
- Caso o conteúdo fique muito grande, dividir em páginas internas.
- Usar paginação simples: `Anterior` e `Próximo`.
- No final da última página, mostrar o botão `Começar quiz`.

Exemplo:

Título: `Idade Antiga`

Subtópicos:

- Antiguidade Oriental
- Antiguidade Clássica - Grécia
- Antiguidade Clássica - Roma

A página pode explicar cada subtópico em blocos curtos.

---

### 3. Quiz do conteúdo

Rota sugerida:

```txt
app/aplicativo/[materia]/[slug]/quiz/page.tsx
```

Função:

- Mostrar quiz baseado no conteúdo estudado.
- O quiz pode ter de 3 a 5 perguntas por conteúdo.
- Cada pergunta deve ter alternativas.
- Ao clicar em uma alternativa, pode avançar para a próxima pergunta.
- No final, mostrar tela de resultado.

---

## Regra de resultado do quiz

### Se o usuário errar alguma pergunta

Mostrar uma tela com fundo vermelho ou tom vermelho claro.

Texto exemplo:

```txt
Você errou 3 de 5 perguntas.
```

Botões:

```txt
Voltar a estudar
Voltar ao início
```

Ação dos botões:

- `Voltar a estudar`: volta para a página do conteúdo estudado.
- `Voltar ao início`: volta para `/app/aplicativo` ou `/aplicativo`, conforme a estrutura final do projeto.

---

### Se o usuário acertar todas as perguntas

Mostrar uma tela com fundo verde ou tom verde claro.

Texto exemplo:

```txt
Parabéns! Você acertou todas as perguntas.
```

Botão:

```txt
Voltar ao início
```

Ação:

- Levar para a lista inicial em `/app/aplicativo` ou `/aplicativo`, conforme a estrutura final do projeto.

---

## Estrutura de dados sugerida

Criar um arquivo para centralizar os conteúdos:

```txt
data/eadplay-conteudos.ts
```

Formato sugerido:

```ts
export type EadPlaySubtopico = {
  titulo: string
  slug: string
}

export type EadPlayConteudo = {
  materia: string
  slugMateria: string
  titulo: string
  slug: string
  subtopicos: EadPlaySubtopico[]
}

export const eadplayConteudos: EadPlayConteudo[] = [
  {
    materia: 'História',
    slugMateria: 'historia',
    titulo: 'Idade Antiga',
    slug: 'idade-antiga',
    subtopicos: [
      { titulo: 'Antiguidade Oriental', slug: 'antiguidade-oriental' },
      { titulo: 'Antiguidade Clássica - Grécia', slug: 'antiguidade-classica-grecia' },
      { titulo: 'Antiguidade Clássica - Roma', slug: 'antiguidade-classica-roma' },
    ],
  },
]
```

---

## Checklist de conteúdos extraído das imagens

## História

### Introdução

- Linha do tempo

### Pré-História

- Pré-História

### Idade Antiga

- Antiguidade Oriental
- Antiguidade Clássica - Grécia
- Antiguidade Clássica - Roma

### Alta Idade Média

- Império Bizantino
- Reinos Bárbaros
- Império dos Francos
- Civilização Islâmica
- Feudalismo

### Baixa Idade Média

- Cruzadas
- Renascimento Comercial e Urbano
- Crise do Século XIV
- Monarquias Nacionais
- Aspectos Culturais

### Idade Moderna

- Renascimento Cultural
- Reforma Protestante e Contrarreforma
- Absolutismo
- Mercantilismo
- Expansão Marítima
- Civilizações Pré-Colombianas
- Colonização Espanhola na América
- Colonização Inglesa na América
- Revoluções Inglesas do Século XVII
- Iluminismo Marquês de Pombal
- Revolução Industrial
- EUA - Independência

### Idade Contemporânea

- Revolução Francesa
- Era Napoleônica
- Independência do Haiti
- Congresso de Viena
- EUA - Expansão Territorial
- EUA - Guerra de Secessão
- Revoluções de 1830 e 1848
- Ideias Sociais e Políticas do Século XIX
- Unificações
- Segunda Revolução Industrial
- Neocolonialismo / Imperialismo
- 1ª Guerra Mundial
- Revolução Russa e Stalinismo
- Período Entre Guerras / Nazifascismo
- 2ª Guerra Mundial
- Guerra Fria
- Revolução Cubana
- Populismo na América Latina
- Reformas na América Latina
- Descolonização Afro-Asiática
- Revolução Chinesa

### Brasil Colônia

- Período Pré-Colonial
- Início da Colonização
- Economia Açucareira
- Pecuária e Lavouras de Subsistência
- União Ibérica e Invasões Holandesas
- Expansão Territorial
- Economia Mineradora
- Revoltas Nativistas
- Movimentos Emancipacionistas
- A Família Real Portuguesa no Brasil
- Independência do Brasil

### Brasil Império

- Primeiro Reinado
- Período Regencial
- Segundo Reinado

### Brasil República

- República da Espada
- República das Oligarquias
- Economia na República das Oligarquias
- Movimentos Sociais na República das Oligarquias
- A Crise na República das Oligarquias
- Era Vargas
- Governo Dutra
- Segundo Governo Vargas
- Governo JK
- Governo Jânio Quadros
- Governo João Goulart
- Regime Militar
- Nova República

---

## Geografia

### Geografia Física

- Astronomia
- Geologia e Relevo
- Cartografia
- Clima
- Vegetação
- Hidrografia

### Geografia Temática

- Recursos Minerais
- Energia
- Agropecuária
- Indústria
- Transporte

### Geografia Humana

- População
- Migrações
- Urbanização
- Comércio
- Brasil no Mundo
- Questões Ambientais

### Geografia Regional

- Divisões Regionais
- Amazônia e Região Norte
- Região Nordeste
- Centro-Oeste
- Sudeste
- Sul

### Geografia América

- América do Sul - Países Andinos
- América do Sul - Países Platinos
- México
- América Central e Caribe
- EUA
- Canadá

### Geografia África, Europa e Ásia

- África
- Europa
- Rússia
- Oriente Médio
- Ásia de Monções
- Tigres Asiáticos
- Japão

### Geografia Oceania

- Austrália
- Nova Zelândia e Ilhas do Pacífico

### Globalização

- Fases do Capitalismo
- Órgãos Internacionais
- Blocos Supranacionais

### Conflitos Internacionais

- EUA - Guerra do Terror
- Conflitos na Ex-Iugoslávia
- Conflitos na Rússia
- Índia x Paquistão
- Israel x Palestina

### Conflitos Regionais

- Conflitos na Espanha
- Conflitos na Irlanda
- Conflitos na África
- Tensões no Oriente Médio
- Conflitos na China

---

## Biologia

### Introdução

- Introdução à Biologia
- Bioquímica

### Citologia: Estudo da Célula

- Introdução ao Estudo da Célula
- Envoltórios Celulares
- Citoplasma
- Estudo do Núcleo
- Ciclo Celular, Divisão Celular e Gametogênese

### Bioenergética

- Fermentação e Respiração Celular
- Fotossíntese e Quimiossíntese

### Controle Celular

- Visão Geral e Código Genético
- Mutações Genéticas e suas Consequências

### Histologia Animal e Humana

- Visão Geral e Tecido Epitelial
- Tecido Conjuntivo
- Tecido Muscular
- Tecido Nervoso

### Fisiologia Animal e Humana

- Visão Geral e Sistema Digestório
- Sistema Respiratório
- Sistema Cardiovascular ou Circulatório
- Sistema Excretor
- Sistema Nervoso
- Sistema Tegumentar e Mento
- Sistema Sensorial
- Sistema Endócrino Sistema Reprodutor

### Sexualidade e Desenvolvimento Embrionário

- Sexualidade, DSTs e Contraceptivos
- Embriologia

### Vírus e Microorganismos

- Classificação dos Seres Vivos
- Vírus e Príons
- Reino Monera: As Bactérias
- Reino Protista: Algas e Protozoários
- Reino Fungi

### Reino Animal

- Visão Geral e Estudo Comparativo
- Poríferos
- Cnidários
- Platelmintos
- Nematelmintos
- Moluscos
- Anelídeos
- Artrópodes
- Equinodermos
- Cordados
- Resumo Geral do Reino Metazoa

### Reino Vegetal

- Visão Geral, Briófitas e Pteridófitas
- Gimnospermas e Angiospermas

### Morfofisiologia Vegetal

- Visão Geral, Raiz, Caule e Folha
- Tecidos Vegetais
- Nutrição Vegetal e Trocas Gasosas
- Transporte Vegetal
- Hormônios Vegetais e Fotoperiodismo
- Germinação e Movimentos Vegetais

### Genética

- 1ª Lei de Mendel e suas Variações
- Polialelia e Grupos Sanguíneos
- Herança e Sexo
- 2ª Lei de Mendel
- Linkage
- Interação Gênica
- Citogenética
- Genética de Populações

### Biotecnologia e Engenharia Genética

- Biotecnologia e Engenharia Genética

### Origem da Vida e Evolução

- Origem da Vida
- Evolução

### Ecologia

- Visão Geral e Conceitos
- Matéria e Energia de Ecossistemas
- Dinâmica das Populações e Comunidades
- Biomas Terrestres e Aquáticos
- Impactos e Problemas Ambientais

### Programa de Saúde

- Conceitos Básicos
- Parasitismo
- Problemas Fisiológicos
- Drogas

---

## Filosofia

### Filosofia Antiguidade Oriental

- Introdução à Filosofia do Oriente Médio
- Os Egípcios
- Os Mesopotâmicos
- Os Hebreus

### Filosofia Antiguidade Ocidental

- Introdução ao Mundo Grego
- Pré-Socrático
- Sofistas
- Socráticos - Sócrates
- Socráticos - Platão
- Socráticos - Aristóteles

### Transição para Idade Média

- Filosofia Helenística

### Filosofia Medieval

- Pensamento Cristão

### Filosofia Moderna e Contemporânea

- Ciência Moderna
- Ética e Moral
- Verdade

---

## Sociologia

### Introdução

- O Conhecimento e a Ciência

### Natureza e Cultura

- O que é o Homem?
- Natureza e Cultura
- Trabalho

### Fundamentos

- A Modernidade
- O Nascimento da Sociologia
- O Estudo da Antropologia
- O Poder da Política

### Clássicos

- Augusto Comte
- Émile Durkheim
- Max Weber
- Karl Marx

---

## Química

### Atômica

- Teoria Atômica
- Classificação Periódica dos Elementos
- Propriedades Periódicas
- Ligações Químicas
- Radioatividade
- Estudo de Moléculas

### Química Geral e Inorgânica

- Substâncias Puras e Misturas
- Funções Inorgânicas
- Química Descritiva
- Reações Inorgânicas
- Reações e Propriedades da Água
- Soluções
- Cálculos Estequiométricos
- Pilhas e Eletrólise
- Poluição Ambiental

### Físico-Química

- Soluções - Conceitos Gerais
- Soluções - Concentrações
- Termoquímica
- Cinética Química
- Equilíbrios Químicos
- Propriedades Coligativas

### Orgânica

- Introdução e Conceitos Gerais
- Funções Orgânicas
- Reações Orgânicas
- Compostos Orgânicos no Cotidiano

---

## Matemática

### Básica I

- Operações Básicas
- Potenciação e Radiciação
- Expressões Numéricas
- Múltiplos, Divisores, MDC e MMC
- Operações Básicas com Polinômios
- Frações, Decimais e Dízimas

### Básica II

- Expressões Algébricas e Fatoração Algébrica
- Equações do 1º Grau
- Equações do 2º Grau
- Sistemas de Equações Lineares
- Inequações do 1º Grau
- Inequações do 2º Grau
- Progressões Aritméticas
- Progressões Geométricas
- Conjuntos Numéricos
- Matrizes
- Determinantes
- Adição e Subtração de Matrizes
- Multiplicação de Matrizes
- Cálculo de Determinantes
- Sistemas Lineares

### Funções

- Introdução às Funções
- Funções do 1º Grau
- Funções do 2º Grau
- Funções Exponenciais e Logarítmicas
- Transformações de Gráficos
- Equações e Inequações Exponenciais
- Equações e Inequações Logarítmicas
- Matemática Financeira

### Trigonometria

- Trigonometria no Triângulo Retângulo
- Funções Trigonométricas
- Equações Trigonométricas
- Transformações Trigonométricas
- Funções Trigonométricas Inversas

### Geometria Plana

- Triângulos
- Quadriláteros
- Polígonos Regulares
- Circunferência e Círculo
- Estudo de Geometria Plana

### Geometria Espacial

- Geometria Espacial de Posição

### Geometria Analítica

- Introdução
- Circunferência
- Retas
- Cálculo de Distância e Área
- Equação da Reta
- Conicidade

---

## Física

### Ferramentas Gerais

- Unidades de Grandeza
- Vetores
- Cinemática
- Conceitos de Vetor
- Aceleração
- Movimento Uniforme
- Forças
- Trabalho, Energia e Potência
- Energia Mecânica
- Hidrostática

### Termologia

- Calorimetria
- Termometria
- Expansão Térmica
- Gases Ideais
- Leis dos Gases

### Óptica

- Reflexão e Espelhos Planos
- Refração e Lentes

### Ondulatória

- Propagação de Ondas
- Fenômenos Ondulatórios e Efeito Doppler

### Eletricidade e Magnetismo

- Cargas Elétricas Lei de Coulomb
- Campo Elétrico e Potencial Elétrico
- Capacitores
- Eletrodinâmica e Potência Elétrica
- Magnetismo

---

## Português

### Morfologia

- Substantivo
- Artigo
- Adjetivo
- Numeral
- Pronome
- Funções Pronome Se
- Conectivos
- Interjeição
- Verbo
- Advérbio
- Funções da Palavra Que
- Análise Morfológica

### Palavras

- Formação de Palavras
- Colocação Pronominal

### Sintaxe

- Sujeito e Predicado Vocativo
- Termos Associados ao Verbo
- Termos Associados ao Nome

### Concordância

- Verbal
- Nominal

### Regência

- Regência

### Orações

- Subordinadas Substantivas
- Subordinadas Adjetivas
- Subordinadas Adverbiais
- Subordinadas Reduzidas
- Coordenadas
- Intercaladas

### Regras

- Ortografia
- Pontuação
- Acentuação
- Crase
- Variantes Linguísticas

---

## Literatura

### Teoria

- Prosa e Poesia
- Gêneros e Eras Literárias
- Figuras de Linguagem

### Escolas Literárias

- Trovadorismo
- Humanismo
- Classicismo / Quinhentismo
- Barroco
- Neoclassicismo / Arcadismo
- Romantismo
- Realismo Parnasianismo
- Simbolismo
- Pré-Modernismo
- Modernismo em Portugal
- Modernismo Brasileiro - 1ª Fase
- Modernismo Brasileiro - 2ª Fase
- Modernismo Brasileiro - 3ª Fase
- Literatura Contemporânea

---

## Inglês

### Pronouns

- Personal
- Reflexive
- Indefinite
- Possessive
- Interrogative

### Verbs

- To Be
- Imperative
- Present
- Past

### Adjectives

- Visão Geral

### Gramática

- Genitive Case ('s)

---

## Espanhol

### Espanhol

- Vocabulário
- Interpretação de texto
- Básico de gramática

---

## Sugestão de componentes

Criar componentes reaproveitáveis:

```txt
components/eadplay-app/AppHeader.tsx
components/eadplay-app/SubjectSection.tsx
components/eadplay-app/StudyItemCard.tsx
components/eadplay-app/StudyContentPage.tsx
components/eadplay-app/StudyPagination.tsx
components/eadplay-app/StudyQuiz.tsx
components/eadplay-app/QuizResult.tsx
```

---

## Sugestão visual para lista do app

Cada conteúdo pode ter visual de playlist:

```txt
[play] Idade Antiga
      3 tópicos para estudar

[play] Alta Idade Média
      5 tópicos para estudar

[play] Geografia Física
      6 tópicos para estudar
```

Estilo:

- Fundo claro.
- Cards brancos.
- Botão play com cor principal `#A7E81C`.
- Texto escuro.
- Bordas arredondadas.
- Layout mobile first.

---

## Sugestão de conteúdo da página de estudo

Cada subtópico deve virar uma seção curta:

```txt
# Idade Antiga

## Antiguidade Oriental
Texto explicando o assunto de forma simples e objetiva.

## Antiguidade Clássica - Grécia
Texto explicando o assunto de forma simples e objetiva.

## Antiguidade Clássica - Roma
Texto explicando o assunto de forma simples e objetiva.
```

O texto pode ser gerado inicialmente de forma simples, com foco em revisão rápida para ENEM.

---

## Sugestão de quiz

Cada conteúdo deve ter quiz próprio.

Formato sugerido:

```ts
export type EadPlayQuizQuestion = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

export type EadPlayConteudoQuiz = {
  materia: string
  slug: string
  perguntas: EadPlayQuizQuestion[]
}
```

Exemplo:

```ts
export const eadplayQuizzes = [
  {
    materia: 'historia',
    slug: 'idade-antiga',
    perguntas: [
      {
        pergunta: 'Qual civilização está relacionada à Antiguidade Oriental?',
        opcoes: ['Egípcios', 'Astecas', 'Portugueses', 'Ingleses'],
        resposta: 'Egípcios',
      },
    ],
  },
]
```

---

## Observações importantes para implementação

- Começar criando a estrutura e os dados.
- Não precisa criar todos os textos completos de todos os conteúdos de uma vez.
- Primeiro criar a navegação funcionando.
- Depois preencher os textos aos poucos.
- O quiz pode começar com perguntas geradas automaticamente com base nos subtópicos.
- Usar `localStorage` para salvar progresso simples, caso queira marcar conteúdos estudados depois.
- O botão `Voltar ao início` deve sempre levar para `/aplicativo` se a rota final for essa, ou para `/app/aplicativo` se o projeto estiver usando essa URL publicamente.

