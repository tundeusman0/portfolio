const initialState = {
  status: null,
  msg: null,
  id: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_FAILED':
    case 'LOGIN_FAILED':
    case 'POST_SUCCESS':
    case 'POST_SUCCESS_MSG':
    case 'RESUME_ERROR':
    case 'LOGO_ERROR':
    case 'BLOG_ERROR':
      return {
        ...state,
        status: action.status,
        msg: action.msg,
        id: action.id
      };
    case 'AUTH_SUCCESS':
    case 'RESUME_SUCCESS':
    case 'LOGO_SUCCESS':
    case 'BLOG_SUCCESS':
      return {
        ...state,
        status: '',
        msg: '',
        id: ''
      };

    default:
      return state;
  }
};
