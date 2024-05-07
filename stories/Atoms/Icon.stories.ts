import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Icon } from "@/app/components";
import { Icons } from "@/app/components/atoms/Icon/Icons";

const meta = {
    title: 'Atoms/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        icon: Icons.androidSttudio,
        onClick: fn(),
        size: "sm"
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
