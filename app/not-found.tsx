"use client";

import Link from 'next/link';
import { Calculator, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
      <Card className="w-full max-w-md p-6 text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Looking to calculate Depop fees? Try our calculator to estimate your profits and fees instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full"
              asChild
            >
              <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
            
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="/#calculator" className="flex items-center justify-center gap-2">
                <Calculator className="w-4 h-4" />
                Calculator
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            className="text-sm text-muted-foreground"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </Card>
    </main>
  );
}