import React from 'react';
import c from './NavOption.module.css';
import { Link } from 'react-router-dom';

export const NavOption = ({ choosenPage, setIsOpen, text, src, link }) => {

    const href = `/${link}`;

    return (
        <Link to={href} className={choosenPage === link ? c.navOption + ' ' + c.navOptionChoosen : c.navOption} onClick={() => setIsOpen(false)}>
            <img className={c.optionImage} src={src} alt={text}></img>
            <span>{text}</span>
        </Link>
    )
}
