import { useState } from 'react';
import styled from 'styled-components';

export default function WeekDay({ id, setDays, days, children }) {

    const [selected, setSelected] = useState(false);
    const [background, setBackground] = useState('#FFFFFF');
    const [borderColor, setBorderColor] = useState('#D5D5D5');
    const [textColor, setTextColor] = useState('#DBDBDB');

    function toggleColors() {
        if (selected) {
            setBackground('#FFFFFF');
            setBorderColor('#D5D5D5');
            setTextColor('#DBDBDB');
            setSelected(false);
            const newDays = days.filter(item=>{return(item!==id)});
            setDays(newDays);
        } else {
            setBackground('#CFCFCF');
            setBorderColor('#CFCFCF');
            setTextColor('#FFFFFF');
            setSelected(true);
            setDays([...days, id]);
        }
    }

    return (
        <Day background={background} borderColor={borderColor} textColor={textColor} onClick={toggleColors}>{children}</Day>
    )
}

const Day = styled.button`
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