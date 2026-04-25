'use client';

import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import { CatalogItem } from '@/interfaces/Catalog';
import { buildWhatsAppUrl } from '@/lib/site';

interface ProductCardProps {
  product: CatalogItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(product.price);

  const formattedOriginalPrice = new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(product.originalPrice);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const productWhatsappUrl = buildWhatsAppUrl(
    `Hola, quiero información del modelo ${product.name} que vi en la landing de Relojes Venezuela.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-br from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-[#141310] via-[#0f0e0c] to-[#0a0908] shadow-xl transition-all duration-500 group-hover:border-[#d4af37]/30 group-hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]">
        {/* Image Container */}
        <div className="relative mx-4 mt-4 aspect-[4/4.5] overflow-hidden rounded-[1.1rem]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-transparent opacity-60" />

          {/* Discount Badge */}
          {discount > 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e8c65a] px-2.5 py-1"
            >
              <Sparkles size={10} className="text-[#1a1a1a]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
                -{discount}%
              </span>
            </motion.div>
          )}

          {/* Quick action overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={productWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="translate-y-4 rounded-full bg-[#d4af37]/95 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1a1a1a] backdrop-blur-sm transition-all duration-300 hover:bg-[#d4af37] hover:translate-y-0"
            >
              Consultar
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-4 pt-3">
          {/* Category tag */}
          <div className="mb-2.5 flex items-center gap-1.5">
            <div className="h-[1px] w-6 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
            <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]/80">
              Colección 2026
            </span>
          </div>

          {/* Product name */}
          <h3 className="font-heading text-xl font-semibold text-white transition-colors group-hover:text-[#d4af37]">
            {product.name}
          </h3>

          {/* Price section */}
          <div className="mt-3.5 flex items-end justify-between">
            <div className="flex flex-col">
              {discount > 0 && (
                <span className="text-[9px] font-medium text-[#f5f0e6]/35 line-through decoration-[#f5f0e6]/30">
                  {formattedOriginalPrice}
                </span>
              )}
              <span className="font-heading text-2xl font-bold tracking-tight text-[#d4af37]">
                {formattedPrice}
              </span>
            </div>

            {/* CTA Button */}
            <a
              href={productWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[#f5f0e6]/80 transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
              aria-label={`Consultar ${product.name}`}
            >
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover/btn:rotate-45"
              />
            </a>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-bl from-[#d4af37]/8 to-transparent rounded-tr-[1.5rem]" />
      </div>
    </motion.div>
  );
}
