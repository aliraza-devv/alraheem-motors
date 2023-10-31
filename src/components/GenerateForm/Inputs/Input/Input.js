import React from 'react';

import classes from './Input.module.scss';

const Input = props => {
    return(
        <div className={classes.Input} >
            <p className={classes.Input__title}>{props.title}</p>
            <p className={classes.Input__box}>{props.text}</p>
        </div>
    );
};

export default Input;