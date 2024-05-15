import { useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/Login/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { useTheme } from "./hooks/useTheme";
import { getSocial } from './functions/getSocial';
import { getPhone } from './functions/getPhone';
import { getAddress } from './functions/getAddress';
import { getStudent } from './functions/getStudent';
import { MainContent } from './components/Reg/components/MainCont/MainContent';
import { useMediaQuery } from 'react-responsive';
import { Header } from './components/Main/HeaderReg/Header';

function App() {
  const { theme, setTheme } = useTheme();
  const [social, setSocial] = useState([]);
  const [address, setAddress] = useState([]);
  const [phoneSoc, setPhoneSoc] = useState([]);
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const [studentData, setStudentData] = useState();
  // const [currentIdStudent, setCurrentIdStudent] = useState(localStorage.getItem('user_id'));
  const [currentIdStudent, setCurrentIdStudent] = useState('');
  // const [currentIdStudent, setCurrentIdStudent] = useState('6eca8aa4-cd1e-4bb1-933a-fcd1639d929d');
  const TOKEN = process.env.REACT_APP_TOKEN;
  const AUTH = process.env.REACT_APP_AUTH;
  const PATH = process.env.REACT_APP_API_PATH;
  const PATH_SEC = process.env.REACT_APP_API_PATH_SECOND;

  const handleLightThemeClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    if (currentIdStudent) {
      (async function fetchData() {
        try {
          const response = await getStudent(PATH_SEC, TOKEN, AUTH, currentIdStudent);
          const data = await response.json();
          await setStudentData(data);
        }
        catch (error) {
          console.log('Network error: ', error)
        }
      })();
    }
  }, [TOKEN, AUTH, PATH_SEC, currentIdStudent]);

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await getSocial(PATH, TOKEN, AUTH);
        const data = await response.json();
        setSocial(data);
        const response2 = await getPhone(PATH, TOKEN, AUTH);
        const data2 = await response2.json();
        setPhoneSoc(data2);
        const response3 = await getAddress(PATH, TOKEN, AUTH);
        const data3 = await response3.json();
        setAddress(data3);
      }
      catch (error) {
        console.log('Network error: ', error)
      }
    })();
  }, [TOKEN, AUTH, PATH])

  useEffect(() => {
    if (currentIdStudent) {
      navigate('/attendance');
    }
  }, [currentIdStudent])

  const [phone, setPhone] = useState('');

  return (
    <div>
      <Routes>
        {currentIdStudent && <Route path="/*" element={<Main setCurrentIdStudent={setCurrentIdStudent} studentData={studentData} setStudents={setStudents} students={students} currentIdStudent={currentIdStudent} social={social} phoneSoc={phoneSoc} address={address} theme={theme} handleLightThemeClick={handleLightThemeClick} />} />}
        <Route path="/login" element={<Login setCurrentIdStudent={setCurrentIdStudent} currentIdStudent={currentIdStudent} phone={phone} setPhone={setPhone} social={social} phoneSoc={phoneSoc} address={address} />} />
        <Route path="/registration" element={<div className="root"><div className="App"><Header /><MainContent /></div></div>} />

      </Routes>
    </div>
  );
}

export default App;
