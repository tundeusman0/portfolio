import axios from 'axios';
import tokenConfig from './tokenConfig';

export const updateAction = async (
  payload,
  api,
  getState,
  dispatch,
  method = 'patch'
) => {
  try {
    const res = await axios[method](api, payload, tokenConfig(getState));
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

export const deleteAction = async (id, api, getState, dispatch, resumeName) => {
  try {
    await axios.delete(api, tokenConfig(getState));
    dispatch({ type: 'DELETE_RESUMES', id, resumeName });
    dispatch({ type: 'RESUME_SUCCESS' });
    dispatch({
      type: 'POST_SUCCESS_MSG',
      status: 200,
      id: 'MSG',
      msg: 'RESUME DELETED'
    });
  } catch (e) {
    dispatch({
      type: 'RESUME_ERROR',
      status: 400,
      msg: 'Unable to delete Resume',
      id: 'Resume Fail'
    });
  }
};
