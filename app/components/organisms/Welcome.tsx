/* eslint-disable react/jsx-no-comment-textnodes */

import { Typography, MouseScroll } from '@/components'
export const Welcome = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center relative h-[calc(100vh-75px)]'>
            <div className='flex flex-col xs:-translate-y-1/4 sm:-translate-y-3/4 gap-y-6'>
                <Typography
                    variant='h1'
                    className='text-blue-700'>
                    I&apos;m  Jessy
                </Typography>
                <Typography
                    variant='h5'
                    className='text-blue-500'>
                    Software Engineer, Front-end & App Developer
                </Typography>
            </div>
            <div>
                <MouseScroll />
            </div>
        </div>
    )
}
