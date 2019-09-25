import axios from 'axios';
import tokenConfig from '../../selectors/tokenConfig';

export const postProf = payload => async (dispatch, getState) => {
  try {
    const res = await axios.patch(
      '/api/resume/professional',
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
