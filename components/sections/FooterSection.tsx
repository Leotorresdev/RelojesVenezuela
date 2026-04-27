"use client";

import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Clock,
  Globe,
  Headset,
  MapPin,
  MessageCircleMore,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { siteConfig } from "@/lib/site";

const socialLinks = [
  { name: "Instagram", icon: Camera, href: "#" },
  { name: "Web", icon: Globe, href: "#" },
  { name: "Contacto", icon: MessageCircleMore, href: siteConfig.whatsappUrl },
] as const;

const quickLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Catálogo", href: "#catalog" },
  { name: "Opiniones", href: "#testimonials" },
  { name: "Contacto", href: "#contact" },
] as const;

export const FooterSection = memo(function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-[#0a0908] via-[#0f0e0c] to-[#060606] px-4 py-12 sm:px-6 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[#d4af37]/3 blur-[100px]" />
        <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-[#d4af37]/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-[#d4af37]/25 bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 p-0.5">
                <Image
                  src={siteConfig.iconPath}
                  alt="Relojes Venezuela"
                  fill
                  className="rounded-xl object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#d4af37]">
                  {siteConfig.brandName}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#f5f0e6]/65">
                  Curaduría de relojes con lenguaje visual premium. Atención directa por WhatsApp y una experiencia de compra sólida para una marca que quiere verse seria y confiable.
                </p>
              </div>
            </motion.div>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#f5f0e6]/60 transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                    aria-label={social.name}
                  >
                    <Icon size={18} className="transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              Navegación
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#f5f0e6]/60 transition-colors hover:text-[#d4af37]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MessageCircleMore size={16} className="mt-0.5 text-[#d4af37]" />
                <a
                  href={siteConfig.whatsappUrl}
                  className="text-sm text-[#f5f0e6]/60 transition-colors hover:text-[#d4af37]"
                >
                  WhatsApp directo
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#d4af37]" />
                <span className="text-sm text-[#f5f0e6]/60">Atención 24/7</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#d4af37]" />
                <span className="text-sm text-[#f5f0e6]/60">Envíos nacionales</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#f5f0e6]/40">
            © {currentYear} {siteConfig.brandName}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.22em] text-[#f5f0e6]/40 transition-colors hover:text-[#d4af37]"
            >
              Términos
            </a>
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.22em] text-[#f5f0e6]/40 transition-colors hover:text-[#d4af37]"
            >
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
