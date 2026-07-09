import Link from 'next/link'
import { notFound } from 'next/navigation'

import {
  getBiologiaEstudo,
  getBiologiaResumoFallback,
} from '@/data/biologia-estudos'
import { eadplayConteudos } from '@/data/eadplay-conteudos'
import {
  getEspanholEstudo,
  getEspanholResumoFallback,
} from '@/data/espanhol-estudos'
import {
  getFilosofiaEstudo,
  getFilosofiaResumoFallback,
} from '@/data/filosofia-estudos'
import {
  getFisicaEstudo,
  getFisicaResumoFallback,
} from '@/data/fisica-estudos'
import {
  getGeografiaEstudo,
  getGeografiaResumoFallback,
} from '@/data/geografia-estudos'
import {
  getHistoriaEstudo,
  getHistoriaResumoFallback,
} from '@/data/historia-estudos'
import {
  getInglesEstudo,
  getInglesResumoFallback,
} from '@/data/ingles-estudos'
import {
  getLiteraturaEstudo,
  getLiteraturaResumoFallback,
} from '@/data/literatura-estudos'
import {
  getMatematicaEstudo,
  getMatematicaResumoFallback,
} from '@/data/matematica-estudos'
import {
  getPortuguesEstudo,
  getPortuguesResumoFallback,
} from '@/data/portugues-estudos'
import {
  getQuimicaEstudo,
  getQuimicaResumoFallback,
} from '@/data/quimica-estudos'
import {
  getSociologiaEstudo,
  getSociologiaResumoFallback,
} from '@/data/sociologia-estudos'

type StudyPageProps = {
  params: Promise<{
    materia: string
    slug: string
  }>
}

const materiasComEstudo = new Set([
  'historia',
  'geografia',
  'biologia',
  'filosofia',
  'sociologia',
  'quimica',
  'matematica',
  'fisica',
  'portugues',
  'literatura',
  'ingles',
  'espanhol',
])

const conteudosComEstudo = eadplayConteudos.filter((conteudo) =>
  materiasComEstudo.has(conteudo.slugMateria),
)

export function generateStaticParams() {
  return conteudosComEstudo.map((conteudo) => ({
    materia: conteudo.slugMateria,
    slug: conteudo.slug,
  }))
}

