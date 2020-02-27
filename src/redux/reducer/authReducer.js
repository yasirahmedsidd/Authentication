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
    case actions.ERROR:
      return {...state, error: data, token: null};

    default:
      return state;
  }
};
