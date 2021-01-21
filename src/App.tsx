import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import firebase from "firebase";
import { NavigationContainer } from '@react-navigation/native';
import { Navigate } from "./components/navigate";
import { PersistGate } from "redux-persist/es/integration/react";
import {store,persitedStore} from "./components/common/store.js"


class App extends Component {
    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyA9VohDAvIeGRtkOoPPe3HKq4I2qUrIn_I",
            authDomain: "twitter-clone-773f6.firebaseapp.com",
            databaseURL: "https://twitter-clone-773f6.firebaseio.com",
            projectId: "twitter-clone-773f6",
            storageBucket: "twitter-clone-773f6.appspot.com",
            messagingSenderId: "88142789981",
            appId: "1:88142789981:web:9ffa6ee1047f88ee057cb4",
            measurementId: "G-W4JDDHH0W4"
        };
        firebase.initializeApp(firebaseConfig);
    }
    render() {                          
        return (
            <Provider store={store}>
                <PersistGate persistor = {persitedStore} loading = {null}>
                    <Navigate />
                </PersistGate>

            </Provider>
        );
    }
}



export default App;
