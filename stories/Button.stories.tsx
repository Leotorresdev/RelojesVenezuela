import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/ui/Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#111111' },
        { name: 'light', value: '#f5f0e6' },
      ],
    },
  },
  args: {
    label: 'Escribenos por DM',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
//explicame lo que hace la linea 33? 
// La línea 33 define una historia llamada "Primary" para el componente Button. Esta historia utiliza los argumentos predeterminados definidos en el objeto meta, lo que significa que el botón se mostrará con la etiqueta "Escribenos por DM", el estilo primario y no estará deshabilitado. Al hacer clic en este botón en Storybook, se registrará la acción "clicked" debido a la configuración de onClick en argTypes.
export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Ver coleccion',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
