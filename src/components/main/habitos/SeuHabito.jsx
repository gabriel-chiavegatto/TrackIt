import styled from 'styled-components';
import Lixeirinha from '../../../assets/images/lixeira.png';
import WeekDay from './WeekDay';

export default function SeuHabito() {
    return (
        <Habito>
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
        </Habito>
    )
}

const Habito = styled.section`
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
const Day = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    margin: 8px 4px 0 0;        
    border: 1px solid ${props => props.borderColor};
    background:  ${props => props.background};
    color: ${props => props.textColor};
`;