import axios from 'axios';

export const registerUser = user => async dispatch => {
  dispatch({ type: 'LOADING' });
  console.log(user);
  try {
    const res = axios.post('/', user);
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};
