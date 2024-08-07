import API from '../../utils/api';
import { loginSuccess, loginFailure, logout } from './authSlice';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const { data } = await API.post('/auth/login', credentials);
    localStorage.setItem('token', data.token);
    dispatch(loginSuccess(data.token));
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logout());
};
