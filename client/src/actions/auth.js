import axios from 'axios';

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
