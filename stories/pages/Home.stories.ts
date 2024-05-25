import type { Meta, StoryObj } from '@storybook/react';

import Home from "@/app/home/page";

const meta = {
    title: 'Pages/Home',
    component: Home,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
