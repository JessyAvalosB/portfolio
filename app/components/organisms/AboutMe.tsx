import Image from 'next/image';
import { Typography } from '@/components';

import profile1 from '@/public/images/profile_1.jpg';
import profile2 from '@/public/images/profile_2.jpg';

export const AboutMe = () => {
    const profilePictureSize = 160
    return (
        <div className="flex flex-col items-center gap-4 px-4">
            <div>
                <Image
                    className='object-cover rounded-full aspect-square'
                    src={profile2}
                    width={profilePictureSize}
                    height={profilePictureSize}
                    priority
                    alt='profile_picture' />
            </div>
            <div className="flex flex-col items-center">
                <Typography
                    className='text-primary'
                    variant='h5'>
                    About Me
                </Typography>
                <Typography
                    variant='body2'>
                    I&apos;m a front-end developer with a passion for creating beautiful and intuitive user interfaces. I love turning designs into code and making websites come to life.
                </Typography>
            </div>
        </div>
    )
}
