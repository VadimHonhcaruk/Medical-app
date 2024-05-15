import React, { useState } from 'react';
import c from "./SecondPage.module.css";
import student from '../../../../../images/student.svg';
import pred from '../../../../../images/pred.svg';
import studentw from '../../../../../images/studentw.svg';
import predw from '../../../../../images/predw.svg';
import info from '../../../../../images/info.svg';

export const SecondPageAnother = ({ isMobile = false, pay, setPay }) => {
    const [modal, setModal] = useState(false);
    return (!isMobile ?
        <div className={c.contsec}>
            <h2 className={c.h2}>Реєстрація на навчання</h2>
            <h3 className={c.h3}>Хто здійснюватиме оплату?</h3>
            <div className={c.choose}>
                <div role="button" name="Студент" className={pay ? c.var + ' ' + c.choosen : c.var} onClick={() => setPay(true)}><img alt="student" src={!pay ? student : studentw} className={c.image}></img><span>Студент</span></div>
                <div role="button" name="Представник" className={!pay ? c.var + ' ' + c.choosen : c.var} onClick={() => setPay(false)}><img alt="representive" src={pay ? pred : predw} className={c.image}></img><span>Представник</span></div>
                <img alt="info" src={info} className={c.info}></img>
                <div className={c.tooltip}>
                    <p>Аби надати третій особі доступ до даних студента,</p>
                    <p>можна додати представника.</p>
                    <p>Студент та представник можуть переглядати:</p>
                    <ul>
                        <li>відвідування</li>
                        <li>оплату</li>
                        <li>документи</li>
                    </ul></div>
            </div>
        </div> :
        <div className={c.contsec}>
            {modal && <div className={c.modal} onClick={() => setModal(false)}>
                <div className={c.tooltip}>
                    <p>Аби надати третій особі доступ до даних студента,</p>
                    <p>можна додати представника.</p>
                    <p className={c.margm}>Студент та представник можуть переглядати:</p>
                    <ul>
                        <li>відвідування</li>
                        <li>оплату</li>
                        <li>документи</li>
                    </ul></div>
            </div>}
            <h3 className={c.h3}>Хто здійснюватиме оплату?</h3>
            <div className={c.choose}>
                <div className={pay ? c.var + ' ' + c.choosen : c.var} onClick={() => setPay(true)} role="button" name="Студент"><img alt="student" src={!pay ? student : studentw} className={c.image}></img><span>Студент</span></div>
                <div className={c.infoMob}>
                    <img alt="info-1" src={info} className={c.info + ' ' + c.invis}></img>
                    <div className={!pay ? c.var + ' ' + c.choosen : c.var} onClick={() => setPay(false)} role="button" name="Представник"><img alt="representive" src={pay ? pred : predw} className={c.image}></img><span>Представник</span></div>
                    <img alt="info-2" src={info} onClick={() => setModal(true)} className={c.info}></img>
                </div>
            </div>
        </div>
    )
}