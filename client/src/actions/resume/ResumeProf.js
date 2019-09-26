import { updateAction, deleteAction } from '../../selectors/utils';

export const postProf = payload => async (dispatch, getState) => {
  const api = '/api/resume/professional';
  await updateAction(payload, api, getState, dispatch);
};

export const deleteProf = id => async (dispatch, getState) => {
  const api = `/api/resume/professional/${id}`;
  await deleteAction(id, api, getState, dispatch, 'proffesionalBody');
};
