import { createSlice } from "@reduxjs/toolkit";

const ReadexSlice = createSlice({
    name: 'readex',
    initialState: {
        value: false
    },
    reducers: {
        setReadex: (state, action) => {
            state.value = action.payload
        }
    }
});
export const { setReadex } = ReadexSlice.actions;
export default ReadexSlice.reducer;