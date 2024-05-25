'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

import { Typography } from '@/components'

export const NavTitle = ({ }) => {
    const pathName = usePathname();
    const toggleShowTitleText = (): string => pathName === '/home' ? '-translate-x-14 opacity-0' : 'translate-x-0 opacity-100';
    return (
        <>
            <Link href='/'>
                <Typography
                    variant='h5'
                    className='relative bg-gradient-to-r from-[#fff] from-90%'>
                    jessy
                    <span
                        className={`absolute ${toggleShowTitleText()} transition-all duration-500 ease-in-out`}>
                        .me
                    </span>
                </Typography>
            </Link>
        </>
    )
}
