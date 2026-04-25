import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
}

export function NavLink({
  href,
  label,
  active = false,
  className,
}: NavLinkProps) {
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative inline-flex rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors",
        active ? "text-[#d4af37]" : "text-[#f5f0e6]/70 hover:text-[#d4af37]",
        className
      )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-3 -bottom-px h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent transition-opacity",
          active ? "opacity-100" : "opacity-0 hover:opacity-100"
        )}
      />
    </a>
  );
}
