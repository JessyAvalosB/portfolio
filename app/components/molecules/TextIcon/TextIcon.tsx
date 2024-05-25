import { Typography, Icon } from '@/components';
import { TextIconProps, setIconSide } from './TextIconTypes'

export const TextIcon = ({ text, icon, iconSide = 'right', className = '' }: TextIconProps) => {
    return (
        <div className={`flex gap-1 cursor-pointer ${className}`}>
            <Typography
                variant='body2'
                className='truncate'>
                {text}
            </Typography>
            <Icon
                icon={icon}
                size='sm'
                className={`${setIconSide(iconSide)}`} />
        </div>
    )
}
