import React from 'react';

import FooterLeft from './FooterLeft/FooterLeft';
import FooterRight from './FooterRight/FooterRight';
import classes from './Footer.module.scss';

const Footer = props => {
    return(
        <footer className={classes.Footer}>
            <FooterLeft />
            <FooterRight />
        </footer>
    );
};

export default Footer;