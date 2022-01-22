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
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CardVagas({data, navigatePage}){

    const navigation = useNavigation();
    // const idVaga = data.idVaga;

    function abrirVaga(){
         const idVaga = data.idVaga;
         //navigation.navigate("StackDash", {idVaga});
    }

    return(
        <Container onPress={ () => navigatePage(data)}>
            <InfoEmpresa>
                <TituloVaga>{data.titulo}</TituloVaga>
                <NomeEmpresa></NomeEmpresa>
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