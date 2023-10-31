import React from 'react';

import classes from './Link.module.scss';

const Link_ = props => {
    const Icon = props.icon;

    return (
        <div className={classes.Footer__linkBox__link}>
            <Icon className={classes.Footer__linkBox__link__icon} />
            <a href={props.loc} className={classes.Footer__linkBox__link__text}>{props.text}</a>
        </div>
    );
};

export default Link_;