import { Typography } from '@/components'
import { ExperienceCardProps } from './ExperienceCardTypes'
export const ExperienceCard = ({ title, company, description, date, technologies = [] }: ExperienceCardProps) => {
    return (
        <div
            className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-900 md:p-8">
            <Typography
                variant='h5'
                className='mb-4 dark:text-text-color-dark'>
                {title}
            </Typography>
            <div className='flex flex-wrap items-center justify-between'>
                <Typography
                    variant='body'
                    className="mb-4 text-gray-700 dark:text-gray-200">
                    {company}
                </Typography>
                <Typography
                    variant='body'
                    className="mb-4 text-gray-700 dark:text-gray-200">
                    {date}
                </Typography>
            </div>
            <Typography
                variant='body2'
                className="mb-4 text-gray-500 dark:text-gray-300">
                {description}
            </Typography>
            <div
                className="flex flex-wrap gap-2">
                {technologies.map((technology: string, index: number) => (
                    <Typography
                        key={`${technology}-${index}`}
                        className='px-3 py-1 text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300'>
                        {technology}
                    </Typography>
                ))}
            </div>
        </div >
    )
}
