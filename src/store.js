import { configureStore } from "@reduxjs/toolkit";
import Loginreducer from './slices/Loginslice';
import AdminLoginreducer from './slices/adminLogin';
import { persistStore, persistReducer } from "redux-persist";
// import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

let persistConfig = {
    key: "root",
    storage,
}
let StudentpersistedReducer = persistReducer(persistConfig, Loginreducer)
let adminpersistedReducer = persistReducer(persistConfig, AdminLoginreducer)


const store = configureStore({
    reducer: {
        "stulogin": StudentpersistedReducer,
        "adminlogin": adminpersistedReducer
    }
})

let presistor = persistStore(store)

export {store, presistor}


// export default store