import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stuuser : "",
    stuauth : false,
}

const Loginslice = createSlice({
    name: "stulogin",
    initialState: initialState,
    reducers: {
        stuLogin: ((state, { payload }) => {
            state.stuuser = payload;
            state.stuauth = true;
        }),

        stuLogout: ((state) => {
            state.stuuser = "";
            state.stuauth = false;
        })
    }

})

export const {stuLogin,stuLogout} = Loginslice.actions;
export default Loginslice.reducer;