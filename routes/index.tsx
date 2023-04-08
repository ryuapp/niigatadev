import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx"
export default function Home() {
  return (
    <>
      <Head>
        <title>新潟開発</title>
      </Head>
      <Header />
      <div class="mt-10 px-10 mx-auto max-w-7xl">
        <h1 class="text-3xl mb-5 font-bold">データベース</h1>
        <a class="underline text-blue-600" href="/stocks">新潟県の上場企業一覧</a>
      </div>
    </>
  );
}
