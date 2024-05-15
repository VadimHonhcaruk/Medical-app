import c from "./MainCont.module.css";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { useBirthdate } from "../../../../hooks/useBirthdate";
import { onSubmitFunc } from "../../../../functions/onSubmitFunc";
import { FirstPage } from "./FirstPage/FirstPage";
import { Modal } from '../Modal/Modal';
import { ImageRight } from './CompForSignUp/ImageRight/ImageRight'
import { studentCheck } from "../../../../functions/studentCheck";
import { objectCreating } from "../../../../functions/objectCreating";
import { CheckboxInputs } from "./CompForSignUp/CheckboxInputs";
import { useNavigate } from "react-router-dom";

const now = new Date();

export const MainContent = ({ isMobile }) => {
    console.log('YA TUT')
    const {
        register,
        setError,
        clearErrors,
        formState: {
            errors,
        },
        watch,

    } = useForm({ mode: 'onBlur' });

    const [ageUnderTw, setAgeUnderTw] = useState(false);
    const [ageUnderEi, setAgeUnderEi] = useState(false);
    const [isValideDate, setIsValideDate] = useState(true);
    const [page, setPage] = useState(1);
    const [checkerOne, setCheckerOne] = useState(false);
    const [checkerTwo, setCheckerTwo] = useState(false);
    const [phone, setPhone] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [loginCode, setLoginCode] = useState('');
    const [mobilePage, setMobilePage] = useState(1);
    const [yearp, setYearp] = useState('');
    const [ageUnderTwp, setAgeUnderTwp] = useState(false);
    const [ageUnderEip, setAgeUnderEip] = useState(false);
    const [isValideDatep, setIsValideDatep] = useState(true);

    const [canClick, setCanClick] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [pay, setPay] = useState(true);

    useBirthdate('day', 'year', 'month', watch, now, setIsValideDate, setAgeUnderTw, setAgeUnderEi);
    useBirthdate('dayp', 'yearp', 'monthp', watch, now, setIsValideDatep, setAgeUnderTwp, setAgeUnderEip);


    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    const nextButtOne = async () => {
        if (phone) {
            const student = objectCreating({ firstName: firstName, secondName: secondName, year: year, month: month, day: day, phone: phone });
            try {
                const response = await studentCheck(student, PATH, TOKEN, AUTH);
                if (response.status === 404) {
                    setPage(4)
                } else if (response.status === 200) {
                    setIsSuccess(false);
                    setError('phone', { type: 'custom', message: 'Даний номер телефону вже зареєстровано. Вкажіть, будь ласка, інший' })
                    return;
                } else {
                    setIsSuccess(false);
                    setIsModalVisible(true);
                    setTimeout(() => setIsModalVisible(false), 10000);
                    return;
                }
            } catch (error) {
                setIsSuccess(false);
                setIsModalVisible(true);
                setTimeout(() => setIsModalVisible(false), 10000);
                return;
            }
        } else {
            setPage(4);
        }
    }

    const navigate = useNavigate();

    const onSubmit = (data) => onSubmitFunc(data, ageUnderEi, watch, setIsSuccess, setIsModalVisible, setError, setPage, navigate, loginCode);


    return (
        isModalVisible ? <Modal isSuccess={isSuccess} /> :
            <div className={c.main}>
                <div className={c.flex}>
                    {((page === 1 && !isMobile) || ((mobilePage === 1 || mobilePage === 2) && isMobile)) && <FirstPage loginCode={loginCode} setLoginCode={setLoginCode} mobilePage={mobilePage} isMobile={isMobile} REGINFO='firstName' REGINFO2='secondName' REGINFO3='day' REGINFO4='month' REGINFO5='year' REGINFO6='phone' phone={phone} setPhone={setPhone} isValideDate={isValideDate} now={now} clearErrors={clearErrors} watch={watch} setError={setError} register={register} errors={errors} day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} firstName={firstName} setFirstName={setFirstName} setSecondName={setSecondName} secondName={secondName} ageUnderTw={ageUnderTw} />}
                    {(page === 1) && !isMobile && <ImageRight page={page} />}
                    {((page === 4 && !isMobile) || (mobilePage === 6 && isMobile)) && <CheckboxInputs isMobile={isMobile} checkerOne={checkerOne} checkerTwo={checkerTwo} setCheckerOne={setCheckerOne} setCheckerTwo={setCheckerTwo} ageUnderEi={ageUnderEi} pay={pay} register={register} />}
                </div>
                {page === 1 && !isMobile && <div className={c.buttCont}>
                    <button className={!canClick || errors?.firstName || errors?.secondName || errors?.day || errors?.month || errors?.year || errors?.phone || !isValideDate || watch('firstName') === '' || watch('secondName') === '' || watch('day') === '' || watch('month') === '' || watch('year') === '' || (phone === '' && !ageUnderTw) ? c.btnGrad + ' ' + c.btnGradOFF : c.btnGrad} onClick={!canClick || errors?.firstName || errors?.secondName || errors?.day || errors?.month || errors?.year || errors?.phone || !isValideDate || watch('firstName') === '' || watch('secondName') === '' || watch('day') === '' || watch('month') === '' || watch('year') === '' || (phone === '' && !ageUnderTw) ? null : nextButtOne}>Далі</button>
                </div>}

                {page === 4 && !isMobile && <div className={c.buttContFOURTH}>
                    <div className={c.buttBack} onClick={() => setPage(1)}>Назад</div>
                    <button className={c.btnGrad} onClick={() => { onSubmit({ firstName, secondName, day, month, year, phone }) }}>Зареєструватись</button> {/*() => { onSubmit({ firstName, secondName, day, month, year, phone, firstNameParent: firstNamep, secondNameParent: secondNamep, yearParent: yearp, phoneParent: phonep }) }*/}
                    <div className={c.buttBack + ' ' + c.invis}>Назад</div>
                </div>}
            </div>
    )
}
