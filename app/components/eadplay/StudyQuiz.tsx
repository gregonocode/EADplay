'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

type StudyQuizQuestion = {
  pergunta: string
  opcoes: string[]
  resposta: string
}

type StudyQuizProps = {
  titulo: string
  perguntas: StudyQuizQuestion[]
  studyHref: string
}

export function StudyQuiz({ titulo, perguntas, studyHref }: StudyQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [finished, setFinished] = useState(false)

  const correctAnswers = useMemo(() => {
    return answers.filter((answer, index) => answer === perguntas[index]?.resposta).length
  }, [answers, perguntas])

  const wrongAnswers = perguntas.length - correctAnswers
  const question = perguntas[currentQuestion]
  const progress = Math.round(((currentQuestion + 1) / perguntas.length) * 100)

  function handleAnswer(option: string) {
    const updatedAnswers = [...answers, option]
    const isLastQuestion = currentQuestion === perguntas.length - 1

    setAnswers(updatedAnswers)

    if (isLastQuestion) {
      setFinished(true)
      return
    }

    setCurrentQuestion((questionIndex) => questionIndex + 1)
  }

  if (finished) {
    const allCorrect = wrongAnswers === 0

    return (
      <main
        className={`min-h-screen px-5 py-6 text-zinc-950 ${
          allCorrect ? 'bg-[#A7E81C]' : 'bg-red-500'
        }`}
      >
        <section className="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-md items-center">
          <div className="w-full rounded-[2rem] bg-white p-6 text-center shadow-xl shadow-zinc-900/10">
            <span
              className={`mx-auto inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider ${
                allCorrect
                  ? 'bg-[#A7E81C]/30 text-zinc-900'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              Resultado
            </span>

            <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-zinc-950">
              {allCorrect
                ? 'Parabens! Voce acertou todas as perguntas.'
                : `Voce errou ${wrongAnswers} de ${perguntas.length} perguntas.`}
            </h1>

            <p className="mx-auto mt-4 max-w-xs text-sm font-medium leading-7 text-zinc-500">
              {allCorrect
                ? 'Mandou bem. Volte para a lista e continue a trilha de estudos.'
                : 'Vale revisar o conteudo e tentar de novo depois. O erro tambem mostra onde estudar melhor.'}
            </p>

            <div className="mt-6 grid gap-3">
              {!allCorrect && (
                <Link
                  href={studyHref}
                  className="flex h-12 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-black text-white transition active:scale-95"
                >
                  Voltar a estudar
                </Link>
              )}

              <Link
                href="/aplicativo"
                className="flex h-12 items-center justify-center rounded-full bg-zinc-100 px-5 text-sm font-black text-zinc-600 transition active:scale-95"
              >
                Voltar ao inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F7FAEF] px-5 py-6 text-zinc-950">
      <section className="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-md items-center">
        <div className="w-full rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-zinc-100">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-[#A7E81C]/30 px-4 py-2 text-xs font-black uppercase tracking-wider text-zinc-900">
              Quiz
            </span>

            <span className="text-xs font-black text-zinc-400">
              {currentQuestion + 1}/{perguntas.length}
            </span>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-100">
            <div
              className="h-full rounded-full bg-[#A7E81C] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-6 text-sm font-black uppercase tracking-wider text-zinc-400">
            {titulo}
          </p>

          <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight text-zinc-950">
            {question.pergunta}
          </h1>

          <div className="mt-6 grid gap-3">
            {question.opcoes.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleAnswer(option)}
                className="min-h-14 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-left text-sm font-bold leading-6 text-zinc-800 transition hover:border-[#A7E81C] hover:bg-[#A7E81C]/10 active:scale-[0.98]"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
