import styled from 'styled-components';
// import { useState, useEffect } from 'react';
import Vector from '../../../assets/images/vector.png';

export default function Markdown() {
    return (
        <Check >
            <img src={Vector} alt="vector" />
        </Check >
    )
}
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