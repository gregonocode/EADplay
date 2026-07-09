'use client'

import type { Question } from './questions'

type QuizQuestionProps = {
  question: Question
  currentQuestion: number
  totalQuestions: number
  progress: number
  onAnswer: (option: string) => void
}

export function QuizQuestion({
  question,
  currentQuestion,
  totalQuestions,
  progress,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-700">
            Questão {currentQuestion + 1} de {totalQuestions}
          </span>

          <span className="rounded-full bg-[#A7E81C]/20 px-3 py-1 text-xs font-bold text-zinc-800">
            {question.materia}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
          <div
            className="h-full rounded-full bg-[#A7E81C] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-black leading-tight text-zinc-950 sm:text-3xl">
          {question.pergunta}
        </h2>

        <p className="text-sm text-zinc-500">
          Clique em uma resposta para avançar.
        </p>
      </div>

      <div className="grid gap-3">
        {question.opcoes.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-left text-base font-bold text-zinc-800 transition hover:border-[#A7E81C] hover:bg-[#A7E81C]/10"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}