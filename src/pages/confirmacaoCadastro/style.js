import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const AreaImagem = styled.View`

    width: 70%;
    align-items: center;
    margin-top: 20%;
    height: 35%;
`;

export const Imagem = styled.Image`
    width: 80%;
    height: 80%;
`;

export const AreaTexto = styled.View`

    width: 70%;
    align-items: center;
    
    height: 20%;
`;

export const Titulo = styled.Text`
    font-size: 30px;
    color: #4A9928;
    font-weight: bold;
`;

export const Descricao = styled.Text`
    font-size: 18px;
    color: #909090;
    margin-top: 5%;
    font-weight: bold;
`;

export const AreaBotao = styled.View`

    width: 70%;
    align-items: center;
    height: 40%;
`;

export const BotaoLogin = styled.TouchableOpacity`
    background-color: #393939;
    align-items: center;
    padding: 10px;
    border-radius: 50px;
    width: 100%;
    height: 58px;
    align-items: center;
`;

export const TextoBotao = styled.Text`
    font-size: 20px;
    color: white;
    font-weight: bold;
`;