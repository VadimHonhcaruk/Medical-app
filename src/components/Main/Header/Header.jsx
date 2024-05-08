import React from 'react';
import c from './Header.module.css';
import { Navigation } from './Navigation';
import { EventTitle } from './EventTitle';

export const Header = ({ studentData, setStudents, students, theme, setIsOpen, handleLightThemeClick }) => {
    return (
        <div className={c.header}>
            <Navigation studentData={studentData} setStudents={setStudents} students={students} theme={theme} setIsOpen={setIsOpen} />
            <EventTitle theme={theme} handleLightThemeClick={handleLightThemeClick} />
        </div>
    )
}
