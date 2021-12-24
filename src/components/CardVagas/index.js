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
                <TituloVaga>{data.titulo}</TituloVaga>
                <NomeEmpresa>Googl</NomeEmpresa>
            </InfoEmpresa>

            <InfoGeral>

                <InfoTipoContrato>
                    <TextContrato>{data.tipoPresenca}</TextContrato>
                    <TextContrato>{data.RegimeContratacao}</TextContrato>
                </InfoTipoContrato>

                <InfoSalario>
                    <NomeEmpresa>R$ {data.faixaSalarial}</NomeEmpresa>
                </InfoSalario>
            </InfoGeral>

        </Container>
    );
}