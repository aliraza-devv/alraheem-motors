import React from 'react';

import classes from './FeatureBox.module.scss';

const FeatureBox = props => {

    const IconComp = props.icon;

    return (
        <div className={classes.feature__box}>
            <IconComp className={classes.feature__box__icon} />                        
            <h3 className={classes.feature__box__heading}>{props.title}</h3>
            <p className={classes.feature__box__text}>{props.details}</p>
        </div>
    ); 
};

export default FeatureBox;