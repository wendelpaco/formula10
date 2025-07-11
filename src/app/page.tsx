import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Urgency } from "@/components/landing/Urgency";
import { Testimonials } from "@/components/landing/Testimonials";
import { Author } from "@/components/landing/Author";
import { Bonuses } from "@/components/landing/Bonuses";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Urgency />
        <Testimonials />
        <Author />
        <Bonuses />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}