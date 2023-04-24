interface ArticleProps {
  title: string
  type: string
  slug: string
}
export function ArticleCard({ title, type, slug }: ArticleProps) {
  let typeText = 'その他'
  if (type == 'announcement') {
    typeText = 'お知らせ'
  }

  return (
    <article class='border mb-2 border transition hover:bg-zinc-200 active:bg-zinc-300'>
      <a class='px-3 py-2 block' href={'/news/' + slug}>
        <p class='text-zinc-500 font-bold'>{typeText}</p>
        <h3 class='font-bold text-lg'>{title}</h3>
      </a>
    </article>
  )
}
