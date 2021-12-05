import React from "react";
import { Container, FiltroBotao, MenuBotao, Titulo } from './style';
import { useNavigation } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/Feather';

export default function HeaderDashboard(){
    return(
        <Container>
            <MenuBotao>
                <Icon name="menu" size={36} color="#FFF"/>
            </MenuBotao>

            <Titulo>Home</Titulo>

            <FiltroBotao>
                <Icon name="filter" size={36} color="#FFF" />
            </FiltroBotao>
        </Container>
    );
}