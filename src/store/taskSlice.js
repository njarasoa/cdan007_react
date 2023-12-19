import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        { id: 1, name: "misakafo" },
        { id: 2, name: "matory" },  
    ],
    reducers: {
      addTask(state, action) {
        state.push({
            id: Date.now(),
            name: action.payload,
          });
      },
      deleteTask(state, action) {
        const newState = state.filter((todo) => todo.id !== action.payload);
        return newState;
      }
    },
  });
  export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice;