import { TextIcon, Typography } from '@/app/components'
import { IconsEnum } from '../atoms/Icon/IconTypes'

export const Footer = () => {
    return (
        <div
            className="flex flex-col items-center gap-2 p-5">
            <div className='flex gap-2 p-2'>
                <TextIcon
                    icon={IconsEnum.linkedin}
                    text='LinkedIn'
                    iconSide='left' />
                <TextIcon
                    icon={IconsEnum.github}
                    text='GitHub'
                    iconSide='left' />
                <TextIcon
                    icon={IconsEnum.xTwitter}
                    text='X'
                    iconSide='left' />
            </div>
            <div className='flex flex-wrap justify-center p-2 gap-x-2 gap-y-1'>
                <TextIcon
                    icon={IconsEnum.home}
                    text='Home'
                    iconSide='left' />
                <TextIcon
                    icon={IconsEnum.briefCase}
                    text='Experience'
                    iconSide='left' />
                <TextIcon
                    icon={IconsEnum.noteBook}
                    text='Blog'
                    iconSide='left' />
                <TextIcon
                    icon={IconsEnum.mailBox}
                    text='Contact'
                    iconSide='left' />
            </div>
            <Typography variant='body2' className='text-center'>
                © 2023 Jessy Avalos Barrales. All rights reserved.
            </Typography>
            <TextIcon icon={IconsEnum.up} text='Up' />
        </div>
    )
}
