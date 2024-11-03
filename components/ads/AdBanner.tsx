"use client";

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className }: AdBannerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto ${className}`}>
      <div className="bg-muted/30 rounded-lg p-4 text-center min-h-[120px] flex items-center justify-center">
        <p className="text-muted-foreground">Advertisement Space</p>
      </div>
    </div>
  );
}