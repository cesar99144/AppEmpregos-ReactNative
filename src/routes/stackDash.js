import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Dashboard from "../pages/dashboard";
import VizualizarVaga from "../pages/vizualizarVaga/index";

export default function StackDash(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="VizualizarVaga"
                component={VizualizarVaga}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}