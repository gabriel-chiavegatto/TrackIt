import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';
import ResponsiveMain from "./ResponsiveMain.jsx";
import ConfigContext from "../../context/ConfigContext.js";
import {useContext} from "react";

export default function Historico() {
    const { token, imageProfile } = useContext(ConfigContext);
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return (
        <>
            <Header foto={imageProfile}/>
            <Container>
                <ResponsiveMain>
                    <header>Histórico</header>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </ResponsiveMain>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.main`

    width: 100%;
    padding: 98px 0 101px 0;
    display: flex;
    justify-content: center;

    header{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        padding: 0 0 18px 18px;
    }
    p{
        padding-left: 18px;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;