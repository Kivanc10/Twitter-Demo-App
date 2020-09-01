import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from "./components/loginForm";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons";
import MainPage from "./components/mainPage";
import Messages from "./components/messages";
import Search from "./components/search";
import Notifications from "./components/notifications";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {
    state = {
        loggedIn: false
    }
    render() {
        const { loggedIn } = this.state;
        const content = loggedIn ? (
            <>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Home" component={LoginForm} />
                </Stack.Navigator>
            </>
        ) : (
                <>
                    <Tab.Navigator>
                        <Tab.Screen name="Main" component={MainPage} />
                        <Tab.Screen name="Search" component={Search} />
                    </Tab.Navigator>
                </>
            )
        return (
            <NavigationContainer>
                {content}
            </NavigationContainer>
        );
    }
}

export default App;
