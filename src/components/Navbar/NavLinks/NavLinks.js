import React from 'react';
import {Link} from 'react-scroll';

import NavItem from '../NavItem/NavItem';
import NavSItem from '../NavSItem/NavSItem';
import {logo} from '../../../assets/img/index';
import classes from './NavLinks.module.scss';

const NavLinks = props => {

    let navLinks = (
        <div className={classes.navLinks}>  
            <div className={classes.navLinks__left}>
                <NavItem link="/" text="Home" />
                <NavSItem link="works" text="How we work" />
            </div>
            <div className={classes.navLinks__logoBox}>
                <img className={classes.navLinks__logo} src={logo} alt="logo"/>                
            </div>
            <div className={classes.navLinks__right}>
                <NavSItem link="contact-us" text="Contact us" />
                <NavItem link="/admin" text="Admin" />
            </div>
        </div>
    );

    if(props.links === 'admin') {
        navLinks = (
            <div className={classes.navLinks}>  
                <div className={classes.navLinks__left}>
                    <NavItem link="/" text="Home" />
                </div>
                <div className={classes.navLinks__logoBox}>
                    <img className={classes.navLinks__logo} src={logo} alt="logo"/>                
                </div>
                <div className={`${classes.navLinks__right} ${classes.navLinks__right__admin}`}>
                    <NavItem link="/dashboard" text="Admin" />
                </div>
            </div>
        );
    }

    return navLinks;
};

export default NavLinks;