import React from "react";
import { BotaoVoltar, ContainerArea, Titulo } from './style';
import { useNavigation } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/Feather';

export default function HeaderAuth({titulo}){

    const navigate = useNavigation();

    return(
        <ContainerArea>
            <BotaoVoltar onPress={ () => navigate.goBack()}>
                <Icon
                    name="arrow-left"
                    size={28}
                    color="#FFF"
                />
            </BotaoVoltar>
            <Titulo>{titulo}</Titulo>
        </ContainerArea>
    );
}