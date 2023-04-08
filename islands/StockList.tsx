import { PageProps } from '$fresh/server.ts';

export default function StockList({ data }: PageProps){
  const stockList = [];
  for (const [i, product] of data.entries()) {
    stockList.push(
    <div class="px-3 py-2 border w-60 col-span-1">
      <div class="md:">{product["company_name"]}</div>
      <div class="flex justify-between">
        <div>{product["ticker_symbol"]}</div>
        <div>CITY</div>
      </div>
    </div>);
  }
  return <div class="mt-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 col-auto gap-2">{stockList}</div>
}