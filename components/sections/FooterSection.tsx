import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-white/5">
            <Image
              src={siteConfig.iconPath}
              alt="Icono de Relojes  Venezuela"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#d4af37]">
              {siteConfig.brandName}
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-[#f5f0e6]/60">
              Curaduria de relojes con lenguaje visual premium, atencion directa
              por WhatsApp y una experiencia de compra mas solida para una marca
              que quiere verse seria.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-[#f5f0e6]/60 lg:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-[0.18em]">
            <a href="#hero" className="transition hover:text-[#d4af37]">
              Inicio
            </a>
            <a href="#catalog" className="transition hover:text-[#d4af37]">
              Catalogo
            </a>
            <a href="#testimonials" className="transition hover:text-[#d4af37]">
              Opiniones
            </a>
            <a href="#contact" className="transition hover:text-[#d4af37]">
              Contacto
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.18em]">
            © 2026 Relojes Venezuela. Catalogo premium por WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
