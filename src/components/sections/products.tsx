
"use client";

import { Check, Cpu, Database, Globe, Layers, Server, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    icon: <Cpu className="w-8 h-8" />,
    name: "Compute Engine",
    description: "High-performance virtual machines with custom machine types.",
    features: ["Preemptible VMs", "Auto-healing", "Confidential Computing"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    name: "Cloud Storage",
    description: "Unified object storage for any workload, from live data to archives.",
    features: ["Global Consistency", "Versioning", "Lifecycle Management"]
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    name: "Security Mesh",
    description: "Enterprise-grade protection with Zero Trust architecture.",
    features: ["DDoS Protection", "IAM Management", "Cloud Armor"]
  }
];

const tiers = [
  {
    name: "Standard",
    price: "$299",
    description: "Perfect for growing teams and startups.",
    features: ["10TB Storage", "50 Compute Units", "24/7 Support", "Global CDN"],
    highlight: false
  },
  {
    name: "Enterprise",
    price: "$999",
    description: "The gold standard for mission-critical apps.",
    features: ["100TB Storage", "Unlimited Compute", "Dedicated Manager", "99.999% SLA", "Advanced Security"],
    highlight: true
  },
  {
    name: "Custom",
    price: "Scale",
    description: "Tailored infrastructure for global giants.",
    features: ["Petabyte Storage", "Multi-region Cluster", "Direct Peering", "White-glove Onboarding"],
    highlight: false
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-1">Our Ecosystem</Badge>
          <h2 className="text-4xl font-extrabold font-headline">Enterprise-Grade Solutions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive suite of cloud services designed to integrate seamlessly and scale with your business demands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {products.map((p, i) => (
            <div key={i} className="group p-8 bg-background border rounded-3xl hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 font-headline">{p.name}</h3>
              <p className="text-muted-foreground mb-6">{p.description}</p>
              <ul className="space-y-3">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm font-medium">
                    <Check size={16} className="text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="pricing" className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-1">Pricing Plans</Badge>
          <h2 className="text-4xl font-extrabold font-headline">Predictable & Transparent</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <Card key={i} className={`relative overflow-hidden rounded-3xl border-2 transition-transform hover:scale-[1.02] ${tier.highlight ? 'border-primary shadow-2xl z-10' : 'border-transparent shadow-lg'}`}>
              {tier.highlight && (
                <div className="absolute top-0 right-0 p-2">
                  <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
                </div>
              )}
              <CardHeader className="p-8 text-center">
                <CardTitle className="text-xl font-bold mb-2 uppercase tracking-widest opacity-60 font-headline">{tier.name}</CardTitle>
                <div className="text-5xl font-black font-headline">
                  {tier.price}<span className="text-lg font-normal text-muted-foreground">/mo</span>
                </div>
                <CardDescription className="pt-4">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="space-y-4">
                  {tier.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                        <Check size={12} />
                      </div>
                      <span className="text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-8 pb-8">
                <Button variant={tier.highlight ? 'default' : 'outline'} className="w-full h-12 rounded-full font-bold">
                  {tier.price === 'Scale' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
