"use client";

import { FormEvent, useState } from "react";

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
            : "Ocurrio un error al guardar la informacion.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-2 py-18 lg:py-24">
      <MotionReveal className="glass-panel mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] lg:p-14">
        <div className="flex flex-col items-center text-center">
          <p className="section-label">Contacto Directo</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Dejanos tus datos
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#f5f0e6]/72 sm:mt-5 sm:text-lg sm:leading-8">
            Completa el formulario indicando que estilo de reloj buscas o las
            dudas que tengas. Guardaremos tu informacion para contactarte con
            una atencion mas precisa.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 w-full max-w-2xl rounded-[1.75rem] border border-[#d4af37]/18 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)] md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f5f0e6]/60">
                Nombre
              </span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-[1rem] border border-white/10 bg-black/40 px-5 py-4 text-base text-white placeholder:text-[#f5f0e6]/30 transition-colors focus:border-[#d4af37]/50 focus:bg-black/60 focus:outline-none"
                placeholder="Tu nombre completo"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f5f0e6]/60">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-[1rem] border border-white/10 bg-black/40 px-5 py-4 text-base text-white placeholder:text-[#f5f0e6]/30 transition-colors focus:border-[#d4af37]/50 focus:bg-black/60 focus:outline-none"
                placeholder="tunombre@email.com"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f5f0e6]/60">
              Mensaje
            </span>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full resize-none rounded-[1rem] border border-white/10 bg-black/40 px-5 py-4 text-base text-white placeholder:text-[#f5f0e6]/30 transition-colors focus:border-[#d4af37]/50 focus:bg-black/60 focus:outline-none"
              placeholder="Cuentanos que modelo buscas o si tienes alguna duda en particular."
            />
          </label>

          {feedback ? (
            <div
              className={`mt-5 rounded-[1rem] border px-4 py-3 text-sm ${
                feedback.type === "success"
                  ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
                  : "border-red-400/25 bg-red-400/10 text-red-100"
              }`}
            >
              {feedback.message}
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#111111] transition-all hover:scale-[1.02] hover:bg-[#c39f2d] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Guardando..." : "Guardar Datos"}
            </button>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#f5f0e6] transition-colors hover:border-[#d4af37]/35 hover:text-[#d4af37]"
            >
              Ir a WhatsApp
            </a>
          </div>
        </form>
      </MotionReveal>
    </section>
  );
}
