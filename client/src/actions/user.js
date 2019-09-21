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

export const editStatus = (payload = {}) => async (dispatch, getState) => {
  try {
    const res = await axios.patch(
      '/api/user/status',
      payload,
      tokenConfig(getState)
    );
    dispatch({ type: 'EDIT_STATUS', payload: res.data });
    dispatch({ type: 'AUTH_SUCCESS' });
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
    dispatch({ type: 'LOGIN_FAILED', status, msg, id: 'Status Fail' });
  }
};

export const postImage = (file = {}) => async (dispatch, getState) => {
  try {
    await axios.patch('/api/user/homePix', file, tokenConfig(getState));
    dispatch({
      type: 'POST_SUCCESS',
      status: 0,
      msg: 'Pix Uploaded'
    });
  } catch (e) {
    dispatch({
      type: 'LOGIN_FAILED',
      status: 400,
      msg: 'Unable to upload pix',
      id: 'Status Fail'
    });
  }
};

export const postSkills = payload => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      '/api/user/skills',
      payload,
      tokenConfig(getState)
    );
    dispatch({ type: 'EDIT_SKILL', payload: res.data });
    dispatch({ type: 'AUTH_SUCCESS' });
    dispatch({
      type: 'POST_SUCCESS',
      status: 0,
      msg: 'Skill Posted'
    });
  } catch (e) {
    dispatch({
      type: 'LOGIN_FAILED',
      status: 400,
      msg: 'Unable to Skill',
      id: 'Status Fail'
    });
  }
};

export const deleteSkills = id => async (dispatch, getState) => {
  try {
    const res = await axios.delete(
      `/api/user/skills/${id}`,
      tokenConfig(getState)
    );
    dispatch({ type: 'DELETE_SKILL', payload: res.data });
    dispatch({ type: 'AUTH_SUCCESS' });
    dispatch({
      type: 'POST_SUCCESS',
      status: 0,
      msg: 'Skill Deleted'
    });
  } catch (e) {
    dispatch({
      type: 'LOGIN_FAILED',
      status: 400,
      msg: 'Unable to Delete Skill',
      id: 'Status Fail'
    });
  }
};
