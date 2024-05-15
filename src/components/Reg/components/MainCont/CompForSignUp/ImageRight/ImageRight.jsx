import React from 'react';
import student from '../../../../../../images/profilePro.svg';
import c from './ImageRight.module.css';

export const ImageRight = () => {
    return (
        <div className={c.contImage}><img alt="who am i?" src={student} className={c.image}></img></div>

    )
}
