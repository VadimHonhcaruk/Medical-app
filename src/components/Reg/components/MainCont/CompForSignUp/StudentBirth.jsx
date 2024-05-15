import c from './Birth.module.css';
import { onlyNumb } from '../../../../../functions/onlyNumb';
import { Input } from '../Input/Input';
import { Error } from './Error';

export const Birth = ({ REGINFO3, REGINFO4, REGINFO5, day, setDay, month, setMonth, year, setYear, isValideDate, register, errors, now, ageUnderEi }) => {

    const name = 'День';
    const name3 = 'Рік';
    let msg = isValideDate ? null : 'Такої дати не існує';

    return (
        <>
            <p className={c.title}>Дата народження</p>
            <div className={c.center}>
                <Input fill={c.fill} styleName={c.style} styleNameL={c.styleL} styleNameLW={c.styleLW} onInput={onlyNumb} maxLength="2" inputmode="numeric" inputname={REGINFO3} label={name} name={day} register={register} errors={errors} onchange={(e) => { setDay(e.target.value); }} required={{ value: true, message: "Заповніть поле" }} pattern={{ value: /^(0?[1-9]|[12]\d|3[01])$/, message: "Поле може містити тільки цифри від 1 до 31" }} />
                <div className={errors?.month ? c.errorStyle : c.inputBox}>
                    <select id="month" value={month} onInput={(e) => { setMonth(e.target.value); }} {...register(REGINFO4, { onChange: (e) => { setMonth(e.target.value); }, required: "Заповніть поле" })}>
                        <option value="" hidden></option>
                        <option value="1">Січень</option>
                        <option value="2">Лютий</option>
                        <option value="3">Березень</option>
                        <option value="4">Квітень</option>
                        <option value="5">Травень</option>
                        <option value="6">Червень</option>
                        <option value="7">Липень</option>
                        <option value="8">Серпень</option>
                        <option value="9">Вересень</option>
                        <option value="10">Жовтень</option>
                        <option value="11">Листопад</option>
                        <option value="12">Грудень</option>
                    </select>
                    <label htmlFor="month" className={c.month} id={month !== '' ? c.fill : undefined}>Місяць</label>
                </div>
                <Input fill={c.fill} styleName={c.style} styleNameL={c.styleL} styleNameLW={c.styleLWR} onInput={onlyNumb} onChange={onlyNumb} maxLength="4" inputmode="numeric" inputname={REGINFO5} label={name3} name={year} register={register} errors={errors} onchange={(e) => { setYear(e.target.value); }} required={{ value: true, message: "Заповніть поле" }} pattern={{ value: /^\d{4}$/, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 5}` }} min={{ value: now.getFullYear() - 100, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 5}` }} max={{ value: now.getFullYear() - 5, message: `Поле може містити значення від ${now.getFullYear() - 100} до ${now.getFullYear() - 15}` }} />
            </div>
            <Error text={errors?.[REGINFO3]?.message || errors?.[REGINFO5]?.message || errors?.[REGINFO4]?.message || msg || (ageUnderEi && 'Представник повинен бути повнолітнім')} />
        </>
    )
}
