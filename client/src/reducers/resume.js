const initialState = {
  resume: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESUME':
    case 'GET_RESUME':
    case 'EDIT_RESUME':
      return {
        ...state,
        resume: action.payload,
        isLoading: false
      };
    case 'DELETE_EDU':
      return {
        ...state,
        resume: {
          ...state.resume,
          education: state.resume.education.filter(edu => action.id !== edu._id)
        }
      };
    case 'DELETE_PROF':
      return {
        ...state,
        resume: {
          ...state.resume,
          proffesionalBody: state.resume.proffesionalBody.filter(
            prof => action.id !== prof._id
          )
        }
      };
    case 'DELETE_REF':
      return {
        ...state,
        resume: {
          ...state.resume,
          reference: state.resume.reference.filter(
            prof => action.id !== prof._id
          )
        }
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        resume: {
          ...state.resume,
          projects: state.resume.projects.filter(proj => action.id !== proj._id)
        }
      };
    default:
      return state;
  }
};
