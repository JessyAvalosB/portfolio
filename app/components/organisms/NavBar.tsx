'use client'
import { useEffect, useState } from 'react';

import { NavMenu, NavLinks, NavTitle } from '@/components';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';

export const NavBar = () => {
    const scrollPosition = useScrollPosition();
    const [showNavbar, setShowNavBar] = useState(false);

    useEffect(() => {
        setShowNavBar(scrollPosition > 330);
    }, [scrollPosition])

    const changeNavBarPosition = showNavbar ? 'fixed animate-fade-in-up' : 'absolute';

    return (
        <div
            className={`${changeNavBarPosition} flex flex-row items-center justify-between w-full bg-transparent px-6 py-4 mx-auto lg:max-w-5xl backdrop-blur-lg z-20  left-0 right-0 top-0`}>
            <NavTitle />
            <NavLinks />
            <NavMenu />
        </div>
    )
}
