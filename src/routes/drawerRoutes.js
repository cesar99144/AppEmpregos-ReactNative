import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Dashboard from "../pages/dashboard";
import StackDash from "./stackDash";

export default function DrawerRoutes({route: {params}}){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Dashboard"
                component={Dashboard}
                initialParams={params}
            />
            <Drawer.Screen 
                name="StackDash"
                component={StackDash}
            />
        </Drawer.Navigator>
    );
}