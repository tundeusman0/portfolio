const initialState = {
  status: null,
  msg: null,
  id: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_FAILED':
    case 'LOGIN_FAILED':
      return {
        ...state,
        status: action.status,
        msg: action.msg,
        id: action.id
      };
    case 'AUTH_SUCCESS':
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
