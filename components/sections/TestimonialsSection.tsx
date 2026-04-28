"use client";

import Image from "next/image";
import { memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, ChevronDown, Quote, ShieldCheck, Star, UserCircle } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

const writtenTestimonials: Testimonial[] = [
  {
    name: "Carlos M.",
    location: "Caracas",
    quote:
      "La atención fue directa, el reloj llegó exactamente como me lo mostraron y el proceso de compra fue rápido. Se nota seriedad en cada detalle.",
    rating: 5,
  },
  {
    name: "Andrés R.",
    location: "Valencia",
    quote:
      "Buscaba un modelo elegante para uso diario y me asesoraron muy bien. El envío fue seguro, puntual y el acabado del reloj superó mis expectativas.",
    rating: 5,
  },
];

const trustBadges = [
  { icon: ShieldCheck, text: "Compra segura" },
  { icon: CheckCircle, text: "Entrega garantizada" },
  { icon: Star, text: "5 estrellas" },
] as const;

export const TestimonialsSection = memo(function TestimonialsSection() {
  const [showEvidence, setShowEvidence] = useState(false);

  return (
    <section id="testimonials" className="relative px-2 py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[1px] w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent" />
        <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-[#d4af37]/3 blur-[100px]" />
        <div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-[#d4af37]/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-4 py-1.5"
          >
            <Star size={14} className="fill-[#d4af37] text-[#d4af37]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              Testimonios Reales
            </p>
          </motion.div>

          <MotionReveal delay={0.1}>
            <h2 className="mt-5 font-heading text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Clientes que{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-[#e8c65a] to-[#d4af37] bg-clip-text text-transparent">
                confían en nosotros
              </span>
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <p className="mt-5 text-base leading-7 text-[#f5f0e6]/70 sm:text-lg sm:leading-8">
              Las experiencias de quienes ya encontraron su reloj ideal. Transparencia y confianza en cada compra.
            </p>
          </MotionReveal>
        </MotionReveal>

        <div className="mx-auto mb-10 grid max-w-5xl gap-5 lg:gap-6">
          {writtenTestimonials.map((testimonial, index) => (
            <MotionReveal key={testimonial.name} delay={index * 0.1}>
              <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#141310] via-[#0f0e0c] to-[#0a0908] p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/25 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] sm:p-8">
                <div className="absolute right-5 top-5 text-[#d4af37]/15 transition-opacity group-hover:opacity-30">
                  <Quote className="h-12 w-12 sm:h-16 sm:w-16" strokeWidth={1.2} />
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className="fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>

                <p className="mt-5 text-base leading-7 text-[#f5f0e6]/85 sm:mt-6 sm:text-lg sm:leading-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 ring-1 ring-[#d4af37]/20">
                    <UserCircle size={20} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-[#f5f0e6]/50">
                      Cliente verificado · {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 top-0 h-24 w-24 rounded-tl-[1.75rem] bg-gradient-to-br from-[#d4af37]/5 to-transparent" />
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.3}>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#141310] via-[#0f0e0c] to-[#0a0908] shadow-xl">
            <button
              type="button"
              onClick={() => setShowEvidence((current) => !current)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
              aria-expanded={showEvidence}
              aria-controls="testimonial-evidence"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/15 ring-1 ring-[#d4af37]/25">
                  <Image
                    src="/icono.jpg"
                    alt="Icono"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
                    Pruebas verificadas
                  </p>
                  <p className="mt-1 text-sm text-[#f5f0e6]/75 sm:text-base">
                    {showEvidence
                      ? "Ocultar capturas de conversaciones y entregas"
                      : "Ver capturas reales de conversaciones y comprobantes"}
                  </p>
                </div>
              </div>
              <motion.span
                animate={{ rotate: showEvidence ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/6 text-[#f5f0e6]/75"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {showEvidence && (
                <motion.div
                  id="testimonial-evidence"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="border-t border-white/10 px-4 pb-5 pt-1 sm:px-6"
                >
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((num, i) => (
                      <MotionReveal key={`chat-${num}`} delay={i * 0.1}>
                        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/25">
                          <div className="relative aspect-[3/4] overflow-hidden">
                            <Image
                              src={`/chat${num}.jpg`}
                              alt={`Testimonio y comprobante de cliente ${num}`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-contain transition-transform duration-500 group-hover:scale-105"
                              quality={84}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d4af37]/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]">
                              <CheckCircle size={10} />
                              Verificado
                            </span>
                          </div>
                        </div>
                      </MotionReveal>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.4} className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-[#f5f0e6]/50">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;

              return (
                <div key={badge.text} className="flex items-center gap-2">
                  <Icon size={18} className="text-[#d4af37]" />
                  <span className="text-xs uppercase tracking-[0.2em]">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
});
