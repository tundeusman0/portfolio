import axios from 'axios';
import tokenConfig from '../selectors/tokenConfig';

export const editUser = (payload = {}) => async (dispatch, getState) => {
  try {
    const res = await axios.patch('/api/user', payload, tokenConfig(getState));
    dispatch({ type: 'AUTH_SUCCESS' });
    dispatch({ type: 'EDIT_USER', payload: res.data });
  } catch (e) {
    let msg = '',
      status = '';
    if (e.message === 'Request failed with status code 406') {
      msg = 'Unable to Edit User account';
      status = 406;
    } else {
      msg = 'Unable to Edit User account';
      status = 400;
    }
    dispatch({ type: 'LOGIN_FAILED', status, msg, id: 'Edit Fail' });
  }
};
