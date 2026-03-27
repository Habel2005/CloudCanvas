
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Products } from '@/components/sections/products';
import { Testimonials } from '@/components/sections/testimonials';
import { ConsultationForm } from '@/components/sections/consultation-form';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Testimonials />
      <ConsultationForm />
      <Footer />
    </main>
  );
}
