import { updateAction, deleteAction } from '../../selectors/utils';

export const postProjects = payload => async (dispatch, getState) => {
  const api = '/api/resume/projects';
  await updateAction(payload, api, getState, dispatch, 'post');
};

export const deleteProjects = id => async (dispatch, getState) => {
  const api = `/api/resume/projects/${id}`;
  await deleteAction(id, api, getState, dispatch, 'projects');
};

export const updateProjects = payload => async (dispatch, getState) => {
  const api = `/api/resume/projects/${payload.id}`;
  await updateAction(payload.proj, api, getState, dispatch);
};
