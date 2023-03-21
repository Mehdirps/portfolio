import { createSlice } from '@reduxjs/toolkit';

const SkillsBagSlice = createSlice({
    name: 'skillsBag',
    initialState: {
        open: false,

    },
    reducers: {
        setSkillsBag: (state, action) => {
            state.open = action.payload
        }
    }
});
export const { setSkillsBag } = SkillsBagSlice.actions;
export default SkillsBagSlice.reducer;