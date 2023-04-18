// deno-lint-ignore-file
import { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import Footer from '../../components/Footer.tsx'
import Header from '../../components/Header.tsx'
import { client } from '../../utils/newt.ts'
import { Content } from 'newt-client-js'
import UnknownPage from '../../components/UnknownPage.tsx'

interface Article extends Content {
  title: string
  body: string
}
export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await client.getContents<Article>({
      appUid: 'news',
      modelUid: 'article',
      query: {
        and: [
          { slug: { match: ctx.params.slug } },
        ],
      },
    })
    if (resp.total) {
      return ctx.render({
        'title': resp['items'][0]['title'],
        'body': resp['items'][0]['body'],
      })
    } else {
      return ctx.render(
        1,
      )
    }
  },
}
export default function Article(props: PageProps) {
  if (props['data'] == 1) {
    return <UnknownPage />
  }
  const title = props['data']['title']
  const body = props['data']['body']

  return (
    <>
      <Head>
        <title>新潟開発</title>
      </Head>
      <Header />
      <div class='mt-10 mx-auto max-w-5xl'>
        <main class='mx-5'>
          <h1 class='text-3xl font-bold mb-1'>{title}</h1>
          <div class='text-zinc-800 mb-5' dangerouslySetInnerHTML={{ __html: body }}></div>
        </main>
      </div>
      <Footer />
    </>
  )
}
