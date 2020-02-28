import UserApi from '../../apis/UserApi';
import AsyncStorage from '@react-native-community/async-storage';

export const actions = {
  SET_TOKEN: 'SET_TOKEN',
  ERROR: 'ERROR',
  LOADING_START: 'LOADING_START',
  LOADING_END: 'LOADING_END',
  DELETE_TOKEN: 'DELETE_TOKEN',
  CLEAR_ERROR: 'CLEAR_ERROR',
  //async storage actions
  ASYNC_LOADING_START: 'ASYNC_LOADING_START',
  ASYNC_LOADING_END: 'ASYNC_LOADING_END',
  ASYNC_SAVE_TOKEN: 'ASYNC_SAVE_TOKEN',
  ASYNC_GET_TOKEN: 'ASYNC_GET_TOKEN',
  ASYNC_DELETE_TOKEN: 'ASYNC_DELETE_TOKEN',
  ASYNC_ERROR: 'ASYNC_ERROR',
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
          type: actions.SET_TOKEN,
          data: res.data.token,
        });
        storeData('token', res.data.token);
        dispatch({
          type: actions.CLEAR_ERROR,
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
  return async dispatch => {
    dispatch({
      type: actions.LOADING_START,
    });

    console.log('Data to be sent: ', bodyData);

    UserApi.post('/login', bodyData)
      .then(res => {
        dispatch({
          type: actions.SET_TOKEN,
          data: res.data.token,
        });
        dispatch({
          type: actions.SET_TOKEN,
          data: res.data.token,
        });
        storeData('token', res.data.token);
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
      type: actions.DELETE_TOKEN,
    });
    dispatch({
      type: actions.LOADING_END,
    });
  };
};

const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
    // const val = await AsyncStorage.getItem(key);
    // console.log(val);
  } catch (e) {
    console.log(e);
  }
};

export const trylocalSignin = key => {
  return async dispatch => {
    try {
      const val = await AsyncStorage.getItem(key);
      dispatch({
        type: actions.ASYNC_LOADING_START,
      });
      if (val) {
        dispatch({
          type: actions.SET_TOKEN,
          data: val,
        });
        dispatch({
          type: actions.ASYNC_LOADING_END,
        });
      }
    } catch (err) {
      dispatch({
        type: actions.ASYNC_ERROR,
        data: err,
      });
      dispatch({
        type: actions.ASYNC_LOADING_END,
      });
    }
  };
};
