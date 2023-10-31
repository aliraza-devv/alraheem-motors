import React from 'react';

import Input from '../Input/Input';
import classes from './InputsBox.module.scss';

const InputsBox = props => {
    return (
        <div className={classes.Inputs__box}>
            <Input title={props.title1} text={props.text1} />
            <Input title={props.title2} text={props.text2} />
        </div>
    );
};

export default InputsBox;