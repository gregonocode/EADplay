'use client'

export function QuizLoading() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center space-y-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#A7E81C]/20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-[#A7E81C]" />
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-black text-zinc-950">
          Calculando sua nota...
        </h2>

        <p className="max-w-md text-base leading-7 text-zinc-600">
          Estamos analisando suas respostas e identificando quais matérias precisam de mais atenção.
        </p>
      </div>
    </div>
  )
}