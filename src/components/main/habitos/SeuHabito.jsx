import styled from 'styled-components';
import Lixeirinha from '../../../assets/images/lixeira.png';
import Week from './Week';
import axios from 'axios';
import { useState } from 'react';

export default function SeuHabito({ setSeusHabitos, token, name, days, id }) {
    const weekIndex = [0, 1, 2, 3, 4, 5, 6];
    const [tryDel, setTryDel] = useState(false);
    function deletarHabito() {
        console.log('clicou para deletar');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const deleted = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
        deleted.then(() => {
            const refresf = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
            refresf.then(resposta => {
                console.log(resposta);
                setSeusHabitos(resposta.data);
            });
            refresf.catch(resposta => alert('ERRO NO GET'));
        });

    }

    return (
        <Habito>
            {(tryDel) ?
                <Deletar>
                    <div><h1>Realmente deseja deletar este hábito?</h1></div>
                    <div>
                    <button onClick={()=>setTryDel(false)}>CANCELAR</button>
                        <button onClick={deletarHabito}>DELETAR</button>
                    </div>
                </Deletar> :
                <></>
            }
            <div>
                <h2>{name}</h2>
                <img src={Lixeirinha} alt="Lixeira" onClick={() => setTryDel(true)} />
            </div>
            <article>
                {weekIndex.map((item, index) => {
                    const status = days.some(day => { return (item === day) });
                    if (status) {
                        return (<Week selected={true} letter={index} key={index} />)
                    } else {
                        return (<Week selected={false} letter={index} key={index} />)
                    }
                })}
            </article>
        </Habito>
    )
}

const Habito = styled.section`
position: relative;
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
    article{
        display: flex;
    }
`;
const Deletar = styled.aside`
    position: absolute;
    left: 0;
    height: 0;
    width: 100%;
    height: 65%;
    border-radius: 5px;
    border: 1px solid red;
    z-index: 3;
    color: white;
    background-color: #dd9393;
    padding: 10px;
    h1{
        width: 100%;
    }
    button{
        display: block;
        border: 0.2px solid red;
        margin-top: 10px;
    }
`;
