import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Icon } from "@/app/components";
import { IconsEnum } from "@/app/components/atoms/Icon/IconTypes";

const meta = {
    title: 'Atoms/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        icon: IconsEnum.androidSttudio,
        onClick: fn(),
        size: "sm",
        className: "",
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>

export const XSmall: Story = {
    args: {
        size: "xs"
    }
}

export const Small: Story = {
    args: {
        size: "sm"
    }
}

export const Medium: Story = {
    args: {
        size: "md"
    }
}

export const Large: Story = {
    args: {
        size: "lg"
    }
}
