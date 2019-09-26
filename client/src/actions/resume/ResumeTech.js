import { updateAction, deleteAction } from '../../selectors/utils';

export const postTech = payload => async (dispatch, getState) => {
  const api = '/api/resume/tech';
  await updateAction(payload, api, getState, dispatch);
};

export const deleteTech = id => async (dispatch, getState) => {
  const api = `/api/resume/tech/${id}`;
  await deleteAction(id, api, getState, dispatch, 'tech');
};
