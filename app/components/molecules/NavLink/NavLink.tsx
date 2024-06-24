'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

import { Typography } from '@/components'

export interface NavLinkProps {
    label: string;
    href: string;
}

export const NavLink = ({ label, href }: NavLinkProps) => {
    const pathName = usePathname();

    return (
        <Link key={label} href={href} >
            <Typography
                variant='navLink'
                className={`${pathName === href && 'underline'}`}>
                {label}
            </Typography>
        </Link>
    )
}
