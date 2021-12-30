import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import StackDash from "./stackDash";
import ListTodasVagas from "../pages/listTodasVagas";
import Candidaturas from "../pages/candidaturas";

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="HomeDash"
                component={StackDash}
            />
            <Drawer.Screen 
                name="Todas as vagas"
                component={ListTodasVagas}
            />
            <Drawer.Screen 
                name="Candidaturas"
                component={Candidaturas}
            />
        </Drawer.Navigator>
    );
}