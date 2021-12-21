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

    async function getDadosUsuario(){

        const response = await api.get(`/candidatos/${idUser}`);
        //const response = await api.get('/candidatos');
        
        setDadosUser(response.data)
        setLoading(false);

    }


    useEffect( () =>{

       getDadosUsuario();

       if(dadosUser.cidade == null){

            //alert(dadosUser.nome+", seu perfil está incompleto");

            navigation.navigate('CompletePerfil');
       }
       console.log(dadosUser);

    }, []);

    const onRefresh = () =>{
        setRefreshing(false);
        getDadosUsuario();
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
            <HeaderDashboard />
                { dadosUser &&
                    <AreaTextos>
                        <Titulo>Olá, bem vindo(a) de volta</Titulo>
                        <SubTitulo>{dadosUser.nome}</SubTitulo>
                    </AreaTextos>
                }
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
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
                            //data={dadosUser}
                            renderItem={ ( { item }) => <CardVagas data={item} />}
                        />
                    </AreaVagas>
                
                </ScrollView>
            
        </Container>
    );
}