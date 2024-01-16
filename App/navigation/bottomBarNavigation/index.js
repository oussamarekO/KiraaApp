import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WishList from "../../screens/WishLists";
import Trips from "../../screens/Trips";
import Profils from "../../screens/Profils";
import Inbox from "../../screens/Inbox";
import Expolore from "../../screens/ExploreScreen";

const Tab = createBottomTabNavigator(); 

export default function BottomNavigation() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="explore" component={Expolore}/>
            <Tab.Screen name="wishList" component={WishList}/>
            <Tab.Screen name="trips" component={Trips}/>
            <Tab.Screen name="inbox" component={Inbox}/>
            <Tab.Screen name="profils" component={Profils}/>
        </Tab.Navigator>
    )
}