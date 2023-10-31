import React, {useState} from 'react';

// import {Search} from '../../../assets/SvgComponents/index';
import InputCustomer from './InputCustomer/InputCustomer';
import DropDown from './DropDown/DropDown';
import classes from './InputDropdown.module.scss';

const InputDropdown = props => {

    let input = (
            <InputCustomer 
                inpType='text' 
                value={props.value} 
                holderTxt={props.holderTxt}
                pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" 
                title='Enter Valid Name'/>
        );

    if (props.selectedValue === 'sDate') {
        input = (
            <InputCustomer 
                inpType='date' 
                value={props.value} />
        );
    };

    if (props.selectedValue === 'cnicNo') {
        input = (
            <InputCustomer 
                inpType='text'  
                value={props.value}
                holderTxt="Enter Valid CNIC NO"
                pattern="[0-9]{13}"
                title='Enter Valid CNIC Number' />
        );
    };

    return(
        <form className={classes.InputDropdown__search} onSubmit={props.submitHandler}>
            <DropDown selectedValue={props.selectedValue} selected={props.selected} />
            {input}
            <button type="submit" className={classes.InputDropdown__search__btn}>Search</button>
        </form>
    );
};  

export default InputDropdown;