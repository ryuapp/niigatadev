import { Head } from '$fresh/runtime.ts'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { Handlers, PageProps } from '$fresh/server.ts'
import { ArticleCard } from '../components/ArticleCard.tsx'
import { client } from '../utils/newt.ts'

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await client.getContents({
      appUid: 'news',
      modelUid: 'article',
      query: {
        select: ['title', 'slug'],
        limit: 3,
      },
    })
    return ctx.render(resp)
  },
}

export default function Home({ data }: PageProps) {
  const articles = data['items']

  return (
    <>
      <Head>
        <title>新潟開発</title>
      </Head>
      <Header />
      <div class='mt-10 mx-auto max-w-5xl'>
        <main class='mx-5'>
          <h2 class='text-3xl font-bold mb-1'>ニュース</h2>
          <div class='mb-5'>
            {articles.map((article: { title: string; slug: string }) => (
              <ArticleCard title={article.title} slug={article.slug} />
            ))}
          </div>
          <h2 class='text-3xl font-bold mb-1'>データベース</h2>
          <p class='text-zinc-800 mb-5'>新潟県のオープンデータを中心としたデータベースです。</p>
          <div class='flex gap-2'>
            <a
              class='px-3 py-2 border font-bold transition hover:bg-zinc-200 active:bg-zinc-300 active:scale-95'
              href='/population'
              style='-webkit-user-drag: none'
            >
              市町村別人口総数
            </a>
            <a
              class='px-3 py-2 border font-bold transition hover:bg-zinc-200 active:bg-zinc-300 active:scale-95'
              href='/stocks'
              style='-webkit-user-drag: none'
            >
              新潟県の上場企業
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
