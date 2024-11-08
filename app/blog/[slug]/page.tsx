import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import '@/app/styles/prose.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { posts } from '../content'
import PostSidebar from '@/components/post-sidebar'
import RelatedPosts from '@/components/blog/RelatedPosts'

const BlogContent = dynamic(
  () => import('@/components/blog/blog-content'),
  { loading: () => <div>Loading...</div> }
)

async function getPost(slug: string) {
  try {
    const post = posts.find(post => post.slug === decodeURIComponent(slug));
    if (!post) return null;
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PostParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found'
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://depopcalculator.top';
  const ogImage = post.coverImage.startsWith('http') 
    ? post.coverImage 
    : `${baseUrl}${post.coverImage}`;

  return {
    title: `${post.title} | Depop Calculator`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    }
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

type Params = Promise<{ slug: string }>;

interface PostParams {
  params: Params;
}

export default async function BlogPost({ params }: PostParams): Promise<JSX.Element> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://depopcalculator.top';
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [
      post.coverImage.startsWith('http') 
        ? post.coverImage 
        : `${baseUrl}${post.coverImage}`
    ],
    "datePublished": post.date,
    "dateModified": post.lastModified || post.date,
    "author": [{
      "@type": "Person",
      "name": post.author,
      "url": `${baseUrl}/authors/${post.authorSlug}`
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Depop Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    }
  };

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <main className="lg:col-span-8">
          <div className="prose prose-lg max-w-none">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              
              {/* Date and Author */}
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <time dateTime={post.date} suppressHydrationWarning>
                  {formatDate(post.date)}
                </time>
                <span>•</span>
                <span>{post.author}</span>
              </div>

              {/* Breadcrumbs with light/dark mode styling */}
              <nav aria-label="Breadcrumb" className="text-sm py-2 border-t border-b border-gray-200 dark:border-gray-700 my-4">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link 
                      href="/" 
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2 text-gray-400 dark:text-gray-500">›</span>
                  </li>
                  <li>
                    <Link 
                      href="/blog" 
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2 text-gray-400 dark:text-gray-500">›</span>
                  </li>
                  <li className="truncate">
                    <span className="text-gray-900 dark:text-gray-100">{post.title}</span>
                  </li>
                </ol>
              </nav>
            </header>

            {/* Cover Image */}
            {post.coverImage && (
              <div className="mb-8">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="rounded-lg"
                  priority
                />
              </div>
            )}

            {/* Blog Content */}
            <BlogContent content={post.content} />

            {/* FAQs Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-12 border-t pt-8">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq) => (
                    <div key={faq.id} className="space-y-2">
                      <h3 className="text-xl font-semibold">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>

        <aside className="lg:col-span-4">
          <div className="sticky top-8">
            <PostSidebar />
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentPostId={post.id} />
    </article>
  );
}