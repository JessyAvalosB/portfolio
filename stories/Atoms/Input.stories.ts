import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from '@/app/components';

const meta = {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        name: 'inputTest',
        type: 'text',
        value: '',
        placeholder: 'Input Text',
        onChange: fn(),
        disabled: false,
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        type: 'text',
        placeholder: 'Username',
    },
};

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Password'
    }
};

export const Email: Story = {
    args: {
        type: 'email',
        placeholder: 'example@example.com'
    }
}

export const Number: Story = {
    args: {
        type: 'number',
        placeholder: 'Age'
    }
}

export const Checkbox: Story = {
    args: {
        type: 'checkbox',
    }
}

export const Radio: Story = {
    args: {
        type: 'radio'
    }
}

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: 'Disabled'
    }
};
