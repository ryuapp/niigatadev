import { Head } from '$fresh/runtime.ts'
import Header from '../components/Header.tsx'
export default function Home() {
  return (
    <>
      <Head>
        <title>新潟開発</title>
      </Head>
      <Header />
      <div class='mt-10 mx-auto max-w-5xl'>
        <main class='mx-5'>
          <h2 class='text-3xl mb-5 font-bold'>データベース</h2>
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
    </>
  )
}
