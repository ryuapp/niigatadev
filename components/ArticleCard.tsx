interface ArticleProps {
  title: string
  slug: string
}
export function ArticleCard({ title, slug }: ArticleProps) {
  return (
    <article class='border mb-2 border font-bold transition hover:bg-zinc-200 active:bg-zinc-300'>
      <a class='font-bold px-3 py-2 block' href={'/news/' + slug}>{title}</a>
    </article>
  )
}
