import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "njar" },
    { id: 2, name: "avotra" },
  ],
  reducers: {
    addUser: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload,
      });
    },
    deleteUser: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice;
