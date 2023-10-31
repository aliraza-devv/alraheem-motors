import React from 'react';
import {Link} from 'react-scroll';

import classes from './NavSItem.module.scss';

const NavSItem = props => {
    return (
        <Link 
            className={`${classes.navSItem} ${classes.line__hover}`}
            to={props.link}
            smooth={true}
            duration={1000} >
                    {props.text}
        </Link>
    );
};

export default NavSItem;