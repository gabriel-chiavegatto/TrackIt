import styled from 'styled-components';

export default function DadosDohabito(){
    return (
        <Dados>
            <h3>Tal hábito aqui</h3>
            <p>Sequencia: xx</p>
            <p>Recorde: xx</p>
        </Dados>
    )
}
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