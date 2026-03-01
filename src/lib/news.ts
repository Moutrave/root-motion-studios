import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface PostMeta {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
}

export interface Post extends PostMeta {
  contentHtml: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'news')

/** Return metadata for all posts, sorted newest-first by date. */
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'))

  const posts: PostMeta[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8')
    const { data } = matter(raw)

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      tags: data.tags ?? [],
    }
  })

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

/** Return all slugs (for generateStaticParams). */
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

/** Return a single post with rendered HTML content. */
export async function getPost(slug: string): Promise<Post> {
  const raw = fs.readFileSync(
    path.join(POSTS_DIR, `${slug}.md`),
    'utf-8'
  )
  const { data, content } = matter(raw)

  const result = await remark().use(html).process(content)

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    tags: data.tags ?? [],
    contentHtml: result.toString(),
  }
}
