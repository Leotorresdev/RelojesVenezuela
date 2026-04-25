"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, PackageCheck, ShieldCheck, Watch } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { HeroSectionProps } from "@/interfaces/Hero";

const metrics = [
  { label: "Modelos exclusivos", value: "15+", icon: Watch },
  { label: "Entrega verificada", value: "24/7", icon: ShieldCheck },
  { label: "Clientes satisfechos", value: "92%", icon: BadgeCheck },
];

const floatingVariants = {
  float: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const glowVariants = {
  pulse: {
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export function HeroSection({
  eyebrow = "Edicion Limitada 2026",
  title,
  headline,
  description,
  ctaLabel,
  ctaHref,
  imageSrc,
  images = [],
  imageAlt,
}: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayImages = images.length > 0 ? images : imageSrc ? [imageSrc] : [];

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [displayImages.length]);

  return (
    <section
      id="hero"
      className="relative mt-4 overflow-hidden rounded-[2.5rem] px-0 py-0 sm:px-0 lg:mt-8"
    >
      {/* Background gradient orbs */}
      <motion.div
        variants={glowVariants}
        animate="pulse"
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-[120px]"
      />
      <motion.div
        variants={glowVariants}
        animate="pulse"
        className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[#d4af37]/15 blur-[120px]"
      />

      <div className="relative grid items-stretch gap-0 lg:grid-cols-2">
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col justify-center bg-gradient-to-br from-[#0a0a0a]/95 via-[#0f0e0c]/90 to-[#1a1814]/85 px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20"
        >
          {/* Decorative line */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#d4af37]/60 via-[#d4af37]/20 to-transparent" />

          <MotionReveal>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
                {eyebrow}
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <h1 className="mt-6 max-w-xl font-heading text-5xl font-bold leading-[0.95] text-white sm:mt-8 sm:text-7xl lg:text-8xl">
              {title}
              <span className="mt-1 block bg-gradient-to-r from-[#d4af37] via-[#e8c65a] to-[#d4af37] bg-clip-text text-transparent">
                {headline}
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#f5f0e6]/75 sm:mt-8 sm:text-lg sm:leading-8">
              {description}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#d4af37] px-8 py-4.5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#111111] transition-all hover:bg-[#cba12d] sm:w-auto sm:px-9 sm:text-sm sm:tracking-[0.32em]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {ctaLabel}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#e8c65a] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="#catalog"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4.5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f5f0e6] backdrop-blur-sm transition-all hover:border-[#d4af37]/40 hover:bg-[#d4af37]/5 hover:text-[#d4af37] sm:w-auto sm:px-9 sm:text-sm sm:tracking-[0.32em]"
              >
                Explorar coleccion
              </a>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.4}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="group">
                    <div className="mb-2 flex items-center justify-center gap-2 text-[#d4af37] transition-colors group-hover:text-[#e8c65a]">
                      <Icon size={20} strokeWidth={1.5} />
                      <span className="font-heading text-3xl font-bold text-white sm:text-4xl">
                        {metric.value}
                      </span>
                    </div>
                    <p className="text-[9px] uppercase tracking-[0.22em] text-[#f5f0e6]/45 sm:text-[10px] sm:tracking-[0.26em]">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </MotionReveal>
        </motion.div>

        {/* Image Side */}
        <MotionReveal delay={0.2} className="relative hidden lg:block">
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="relative h-full min-h-[600px] overflow-hidden rounded-r-[2.5rem]"
          >
            {displayImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`${imageAlt} - Imagen ${index + 1}`}
                fill
                className={`object-cover object-center transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-8 right-8 max-w-[280px] overflow-hidden rounded-2xl border border-[#d4af37]/25 bg-[#0d0c0a]/90 backdrop-blur-xl shadow-2xl"
            >
              <div className="p-5">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37]/20">
                    <BadgeCheck size={16} className="text-[#d4af37]" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
                    Garantia Premium
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#f5f0e6]/85">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15">
                      <ShieldCheck size={12} className="text-[#d4af37]" />
                    </div>
                    <span className="text-[11px] tracking-[0.15em]">
                      Autenticidad verificada
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#f5f0e6]/85">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15">
                      <PackageCheck size={12} className="text-[#d4af37]" />
                    </div>
                    <span className="text-[11px] tracking-[0.15em]">
                      Envio asegurado 24/7
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#f5f0e6]/85">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15">
                      <Watch size={12} className="text-[#d4af37]" />
                    </div>
                    <span className="text-[11px] tracking-[0.15em]">
                      Compra directa por WhatsApp
                    </span>
                  </div>
                </div>

                {/* Decorative bottom line */}
                <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
              </div>
            </motion.div>

            {/* Corner accent */}
            <div className="absolute left-0 top-0 h-32 w-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent" />
          </motion.div>
        </MotionReveal>
      </div>
    </section>
  );
}
