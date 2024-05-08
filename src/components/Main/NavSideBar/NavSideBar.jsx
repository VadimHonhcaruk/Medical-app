import React, { useEffect, useState } from 'react';
import c from './NavSideBar.module.css';
import close from '../../../images/close.svg';
import closeWhite from '../../../images/closeWhite.svg';
import { NavOption } from './NavOption/NavOption';
import dollar from '../../../images/dollars.svg';
import document from '../../../images/document.svg';
import contact from '../../../images/contact.svg';
import check from '../../../images/check.svg';
import exit from '../../../images/exit.svg';
import { useLocation } from 'react-router-dom';
import CustomizedSwitches from '../Header/Switcher/Switcher';
import { useMediaQuery } from 'react-responsive';

export const NavSideBar = ({ setCurrentIdStudent, theme, isOpen, setIsOpen, handleLightThemeClick }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ maxWidth: 1024, orientation: 'portrait' });

    const [choosenPage, setchoosenPage] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const lastSegment = path.split('/').pop();
        setchoosenPage(lastSegment);
    }, [location.pathname]);

    return (
        <div className={isOpen ? c.sidemenu + ' ' + c.sidemenuOpen : c.sidemenu}>
            <div>
                <div className={c.closeCont}><span className={c.menu}>Меню</span><img onClick={() => setIsOpen(false)} className={c.icon} src={theme === 'light' ? close : closeWhite} alt='close'></img></div>
                <div className={c.menuOption}>
                    <NavOption choosenPage={choosenPage} setIsOpen={setIsOpen} src={check} text='Відвідування' link='attendance' />
                    <NavOption choosenPage={choosenPage} setIsOpen={setIsOpen} src={document} text='Документи' link='documents' />
                    <NavOption choosenPage={choosenPage} setIsOpen={setIsOpen} src={dollar} text='Реквізити' link='requisites' />
                    <NavOption choosenPage={choosenPage} setIsOpen={setIsOpen} src={contact} text='Контакти' link='contacts' />
                </div>
            </div>
            <div className={c.menuOptionDown}>
                {(isMobile || isTablet) && <div className={c.switcher}><CustomizedSwitches theme={theme} handleLightThemeClick={handleLightThemeClick} /></div>}
                <div onClick={() => { localStorage.removeItem('user_id'); setCurrentIdStudent('') }}><NavOption choosenPage={choosenPage} setIsOpen={setIsOpen} src={exit} text='Вихід' link='login' /></div>
            </div>
        </div>
    );
}
