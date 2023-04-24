import { Head } from '$fresh/runtime.ts'
import { Handlers, PageProps } from '$fresh/server.ts'
import Header from '../components/Header.tsx'
import { client } from '../utils/newt.ts'
import Footer from '../components/Footer.tsx'
import { PopulationCard } from '../components/CityCard.tsx'

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await client.getContents({
      appUid: 'cities',
      modelUid: 'population',
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
          <h1 class='text-4xl mb-5 font-bold'>市町村別人口総数</h1>
          <div class='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
            <PopulationCard name='市町村名' population='人口総数' />
            {articles.map((article: { city_name: string; total_population: string }) => (
              <PopulationCard
                name={article.city_name}
                population={article.total_population + '人'}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
