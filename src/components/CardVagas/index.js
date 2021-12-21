import React from "react";
import { 
    Container, 
    InfoEmpresa, 
    NomeEmpresa,
    TituloVaga, 
    InfoGeral,
    InfoTipoContrato,
    InfoSalario,
    TextContrato
} from './style';

export default function CardVagas({data}){
    return(
        <Container>
            <InfoEmpresa>
                <TituloVaga></TituloVaga>
                <NomeEmpresa>Googl</NomeEmpresa>
            </InfoEmpresa>

            <InfoGeral>

                <InfoTipoContrato>
                    <TextContrato>Integral</TextContrato>
                    <TextContrato>CLT</TextContrato>
                </InfoTipoContrato>

                <InfoSalario>
                    <NomeEmpresa>R$ 3000</NomeEmpresa>
                </InfoSalario>
            </InfoGeral>

        </Container>
    );
}