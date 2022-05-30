import styled from 'styled-components';
import Vector from '../../../assets/images/vector.png';
import {useState , useEffect} from 'react';
import axios from 'axios';

export default function DadosDohabito(props) {

    const {id, name, done,currentSequence, highestSequence} = props
    return (
        <Container>
            <Dados>
                <h3>{name}</h3>
                <p>Sequencia: {currentSequence}</p>
                <p>Recorde: {highestSequence}</p>
            </Dados>
            <Check >
                <img src={Vector} alt="vector" />
            </Check >
        </Container>
    )
}
const Container = styled.section`
    margin: 0 0 10px 18px;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Dados = styled.div`
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

