import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProductCard } from "@/components/ui/ProductCard";

const meta = {
  title: "UI/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#090909" }],
    },
  },
  args: {
    product: {
      id: "heritage-gold",
      name: "Heritage Gold",
      price: 180,
      originalPrice: 220,
      imageUrl: "/modelos/modelo1.jpg",
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
