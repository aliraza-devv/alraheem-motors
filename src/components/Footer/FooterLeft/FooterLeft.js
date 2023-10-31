import React from 'react';

import TextBox from '../TextBox/TextBox';
import {logo} from '../../../assets/img/index';
import classes from './FooterLeft.module.scss';

const FooterLeft = props => {
    return (
        <div className={classes.Footer__left}>
            <img className={classes.Footer__logo} src={logo} alt="logo"/> 
            <TextBox />
        </div>
    );
};

export default FooterLeft;