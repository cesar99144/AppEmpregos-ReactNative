import React, {useEffect} from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';

import HeaderDashboard from "../../components/headerDashboard";
import CardVagas from "../../components/CardVagas";

export default function Dashboard(){

    const navigation = useNavigation();
    const route = useRoute();
    
    // useEffect( ()=>{
        
    // }, []);
    return(
        <Container>
            <HeaderDashboard />
            
            <AreaTextos>
                <Titulo>Olá, bem vindo(a) de volta</Titulo>
                <SubTitulo></SubTitulo>
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