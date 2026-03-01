import { SectionHeading } from '@/components/ui/SectionHeading'
import type { PostMeta } from '@/lib/news'

interface PostHeaderProps {
  post: PostMeta
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="pt-36 pb-8 max-w-3xl mx-auto px-6">
      <SectionHeading accent="plasma">{post.title}</SectionHeading>
      <p className="text-ash-muted text-sm font-display uppercase tracking-wide">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
        <span className="mx-2 text-void-700">|</span>
        {post.author}
      </p>
    </div>
  )
}
