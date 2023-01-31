import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from "./LanguageSlice";
import ArrayLengthSlice from "./ArrayLengthSlice";
import ReadexSlice from "./ReadexSlice";
import RealisationSlice from "./RealisationSlice";

export const store = configureStore({
    reducer: {
        language: LanguageSlice,
        length: ArrayLengthSlice,
        readex: ReadexSlice,
        realisation: RealisationSlice,
    }
})