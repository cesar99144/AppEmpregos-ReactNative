import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const AreaTextos = styled.View`
    width: 100%;
    margin-top: 5%;
    padding: 8px 17px;
`;

export const Titulo = styled.Text`
    font-size: 25px;
    color: #393939;
`;

export const SubTitulo = styled.Text`
    font-size: 43px;
    color: #393939;
    font-weight: bold;
`;

export const TextInfo = styled.Text`
    font-size: 20px;
    color: #909090;
    margin-top: 8%;
    font-weight: bold;
`;

export const AreaPesquisa = styled.View`
    width: 100%;
    padding: 8px 17px;
    flex-direction: row;
    margin-top: 20px;
`;

export const Input = styled.TextInput`
    background-color: #EEEEEE;
    width: 80%;
    height: 53px;
    font-size: 20px;
    padding: 10px;
`;

export const BotaoPesquisar = styled.TouchableOpacity`
    background-color: #1C58F2;
    height: 52px;
    padding: 10px;
    width: 15%;
`;

export const AreaVagas = styled.View`
    width: 100%;
    padding: 8px 17px;
    margin-top: 3%;
`;

export const TopoVagas = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const BotaoVizualizarTodasVagas = styled.TouchableOpacity`
    margin-top: 3%;
`;

export const TextoBotaoVaga = styled.Text`
    font-size: 20px;
    color: #393939;
    font-weight: bold;
`;

export const Titulovagas = styled.Text`
    font-size: 20px;
    color: #909090;
    margin-top: 3%;
    font-weight: bold;
`;

export const ListVagas = styled.FlatList`
    
`;