"use client";

import { motion } from "framer-motion";
import { Headset, ShieldCheck, Truck, CheckCircle2 } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { Benefit } from "@/interfaces/Benefits";

const benefits: (Benefit & {
  icon: typeof ShieldCheck;
  mobileDescription: string;
  gradient: string;
})[] = [
  {
    title: "Confianza y Autenticidad",
    description:
      "Garantizamos la autenticidad de cada pieza. Mostramos el reloj que deseas con total transparencia, historial verificado y especificaciones claras.",
    mobileDescription: "Piezas verificadas con total transparencia.",
    icon: ShieldCheck,
    gradient: "from-[#d4af37]/20 via-[#d4af37]/10 to-transparent",
  },
  {
    title: "Envíos Seguros",
    description:
      "Realizamos envíos asegurados a nivel nacional. Nos encargamos de que tu pedido llegue en óptimas condiciones, con protección especial y a tiempo.",
    mobileDescription: "Despachos protegidos en todo el país.",
    icon: Truck,
    gradient: "from-[#d4af37]/20 via-[#d4af37]/10 to-transparent",
  },
  {
    title: "Atención Personalizada",
    description:
      "Te asesoramos para elegir el reloj ideal según tu estilo y presupuesto. Brindamos acompañamiento exclusivo antes, durante y después de tu compra.",
    mobileDescription: "Asesoría directa para tu compra.",
    icon: Headset,
    gradient: "from-[#d4af37]/20 via-[#d4af37]/10 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative px-2 py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[1px] w-[40%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 h-96 bg-gradient-to-b from-[#d4af37]/3 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <MotionReveal className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-4 py-1.5"
          >
            <CheckCircle2 size={14} className="text-[#d4af37]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              Nuestra Promesa
            </p>
          </motion.div>

          <MotionReveal delay={0.1}>
            <h2 className="mt-5 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Una experiencia{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-[#e8c65a] to-[#d4af37] bg-clip-text text-transparent">
                sin complicaciones
              </span>
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <p className="mt-5 text-base leading-7 text-[#f5f0e6]/70 sm:text-lg sm:leading-8">
              Diseñamos cada paso del proceso para que compres con tranquilidad
              y recibas tu reloj de manera segura y rápida.
            </p>
          </MotionReveal>
        </MotionReveal>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-4 md:grid-cols-3 md:gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#141310] via-[#0f0e0c] to-[#0a0908] p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/30 hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)] sm:p-8"
              >
                {/* Gradient glow */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${benefit.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 ring-1 ring-[#d4af37]/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-[#d4af37]/40"
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#d4af37] transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>

                {/* Content */}
                <h3 className="mt-6 font-heading text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#f5f0e6]/65 sm:mt-4 sm:text-base sm:leading-7">
                  {benefit.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-transparent" />

                {/* Mobile description (hidden on desktop) */}
                <p className="mt-3 text-xs leading-5 text-[#f5f0e6]/50 sm:hidden">
                  {benefit.mobileDescription}
                </p>

                {/* Corner accent */}
                <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-[#d4af37]/5 to-transparent rounded-tr-[1.75rem]" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Additional trust indicators */}
        <MotionReveal delay={0.4} className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/15 bg-gradient-to-r from-[#d4af37]/5 via-transparent to-[#d4af37]/5 px-6 py-8 sm:px-10">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/15 ring-1 ring-[#d4af37]/25">
                  <ShieldCheck size={22} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-white">
                    Compra protegida
                  </p>
                  <p className="text-sm text-[#f5f0e6]/60">
                    Tu satisfacción está garantizada en cada paso
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-[#d4af37]">24h</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#f5f0e6]/50">
                    Tiempo de respuesta
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-[#d4af37]">7 días</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#f5f0e6]/50">
                    Atención semanal
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-[#d4af37]">100%</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#f5f0e6]/50">
                    Seguro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
