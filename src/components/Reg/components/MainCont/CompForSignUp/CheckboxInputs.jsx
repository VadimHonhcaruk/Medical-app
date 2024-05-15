import c from './Check.module.css';

export const CheckboxInputs = ({ isMobile, setCheckerOne, setCheckerTwo, ageUnderEi, register }) => {

    return (
        <div className={c.cont}>
            {!isMobile && <h2 className={c.h2}>Health реєстрація</h2>}
            <h3 className={c.h3}>Обов'язково ознайомтесь</h3>
            <div className={c.check}>
                <input className={c.customCheckbox} data-testid="contract-checkbox" id="contract" name="contract" type="checkbox" {...register("contract", { onChange: () => { setCheckerOne(prev => !prev) }, required: true })} />
                <label htmlFor="contract"><p>Я погоджуюсь з умовами&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VOXLZEnl7hI-sLmddRXSR0vLhGcG736_/edit">договору з Health</a></p></label>
            </div>
            <div className={c.check}>
                <input className={c.customCheckbox} data-testid="behavior-checkbox" id="behavior" name="behavior" type="checkbox" {...register("behavior", { onChange: () => { setCheckerTwo(prev => !prev) }, required: true })} />
                <label htmlFor="behavior"><p>Я погоджуюсь з&nbsp;<a className={c.hypertext} target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/13cx8LsKCIvad_B45bRm3KLuTZiTOLcHC/edit">правилами поведінки в клініці Health</a></p></label>
            </div>
        </div>
    )
}
