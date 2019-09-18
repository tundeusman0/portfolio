import jsCookie from 'js-cookie';
const initialState = {
  isLoading: false,
  token: jsCookie.get('portfolio-Token'),
  authenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'Login_success':
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
