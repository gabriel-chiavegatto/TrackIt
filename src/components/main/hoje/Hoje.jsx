import Footer from "../Footer";
import Header from "../Header";
import styled from 'styled-components';

import DadosDoHabito from './DadosDoHabito';
import Markdown from './Markdown';

export default function Hoje({token}) {
    return (
        <>
            <Header />
            <Container>
                <header>
                    <h1>weekday, dia/mes</h1>
                    <h2>xxx habitos concluídos</h2>
                </header>
                <section>
                    <DadosDoHabito />
                    <Markdown />
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
    section{
        margin: 0 0 10px 18px;
        width: 340px;
        height: 94px;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }    
`;