import React from 'react';

import InputWrapper from '../UI/InputWrapper/InputWrapper';
import InputWrapperBox from '../UI/InputWrapperBox/InputWrapperBox';
import InputTextBox from '../UI/InputTextBox/InputTextBox';

const CarInfo = props => {
    return (
        <InputWrapper>
            <InputWrapperBox>
                <InputTextBox name="company" title="Company" inpSize="small" value={props.company} />
                <InputTextBox name="model" title="Model" inpSize="small" value={props.model}/>
            </InputWrapperBox>
            <InputWrapperBox>
                <InputTextBox name="registration No" title="Registration No." inpSize="small" value={props.registration} />
                <InputTextBox name="color" title="Color" inpSize="small" value={props.color}/>
            </InputWrapperBox>
        </InputWrapper>
    );
};

export default CarInfo;