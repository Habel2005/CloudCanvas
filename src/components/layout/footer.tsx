
import Link from 'next/link';
import { Cloud, Facebook, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                <Cloud size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight font-headline">CloudCanvas</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              The next-generation cloud infrastructure platform built for security, scalability, and performance.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-background border rounded-lg hover:text-primary transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="p-2 bg-background border rounded-lg hover:text-primary transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="p-2 bg-background border rounded-lg hover:text-primary transition-colors">
                <Github size={18} />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-muted-foreground">Product</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-primary">Compute Engine</Link></li>
              <li><Link href="#" className="hover:text-primary">Cloud Storage</Link></li>
              <li><Link href="#" className="hover:text-primary">Networking</Link></li>
              <li><Link href="#" className="hover:text-primary">Security</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-muted-foreground">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-primary">Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-muted-foreground">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2024 CloudCanvas Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground">SLA Agreement</Link>
            <Link href="#" className="hover:text-foreground">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
