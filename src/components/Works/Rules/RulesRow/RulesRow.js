import React from 'react';

import {Tick} from '../../../../assets/SvgComponents/index';
import classes from './RulesRow.module.scss';

const RulesRow = props => {
    return (
        <div className={classes.Row}>
            <Tick className={classes.Row__svg} />
            <p className={classes.Row__text}>{props.text}</p>
        </div>
    );
};

export default RulesRow;