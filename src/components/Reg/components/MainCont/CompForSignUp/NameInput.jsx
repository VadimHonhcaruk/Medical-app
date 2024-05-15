import { onChangeInputName } from '../../../../../functions/nameInput';
import { Input } from '../Input/Input';
import { Error } from './Error';
import a from './NameInput.module.css';

export const NameInput = ({ isMobile, REGINFO, REGINFO2, setFirstName, clearErrors, setError, register, firstName, errors, setSecondName, secondName }) => {
    const name = "Ім'я";
    const secname = "Прізвище";
    return (
        <>
            <div style={isMobile ? { margin: 'auto' } : { display: 'flex' }}>
                <Input data-testid="firstNameInput" styleName={a.style} styleNameL={a.styleL} styleNameLW={a.styleLW} inputname={REGINFO} label={name} name={firstName} register={register} errors={errors} onchange={(e) => { setFirstName(e.target.value); onChangeInputName(firstName, setError, clearErrors, firstName) }} required={{ value: true, message: "Заповніть поле" }} pattern={{ value: /^(?!.*(?:['-]){2,})(?!['-])(?!.*(?:['-]$))(?:[А-Яа-яЁёІіЇїЄє']+['-]?)*[А-Яа-яЁёІіЇїЄє']+$/, message: "Поле може містити тільки літери, апостроф та тире" }} />
                <Input data-testid="secondNameInput" styleName={a.style} styleNameL={a.styleL} inputname={REGINFO2} label={secname} name={secondName} register={register} errors={errors} onchange={(e) => { setSecondName(e.target.value); onChangeInputName(secondName, setError, clearErrors, secondName) }} required={{ value: true, message: "Заповніть поле" }} pattern={{ value: /^(?!.*(?:['-]){2,})(?!['-])(?!.*(?:['-]$))(?:[А-Яа-яЁёІіЇїЄє']+['-]?)*[А-Яа-яЁёІіЇїЄє']+$/, message: "Поле може містити тільки літери, апостроф та тире" }} />
            </div>
            <Error text={errors?.[REGINFO]?.message || errors?.[REGINFO2]?.message} />
        </>
    )
}
