import React from "react";
import { Platform,TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Container, AreaTextos , Titulo, SubTitulo, TextInfo, ContainerForm, AreaDados, Label, Input, BotaoCadastrar, TextoBotao } from './style';
import { useNavigation } from "@react-navigation/native";

import HeaderAuth from "../../components/headerAuth";

export default function Cadastro(){

    const navigation = useNavigation();

    function cadastrar(){

        navigation.navigate("ConfirmacaoCadastro");
    }
    

    return(
        <TouchableWithoutFeedback>
            <Container>
                
                <HeaderAuth titulo="Cadastrar conta" />

                    <AreaTextos>
                        <Titulo>Preencha os dados e crie sua</Titulo>
                        <SubTitulo>Conta</SubTitulo>
                        <TextInfo>Todos os campos são necessários</TextInfo>
                    </AreaTextos>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ContainerForm>
                            
                            <AreaDados>
                                <Label>Nome</Label>
                                <Input />
                            </AreaDados>
                            <AreaDados>
                                <Label>Sobrenome</Label>
                                <Input />
                            </AreaDados>
                            <AreaDados>
                                <Label>Email</Label>
                                <Input />
                            </AreaDados>
                            <AreaDados>
                                <Label>Senha</Label>
                                <Input />
                            </AreaDados>
                            <AreaDados>
                                <BotaoCadastrar onPress={cadastrar}>
                                    <TextoBotao>Criar conta</TextoBotao>
                                </BotaoCadastrar>
                            </AreaDados>
                            
                        </ContainerForm>
                    </ScrollView>
                

            </Container>
        </TouchableWithoutFeedback>
    );
}