import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EAD Play',
    short_name: 'EAD Play',
    description: 'Estude de forma divertida com EAD Play',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#F7FAEF',
    theme_color: '#A7E81C',
    icons: [
      {
        src: '/icon/icon-198.png',
        sizes: '198x198',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
