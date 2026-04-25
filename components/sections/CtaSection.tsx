"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, ShieldCheck, Clock, Zap, ArrowRight } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { siteConfig } from "@/lib/site";

export function CtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "No fue posible guardar los datos.");
      }

      form.reset();
      setFeedback({
        type: "success",
        message:
          result.message ?? "Tus datos fueron guardados. Te contactaremos pronto.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al guardar la información.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: Clock, text: "Respuesta en 24h" },
    { icon: ShieldCheck, text: "Datos protegidos" },
    { icon: Zap, text: "Sin spam" },
  ];

  return (
    <section id="contact" className="relative px-2 py-20 lg:py-28">
      {/* Background */}
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
            <h2 className="mt-5 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              ¿Listo para encontrar{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-[#e8c65a] to-[#d4af37] bg-clip-text text-transparent">
                tu reloj ideal?
              </span>
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f5f0e6]/70 sm:text-lg sm:leading-8">
              Déjanos tus datos y te contactaremos con una atención personalizada.
              O escribe directamente por WhatsApp para una respuesta más rápida.
            </p>
          </MotionReveal>
        </MotionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <MotionReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#141310] via-[#0f0e0c] to-[#0a0908] p-6 shadow-xl sm:p-8"
            >
              {/* Decorative glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#d4af37]/5 blur-2xl" />

              <div className="relative grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f5f0e6]/60">
                    Nombre completo
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/[0.02] px-5 py-4 text-base text-white placeholder:text-[#f5f0e6]/25 transition-all duration-300 focus:border-[#d4af37]/40 focus:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/10"
                    placeholder="Ej: Juan Pérez"
                  />
                </label>

                <label className="block">
                  <span className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f5f0e6]/60">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/[0.02] px-5 py-4 text-base text-white placeholder:text-[#f5f0e6]/25 transition-all duration-300 focus:border-[#d4af37]/40 focus:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/10"
                    placeholder="tucorreo@email.com"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f5f0e6]/60">
                  Mensaje
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.02] px-5 py-4 text-base text-white placeholder:text-[#f5f0e6]/25 transition-all duration-300 focus:border-[#d4af37]/40 focus:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/10"
                  placeholder="Cuéntanos qué modelo buscas o si tienes alguna duda..."
                />
              </label>

              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-5 rounded-xl border px-4 py-3.5 text-sm ${
                    feedback.type === "success"
                      ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
                      : "border-red-400/25 bg-red-400/10 text-red-100"
                  }`}
                >
                  {feedback.message}
                </motion.div>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#d4af37] px-8 py-4.5 text-sm font-bold uppercase tracking-[0.24em] text-[#111111] transition-all hover:bg-[#cba12d] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </button>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4.5 text-sm font-bold uppercase tracking-[0.24em] text-[#f5f0e6] backdrop-blur-sm transition-all hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-[#25D366] sm:w-auto"
                >
                  <MessageCircle size={18} />
                  WhatsApp directo
                </a>
              </div>

              {/* Trust features */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 pt-4">
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
            </form>
          </MotionReveal>

          {/* Alternative CTA */}
          <MotionReveal delay={0.3}>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 via-[#d4af37]/5 to-transparent p-8 sm:p-10">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/20 ring-1 ring-[#d4af37]/30">
                  <MessageCircle size={26} className="text-[#d4af37]" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  Respuesta inmediata por{" "}
                  <span className="text-[#d4af37]">WhatsApp</span>
                </h3>

                <p className="mt-4 text-base leading-7 text-[#f5f0e6]/70">
                  Para una atención más rápida, escríbenos directamente.
                  Resolvemos tus dudas al instante.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all hover:border-[#d4af37]/30 hover:bg-[#d4af37]/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/20">
                        <MessageCircle size={18} className="text-[#25D366]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Chat directo
                        </p>
                        <p className="text-xs text-[#f5f0e6]/50">
                          Sin guardar contacto
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-[#f5f0e6]/40 transition-transform group-hover:translate-x-1 group-hover:text-[#d4af37]"
                    />
                  </a>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/20">
                        <Clock size={18} className="text-[#d4af37]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Horario de atención
                        </p>
                        <p className="text-xs text-[#f5f0e6]/50">
                          Lunes a Domingo - 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative quote */}
                <blockquote className="mt-8 border-l-2 border-[#d4af37]/30 pl-4 italic text-[#f5f0e6]/60">
                  "La mejor forma de encontrar tu reloj ideal es conversando
                  directamente con nosotros."
                </blockquote>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
