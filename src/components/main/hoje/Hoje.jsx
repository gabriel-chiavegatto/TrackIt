import Footer from "../Footer";
import Header from "../Header";
import styled from 'styled-components';
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import DadosDoHabito from './DadosDoHabito';
import { useContext } from "react";
import ConfigContext from "../../../context/ConfigContext";

export default function Hoje() {

    const {token} = useContext(ConfigContext);
    console.log('token aqui = ', token);

    const day = dayjs().locale('pt-br').format('dddd, DD/MM');
    const today = dayjs().locale('pt-br').format('dddd');
    return (
        <>
            <Header />
            <Container>
                <header>
                    <h1>{day}</h1>
                    <h2>xxx habitos concluídos</h2>
                </header>
                <section>
                    <DadosDoHabito token={token} />
                    
                </section>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.main`
    width: 100%;
    padding: 98px 0 101px 0;
    header{
        padding: 0 0 28px 18px;
        h1{
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }
        h2{
            font-size: 17.976px;
            line-height: 22px;
            color: #BABABA;
        }
    }    
`;