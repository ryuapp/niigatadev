import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from '$fresh/server.ts'
import StockList from '../islands/StockList.tsx'
import Header from "../components/Header.tsx"

export const handler: Handlers = {
  async GET(_req, ctx) {
    const URL = Deno.env.get('YOUR_CDN_API_URL');
    const token = Deno.env.get('YOUR_CDN_API_TOKEN');
    const resp = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    }).then(function (response) {
      return response.json();
    });

    return ctx.render(resp);
  },
};

export default function Page({ data }: PageProps) {
  if (data['status']) {
    return <h1>{data['status']} Error</h1>;
  }
  return (
    <>
      <Head>
        <title>新潟開発</title>
      </Head>
      <Header />
      <div class="flex justify-center max-w-5xl mx-auto">
        <main class="mx-5">
          <StockList data={data['items']} />
        </main>
      </div>
    </>
  );
}
