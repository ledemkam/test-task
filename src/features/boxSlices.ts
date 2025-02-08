import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface IBoxProperties {
   inputNumber: number,
   name: string,
   value: number | string,
   type: string,
   minMax: [number, number],
   slice?: string,
}

const initialState:Array<IBoxProperties> = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    minMax: [0, 250]
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    minMax: [0, 500]
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    minMax: [0, 500]
  },
  {
    inputNumber: 4,
    name: "Background color",
    value: "#fff",
    type: "color",
    minMax: [0, 255],
    slice: "boxProperties"
  },
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