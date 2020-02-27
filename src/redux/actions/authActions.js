import UserApi from '../../apis/UserApi';

export const actions = {
  LOGIN_USER: 'LOGIN_USER',
  CREATE_USER: 'CREATE_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  ERROR: 'ERROR',
  LOADING_START: 'LOADING_START',
  LOADING_END: 'LOADING_END',
};

export const createUser = (contact, pass) => {
  const bodyData = {
    contact,
    password: pass,
    city: 'karachi',
    name: 'random name',
  };
  return async dispatch => {
    dispatch({
      type: actions.LOADING_START,
    });
    console.log('Data to be sent: ', bodyData);
    UserApi.post('/signup', bodyData)
      .then(res => {
        dispatch({
          type: actions.CREATE_USER,
          data: res.data.token,
        });
        dispatch({
          type: actions.LOADING_END,
        });
      })
      .catch(err => {
        dispatch({
          type: actions.ERROR,
          data: err.response.data.msg,
        });
        dispatch({
          type: actions.LOADING_END,
        });
      });
  };
};