export default async function StudyPage({ params }: StudyPageProps) {
  const { materia, slug } = await params
  const conteudo = conteudosComEstudo.find(
    (item) => item.slugMateria === materia && item.slug === slug,
  )

  if (!conteudo) {
    notFound()
  }

  const estudo =
    conteudo.slugMateria === 'sociologia'
      ? getSociologiaEstudo(conteudo.slug)
      : conteudo.slugMateria === 'espanhol'
        ? getEspanholEstudo(conteudo.slug)
        : conteudo.slugMateria === 'ingles'
          ? getInglesEstudo(conteudo.slug)
      : conteudo.slugMateria === 'literatura'
        ? getLiteraturaEstudo(conteudo.slug)
        : conteudo.slugMateria === 'portugues'
          ? getPortuguesEstudo(conteudo.slug)
      : conteudo.slugMateria === 'fisica'
        ? getFisicaEstudo(conteudo.slug)
        : conteudo.slugMateria === 'matematica'
          ? getMatematicaEstudo(conteudo.slug)
          : conteudo.slugMateria === 'quimica'
            ? getQuimicaEstudo(conteudo.slug)
      : conteudo.slugMateria === 'filosofia'
        ? getFilosofiaEstudo(conteudo.slug)
        : conteudo.slugMateria === 'biologia'
      ? getBiologiaEstudo(conteudo.slug)
      : conteudo.slugMateria === 'geografia'
        ? getGeografiaEstudo(conteudo.slug)
        : getHistoriaEstudo(conteudo.slug)
  const fallbackResumo =
    conteudo.slugMateria === 'sociologia'
      ? getSociologiaResumoFallback
      : conteudo.slugMateria === 'espanhol'
        ? getEspanholResumoFallback
        : conteudo.slugMateria === 'ingles'
          ? getInglesResumoFallback
      : conteudo.slugMateria === 'literatura'
        ? getLiteraturaResumoFallback
        : conteudo.slugMateria === 'portugues'
          ? getPortuguesResumoFallback
      : conteudo.slugMateria === 'fisica'
        ? getFisicaResumoFallback
        : conteudo.slugMateria === 'matematica'
          ? getMatematicaResumoFallback
          : conteudo.slugMateria === 'quimica'
            ? getQuimicaResumoFallback
      : conteudo.slugMateria === 'filosofia'
        ? getFilosofiaResumoFallback
        : conteudo.slugMateria === 'biologia'
      ? getBiologiaResumoFallback
      : conteudo.slugMateria === 'geografia'
        ? getGeografiaResumoFallback
        : getHistoriaResumoFallback
  const materiaTitulo = conteudo.materia
  const conceitos =
    estudo?.conceitos ??
    (conteudo.slugMateria === 'sociologia'
      ? ['sociedade', 'cultura', 'poder']
      : conteudo.slugMateria === 'espanhol'
      ? ['lectura', 'vocabulario', 'contexto']
      : conteudo.slugMateria === 'ingles'
      ? ['reading', 'pronouns', 'context']
      : conteudo.slugMateria === 'literatura'
      ? ['texto', 'estilo', 'contexto']
      : conteudo.slugMateria === 'portugues'
      ? ['classe de palavra', 'coesao', 'sentido']
      : conteudo.slugMateria === 'fisica'
      ? ['grandezas', 'unidades', 'movimento']
      : conteudo.slugMateria === 'matematica'
      ? ['problema', 'grafico', 'proporcao']
      : conteudo.slugMateria === 'quimica'
      ? ['materia', 'transformacao', 'energia']
      : conteudo.slugMateria === 'filosofia'
      ? ['conceito', 'argumento', 'critica']
      : conteudo.slugMateria === 'biologia'
      ? ['celula', 'metabolismo', 'organismo']
      : conteudo.slugMateria === 'geografia'
      ? ['territorio', 'paisagem', 'escala geografica']
      : ['processo historico', 'mudancas sociais', 'fontes historicas'])
  const introducao =
    estudo?.introducao ??
    (conteudo.slugMateria === 'sociologia'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar autores, conceitos, sociedade, trabalho, cultura e poder.'
      : conteudo.slugMateria === 'espanhol'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar vocabulario, interpretacao e gramatica basica em espanhol.'
      : conteudo.slugMateria === 'ingles'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar leitura, pronomes, referencia textual e vocabulario em contexto.'
      : conteudo.slugMateria === 'literatura'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar escolas literarias, linguagem, contexto historico e interpretacao de textos.'
      : conteudo.slugMateria === 'portugues'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar gramatica, classes de palavras, coesao e efeitos de sentido.'
      : conteudo.slugMateria === 'fisica'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar grandezas, unidades, movimentos, forcas, energia e fenomenos do cotidiano.'
      : conteudo.slugMateria === 'matematica'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar conceitos, calculos, graficos, problemas e aplicacoes.'
      : conteudo.slugMateria === 'quimica'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar materia, atomos, transformacoes, energia e aplicacoes no cotidiano.'
      : conteudo.slugMateria === 'filosofia'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar conceitos, argumentos, autores e problemas filosoficos.'
      : conteudo.slugMateria === 'biologia'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar estruturas, funcoes, processos biologicos, saude e ambiente.'
      : conteudo.slugMateria === 'geografia'
      ? 'Esta aula organiza o conteudo em topicos curtos para revisar natureza, sociedade, territorio, mapas e impactos espaciais.'
      : 'Esta aula organiza o conteudo em topicos curtos para revisar contexto, causas, consequencias e permanencias historicas.')
  const dicaEnem =
    estudo?.dicaEnem ??
    (conteudo.slugMateria === 'sociologia'
      ? 'Identifique autor, conceito e exemplo social apresentado no enunciado.'
      : conteudo.slugMateria === 'espanhol'
      ? 'Use cognatos com cuidado e confirme o sentido pelo contexto do texto.'
      : conteudo.slugMateria === 'ingles'
      ? 'Procure o referente de pronomes e use pistas de contexto antes de traduzir palavra por palavra.'
      : conteudo.slugMateria === 'literatura'
      ? 'Leia o trecho antes de lembrar a escola literaria: marcas de linguagem e contexto costumam decidir a resposta.'
      : conteudo.slugMateria === 'portugues'
      ? 'Analise a palavra dentro do texto: classe, funcao e sentido podem mudar conforme o contexto.'
      : conteudo.slugMateria === 'fisica'
      ? 'Identifique grandezas, unidades, grafico e fenomeno antes de aplicar qualquer formula.'
      : conteudo.slugMateria === 'matematica'
      ? 'Leia o problema com calma, destaque dados, unidades e o que a pergunta realmente pede.'
      : conteudo.slugMateria === 'quimica'
      ? 'Observe substancias, particulas, unidades, energia e transformacoes descritas no enunciado.'
      : conteudo.slugMateria === 'filosofia'
      ? 'Identifique o problema filosofico, a tese do autor e o conceito principal antes de escolher a alternativa.'
      : conteudo.slugMateria === 'biologia'
      ? 'Leia esquemas, graficos e enunciados procurando relacoes entre estrutura, funcao e processo biologico.'
      : conteudo.slugMateria === 'geografia'
      ? 'Leia mapas, graficos e textos procurando escalas, fluxos, impactos e desigualdades no territorio.'
      : 'Leia o enunciado procurando causas, consequencias e permanencias historicas.')

  return (
    <main className="min-h-screen bg-[#F7FAEF] text-zinc-950 selection:bg-[#A7E81C] selection:text-zinc-950">
      <div className="mx-auto w-full max-w-md pb-10">
        <header className="sticky top-0 z-30 border-b border-black/5 bg-[#F7FAEF]/85 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/aplicativo"
              className="inline-flex size-10 items-center justify-center rounded-full bg-white text-lg font-black text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition active:scale-95"
              aria-label="Voltar para lista"
            >
              &lt;
            </Link>

            <span className="min-w-0 flex-1 truncate text-center text-sm font-black text-zinc-900">
              {materiaTitulo}
            </span>

            <span className="size-10 rounded-full bg-[#A7E81C]/40" aria-hidden />
          </div>
        </header>

        <section className="px-5 pt-6">
          <div className="rounded-[2rem] bg-zinc-950 p-7 text-white shadow-xl shadow-zinc-900/10">
            <span className="mb-5 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#A7E81C]">
              Aula de {materiaTitulo}
            </span>

            <h1 className="text-3xl font-black leading-tight tracking-tight">
              {conteudo.titulo}
            </h1>

            <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-400">
              Revisao rapida com {conteudo.subtopicos.length} topicos e quiz ao final.
            </p>
          </div>
        </section>

        <section className="mt-6 space-y-4 px-5">
          <article className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <h2 className="text-lg font-black text-zinc-950">Visao geral</h2>
            <p className="mt-3 text-sm font-medium leading-7 text-zinc-600">
              {introducao}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {conceitos.map((conceito) => (
                <span
                  key={conceito}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-500"
                >
                  {conceito}
                </span>
              ))}
            </div>
          </article>

          {conteudo.subtopicos.map((subtopico, index) => {
            const resumo =
              estudo?.resumos[subtopico.slug] ??
              fallbackResumo(subtopico.titulo)

            return (
              <article
                key={subtopico.slug}
                className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#A7E81C] text-sm font-black text-zinc-950">
                    {index + 1}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-black leading-tight text-zinc-950">
                      {resumo.titulo}
                    </h2>

                    <p className="mt-4 text-sm font-medium leading-7 text-zinc-600">
                      {resumo.texto}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}

          <article className="rounded-[1.75rem] bg-zinc-950 p-6 text-white shadow-sm">
            <h2 className="text-lg font-black">Dica para o ENEM</h2>
            <p className="mt-3 text-sm font-medium leading-7 text-zinc-300">
              {dicaEnem}
            </p>
          </article>
        </section>

        <section className="mt-6 px-5">
          <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-zinc-100">
            <p className="text-sm font-semibold leading-6 text-zinc-500">
              Terminou a leitura? Agora teste se voce entendeu os pontos principais desta aula.
            </p>

            <Link
              href={`/aplicativo/${conteudo.slugMateria}/${conteudo.slug}/quiz`}
              className="mt-4 flex h-14 items-center justify-center rounded-full bg-[#A7E81C] px-5 text-sm font-black text-zinc-950 transition active:scale-95"
            >
              Comecar quiz
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
