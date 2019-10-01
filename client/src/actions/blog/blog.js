import axios from 'axios';
import tokenConfig from '../../selectors/tokenConfig';
import { updateAction, deleteAction, addImage } from '../../selectors/utils';

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

export const editBlog = payload => async (dispatch, getState) => {
  const api = `/api/blog/${payload.id}`;
  await updateAction(
    payload.updates,
    api,
    getState,
    dispatch,
    'patch',
    {
      type: 'EDIT_BLOG',
      typeS: 'BLOG_SUCCESS',
      msg: 'BLOG UPDATED'
    },
    { typeE: 'BLOG_ERROR', msgE: 'Unable to edit Blog', idE: 'Blog Fail' }
  );
};

export const deleteBlog = id => async (dispatch, getState) => {
  const api = `/api/blog/${id}`;
  await deleteAction(
    id,
    api,
    getState,
    dispatch,
    undefined,
    {
      type: 'DELETE_BLOG',
      typeS1: 'BLOG_SUCCESS',
      msg: 'BLOG DELETED'
    },
    { typeE: 'BLOG_ERROR', msgE: 'Unable to delete blog', id: 'Blog Fail' }
  );
};

export const postBlogImage = (payload = {}) => async (dispatch, getState) => {
  await addImage(
    payload.file,
    getState,
    dispatch,
    `/api/blog/pix/${payload.id}`,
    {
      type: 'BLOG_SUCCESS',
      typeB: 'POST_SUCCESS_MSG',
      msgS: 'BLOG PIX UPDATED'
    },
    {
      typeE: 'BLOG_ERROR',
      msgE: 'Unable to update BLOG Pix.',
      id: 'BLOG Fail'
    },
    'post'
  );
};
