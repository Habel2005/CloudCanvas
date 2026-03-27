
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    quote: "CloudCanvas has transformed how we deploy global applications. Their auto-scaling is second to none, saving us thousands in wasted compute.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow Inc.",
    imgId: "testimonial-1",
    stars: 5
  },
  {
    quote: "The security features integrated into CloudCanvas gave us the confidence to migrate our entire legacy financial system to the cloud.",
    author: "David Chen",
    role: "Head of Infrastructure, FinGuard",
    imgId: "testimonial-2",
    stars: 5
  },
  {
    quote: "Exceptional support and a developer experience that actually makes sense. It's the cloud platform we've been waiting for.",
    author: "Elena Rodriguez",
    role: "Lead Architect, Nexus Labs",
    imgId: "testimonial-3",
    stars: 5
  }
];

const logos = [
  "Acme Corp", "Globex", "Soylent Corp", "Initech", "Umbrella", "Cyberdyne", 
  "Wayne Ent", "Stark Ind", "Massive Dyn", "Oscorp", "Hooli", "Pied Piper"
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 6000;
    const step = 100;
    const progressStep = 100 / (interval / step);

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActive(current => (current + 1) % testimonials.length);
          return 0;
        }
        return prev + progressStep;
      });
    }, step);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-32 overflow-hidden bg-background relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Side: Testimonials (The Emotional Hook) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-1 uppercase tracking-widest text-[10px] font-black">
                Customer Success
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black font-headline tracking-tighter italic">
                TRUSTED BY <br />
                <span className="gradient-text not-italic">VISIONARIES.</span>
              </h2>
            </div>

            <div className="relative min-h-[350px] lg:min-h-[300px]">
              {testimonials.map((t, i) => {
                const img = PlaceHolderImages.find(p => p.id === t.imgId);
                return (
                  <div
                    key={i}
                    className={cn(
                      "absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out flex flex-col gap-8",
                      active === i 
                        ? "opacity-100 translate-x-0 scale-100" 
                        : "opacity-0 -translate-x-12 scale-95 pointer-events-none"
                    )}
                  >
                    <div className="flex gap-1 text-accent">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-6 -left-8 text-primary/10 w-24 h-24 -z-10" />
                      <p className="text-3xl lg:text-4xl font-medium leading-tight tracking-tight text-foreground">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-5 pt-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20 bg-muted transform rotate-3 hover:rotate-0 transition-transform">
                          <Image
                            src={img?.imageUrl || ''}
                            alt={t.author}
                            width={100}
                            height={100}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white">
                          <Quote size={12} fill="currentColor" />
                        </div>
                      </div>
                      <div>
                        <div className="font-black text-xl tracking-tight">{t.author}</div>
                        <div className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{t.role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination & Progress */}
            <div className="flex gap-4 items-center pt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i);
                    setProgress(0);
                  }}
                  className="relative h-2 flex-1 max-w-[80px] bg-muted rounded-full overflow-hidden transition-all group"
                >
                  <div 
                    className={cn(
                      "absolute inset-0 bg-primary transition-all",
                      active === i ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                    )}
                    style={{ width: active === i ? `${progress}%` : '0%' }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Partner Ecosystem (The Scale Factor) - PLAN B */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[4rem] blur-2xl group-hover:opacity-100 transition-opacity opacity-50" />
            
            <div className="relative glass-panel rounded-[3.5rem] p-10 border-white/30 overflow-hidden">
              <div className="text-center mb-10">
                <div className="inline-block px-3 py-1 rounded-full bg-background border text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">
                  Strategic Partnerships
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight">Global Connectivity</h3>
              </div>

              {/* Infinite Logo Marquee Container */}
              <div className="relative flex overflow-x-hidden space-x-8 py-4">
                <div className="animate-marquee whitespace-nowrap flex space-x-8 items-center">
                  {logos.map((logo, i) => (
                    <div key={i} className="flex flex-col items-center justify-center min-w-[140px] h-24 px-6 rounded-2xl bg-background/50 border border-white/20 hover:border-primary/50 transition-colors shadow-sm">
                      <span className="text-lg font-black font-headline text-muted-foreground/40 italic group-hover:text-primary transition-colors">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-8 items-center ml-8">
                  {logos.map((logo, i) => (
                    <div key={i} className="flex flex-col items-center justify-center min-w-[140px] h-24 px-6 rounded-2xl bg-background/50 border border-white/20 hover:border-primary/50 transition-colors shadow-sm">
                      <span className="text-lg font-black font-headline text-muted-foreground/40 italic group-hover:text-primary transition-colors">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-primary">Joining weekly</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  Join <span className="text-foreground font-bold">2,400+</span> enterprises leveraging our edge network to power their next-gen applications.
                </p>
              </div>

              {/* Decorative "Scanning" Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-20 animate-[bounce_4s_infinite]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
