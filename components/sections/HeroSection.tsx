"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Watch } from "lucide-react";
import { useEffect, useState } from "react";

import { HeroSectionProps } from "@/interfaces/Hero";
import { MotionReveal } from "@/components/ui/MotionReveal";

const metrics = [
  { label: "Modelos exclusivos", value: "15+", icon: Watch },
  { label: "Entrega verificada", value: "24/7", icon: ShieldCheck },
  { label: "Clientes satisfechos", value: "92%", icon: BadgeCheck },
] as const;

const IMAGE_TRANSITION_INTERVAL = 3000;

export function HeroSection({
  eyebrow = "Edición Limitada 2026",
  title,
  headline,
  description,
  ctaLabel,
  ctaHref,
  imageSrc,
  images = [],
  videoSrc,
  imageAlt,
}: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayImages = images.length > 0 ? images : imageSrc ? [imageSrc] : [];

  useEffect(() => {
    if (displayImages.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, IMAGE_TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, [displayImages.length]);

  return (
    <section
      id="hero"
      className="relative mt-2 flex h-[calc(100dvh-7rem)] min-h-[600px] flex-col justify-center overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:mt-8 lg:h-auto lg:min-h-[85vh]"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-center"
          />
        ) : (
          displayImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 1.05,
              }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 4, ease: "easeOut" },
              }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`${imageAlt} - Imagen ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                quality={86}
              />
            </motion.div>
          ))
        )}

        {/* Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-transparent to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-12 text-center sm:px-10 sm:py-20 lg:px-12 lg:py-32">
        <MotionReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-black/40 px-4 py-1.5 sm:px-5 sm:py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]" />
            </span>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
              {eyebrow}
            </p>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.2}>
          <h1 className="mt-6 max-w-4xl font-heading text-[2.5rem] font-semibold leading-[1.05] text-white drop-shadow-2xl sm:text-4xl lg:text-5xl">
            {title}
            <span className="mt-2 block bg-gradient-to-r from-[#d4af37] via-[#e8c65a] to-[#d4af37] bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>
        </MotionReveal>

        <MotionReveal delay={0.4}>
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[#f5f0e6]/90 drop-shadow-md sm:text-xl">
            {description}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.6}>
          <div className="mt-8 flex w-full flex-col items-center gap-3 min-[400px]:flex-row min-[400px]:justify-center sm:mt-10 sm:gap-5">
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex w-full min-[400px]:w-auto items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-[#d4af37] px-6 py-4 text-center text-[10px] min-[400px]:text-[11px] sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.32em] text-[#111111] shadow-xl transition-all hover:bg-[#cba12d] sm:px-10 sm:py-5"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                {ctaLabel}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5"
                />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#e8c65a] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#catalog"
              className="inline-flex w-full min-[400px]:w-auto items-center justify-center rounded-full border border-white/30 bg-black/30 px-6 py-4 text-center text-[10px] min-[400px]:text-[11px] sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.32em] text-[#f5f0e6] backdrop-blur-md transition-all hover:border-[#d4af37] hover:bg-[#d4af37]/20 hover:text-[#d4af37] sm:px-10 sm:py-5"
            >
              Explorar
            </a>
          </div>
        </MotionReveal>
      </div>

      {/* Metrics floating at the bottom */}
      <div className="relative z-10 mx-auto mt-auto w-full max-w-6xl px-4 pb-6 sm:px-10 sm:pb-10">
        <MotionReveal delay={0.8}>
          <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl sm:rounded-3xl border border-white/20 bg-black/40 py-4 shadow-2xl backdrop-blur-md sm:py-6">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="group flex flex-col items-center justify-start px-2 sm:px-4"
                >
                  <div className="mb-1.5 sm:mb-3 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[#d4af37] transition-colors group-hover:text-[#e8c65a]">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                    <span className="drop-shadow-md font-heading text-xl font-semibold text-white sm:text-4xl">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-center text-[8px] uppercase tracking-[0.1em] text-[#f5f0e6]/70 sm:text-xs sm:tracking-[0.26em]">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
