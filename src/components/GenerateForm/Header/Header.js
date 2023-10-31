import React from 'react';

import {logo} from '../../../assets/img/index';
import {Address,Phone} from '../../../assets/SvgComponents/index';
import classes from './Header.module.scss';

const Header = props => {
    return (
        <div className={classes.Header}>
            <img className={classes.Header__logo} src={logo} />
            <div className={classes.Header__textBox}>
                <h1 className={classes.Header__textBox__title}>Al-Raheem Motors & Car Rent</h1>
                <p className={classes.Header__textBox__span}>Think Travel - Think Us</p>
            </div>
            <div className={classes.Header__right}>
                <div className={classes.Header__right__box}>
                    <Phone className={classes.Header__right__box__svg} />
                    <p className={classes.Header__right__box__text}>0300-0000-00</p>
                </div>
                <div className={classes.Header__right__box}>
                    <Address className={classes.Header__right__box__svg} />
                    <p className={classes.Header__right__box__text}>ABC Road near ABC Bank<br/>ABC, Punjab</p>
                </div>
            </div>
            
        </div>
    );
};

export default Header;