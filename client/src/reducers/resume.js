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
    case 'DELETE_RESUMES':
      const resumeName = action.resumeName;
      return {
        ...state,
        resume: {
          ...state.resume,
          [resumeName]: state.resume[resumeName].filter(
            resume => action.id !== resume._id
          )
        }
      };
    default:
      return state;
  }
};
