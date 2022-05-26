import Logo from '../assets/images/logo.png';
import styled from 'styled-components';

export default function Login() {
    return (
        <Align>
            <div>
                <Align><img src={Logo} alt="logo-trackit" /></Align>
                <input placeholder='email' type='text' />
                <input placeholder='senha' type='password' />
                <button>Entrar</button>
                <p>Não tem uma conta? Cadastre-se</p>
            </div>
        </Align>
    )
}

const Align = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    img{
        width: 180px;
    }
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #DBDBDB;
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        color: #FFFFFF;
    }

`;

