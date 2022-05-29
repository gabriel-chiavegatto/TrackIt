// import styled from 'styled-components';
// import { Link, useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Habitos from './main/habitos/Habitos';
import Hoje from './main/hoje/Hoje';
import Historico from './main/Historico';
import { useState } from 'react';


export default function App() {
    const [token, setToken] = useState('');
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login setToken={setToken}/>} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/habitos' element={<Habitos token={token}/>} />
            <Route path='/hoje' element={<Hoje token={token}/>} />
            <Route path='/historico' element={<Historico token={token}/>} />
        </Routes>
        </BrowserRouter>
    )
}