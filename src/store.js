import { configureStore } from "@reduxjs/toolkit";
import Loginreducer from './slices/Loginslice'

const store = configureStore({
    reducer: {
        stulogin: Loginreducer,
    }
})

export default store