import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface IBoxProperties {
   id :number
   inputNumber: number,
   name: string,
   value: number | string,
   type: string,
   minMax: [number, number],
   slice?: string,
}

const initialState:Array<IBoxProperties> = [
  {
    id: 1,
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    minMax: [0, 250]
  },
  {
    id: 2,
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    minMax: [0, 500]
  },
  {
    id: 3,
    inputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    minMax: [0, 500]
  }
]

export const boxSlices = createSlice({
  name: "boxProperties",
  initialState,
  reducers: {
    updateBoxValue: (state, action: PayloadAction<IBoxProperties>) => {
      const box = state.find(el => el.inputNumber === action.payload.inputNumber);
      if (box) {
        box.value = action.payload.value;
      }
    },
  },
});


export const { updateBoxValue } =
  boxSlices.actions;
export const boxSelector = (state: RootState) => state.boxReducer;
export default boxSlices.reducer;