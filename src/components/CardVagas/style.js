import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    background-color: #EEEEEE;
    height: 119px;
    border-radius: 12px;
    padding: 10px 17px;
    margin-top: 5%;
`;

export const InfoEmpresa = styled.View`
    
    
`;

export const TituloVaga = styled.Text`
    font-size: 19px;
    font-weight: bold;
    color: #181A1F;
    
`;

export const NomeEmpresa = styled.Text`
    font-size: 16px;
    color: #181A1F;
    margin-top: 1%;
`;

export const InfoGeral = styled.View`
    flex-direction: row;
    margin-top: 3%;
`;

export const InfoTipoContrato = styled.View`
    width: 50%;
    flex-direction: row;
`;

export const TextContrato = styled.Text`
    background-color: #181A1F;
    color: white;
    font-size: 15px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    margin-left: 5px;
`;

export const InfoSalario = styled.View`
    width: 50%;
    align-items: flex-end;
`;