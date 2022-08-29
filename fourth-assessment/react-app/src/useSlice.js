import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('/third-assessment/setAsAdmin', async (data) => {
    try {
        const res = await axios.get("http://localhost:3001/users");
        // console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
});

const initialValOfState = {
    users: [],
}
const movieSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialValOfState
    },
    reducers: {

    },
    extraReducers: {
        [getUsers.fulfilled] : (state, action) => {
            // console.log(action.payload);
            state.value.users = [...action.payload]
        }
    }
})
export default movieSlice.reducer;
