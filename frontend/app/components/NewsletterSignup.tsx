
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter!",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setEmail('');
        setIsSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll animate-fade-up">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
            Stay updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Subscribe to the Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest articles, resources, and insights delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={cn(
                  "w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 transition-all",
                  isSuccess ? "border-green-500 ring-green-200" : "border-border focus:ring-primary/20"
                )}
                disabled={isSubmitting || isSuccess}
              />
              {isSuccess && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-scale-in">
                  <Check size={20} />
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={cn(
                "px-6 py-3 font-medium rounded-md transition-all flex items-center justify-center",
                isSubmitting ? "bg-primary/80 text-primary-foreground cursor-wait" : 
                isSuccess ? "bg-green-500 text-white" : 
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              {isSubmitting ? (
                <span className="inline-block h-4 w-4 border-2 border-white/30 border-t-white/90 rounded-full animate-spin"></span>
              ) : isSuccess ? (
                "Subscribed"
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;