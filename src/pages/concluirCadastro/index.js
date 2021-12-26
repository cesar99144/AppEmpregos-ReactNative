import React, {useState, useContext} from "react";
import {ScrollView} from "react-native";
import {Container, AreaTextos, TextInfo} from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import {Titulo, SubTitulo, ContainerForm, AreaDados, Label, Input, BotaoCadastrar, TextoBotao, AreaInfoConta, BotaoLogin, TextoBotaoLogin} from  "../cadastro/style";
import { AuthContext } from "../../contexts/auth";

import HeaderAuth from "../../components/headerAuth";
import api from "../../services/api";

export default function ConcluirCadastro(){

    // const nomeUser;
    // const sobreNomeUser;
    // const emailUser;
    // const senhaUser;
    const navigation = useNavigation();
    const route = useRoute();

    const nomeUser = route.params?.nomeUsuario;
    const sobreNomeUser = route.params?.sobreNomeUsuario;
    const emailUser = route.params?.emailUsuario;
    const senhaUser = route.params?.senhaUsuario;
    const [cidadeUser, setCidadeUser] = useState(null);
    const [estadoUser, setEstadoUser] = useState(null);
    const [celularUser, setCelularUser] = useState(null);
    const [formacaoUser, setFormacaoUser] = useState(null);
    const [experienciaUser, setExperienciaUser] = useState(null);
    const [areaPretendidaUser, setAreaPretendidaUser] = useState(null);
    const [faixaSalarialUser, setFaixaSalarialUser] = useState(null);

    const { cadastrarUsuario } = useContext(AuthContext);

    function finalizarCadastro(){
        
        const cadastro = cadastrarUsuario(nomeUser, sobreNomeUser, emailUser, senhaUser, cidadeUser, estadoUser, celularUser, formacaoUser, experienciaUser, areaPretendidaUser, faixaSalarialUser);

        if(cadastro){

            navigation.navigate("ConfirmacaoCadastro");

        }else{

            alert("Erro");
        }
    }


    function verificarDados(){

        // if(cidadeUser == null || estadoUser == null || celularUser == null || formacaoUser == null || experienciaUser == null || areaPretendidaUser == null || faixaSalarialUser == null){

        if(cidadeUser == null){

            alert("Preencha todos os campos");
        
        }else{

            finalizarCadastro();
            
        }
    }

    return(
        <Container>
            <HeaderAuth titulo="Concluir cadastro" />

            <AreaTextos>
                <TextInfo>Todos os campos são necessários</TextInfo>
            </AreaTextos>

            <ScrollView showsVerticalScrollIndicator={false}>
                <ContainerForm>
                    
                    <AreaDados>
                        <Label>Cidade</Label>
                        <Input onChangeText={ (value) => setCidadeUser(value)} />
                    </AreaDados>
                    <AreaDados>
                        <Label>Estado</Label>
                        <Input onChangeText={ (value) => setEstadoUser(value)}/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Celular</Label>
                        <Input onChangeText={ (value) => setCelularUser(value)}/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Formação</Label>
                        <Input onChangeText={ (value) => setFormacaoUser(value)}/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Ultima experiência</Label>
                        <Input onChangeText={ (value) => setExperienciaUser(value)}/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Área pretendida</Label>
                        <Input onChangeText={ (value) => setAreaPretendidaUser(value)}/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Faixa salarial pretendida</Label>
                        <Input onChangeText={ (value) => setFaixaSalarialUser(value)}/>
                    </AreaDados>
                    <AreaDados>
                        <BotaoCadastrar onPress={verificarDados}>
                            <TextoBotao>Criar conta</TextoBotao>
                        </BotaoCadastrar>
                    </AreaDados>
                    
                </ContainerForm>
            </ScrollView>
        </Container>
    );
}