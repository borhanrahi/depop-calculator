import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import { posts } from '../blog/content'

export const metadata: Metadata = {
  title: 'Blog Posts',
  description: 'Read our latest blog posts about food, recipes, and healthy living.',
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <Link 
          href="/blog/archive" 
          className="flex items-center text-primary hover:text-primary/80"
        >
          More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group rounded-lg border bg-card transition-colors hover:bg-accent"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={800}
                height={450}
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                quality={85}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold group-hover:text-primary">
                {post.title}
              </h2>
              <div className="mt-2 flex items-center gap-2 text-sm text-primary/60">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <p className="mt-2 text-muted-foreground line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}