import styled from "styled-components";
import { useState, useEffect } from 'react';
import WeekDay from "./WeekDay";
import axios from "axios";

export default function NovoHabito({ token, toggleAdd, setSeusHabitos}) {
    const [nomeHabito, setNomeHabito] = useState('');
    const [days, setDays] = useState([]);

    function salvarHabito() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const obj = {
            name: nomeHabito,
            days: days
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', obj, config);
        promise.then(resposta => {
            console.log(resposta);
            const refresf = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
            refresf.then(resposta => {
                console.log(resposta);
                setSeusHabitos(resposta.data);
            });
            refresf.catch(resposta => alert('ERRO NO GET'));




        });
        promise.catch(resposta => console.log(resposta));

    }

    return (
        <Habito>
            <input type='text' placeholder="  nome do hábito" value={nomeHabito} onChange={e => setNomeHabito(e.target.value)} />
            <WeekDay id={0} setDays={setDays} days={days}>D</WeekDay>
            <WeekDay id={1} setDays={setDays} days={days}>S</WeekDay>
            <WeekDay id={2} setDays={setDays} days={days}>T</WeekDay>
            <WeekDay id={3} setDays={setDays} days={days}>Q</WeekDay>
            <WeekDay id={4} setDays={setDays} days={days}>Q</WeekDay>
            <WeekDay id={5} setDays={setDays} days={days}>S</WeekDay>
            <WeekDay id={6} setDays={setDays} days={days}>S</WeekDay>
            <div>
                <Cancelar onClick={toggleAdd}>Cancelar</Cancelar>
                <Salvar onClick={salvarHabito}>Salvar</Salvar>
            </div>
        </Habito>
    )
}
const Habito = styled.section`
    div{
        display: flex;
        justify-content: end;
        align-items: center;
        padding-top: 29px;
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