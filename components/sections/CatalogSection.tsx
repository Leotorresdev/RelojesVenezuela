"use client";

import { useState } from "react";
import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, TrendingUp, Watch } from "lucide-react";

import { MotionReveal } from "@/components/ui/MotionReveal";
import { ProductCard } from "@/components/ui/ProductCard";
import { catalogProductsCaballero, catalogProductsDamas } from "@/lib/site";

type CategoryTab = "caballero" | "dama";

export const CatalogSection = memo(function CatalogSection() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("caballero");
  const [showAllCaballero, setShowAllCaballero] = useState(false);
  const [showAllDamas, setShowAllDamas] = useState(false);

  const caballeroProducts = showAllCaballero
    ? catalogProductsCaballero
    : catalogProductsCaballero.slice(0, 4);

  const damasProducts = showAllDamas
    ? catalogProductsDamas
    : catalogProductsDamas.slice(0, 4);

  const activeProducts = activeTab === "caballero" ? caballeroProducts : damasProducts;
  const totalProducts = activeTab === "caballero"
    ? catalogProductsCaballero.length
    : catalogProductsDamas.length;

  const handleShowAll = () => {
    if (activeTab === "caballero") {
      setShowAllCaballero(true);
    } else {
      setShowAllDamas(true);
    }
  };

  return (
    <section id="catalog" className="relative px-2 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[1px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-[#d4af37]/5 blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#d4af37]/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal className="mb-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-4 py-1.5"
              >
                <Watch size={14} className="text-[#d4af37]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
                  Catálogo Exclusivo
                </p>
              </motion.div>

              <MotionReveal delay={0.1}>
                <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {activeTab === "caballero" ? (
                    <>
                      Relojes para caballeros{" "}
                      <span className="text-[#d4af37]">que marcan la diferencia</span>
                    </>
                  ) : (
                    <>
                      Relojes para damas{" "}
                      <span className="text-[#d4af37]">elegancia en cada momento</span>
                    </>
                  )}
                </h2>
              </MotionReveal>

              <MotionReveal delay={0.15}>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#f5f0e6]/70 sm:text-lg sm:leading-8">
                  {activeTab === "caballero"
                    ? "Cada pieza ha sido seleccionada por su elegancia, calidad y presencia. Explora nuestra colección y encuentra el reloj que refleja tu estilo."
                    : "Diseños sofisticados y femeninos para la mujer moderna. Encuentra el reloj perfecto que complemente tu estilo único."}
                </p>
              </MotionReveal>
            </div>

            <MotionReveal delay={0.2}>
              <div className="flex gap-6 lg:gap-10">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center gap-2 lg:justify-start">
                    <TrendingUp size={20} className="text-[#d4af37]" />
                    <span className="font-heading text-3xl font-semibold text-white">
                      {totalProducts}
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#f5f0e6]/50">
                    Modelos disponibles
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center gap-2 lg:justify-start">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37]/20">
                      <Check size={12} className="text-[#d4af37]" strokeWidth={3} />
                    </div>
                    <span className="font-heading text-3xl font-semibold text-white">100%</span>
                  </div>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#f5f0e6]/50">
                    Originales
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </MotionReveal>

        {/* Tabs */}
        <MotionReveal className="mb-10">
          <div className="flex justify-center">
            <div className="inline-flex rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/5 p-1">
              <button
                onClick={() => {
                  setActiveTab("caballero");
                  setShowAllCaballero(false);
                }}
                className={`relative rounded-lg px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeTab === "caballero"
                    ? "bg-[#d4af37] text-[#1a1a1a]"
                    : "text-[#f5f0e6]/60 hover:text-[#f5f0e6]"
                }`}
              >
                Caballeros
              </button>
              <button
                onClick={() => {
                  setActiveTab("dama");
                  setShowAllDamas(false);
                }}
                className={`relative rounded-lg px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeTab === "dama"
                    ? "bg-[#d4af37] text-[#1a1a1a]"
                    : "text-[#f5f0e6]/60 hover:text-[#f5f0e6]"
                }`}
              >
                Damas
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr"
          >
            {activeProducts.map((product, index) => (
              <MotionReveal key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </MotionReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Ver más button */}
        {((activeTab === "caballero" && !showAllCaballero) ||
          (activeTab === "dama" && !showAllDamas)) && (
          <MotionReveal delay={0.3} className="mt-12 text-center">
            <button
              onClick={handleShowAll}
              className="group inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/5 to-[#d4af37]/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37] transition-all duration-300 hover:border-[#d4af37]/50 hover:from-[#d4af37]/20 hover:via-[#d4af37]/10 hover:to-[#d4af37]/20"
            >
              Ver más
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </motion.span>
            </button>
          </MotionReveal>
        )}

        <MotionReveal delay={0.4} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-[#d4af37]/20 bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/5 to-[#d4af37]/10 px-8 py-5">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0f0e0c] bg-[#d4af37]/20"
                >
                  <span className="text-[8px] font-bold text-[#d4af37]">{i}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#f5f0e6]/80">
              <span className="font-semibold text-[#d4af37]">+500 clientes</span> ya encontraron su reloj ideal
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
});
