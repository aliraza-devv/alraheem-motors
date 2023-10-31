import React from 'react';

import LinkBox from'../LinkBox/LinkBox';
import {Phone,Email,Address,Instagram,Facebook,Twitter} from '../../../assets/SvgComponents/index';
import classes from './FooterRight.module.scss';

const FooterRight = props => {
    return (
        <div className={classes.Footer__right}>   
            <LinkBox 
                title="Office" 
                icon1={Phone} 
                icon2={Email} 
                icon3={Address} 
                text1='0300-0000-000' 
                text2='contact@alraheemmotors.com' 
                text3='ABC Road near ABC Bank, ABC, Pakistan' 
                loc1='/'
                loc2='/'
                loc3='/'
            />
            <LinkBox 
                title="Social Links" 
                icon1={Instagram} 
                icon2={Facebook} 
                icon3={Twitter} 
                text1= 'Al-Raheem Motors'
                text2= 'Al-Raheem Motors'
                text3='Al-Raheem Motors' 
                loc1='https://www.instagram.com/'
                loc2='https://www.facebook.com/'
                loc3='https://twitter.com/'
            />
        </div>
    );
};

export default FooterRight;