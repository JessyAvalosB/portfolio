import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@/app/components/';

const meta = {
    title: 'Organisms/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
