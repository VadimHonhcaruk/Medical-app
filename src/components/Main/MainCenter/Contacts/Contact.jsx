import React from 'react';
import c from './Contacts.module.css';
import { Link } from 'react-router-dom';

export const Contact = ({ src, text, hyper }) => {
    return (
        <Link className={c.link} to={hyper} target="_blank" rel="noopener noreferrer"><img className={c.icon} src={src} alt={text}></img>  {text}</Link>
    )
}
