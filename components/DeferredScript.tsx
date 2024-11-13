'use client';

import { useEffect, useState } from 'react';

interface DeferredScriptProps {
  src: string;
  strategy?: 'defer' | 'lazy' | 'idle';
  priority?: 'high' | 'low';
}

export default function DeferredScript({ src, strategy = 'defer', priority = 'low' }: DeferredScriptProps) {
  const [shouldLoad, setShouldLoad] = useState(strategy === 'defer');

  useEffect(() => {
    if (strategy === 'lazy') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      });

      observer.observe(document.documentElement);
      return () => observer.disconnect();
    }

    if (strategy === 'idle') {
      const loadScript = () => {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => setShouldLoad(true));
        } else {
          setTimeout(() => setShouldLoad(true), 1000);
        }
      };

      loadScript();
    }
  }, [strategy]);

  if (!shouldLoad) return null;

  return (
    <script
      src={src}
      defer={strategy === 'defer'}
      async={priority === 'low'}
      data-priority={priority}
    />
  );
}
