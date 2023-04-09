interface StockProps {
  name: Text
  ticker: Text
  city: Text
}
export function StockCard({ name, ticker, city }: StockProps) {
  return (
    <div class='px-3 py-2 border'>
      <div class='font-bold'>{name}</div>
      <div class='flex justify-between'>
        <div>{ticker}</div>
        <div class='text-gray-500'>{city}</div>
      </div>
    </div>
  )
}
