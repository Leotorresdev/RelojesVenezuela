import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HeroSection } from '@/components/sections/HeroSection';

const meta = {
  title: 'UI/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'el tiempo no se compra...',
    headline: 'pero sí el estilo.',
    description: 'Relojes originales, elegantes y accesibles en toda Venezuela.',
    ctaLabel: 'Escríbenos por DM',
    ctaHref: '#contact',
    imageSrc: '/modelo1.jpg',
    imageAlt: 'Reloj elegante en fondo oscuro',
  },
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
