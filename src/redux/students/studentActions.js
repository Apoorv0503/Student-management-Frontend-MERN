import API from '../../utils/api';
import {
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudentSuccess,
  addStudentFailure,
  updateStudentSuccess,
  updateStudentFailure,
  deleteStudentSuccess,
  deleteStudentFailure,
} from './studentSlice';

export const fetchStudents = () => async (dispatch) => {
  try {
    const { data } = await API.get('/students');
    dispatch(fetchStudentsSuccess(data));
  } catch (error) {
    dispatch(fetchStudentsFailure(error.message));
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    const { data } = await API.post('/students', student);
    dispatch(addStudentSuccess(data));
  } catch (error) {
    dispatch(addStudentFailure(error.message));
  }
};

export const updateStudent = (student) => async (dispatch) => {
  try {
    const { data } = await API.put(`/students/${student._id}`, student);
    dispatch(updateStudentSuccess(data));
  } catch (error) {
    dispatch(updateStudentFailure(error.message));
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await API.delete(`/students/${id}`);
    dispatch(deleteStudentSuccess(id));
  } catch (error) {
    dispatch(deleteStudentFailure(error.message));
  }
};
