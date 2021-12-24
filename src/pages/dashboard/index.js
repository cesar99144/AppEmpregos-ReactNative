import React, {useEffect, useState} from "react";
import {ScrollView, ActivityIndicator, RefreshControl} from "react-native";
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

import api from "../../services/api";

export default function Dashboard({route}){

    const navigation = useNavigation();
    const {idUser} = route.params;

    const [dadosUser, setDadosUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usuario, setUsuario] = useState();

    const [vagasRecentes, setVagasRecentes] = useState([]);

    async function getDadosUsuario(){

        const response = await api.get(`/candidatos/${idUser}`);
        //const response = await api.get('/candidatos');
        
        setDadosUser(response.data)
        setLoading(false);

    }

    async function getVagasRecentes(){

        const response = await api.get('/vagas');

        setVagasRecentes(response.data);
    }

    useEffect( () =>{

       getDadosUsuario();
       getVagasRecentes();
    //    if(dadosUser.cidade == null){

           
    //         navigation.navigate('CompletePerfil');
    //    }
       console.log(dadosUser);

    }, []);

    const onRefresh = () =>{
        setRefreshing(false);
        getDadosUsuario();
        getVagasRecentes();
    }

    if(loading){
        return(
            <Container>
                <HeaderDashboard titulo="Home" />

                <ActivityIndicator size="large" color="#000" />
            </Container>
        )
    }
    return(
        <Container>
            <HeaderDashboard titulo="Home" />
            <ScrollView 
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                { dadosUser &&
                    <AreaTextos>
                        <Titulo>Olá, bem vindo(a) de volta</Titulo>
                        <SubTitulo>{dadosUser.nome}</SubTitulo>
                    </AreaTextos>
                }
                
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
                            data={vagasRecentes}
                            keyExtractor={ item => String(item.idVaga) }
                            renderItem={ ( { item }) => <CardVagas data={item} />}
                        />
                    </AreaVagas>
                
                </ScrollView>
            
        </Container>
    );
}