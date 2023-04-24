interface ArticleProps {
  title: string
  releaseDate: string
  type: string
  slug: string
}
export function ArticleCard({ title, releaseDate, type, slug }: ArticleProps) {
  let typeText = 'その他'
  if (type == 'announcement') {
    typeText = 'お知らせ'
  }
  const day = new Date(releaseDate)
  const releaseDateText = `${day.getFullYear()}年${day.getMonth() + 1}月${day.getDate()}日`

  return (
    <article class='border mb-2 border transition hover:bg-zinc-200 active:bg-zinc-300'>
      <a class='px-3 py-2 block' href={'/news/' + slug}>
        <div class='text-zinc-500'>
          <span class='mr-2 font-bold'>{typeText}</span>
          <time class='font-bold text-sm'>{releaseDateText}</time>
        </div>
        <h3 class='font-bold text-lg'>{title}</h3>
      </a>
    </article>
  )
}
