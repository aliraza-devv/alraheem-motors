import React from 'react';

const InputTextBox = props => {

    let input = (
        <input 
            name={props.name} 
            className={`input__wrapper__box__textBox__input input__wrapper__box__textBox__input-${props.inpSize}`} 
            type="text" 
            placeholder={`Enter ${props.title}`}
            required
            value={props.existingValue}
            onChange={props.value} />
    );

    if(props.inpType === 'cnic') {
        input = (
            <input 
            name={props.name} 
            className={`input__wrapper__box__textBox__input input__wrapper__box__textBox__input-${props.inpSize}`} 
            type="text" 
            placeholder={`Enter ${props.title}`}
            required
            value={props.existingValue}
            pattern="[0-9]{13}"
            title='Enter Valid CNIC Number'
            onChange={props.value} />
        );
    } else if (props.inpType === 'number'){
        input = (
            <input 
            name={props.name} 
            className={`input__wrapper__box__textBox__input input__wrapper__box__textBox__input-${props.inpSize}`} 
            type="text" 
            placeholder={`Enter ${props.title}`}
            required
            value={props.existingValue}
            pattern="^[0-9]+$"
            title='Enter In Numbers Only'
            onChange={props.value} />
        );
    } else if (props.inpType === 'phone'){
        input = (
            <input 
            name={props.name} 
            className={`input__wrapper__box__textBox__input input__wrapper__box__textBox__input-${props.inpSize}`} 
            type="text" 
            placeholder={`Enter ${props.title}`}
            required
            value={props.existingValue}
            pattern="[0-9]{11}"
            title='Enter In Phone Number'
            onChange={props.value} />
        );
    }

    return (
        <div className="input__wrapper__box__textBox">
            <label htmlFor={props.name} className="input__wrapper__box__textBox__label">{props.title}</label>
            {input}
        </div>
    );
};  

export default InputTextBox;
