import Logo from '../assets/images/logo.png';
import styled from 'styled-components';

export default function Login() {
    return (
        <Align>
            <div>
                <section><img src={Logo} alt="logo-trackit" /></section>
                <input placeholder='  email' type='text' />
                <input placeholder='  senha' type='password' />
                <button>Entrar</button>
                <p>Não tem uma conta? Cadastre-se</p>
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

