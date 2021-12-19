import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import matiereReducer from "./matieresSlice";
import previsionReducer from "./matieresSlice2";

import themeOptionsReducer from "./themeOptionsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    matiere: matiereReducer,
    prevision:previsionReducer,
    ThemeOptions: themeOptionsReducer,
  },
});
