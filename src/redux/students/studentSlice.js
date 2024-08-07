import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    list: [],
    error: null,
  },
  reducers: {
    fetchStudentsSuccess(state, action) {
      state.list = action.payload;
    },
    fetchStudentsFailure(state, action) {
      state.error = action.payload;
    },
    addStudentSuccess(state, action) {
      state.list.push(action.payload);
    },
    addStudentFailure(state, action) {
      state.error = action.payload;
    },
    updateStudentSuccess(state, action) {
      const index = state.list.findIndex(student => student._id === action.payload._id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    updateStudentFailure(state, action) {
      state.error = action.payload;
    },
    deleteStudentSuccess(state, action) {
      state.list = state.list.filter(student => student._id !== action.payload);
    },
    deleteStudentFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudentSuccess,
  addStudentFailure,
  updateStudentSuccess,
  updateStudentFailure,
  deleteStudentSuccess,
  deleteStudentFailure,
} = studentSlice.actions;

export default studentSlice.reducer;
