export type Question = {
  id: number
  materia: string
  pergunta: string
  opcoes: string[]
  resposta: string
}

export const questions: Question[] = [
  {
    id: 1,
    materia: 'Língua Portuguesa',
    pergunta: 'Em uma redação, qual elemento ajuda a defender melhor uma opinião?',
    opcoes: ['Rima', 'Argumento', 'Título colorido', 'Letra cursiva'],
    resposta: 'Argumento',
  },
  {
    id: 2,
    materia: 'Matemática',
    pergunta: 'Se um produto custa R$ 200 e recebe desconto de 10%, qual será o novo valor?',
    opcoes: ['R$ 190', 'R$ 180', 'R$ 170', 'R$ 160'],
    resposta: 'R$ 180',
  },
  {
    id: 3,
    materia: 'Ciências da Natureza',
    pergunta: 'Qual gás é essencial para a respiração humana?',
    opcoes: ['Oxigênio', 'Nitrogênio', 'Gás carbônico', 'Hélio'],
    resposta: 'Oxigênio',
  },
  {
    id: 4,
    materia: 'História',
    pergunta: 'A Proclamação da República no Brasil aconteceu em qual ano?',
    opcoes: ['1500', '1822', '1889', '1930'],
    resposta: '1889',
  },
  {
    id: 5,
    materia: 'Geografia',
    pergunta: 'Qual é uma consequência comum do desmatamento?',
    opcoes: ['Aumento da biodiversidade', 'Desequilíbrio ambiental', 'Mais florestas', 'Fim da poluição'],
    resposta: 'Desequilíbrio ambiental',
  },
  {
    id: 6,
    materia: 'Matemática',
    pergunta: 'Quanto é 25% de 80?',
    opcoes: ['10', '15', '20', '25'],
    resposta: '20',
  },
  {
    id: 7,
    materia: 'Língua Portuguesa',
    pergunta: 'Qual palavra indica oposição?',
    opcoes: ['Porque', 'Mas', 'Logo', 'Portanto'],
    resposta: 'Mas',
  },
  {
    id: 8,
    materia: 'Biologia',
    pergunta: 'A fotossíntese é realizada principalmente por:',
    opcoes: ['Fungos', 'Animais', 'Plantas', 'Rochas'],
    resposta: 'Plantas',
  },
  {
    id: 9,
    materia: 'Física',
    pergunta: 'A unidade de medida de força é:',
    opcoes: ['Metro', 'Newton', 'Litro', 'Segundo'],
    resposta: 'Newton',
  },
  {
    id: 10,
    materia: 'Química',
    pergunta: 'A fórmula da água representa quais elementos?',
    opcoes: ['Hidrogênio e Oxigênio', 'Carbono e Oxigênio', 'Sódio e Cloro', 'Ferro e Carbono'],
    resposta: 'Hidrogênio e Oxigênio',
  },
  {
    id: 11,
    materia: 'Sociologia',
    pergunta: 'Cidadania está mais relacionada a:',
    opcoes: ['Direitos e deveres', 'Apenas dinheiro', 'Força física', 'Fama'],
    resposta: 'Direitos e deveres',
  },
  {
    id: 12,
    materia: 'Filosofia',
    pergunta: 'A filosofia busca principalmente:',
    opcoes: ['Decorar regras', 'Questionar e refletir', 'Evitar dúvidas', 'Copiar respostas'],
    resposta: 'Questionar e refletir',
  },
  {
    id: 13,
    materia: 'Geografia',
    pergunta: 'O efeito estufa está ligado ao:',
    opcoes: ['Aquecimento da atmosfera', 'Fim dos rios', 'Resfriamento total da Terra', 'Aumento do gelo'],
    resposta: 'Aquecimento da atmosfera',
  },
  {
    id: 14,
    materia: 'Matemática',
    pergunta: 'Se x + 5 = 12, qual é o valor de x?',
    opcoes: ['5', '6', '7', '8'],
    resposta: '7',
  },
  {
    id: 15,
    materia: 'História',
    pergunta: 'A escravidão no Brasil foi oficialmente abolida pela:',
    opcoes: ['Lei Áurea', 'Lei de Terras', 'Constituição de 1988', 'CLT'],
    resposta: 'Lei Áurea',
  },
  {
    id: 16,
    materia: 'Redação',
    pergunta: 'Na redação do ENEM, a conclusão deve:',
    opcoes: ['Finalizar a ideia principal', 'Começar outro tema', 'Ignorar a tese', 'Ter só uma frase solta'],
    resposta: 'Finalizar a ideia principal',
  },
  {
    id: 17,
    materia: 'Química',
    pergunta: 'Um pH menor que 7 indica uma substância:',
    opcoes: ['Ácida', 'Básica', 'Neutra', 'Metálica'],
    resposta: 'Ácida',
  },
  {
    id: 18,
    materia: 'Física',
    pergunta: 'Quando um carro freia, ocorre redução da:',
    opcoes: ['Velocidade', 'Massa', 'Cor', 'Temperatura sempre'],
    resposta: 'Velocidade',
  },
  {
    id: 19,
    materia: 'Biologia',
    pergunta: 'O DNA está relacionado principalmente com:',
    opcoes: ['Informação genética', 'Produção de suor', 'Digestão', 'Respiração pulmonar'],
    resposta: 'Informação genética',
  },
  {
    id: 20,
    materia: 'Redação',
    pergunta: 'Uma boa proposta de intervenção deve apresentar:',
    opcoes: ['Agente, ação e finalidade', 'Apenas opinião', 'Somente pergunta', 'Título engraçado'],
    resposta: 'Agente, ação e finalidade',
  },
]