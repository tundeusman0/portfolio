import { updateAction, deleteAction } from '../../selectors/utils';

export const postSocial = payload => async (dispatch, getState) => {
  const api = '/api/resume/social';
  await updateAction(payload, api, getState, dispatch);
};

export const deleteSocial = id => async (dispatch, getState) => {
  const api = `/api/resume/social/${id}`;
  await deleteAction(id, api, getState, dispatch, 'social');
};
