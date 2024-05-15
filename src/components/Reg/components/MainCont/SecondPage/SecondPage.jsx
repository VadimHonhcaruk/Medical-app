import React from 'react';
import c from "./SecondPage.module.css";

export const SecondPage = () => {
    return (
        <div className={c.cont}>
            <h1>Студент - неповнолітній</h1>
            <div>
                <p className={c.needP}>Необхідно внести дані про його представника.</p>
                <p>Студент та представник можуть переглядати:</p>
                <ul>
                    <li>відвідування</li>
                    <li>оплату</li>
                    <li>документи</li>
                </ul>
            </div>
        </div>
    )
}