import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { PostCard } from '@/components/news/PostCard'
import { ContactSection } from '@/components/news/ContactSection'
import { getAllPosts } from '@/lib/news'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News | Root Motion Games',
  description: 'Dev logs, updates, and behind-the-scenes from Root Motion Studios.',
}

export default function NewsPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="pt-36 pb-8 max-w-7xl mx-auto px-6">
        <SectionHeading accent="plasma">News</SectionHeading>
        <p className="text-ash-muted text-lg max-w-2xl">
          Dev logs, studio updates, and behind-the-scenes from the team.
        </p>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <FadeInSection key={post.slug} delay={i * 0.1}>
              <PostCard post={post} />
            </FadeInSection>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-ash-muted text-center py-12">
            No posts yet. Check back soon!
          </p>
        )}
      </section>

      <ContactSection />
    </>
  )
}
