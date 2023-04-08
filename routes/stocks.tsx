import { Handlers, PageProps } from '$fresh/server.ts';
import { load } from 'https://deno.land/std@0.182.0/dotenv/mod.ts';
import StockList from '../islands/StockList.tsx'

export const handler: Handlers = {
  async GET(_req, ctx) {
    const env = await load();
    const URL =  env["YOUR_CDN_API_URL"];
    const token = env["YOUR_CDN_API_TOKEN"];
    const resp = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    }).then(function (response) {
      return response.json();
    })

    return ctx.render(resp);
  }
}

export default function Page({ data }: PageProps) {
  if (data["status"]) {
    return <h1>{data["status"]} Error</h1>;
  }
  return (
    <div class="flex justify-center max-w-7xl mx-auto">
      <main class="mx-5">
        <StockList data={data["items"]}/>
      </main>
    </div>
  )
}