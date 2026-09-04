import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, LockKeyhole, Mail } from 'lucide-react'
import { EadPlayInstallPrompt } from '@/app/components/eadplay/EadPlayInstallPrompt'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F7FAEF] px-5 py-5 text-zinc-950 selection:bg-[#A7E81C] selection:text-zinc-950">
      <EadPlayInstallPrompt />
      <div className="mx-auto flex min-h-[calc(100vh-40px)] w-full max-w-md flex-col">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex size-11 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-zinc-50 active:scale-95"
            aria-label="Voltar para a página inicial"
          >
            <ArrowLeft className="size-5" strokeWidth={2.5} aria-hidden />
          </Link>

          <Link href="/" className="inline-flex items-center gap-2 text-sm font-black text-zinc-950">
            <Image
              src="/icon/icon-198.png"
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full"
            />
            EAD Play
          </Link>
        </header>

        <section className="flex flex-1 flex-col justify-center py-12">
          <div className="px-1">
            <span className="inline-flex rounded-full bg-[#A7E81C]/30 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-zinc-800">
              Área do aluno
            </span>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-zinc-950">
              Que bom ter você de volta.
            </h1>
            <p className="mt-3 max-w-xs text-sm font-medium leading-relaxed text-zinc-600">
              Entre para continuar sua trilha de estudos para o ENEM.
            </p>
          </div>

          <form className="mt-6 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="text-sm font-bold text-zinc-800">
                  E-mail
                </label>
                <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl bg-zinc-50 px-4 ring-1 ring-zinc-200 transition focus-within:ring-2 focus-within:ring-[#A7E81C]">
                  <Mail className="size-5 shrink-0 text-zinc-400" aria-hidden />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="voce@email.com"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between gap-4">
                  <label htmlFor="password" className="text-sm font-bold text-zinc-800">
                    Senha
                  </label>
                  <button type="button" className="text-xs font-black text-zinc-600 hover:text-zinc-950">
                    Esqueci minha senha
                  </button>
                </div>
                <div className="mt-2 flex h-14 items-center gap-3 rounded-2xl bg-zinc-50 px-4 ring-1 ring-zinc-200 transition focus-within:ring-2 focus-within:ring-[#A7E81C]">
                  <LockKeyhole className="size-5 shrink-0 text-zinc-400" aria-hidden />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Sua senha"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <button
                type="button"
                className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#A7E81C] px-5 text-sm font-black text-zinc-950 transition hover:bg-[#96d318] active:scale-[0.98]"
              >
                Entrar na minha conta
              </button>
            </div>

            <p className="mt-6 text-center text-sm font-medium text-zinc-500">
              Não tem acesso?{' '}
              <button type="button" className="font-black text-zinc-950 underline decoration-[#A7E81C] decoration-2 underline-offset-4">
                Fale com o suporte
              </button>
            </p>
          </form>
        </section>

        <p className="pb-2 text-center text-xs font-medium text-zinc-400">
          Seu estudo, no seu ritmo.
        </p>
      </div>
    </main>
  )
}
