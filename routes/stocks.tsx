import { Head } from '$fresh/runtime.ts'
import { Handlers, PageProps } from '$fresh/server.ts'
import Header from '../components/Header.tsx'
import { client } from '../utils/newt.ts'
import Footer from '../components/Footer.tsx'
import { StockCard } from '../components/StockCard.tsx'

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await client.getContents({
      appUid: 'stocks',
      modelUid: 'stock',
    })
    return ctx.render(resp)
  },
}

export default function Page({ data }: PageProps) {
  const articles = data['items'].reverse()
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
          <h1 class='text-4xl mb-5 font-bold'>新潟県の上場企業</h1>
          <div class='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2'>
            <StockCard name='企業名' ticker='証券コード' city='市町村' />
            {articles.map((
              article: { company_name: string; ticker_symbol: string; company_city: string },
            ) => (
              <StockCard
                name={article.company_name}
                ticker={article.ticker_symbol}
                city={article.company_city}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
