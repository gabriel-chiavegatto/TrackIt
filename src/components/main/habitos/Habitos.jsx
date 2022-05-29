import Header from "../Header";
import Footer from '../Footer';
import styled from 'styled-components';
import Lixeirinha from '../../../assets/images/lixeira.png';
import {useState, useEffect} from 'react';

export default function Habitos({token}) {
    return (
        <>
            <Header />
            <Container>
                <header>
                    <h1>Meus hábitos</h1>
                    <Add><p>+</p></Add>
                </header>

                <NovoHabito>
                    <input type='text' placeholder="  nome do hábito" />
                    <WeekDay>D</WeekDay>
                    <WeekDay>S</WeekDay>
                    <WeekDay>T</WeekDay>
                    <WeekDay>Q</WeekDay>
                    <WeekDay>Q</WeekDay>
                    <WeekDay>S</WeekDay>
                    <WeekDay>S</WeekDay>
                    <div>
                        <Cancelar>Cancelar</Cancelar>
                        <Salvar>Salvar</Salvar>
                    </div>
                </NovoHabito>

                <SeuHabito>
                    <div>
                        <h2>Hábito aqui</h2>
                        <img src={Lixeirinha} alt="Lixeira" />
                    </div>
                    <WeekDay>D</WeekDay>
                    <WeekDay>S</WeekDay>
                    <WeekDay>T</WeekDay>
                    <WeekDay>Q</WeekDay>
                    <WeekDay>Q</WeekDay>
                    <WeekDay>S</WeekDay>
                    <WeekDay>S</WeekDay>
                </SeuHabito>

                <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.main`
    width: 100%;
    padding: 98px 0 101px 0;
    
    header{
        display: flex;
        justify-content: space-between;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        padding: 0 18px 20px 18px;
    }
    h3{
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        padding: 8px 18px 0 18px;
    }
    section{
        background: #FFFFFF;
        border-radius: 5px;
        width: 340px;
        margin-left: 18px;
        margin-bottom: 10px;
        padding: 18px 18px 15px 19px;

        input{
            display: block;
            width: 303px;
            height: 45px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }
`;
const Add = styled.div`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    p{
        color: #FFFFFF;
        font-size: 26.976px;
        line-height: 34px;
        padding-bottom: 6px;
    }
`;
const WeekDay = styled.button`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    margin: 8px 4px 0 0;        
`;
const NovoHabito = styled.section`
    div{
        display: flex;
        justify-content: end;
        align-items: center;
        padding-top: 29px;
    }
`;
const SeuHabito = styled.section`
    h2{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const Cancelar = styled.p`
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    padding-right: 23px;
    :hover{
        cursor: pointer;
    }
`;
const Salvar = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
`;