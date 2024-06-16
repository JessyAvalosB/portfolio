import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '@/app/components/';

const meta = {
    title: 'Molecules/ThemeToggle',
    component: ThemeToggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};
