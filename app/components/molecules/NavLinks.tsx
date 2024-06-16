import { NavLink, ThemeToggle } from '@/components';

export const NavLinks = () => {
    const navLinks = [
        { label: 'Home', href: '/home' },
        { label: 'Experience', href: '/experience' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ];
    return (
        <div className='hidden md:flex items-center gap-x-10'>
            <div className='flex gap-x-10'>
                {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                ))}
            </div>
            <ThemeToggle />
        </div>
    )
}
