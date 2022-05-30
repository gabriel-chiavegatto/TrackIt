import Footer from "../Footer";
import Header from "../Header";
import styled from 'styled-components';
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import DadosDoHabito from './DadosDoHabito';
import { useContext, useEffect, useState } from "react";
import ConfigContext from "../../../context/ConfigContext";
import axios from "axios";
import Loading from '../../Loading';

export default function Hoje() {

    const day = dayjs().locale('pt-br').format('dddd, DD/MM');
    const [tarefas, setTarefas] = useState(false);
    const { token } = useContext(ConfigContext);
    console.log('token aqui = ', token);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promise.then(resposta => {
            setTarefas(resposta.data);
            console.log(resposta.data);
        });
        promise.catch(erro => alert('Erro ao consultar a API', erro))
    }, []);

    console.log(tarefas);
    return (
        <>
            <Header />
            <Container>
                <header>
                    <h1>{day}</h1>
                    <h2>0 habitos concluídos</h2>
                </header>
                {(tarefas !== false) ?
                    (tarefas.map(tarefa => {
                        return (<DadosDoHabito id={tarefa.id} name={tarefa.name} done={tarefa.done} currentSequence={tarefa.currentSequence} highestSequence={tarefa.highestSequence} />)
                    }))
                    : <Loading />
                }
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