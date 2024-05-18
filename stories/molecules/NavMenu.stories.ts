import type { Meta, StoryObj } from '@storybook/react';
import { NavMenu } from '@/app/components/';

const meta = {
    title: 'Molecules/NavMenu',
    parameters: {
        layout: 'centered',
    },
    component: NavMenu,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
