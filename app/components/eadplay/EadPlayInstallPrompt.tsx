'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
}

function isStandaloneMode() {
  if (typeof window === 'undefined') return false

  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  )
}

function getPlatform() {
  if (typeof window === 'undefined') {
    return {
      isAndroid: false,
      isIos: false,
      isMobile: false,
      isSafari: false,
    }
  }

  const userAgent = window.navigator.userAgent.toLowerCase()
  const isIos =
    /iphone|ipad|ipod/.test(userAgent) ||
    (window.navigator.platform === 'MacIntel' &&
      window.navigator.maxTouchPoints > 1)
  const isAndroid = /android/.test(userAgent)
  const isSafari =
    /safari/.test(userAgent) &&
    !/chrome|crios|fxios|edgios|opr\//.test(userAgent)

  return {
    isAndroid,
    isIos,
    isMobile: isAndroid || isIos,
    isSafari,
  }
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
      <path
        d="M12 16V4m0 0 4 4m-4-4-4 4M6 14v5h12v-5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
      <path
        d="M8 8h10v12H8zM6 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EadPlayInstallPrompt() {
  const pathname = usePathname()
  const [isStandalone, setIsStandalone] = useState(true)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isInstalling, setIsInstalling] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)
  const [platform, setPlatform] = useState(() => getPlatform())

  useEffect(() => {
    const media = window.matchMedia('(display-mode: standalone)')

    const frame = window.requestAnimationFrame(() => {
      setPlatform(getPlatform())
      setIsStandalone(isStandaloneMode())
    })

    function handleDisplayModeChange() {
      setIsStandalone(isStandaloneMode())
    }

    function handleBeforeInstallPrompt(event: Event) {
      event.preventDefault()
      setDeferredPrompt(event as BeforeInstallPromptEvent)
    }

    function handleAppInstalled() {
      setIsStandalone(true)
      setDeferredPrompt(null)
    }

    media.addEventListener?.('change', handleDisplayModeChange)
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.cancelAnimationFrame(frame)
      media.removeEventListener?.('change', handleDisplayModeChange)
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  async function handleInstallClick() {
    if (!deferredPrompt) return

    try {
      setIsInstalling(true)
      await deferredPrompt.prompt()
      await deferredPrompt.userChoice
      setDeferredPrompt(null)
    } finally {
      setIsInstalling(false)
    }
  }

  async function handleCopyLink() {
    const currentUrl = window.location.href

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(currentUrl)
    } else {
      const input = document.createElement('textarea')
      input.value = currentUrl
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }

    setCopiedLink(true)
  }

  if (pathname !== '/aplicativo') return null
  if (isStandalone || isDismissed || !platform.isMobile) return null

  const showAndroidInstall = platform.isAndroid && !!deferredPrompt
  const showIosGuide = platform.isIos

  if (!showAndroidInstall && !showIosGuide) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-zinc-950/60 p-3 backdrop-blur-sm sm:items-center sm:p-4">
      <div className="w-full max-w-md overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
        <div className="bg-zinc-950 px-5 py-5 text-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative size-14 flex-none overflow-hidden rounded-2xl bg-[#A7E81C]">
                <Image
                  src="/icon/icon-198.png"
                  alt="EAD Play"
                  fill
                  sizes="56px"
                  className="object-contain p-1.5"
                />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-wider text-[#A7E81C]">
                  App de estudos
                </p>
                <h2 className="mt-1 text-xl font-black tracking-tight">
                  Instalar EAD Play
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              className="grid size-10 flex-none place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Fechar aviso de instalacao"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="p-5">
          <div className="rounded-[24px] bg-[#F7FAEF] p-4">
            <div className="flex items-start gap-3">
              <div className="grid size-10 flex-none place-items-center rounded-2xl bg-white text-zinc-950 shadow-sm">
                {showIosGuide ? <ShareIcon /> : <DownloadIcon />}
              </div>

              <div>
                <p className="text-sm font-black text-zinc-950">
                  Continue estudando mais rapido
                </p>
                <p className="mt-1 text-sm font-medium leading-6 text-zinc-600">
                  Adicione o EAD Play na tela inicial para abrir sua lista de estudos como app e revisar para o ENEM sem procurar o site.
                </p>
              </div>
            </div>
          </div>

          {showIosGuide && (
            <div className="mt-5 rounded-[28px] bg-zinc-100 p-4">
              <div className="flex items-start gap-3">
                <div className="grid size-9 flex-none place-items-center rounded-2xl bg-white text-zinc-950">
                  <ShareIcon />
                </div>

                <div>
                  <p className="text-sm font-black text-zinc-950">
                    1. Toque em Compartilhar
                  </p>
                  <p className="mt-1 text-sm font-medium leading-6 text-zinc-500">
                    Use o botao de compartilhamento do Safari.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3">
                <div className="grid size-9 flex-none place-items-center rounded-2xl bg-white text-zinc-950">
                  <DownloadIcon />
                </div>

                <div>
                  <p className="text-sm font-black text-zinc-950">
                    2. Adicione a Tela de Inicio
                  </p>
                  <p className="mt-1 text-sm font-medium leading-6 text-zinc-500">
                    Confirme para instalar o EAD Play no celular.
                  </p>
                </div>
              </div>
            </div>
          )}

          {showIosGuide && !platform.isSafari && (
            <div className="mt-4 rounded-[18px] bg-amber-50 px-4 py-3 text-xs font-bold leading-5 text-amber-700">
              Para instalar no iPhone, copie o link e abra pelo Safari.
            </div>
          )}

          <div className="mt-5 grid gap-3">
            {showAndroidInstall && (
              <button
                type="button"
                onClick={handleInstallClick}
                disabled={isInstalling}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-black text-white transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <DownloadIcon />
                {isInstalling ? 'Abrindo instalacao...' : 'Instalar app'}
              </button>
            )}

            {showIosGuide && !platform.isSafari && (
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-black text-white transition active:scale-95"
              >
                <CopyIcon />
                {copiedLink ? 'Link copiado' : 'Copiar link'}
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              className="flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-black text-zinc-700 transition hover:bg-zinc-50 active:scale-95"
            >
              {showAndroidInstall ? 'Agora nao' : 'Entendi'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
