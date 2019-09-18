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
        loading: true
      };
    case 'REGISTER_SUCCESS':
      // case 'LOGIN_SUCCESS':
      //   set cookie to expire in one day
      Cookie.set('portfolio-Token', action.payload.token);
      return {
        ...state,
        loading: false,
        user: action.payload.user
      };

    case 'REGISTER_FAIL':
      //   case 'LOGIN_FAIL':
      Cookie.remove('portfolio-Token');
      return {
        ...state,
        loading: false,
        user: action.payload.user
      };
    default:
      return state;
  }
};
