import Footer from "../Footer";
import Header from "../Header";
import styled from 'styled-components';
import Vector from '../../../assets/images/vector.png';

export default function Hoje() {
    return (
        <>
            <Header />
            <Container>
                <header>
                    <h1>weekday, dia/mes</h1>
                    <h2>xxx habitos concluídos</h2>
                </header>
                <section>
                    <DadosDoHabito>
                        <h3>Tal hábito aqui</h3>
                        <p>Sequencia: xx</p>
                        <p>Recorde: xx</p>
                    </DadosDoHabito>
                    <Check><img src={Vector} alt="vector" /></Check>
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
const DadosDoHabito = styled.div`
    margin-left: 15px;
    h3{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    p{
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`;
const Check = styled.div`
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    margin-right: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;