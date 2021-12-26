import React, {useState, useEffect} from "react";
import {ScrollView, ActivityIndicator, RefreshControl} from "react-native";
import {
    Container,
    AreaVagas,
    Titulovagas,
    ListVagas,
    TopoVagas,
    BotaoVizualizarTodasVagas,
    TextoBotaoVaga
} from "./style";
import { useNavigation } from "@react-navigation/native";

import HeaderDashboard from "../../components/headerDashboard";
import CardVagas from "../../components/CardVagas";
import api from "../../services/api";

export default function ListTodasVagas(){

    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [vagas, setVagas] = useState([]);

    function navigateVizualizarVaga(item){

        navigation.navigate("VizualizarVaga", { id: item.idVaga});
    }

    async function getTodasVagas(){

        const response = await api.get('/vagas');
        
        setVagas(response.data);
        setLoading(false);
    }

    useEffect( () =>{

        getTodasVagas();

    }, []);

    const onRefresh = () =>{
        setRefreshing(false);
        getTodasVagas();
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

            <HeaderDashboard titulo="Todas as vagas" />

            <AreaVagas>
                <TopoVagas>
                    <Titulovagas>Todas as vagas disponíveis</Titulovagas>

                    
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
        </Container>
    );
}