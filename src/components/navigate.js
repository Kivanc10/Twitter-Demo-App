import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from "./loginForm";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainPage from "./mainPage";
import Messages from "./messages";
import Search from "./search";
import NewTweet from "./newTweet";
import Notifications from "./notifications";
import {navigationRef} from "../navigationServices";
import UpdateTweet from "./updateTweet";
import UserSelfPage from "./userSelfPage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function LoggedInTabs() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Main') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home';
                } else if (route.name === 'Search') {
                    iconName = focused ? 'ios-search' : 'ios-search';
                }
                else if (route.name === 'Notification') {
                    iconName = focused ? 'ios-notifications-outline' : 'ios-notifications-outline';
                }
                else if (route.name === 'Messages') {
                    iconName = focused ? 'ios-mail' : 'ios-mail';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'rgb(29,161,242)',
            inactiveTintColor: 'gray',
            showLabel: false
        }}
    >
        <Tab.Screen name="Main" component={MainPage} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Notification" component={Notifications} />
        <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
    )
}

const Navigate = ({ navigation }) => {    
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={LoginForm} />
            <Stack.Screen name="Inside" component={LoggedInTabs} />
            <Stack.Screen name="NewTweet" component = {NewTweet} />
            <Stack.Screen name="UpdateTweet" component = {UpdateTweet} />
            <Stack.Screen name="UserSelfPage" component = {UserSelfPage} />
        </Stack.Navigator>

        </NavigationContainer>
    );
}


export { Navigate };
