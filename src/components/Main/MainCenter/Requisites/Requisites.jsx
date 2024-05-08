import React, { useEffect, useState } from 'react';
import c from './Requisites.module.css';
import raif from '../../../../images/raif.svg';
import privat from '../../../../images/privat.svg';
import mono from '../../../../images/mono.svg';
import copy from '../../../../images/copy.svg';
import { getBank } from '../../../../functions/getBank';

export const Requisites = () => {

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    const [choosenCard, setchoosenCard] = useState('');
    const [reqi, setReqi] = useState([]);
    const [copyState, setCopyState] = useState(false);
    const [copyState2, setCopyState2] = useState(false);

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    }

    useEffect(() => {
        (async function fetchData() {
            try {
                const response = await getBank(PATH, TOKEN, AUTH);
                const data = await response.json();
                setReqi(data);
            }
            catch (error) {
                console.log('Network error: ', error)
            }
        })();
    }, [TOKEN, AUTH, PATH])

    return (
        <div className={c.cont}>
            {choosenCard === '' ?
                <div className={c.flex}>
                    {reqi.map((item) => {
                        return <img key={item.id} onClick={() => setchoosenCard(item)} className={c.bankLogo} alt='mono' src={item.paymentProcessorCode === "MONOBANK" ? mono : item.paymentProcessorCode === "PRIVATBANK" ? privat : raif}></img>
                    })}
                </div>
                : <div className={c.flexAnother}>
                    <div className={c.cardCont}>
                        <div className={c.card}>
                            <div className={c.up}>
                                <img className={c.bankLogoMini} alt='mono' src={choosenCard.paymentProcessorCode === "MONOBANK" ? mono : choosenCard.paymentProcessorCode === "PRIVATBANK" ? privat : raif}></img>
                                <div className={c.flexColumn}>
                                    <div className={c.bold + ' ' + c.flexCopy}>{choosenCard.accountNumber}{copyState ? <div className={c.copyMess}>Скопійовано!</div> : <img className={c.copy} alt='copy' src={copy} onClick={() => { copyText(choosenCard.accountNumber); setCopyState(true); setTimeout(() => { setCopyState(false) }, 2000) }}></img>}</div>
                                    <div className={c.bold}>Cума: 0 &#8372;</div>
                                </div>
                            </div>
                            <div className={c.down}>
                                <div className={c.bold}>Отримувач: {choosenCard.recipient}</div>
                                <div className={c.bold + ' ' + c.flexCopy}>Призначення: {copyState2 ? <div className={c.copyMess}>Скопійовано!</div> : <img className={c.copy} alt='copy' src={copy} onClick={() => { copyText('Я СКОПІЮВАВ'); setCopyState2(true); setTimeout(() => { setCopyState2(false) }, 2000) }}></img>}</div>
                            </div>
                        </div>
                    </div>
                    <div className={c.cards}>
                        {reqi.map((item) => {
                            if (item.id !== choosenCard.id) {
                                return <img key={item.id} onClick={() => setchoosenCard(item)} className={c.bankLogoMini} alt='mono' src={item.paymentProcessorCode === "MONOBANK" ? mono : item.paymentProcessorCode === "PRIVATBANK" ? privat : raif}></img>
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>}
        </div>
    )
}
