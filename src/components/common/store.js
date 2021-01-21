import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from "redux-persist/es/integration/react";
import { createStore, applyMiddleware } from "redux";
import { logger, createLogger } from 'redux-logger';
import ReduxThunk from "redux-thunk";
import reducers from "../../reducers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth.user'], // which reducer want to store
    //blacklist : ["auth.error"]
};

const persitedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persitedReducer, applyMiddleware(createLogger(), ReduxThunk)
)

let persitedStore = persistStore(store);

export {
    store,persitedStore
}