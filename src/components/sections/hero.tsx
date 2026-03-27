
"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Zap size={14} className="fill-primary" />
            Empowering Enterprise 2.0
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] font-headline">
            The Infrastructure Your <span className="gradient-text">Ambition</span> Deserves.
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
            CloudCanvas provides high-performance, resilient, and infinitely scalable cloud architecture tailored for modern enterprises. Deploy faster, secure everything, and scale globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold group shadow-xl shadow-primary/25">
              Request a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-base font-semibold border-2">
              View Product Roadmap
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t">
            <div className="space-y-1">
              <div className="text-2xl font-bold">99.99%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Uptime SLA</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold">140+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Edge Nodes</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold">&lt;10ms</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Avg Latency</div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative rounded-3xl overflow-hidden border bg-background shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              src={heroImg?.imageUrl || ''}
              alt={heroImg?.description || 'Cloud Infrastructure'}
              width={1200}
              height={800}
              className="object-cover w-full aspect-[4/3]"
              data-ai-hint={heroImg?.imageHint}
              priority
            />
            
            {/* Overlay UI Cards */}
            <div className="absolute bottom-6 left-6 p-4 glass-panel rounded-2xl flex items-center gap-4 animate-in slide-in-from-left duration-700 delay-300">
              <div className="w-12 h-12 bg-green-500/20 text-green-600 rounded-full flex items-center justify-center">
                <Shield size={24} />
              </div>
              <div>
                <div className="text-sm font-bold">ISO 27001 Certified</div>
                <div className="text-xs text-muted-foreground">Enterprise Security Standards</div>
              </div>
            </div>

            <div className="absolute top-6 right-6 p-4 glass-panel rounded-2xl flex items-center gap-4 animate-in slide-in-from-right duration-700 delay-500">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                <Cloud size={24} />
              </div>
              <div>
                <div className="text-sm font-bold">Auto-Scaling Active</div>
                <div className="text-xs text-muted-foreground">Live Load Balancing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
