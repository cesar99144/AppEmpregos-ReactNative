import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    
`;

export const AreaTitulo = styled.View`
    margin-top: 30px;
    padding: 14px;
`;

export const TituloVaga = styled.Text`
    font-size: 30px;
    color: #393939;
    font-weight: bold;
`;

export const AreaDescricao = styled.View`
    padding: 20px;
    align-items: center;
`;

export const TextoDescricao = styled.Text`
    font-size: 22px;
    color: #393939;
`;

export const AreaInfo = styled.View`
    padding: 20px;
    width: 100%;
    margin-top: 5px;
`;

export const CardInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TituloCard = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #393939;
`;

export const TextoCard = styled.Text`
    font-size: 20px;
    margin-left: 10px;
`;

export const AreaBotao = styled.View`
    width: 70%;
    margin-top: 20px;
`;

export const BotaoCandidatar = styled.TouchableOpacity`
     background-color: #393939;
    align-items: center;
    padding: 10px;
    border-radius: 50px;
    width: 100%;
    height: 58px;
    align-items: center;
`;

export const TextoBotaoCandidatar = styled.Text`
    font-size: 20px;
    color: white;
    font-weight: bold;
`;