import axios from 'axios';
import tokenConfig from '../../selectors/tokenConfig';

export const postProjects = payload => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      '/api/resume/projects',
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

// export const deleteSkills = id => async (dispatch, getState) => {
//   try {
//     const res = await axios.delete(
//       `/api/user/skills/${id}`,
//       tokenConfig(getState)
//     );
//     dispatch({ type: 'DELETE_SKILL', payload: res.data });
//     dispatch({ type: 'AUTH_SUCCESS' });
//     dispatch({
//       type: 'POST_SUCCESS',
//       status: 0,
//       msg: 'Skill Deleted'
//     });
//   } catch (e) {
//     dispatch({
//       type: 'LOGIN_FAILED',
//       status: 400,
//       msg: 'Unable to Delete Skill',
//       id: 'Status Fail'
//     });
//   }
// };

export const updateProjects = payload => async (dispatch, getState) => {
  try {
    const res = await axios.patch(
      `/api/resume/projects/${payload.id}`,
      payload.proj,
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
