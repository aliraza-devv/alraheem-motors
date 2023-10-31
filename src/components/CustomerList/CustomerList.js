import React from 'react';

import classes from './CustomerList.module.scss';

const CustomerList = props => {

    return (        
        <div className={classes.customerList}>
            {props.children}
        </div>
    );
};

export default CustomerList;