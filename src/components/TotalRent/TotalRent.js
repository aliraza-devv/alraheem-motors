import React from 'react';

import InputWrapper from '../UI/InputWrapper/InputWrapper';
import InputWrapperBox from '../UI/InputWrapperBox/InputWrapperBox';
import InputTextBox from '../UI/InputTextBox/InputTextBox';

const TotalRent = props => {
    return (
        <InputWrapper>
            <InputWrapperBox>
                <InputTextBox name="dayRent" title="Per Day" inpSize="large" inpType='number' value={props.perDay} />
                <InputTextBox name="totalRent" title="Total Rent" inpSize="large" inpType='number' value={props.total} />
            </InputWrapperBox>
        </InputWrapper>
    );
};

export default TotalRent;