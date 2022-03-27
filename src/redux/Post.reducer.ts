import {
  POST_CREATE_FAIL,
  POST_CREATE_LOADING,
  POST_CREATE_SUCCESS,
  GET_POSTS,
  PostDispatchTypes,
  TOGGLE_SUCCESS_ALERT_CREATE,
  PostType,
} from '../actions/actionsTypes';

interface DefaultState {
  isCreateLoading: boolean;
  isShowCreateAlert: boolean;
  results: PostType[];
  count: number;
  next: string | null;
  previous: string | null;
}

const defaultState: DefaultState = {
  isCreateLoading: false,
  isShowCreateAlert: false,
  results: [],
  count: 0,
  next: null,
  previous: null,
};

const postReducer = (
  state: DefaultState = defaultState,
  action: PostDispatchTypes
): DefaultState => {
  switch (action.type) {
    case POST_CREATE_FAIL:
      return {
        ...state,
        isCreateLoading: false,
      };
    case POST_CREATE_LOADING:
      return {
        ...state,
        isCreateLoading: true,
      };
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        isCreateLoading: false,
      };
    case GET_POSTS:
      return {
        ...state,
        ...action.payload,
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
