import c from './Input.module.css';

export const Input = ({ dataTestid = '', fill, styleName, styleNameL, styleNameLW, inputname, label, name, register, errors, onchange, required, pattern, inputmode, onInput, maxLength = 30, min, max, onfocus, onBlur }) => {

    return (
        <>
            <div className={errors?.[inputname] ? c.errorStyle : c.inputBox}>
                <input data-testid={dataTestid} className={styleName} id={inputname} onFocus={onfocus} onInput={onInput} value={name} inputMode={inputmode} onChange={onchange} maxLength={maxLength} {...register(inputname, { onChange: onchange, onBlur: onBlur, required: required, maxLength: 30, pattern: pattern, min: min, max: max })} type="text" />
                <label className={styleNameL + ' ' + styleNameLW} htmlFor={inputname} id={name === '' ? null : fill ? fill : c.fill}>{label}</label>
            </div>
        </>
    )
}