import Header from "../Header";
import Footer from '../Footer';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from "axios";
import NovoHabito from "./NovoHabito";
import SeuHabito from "./SeuHabito";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ConfigContext from "../../../context/ConfigContext";

export default function Habitos(props) {

    const { token, imageProfile } = useContext(ConfigContext);
    console.log(token);

    const navigate = useNavigate();
    const [seusHabitos, setSeusHabitos] = useState('');
    const [addHabito, setAddHabito] = useState(false);
    function toggleAdd() {
        if (addHabito) { setAddHabito(false) }
        else { setAddHabito(true) }
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then(resposta => {
            console.log(resposta);
            setSeusHabitos(resposta.data);
            console.log(seusHabitos);
        });
        promise.catch(resposta => {
            alert('Por favor faça login novamente');
            navigate("/")
        });
    }, []);

    return (
        <>
            <Header foto={imageProfile}/>
            <Container>
                <header>
                    <h1>Meus hábitos</h1>
                    <Add onClick={toggleAdd}><p>+</p></Add>
                </header>
                {(addHabito) ? (<NovoHabito toggleAdd={toggleAdd} token={token} setSeusHabitos={setSeusHabitos} />) : <></>}

                {(seusHabitos.length > 0) ?
                    seusHabitos.map((item) => {
                        return (<SeuHabito token={token} setSeusHabitos={setSeusHabitos} name={item.name} days={item.days} id={item.id} key={item.id} />)
                    }) :
                    <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
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