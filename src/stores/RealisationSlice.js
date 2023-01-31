import { createSlice } from "@reduxjs/toolkit";

const RealisationSlice = createSlice({
    name: 'realisation',
    initialState: {
        value: {},
        openValue: false,
    },
    reducers: {
        setRealisation: (state, action) => {
            state.value = action.payload
        },
        setOpen: (state, action) => {
            state.openValue = action.payload
        }
    }
});
export const { setRealisation, setOpen } = RealisationSlice.actions;
export default RealisationSlice.reducer;