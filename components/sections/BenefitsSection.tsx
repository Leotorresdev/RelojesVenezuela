import { Headset, ShieldCheck, Truck } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { Benefit } from "@/interfaces/Benefits";

const benefits: (Benefit & {
  icon: typeof ShieldCheck;
  mobileDescription: string;
})[] = [
  {
    title: "Confianza y Autenticidad",
    description:
      "Garantizamos la autenticidad de cada pieza. Mostramos el reloj que deseas con total transparencia, historial verificado y especificaciones claras.",
    mobileDescription: "Piezas verificadas y publicadas con transparencia.",
    icon: ShieldCheck,
  },
  {
    title: "Envios Seguros",
    description:
      "Realizamos envios asegurados a nivel nacional. Nos encargamos de que tu pedido llegue en optimas condiciones, con proteccion especial y a tiempo.",
    mobileDescription: "Despachos protegidos y controlados en todo el pais.",
    icon: Truck,
  },
  {
    title: "Atencion Personalizada",
    description:
      "Te asesoramos para elegir el reloj ideal segun tu estilo y presupuesto. Brindamos acompanamiento exclusivo antes, durante y despues de tu compra.",
    mobileDescription: "Asesoria directa para elegir mejor y comprar rapido.",
    icon: Headset,
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="px-2 py-18 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <MotionReveal className="mb-8 max-w-full sm:mb-14">
          <p className="section-label">Nuestra Promesa</p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            La experiencia que mereces
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#f5f0e6]/72 sm:mt-5 sm:text-lg sm:leading-8">
            Te ofrecemos una experiencia de compra segura, confiable y
            completamente personalizada, disenada para que encuentres el reloj
            perfecto con total tranquilidad.
          </p>
        </MotionReveal>

        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <MotionReveal
                key={benefit.title}
                delay={index * 0.08}
                className="h-full"
              >
                <article className="glass-panel flex h-full flex-col rounded-[1.1rem] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)] sm:rounded-[1.75rem] sm:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4af37]/15 text-[#d4af37] ring-1 ring-[#d4af37]/20 sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="sm:h-[26px] sm:w-[26px]"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold leading-tight tracking-tight text-white sm:mt-8 sm:text-xl lg:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-4 text-[#f5f0e6]/72 sm:hidden">
                    {benefit.mobileDescription}
                  </p>
                  <p className="mt-4 hidden flex-grow text-base leading-relaxed text-[#f5f0e6]/72 sm:block">
                    {benefit.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
