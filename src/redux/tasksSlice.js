import {createSlice} from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    ids: [],
    byId: {},
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date().toString(),
        taskName: action.payload.taskName,
        isComplete: false,
        timeCreated: action.payload.timeCreated,
        dateCreated: action.payload.dateCreated,
      };
      state.ids.push(newTask.id);
      state.byId[newTask.id] = newTask;
    },
    deleteTask: (state, action) => {
      state.ids = state.ids.filter(item => item.id != action.payload.id);
      delete state.byId[action.payload.id];
    },
    checkOrUncheckTask: (state, action) => {
      state.byId[action.payload.id].isComplete =
        !state.byId[action.payload.id].isComplete;
    },
  },
});

export const {addTask, deleteTask, checkOrUncheckTask} = tasksSlice.actions;
export default tasksSlice.reducer;
