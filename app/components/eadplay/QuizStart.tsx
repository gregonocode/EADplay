'use client'

type QuizStartProps = {
  name: string
  setName: (value: string) => void
  onStart: () => void
}

export function QuizStart({ name, setName, onStart }: QuizStartProps) {
  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <div className="inline-flex rounded-full bg-[#A7E81C]/20 px-4 py-2 text-sm font-semibold text-zinc-900">
          EADPlay • Simulado rápido
        </div>

        <h1 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-5xl">
          Veja sua nota no teste rápido do ENEM 2026
        </h1>

        <p className="text-base leading-7 text-zinc-600 sm:text-lg">
          Vamos fazer algumas perguntas para ver qual seu nível de preparo para o ENEM 2026.
          No final, você recebe uma nota simulada e descobre quais matérias precisa melhorar.
        </p>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-semibold text-zinc-800">
          Qual é o seu nome?
        </label>

        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Digite seu nome"
          className="h-14 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-base font-medium outline-none transition focus:border-[#A7E81C] focus:bg-white focus:ring-4 focus:ring-[#A7E81C]/20"
        />
      </div>

      <button
        onClick={onStart}
        disabled={!name.trim()}
        className="h-14 w-full rounded-2xl bg-[#A7E81C] text-base font-black uppercase tracking-wide text-zinc-950 transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Começar
      </button>

      <p className="text-center text-xs text-zinc-500">
        O teste tem 20 perguntas de nível médio.
      </p>
    </div>
  )
}