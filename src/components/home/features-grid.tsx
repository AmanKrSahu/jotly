import { Zap, Cloud, Users, Search, Shield, Wifi } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Fast & Intuitive Editor",
    description:
      "Lightning-fast editing with markdown support and real-time formatting.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Access your notes anywhere, anytime. Seamless sync across all devices.",
  },
  {
    icon: Users,
    title: "Collaboration & Sharing",
    description:
      "Work together in real-time. Share notes and collaborate effortlessly.",
  },
  {
    icon: Search,
    title: "AI-Powered Search",
    description:
      "Find anything instantly with intelligent search and organization.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "End-to-end encryption keeps your thoughts safe and private.",
  },
  {
    icon: Wifi,
    title: "Offline Access",
    description:
      "Keep working even without internet. Sync when you're back online.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              stay organized
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-manrope">
            Powerful features designed to enhance your productivity and
            streamline your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card hover:shadow-xl transition-all duration-300 group border-0"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-geist mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-manrope leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
