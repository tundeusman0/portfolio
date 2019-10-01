import axios from 'axios';
import tokenConfig from './tokenConfig';

export const updateAction = async (
  payload,
  api,
  getState,
  dispatch,
  method = 'patch',
  { type = 'EDIT_RESUME', typeS = 'RESUME_SUCCESS', msg = 'RESUME UPDATED' },
  {
    typeE = 'RESUME_ERROR',
    msgE = 'Unable to update Resume',
    idE = 'Resume Fail'
  }
) => {
  try {
    const res = await axios[method](api, payload, tokenConfig(getState));
    dispatch({ type, payload: res.data });
    dispatch({ type: typeS });
    dispatch({
      type: 'POST_SUCCESS_MSG',
      status: 200,
      id: 'MSG',
      msg
    });
  } catch (e) {
    dispatch({
      type: typeE,
      status: 400,
      msg: msgE,
      id: idE
    });
  }
};

export const deleteAction = async (
  id,
  api,
  getState,
  dispatch,
  resumeName,
  { type = 'DELETE_RESUMES', typeS = 'RESUME_SUCCESS', msg = 'RESUME DELETED' },
  {
    typeE = 'RESUME_ERROR',
    msgE = 'Unable to delete Resume',
    idE = 'Resume Fail'
  }
) => {
  try {
    await axios.delete(api, tokenConfig(getState));
    dispatch({ type, id, resumeName });
    dispatch({ type: typeS });
    dispatch({
      type: 'POST_SUCCESS_MSG',
      status: 200,
      id: 'MSG',
      msg
    });
  } catch (e) {
    dispatch({
      type: typeE,
      status: 400,
      msg: msgE,
      id: idE
    });
  }
};

export const addImage = async (
  file,
  getState,
  dispatch,
  api,
  { type, typeB, msgS },
  { typeE, msgE, id },
  method = 'patch'
) => {
  try {
    await axios[method](api, file, tokenConfig(getState));
    dispatch({ type });
    dispatch({
      type: typeB,
      status: 200,
      id: 'MSG',
      msg: msgS
    });
  } catch (e) {
    dispatch({
      type: typeE,
      status: 400,
      msg: msgE,
      id
    });
  }
};
