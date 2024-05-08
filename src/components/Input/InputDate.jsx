import c from './Input.module.css';

export const InputDate = ({ inputname, label, name, error, onchange, pattern, inputmode, onInput, maxLength, onfocus, onBlur }) => {

    return (
        <>
            <div className={error ? c.errorStyle : c.inputBox}>
                <input id={inputname} onFocus={onfocus} onInput={onInput} onBlur={onBlur} value={name} inputMode={inputmode} onChange={onchange} maxLength={maxLength} type="date" pattern={pattern} />
                <label htmlFor={inputname} id={name ? c.fill : null}>{label}</label>
            </div>
        </>
    )
}