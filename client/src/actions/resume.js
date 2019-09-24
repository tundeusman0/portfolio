import axios from 'axios';
import tokenConfig from '../selectors/tokenConfig';

export const addResume = payload => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/resume', payload, tokenConfig(getState));
    dispatch({ type: 'ADD_RESUME', payload: res.data });
    dispatch({ type: 'RESUME_SUCCESS' });
  } catch (e) {
    dispatch({
      type: 'ADD_RESUME_ERROR',
      status: 400,
      msg: 'Unable to add Skill',
      id: 'Resume Fail'
    });
  }
};

// export const addResume = payload => async (dispatch, getState) => {
// }
