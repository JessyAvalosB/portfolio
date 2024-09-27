import { Icon } from '@/components';
import { IconsEnum } from '../atoms/Icon/IconTypes'
import { useTheme } from 'next-themes';

export const NavMenu = () => {
    const { resolvedTheme } = useTheme();
    return (
        <div className='hidden transition duration-200 ease-in-out transform scale-110 xs:max-md:block hover:scale-125'>
            <Icon className='cursor-pointer' color={resolvedTheme === 'dark' ? 'black' : 'white'} icon={IconsEnum.menu} />
        </div>
    )
}
