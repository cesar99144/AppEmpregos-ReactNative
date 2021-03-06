import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Cadastro from "../pages/cadastro";
import ConfirmacaoCadastro from "../pages/confirmacaoCadastro";
import Login from "../pages/login";
import CompletePerfil from "../pages/completePerfil";
import ConcluirCadastro from "../pages/concluirCadastro";

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen  
                name="ConcluirCadastro"
                component={ConcluirCadastro}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="ConfirmacaoCadastro"
                component={ConfirmacaoCadastro}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}