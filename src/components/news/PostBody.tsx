import { FadeInSection } from '@/components/ui/FadeInSection'

interface PostBodyProps {
  contentHtml: string
}

export function PostBody({ contentHtml }: PostBodyProps) {
  return (
    <FadeInSection>
      <article
        className="prose-news max-w-3xl mx-auto px-6 pb-24"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </FadeInSection>
  )
}
