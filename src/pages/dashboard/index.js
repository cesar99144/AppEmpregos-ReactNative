import React from "react";
import { 
    Container,
    AreaTextos, 
    Titulo,
    SubTitulo,
    TextInfo
} from './style';

import HeaderDashboard from "../../components/headerDashboard";

export default function Dashboard(){
    return(
        <Container>
            <HeaderDashboard />
            
            <AreaTextos>
                <Titulo>Olá, bem vindo(a) de volta</Titulo>
                <SubTitulo>César</SubTitulo>
                <TextInfo>O que você gostaria de fazer?</TextInfo>
            </AreaTextos>
        </Container>
    );
}