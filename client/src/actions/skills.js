import axios from 'axios';
import tokenConfig from '../selectors/tokenConfig';

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

export const updateSkills = payload => async (dispatch, getState) => {
  try {
    const res = await axios.patch(
      `/api/user/skills/${payload.id}`,
      payload.skills,
      tokenConfig(getState)
    );
    dispatch({ type: 'UPDATE_SKILL', payload: res.data });
    dispatch({ type: 'AUTH_SUCCESS' });
    dispatch({
      type: 'POST_SUCCESS',
      status: 0,
      msg: 'Skill Updated'
    });
  } catch (e) {
    dispatch({
      type: 'LOGIN_FAILED',
      status: 400,
      msg: 'Unable to Update Skill',
      id: 'Status Fail'
    });
  }
};
