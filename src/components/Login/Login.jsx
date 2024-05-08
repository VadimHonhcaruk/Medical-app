import React, { useEffect } from 'react';
import c from './Login.module.css';
import { LoginMain } from './LoginMain';
import { useNavigate } from 'react-router-dom';

export const Login = ({ setCurrentIdStudent, currentIdStudent, phone, setPhone, social, phoneSoc, address }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (currentIdStudent) {
            navigate('/attendance');
        }
    }, [navigate, currentIdStudent])

    return (
        <div className={c.cont}>
            <LoginMain setCurrentIdStudent={setCurrentIdStudent} phone={phone} setPhone={setPhone} />
        </div>
    )
}
