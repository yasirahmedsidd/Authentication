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

export const loginUser = (contact, pass) => {
  const bodyData = {contact, password: pass};
  console.log(`LOGIN USER ACTION RAN ${JSON.stringify(bodyData)}`);

  return async dispatch => {
    dispatch({
      type: actions.LOADING_START,
    });

    console.log('Data to be sent: ', bodyData);

    UserApi.post('/login', bodyData)
      .then(res => {
        dispatch({
          type: actions.LOGIN_USER,
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

export const logoutUser = () => {
  return async dispatch => {
    dispatch({
      type: actions.LOADING_START,
    });
    dispatch({
      type: actions.LOGOUT_USER,
    });
    dispatch({
      type: actions.LOADING_END,
    });
  };
};
