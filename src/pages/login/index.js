import React from "react";
import {ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AreaDadosLogin, BotaoLogin } from './style';
import {
    Container, 
    AreaTextos, 
    Titulo, 
    SubTitulo, 
    TextInfo, 
    ContainerForm,
    AreaDados,
    Input,
    Label,
    TextoBotao,
} from './../cadastro/style';

import HeaderAuth from "../../components/headerAuth";

export default function Login(){

    const navigation = useNavigation();

    function login(){

        navigation.navigate("DrawerRoutes");
    }

    return(
        <Container>
            <HeaderAuth titulo="Login"/>

            <AreaTextos>
                <Titulo>Faça login em sua</Titulo>
                <SubTitulo>Conta</SubTitulo>
                <TextInfo>Todos os campos são necessários</TextInfo>
            </AreaTextos>

            <ScrollView>
                <ContainerForm>

                    <AreaDadosLogin>
                        <Label>Email</Label>
                        <Input placeholder="exemplo@email.com"/>
                    </AreaDadosLogin>
                    
                    <AreaDadosLogin>
                        <Label>Senha</Label>
                        <Input placeholder="Digite sua senha"/>
                    </AreaDadosLogin>

                    <AreaDadosLogin>
                        <BotaoLogin onPress={login}>
                            <TextoBotao>Login</TextoBotao>
                        </BotaoLogin>
                    </AreaDadosLogin>

                </ContainerForm>
            </ScrollView>
        </Container>
        
    );
}