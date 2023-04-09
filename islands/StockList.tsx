import { PageProps } from '$fresh/server.ts'
import { StockCard } from '../components/StockCard.tsx'

export default function StockList({ data }: PageProps) {
  const stockList = []
  data.sort(
    function (
      a: { [x: string]: { [x: string]: number } },
      b: { [x: string]: { [x: string]: number } },
    ) {
      if (a['_sys']['customOrder'] > b['_sys']['customOrder']) return -1
      if (a['_sys']['customOrder'] < b['_sys']['customOrder']) return 1
      return 0
    },
  )

  for (const stock of data) {
    stockList.unshift(
      <StockCard
        name={stock['company_name']}
        ticker={stock['ticker_symbol']}
        city={stock['company_city']}
      />,
    )
  }
  stockList.unshift(
    <StockCard
      name='企業名'
      ticker='証券コード'
      city='市町村'
    />,
  )

  return (
    <div class='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
      {stockList}
    </div>
  )
}
