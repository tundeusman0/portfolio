const initialState = {
  logo: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LOGO':
    case 'GET_LOGO':
    case 'EDIT_LOGO':
      return {
        ...state,
        logo: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
