import React from 'react';

import classes from './InputCustomer.module.scss';

const InputCustomer = props => {
    
    let inp = (
        <input 
            type='text' 
            className={classes.Input__search} 
            placeholder={props.holderTxt} 
            onChange={props.value} 
            pattern={props.pattern} 
            title={props.title}
            required />
    ); 

    if(props.inpType === 'date') {
        inp = (
            <input 
                type='date' 
                className={classes.Input__search} 
                id={classes.dateInp} 
                onChange={props.value}
                required />
        );
    }

    return inp;
};

export default InputCustomer;