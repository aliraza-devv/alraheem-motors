import React from 'react';

import classes from './BenefitsBox.module.scss';

const BenefitsBox = props => {

    const Icon = props.icon;

    return (
        <div className={classes.Benefits__box}>
            <Icon className={classes.Benefits__box__svg} />
            <h2 className={classes.Benefits__box__title}>{props.fHLine}<br/>{props.sHLine}</h2>
            <p className={classes.Benefits__box__para}>{props.fPLine}<br/>We do our best for Happiness of<br/>our Customers</p>
        </div>
    );
};

export default BenefitsBox;