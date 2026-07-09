import Link from 'next/link'
import { eadplayConteudos } from '@/data/eadplay-conteudos'

const materias = Array.from(
  eadplayConteudos.reduce((map, conteudo) => {
    const atuais = map.get(conteudo.materia) ?? []
    map.set(conteudo.materia, [...atuais, conteudo])
    return map
  }, new Map<string, typeof eadplayConteudos>()),
)

const primeiraPaginaMaterias = new Set(['Historia', 'Geografia'])

const materiasPorPagina = {
  1: materias.filter(([materia]) => primeiraPaginaMaterias.has(materia)),
  2: materias.filter(([materia]) => !primeiraPaginaMaterias.has(materia)),
}

type AplicativoPageProps = {
  searchParams: Promise<{
    pagina?: string
  }>
}

export default async function AplicativoPage({ searchParams }: AplicativoPageProps) {
  const params = await searchParams
  const paginaAtual = params.pagina === '2' ? 2 : 1
  const materiasVisiveis = materiasPorPagina[paginaAtual]

  return (
    <main className="min-h-screen bg-[#F7FAEF] text-zinc-950 selection:bg-[#A7E81C] selection:text-zinc-950">
      <div className="mx-auto w-full max-w-md pb-12">
        
        {/* Header Fixo Mobile */}
        <header className="sticky top-0 z-30 border-b border-black/5 bg-[#F7FAEF]/80 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition-all hover:bg-zinc-50 active:scale-95"
            >
              EAD Play
            </Link>

            <span className="inline-flex h-10 items-center justify-center rounded-full bg-[#A7E81C]/30 px-4 text-xs font-bold text-zinc-800">
              ENEM 2026
            </span>
          </div>
        </header>

        {/* Hero Section / Card Principal */}
        <div className="px-5 pt-6">
          <section className="relative overflow-hidden rounded-[2rem] bg-zinc-950 p-7 text-white shadow-xl shadow-zinc-900/10">
            <div className="relative z-10">
              <span className="mb-5 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#A7E81C] backdrop-blur-sm">
                Plano de estudos
              </span>

              <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Sua lista de<br />estudos
              </h1>

              <p className="mt-4 max-w-[280px] text-sm font-medium leading-relaxed text-zinc-400">
                Escolha uma matéria e avance pelos conteúdos como uma playlist.
              </p>
            </div>
            
            {/* Detalhe de fundo para dar um toque moderno (opcional) */}
            <div className="absolute -bottom-10 -right-10 size-40 rounded-full bg-[#A7E81C] opacity-20 blur-3xl" />
          </section>
        </div>

        {/* Lista de Matérias */}
        <div className="mt-8 space-y-6 px-5">
          {materiasVisiveis.map(([materia, conteudos]) => (
            <section
              key={materia}
              className="rounded-[2rem] bg-white shadow-sm ring-1 ring-zinc-100"
            >
              <div className="flex items-center justify-between border-b border-zinc-50 px-6 py-5">
                <h2 className="text-xl font-bold tracking-tight text-zinc-900">
                  {materia}
                </h2>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-500">
                  {conteudos.length} {conteudos.length === 1 ? 'aula' : 'aulas'}
                </span>
              </div>

              <div className="flex flex-col p-2">
                {conteudos.map((conteudo, index) => (
                  <Link
                    key={`${conteudo.slugMateria}-${conteudo.slug}`}
                    href={`/aplicativo/${conteudo.slugMateria}/${conteudo.slug}`}
                    className="group relative flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-zinc-50 active:bg-zinc-100"
                  >
                    {/* Ícone de Play */}
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 transition-colors group-hover:bg-[#A7E81C] group-hover:text-zinc-950">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 size-5">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </div>

                    {/* Textos da Aula */}
                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <span className="truncate text-sm font-bold text-zinc-900">
                        {conteudo.titulo}
                      </span>
                      <span className="mt-0.5 text-xs font-medium text-zinc-500">
                        Aula {index + 1} • {conteudo.subtopicos.length} tópicos
                      </span>
                    </div>

                    {/* Seta indicativa */}
                    <div className="shrink-0 pr-2 text-zinc-300 transition-transform group-hover:translate-x-1 group-hover:text-zinc-400">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Paginação Estilo Mobile */}
        <nav className="mt-10 flex justify-center px-5" aria-label="Paginação dos estudos">
          <div className="inline-flex rounded-full bg-white p-1.5 shadow-sm ring-1 ring-zinc-200">
            <Link
              href="/aplicativo"
              aria-current={paginaAtual === 1 ? 'page' : undefined}
              className={`flex h-10 min-w-[100px] items-center justify-center rounded-full text-sm font-bold transition-all active:scale-95 ${
                paginaAtual === 1
                  ? 'bg-zinc-950 text-white shadow-md'
                  : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              Página 1
            </Link>

            <Link
              href="/aplicativo?pagina=2"
              aria-current={paginaAtual === 2 ? 'page' : undefined}
              className={`flex h-10 min-w-[100px] items-center justify-center rounded-full text-sm font-bold transition-all active:scale-95 ${
                paginaAtual === 2
                  ? 'bg-zinc-950 text-white shadow-md'
                  : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              Página 2
            </Link>
          </div>
        </nav>

      </div>
    </main>
  )
}