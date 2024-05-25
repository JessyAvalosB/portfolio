import { Icon } from '@/components';
import { IconsEnum } from '../atoms/Icon/IconTypes'

export const NavMenu = () => {
    return (
        <div className='hidden transition duration-200 ease-in-out transform scale-110 xs:max-md:block hover:scale-125'>
            <Icon className='cursor-pointer' icon={IconsEnum.menu} />
        </div>
    )
}
