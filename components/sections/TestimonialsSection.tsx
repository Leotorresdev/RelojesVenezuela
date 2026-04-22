"use client";

import Image from "next/image";
import { ChevronDown, Quote, Star } from "lucide-react";
import { useState } from "react";

import { MotionReveal } from "@/components/ui/MotionReveal";

const writtenTestimonials = [
  {
    name: "Carlos M.",
    location: "Caracas",
    quote:
      "La atencion fue directa, el reloj llego exactamente como me lo mostraron y el proceso de compra fue rapido. Se nota seriedad en cada detalle.",
  },
  {
    name: "Andres R.",
    location: "Valencia",
    quote:
      "Buscaba un modelo elegante para uso diario y me asesoraron muy bien. El envio fue seguro, puntual y el acabado del reloj supero mis expectativas.",
  },
];

export function TestimonialsSection() {
  const [showEvidence, setShowEvidence] = useState(false);

  return (
    <section id="testimonials" className="px-2 py-18 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <MotionReveal className="mx-auto mb-8 max-w-3xl text-center sm:mb-16">
          <p className="section-label">Opiniones y Experiencias</p>
          <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-white sm:text-5xl">
            Confianza respaldada por clientes reales
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#f5f0e6]/72 sm:mt-5 sm:text-lg sm:leading-8">
            Primero mostramos la experiencia resumida; si quieres ver pruebas
            visuales, puedes desplegar las capturas reales de conversaciones y
            entregas.
          </p>
        </MotionReveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {writtenTestimonials.map((testimonial, index) => (
            <MotionReveal key={testimonial.name} delay={index * 0.1}>
              <article className="glass-panel relative overflow-hidden rounded-[1.4rem] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:rounded-[1.75rem] sm:p-8">
                <div className="absolute right-4 top-4 text-[#d4af37]/18 sm:right-6 sm:top-6">
                  <Quote className="h-10 w-10 sm:h-14 sm:w-14" strokeWidth={1.4} />
                </div>

                <div className="flex items-center gap-1 text-[#d4af37]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={`${testimonial.name}-${starIndex}`}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#f5f0e6]/84 sm:mt-6 sm:text-lg sm:leading-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-5 border-t border-white/10 pt-4 sm:mt-8 sm:pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[#f5f0e6]/48 sm:text-xs">
                    Cliente verificado · {testimonial.location}
                  </p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.2} className="mt-5 sm:mt-8">
          <div className="glass-panel overflow-hidden rounded-[1.5rem] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
            <button
              type="button"
              onClick={() => setShowEvidence((current) => !current)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={showEvidence}
              aria-controls="testimonial-evidence"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
                  Ver mas
                </p>
                <p className="mt-2 text-sm text-[#f5f0e6]/75 sm:text-base">
                  Abrir capturas reales de conversaciones y comprobantes.
                </p>
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5f0e6]/75">
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showEvidence ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            {showEvidence ? (
              <div
                id="testimonial-evidence"
                className="border-t border-white/10 px-3 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4"
              >
                <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-3 lg:gap-6">
                  {[1, 2, 3].map((num, i) => (
                    <MotionReveal key={`chat-${num}`} delay={i * 0.1}>
                      <article className="glass-panel group relative flex min-w-[82vw] snap-center flex-col overflow-hidden rounded-[1.25rem] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.4)] sm:min-w-0 sm:rounded-[1.75rem] sm:p-4">
                        <div className="mb-3 flex items-center justify-between px-1 sm:mb-4 sm:px-0">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d4af37] sm:text-[11px] sm:tracking-[0.3em]">
                            Prueba real
                          </span>
                          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[#f5f0e6]/55">
                            WhatsApp
                          </span>
                        </div>

                        <div className="relative w-full flex-grow overflow-hidden rounded-[1rem] bg-black/30 sm:rounded-xl">
                          <Image
                            src={`/chat${num}.jpg`}
                            alt={`Testimonio y comprobante de cliente ${num}`}
                            width={600}
                            height={1200}
                            className="h-auto max-h-[28rem] w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.02] sm:max-h-[34rem]"
                            quality={95}
                          />
                        </div>
                      </article>
                    </MotionReveal>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
