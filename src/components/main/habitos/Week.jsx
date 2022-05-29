import styled from 'styled-components';

export default function Week({ selected, letter }) {

    let letra = '';

    if (letter === 0) { letra = 'D' }
    if (letter === 1 || letter === 5 || letter === 6) { letra = 'S' }
    if (letter === 2) { letra = 'T' }
    if (letter === 3 || letter === 4) { letra = 'Q' }

    let background = '#FFFFFF';
    let borderColor = '#D5D5D5';
    let textColor = '#DBDBDB';

    if (selected) {
        background = '#CFCFCF';
        borderColor = '#CFCFCF';
        textColor = '#FFFFFF';
    }
    return (
        <Day background={background} textColor={textColor} borderColor={borderColor}>{letra}</Day>
    )
}

const Day = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    margin: 8px 4px 0 0;        
    text-align: center;
    padding-left: 6px;
    padding-bottom: 3px;
    border: 1px solid ${props=>props.borderColor};
    background: ${props=>props.background};
    color: ${props=>props.textColor};
`;