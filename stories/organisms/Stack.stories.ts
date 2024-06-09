import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@/components';

const meta = {
    title: 'Organisms/Stack',
    component: Stack,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
