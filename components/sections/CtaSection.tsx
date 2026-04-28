"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageCircle, Send } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { siteConfig } from "@/lib/site";

const features = [
  { icon: Clock, text: "Respuesta en 24h" },
  { icon: Send, text: "Atención directa" },
  { icon: MessageCircle, text: "Sin intermediarios" },
];

export function CtaSection() {
  return (
    <section id="contact" className="relative px-2 py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[1px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#d4af37]/3 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <MotionReveal className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-4 py-1.5"
          >
            <Send size={14} className="text-[#d4af37]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              Contacto Directo
            </p>
          </motion.div>

          <MotionReveal delay={0.1}>
            <h2 className="mt-5 font-heading text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              ¿Listo para encontrar{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-[#e8c65a] to-[#d4af37] bg-clip-text text-transparent">
                tu reloj ideal?
              </span>
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f5f0e6]/70 sm:text-lg sm:leading-8">
              Escríbenos directamente por WhatsApp para una atención personalizada e inmediata.
            </p>
          </MotionReveal>
        </MotionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <MotionReveal delay={0.2}>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-full min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/15 via-[#d4af37]/5 to-transparent p-8 text-center transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] sm:p-12"
            >
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="relative flex flex-col items-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#25D366]/20 ring-1 ring-[#25D366]/30 transition-transform group-hover:scale-110">
                  <MessageCircle size={32} className="text-[#25D366]" />
                </div>

                <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                  Respuesta inmediata por <span className="text-[#25D366]">WhatsApp</span>
                </h3>

                <p className="mt-4 text-base leading-7 text-[#f5f0e6]/70">
                  Haz clic abajo y comienza el chat directamente. Sin guardar contacto, sin esperas.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-[0.24em] text-[#111111] transition-all group-hover:bg-[#20bd5a] group-hover:shadow-[0_10px_40px_rgba(37,211,102,0.3)]">
                  Abrir WhatsApp
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.text}
                        className="flex items-center gap-2 text-[#f5f0e6]/50"
                      >
                        <Icon size={14} className="text-[#d4af37]" />
                        <span className="text-[10px] uppercase tracking-[0.2em]">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </a>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#141310] via-[#0f0e0c] to-[#0a0908] p-8 sm:p-10">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#d4af37]/5 blur-2xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/20 ring-1 ring-[#d4af37]/30">
                  <Clock size={26} className="text-[#d4af37]" />
                </div>

                <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                  Horario de atención
                </h3>

                <p className="mt-4 text-base leading-7 text-[#f5f0e6]/70">
                  Estamos disponibles todos los días de la semana para brindarte la mejor atención.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/2 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/20">
                        <Clock size={18} className="text-[#d4af37]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Lunes a Viernes</p>
                        <p className="text-xs text-[#f5f0e6]/50">8:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                      24/7
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/2 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/20">
                        <MessageCircle size={18} className="text-[#d4af37]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Fin de Semana</p>
                        <p className="text-xs text-[#f5f0e6]/50">Atención continua</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                      Activo
                    </span>
                  </div>
                </div>

                <blockquote className="mt-8 border-l-2 border-[#d4af37]/30 pl-4 italic text-[#f5f0e6]/60">
                  &ldquo;La mejor forma de encontrar tu reloj ideal es conversando directamente con nosotros.&rdquo;
                </blockquote>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
