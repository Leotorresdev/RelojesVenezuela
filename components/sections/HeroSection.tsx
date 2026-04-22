"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, PackageCheck, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { HeroSectionProps } from "@/interfaces/Hero";



const metrics = [
  { label: "Modelos disponibles", value: "15" },
  { label: "Entrega verificada", value: "24/7" },
  { label: "Clientes recurrentes", value: "92%" },
];

export function HeroSection({
  eyebrow = "Seleccion destacada",
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
    }, 3500); // Cambia de imagen cada 3.5 segundos
    return () => clearInterval(interval);
  }, [displayImages.length]);

  return (
    <section
      id="hero"
      className="luxury-shell mt-4 grid items-center gap-8 rounded-[2rem] px-5 py-6 sm:px-8 sm:py-10 lg:mt-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-10 lg:py-12"
    >
      <MotionReveal className="max-w-2xl">
        <p className="section-label">{eyebrow}</p>
        <h1 className="mt-5 max-w-xl text-balance text-4xl leading-[0.94] text-white sm:mt-6 sm:text-6xl lg:text-7xl">
          {title}
          <span className="mt-2 block text-[#d4af37]">{headline}</span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#f5f0e6]/78 sm:mt-6 sm:text-lg sm:leading-8">
          {description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d4af37] px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#111111] hover:bg-[#cba12d] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.28em]"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </a>
          <a
            href="#catalog"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f5f0e6] hover:border-[#d4af37]/30 hover:text-[#d4af37] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.28em]"
          >
            Ver coleccion
          </a>
        </div>

        <div
          id="collection"
          className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:mt-12 sm:grid-cols-3"
        >
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-3xl text-white sm:text-4xl">{metric.value}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#f5f0e6]/48 sm:text-xs sm:tracking-[0.26em]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </MotionReveal>

      <MotionReveal delay={0.12} y={36} className="relative">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.38)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] sm:aspect-[4/5]">
            {displayImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`${imageAlt} - Imagen ${index + 1}`}
                fill
                className={`object-cover object-center transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.5))]" />
          </div>

          <div className="mt-4 w-full rounded-[1.35rem] border border-[#d4af37]/20 bg-[#11100d]/88 p-4 shadow-2xl backdrop-blur-xl sm:max-w-[15rem] sm:p-5 lg:absolute lg:bottom-6 lg:right-6 lg:mt-0 lg:w-[15rem]">
            <div className="space-y-3 text-sm text-[#f5f0e6]/82">
              <div className="flex items-center gap-3">
                <BadgeCheck size={16} className="text-[#d4af37]" />
                Originales y seleccionados
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-[#d4af37]" />
                Validacion previa al envio
              </div>
              <div className="flex items-center gap-3">
                <PackageCheck size={16} className="text-[#d4af37]" />
                Cierre rapido por WhatsApp
              </div>
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
