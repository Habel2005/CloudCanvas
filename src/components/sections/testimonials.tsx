
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "CloudCanvas has transformed how we deploy global applications. Their auto-scaling is second to none, saving us thousands in wasted compute.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow Inc.",
    imgId: "testimonial-1"
  },
  {
    quote: "The security features integrated into CloudCanvas gave us the confidence to migrate our entire legacy financial system to the cloud.",
    author: "David Chen",
    role: "Head of Infrastructure, FinGuard",
    imgId: "testimonial-2"
  },
  {
    quote: "Exceptional support and a developer experience that actually makes sense. It's the cloud platform we've been waiting for.",
    author: "Elena Rodriguez",
    role: "Lead Architect, Nexus Labs",
    imgId: "testimonial-3"
  }
];

const logos = [
  "Acme Corp", "Globex", "Soylent Corp", "Initech", "Umbrella", "Cyberdyne"
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 overflow-hidden bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold font-headline">Trusted by Industry Leaders</h2>
            <div className="relative h-[300px]">
              {testimonials.map((t, i) => {
                const img = PlaceHolderImages.find(p => p.id === t.imgId);
                return (
                  <div
                    key={i}
                    className={cn(
                      "absolute top-0 left-0 w-full transition-all duration-700 space-y-6",
                      active === i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
                    )}
                  >
                    <Quote className="text-accent w-12 h-12 opacity-50" />
                    <p className="text-2xl font-medium leading-relaxed italic">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={img?.imageUrl || ''}
                          alt={t.author}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{t.author}</div>
                        <div className="text-muted-foreground text-sm uppercase tracking-wider">{t.role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-12 h-1.5 rounded-full transition-all duration-300",
                    active === i ? "bg-primary" : "bg-muted hover:bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="relative bg-muted/20 p-12 rounded-[3rem] border">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="text-center mb-8 uppercase text-xs font-bold tracking-[0.2em] text-muted-foreground">Strategic Partners</div>
            <div className="grid grid-cols-2 gap-8 items-center">
              {logos.map((l, i) => (
                <div key={i} className="flex items-center justify-center p-6 bg-background rounded-2xl border shadow-sm group hover:border-primary transition-colors">
                  <span className="font-headline font-black text-xl text-muted-foreground/40 group-hover:text-primary transition-colors italic">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
