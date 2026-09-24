import { createSlice } from "@reduxjs/toolkit";
import projector from "/projector.jpg";
import speaker from "/speaker.jpg";
import microphone from "/microphone.jpg";
import whiteboard from "/whiteboard.png";
import signboard from "/signBoard.jpg";

export const avSlice = createSlice({
	name: "av",
  initialState: [
    {
      img: projector,
      name: "Projectors",
      cost: 200,
      quantity: 0
    },
    {
      img: speaker,
      name: "Speaker",
      cost: 35,
      quantity: 0
    },
    {
      img: microphone,
      name: "Microphones",
      cost: 45,
      quantity: 0
    },
    {
      img: whiteboard,
      name: "Whiteboards",
      cost: 80,
      quantity: 0
    },
    {
      img: signboard,
      name: "Signage",
      cost: 80,
      quantity: 0
    },
  ],

	reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },

    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
	},
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
