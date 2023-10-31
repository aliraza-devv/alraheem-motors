import React from 'react';

import Link from './Link/Link';
import classes from './LinkBox.module.scss';

const LinkBox = props => {

    const Icon1 = props.icon1;
    const Icon2 = props.icon2;
    const Icon3 = props.icon3;


    return (
        <div className={classes.Footer__linkBox}>
            <h1 className={classes.Footer__linkBox__title}>{props.title}</h1>
            <Link loc={props.loc1} icon={Icon1} text={props.text1} />
            <Link loc={props.loc2} icon={Icon2} text={props.text2} />
            <Link loc={props.loc3} icon={Icon3} text={props.text3} />
        </div>
    );
};

export default LinkBox;