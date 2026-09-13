'use client';

import Image from 'next/image';
import { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import { CatalogItem } from '@/interfaces/Catalog';
import { buildWhatsAppUrl } from '@/lib/site';

type StockData = { total: number; variants: Record<string, number> };
let stockPromise: Promise<Record<string, StockData>> | null = null;
function getStockMap() {
  if (!stockPromise) {
    stockPromise = fetch("https://etvrbadwfobfarwurfzq.supabase.co/rest/v1/relojes?select=modelo,relojes_variantes(color,stock)", {
      headers: { apikey: "sb_publishable_SSyVmBp369I5YxfKgJdA7Q_M8nUI4bE" }
    })
    .then(res => res.ok ? res.json() : [])
    .then(data => {
      const map: Record<string, StockData> = {};
      data.forEach((item: any) => {
        let total = 0;
        const variants: Record<string, number> = {};
        if (item.relojes_variantes) {
          item.relojes_variantes.forEach((v: any) => {
            const s = v.stock || 0;
            total += s;
            if (v.color) variants[v.color.toLowerCase()] = s;
          });
        }
        map[item.modelo] = { total, variants };
      });
      return map;
    })
    .catch(() => ({}));
  }
  return stockPromise;
}

interface ProductCardProps {
  product: CatalogItem;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function calculateDiscount(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}

export const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(product.imageUrl);
  const [stockInfo, setStockInfo] = useState<StockData | null>(null);
  const discount = calculateDiscount(product.originalPrice, product.price);
  
  useEffect(() => {
    getStockMap().then(map => {
      if (map[product.name]) {
        setStockInfo(map[product.name]);
      }
    });
  }, [product.name]);

  const currentVariant = product.variants?.find(v => v.imageUrl === currentImage);
  
  let outOfStock = false;
  if (stockInfo) {
    if (currentVariant && stockInfo.variants[currentVariant.colorName.toLowerCase()] !== undefined) {
      outOfStock = stockInfo.variants[currentVariant.colorName.toLowerCase()] === 0;
    } else {
      outOfStock = stockInfo.total === 0;
    }
  }

  const productWhatsappUrl = outOfStock ? "#" : buildWhatsAppUrl(
    `Hola, quiero información del modelo ${product.name} que vi en la landing de Relojes Venezuela.`
  );

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative flex h-full"
    >
      <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-br from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-[#141310] via-[#0f0e0c] to-[#0a0908] shadow-xl transition-all duration-500 group-hover:border-[#d4af37]/30 group-hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]">
        <div className="relative mx-auto mt-4 aspect-[4/4.5] w-[calc(100%-2rem)] overflow-hidden rounded-[1.1rem]">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            quality={82}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-transparent opacity-60" />

          {discount > 0 && !outOfStock && (
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

          {outOfStock && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center z-20">
              <div className="bg-red-600/95 text-white font-bold tracking-[0.2em] uppercase text-xs px-5 py-2 rounded-lg shadow-xl shadow-red-900/50 transform -rotate-6 border border-red-400">
                Agotado
              </div>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-10">
            <a
              href={productWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto translate-y-4 rounded-full bg-[#d4af37]/95 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1a1a1a] backdrop-blur-sm transition-all duration-300 hover:bg-[#d4af37] hover:translate-y-0"
            >
              Consultar
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-grow px-4 pb-4 pt-3">
          <div className="mb-2.5 flex items-center gap-1.5">
            <div className="h-[1px] w-6 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
            <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]/80">
              Colección 2026
            </span>
          </div>

          <h3 className="font-heading text-xl font-semibold text-white transition-colors group-hover:text-[#d4af37]">
            {product.name}
          </h3>

          {product.variants && product.variants.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {product.variants.map((variant, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImage(variant.imageUrl);
                  }}
                  className={`w-5 h-5 shrink-0 rounded-full border-2 transition-transform ${currentImage === variant.imageUrl ? 'border-[#d4af37] scale-125' : 'border-gray-500 hover:border-gray-300'}`}
                  style={{ backgroundColor: variant.colorCode }}
                  title={variant.colorName}
                />
              ))}
            </div>
          )}

          <div className="mt-auto flex items-end justify-between pt-3.5">
            <div className="flex flex-col">
              {discount > 0 && (
                <span className="text-[14px] font-medium text-[#f5f0e6]/35 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="font-heading text-2xl font-semibold tracking-tight text-[#d4af37]">
                {formatPrice(product.price)}
              </span>
            </div>

            <a
              href={productWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/6 text-[#f5f0e6]/80 transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
              aria-label={`Consultar ${product.name}`}
            >
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover/btn:rotate-45"
              />
            </a>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-16 w-16 rounded-tr-[1.5rem] bg-gradient-to-bl from-[#d4af37]/8 to-transparent" />
      </div>
    </motion.div>
  );
});
