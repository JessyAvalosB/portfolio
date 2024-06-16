import { Typography } from '@/components'
import { ExperienceCardProps } from './ExperienceCardTypes'
export const ExperienceCard = ({ title, company, description, date, technologies = [] }: ExperienceCardProps) => {
    return (
        <div
            className="flex flex-col p-6 bg-white rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900 dark:bg-gray-700 md:p-8">
            <Typography
                variant='h5'
                className='mb-4'>
                {title}
            </Typography>
            <div className='flex flex-wrap items-center justify-between'>
                <Typography
                    variant='body'
                    className="mb-4">
                    {company}
                </Typography>
                <Typography
                    variant='body'
                    className="mb-4">
                    {date}
                </Typography>
            </div>
            <Typography
                variant='body2'
                className="h-full mb-4">
                {description}
            </Typography>
            <div
                className="flex flex-wrap gap-2">
                {technologies.map((technology: string, index: number) => (
                    <Typography
                        key={`${technology}-${index}`}
                        className='px-3 py-1 bg-gray-200 rounded-full dark:bg-black '>
                        {technology}
                    </Typography>
                ))}
            </div>
        </div >
    )
}
