import React from 'react';

import Rules from '../Rules/Rules';
import classes from './Position.module.scss';

const Position = props => {
    return (
        <div className={classes.Position}>
            <Rules 
                r1="You should have a ID Card"
                r2="You should have a Guarantor"
                r3="You can book in Advance" />
            <Rules 
                r1="You should have a Blank Check"
                r2="Customer is Responsible for any Damage"
                r3="You should have to return vehicle on Time" />
        </div>
    );  
};

export default Position;