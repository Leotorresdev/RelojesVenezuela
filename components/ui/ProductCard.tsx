import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CatalogItem } from "@/interfaces/Catalog";
import { buildWhatsAppUrl } from "@/lib/site";

interface ProductCardProps {
  product: CatalogItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("es-VE", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(product.price);

  const formattedOriginalPrice = new Intl.NumberFormat("es-VE", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(product.originalPrice);

  const productWhatsappUrl = buildWhatsAppUrl(
    `Hola, quiero informacion del modelo ${product.name} que vi en la landing de Relojes Venezuela.`
  );

  return (
    <Card className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] text-[#f5f0e6] ring-0 shadow-[0_24px_80px_rgba(0,0,0,0.26)]">
      <div className="relative mx-3 aspect-[4/4.7] overflow-hidden rounded-[1rem] sm:mx-4 sm:aspect-[4/5] sm:rounded-[1.15rem]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover object-center transition duration-500 group-hover/card:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.32))]" />
      </div>

      <CardHeader className="space-y-2 px-3 sm:space-y-3 sm:px-4">
        <p className="text-[9px] uppercase tracking-[0.24em] text-[#d4af37] sm:text-[11px] sm:tracking-[0.32em]">
          Seleccion premium
        </p>
        <CardTitle className="min-h-[2.6rem] text-lg leading-tight text-white sm:min-h-0 sm:text-[2rem] sm:leading-none">
          {product.name}
        </CardTitle>
      </CardHeader>

      <CardFooter className="mt-auto justify-between border-white/10 bg-white/[0.03] px-3 py-3 sm:p-4">
        <div className="min-w-0">
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#f5f0e6]/45 sm:text-[11px] sm:tracking-[0.24em]">
            Desde
          </span>
          <div className="mt-1.5 flex flex-col items-start gap-1 sm:mt-2 sm:flex-wrap sm:flex-row sm:items-end sm:gap-x-3">
            <p className="font-heading text-xs font-medium text-[#f5f0e6]/40 line-through decoration-[#f5f0e6]/35 decoration-2 sm:text-base">
              {formattedOriginalPrice}
            </p>
            <p className="font-heading text-xl font-semibold leading-none tracking-[0.02em] text-[#d4af37] sm:text-[1.7rem]">
              {formattedPrice}
            </p>
          </div>
        </div>

        <a
          href={productWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-[#f5f0e6]/75 hover:border-[#d4af37]/35 hover:text-[#d4af37] sm:h-11 sm:w-11"
          aria-label={`Consultar ${product.name}`}
        >
          <ArrowUpRight size={15} className="sm:h-4 sm:w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}
