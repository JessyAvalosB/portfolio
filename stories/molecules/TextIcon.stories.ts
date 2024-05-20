import type { Meta, StoryObj } from '@storybook/react';
import { TextIcon } from '@/app/components/';
import { IconsEnum } from '@/app/components/atoms/Icon/IconTypes';

const meta = {
    title: 'Molecules/TextIcon',
    parameters: {
        layout: 'centered',
    },
    component: TextIcon,
    tags: ['autodocs'],
    args: {
        text: 'Test',
        icon: IconsEnum.androidSttudio,
        iconSide: 'right',
    },
} satisfies Meta<typeof TextIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LeftIcon: Story = {
    args: {
        iconSide: 'left',
    }
};
export const RightIcon: Story = {
    args: {
        iconSide: 'right',
    }
};
