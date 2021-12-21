import React from "react";
import { AreaBotao, AreaTexto, BotaoConcluirPerfil, Container, Titulo } from "./style";
import { useNavigation } from "@react-navigation/native";

import HeaderDashboard from "../../components/headerDashboard";
import { TextoBotao } from "../cadastro/style";

export default function CompletePerfil(){
 
    const navigate = useNavigation();

    function navegarTelaCadastro(){
        navigate.navigate("ConcluirCadastro");
    }

    return(
        <Container>
            <HeaderDashboard titulo="Perfil" />

            <AreaTexto>
                <Titulo>Complete seu perfil para poder se candidatar às vagas. Com o seu perfil completo ficará mais fácil de ser encontrado por recutradores</Titulo>
                
            </AreaTexto>

            <AreaBotao>
                <BotaoConcluirPerfil onPress={navegarTelaCadastro}>
                    <TextoBotao>Completar perfil</TextoBotao>
                </BotaoConcluirPerfil>
            </AreaBotao>
        </Container>
    );
}