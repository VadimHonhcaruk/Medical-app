import React from 'react';
import { NameInput } from '../CompForSignUp/NameInput';
import c from "./FirstPage.module.css";
import { Birth } from '../CompForSignUp/StudentBirth';
import { Phone } from '../CompForSignUp/Phone';
import { Input } from '../Input/Input';
import a from '../CompForSignUp/Phone.module.css';

export const FirstPage = ({ loginCode, setLoginCode, mobilePage, isMobile, REGINFO, REGINFO2, REGINFO3, REGINFO4, REGINFO5, REGINFO6, day, setDay, month, setMonth, year, setYear, firstName, setFirstName, setSecondName, secondName, phone, setPhone, clearErrors, setError, register, errors, now, isValideDate, ageUnderTw, ageUnderEi }) => {
    return (!isMobile ?
        <div className={c.cont}>
            <h2 className={c.h2}>Health реєстрація</h2>
            <h3 className={c.h3}>Надайте персональні дані</h3>
            <NameInput REGINFO={REGINFO} REGINFO2={REGINFO2} firstName={firstName} setFirstName={setFirstName} setSecondName={setSecondName} secondName={secondName} clearErrors={clearErrors} setError={setError} register={register} errors={errors} />
            <Birth REGINFO3={REGINFO3} REGINFO4={REGINFO4} REGINFO5={REGINFO5} day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} isValideDate={isValideDate} register={register} errors={errors} now={now} ageUnderEi={ageUnderEi} />
            <Phone c={c} clearErrors={clearErrors} REGINFO6={REGINFO6} phone={phone} setPhone={setPhone} register={register} errors={errors} ageUnderTw={ageUnderTw} />
            <br></br>
            <Input styleName={a.style} styleNameL={a.styleL} inputname={'loginCode'} label='Пароль' name={loginCode} register={register} errors={errors} onchange={(e) => { setLoginCode(e.target.value); }} />
        </div> : mobilePage === 1 || mobilePage === 4 ?
            <div className={c.cont}>
                <h3 className={c.h3}>Надайте персональні дані {REGINFO === 'firstName' ? 'студента' : 'представника'}</h3>
                <NameInput isMobile={isMobile} REGINFO={REGINFO} REGINFO2={REGINFO2} firstName={firstName} setFirstName={setFirstName} setSecondName={setSecondName} secondName={secondName} clearErrors={clearErrors} setError={setError} register={register} errors={errors} />
                <Birth REGINFO3={REGINFO3} REGINFO4={REGINFO4} REGINFO5={REGINFO5} day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} isValideDate={isValideDate} register={register} errors={errors} now={now} ageUnderEi={ageUnderEi} />
            </div> :
            <div className={c.cont}>
                <h3 className={c.h3}>Надайте персональні дані {REGINFO === 'firstName' ? 'студента' : 'представника'}</h3>
                <Phone c={c} clearErrors={clearErrors} REGINFO6={REGINFO6} phone={phone} setPhone={setPhone} register={register} errors={errors} ageUnderTw={ageUnderTw} />
            </div>
    )
}