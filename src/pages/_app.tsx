import { SessionProvider } from 'next-auth/react'
import '../styles/global.scss'

function MyApp({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
