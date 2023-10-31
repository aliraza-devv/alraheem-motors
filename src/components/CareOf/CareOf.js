import React from 'react';

import InputWrapper from '../UI/InputWrapper/InputWrapper';
import InputWrapperBox from '../UI/InputWrapperBox/InputWrapperBox';
import InputTextBox from '../UI/InputTextBox/InputTextBox';

const CareOf = props => {
    return (
        <InputWrapper>
            <InputWrapperBox>
                <InputTextBox name="cName" title="Name" inpSize="large" value={props.name} existingValue={props.existingName} />
                <InputTextBox name="cAddress" title="Address" inpSize="large" value={props.address} existingValue={props.existingAddress} />
            </InputWrapperBox>
            <InputWrapperBox>
                <InputTextBox name="cPhone" title="Phone No." inpSize="large" inpType='phone' value={props.phone} existingValue={props.existingPhone} />
                <InputTextBox name="cCnicNo" title="CNIC No." inpSize="large" inpType='cnic' value={props.cnicNo} existingValue={props.existingCNIC} />
            </InputWrapperBox>
        </InputWrapper>
    );
};

export default CareOf;