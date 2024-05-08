import React, { useEffect, useState } from 'react';
import c from './Main.module.css';
import { Header } from './Header/Header';
import { MainCenter } from './MainCenter/MainCenter';
import { NavSideBar } from './NavSideBar/NavSideBar';
import { useNavigate } from 'react-router-dom';

export const Main = ({ setCurrentIdStudent, studentData, setStudents, students, currentIdStudent, social, phoneSoc, address, theme, handleLightThemeClick }) => {


    const navigate = useNavigate();

    useEffect(() => {
        if (!currentIdStudent) {
            navigate('/login');
        }
    }, [currentIdStudent, navigate])

    const [isOpen, setIsOpen] = useState(false);

    return (
        studentData &&
        <div className={c.main}>
            <NavSideBar setCurrentIdStudent={setCurrentIdStudent} theme={theme} isOpen={isOpen} setIsOpen={setIsOpen} handleLightThemeClick={handleLightThemeClick} />
            <Header studentData={studentData} setStudents={setStudents} students={students} theme={theme} setIsOpen={setIsOpen} handleLightThemeClick={handleLightThemeClick} />
            <MainCenter studentData={studentData} currentIdStudent={currentIdStudent} social={social} phoneSoc={phoneSoc} address={address} theme={theme} />
        </div>

    )
}
