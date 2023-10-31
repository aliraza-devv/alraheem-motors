import React from 'react';

const InputWrapper = props => {
    return (
        <div className="input__wrapper">
            {props.children}
        </div>
    );
};

export default InputWrapper;