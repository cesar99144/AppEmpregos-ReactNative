import React, {useState, useEffect} from "react";
import { Platform,TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Container, AreaTextos , Titulo, SubTitulo, TextInfo, ContainerForm, AreaDados, Label, Input, BotaoCadastrar, TextoBotao, AreaInfoConta, BotaoLogin, TextoBotaoLogin } from './style';
import { useNavigation, useRoute } from "@react-navigation/native";

import HeaderAuth from "../../components/headerAuth";
import api from "../../services/api";

export default function Cadastro(){

    const navigation = useNavigation();

    const [nome, setNome] = useState("");
    const [sobreNome, setSobreNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    // async function cadastrarUsuario(){
        
    //     try{

    //         const response = await api.post('/candidatos/create', {
    //           nome: nome,
    //           sobrenome: sobreNome,
    //           email: email,
    //           senha: senha
    //       })
  
    //       if(response.data.status == 201){
  
    //             navigation.navigate("ConfirmacaoCadastro");
    //       }
  
    //       }catch(error){
    //          alert(error)
    //       }
    // }

    function cadastrar(){

        if(nome == null || sobreNome == null || email == null || senha == null){

            
            alert("Preencha todos os campos");

        }else{
            
            //alert("chamando")
           //cadastrarUsuario();
           navigation.navigate("ConcluirCadastro", {
               nomeUsuario: nome,
               sobreNomeUsuario: sobreNome,
               emailUsuario: email,
               senhaUsuario: senha
           });
        }
        //navigation.navigate("ConfirmacaoCadastro");
    }

    function login(){
        navigation.navigate("Login");
    }
    

    return(
        <TouchableWithoutFeedback>
            <Container>
                
                <HeaderAuth titulo="Cadastrar conta" />

                    <AreaTextos>
                        <Titulo>Preencha os dados e crie sua</Titulo>
                        <AreaInfoConta>
                            <SubTitulo>Conta |</SubTitulo>
                            <BotaoLogin onPress={login}>
                                <TextoBotaoLogin>J?? tenho conta</TextoBotaoLogin>
                            </BotaoLogin>
                        </AreaInfoConta> 

                        <TextInfo>Todos os campos s??o necess??rios</TextInfo>
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
                                <BotaoCadastrar onPress={cadastrar}>
                                    <TextoBotao>Pr??ximo</TextoBotao>
                                </BotaoCadastrar>
                            </AreaDados>
                            
                        </ContainerForm>
                    </ScrollView>
                

            </Container>
        </TouchableWithoutFeedback>
    );
}