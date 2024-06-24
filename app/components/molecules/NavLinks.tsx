import { NavLink, ThemeToggle } from '@/components';

export const NavLinks = () => {
    const navLinks = [
        { label: 'Home', href: '#welcome-section' },
        { label: 'About Me', href: '#about-me-section' },
        { label: 'Experience', href: '#experience-section' },
        { label: 'Contact', href: '#contact-section' },
    ];
    return (
        <div className='items-center hidden md:flex gap-x-12'>
            <div className='flex gap-x-10'>
                {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                ))}
            </div>
            <ThemeToggle />
        </div>
    )
}
