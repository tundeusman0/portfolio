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
    case 'EDIT_BLOG':
      return {
        ...state,
        blogs: state.blogs.map(blog => {
          if (blog._id === action.payload._id) {
            return {
              blog,
              ...action.payload,
              isLoading: false
            };
          } else {
            return blog;
          }
        })
      };
    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog._id !== action.id)
      };
    default:
      return state;
  }
};
