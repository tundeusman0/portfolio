const initialState = {
  blogs: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BLOG':
      return {
        ...state,
        blogs: action.payload,
        isLoading: false
      };
    case 'ADD_BLOG':
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
        isLoading: false
      };
    default:
      return state;
  }
};
