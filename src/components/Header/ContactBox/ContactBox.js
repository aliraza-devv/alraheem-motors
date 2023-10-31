import React from 'react';

import Contact from './Contact/Contact';
import {Phone, Address} from '../../../assets/SvgComponents/index';
import classes from './ContactBox.module.scss';

const ContactBox = props => {
    return (
        <div className={classes.contactBox}>
            <h2 className={classes.contactBox__heading}>Contact Today For Booking<br/>Your Next Ride</h2>
            <Contact icon={Phone} text="0300-0000-00" />
            <Contact icon={Address} text="ABC Road near ABC Bank, ABC, Punjab, Pakistan" />
        </div>
    );
};

export default ContactBox;