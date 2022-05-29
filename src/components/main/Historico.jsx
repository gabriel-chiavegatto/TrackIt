import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';

export default function Historico() {
    return (
        <>
            <Header />
            <Container>
                <header>Histórico</header>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.main`

    width: 100%;
    padding: 98px 0 101px 0;

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