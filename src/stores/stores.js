import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from "./LanguageSlice";
import ArrayLengthSlice from "./ArrayLengthSlice";
import ReadexSlice from "./ReadexSlice";

export const store = configureStore({
    reducer: {
        language: LanguageSlice,
        length: ArrayLengthSlice,
        readex: ReadexSlice,
    }
})