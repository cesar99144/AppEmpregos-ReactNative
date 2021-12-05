import React from "react";
import { AreaBotao, AreaImagem, AreaTexto, BotaoLogin, Container, Descricao, Imagem, TextoBotao, Titulo } from './style';
import { useNavigation } from "@react-navigation/native";

import HeaderAuth from "../../components/headerAuth";

export default function ConfirmacaoCadastro(){

    const navigation = useNavigation();

    function login(){
        navigation.navigate("Login");
    }

    return(
        <Container>

            <HeaderAuth titulo="Confirmação cadastro" />

            <AreaImagem>
                <Imagem
                    resizeMode="contain"
                    source={require('../../../assets/handshake.png')}
                />
            </AreaImagem>

            <AreaTexto>
                <Titulo>Obrigado!</Titulo>
                <Descricao>
                    Sua conta foi criada com sucesso. Realize login para dar início
                </Descricao>
            </AreaTexto>

            <AreaBotao>
                <BotaoLogin onPress={login}>
                    <TextoBotao>Login</TextoBotao>
                </BotaoLogin>
            </AreaBotao>
        </Container>
    );
}