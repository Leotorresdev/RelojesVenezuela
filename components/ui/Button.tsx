'use client';

import { ButtonProps } from '@/interfaces/Button';

export function Button({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4';

  const variantClasses =
    variant === 'primary'
      ? 'border-[#d4af37] bg-[#d4af37] text-[#111111] hover:bg-[#c39f2d]'
      : 'border-white/10 bg-transparent text-[#f5f0e6] hover:border-[#d4af37] hover:text-[#d4af37]';

  const disabledClasses = disabled
    ? 'cursor-not-allowed opacity-50'
    : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabledClasses}`}
    >
      {label}
    </button>
  );
}
