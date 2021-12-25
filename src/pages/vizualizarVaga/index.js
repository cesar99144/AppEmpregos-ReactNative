import React, {useEffect, useState} from "react";
import {AreaBotao, AreaDescricao, AreaInfo, AreaTitulo, BotaoCandidatar, CardInfo, Container, TextoBotaoCandidatar, TextoCard, TextoDescricao, TituloCard, TituloVaga} from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderStackDash from "../../components/headerStackDash";

import api from "../../services/api";

export default function VizualizarVaga({route}){

    const navigation = useNavigation();
    const {idVaga} = route.params;

    const [dadosVaga, setDadosVaga] = useState({});

    useEffect( () =>{
        navigation.setParams({
            idVaga: idVaga,
          });
        async function getDadosVaga(){
            alert(idVaga);
            const response = await api.get(`vagas/${idVaga}`);

            setDadosVaga(response.data);
        }

        getDadosVaga();

    }, []);
    return(
        <Container>
            <HeaderStackDash />

            <AreaTitulo>
                <TituloVaga>{dadosVaga.titulo}</TituloVaga>
            </AreaTitulo>

            <AreaDescricao>
                <TextoDescricao>
                Programar, desenvolver e implantar sistemas em linguagem PHP, realizar correções em sistemas para atender às necessidades dos usuários, desenvolver trabalhos de montagem, depuração e testes de programas já desenvolvidos.
                </TextoDescricao>
            </AreaDescricao>

            <AreaInfo>

                <CardInfo>
                    <TituloCard>Carga horária:</TituloCard>
                    <TextoCard>8 horas</TextoCard>
                </CardInfo>

                <CardInfo>
                    <TituloCard>Regime contratação:</TituloCard>
                    <TextoCard>CLT</TextoCard>
                </CardInfo>

                <CardInfo>
                    <TituloCard>Tipo:</TituloCard>
                    <TextoCard>Presencial</TextoCard>
                </CardInfo>
                
            </AreaInfo>

            <AreaBotao>

                <BotaoCandidatar>
                    <TextoBotaoCandidatar>Se candidatar</TextoBotaoCandidatar>
                </BotaoCandidatar>

            </AreaBotao>
        </Container>
    );
}