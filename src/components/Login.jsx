import Logo from '../assets/images/logo.png';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import ConfigContext from '../context/ConfigContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setToken, setImageProfile } = useContext(ConfigContext);


    function logar() {
        const form = {
            email: email,
            password: password
        }
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', form);
        promisse.then(resposta => {
            console.log(resposta);
            setToken(resposta.data.token);
            setImageProfile(resposta.data.image);
            localStorage.setItem("token", resposta.data.token);
            localStorage.setItem("image", resposta.data.image);
            navigate('/hoje');
        });
        promisse.catch(resposta => alert('POR FAVOR PREENCHA OS DADOS CORRETAMENTE'));
    }

    return (
        <Align>
            <div>
                <section><img src={Logo} alt="logo-trackit" /></section>
                <input placeholder='  email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder='  senha' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={logar}>Entrar</button>
                <Link to='/cadastro'><p>Não tem uma conta? Cadastre-se</p></Link>
            </div>
        </Align>
    )
}

const Align = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    img{
        width: 180px;
        padding: 0 0 45px 0;
    }
    input{
        display: block;
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #DBDBDB;
        margin-bottom: 6px;
        font-size: 19.976px;
        line-height: 25px;
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        color: #FFFFFF;
        border: none;
        font-size: 20.976px;
        line-height: 26px;
    }
    p{
        margin-top: 25px;
        font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    }
    section{
        display: flex;
        justify-content: center;
    }

`;

