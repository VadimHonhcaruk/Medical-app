import React from 'react';
import c from './Header.module.css';
import burgerWhite from '../../../images/burgerWhite.svg';
import burgerBlack from '../../../images/burgerBlack.svg';
import profile from '../../../images/profile.svg';
import health from '../../../images/health.svg';
import { useNavigate } from 'react-router-dom';

export const Navigation = ({ theme, setIsOpen }) => {

    const navigate = useNavigate();

    return (
        <div className={c.nav}>
            <div className={c.burgDrop}>
                <img className={c.burg} src={theme === 'light' ? burgerBlack : burgerWhite} alt='menu' onClick={() => setIsOpen(true)}></img>
                <div className={c.bordbox}>
                    <div className={c.dropdown + ' ' + c.padd} >
                        <img alt='healthIcon' src={health} className={c.healthIcon}></img>
                        Health
                    </div>
                </div>
            </div>
            <div className={c.iconsCont}>
                <div className={c.profileCont}>
                    <img className={c.icon} alt='profile' src={profile} onClick={() => navigate('/profile')}></img>
                </div>
            </div>
        </div>
    )
}
