'use client'

export function QuizResultRedirect() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center space-y-4 text-center">
      <div className="inline-flex rounded-full bg-[#A7E81C]/20 px-4 py-2 text-sm font-semibold text-zinc-900">
        Resultado encontrado
      </div>

      <h2 className="text-3xl font-black text-zinc-950">
        Preparando sua análise personalizada...
      </h2>

      <p className="max-w-md text-base leading-7 text-zinc-600">
        Você será direcionado para a página com sua nota e recomendação de estudo.
      </p>
    </div>
  )
}