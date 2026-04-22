import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BenefitsSection } from '@/components/sections/BenefitsSection';

const meta = {
  title: 'UI/BenefitsSection',
  component: BenefitsSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BenefitsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
