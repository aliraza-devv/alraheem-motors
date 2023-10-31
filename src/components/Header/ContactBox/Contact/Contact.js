import React from 'react';

import classes from './Contact.module.scss';

const Contact = props => {

    const Icon = props.icon;

    return (
        <div className={classes.contact}>
            <div className={classes.contact__textBox}>
                <Icon className={classes.contact__icon} />
                <p className={classes.contact__text}>{props.text}</p>
            </div>
        </div>
    );
};

export default Contact;