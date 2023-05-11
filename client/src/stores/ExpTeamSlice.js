import { createSlice } from '@reduxjs/toolkit';

const ExpTeamSlice = createSlice({
    name: 'ExpTeam',
    initialState: {
        open: true,
    },
    reducers: {
        setExpTeam: (state, action) => {
            state.open = action.payload
        },

    }
});
export const { setExpTeam } = ExpTeamSlice.actions;
export default ExpTeamSlice.reducer;