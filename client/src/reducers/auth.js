import Cookie from 'js-cookie';

const initialState = {
  isLoading: false,
  token: Cookie.get('portfolio-Token'),
  authentication: null,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_USER':
      return {
        ...state,
        isLoading: false,
        authentication: true,
        user: action.payload
      };
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      //   set cookie to expire in one day
      Cookie.set('portfolio-Token', action.payload.token);
      return {
        ...state,
        authentication: true,
        isLoading: false,
        user: action.payload.user
      };
    case 'EDIT_USER':
    case 'EDIT_STATUS':
      return {
        ...state,
        user: {
          ...action.payload
        }
      };

    case 'REGISTER_FAIL':
    case 'LOGIN_FAIL':
    case 'LOGOUT':
      Cookie.remove('portfolio-Token');
      return {
        ...state,
        authentication: false,
        user: null
      };
    default:
      return state;
  }
};
