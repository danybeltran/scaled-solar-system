import { AtomicState } from 'atomic-state'
import { FetcherConfig } from 'http-react-fetcher'
import Head from 'next/head'
import Script from 'next/script'
import { Fragment } from 'react'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fragment>
        <Head>
          <title>Scaled solar system</title>
          <meta
            name='description'
            content='A scaled version of the solar system (not distances)'
          />
        </Head>
        <div className='bg-black h-screen overflow-y-auto text-neutral-800'>
          <Component {...pageProps} />
        </div>
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.2.0/mdb.min.js'></Script>
      </Fragment>
    </>
  )
}

export default MyApp
