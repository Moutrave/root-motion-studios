import { PostHeader } from '@/components/news/PostHeader'
import { PostBody } from '@/components/news/PostBody'
import { getAllSlugs, getPost } from '@/lib/news'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPost(slug)
    return {
      title: `${post.title} | Root Motion Games`,
      description: post.excerpt,
    }
  } catch {
    return { title: 'Post Not Found | Root Motion Games' }
  }
}

export default async function NewsPostPage({ params }: PageProps) {
  const { slug } = await params

  let post
  try {
    post = await getPost(slug)
  } catch {
    notFound()
  }

  return (
    <>
      <PostHeader post={post} />
      <PostBody contentHtml={post.contentHtml} />
    </>
  )
}
