'use client'
import { NavMenu, NavLinks, NavTitle } from '@/components';

export const NavBar = () => {
    return (
        <div
            className='flex flex-row items-center justify-between w-full px-6 py-4 mx-auto lg:max-w-5xl'>
            <NavTitle />
            <NavLinks />
            <NavMenu />
        </div>
    )
}
