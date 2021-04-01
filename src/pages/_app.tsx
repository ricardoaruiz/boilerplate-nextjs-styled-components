import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobaStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with a TypeScript, React, NextJS and Styled Components"
        />
      </Head>

      <GlobaStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
