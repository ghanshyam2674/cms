import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminuser: "",
    adminauth: false,
    adminid: null,
}

const AdminLoginslice = createSlice({
    name: "adminlogin",
    initialState: initialState,
    reducers: {
        adminLogin: ((state, { payload }) => {
            state.adminuser = payload.name;
            state.adminid = payload.id;
            state.adminauth = true;
        }),

        adminLogout: ((state) => {
            state.adminuser = "";
            state.adminauth = false;
            state.adminid = null;
        })
    }

})

export const { adminLogin, adminLogout } = AdminLoginslice.actions;
export default AdminLoginslice.reducer;