import React, {useState, useEffect, useContext} from "react";
import {ScrollView, ActivityIndicator, RefreshControl} from "react-native";
import {
    Container,
    AreaVagas,
    Titulovagas,
    ListVagas,
    TopoVagas,
    BotaoVizualizarTodasVagas,
    TextoBotaoVaga,
    SubTitulo
} from "./style";

import HeaderDashboard from "../../components/headerDashboard";
import CardVagas from "../../components/CardVagas";
import api from "../../services/api";

import { AuthContext } from "../../contexts/auth";

export default function Candidaturas(){

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [vagas, setVagas] = useState([]);

    const {user} = useContext(AuthContext);

    async function getCandidaturasVagas(){

        const response = await api.get(`/vagascandidaturas/${user.iduser}`);
        
        setVagas(response.data);
        setLoading(false);
    }

    useEffect( () =>{

        getCandidaturasVagas();

    }, []);

    const onRefresh = () =>{
        setRefreshing(false);
        getCandidaturasVagas();
    }

    if(loading){
        return(
            <Container>
                <HeaderDashboard titulo="Todas as vagas" />

                <ActivityIndicator size="large" color="#000" />
            </Container>
        )
    }
    return(
        <Container>

            <HeaderDashboard titulo="Suas candidaturas" />

            <ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <AreaVagas>
                <TopoVagas>

                    <Titulovagas>Vagas em que você se candidatou</Titulovagas>
                    <SubTitulo>Boa sorte</SubTitulo>
                    
                </TopoVagas>
                
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                    <ListVagas 
                        data={vagas}
                        keyExtractor={ item => String(item.idVaga) }
                        renderItem={ ( { item }) => <CardVagas data={item} navigatePage={ () => navigateVizualizarVaga(item) } />}
                    />

                </ScrollView>
            </AreaVagas>
            </ScrollView>
        </Container>
    );
}