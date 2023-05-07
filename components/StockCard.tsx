interface StockProps {
  name: string
  ticker: string
  city: string
}
export function StockCard({ name, ticker, city }: StockProps) {
  return (
    <article class='px-3 py-2 border'>
      <div class='font-bold truncate'>{name}</div>
      <div class='flex justify-between'>
        <div>{ticker}</div>
        <div class='text-gray-500'>{city}</div>
      </div>
    </article>
  )
}
