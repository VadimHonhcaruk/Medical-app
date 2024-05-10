import React, { useEffect, useState } from 'react';
import c from './Requisites.module.css';
import copy from '../../../../images/copy.svg';

export const Requisites = () => {

    const [copyState, setCopyState] = useState(false);
    const [copyState2, setCopyState2] = useState(false);

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <div className={c.cont}>
            <div className={c.flexAnother}>
                <div className={c.cardCont}>
                    <div className={c.card}>
                        <div className={c.up}>
                            <img className={c.bankLogoMini} alt='mono' src={require('../../../../images/pp.png')}></img>
                            <div className={c.flexColumn}>
                                <div className={c.bold + ' ' + c.flexCopy}>{ }Отримувач: Медичний заклад "Health"</div>
                                <div className={c.bold + ' ' + c.flexCopy}>{ }Cума: 2300&#8372;</div>
                            </div>
                        </div>
                        <div className={c.down}>
                            <div className={c.bold}>UA118675238291333849462215649</div>
                            <div className={c.bold}>Код ЄДРПОУ: 24295677</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
