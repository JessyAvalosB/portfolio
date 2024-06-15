import type { Meta, StoryObj } from '@storybook/react';
import { Experiences } from '@/app/components';

const meta = {
    title: 'Organisms/Experiences',
    component: Experiences,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof Experiences>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
