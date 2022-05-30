import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Habitos from './main/habitos/Habitos';
import Hoje from './main/hoje/Hoje';
import Historico from './main/Historico';
import { useState } from 'react';
import ConfigContext from '../context/ConfigContext';


export default function App() {
    const [token, setToken] = useState('');
    
    return (
        <ConfigContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login setToken={setToken} />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/habitos' element={<Habitos />} />
                    <Route path='/hoje' element={<Hoje />} />
                    <Route path='/historico' element={<Historico/>} />
                </Routes>
            </BrowserRouter>
        </ConfigContext.Provider>
    )
}