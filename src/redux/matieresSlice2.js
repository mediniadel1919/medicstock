import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import { getCacheMatiere, updateCacheMatiere } from "../utils/testCache2";

export const getMatieres = createAsyncThunk(
  "previsions/getPrevisions",
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

    reactLocalStorage.setObject("previsions", matieresArray);
    return await axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => matieresArray)
      .catch((e) => console.log(e));
  }
);

export const editPrevisionAsyncr = createAsyncThunk(
  "matieres/editPrevision",
  async (filtredObject, { getState }) => {
    const previsions = [...getState().prevision.previsions];
    let elementPosition = previsions.findIndex(
      (el) => el.id === filtredObject.currentMatiere.id
    );
    previsions.splice(elementPosition, 1, {
      id: filtredObject.currentMatiere.id,
      ...filtredObject.replaceMatiere,
    });

    // updateCacheMatiere(elementPosition,filtredObject.replaceMatiere)
    console.log("pizii", previsions);
    return await axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        reactLocalStorage.setObject("previsions", previsions);

        return previsions;
      })
      .catch((e) => console.log(e));
  }
);

const matieresSlice = createSlice({
  name: "previsions",
  initialState: {
    previsions: [],
    status: "idle",
  },
  reducers: {
    editMatiere: (state, action) => {
      let elementPosition = state.previsions.findIndex(
        (el) => el.id === action.payload.currentMatiere.id
      );

      state.previsions.splice(elementPosition, 1, action.payload.replaceMatiere);

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
        state.previsions = action.payload;
      })
      .addCase(getMatieres.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(addMatiere.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addMatiere.fulfilled, (state, action) => {
        state.previsions = action.payload;
        state.status = "success";
      })
      .addCase(addMatiere.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(editPrevisionAsyncr.fulfilled, (state, action) => {
        state.previsions = action.payload;
        state.status = "success";
      });
  },
});
export const { editPrevision } = matieresSlice.actions;

export default matieresSlice.reducer;
