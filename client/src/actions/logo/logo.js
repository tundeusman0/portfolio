import { addImage } from '../../selectors/utils';
import axios from 'axios';
import tokenConfig from '../../selectors/tokenConfig';

export const postLogoImage = (file = {}) => async (dispatch, getState) => {
  await addImage(
    file,
    getState,
    dispatch,
    '/api/logo/pix',
    {
      type: 'LOGO_SUCCESS',
      typeB: 'POST_SUCCESS_MSG',
      msgS: 'LOGO PIX UPDATED'
    },
    {
      typeE: 'LOGO_ERROR',
      msgE: 'Unable to update LOGO Pix You may need to add a slogan first.',
      id: 'LOGO Fail'
    },
    'post'
  );
};

export const addSlogan = payload => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/logo', payload, tokenConfig(getState));
    dispatch({ type: 'ADD_LOGO', payload: res.data });
    dispatch({ type: 'LOGO_SUCCESS' });
    dispatch({
      type: 'POST_SUCCESS_MSG',
      status: 200,
      id: 'MSG',
      msg: 'ADDED'
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'LOGO_ERROR',
      status: 400,
      msg: 'Unable to add logo',
      id: 'logo Fail'
    });
  }
};
