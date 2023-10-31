import React, {useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Login.module.scss';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/dashboard');
        } catch {
            setLoading(false);
            setError('Failed to Enter, try again later');
        }
    };

    return (
        <section className={classes.auth}>
            <div className={classes.adminForm}>
                <h1 className={classes.adminForm__title}>Welcome</h1>
                {error && <p className={classes.error}>{error}</p>}
                {loading ? <Spinner /> : <form className={classes.adminForm__form} onSubmit={handleSubmit}>
                    <input type="email" className={classes.adminForm__input} placeholder="Email" ref={emailRef} defaultValue="admin@alraheemmotors.com" required />
                    <input type="password" className={classes.adminForm__input} placeholder="Password" ref={passwordRef} required />
                    <button type="submit" className={classes.adminForm__btn}>Enter</button>
                </form>}
            </div>
        </section>
    );
};