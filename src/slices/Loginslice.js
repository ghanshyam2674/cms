import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stuuser: "",
    stuauth: false,
    stuid: null,
}

const Loginslice = createSlice({
    name: "stulogin",
    initialState: initialState,
    reducers: {
        stuLogin: ((state, { payload }) => {
            state.stuuser = payload.name;
            state.stuid = payload.id;
            state.stuauth = true;
            console.log("hello");
        }),

        stuLogout: ((state) => {
            state.stuuser = "";
            state.stuauth = false;
            state.stuid = null;
        })
    }

})

export const { stuLogin, stuLogout } = Loginslice.actions;
export default Loginslice.reducer;