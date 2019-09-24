import axios from 'axios';
import tokenConfig from '../selectors/tokenConfig';

export const registerUser = (payload = {}) => async dispatch => {
  try {
    const res = await axios.post('/api/user', payload);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    dispatch({ type: 'AUTH_SUCCESS' });
  } catch (e) {
    let msg = '',
      status = '';
    if (e.message === 'Request failed with status code 404') {
      msg = 'Unable to register';
      status = 404;
    } else {
      msg = 'Unable to register';
      status = 400;
    }
    dispatch({ type: 'REGISTRATION_FAILED', status, msg, id: 'REGISTER_FAIL' });
  }
};

export const loginUser = (payload = {}) => async dispatch => {
  try {
    const res = await axios.post('/api/user/login', payload);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    dispatch({ type: 'AUTH_SUCCESS' });
  } catch (e) {
    let msg = '',
      status = '';
    if (e.message === 'Request failed with status code 404') {
      msg = 'Unable to Login';
      status = 404;
    } else {
      msg = 'Unable to Login';
      status = 400;
    }
    dispatch({ type: 'LOGIN_FAILED', status, msg, id: 'LOGIN_FAIL' });
  }
};

export const logOut = () => dispatch => {
  console.log('log out');
  dispatch({ type: 'LOGOUT' });
};

export const getUser = () => async (dispatch, getState) => {
  dispatch({ type: 'LOADING' });
  try {
    const res = await axios.get('/api/user', tokenConfig(getState));
    const resume = await axios.get('/api/resume');
    dispatch({ type: 'GET_USER', payload: res.data });
    dispatch({ type: 'GET_RESUME', payload: resume.data });
  } catch (e) {
    let msg = '',
      status = '';
    if (e.message === 'Request failed with status code 404') {
      msg = 'Unable to Login';
      status = 404;
    } else {
      msg = 'Unable to Login';
      status = 400;
    }
    dispatch({ type: 'LOGIN_FAILED', status, msg });
  }
};
