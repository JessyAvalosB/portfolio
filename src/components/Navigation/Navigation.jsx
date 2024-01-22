import { Outlet, useLocation } from "react-router-dom";

import NavLink from "../NavLink/NavLink";

import {
    navBar,
    navLinks,
} from './Navigation.module.css';

const Navigation = () => {
    const { pathname } = useLocation();
    console.log(location)
    return (
        <>
            <nav className={navBar}>
                <NavLink
                    goTo="/"
                    text={`jessy${pathname !== '/' ? '.dev' : ''}`} />
                <ul className={navLinks}>
                    <li>
                        <NavLink
                            goTo="/experience"
                            text="Experience" />
                    </li>
                    <li>
                        <NavLink
                            goTo="/about"
                            text="About" />
                    </li>
                    <li>
                        <NavLink
                            goTo="/blog"
                            text="Blog" />
                    </li>
                    <li>
                        <NavLink
                            goTo="/contact"
                            text="Contact" />
                    </li>
                </ul>
            </nav>
            <div id="contentContainer">
                <Outlet />
            </div>
        </>
    )
}

export default Navigation
