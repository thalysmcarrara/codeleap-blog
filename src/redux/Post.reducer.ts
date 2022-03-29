import {
  POST_EDIT_LOADING,
  POST_CREATE_FAIL,
  POST_CREATE_LOADING,
  POST_CREATE_SUCCESS,
  GET_POSTS,
  PostDispatchTypes,
  TOGGLE_SUCCESS_ALERT_CREATE,
  PostType,
  CLOSE_EDIT_MODAL,
  POST_DELETE_LOADING,
  CLOSE_DELETE_DIALOG,
} from '../actions/actionsTypes';

interface DefaultState {
  isCreateLoading: boolean;
  isShowCreateAlert: boolean;
  isEditLoading: boolean;
  isCloseEditModal: boolean;
  isDeleteLoading: boolean;
  isCloseDeleteLoading: boolean;
  results: PostType[];
  count: number;
  next: string | null;
  previous: string | null;
}

const defaultState: DefaultState = {
  isCreateLoading: false,
  isShowCreateAlert: false,
  isEditLoading: false,
  isDeleteLoading: false,
  isCloseEditModal: false,
  isCloseDeleteLoading: false,
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
    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        isCloseEditModal: !state.isCloseEditModal,
      };
    case POST_EDIT_LOADING:
      return {
        ...state,
        isEditLoading: !state.isEditLoading,
      };
    case POST_DELETE_LOADING:
      return {
        ...state,
        isDeleteLoading: !state.isDeleteLoading,
      };
    case CLOSE_DELETE_DIALOG:
      return {
        ...state,
        isCloseDeleteLoading: !state.isCloseDeleteLoading,
      };
    default:
      return state;
  }
};

export default postReducer;
