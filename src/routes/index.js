import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Preload from "../pages/preload";
import AuthRoutes from "./authRoutes";
import DrawerRoutes from "./drawerRoutes";

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Preload"
                component={Preload}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="AuthRoutes"
                component={AuthRoutes}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="DrawerRoutes"
                component={DrawerRoutes}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}