import React, {useState} from "react";
import { Platform,TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Container, AreaTextos , Titulo, SubTitulo, TextInfo, ContainerForm, AreaDados, Label, Input, BotaoCadastrar, TextoBotao } from './style';
import { useNavigation } from "@react-navigation/native";

import HeaderAuth from "../../components/headerAuth";
import api from "../../services/api";

export default function Cadastro(){

    const navigation = useNavigation();

    const [nome, setNome] = useState(null);
    const [sobreNome, setSobreNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    async function cadastrarUsuario(){
        try{
            const response = await api.post('/candidatos/create', {
                'nome': nome,
                'sobrenome': sobreNome,
                'email': email,
                'senha': senha
            })

            //console.log(response);
            alert("Sucesso")
        }catch{
            alert("Falha ao tentar cadastrar")
        }
    }

    // const cadastrarUsuario = async (event) => {
    //     const response = await api.post('/candidatos/create', {
    //         'nome': nome,
    //         'sobreNome': sobreNome,
    //         'email': email,
    //         'senha': senha,
    //     });

    //     console.log(response);
    // };

    function cadastrar(){

        if(nome == null || sobreNome == null || email == null || senha == null){

            
            alert("Preencha todos os campos");

        }else{
            
            alert("chamando")
           cadastrarUsuario();
           
        }
        //navigation.navigate("ConfirmacaoCadastro");
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
                                <Input onChangeText={ (text) => setNome(text)} />
                            </AreaDados>
                            <AreaDados>
                                <Label>Sobrenome</Label>
                                <Input onChangeText={ (text) => setSobreNome(text)}/>
                            </AreaDados>
                            <AreaDados>
                                <Label>Email</Label>
                                <Input onChangeText={ (text) => setEmail(text)}/>
                            </AreaDados>
                            <AreaDados>
                                <Label>Senha</Label>
                                <Input onChangeText={ (text) => setSenha(text)}/>
                            </AreaDados>
                            <AreaDados>
                                <BotaoCadastrar onPress={cadastrarUsuario}>
                                    <TextoBotao>Criar conta</TextoBotao>
                                </BotaoCadastrar>
                            </AreaDados>
                            
                        </ContainerForm>
                    </ScrollView>
                

            </Container>
        </TouchableWithoutFeedback>
    );
}