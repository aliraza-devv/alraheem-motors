import React from 'react';

import ContactUsForm from '../ContactUsForm/ContactUsForm';
import classes from './ContactUsLeft.module.scss';

const ContactUsLeft = props => {
    return (
        <div className={classes.ContactUs__left}>
            <h2 className={classes.ContactUs__left__title}>Contact Us</h2>
            <ContactUsForm />
        </div>
    );
};

export default ContactUsLeft;