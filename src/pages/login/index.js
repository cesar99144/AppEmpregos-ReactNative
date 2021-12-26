import React, {useState, useContext} from "react";
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
import { AuthContext } from "../../contexts/auth";

import HeaderAuth from "../../components/headerAuth";
import api from "../../services/api";

export default function Login(){

    const navigation = useNavigation();

    const [emailUser, setEmail] = useState(null);
    const [senhaUser, setSenha] = useState(null);

    const {user, loginCandidato} = useContext(AuthContext);

    async function login(){

        const logou = loginCandidato(emailUser, senhaUser);

        if(logou){

            const idUser = user.iduser;

            navigation.navigate('DrawerRoutes');

        }else{

            alert("erro");
        }

    }

    function analisarDados(){

        if(emailUser == null || senhaUser == null){

            alert("Preencha os dados")
        
        }else{
            
            login();
        }
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
                        <Input placeholder="exemplo@email.com" onChangeText={ (text) => setEmail(text)}/>
                    </AreaDadosLogin>
                    
                    <AreaDadosLogin>
                        <Label>Senha</Label>
                        <Input placeholder="Digite sua senha" onChangeText={ (text) => setSenha(text)}/>
                    </AreaDadosLogin>

                    <AreaDadosLogin>
                        <BotaoLogin onPress={analisarDados}>
                            <TextoBotao>Login</TextoBotao>
                        </BotaoLogin>
                    </AreaDadosLogin>

                </ContainerForm>
            </ScrollView>
        </Container>
        
    );
}