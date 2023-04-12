import { PopulationCard } from '../components/CityCard.tsx'

// deno-lint-ignore no-explicit-any
export default function PopulationList({ data }: any) {
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
      <PopulationCard
        name={stock['city_name']}
        population={stock['total_population'] + '人'}
      />,
    )
  }
  stockList.unshift(
    <PopulationCard
      name='市町村名'
      population='人口総数'
    />,
  )

  return (
    <div class='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
      {stockList}
    </div>
  )
}
