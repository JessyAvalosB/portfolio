import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { navLink } from './NavLink.module.css';

const NavLink = ({ text, goTo }) => {
    return (
        <Link className={navLink} to={goTo}>{text}</Link>
    )
}

NavLink.propTypes = {
    text: PropTypes.string.isRequired,
    goTo: PropTypes.string.isRequired
}

export default NavLink;
