'use client'

type QuizStartProps = {
  name: string
  setName: (name: string) => void
  onStart: () => void
}

export function QuizStart({ name, setName, onStart }: QuizStartProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onStart()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7 text-center">
      <div className="space-y-4">
        <div className="mx-auto inline-flex rounded-full bg-[#A7E81C]/20 px-4 py-2 text-sm font-semibold text-zinc-900">
          Teste rapido ENEM
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            Veja sua nota em poucos minutos
          </h1>

          <p className="mx-auto max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
            Responda algumas perguntas e descubra quais materias precisam de mais atencao nos seus estudos.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-md space-y-3 text-left">
        <label htmlFor="eadplay-name" className="text-sm font-bold text-zinc-800">
          Seu nome
        </label>

        <input
          id="eadplay-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Digite seu nome"
          className="h-14 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-base font-semibold text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#A7E81C] focus:ring-4 focus:ring-[#A7E81C]/20"
        />
      </div>

      <button
        type="submit"
        className="mx-auto flex h-14 w-full max-w-md items-center justify-center rounded-2xl bg-[#A7E81C] px-5 text-base font-black text-zinc-950 transition hover:bg-[#96d318]"
      >
        Comecar teste
      </button>
    </form>
  )
}
