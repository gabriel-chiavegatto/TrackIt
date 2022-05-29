import styled from 'styled-components';
import DetalheButton from '../../assets/images/detalhe-button.png';
export default function Footer() {
    return (
        <Nav>
            <p>Hábitos</p>
            <ButtonHoje>
                <article>
                    <p>Hoje</p>
                    <img src={DetalheButton} alt="." />
                </article>
            </ButtonHoje>
            <p>Histórico</p>
        </Nav>
    )
}
const Nav = styled.footer`
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    p{
        width: 33%;
        font-size: 17.976px;
        line-height: 22px;
        color: #52B6FF;
    }
`;
const ButtonHoje = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    article{
        width: 91px;
        height: 91px;
        background: #52B6FF;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 30px;
        position: relative;
        img{
            position: absolute;
            width: 70px;
            height: 79px;
            bottom: 6px;
            right: 6px;
        }
    }
    p{
        width: 100%;
        color: #FFFFFF;
        text-align: center;
    }
`;