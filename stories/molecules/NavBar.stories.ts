import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from '@/app/components/';

const meta = {
    title: 'Molecules/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
