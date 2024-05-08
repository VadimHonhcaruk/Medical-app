import React from 'react';
import c from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={c.cont}><span className={c.error}>404 </span>&nbsp;| NOT FOUND</div>
    )
}
