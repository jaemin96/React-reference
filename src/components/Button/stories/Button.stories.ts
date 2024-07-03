import { Button } from './../Button';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    pseudo: { hover: true },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: { onClick: action('button-click') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: false,
    size: 'medium',
    children: 'click',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'click',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'click',
  },
  parameters: {
    pseudo: { hover: true },
  },
};
