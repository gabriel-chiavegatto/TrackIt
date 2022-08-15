import Footer from "../Footer";
import Header from "../Header";
import styled from 'styled-components';
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
import DadosDoHabito from './DadosDoHabito';
import { useContext, useEffect, useState } from "react";
import ConfigContext from "../../../context/ConfigContext";
import axios from "axios";
import Loading from '../../Loading';
import ResponsiveMain from "../ResponsiveMain.jsx";

export default function Hoje() {
    const navigate = useNavigate();
    const day = dayjs().locale('pt-br').format('dddd, DD/MM');
    const [tarefas, setTarefas] = useState(false);
    const { token, imageProfile } = useContext(ConfigContext);
    // console.log('token aqui = ', token);
    const [habitosConcluidos, setMsgConcluidos] = useState(false);
    const [toRefreshPage, setRefreshPage] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promise.then(resposta => {
            setTarefas(resposta.data);
            // console.log(resposta.data);
            habitosPorCento(resposta.data);
        });
        promise.catch(erro => {
            alert('Por favor faça login novamente');
            console.log('API ERROR: ',erro);
            navigate("/")
        });

    }, [toRefreshPage]);
    // console.log(tarefas);

    function habitosPorCento(lst){
        if(lst.length === 0){
            setMsgConcluidos("Como assim você não tem nenhum hábito hoje?")
            return habitosConcluidos;
        }
        const feitos = lst.filter(item=>{return item.done});
        const porCento = (feitos.length/lst.length)*100;
        // const porCento = lst.length;
        setMsgConcluidos(`${porCento}% de hábitos concluídos`);
        return habitosConcluidos;
    }
    function refreshPage(){
        if(toRefreshPage){
            setRefreshPage(false)
        }else{
            setRefreshPage(true)
        }
    }

    return (
        <>
            <Header foto={imageProfile} />
            <Container>
                <ResponsiveMain>
                    <header>
                        <h1>{day}</h1>
                       {(habitosConcluidos)?
                        <h2>{habitosConcluidos}</h2>
                        :  <h2>Carregando...</h2>}
                    </header>
                    {(tarefas !== false) ?
                        (tarefas.map(tarefa => {
                            return (<DadosDoHabito key={tarefa.id} id={tarefa.id} name={tarefa.name} done={tarefa.done} currentSequence={tarefa.currentSequence} highestSequence={tarefa.highestSequence} refreshPage={refreshPage}/>)
                        }))
                        : <Loading />
                    }
                </ResponsiveMain>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.main`
    width: 100%;
    padding: 98px 18px 101px 18px;
    display: flex;
    justify-content: center;
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