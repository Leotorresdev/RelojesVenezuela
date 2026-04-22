'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { NavLinkProps } from '@/interfaces/NavLink';

export function NavLink({ href, label, active = false }: NavLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
      <Link
        href={href}
        className={`group relative inline-flex items-center rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] transition-colors duration-200 ${
          active
            ? 'bg-[#d4af37]/10 text-[#f4c84b]'
            : 'text-[#f5f0e6]/70 hover:text-[#f5f0e6]'
        }`}
        aria-current={active ? 'page' : undefined}
      >
        <span className="relative z-10">{label}</span>
        <span
          className={`absolute inset-x-3 bottom-1.5 h-px origin-left bg-[#d4af37] transition-transform duration-300 ${
            active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      </Link>
    </motion.div>
  );
}
