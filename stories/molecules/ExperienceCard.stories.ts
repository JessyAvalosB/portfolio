import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceCard } from '@/app/components/';

const meta = {
    title: 'Molecules/ExperienceCard',
    component: ExperienceCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},
} satisfies Meta<typeof ExperienceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Sr. Software Engineer',
        company: 'NEORIS',
        description: 'I specialized in developing dynamic and responsive user interfaces, using modern technologies such as React.js, Vue.js and TypeScrit. I focused on implementing creative designs and optimizing frontend performance. I collaborated effectively with multidisciplinary teams, contributing my technical experience to improve quality and end-user experience.',
        date: 'Aug 2023 - Present',
        technologies: [
            'React',
            'Vue.js',
            'JavaScript',
            'Typescript',
            'MUI',
            'Storybook',
        ]
    },
};
