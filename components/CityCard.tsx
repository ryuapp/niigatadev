interface PopulationProps {
  name: Text
  population: Text
}
export function PopulationCard({ name, population }: PopulationProps) {
  return (
    <div class='px-3 py-2 border'>
      <div class='font-bold'>{name}</div>
      <div class='flex justify-between'>
        <div>{population}</div>
      </div>
    </div>
  )
}
