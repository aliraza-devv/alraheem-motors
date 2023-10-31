import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.scss';

const NavItem = props => {
    return (
        <NavLink 
            className={`${classes.navItem} ${classes.line__hover}`}
            to={props.link}
            exact
            activeClassName={`${classes.navItem__active} ${classes.under__line}`} >
                    {props.text}
        </NavLink>
    );
};

export default NavItem;