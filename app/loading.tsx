export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
      <div className="animate-pulse space-y-8 w-full max-w-[1200px] mx-auto p-4">
        {/* Hero skeleton */}
        <div className="space-y-4 text-center">
          <div className="h-16 bg-muted/30 rounded-lg mx-auto max-w-2xl" />
          <div className="h-8 bg-muted/30 rounded-lg mx-auto max-w-xl" />
        </div>
        
        {/* Calculator skeleton */}
        <div className="bg-card rounded-lg p-6 space-y-6">
          <div className="h-10 bg-muted/30 rounded-lg w-3/4 mx-auto" />
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-muted/30 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
