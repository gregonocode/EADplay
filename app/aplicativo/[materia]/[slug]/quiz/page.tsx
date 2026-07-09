import { notFound } from 'next/navigation'

import { StudyQuiz } from '@/app/components/eadplay/StudyQuiz'
import {
  getBiologiaEstudo,
  getBiologiaQuizFallback,
} from '@/data/biologia-estudos'
import { eadplayConteudos } from '@/data/eadplay-conteudos'
import {
  getEspanholEstudo,
  getEspanholQuizFallback,
} from '@/data/espanhol-estudos'
import {
  getFilosofiaEstudo,
  getFilosofiaQuizFallback,
} from '@/data/filosofia-estudos'
import {
  getFisicaEstudo,
  getFisicaQuizFallback,
} from '@/data/fisica-estudos'
import {
  getGeografiaEstudo,
  getGeografiaQuizFallback,
} from '@/data/geografia-estudos'
import {
  getHistoriaEstudo,
  getHistoriaQuizFallback,
} from '@/data/historia-estudos'
import {
  getInglesEstudo,
  getInglesQuizFallback,
} from '@/data/ingles-estudos'
import {
  getLiteraturaEstudo,
  getLiteraturaQuizFallback,
} from '@/data/literatura-estudos'
import {
  getMatematicaEstudo,
  getMatematicaQuizFallback,
} from '@/data/matematica-estudos'
import {
  getPortuguesEstudo,
  getPortuguesQuizFallback,
} from '@/data/portugues-estudos'
import {
  getQuimicaEstudo,
  getQuimicaQuizFallback,
} from '@/data/quimica-estudos'
import {
  getSociologiaEstudo,
  getSociologiaQuizFallback,
} from '@/data/sociologia-estudos'

type QuizPageProps = {
  params: Promise<{
    materia: string
    slug: string
  }>
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { materia, slug } = await params
  const conteudo = eadplayConteudos.find(
    (item) =>
      (item.slugMateria === 'historia' ||
        item.slugMateria === 'geografia' ||
        item.slugMateria === 'biologia' ||
        item.slugMateria === 'filosofia' ||
        item.slugMateria === 'sociologia' ||
        item.slugMateria === 'quimica' ||
        item.slugMateria === 'matematica' ||
        item.slugMateria === 'fisica' ||
        item.slugMateria === 'portugues' ||
        item.slugMateria === 'literatura' ||
        item.slugMateria === 'ingles' ||
        item.slugMateria === 'espanhol') &&
      item.slugMateria === materia &&
      item.slug === slug,
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
  const fallbackQuiz =
    conteudo.slugMateria === 'sociologia'
      ? getSociologiaQuizFallback
      : conteudo.slugMateria === 'espanhol'
        ? getEspanholQuizFallback
        : conteudo.slugMateria === 'ingles'
          ? getInglesQuizFallback
      : conteudo.slugMateria === 'literatura'
        ? getLiteraturaQuizFallback
        : conteudo.slugMateria === 'portugues'
          ? getPortuguesQuizFallback
      : conteudo.slugMateria === 'fisica'
        ? getFisicaQuizFallback
        : conteudo.slugMateria === 'matematica'
          ? getMatematicaQuizFallback
          : conteudo.slugMateria === 'quimica'
            ? getQuimicaQuizFallback
      : conteudo.slugMateria === 'filosofia'
        ? getFilosofiaQuizFallback
        : conteudo.slugMateria === 'biologia'
      ? getBiologiaQuizFallback
      : conteudo.slugMateria === 'geografia'
        ? getGeografiaQuizFallback
        : getHistoriaQuizFallback
  const perguntas =
    estudo?.quiz ??
    fallbackQuiz(
      conteudo.titulo,
      conteudo.subtopicos.map((subtopico) => subtopico.titulo),
    )

  return (
    <StudyQuiz
      titulo={conteudo.titulo}
      perguntas={perguntas}
      studyHref={`/aplicativo/${conteudo.slugMateria}/${conteudo.slug}`}
    />
  )
}
