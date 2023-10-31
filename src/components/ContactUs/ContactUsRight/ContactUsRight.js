import React from 'react';

import {Contact} from '../../../assets/SvgComponents/index';
import classes from './ContactUsRight.module.scss';

const ContactUsRight = props => {
    return (
        <div className={classes.ContactUs__right}>
            <Contact className={classes.ContactUs__right__svg} />
        </div>
    );
};

export default ContactUsRight;