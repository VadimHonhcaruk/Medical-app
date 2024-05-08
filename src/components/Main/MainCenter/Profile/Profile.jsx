import React, { useEffect, useState } from 'react';
import c from './Profile.module.css';
import { Input } from '../../../Input/Input';
import { inputChange, onblurInput, onfocusInput } from "../../../../functions/phoneInput";
import profilePro from '../../../../images/profilePro.svg';
import { InputDate } from '../../../Input/InputDate';
import unixTimestampToYYYYMMDD from '../../../../functions/unixToDate';
import dateToUnix from '../../../../functions/dateToUnix';
import { putStudent } from '../../../../functions/putStudent';

export const Profile = ({ currentIdStudent, studentData }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('vadimhonc@gmail.com');
    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH_SEC = process.env.REACT_APP_API_PATH_SECOND;

    useEffect(() => {
        reset();
    }, [studentData]);

    function reset() {
        setFirstName(studentData?.firstname);
        setLastName(studentData?.lastname);
        setPhone(studentData?.phoneNumber);
        setDateOfBirth(studentData?.dateOfBirth);
    }

    function formatPhoneNumber(phoneNumber = '') {
        const digitsOnly = phoneNumber.replace(/\D/g, '');
        return `+${digitsOnly}`;
    }

    return (
        <div className={c.cont}>
            <div className={c.inputs}>
                <Input maxLength="30" inputname='firstName' label='Ім&#39;я' name={firstName} onchange={(e) => { setFirstName(e.target.value); }} />
                <Input maxLength="30" inputname='lastName' label='Прізвище' name={lastName} onchange={(e) => { setLastName(e.target.value); }} />
                {/* <Input maxLength="30" inputname='email' label='Електронна адреса' name={email} onchange={(e) => { setEmail(e.target.value); }} /> */}
                <Input maxLength="19" inputname='phoneNum' onfocus={onfocusInput} onBlur={onblurInput} onInput={inputChange} label='Номер телефону' name={phone} onchange={(e) => { setPhone(e.target.value); }} pattern={/^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/} />
                <InputDate inputname='dateofbirth' label='Дата народження' name={unixTimestampToYYYYMMDD(dateOfBirth / 1000)} onchange={(e) => { setDateOfBirth(dateToUnix(e.target.value)); }} />
                {studentData?.firstname !== firstName ||
                    studentData?.lastname !== lastName ||
                    studentData?.dateOfBirth !== dateOfBirth ||
                    studentData?.phoneNumber !== formatPhoneNumber(phone) ?
                    <div className={c.buttons}>
                        <div className={c.button + ' ' + c.cancel} onClick={reset}>Скасувати</div>
                        <div className={c.button + ' ' + c.save} onClick={() => putStudent(PATH_SEC, TOKEN, AUTH, currentIdStudent, { firstname: firstName, lastname: lastName, dateOfBirth: `${dateOfBirth}`, phoneNumber: formatPhoneNumber(phone), status: studentData?.status, loginCode: studentData?.loginCode })}>Зберегти</div>
                    </div> :
                    null
                }
            </div>
            <img alt='Profile' src={profilePro} className={c.profileIcon}></img>
        </div>
    )
}
