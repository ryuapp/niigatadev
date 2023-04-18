interface ArticleProps {
  title: string
}
export function ArticleCard({ title }: ArticleProps) {
  return (
    <article class='border mb-2 border font-bold transition hover:bg-zinc-200 active:bg-zinc-300'>
      <a class='font-bold px-3 py-2 block'>{title}</a>
    </article>
  )
}
