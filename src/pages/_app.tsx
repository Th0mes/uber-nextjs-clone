import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import GlobalStyle from 'src/styles/globals'

const UberApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default UberApp
