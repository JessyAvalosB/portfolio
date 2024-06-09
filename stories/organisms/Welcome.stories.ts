import type { Meta, StoryObj } from '@storybook/react';
import { Welcome } from '@/components';

const meta = {
    title: 'Organisms/Welcome',
    component: Welcome,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof Welcome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
