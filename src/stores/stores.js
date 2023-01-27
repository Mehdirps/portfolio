import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from "./LanguageSlice";
import ArrayLengthSlice from "./ArrayLengthSlice";

export const store = configureStore({
    reducer: {
        language: LanguageSlice,
        length: ArrayLengthSlice,
    }
})