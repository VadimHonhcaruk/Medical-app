import { useEffect, useState } from "react";
import { inputChange, onblurInput, onfocusInput } from "../../../../../functions/phoneInput";
import { Input } from "../Input/Input";
import { Error } from "./Error";
import a from './Phone.module.css';

export const Phone = ({ c, REGINFO6, phone, setPhone, ageUnderTw, register, errors, clearErrors }) => {
    const name = 'Номер телефону';
    const [queryPhone, setQueryPhone] = useState('');
    const [queryPhoneWithout, setQueryPhoneWithout] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        let x = queryParams.get("phoneNumber");
        if (x) setQueryPhoneWithout('+' + x.slice(1));
        if (x) x = x.replace(/^./, '+');
        const regex = /^\+380\d{9}$/;
        if (x && regex.test(x)) {
            x = x.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})(\d{0,2})(\d{0,2})/);
            setQueryPhone(!x[2] ? '+' + x[1] : '+38 (' + x[1][2] + x[1][3] + x[1][4] + ') ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : ''));
        }
    }, [])

    return (
        <>
            <Input dataTestid="phoneInput" styleName={a.style} styleNameL={a.styleL} maxLength="19" inputname={REGINFO6} onfocus={onfocusInput} onBlur={onblurInput} onInput={inputChange} label={name} name={phone} register={register} errors={errors} onchange={(e) => { setPhone(e.target.value); }} required={{ value: !ageUnderTw, message: "Заповніть поле" }} pattern={{ value: /^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/, message: `Поле має бути у форматі: +380XXXXXXXXX` }} />
            {errors?.[REGINFO6]?.message ? <Error text={errors?.[REGINFO6]?.message} /> : queryPhone && <p className={c.phnP}><span className={c.phn} onClick={() => { setPhone(queryPhone); clearErrors(REGINFO6); }}>Вставити {queryPhoneWithout}, як номер телефону</span></p>}
        </>
    )
}
