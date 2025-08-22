import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm font-medium bg-accent border-2 border-neutral-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Introducing the future of Note taking</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-geist mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent leading-tight">
          Your Smartest Notes,
          <br />
          Always Organized
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-manrope leading-relaxed">
          Experience the perfect blend of simplicity and power. Capture,
          organize, and collaborate with your peers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className=" rounded-full text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Start Taking Notes
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-lg px-8 py-6 glass-card hover:bg-accent/20 transition-all duration-300 bg-transparent cursor-pointer"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
