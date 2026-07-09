import { EadPlayQuiz } from '@/app/components/eadplay/EadPlayQuiz'

export default function VejaSuaNotaPage() {
  return (
    <main className="min-h-screen bg-[#F7FAEF] px-4 py-6 text-zinc-950">
      <section className="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-3xl items-center justify-center">
        <EadPlayQuiz />
      </section>
    </main>
  )
}
