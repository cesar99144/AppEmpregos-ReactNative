import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import VizualizarVaga from "../pages/vizualizarVaga/index";

export default function StackDash({route: {params}}){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="VizualizarVaga"
                component={VizualizarVaga}
                options={{
                    headerShown: false
                }}
                initialParams={params}
                //getId={({ params }) => params}
            />
        </Stack.Navigator>
    );
}