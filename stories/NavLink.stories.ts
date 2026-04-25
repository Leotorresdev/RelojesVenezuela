import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { NavLink } from "@/components/ui/NavLink";

const meta = {
  title: "UI/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#111111" },
        { name: "light", value: "#f5f0e6" },
      ],
    },
  },
  args: {
    label: "Home",
    href: "/",
    active: false,
  },
  argTypes: {
    active: { control: "boolean" },
  },
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};
