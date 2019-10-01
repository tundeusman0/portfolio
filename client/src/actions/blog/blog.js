import axios from 'axios';
import tokenConfig from '../../selectors/tokenConfig';

export const addBlog = payload => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/blog', payload, tokenConfig(getState));
    dispatch({ type: 'ADD_BLOG', payload: res.data });
    dispatch({ type: 'BLOG_SUCCESS' });
    dispatch({
      type: 'POST_SUCCESS_MSG',
      status: 200,
      id: 'MSG',
      msg: 'ADDED'
    });
  } catch (e) {
    console.warn(e);
    dispatch({
      type: 'BLOG_ERROR',
      status: 400,
      msg: 'Unable to add Blog',
      id: 'Blog Fail'
    });
  }
};
