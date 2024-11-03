'use client';

import { useEffect, useState } from 'react';

interface DeferredScriptProps {
  src: string;
  strategy?: 'defer' | 'lazy';
}

export default function DeferredScript({ src, strategy = 'defer' }: DeferredScriptProps) {
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
  }, [strategy]);

  if (!shouldLoad) return null;

  return (
    <script
      src={src}
      defer={strategy === 'defer'}
      async={strategy === 'lazy'}
    />
  );
}
