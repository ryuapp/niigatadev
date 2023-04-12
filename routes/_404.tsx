import { UnknownPageProps } from '$fresh/server.ts'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <Header />
      <div class='mt-10 mx-auto max-w-5xl'>
        <main class='mx-5'>
          <h1 class='text-3xl mb-5 font-bold'>404 NotFound</h1>
          <p>ページが見つかりません。</p>
        </main>
      </div>
      <Footer />
    </>
  )
}
