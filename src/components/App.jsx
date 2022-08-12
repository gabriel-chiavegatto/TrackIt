import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Habitos from './main/habitos/Habitos';
import Hoje from './main/hoje/Hoje';
import Historico from './main/Historico';
import { useState } from 'react';
import ConfigContext from '../context/ConfigContext';


export default function App() {
    const tokenLocalStorage = localStorage.getItem("token");
    const imageLocalStorage = localStorage.getItem("image");
    const [token, setToken] = useState(tokenLocalStorage);
    const [imageProfile, setImageProfile] = useState(imageLocalStorage);

    return (
        <ConfigContext.Provider value={{ token, setToken, imageProfile, setImageProfile }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/habitos' element={<Habitos />} />
                    <Route path='/hoje' element={<Hoje />} />
                    <Route path='/historico' element={<Historico />} />
                </Routes>
            </BrowserRouter>
        </ConfigContext.Provider>
    )
}