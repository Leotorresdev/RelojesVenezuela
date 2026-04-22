'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function MotionReveal({
  children,
  delay = 0,
  y = 24,
  className,
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
