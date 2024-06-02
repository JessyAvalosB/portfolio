import type { Meta, StoryObj } from '@storybook/react';
import { MouseScroll } from '@/app/components';

const meta = {
    title: 'Atoms/MouseScroll',
    component: MouseScroll,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    },
} satisfies Meta<typeof MouseScroll>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};
