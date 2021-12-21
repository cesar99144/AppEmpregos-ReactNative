import React from "react";
import {ScrollView} from "react-native";
import {Container, AreaTextos, TextInfo} from "./style";
import { useNavigation } from "@react-navigation/native";
import {Titulo, SubTitulo, ContainerForm, AreaDados, Label, Input, BotaoCadastrar, TextoBotao, AreaInfoConta, BotaoLogin, TextoBotaoLogin} from  "../cadastro/style";

import HeaderDashboard from "../../components/headerDashboard";

export default function ConcluirCadastro(){

    return(
        <Container>
            <HeaderDashboard titulo="Completar cadastro" />

            <AreaTextos>
                <TextInfo>Todos os campos são necessários</TextInfo>
            </AreaTextos>

            <ScrollView showsVerticalScrollIndicator={false}>
                <ContainerForm>
                    
                    <AreaDados>
                        <Label>Cidade</Label>
                        <Input />
                    </AreaDados>
                    <AreaDados>
                        <Label>Estado</Label>
                        <Input/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Celular</Label>
                        <Input/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Formação</Label>
                        <Input/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Ultima experiência</Label>
                        <Input/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Área pretendida</Label>
                        <Input/>
                    </AreaDados>
                    <AreaDados>
                        <Label>Faixa salarial pretendida</Label>
                        <Input/>
                    </AreaDados>
                    <AreaDados>
                        <BotaoCadastrar>
                            <TextoBotao>Criar conta</TextoBotao>
                        </BotaoCadastrar>
                    </AreaDados>
                    
                </ContainerForm>
            </ScrollView>
        </Container>
    );
}