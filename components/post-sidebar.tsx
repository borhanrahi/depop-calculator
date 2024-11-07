'use client'

import { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from 'lucide-react'

interface TableOfContentsItem {
  id: string
  level: number
  text: string
}

interface AdBlockProps {
  className?: string
}

const AdBlock = ({ className }: AdBlockProps) => {
  return (
    <div className={cn(
      "w-full rounded-lg bg-muted/25 p-6 text-center",
      "mx-auto max-w-[400px] lg:max-w-none", // Control max-width on mobile
      className
    )}>
      <p className="text-sm text-muted-foreground">Advertisement Block</p>
    </div>
  )
}

export default function PostSidebar() {
  const [headings, setHeadings] = useState<TableOfContentsItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [isExpanded, setIsExpanded] = useState(false) // Default to collapsed (H2 only)

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4'))
    const items = elements.map((element, index) => {
      const id = element.id || `heading-${index}`
      if (!element.id) {
        element.id = id
      }
      return {
        id,
        level: Number(element.tagName.charAt(1)),
        text: element.textContent || ''
      }
    })
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0% 0% -80% 0%' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  // Filter headings based on expanded state
  const visibleHeadings = headings.filter(heading => 
    isExpanded ? true : heading.level === 2
  )

  return (
    <div className="w-full lg:w-64 lg:flex-shrink-0  pt-10">
      <div className="mx-auto max-w-[400px] lg:max-w-none lg:sticky lg:top-24 space-y-4">
        <div className="rounded-lg border bg-card shadow-sm">
          <button 
            onClick={toggleExpand}
            className="flex w-full items-center justify-between p-4 text-sm font-medium"
          >
            Table of Contents
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          <nav className={cn(
            "px-4 pb-4",
            !isExpanded && "hidden"
          )}>
            <div className="space-y-2">
              {visibleHeadings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={cn(
                    "block text-sm transition-colors hover:text-foreground",
                    heading.level === 2 ? "pl-0" : `pl-${(heading.level - 2) * 4}`,
                    activeId === heading.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </nav>
        </div>
        
        <AdBlock />
      </div>
    </div>
  )
}