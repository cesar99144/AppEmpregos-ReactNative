import React, {useEffect} from "react";
import { AreaTexto, AreaVetorBottom, AreaVetorTop, Container, ImagemVetorBottom, ImagemVetorTop, Titulo } from './style';
import { useNavigation } from "@react-navigation/native";

export default function Preload(){

    const navigation = useNavigation();

    useEffect( () => {

        function load(){
            setTimeout( function(){
                navigation.navigate('AuthRoutes');
            }, 2000)
        }

        load();
    }, [])

    return(
        <Container>

            <AreaVetorTop>
                <Titulo>Vagas empregos</Titulo>
            </AreaVetorTop>

            

        </Container>
    );
}