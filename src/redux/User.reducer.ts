import { LOGIN, GET_PERSISTED_USER } from '../actions/actionsTypes';
import { UserActions } from '../actions/User.actions';

export interface UserState {
  name: string;
}

const initialState = {
  name: '',
};

export default function userReducer(
  state: UserState = initialState,
  action: UserActions
) {
  switch (action.type) {
    case LOGIN:
      return { name: action.payload };

    case GET_PERSISTED_USER: {
      return { name: action.payload };
    }

    default:
      return state;
  }
}
