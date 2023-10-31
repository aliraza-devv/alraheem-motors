import React from 'react';

import ContactUsLeft from './ContactUsLeft/ContactUsLeft'
import ContactUsRight from './ContactUsRight/ContactUsRight';
import classes from './ContactUs.module.scss';

const ContactUs = props => {
    return (
        <section className={classes.contactUs} id="contact-us">
            <h1 className={classes.contactUs__title}>Please Get in Touch and our expert support<br/>team will answer all your questions.</h1>
            <div className={classes.contactUs__body}>
                <ContactUsLeft />
                <ContactUsRight />
            </div>
        </section>
    );
};

export default ContactUs;