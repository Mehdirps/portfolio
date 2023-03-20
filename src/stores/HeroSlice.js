import { createSlice } from "@reduxjs/toolkit";

const HeroSlice = createSlice({
    name: 'hero',
    initialState: {
        hero: [],
        open: false,
    },
    reducers: {
        setHero: (state, action) => {
            state.hero = action.payload
        },
        setOpenChoice: (state, action) => {
            state.open = action.payload
        }
    }
});
export const { setHero, setOpenChoice } = HeroSlice.actions;
export default HeroSlice.reducer;