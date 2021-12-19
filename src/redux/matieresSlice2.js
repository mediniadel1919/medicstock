import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import { getCacheMatiere, updateCacheMatiere } from "../utils/testCache2";

export const getMatieres = createAsyncThunk(
  "matieres/getMatieres",
  async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => getCacheMatiere())
      .catch((e) => console.log(e));
  }
);

export const selectMatieres = (state) => state.matiere;

export const addMatiere = createAsyncThunk(
  "matieres/addMatiere",
  async (matiere, { getState }) => {
    let matieresArray = [...getCacheMatiere()];
    matieresArray.unshift(matiere);

    reactLocalStorage.setObject("matieres", matieresArray);
    return await axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => matieresArray)
      .catch((e) => console.log(e));
  }
);

export const editMatiereAsyncr = createAsyncThunk(
  "matieres/editMatiere",
  async (filtredObject, { getState }) => {
    const matieres = [...getState().matiere.matieres];
    let elementPosition = matieres.findIndex(
      (el) => el.id === filtredObject.currentMatiere.id
    );
    matieres.splice(elementPosition, 1, {
      id: filtredObject.currentMatiere.id,
      ...filtredObject.replaceMatiere,
    });

    // updateCacheMatiere(elementPosition,filtredObject.replaceMatiere)
    console.log("pizii", matieres);
    return await axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        reactLocalStorage.setObject("matieres", matieres);

        return matieres;
      })
      .catch((e) => console.log(e));
  }
);

const matieresSlice = createSlice({
  name: "matieres",
  initialState: {
    matieres: [],
    status: "idle",
  },
  reducers: {
    editMatiere: (state, action) => {
      let elementPosition = state.matieres.findIndex(
        (el) => el.id === action.payload.currentMatiere.id
      );

      state.matieres.splice(elementPosition, 1, action.payload.replaceMatiere);

      updateCacheMatiere(elementPosition, action.payload.replaceMatiere);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMatieres.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMatieres.fulfilled, (state, action) => {
        state.status = "success";
        state.matieres = action.payload;
      })
      .addCase(getMatieres.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(addMatiere.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addMatiere.fulfilled, (state, action) => {
        state.matieres = action.payload;
        state.status = "success";
      })
      .addCase(addMatiere.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(editMatiereAsyncr.fulfilled, (state, action) => {
        state.matieres = action.payload;
        state.status = "success";
      });
  },
});
export const { editMatiere } = matieresSlice.actions;

export default matieresSlice.reducer;
