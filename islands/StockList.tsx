import { PageProps } from '$fresh/server.ts';

export default function StockList({ data }: PageProps){
  const stockList = [];
  data.sort(function(a,b){
    if( a["_sys"]["customOrder"] > b["_sys"]["customOrder"] ) return -1;
    if( a["_sys"]["customOrder"] < b["_sys"]["customOrder"] ) return 1;
    return 0;
  })
  
  for (const stock of data) {
    stockList.unshift(
    <div class="px-3 py-2 border w-60 col-span-1">
      <div class="font-bold">{stock["company_name"]}</div>
      <div class="flex justify-between">
        <div>{stock["ticker_symbol"]}</div>
        <div class="text-gray-500">CITY</div>
      </div>
    </div>);
  }

  return <div class="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 col-auto gap-2">{stockList}</div>
}