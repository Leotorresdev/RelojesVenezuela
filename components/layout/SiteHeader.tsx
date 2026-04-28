"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, MessageCircleMore, X } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#catalog", label: "Catálogo" },
  { href: "#testimonials", label: "Opiniones" },
  { href: "#contact", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#090909]/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between gap-4">
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="relative h-16 w-16 overflow-hidden sm:h-20 sm:w-20">
              <Image
                src={siteConfig.iconPath}
                alt="Relojes Venezuela"
                fill
                className="rounded-lg object-cover"
                priority
                sizes="80px"
              />
            </div>
            <div className="block">
              <span className="block text-[10px] uppercase tracking-[0.34em] text-[#d4af37]">
                {siteConfig.brandName}
              </span>
            </div>
          </motion.a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#f5f0e6]/70 transition-colors hover:text-[#d4af37]"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-px h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent opacity-0 transition-opacity hover:opacity-100" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5f0e6]/75 transition-all hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-[#25D366]"
              aria-label="WhatsApp"
            >
              <MessageCircleMore size={18} />
            </motion.a>
            <motion.a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center justify-center rounded-full border border-[#d4af37]/35 bg-gradient-to-r from-[#d4af37] via-[#e8c65a] to-[#d4af37] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#111111] transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
            >
              Realiza tu pedido
            </motion.a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5f0e6]/75 md:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/5 bg-[#090909]/95 px-4 py-6 md:hidden"
        >

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3.5 text-sm font-medium uppercase tracking-[0.24em] text-[#f5f0e6]/70 transition-colors hover:bg-white/2 hover:text-[#d4af37]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/15 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#25D366]"
            >
              <MessageCircleMore size={18} />
              WhatsApp
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
