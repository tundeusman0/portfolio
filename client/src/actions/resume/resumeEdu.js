import { updateAction, deleteAction } from '../../selectors/utils';

export const postEdu = payload => async (dispatch, getState) => {
  const api = '/api/resume/education';
  await updateAction(payload, api, getState, dispatch);
};

export const deleteEdu = id => async (dispatch, getState) => {
  const api = `/api/resume/education/${id}`;
  await deleteAction(id, api, getState, dispatch, 'education');
};
