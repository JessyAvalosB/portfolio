import type { Meta, StoryObj } from '@storybook/react';
import { AboutMe } from '@/app/components';

const meta = {
    title: 'Organisms/About Me',
    component: AboutMe,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof AboutMe>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
