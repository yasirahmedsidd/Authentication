import {actions} from '../actions/authActions';
const initialState = {
  token: null,
  isLoading: false,
  error: '',
};

export default (state = initialState, {type, data}) => {
  switch (type) {
    case actions.LOADING_START:
      return {...state, isLoading: true};

    case actions.LOADING_END:
      return {...state, isLoading: false};

    case actions.CREATE_USER:
      return {...state, token: data, error: ''};

    case actions.LOGIN_USER:
      console.log('LOGIN USER REDUCER RAN');
      return {...state, token: data, error: ''};

    case actions.LOGOUT_USER:
      return {...state, token: null, error: ''};

    case actions.ERROR:
      return {...state, error: data, token: null};
    default:
      return state;
  }
};
