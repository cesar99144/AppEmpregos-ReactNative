import React, {useEffect, useState} from "react";
import {AreaBotao, AreaDescricao, AreaInfo, AreaTitulo, BotaoCandidatar, CardInfo, Container, TextoBotaoCandidatar, TextoCard, TextoDescricao, TituloCard, TituloVaga} from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderStackDash from "../../components/headerStackDash";

import api from "../../services/api";

export default function VizualizarVaga(){

    const navigation = useNavigation();
    const route = useRoute();

    const idVaga = route.params?.id;

    const [dadosVaga, setDadosVaga] = useState({});

    useEffect( () =>{
        async function getDadosVaga(){

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
                    {dadosVaga.descricao}
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