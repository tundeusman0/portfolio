import axios from 'axios';
import tokenConfig from '../selectors/tokenConfig';

export const addResume = payload => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/resume', payload, tokenConfig(getState));
    dispatch({ type: 'ADD_RESUME', payload: res.data });
    dispatch({ type: 'RESUME_SUCCESS' });
    dispatch({
      type: 'POST_SUCCESS_MSG',
      status: 200,
      id: 'MSG',
      msg: 'ADDED'
    });
  } catch (e) {
    dispatch({
      type: 'RESUME_ERROR',
      status: 400,
      msg: 'Unable to add Resume',
      id: 'Resume Fail'
    });
  }
};

export const editResume = payload => async (dispatch, getState) => {
  try {
    const res = await axios.patch(
      '/api/resume',
      payload,
      tokenConfig(getState)
    );
    dispatch({ type: 'EDIT_RESUME', payload: res.data });
    dispatch({ type: 'RESUME_SUCCESS' });
    dispatch({
      type: 'POST_SUCCESS_MSG',
      status: 200,
      id: 'MSG',
      msg: 'RESUME UPDATED'
    });
  } catch (e) {
    dispatch({
      type: 'RESUME_ERROR',
      status: 400,
      msg: 'Unable to update Resume',
      id: 'Resume Fail'
    });
  }
};

export const postImage = (file = {}) => async (dispatch, getState) => {
  try {
    await axios.patch('/api/resume/pix', file, tokenConfig(getState));
    dispatch({ type: 'RESUME_SUCCESS' });
    dispatch({
      type: 'POST_SUCCESS_MSG',
      status: 200,
      id: 'MSG',
      msg: 'RESUME PIX UPDATED'
    });
  } catch (e) {
    dispatch({
      type: 'RESUME_ERROR',
      status: 400,
      msg: 'Unable to update Resume Pix',
      id: 'Resume Fail'
    });
  }
};
