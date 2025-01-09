import {configureStore} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from "@/states/reducers/rootReducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: [],
    whitelist: ['user', 'cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch