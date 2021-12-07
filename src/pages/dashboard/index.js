import React from "react";
import {ScrollView} from "react-native";
import { 
    Container,
    AreaTextos, 
    Titulo,
    SubTitulo,
    TextInfo,
    AreaPesquisa,
    Input,
    BotaoPesquisar,
    AreaVagas,
    Titulovagas,
    ListVagas
} from './style';

import Icon from 'react-native-vector-icons/Feather';

import HeaderDashboard from "../../components/headerDashboard";
import CardVagas from "../../components/CardVagas";

export default function Dashboard(){
    return(
        <Container>
            <HeaderDashboard />
            
            <AreaTextos>
                <Titulo>Olá, bem vindo(a) de volta</Titulo>
                <SubTitulo>César</SubTitulo>
            </AreaTextos>

            <ScrollView showsVerticalScrollIndicator={false}>
                <AreaPesquisa>
                    <Input placeholder="Pesquisar uma vaga" />
                    <BotaoPesquisar>
                        <Icon
                            name="search"
                            size={28}
                            color="#FFF"
                        />
                    </BotaoPesquisar>
                </AreaPesquisa>

                <AreaVagas>
                    <Titulovagas>Vagas recentes</Titulovagas>

                    <ListVagas 
                        data={[1,2,3,4,5,6,7,8,9,9]}
                        renderItem={ ( { item }) => <CardVagas data={item} />}
                    />
                </AreaVagas>

            </ScrollView>
        </Container>
    );
}