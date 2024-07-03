import { Toggle } from '../Toggle';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OFF: Story = {
  args: {
    isToggled: false,
  },
};

export const ON: Story = {
  args: {
    isToggled: true,
  },
};
