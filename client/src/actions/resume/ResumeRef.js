import axios from 'axios';
import tokenConfig from '../../selectors/tokenConfig';

export const postRef = payload => async (dispatch, getState) => {
  try {
    const res = await axios.patch(
      '/api/resume/reference',
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

export const deleteRef = id => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/resume/reference/${id}`, tokenConfig(getState));
    dispatch({ type: 'DELETE_REF', id });
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
