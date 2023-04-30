import { AppProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'

export default function ({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Poppins&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component />
    </>
  )
}
