import Link from 'next/link';

import { TextIcon, Typography, SocialLink } from '@/components';

import { SocialLinkEnum } from '../molecules/SocialLink/SocialLinkTypes'
import { IconsEnum } from '../atoms/Icon/IconTypes'

export const Footer = () => {
    return (
        <div
            className="flex flex-col items-center gap-2 p-5">
            <div className='flex gap-3 p-2'>
                <SocialLink
                    icon={SocialLinkEnum.linkedin} />
                <SocialLink
                    icon={SocialLinkEnum.github} />
                <SocialLink
                    icon={SocialLinkEnum.xTwitter} />
            </div>
            <div className='flex flex-wrap justify-center p-2 gap-x-3 gap-y-1'>
                <Link href='/'>
                    <TextIcon
                        icon={IconsEnum.home}
                        text='Home'
                        iconSide='left' />
                </Link>
                <Link href='/experience'>
                    <TextIcon
                        icon={IconsEnum.briefCase}
                        text='Experience'
                        iconSide='left' />
                </Link>
                <Link href='/blog'>
                    <TextIcon
                        icon={IconsEnum.noteBook}
                        text='Blog'
                        iconSide='left' />
                </Link>
                <Link href='/contact'>
                    <TextIcon
                        icon={IconsEnum.mailBox}
                        text='Contact'
                        iconSide='left' />
                </Link>
            </div>
            <Typography variant='body2' className='text-center'>
                © 2023 Jessy Avalos Barrales. All rights reserved.
            </Typography>
            <TextIcon icon={IconsEnum.up} text='Up' />
        </div>
    )
}
