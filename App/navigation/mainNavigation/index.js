import React from "react";
import BottomNavigation from "../bottomBarNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); 

export default function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="bottomNavigation" component={BottomNavigation} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}