import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css'

const UberApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default UberApp
