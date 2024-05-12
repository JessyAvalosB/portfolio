import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@/app/components/';

const meta = {
    title: 'Atoms/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: { children: 'Typography', color: 'inherit', variant: 'p' },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header1: Story = {
    args: {
        variant: 'h1',
        children: 'Header 1',
    }
}

export const Header2: Story = {
    args: {
        variant: 'h2',
        children: 'Header 2',
    }
}

export const Header3: Story = {
    args: {
        variant: 'h3',
        children: 'Header 3',
    }
}

export const Header4: Story = {
    args: {
        variant: 'h4',
        children: 'Header 4',
    }
}

export const Header5: Story = {
    args: {
        variant: 'h5',
        children: 'Header 5',
    }
}
export const Header6: Story = {
    args: {
        variant: 'h6',
        children: 'Header 6',
    }
}

export const Body: Story = {
    args: {
        variant: 'body',
        children: 'Body',
    }
}

export const Body2: Story = {
    args: {
        variant: 'body2',
        children: 'Body 2',
    }
}

export const Small: Story = {
    args: {
        variant: 'small',
        children: 'Small',
    }
}

export const InputLabel: Story = {
    args: {
        variant: 'inputLabel',
        children: 'Input Label',
    }
}

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Link',
    }
}

export const NavLink: Story = {
    args: {
        variant: 'navLink',
        children: 'Nav Link',
    }
}
