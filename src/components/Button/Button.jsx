import React from 'react';
import c from './Button.module.css';
import { login } from '../../functions/login';

export const Button = ({ text, phone, pass, setError, setCurrentIdStudent }) => {

    const PATH = process.env.REACT_APP_API_PATH_STC;

    return (
        <button className={c.button} onClick={() => { login(PATH, phone, pass, setError, setCurrentIdStudent) }}>{text}</button>
    )
}
