'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
// Only keep one of the toast providers unless you need both
import { Toaster as Sonner } from "@/components/ui/sonner"; 
// Use Next.js routing instead of react-router-dom, unless needed
// import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // If you don't need BrowserRouter (for example, if using Next.js routing), remove it
    // <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    // </BrowserRouter>
  );
}
