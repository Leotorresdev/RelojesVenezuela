"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, PackageCheck, ShieldCheck, Watch } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

import { HeroSectionProps } from "@/interfaces/Hero";
import { MotionReveal } from "@/components/ui/MotionReveal";

const metrics = [
  { label: "Modelos exclusivos", value: "15+", icon: Watch },
  { label: "Entrega verificada", value: "24/7", icon: ShieldCheck },
  { label: "Clientes satisfechos", value: "92%", icon: BadgeCheck },
] as const;

const IMAGE_TRANSITION_INTERVAL = 2000;

export function HeroSection({
  eyebrow = "Edición Limitada 2026",
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
  const prefersReducedMotion = useReducedMotion();

  const displayImages = images.length > 0 ? images : imageSrc ? [imageSrc] : [];
  const shouldAnimateGallery = displayImages.length > 1 && !prefersReducedMotion;

  useEffect(() => {
    if (!shouldAnimateGallery) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, IMAGE_TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, [shouldAnimateGallery, displayImages.length]);

  return (
    <section
      id="hero"
      className="relative mt-4 overflow-hidden rounded-[2.5rem] px-0 py-0 sm:px-0 lg:mt-8"
    >
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-[120px]" />
      <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[#d4af37]/15 blur-[120px]" />

      <div className="relative grid items-stretch gap-0 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col justify-center bg-gradient-to-br from-[#0a0a0a]/95 via-[#0f0e0c]/90 to-[#1a1814]/85 px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20"
        >
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#d4af37]/60 via-[#d4af37]/20 to-transparent" />

          <MotionReveal>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]" />
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
                {eyebrow}
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <h1 className="mt-6 max-w-xl font-heading text-5xl font-semibold leading-[0.95] text-white sm:mt-8 sm:text-7xl lg:text-8xl">
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
                Explorar colección
              </a>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.4}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {metrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div key={metric.label} className="group">
                    <div className="mb-2 flex items-center justify-center gap-2 text-[#d4af37] transition-colors group-hover:text-[#e8c65a]">
                      <Icon size={20} strokeWidth={1.5} />
                      <span className="font-heading text-3xl font-semibold text-white sm:text-4xl">
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

        <MotionReveal delay={0.2} className="relative hidden lg:block">
          <motion.div
            initial={{ y: 0 }}
            animate={prefersReducedMotion ? { y: 0 } : { y: -12 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative h-full min-h-[600px] overflow-hidden rounded-r-[2.5rem]"
          >
            {displayImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 1.05,
                }}
                transition={{
                  opacity: { duration: 1.2, ease: "easeInOut" },
                  scale: { duration: 2, ease: "easeOut" },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={src}
                  alt={`${imageAlt} - Imagen ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="(max-width: 1024px) 0vw, 50vw"
                  quality={86}
                />
              </motion.div>
            ))}

            {/* Indicadores de posición */}
            {displayImages.length > 1 && (
              <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-sm">
                {displayImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[#d4af37]"
                        : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20" />

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
                    Garantía Premium
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
                      Envío asegurado 24/7
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

                <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
              </div>
            </motion.div>

            <div className="absolute left-0 top-0 h-32 w-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent" />
          </motion.div>
        </MotionReveal>
      </div>
    </section>
  );
}
