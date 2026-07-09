'use client'

import { useMemo, useState } from 'react'

export default function OfertaEnemPage() {
  const [{ name, score, subjects }] = useState(() => {
    if (typeof window === 'undefined') {
      return {
        name: '',
        score: null as number | null,
        subjects: [],
      }
    }

    const savedName = localStorage.getItem('eadplay_nome')
    const savedScore = localStorage.getItem('eadplay_nota')
    const savedSubjects = localStorage.getItem('eadplay_materias_melhorar')
    let parsedSubjects: string[] = []

    if (savedSubjects) {
      try {
        const parsed = JSON.parse(savedSubjects)

        if (Array.isArray(parsed)) {
          parsedSubjects = parsed
        }
      } catch {
        parsedSubjects = []
      }
    }

    return {
      name: savedName ?? '',
      score: savedScore ? Number(savedScore) : null,
      subjects: parsedSubjects,
    }
  })

  const displayName = name || 'Estudante'
  const displayScore = score ?? 0

  const subjectsToImprove = useMemo(() => {
    if (subjects.length > 0) {
      return subjects
    }

    if (displayScore >= 70) {
      return ['Redação', 'Matemática', 'Linguagens']
    }

    return ['Língua Portuguesa', 'Ciências da Natureza', 'Matemática']
  }, [subjects, displayScore])

  const resultMessage = useMemo(() => {
    if (displayScore >= 70) {
      return `${displayName}, você está indo bem, mas vale lembrar que as perguntas foram relativamente fáceis. Para chegar mais preparado no ENEM 2026, você precisa treinar com questões mais completas e revisar os conteúdos certos.`
    }

    if (displayScore >= 40) {
      return `${displayName}, sua nota mostra que você já tem uma base, mas ainda precisa melhorar em alguns pontos importantes para o ENEM 2026. Com o material certo, dá para evoluir bastante.`
    }

    return `${displayName}, sua nota mostra que você precisa reforçar sua preparação. A boa notícia é que ainda dá tempo de organizar seus estudos e melhorar seu desempenho.`
  }, [displayName, displayScore])

  return (
    <main className="min-h-screen bg-[#F7FAEF] px-4 py-6 text-zinc-950">
      <section className="mx-auto w-full max-w-4xl py-6 sm:py-10">
        <div className="rounded-[32px] border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="space-y-7">
            <div className="space-y-4 text-center">
              <div className="mx-auto inline-flex rounded-full bg-[#A7E81C]/20 px-4 py-2 text-sm font-semibold text-zinc-900">
                Resultado do seu teste
              </div>

              <h1 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-5xl">
                {displayName}, aqui está sua nota: {displayScore}
              </h1>

              <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                {resultMessage}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 text-center">
                <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                  Sua nota
                </p>

                <p className="mt-2 text-5xl font-black text-zinc-950">
                  {displayScore}
                </p>

                <p className="mt-1 text-xs font-semibold text-zinc-500">
                  de 100 pontos
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 sm:col-span-2">
                <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                  Matérias para melhorar
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {subjectsToImprove.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-800 ring-1 ring-zinc-200"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  Esses pontos foram identificados com base nas respostas do seu teste.
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl bg-zinc-950 p-5 text-white sm:p-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[#A7E81C]">
                  Próximo passo
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Para melhorar, assista esse vídeo abaixo
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Aqui vamos colocar o vídeo da oferta explicando como o EADPlay pode ajudar você a estudar melhor para o ENEM 2026.
                </p>
              </div>

              <div className="flex aspect-video items-center justify-center rounded-3xl border border-white/10 bg-white/5">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#A7E81C] text-xl font-black text-zinc-950">
                    ▶
                  </div>

                  <p className="text-sm font-semibold text-zinc-300">
                    Espaço do vídeo da oferta
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#A7E81C]/40 bg-[#A7E81C]/10 p-5 text-center">
              <h3 className="text-2xl font-black text-zinc-950">
                O EADPlay foi criado para quem quer estudar de forma mais simples
              </h3>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-zinc-700">
                Depois vamos completar essa página com a oferta, benefícios, bônus, garantia e botão de compra.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
