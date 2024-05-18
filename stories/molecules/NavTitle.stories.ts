import type { Meta, StoryObj } from '@storybook/react';
import { NavTitle } from '@/app/components/';

const meta = {
    title: 'Molecules/NavTitle',
    component: NavTitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof NavTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
