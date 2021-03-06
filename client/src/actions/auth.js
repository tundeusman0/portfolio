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
  dispatch({ type: 'LOGOUT' });
};

export const getUser = () => async (dispatch, getState) => {
  dispatch({ type: 'LOADING' });
  axios
    .get('/api/resume')
    .then(resume => dispatch({ type: 'GET_RESUME', payload: resume.data }));
  axios
    .get('/api/logo')
    .then(logo => dispatch({ type: 'GET_LOGO', payload: logo.data }));
  axios
    .get('/api/blog')
    .then(blog => dispatch({ type: 'GET_BLOG', payload: blog.data }));

  try {
    let res = null;
    if (getState().auth.token) {
      res = await axios.get('/api/user', tokenConfig(getState));
    }
    dispatch({ type: 'GET_USER', payload: res.data });
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
