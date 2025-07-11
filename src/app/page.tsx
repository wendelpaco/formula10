import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { CourseContent } from "@/components/landing/CourseContent";
import { Guarantee } from "@/components/landing/Guarantee";
import { Purchase } from "@/components/landing/Purchase";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Testimonials />
        <CourseContent />
        <Guarantee />
        <Purchase />
      </main>
      <Footer />
    </div>
  );
}
