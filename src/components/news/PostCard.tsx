import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import type { PostMeta } from '@/lib/news'

interface PostCardProps {
  post: PostMeta
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/news/${post.slug}`} className="block group">
      <Card accent="plasma" className="h-full transition-colors group-hover:border-plasma/40">
        <p className="text-xs text-ash-muted font-display uppercase tracking-wide mb-2">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          <span className="mx-2 text-void-700">|</span>
          {post.author}
        </p>

        <h3 className="font-display text-xl text-ash group-hover:text-plasma transition-colors mb-3">
          {post.title}
        </h3>

        <p className="text-ash-muted leading-relaxed text-sm">
          {post.excerpt}
        </p>
      </Card>
    </Link>
  )
}
