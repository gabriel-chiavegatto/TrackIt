import styled from "styled-components"

export default function ResponsiveMain(props) {
    return (
        <Conteiner>{props.children}</Conteiner>
    )
}
const Conteiner = styled.div`
`;