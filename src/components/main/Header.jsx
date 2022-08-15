import styled from 'styled-components';
import Perfil from '../../assets/images/bob.png'

export default function Header(props){
    return (
        <Topo>
            <h1>TrackIt</h1>
            <img src={props.foto} alt="perfil" />
        </Topo>
    )
}
const Topo = styled.header`
    width: 100%;
    height: 70px;
    background: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;