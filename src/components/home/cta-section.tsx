import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-12 md:p-16">
          <h2 className="text-4xl md:text-6xl font-bold font-geist mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Take Better Notes.
            <br />
            Boost Your Productivity.
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-manrope leading-relaxed">
            Join thousands of professionals who&apos;ve transformed their
            workflow with Jotly. Start your journey today.
          </p>

          <Button
            size="lg"
            className=" rounded-full text-lg px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Get Started Free
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>

          <p className="text-sm text-muted-foreground mt-6 font-manrope">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
