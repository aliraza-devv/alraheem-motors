import React from 'react';

import NavLinks from './NavLinks/NavLinks';
import classes from './Navbar.module.scss';

const Navbar = props => {

    let navbar = (
        <nav className={classes.navbar}>
            <NavLinks links="land" />
        </nav>
    );

    if(props.navName === "admin") {
        navbar = (
            <nav className={classes.navbar}>
                <NavLinks links="admin" />
            </nav>
        );
    }

    return navbar;
};

export default Navbar;