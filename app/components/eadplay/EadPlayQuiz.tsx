'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

import { QuizLoading } from './QuizLoading'
import { QuizQuestion } from './QuizQuestion'
import { QuizResultRedirect } from './QuizResultRedirect'
import { QuizStart } from './QuizStart'
import { questions } from './questions'

type Step = 'start' | 'quiz' | 'loading' | 'redirect'

export function EadPlayQuiz() {
  const router = useRouter()

  const [step, setStep] = useState<Step>('start')
  const [name, setName] = useState(() => {
    if (typeof window === 'undefined') return ''

    return localStorage.getItem('eadplay_nome') ?? ''
  })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [wrongSubjects, setWrongSubjects] = useState<string[]>([])

  const progress = useMemo(() => {
    return Math.round(((currentQuestion + 1) / questions.length) * 100)
  }, [currentQuestion])

  function handleStart() {
    const formattedName = name.trim()

    if (!formattedName) return

    localStorage.setItem('eadplay_nome', formattedName)
    setStep('quiz')
  }

  function handleAnswer(option: string) {
    const question = questions[currentQuestion]
    const isCorrect = option === question.resposta

    let updatedScore = score
    let updatedWrongSubjects = wrongSubjects

    if (isCorrect) {
      updatedScore = score + 1
      setScore(updatedScore)
    } else {
      updatedWrongSubjects = [...wrongSubjects, question.materia]
      setWrongSubjects(updatedWrongSubjects)
    }

    const isLastQuestion = currentQuestion === questions.length - 1

    if (isLastQuestion) {
      const finalScore = Math.round((updatedScore / questions.length) * 100)
      const subjectsToImprove = Array.from(new Set(updatedWrongSubjects)).slice(0, 4)

      localStorage.setItem('eadplay_nota', String(finalScore))
      localStorage.setItem('eadplay_materias_melhorar', JSON.stringify(subjectsToImprove))

      setStep('loading')

      setTimeout(() => {
        setStep('redirect')

        setTimeout(() => {
          router.push('/oferta/enem')
        }, 900)
      }, 2600)

      return
    }

    setCurrentQuestion((prev) => prev + 1)
  }

  return (
    <div className="w-full rounded-[32px] border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
      {step === 'start' && (
        <QuizStart
          name={name}
          setName={setName}
          onStart={handleStart}
        />
      )}

      {step === 'quiz' && (
        <QuizQuestion
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          progress={progress}
          onAnswer={handleAnswer}
        />
      )}

      {step === 'loading' && <QuizLoading />}

      {step === 'redirect' && <QuizResultRedirect />}
    </div>
  )
}
