import { NavLink } from '@/app/components';

export const NavLinks = () => {
    const navLinks = [
        { label: 'Home', href: '/home' },
        { label: 'Experience', href: '/experience' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ];
    return (
        <div className='hidden gap-4 md:max-3xl:flex'>
            {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
            ))}
        </div>
    )
}
