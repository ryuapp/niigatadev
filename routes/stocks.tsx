import { Head } from '$fresh/runtime.ts'
import { Handlers, PageProps } from '$fresh/server.ts'
import StockList from '../islands/StockList.tsx'
import Header from '../components/Header.tsx'
import { getNewtJson } from '../utils/newt.ts'
import Footer from '../components/Footer.tsx'

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await getNewtJson('stocks', 'stock')
    return ctx.render(resp)
  },
}

export default function Page({ data }: PageProps) {
  if (data['status']) {
    return <h1>{data['status']} Error</h1>
  }
  return (
    <>
      <Head>
        <title>新潟開発</title>
      </Head>
      <Header />
      <div class='mt-10 max-w-5xl mx-auto'>
        <main class='mx-5'>
          <h1 class='text-3xl mb-5 font-bold'>新潟県の上場企業</h1>
          <StockList data={data['items']} />
        </main>
      </div>
      <Footer />
    </>
  )
}
