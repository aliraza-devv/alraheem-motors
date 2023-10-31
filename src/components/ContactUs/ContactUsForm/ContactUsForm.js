import React, {useState} from 'react';

import axios from '../../../axios/axios-customers';
import classes from './ContactUsForm.module.scss';

const ContactUsForm = props => {

    const [message, setMessage] = useState({
        name: null,
        email: null,
        message: null
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const sendMessageHandler = e => {
        e.preventDefault();

        const sendMessage = {
            ...message
        };

        axios.post('/messages.json', sendMessage )
            .then(() => {
                setIsSuccess(true);
                setTimeout(function(){ 
                    setIsSuccess(false)
                }, 5000);
            })
            .catch(() => {
                setIsError(true);
                setTimeout(function(){ 
                    setIsError(false)
                }, 5000);
            });
    };

    return (
        <form className={classes.ContactUs__form} onSubmit={sendMessageHandler}>
            {isSuccess ? (<p className="formText formText__success" >
                            Message Sent Successfully
                        </p>) : isError ? (<p className="formText formText__error" >
                                                Please try again later
                                            </p>) : null}
            <input 
                className={classes.ContactUs__form__input} 
                type="text" placeholder="Name" 
                onChange={e => setMessage({...message, name: e.target.value})}
                title='Please Enter Name'
                required />
            <input 
                className={classes.ContactUs__form__input} 
                type="email" 
                onChange={e => setMessage({...message, email: e.target.value})}
                placeholder="Email"
                title='Please Enter Email'
                required />
            <textarea 
                className={classes.ContactUs__form__textarea} 
                placeholder="Message" 
                onChange={e => setMessage({...message, message: e.target.value})}
                title='Please Enter your Message'
                required />
            <button type="submit" className={classes.ContactUs__form__btn} >Submit</button>
        </form>
    );
};

export default ContactUsForm;