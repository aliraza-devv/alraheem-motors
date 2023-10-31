import React from 'react';

import classes from './Inputs.module.scss';

const Inputs = props => {
    return (
        <div className={classes.Inputs}>
            <h1 className={classes.Inputs__title}>{props.mainTitle}</h1>
            {props.children}
        </div>
    );
};

export default Inputs;