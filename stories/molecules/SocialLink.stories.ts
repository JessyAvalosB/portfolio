import type { Meta, StoryObj } from '@storybook/react';
import { SocialLink } from '@/app/components/';
import { SocialLinkEnum } from '@/app/components/molecules/SocialLink/SocialLinkTypes';

const meta = {
    title: 'Molecules/SocialLink',
    parameters: {
        layout: 'centered',
    },
    component: SocialLink,
    tags: ['autodocs'],
    args: {
        icon: SocialLinkEnum.linkedin
    },
} satisfies Meta<typeof SocialLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkedIn: Story = {
    args: {
        icon: SocialLinkEnum.linkedin
    }
};

export const X: Story = {
    args: {
        icon: SocialLinkEnum.xTwitter
    }
}

export const GitHub: Story = {
    args: {
        icon: SocialLinkEnum.github
    }
}

export const Medium: Story = {
    args: {
        icon: SocialLinkEnum.medium
    }
}

export const Instagram: Story = {
    args: {
        icon: SocialLinkEnum.instagram
    }
}

export const Facebook: Story = {
    args: {
        icon: SocialLinkEnum.facebook
    }
}
