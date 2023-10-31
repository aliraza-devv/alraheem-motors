import React from 'react';

import InputWrapper from '../UI/InputWrapper/InputWrapper';
import InputWrapperBox from '../UI/InputWrapperBox/InputWrapperBox';
import InputTextBox from '../UI/InputTextBox/InputTextBox';

const PersonalInfo = props => {
    return (
        <InputWrapper>
            <InputWrapperBox>
                <InputTextBox name="name" title="Full Name" inpSize="large" value={props.name} existingValue={props.existingName}/>
                <InputTextBox name="phone" title="Phone No." inpSize="large" inpType='phone' value={props.phone} existingValue={props.existingPhone}/>
            </InputWrapperBox>
            <InputWrapperBox>
                <InputTextBox name="fatherName" title="Father Name" inpSize="large" value={props.fatherName} existingValue={props.existingFather} />
                <InputTextBox name="cell" title="Cell No." inpSize="large" inpType='phone' value={props.cell} existingValue={props.existingCell}/>
            </InputWrapperBox>
            <InputWrapperBox>
                <InputTextBox name="cnic" title="CNIC No." inpSize="large" inpType='cnic' value={props.cnic} existingValue={props.existingCnic}/>
                <InputTextBox name="address" title="Address" inpSize="large" value={props.address} existingValue={props.existingAddress} />                
            </InputWrapperBox>
        </InputWrapper>
    );
};

export default PersonalInfo;