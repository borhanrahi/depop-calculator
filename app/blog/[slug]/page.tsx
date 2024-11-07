import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import '@/app/styles/prose.css'

import { posts } from '../content'
import PostSidebar from '@/components/post-sidebar'
import FAQ from '@/components/sections/FAQ';

// Update the params type definition
type Params = Promise<{ slug: string }>

// Update the getPost function to handle Promise params
async function getPost(params: Params) {
  const resolvedParams = await params
  if (!resolvedParams.slug) return null
  return posts.find(post => post.slug === decodeURIComponent(resolvedParams.slug))
}

// Function to get related posts (excluding the current post)
function getRelatedPosts(currentPostId: string) {
  return posts.filter(post => post.id !== currentPostId).slice(0, 3)
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await getPost(params)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found'
    }
  }


  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://depopcalculator.top/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      tags: post.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default async function BlogPost({ params }: { params: Params }) {
  const post = await getPost(params)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id)
  const canonicalUrl = `https://depopcalculator.top/blog/${post.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [
      new URL(post.coverImage, 'https://depopcalculator.top').toString()
    ],
    "datePublished": post.date,
    "dateModified": post.lastModified || post.date,
    "author": [{
      "@type": "Person",
      "name": post.author,
      "url": `https://depopcalculator.top/authors/${post.authorSlug}`
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Your Blog Name",
      "logo": {
        "@type": "ImageObject",
        "url": "https://depopcalculator.top/logo.png"
      }
    },
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  }

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="mb-16">
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-medium">{post.author}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
              </div>
            </div>
          </header>

          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          <div className="relative mb-8 aspect-[2/1] overflow-hidden rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="lg:flex lg:gap-8">
            <div className="w-full lg:flex-1">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
              
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12 border-t pt-8">
                  <FAQ 
                    title="Frequently Asked Questions"
                    faqs={post.faqs}
                    className="p-0"
                  />
                </div>
              )}
            </div>
            <div className="mt-8 lg:mt-0">
              <PostSidebar />
            </div>
          </div>
        </article>

        <section>
          <h2 className="mb-8 text-2xl font-bold">Related Posts</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group block"
              >
                <div className="relative mb-4 aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src={relatedPost.coverImage}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                  {relatedPost.title}
                </h3>
                <p className="text-muted-foreground">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}