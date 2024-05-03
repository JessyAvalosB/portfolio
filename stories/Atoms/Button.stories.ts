import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/app/components/atoms/Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn(), children: 'Button', disabled: false, type: 'button', ariaLabel: 'btn-test', variant: 'primary' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: 'Primary Outline',
    variant: 'primaryOutline',
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: 'Secondary Outline',
    variant: 'secondaryOutline',
  },
};

export const PrimaryGhost: Story = {
  args: {
    children: 'Primary Ghost',
    variant: 'primaryGhost',
  }
}

export const SecondaryGhost: Story = {
  args: {
    children: 'Secondary Ghost',
    variant: 'secondaryGhost',
  }
}
