import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Dashboard from "../pages/dashboard";
import StackDash from "./stackDash";

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="StackDash"
                component={StackDash}
            />
        </Drawer.Navigator>
    );
}