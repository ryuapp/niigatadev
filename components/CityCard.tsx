interface PopulationProps {
  name: string
  population: string
}
export function PopulationCard({ name, population }: PopulationProps) {
  return (
    <article class='px-3 py-2 border'>
      <div class='font-bold'>{name}</div>
      <div class='flex justify-between'>
        <div>{population}</div>
      </div>
    </article>
  )
}
