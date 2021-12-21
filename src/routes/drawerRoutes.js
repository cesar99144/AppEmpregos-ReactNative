import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Dashboard from "../pages/dashboard";
import CompletePerfil from "../pages/completePerfil";
import ConcluirCadastro from "../pages/concluirCadastro";

export default function DrawerRoutes({route: {params}}){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Dashboard"
                component={Dashboard}
                initialParams={params}
            />
            <Drawer.Screen 
                name="CompletePerfil"
                component={CompletePerfil}
            />
            <Drawer.Screen 
                name="ConcluirCadastro"
                component={ConcluirCadastro}
            />

        </Drawer.Navigator>
    );
}