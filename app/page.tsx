import Image from "next/image";
import { MessageCircleMore } from "lucide-react";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { NavLink } from "@/components/ui/NavLink";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen text-[#f5f0e6]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090909]/78 px-4 py-4 backdrop-blur-2xl sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="relative h-14 w-20 shrink-0 sm:h-[4.5rem] sm:w-[5.6rem]">
              <Image
                src={siteConfig.iconPath}
                alt="Icono de Relojes Venezuela"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-[11px] uppercase tracking-[0.26em] text-[#d4af37] sm:text-sm sm:tracking-[0.34em]">
                {siteConfig.brandName}
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-2 text-sm md:flex">
            <NavLink href="#hero" label="Inicio" />
            <NavLink href="#catalog" label="Catalogo" active />
            <NavLink href="#testimonials" label="Opiniones" />
            <NavLink href="#contact" label="Contacto" />
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5f0e6]/75 hover:border-[#d4af37]/40 hover:text-[#d4af37]"
              aria-label="WhatsApp"
            >
              <MessageCircleMore size={18} />
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#d4af37]/35 bg-[#d4af37] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#111111] hover:bg-[#cfa62f]"
            >
              realiza tu pedido
            </a>
          </div>

          <div className="flex w-full items-center justify-between gap-3 md:hidden">
            <nav className="mobile-nav-scroll flex min-w-0 flex-1 items-center gap-2 overflow-x-auto pb-1 text-sm">
              <NavLink href="#hero" label="Inicio" />
              <NavLink href="#catalog" label="Catalogo" active />
              <NavLink href="#testimonials" label="Opiniones" />
              <NavLink href="#contact" label="Contacto" />
            </nav>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5f0e6]/75"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircleMore size={18} />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <HeroSection
          title="El tiempo no se compra."
          headline="La presencia si."
          description="En relojes Venezuela ofrecemos relojes elegantes, modernos y accesibles, pensados para quienes valoran el estilo y la puntualidad. Garantizamos calidad, confianza y entregas seguras en todo el país."
          ctaLabel="Escribenos por WhatsApp"
          ctaHref={siteConfig.whatsappUrl}
          images={[
            "/modelos/modelo6.jpg",
            "/modelos/modelo1.jpg",
            "/modelos/modelo2.jpg",
            "/modelos/modelo8.jpg",
          ]}
          imageAlt="Reloj elegante fotografiado con iluminacion premium"
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
