import { MotionReveal } from "@/components/ui/MotionReveal";
import { ProductCard } from "@/components/ui/ProductCard";
import { catalogProducts } from "@/lib/site";

export function CatalogSection() {
  return (
    <section id="catalog" className="px-2 py-18 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6">
          <MotionReveal className="max-w-full">
            <p className="section-label">Catalogo</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h2 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-4xl md:whitespace-nowrap">
                Todos los modelos disponibles para caballeros
              </h2>
              <span className="inline-flex items-center rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#f5f0e6]/78 sm:px-4 sm:py-1.5 sm:text-[11px]">
                15 modelos
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#f5f0e6]/65 sm:text-base sm:leading-7">
              En móvil verás una grilla más compacta para comparar referencias más rápido sin recorrer una lista tan larga.
            </p>
          </MotionReveal>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {catalogProducts.map((product, index) => (
            <MotionReveal key={product.id} delay={index * 0.08}>
              <ProductCard product={product} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
