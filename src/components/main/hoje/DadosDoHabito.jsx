import styled from 'styled-components';
import Vector from '../../../assets/images/vector.png';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ConfigContext from '../../../context/ConfigContext';

export default function DadosDohabito(props) {

    const navigate = useNavigate();
    const { token } = useContext(ConfigContext);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const { id, name, done, currentSequence, highestSequence } = props;

    const [colorCheck, setColorCheck] = useState('#EBEBEB;');

    useEffect(() => {
        if (done == true) {
            setColorCheck("#8FC549");
        }
    }, [])

    function checkUncheck() {
        setColorCheck("#f1de6d");
        const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, token, config);
        promisse.then(res => {
            console.log("confirmado")
            setColorCheck("#8FC549")
        });
        promisse.catch(res => {
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, token, config)
                .then(res => { setColorCheck("#EBEBEB") })
                .catch(res => { window.location.reload() });
        });
    }

    return (
        <Container>
            <Dados>
                <h3>{name}</h3>
                <p>Sequencia: {currentSequence}</p>
                <p>Recorde: {highestSequence}</p>
            </Dados>
            <Check onClick={checkUncheck} colorCheck={colorCheck}>
                <img src={Vector} alt="vector" />
            </Check >
        </Container>
    )
}
const Container = styled.section`
    margin: 0 18px 10px 18px;
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
    background:  ${props => props.colorCheck} ;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    margin-right: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

