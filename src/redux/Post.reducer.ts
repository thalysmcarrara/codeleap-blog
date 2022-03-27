import {
  POST_FAIL,
  POST_LOADING,
  POST_SUCCESS,
  PostDispatchTypes,
  TOGGLE_SUCCESS_ALERT_CREATE,
} from '../actions/actionsTypes';

type Post = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

interface DefaultState {
  loading: boolean;
  isShowCreateAlert: boolean;
  posts: Post[];
}

const defaultState: DefaultState = {
  loading: false,
  isShowCreateAlert: false,
  posts: [],
};

const postReducer = (
  state: DefaultState = defaultState,
  action: PostDispatchTypes
): DefaultState => {
  switch (action.type) {
    case POST_FAIL:
      return {
        ...state,
        loading: false,
      };
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case TOGGLE_SUCCESS_ALERT_CREATE:
      return {
        ...state,
        isShowCreateAlert: !state.isShowCreateAlert,
      };
    default:
      return state;
  }
};

export default postReducer;
