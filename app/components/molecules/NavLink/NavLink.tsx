'use client'
import Link from "next/link"
import { Typography } from '@/app/components'
import { usePathname } from "next/navigation";

export interface NavLinkProps {
    label: string;
    href: string;
}

export const NavLink = ({ label, href }: NavLinkProps) => {
    const pathName = usePathname();
    const setActiveNavLink = (href: string): string => pathName === href ? 'text-primary' : ''
    return (
        <Link key={label} href={href}>
            <Typography
                variant='navLink'
                className={`${setActiveNavLink(href)}`}>
                {label}
            </Typography>
        </Link>
    )
}
