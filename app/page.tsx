import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7FAEF] px-4 py-6 text-zinc-950">
      <section className="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-5xl items-center">
        <div className="grid w-full gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-7">
            <div className="inline-flex rounded-full bg-[#A7E81C]/25 px-4 py-2 text-sm font-bold text-zinc-900">
              ENEM 2026
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl">
                Estude melhor com uma trilha simples para o ENEM
              </h1>

              <p className="max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg">
                Faça um teste rápido, veja sua nota e descubra quais matérias merecem mais atenção nos seus estudos.
              </p>
            </div>

            <Link
              href="/vejasuanota"
              className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#A7E81C] px-6 text-base font-black text-zinc-950 transition hover:bg-[#96d318] sm:w-auto"
            >
              Ver minha nota
            </Link>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="space-y-5 rounded-[22px] bg-zinc-950 p-6 text-white">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-[#A7E81C]">
                  EAD Play
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
                  Quiz rapido
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-2xl font-black">
                  Descubra seu ponto de partida
                </p>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-[#A7E81C]" />
                </div>
              </div>

              <div className="grid gap-3">
                {['Matematica', 'Redacao', 'Natureza'].map((subject) => (
                  <div
                    key={subject}
                    className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3"
                  >
                    <span className="text-sm font-bold">{subject}</span>
                    <span className="text-sm font-black text-[#A7E81C]">
                      Revisar
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
