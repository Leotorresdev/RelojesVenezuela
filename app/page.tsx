import { SiteHeader } from "@/components/layout/SiteHeader";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen text-[#f5f0e6]">
      <SiteHeader />

      <main className="pt-20">
        <HeroSection
          title="El tiempo no se compra."
          headline="La presencia sí."
          description="En Relojes Venezuela ofrecemos relojes elegantes, modernos y accesibles, pensados para quienes valoran el estilo y la puntualidad. Garantizamos calidad, confianza y entregas seguras en todo el país."
          ctaLabel="Escríbenos por WhatsApp"
          ctaHref={siteConfig.whatsappUrl}
          images={[
            "/modelos/modelo6.jpg",
            "/modelos/modelo1.jpg",
            "/modelos/modelo2.jpg",
            "/modelos/modelo8.jpg",
          ]}
          imageAlt="Reloj elegante fotografiado con iluminación premium"
        />

        <CatalogSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      <FooterSection />
    </div>
  );
}
