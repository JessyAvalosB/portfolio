import type { Meta, StoryObj } from '@storybook/react';
import { NavLinks } from '@/app/components/';

const meta = {
    title: 'Molecules/NavLinks',
    component: NavLinks,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof NavLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
