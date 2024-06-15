import { ExperienceCard } from '@/components';
import { ExperienceCardProps } from '../molecules/ExperiencieCard/ExperienceCardTypes';
export const Experiences = () => {
    const experiences: ExperienceCardProps[] = [
        {
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
        {
            title: 'Jr. Software Engineer',
            company: 'EPAM Systems',
            description: 'Participated in the development of software projects, collaborating closely with senior teams to learn and contribute to the code base. I gained experience in different stages of the software development cycle, solving problems and improving my technical skills while working in a continuous learning environment.',
            date: 'Nov 2022 - Jan 2023',
            technologies: [
                'React',
                'JavaScript',
                'Typescript',
                'Node.js',
                'Storybook',
                'Style-Component',
                'React Bootstrap',
                'React Query',
                'Redux',
                'Redux Saga',
            ]
        },
        {
            title: 'Web Developer',
            company: 'Xilion',
            description: 'My main responsibility was the development and maintenance of websites. Used LAMP stack to create interactive and responsive user interfaces. I also worked closely with designers and other developers to ensure the functionality and aesthetic design of the projects.',
            date: 'Aug 2019 - Jan 2022',
            technologies: [
                'Laravel',
                'Composer',
                'Apache',
                'PostgreSQL',
                'HTML',
                'CSS',
                'JavaScript',
                'Google Cloud Platform',
            ]
        },
        {
            title: 'Android Developer',
            company: 'Centro de Servicios Latinos',
            description: 'Developed an app for a freelance project to improve the shift assignment process, improving the order of attention of the establishment.',
            date: 'Jun 2018 - Nov 2018',
            technologies: [
                'Java',
                'Android Studio',
                'SQLite',
                'Git',
                'GitHub',
            ]
        },
    ]
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-10">
            {experiences.map((experience: ExperienceCardProps, index: number) => (
                <ExperienceCard key={index} {...experience} />
            ))}
        </div>
    )
}
