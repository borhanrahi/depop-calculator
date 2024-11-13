"use client";

import AdLoader from './AdLoader';

export default function AdBanner({ className }: { className?: string }) {
  return (
    <div className={className}>
      <AdLoader />
    </div>
  );
}