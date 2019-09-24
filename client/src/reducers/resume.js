const initialState = {
  resume: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESUME':
    case 'GET_RESUME':
      return {
        ...state,
        resume: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
