import React from 'react';

import classes from './ServicesHead.module.scss';

const ServicesHead = props => {
    return (
        <div className={classes.services__textBox}>
            <h1 className={classes.services__title}>{props.title}</h1>
            <p className={classes.services__span}>{props.span}</p>
        </div>
    );
};

export default ServicesHead;