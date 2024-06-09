import Image from 'next/image';
import { Typography } from '@/components';

import profile2 from '@/public/images/profile_2.jpg';

export const AboutMe = () => {
    const profilePictureSize = 140
    return (
        <div className="flex flex-col items-center gap-4">
            <div>
                <Typography
                    className='text-primary'
                    variant='h4'>
                    About Me
                </Typography>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Image
                    className='object-cover rounded-full aspect-square'
                    src={profile2}
                    width={profilePictureSize}
                    height={profilePictureSize}
                    priority
                    alt='profile_picture' />
                <Typography
                    variant='body'
                    className='max-w-sm'>
                    I&apos;m a front-end developer with a passion for creating beautiful and intuitive user interfaces. I love turning designs into code and making websites come to life.
                </Typography>
            </div>
        </div>
    )
}
