import styled from 'styled-components';
import Lixeirinha from '../../../assets/images/lixeira.png';
import Week from './Week';

export default function SeuHabito({ name, days, id }) {
    const week = [0, 1, 2, 3, 4, 5, 6];
    return (
        <Habito>
            <div>
                <h2>{name}</h2>
                <img src={Lixeirinha} alt="Lixeira" />
            </div>
            <article>
                {week.map((item, index) => {
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
