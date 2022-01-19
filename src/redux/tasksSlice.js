import {createSlice} from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date().toString(),
        taskName: action.payload.taskName,
        isComplete: false,
        timeCreated: action.payload.timeCreated,
        dateCreated: action.payload.dateCreated,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter(item => item.id != action.payload.id);
    },
    checkOrUncheckTask: (state, action) => {
      const index = state.findIndex(item => item.id == action.payload.id);
      state[index].isChecked = !state[index].isChecked;
    },
  },
});

export const {addTask, deleteTask, checkOrUncheckTask} = tasksSlice.actions;
export default tasksSlice.reducer;
