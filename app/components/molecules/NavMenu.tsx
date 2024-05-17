import { Icon } from '@/app/components'
import { Icons } from '../atoms/Icon/Icons'

export const NavMenu = () => {
    return (
        <div className='hidden transition duration-200 ease-in-out transform scale-110 xs:max-md:block hover:scale-125'>
            <Icon className='cursor-pointer' icon={Icons.menu} />
        </div>
    )
}
