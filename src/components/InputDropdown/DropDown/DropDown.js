import React from 'react';

import classes from './DropDown.module.scss';

const DropDown = props => {
    return (
        <select 
            className={classes.Dropdown__search} 
            id="label" 
            name="label" 
            value={props.selectedValue}
            onChange={props.selected}>
            <option value="cnicNo">CNIC</option>
            <option value="name">Name</option>
            <option value="sDate">Date</option>
        </select>
    );
};  

export default DropDown;