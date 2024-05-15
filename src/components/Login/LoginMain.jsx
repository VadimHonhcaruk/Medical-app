import React, { useState } from 'react';
import c from './Login.module.css';
import health from '../../images/health.svg';
import { inputChange, onblurInput, onfocusInput } from "../../functions/phoneInput";
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useNavigate } from 'react-router-dom';

export const LoginMain = ({ setCurrentIdStudent, phone, setPhone }) => {

    const navigate = useNavigate();
    const [error, setError] = useState(200);
    const [pass, setPass] = useState('');


    return (
        <div className={c.main}>
            <div className={c.login}>
                <div className={c.loginIn}>
                    <div className={c.logoName}>
                        <img className={c.img} alt='logo' src={health}></img>
                        <div>Health</div>
                    </div>
                    <div className={c.reg}>
                        <div onClick={() => { navigate('/registration') }}>Зараєструватись</div>
                    </div>
                    {/* <Input maxLength="19" inputname='phoneNum' onfocus={onfocusInput} onBlur={onblurInput} onInput={inputChange} label='Номер телефону' name={phone} error={error} onchange={(e) => { setPhone(e.target.value); }} pattern={/^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/} /> */}
                    <Input maxLength="19" inputname='phoneNum' label='Номер телефону' name={phone} error={error !== 200} onchange={(e) => { setPhone(e.target.value); }} />
                    <Input maxLength="30" inputname='password' label='Пароль' name={pass} error={error !== 200} onchange={(e) => { setPass(e.target.value); }} type='password' />
                    {error !== 200 && <div className={c.error}>Помилка!</div>}
                    <Button text='Увійти' phone={phone} pass={pass} setError={setError} setCurrentIdStudent={setCurrentIdStudent} />
                </div>
            </div>
        </div>
    )
}
