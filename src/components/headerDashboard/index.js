import React from "react";
import { Container, FiltroBotao, MenuBotao, Titulo } from './style';
import { useNavigation } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/Feather';

export default function HeaderDashboard({titulo}){

    const navigation = useNavigation();

    function navegarCandidaturas(){

        navigation.navigate("Candidaturas");
    }

    return(
        <Container>
            <MenuBotao>
                <Icon name="menu" size={36} color="#FFF"/>
            </MenuBotao>

            <Titulo>{titulo}</Titulo>

            <FiltroBotao onPress={navegarCandidaturas}>
                <Icon name="heart" size={36} color="#FFF" />
            </FiltroBotao>
        </Container>
    );
}