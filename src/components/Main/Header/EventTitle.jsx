import React from 'react';
import c from './Header.module.css';
import profile from '../../../images/profile.svg';
import CustomizedSwitches from './Switcher/Switcher';
import { useNavigate } from 'react-router-dom';

export const EventTitle = ({ theme, handleLightThemeClick }) => {

    const navigate = useNavigate();

    return (
        <div className={c.eventTitle}>
            <CustomizedSwitches theme={theme} handleLightThemeClick={handleLightThemeClick} />
            <div className={c.profileCont}>
                <img className={c.icon} alt='profile' src={profile} onClick={() => navigate('/profile')}></img>
            </div>
        </div>
    )
}
