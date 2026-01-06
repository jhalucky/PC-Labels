import HomeSection from "@/components/HomeSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

