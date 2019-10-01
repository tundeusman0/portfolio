import axios from 'axios';
import tokenConfig from '../../selectors/tokenConfig';
import { updateAction, addImage } from '../../selectors/utils';

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
  const api = '/api/resume';
  await updateAction(payload, api, getState, dispatch);
};

export const postImage = (file = {}) => async (dispatch, getState) => {
  await addImage(
    file,
    getState,
    dispatch,
    '/api/resume/pix',
    {
      type: 'RESUME_SUCCESS',
      typeB: 'POST_SUCCESS_MSG',
      msgS: 'RESUME PIX UPDATED'
    },
    {
      typeE: 'RESUME_ERROR',
      msgE: 'Unable to update Resume Pix',
      id: 'Resume Fail'
    }
  );
};
