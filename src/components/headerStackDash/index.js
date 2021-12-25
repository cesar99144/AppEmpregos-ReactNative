import React from "react";
import { useNavigation } from "@react-navigation/native";
import {ContainerArea, BotaoVoltar, Titulo} from "./style";

import Icon from 'react-native-vector-icons/Feather';

export default function HeaderStackDash(){

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
            <Titulo>Vizualizar vaga</Titulo>
        </ContainerArea>
    );
}