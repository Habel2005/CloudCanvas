
"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Shield, Zap, Activity, Globe, Cpu } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from 'react';

const chartData = [
  { value: 400 }, { value: 300 }, { value: 500 }, { value: 450 },
  { value: 600 }, { value: 550 }, { value: 800 }, { value: 700 },
  { value: 900 }, { value: 850 }, { value: 950 }, { value: 1000 },
];

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Moving Blurs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[160px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10 relative z-30">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              V3.0 Platform Now Live
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter font-headline text-foreground italic">
                CLOUD <br /> 
                <span className="gradient-text not-italic inline-block animate-in slide-in-from-left-full duration-1000 ease-out">
                  INFRASTRUCTURE
                </span> <br /> 
                REIMAGINED.
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                Engineered for the elite. CloudCanvas delivers high-performance, resilient, and infinitely scalable architecture tailored for global scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold group shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all">
                Start Building
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold border-2 hover:bg-muted transition-all">
                Documentation
              </Button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-border/50">
              {[
                { label: 'Uptime', val: '99.999%', icon: <Shield size={14} className="text-green-500" /> },
                { label: 'Edge Nodes', val: '240+', icon: <Globe size={14} className="text-primary" /> },
                { label: 'Compute', val: '1.2M+', icon: <Cpu size={14} className="text-accent" /> },
              ].map((stat, i) => (
                <div key={i} className="space-y-2 group">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.icon}
                    {stat.label}
                  </div>
                  <div className="text-3xl font-black font-headline tracking-tighter">{stat.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative z-20">
            <div className="relative group">
              {/* Main Image Card */}
              <div className="relative rounded-[3rem] overflow-hidden border-4 border-background shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] transition-transform duration-700 group-hover:scale-[1.02]">
                <Image
                  src={heroImg?.imageUrl || ''}
                  alt={heroImg?.description || 'Cloud Infrastructure'}
                  width={800}
                  height={1000}
                  className="object-cover w-full aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-1000"
                  data-ai-hint={heroImg?.imageHint}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Dynamic Card: Live Traffic */}
              <Card className="absolute -left-12 bottom-20 w-64 p-6 glass-panel border-white/20 rounded-[2rem] shadow-2xl animate-in slide-in-from-left duration-1000 delay-300 hidden xl:block">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Activity size={18} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider">Live Traffic</span>
                  </div>
                  <span className="text-xs font-black text-green-500">+12.4%</span>
                </div>
                <div className="h-20 w-full">
                  {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="hsl(var(--primary))" 
                          fillOpacity={1} 
                          fill="url(#colorVal)" 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </Card>

              {/* Floating Dynamic Card: Security Status */}
              <div className="absolute -right-8 top-12 p-4 glass-panel rounded-2xl flex items-center gap-4 border-white/20 shadow-2xl animate-in slide-in-from-right duration-1000 delay-500 hover:-translate-y-1 transition-transform cursor-default">
                <div className="w-12 h-12 bg-green-500/20 text-green-600 rounded-full flex items-center justify-center">
                  <Shield size={24} className="fill-green-500/10" />
                </div>
                <div>
                  <div className="text-sm font-black uppercase tracking-tight">Security Shield</div>
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Active Protection</div>
                </div>
              </div>

              {/* Floating Dynamic Card: Global Clusters */}
              <div className="absolute -bottom-8 -right-4 p-5 glass-panel rounded-3xl border-white/20 shadow-2xl animate-in slide-in-from-bottom duration-1000 delay-700">
                <div className="flex -space-x-3 mb-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                       <Image src={`https://picsum.photos/seed/${i + 10}/32/32`} alt="User" width={32} height={32} />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                    +12k
                  </div>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider">Trusted by Enterprises</div>
              </div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute -inset-10 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-20 border border-accent/5 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
