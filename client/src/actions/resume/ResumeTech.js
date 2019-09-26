import { updateAction } from '../../selectors/utils';

export const postTech = payload => async (dispatch, getState) => {
  const api = '/api/resume/tech';
  await updateAction(payload, api, getState, dispatch);
};

// export const deleteRef = id => async (dispatch, getState) => {
//   try {
//     await axios.delete(`/api/resume/reference/${id}`, tokenConfig(getState));
//     dispatch({ type: 'DELETE_REF', id });
//     dispatch({ type: 'RESUME_SUCCESS' });
//     dispatch({
//       type: 'POST_SUCCESS_MSG',
//       status: 200,
//       id: 'MSG',
//       msg: 'RESUME DELETED'
//     });
//   } catch (e) {
//     dispatch({
//       type: 'RESUME_ERROR',
//       status: 400,
//       msg: 'Unable to delete Resume',
//       id: 'Resume Fail'
//     });
//   }
// };
