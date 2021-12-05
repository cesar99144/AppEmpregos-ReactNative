import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Dashboard from "../pages/dashboard";

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Dashboard"
                component={Dashboard}
            />
        </Drawer.Navigator>
    );
}