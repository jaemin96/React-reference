import type { Meta, StoryObj } from '@storybook/react';
import { TabContainer, TabPanel } from '../';

type TabContainerArgs = React.ComponentProps<typeof TabContainer>;

const meta: Meta<TabContainerArgs> = {
  title: 'Components/Tab',
  component: TabContainer,
  parameters: {
    layout: 'centered',
    pseudo: { hover: true },
  },
  tags: ['autodocs'],
  argTypes: {
    activeColor: { control: 'color' },
    activeBgColor: { control: 'color' },
    inactiveColor: { control: 'color' },
    inactiveBgColor: { control: 'color' },
    fontSize: { control: 'text' },
    borderColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<TabContainerArgs>;

export const Default: Story = {
  render: (args) => {
    return (
      <TabContainer {...args}>
        <TabPanel label="Tab 1">This is the content of Tab 1</TabPanel>
        <TabPanel label="Tab 2">This is the content of Tab 2</TabPanel>
        <TabPanel label="Tab 3">This is the content of Tab 3</TabPanel>
      </TabContainer>
    );
  },
  args: {
    activeColor: '#6690ff',
    activeBgColor: '#fdfdfd',
    inactiveColor: '#878075',
    inactiveBgColor: '#cbc8c4',
    fontSize: '16px',
    borderColor: '#878075',
  },
};
