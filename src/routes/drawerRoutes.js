import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import StackDash from "./stackDash";
import ListTodasVagas from "../pages/listTodasVagas";

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="StackDash"
                component={StackDash}
            />
            <Drawer.Screen 
                name="ListTodasVagas"
                component={ListTodasVagas}
            />
        </Drawer.Navigator>
    );
}