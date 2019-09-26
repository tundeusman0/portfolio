import { updateAction, deleteAction } from '../../selectors/utils';

export const postRef = payload => async (dispatch, getState) => {
  const api = '/api/resume/reference';
  await updateAction(payload, api, getState, dispatch);
};

export const deleteRef = id => async (dispatch, getState) => {
  const api = `/api/resume/reference/${id}`;
  await deleteAction(id, api, getState, dispatch, 'reference');
};
