import React from 'react';

const InputWrapperBox = props => {
    return (
        <div className="input__wrapper__box">
            {props.children}
        </div>
    );
};

export default InputWrapperBox;