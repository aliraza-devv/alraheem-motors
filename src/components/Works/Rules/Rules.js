import React from 'react';

import RulesRow from './RulesRow/RulesRow';
import classes from './Rules.module.scss';

const Rules = props => {
    return (
        <div className={classes.Rules}>
            <RulesRow text={props.r1} />
            <RulesRow text={props.r2} />
            <RulesRow text={props.r3} />
        </div>
    );
};

export default Rules;