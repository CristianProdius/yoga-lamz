// app/page.jsx
import ContactSection from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookPromoSection from "@/components/Promo";
import ReviewsSection from "@/components/Reviews";
import ServicesSection from "@/components/Services";
import Statistics from "@/components/Statistics";
import OurTeam from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Statistics />
      <ServicesSection />
      <OurTeam />
      <ReviewsSection />
      <BookPromoSection />
      <ContactSection />
      <FAQ />
      <Footer />
    </main>
  );
}
