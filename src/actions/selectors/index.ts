import { RootStore } from '../../redux/store';

export const getIsloadingPostSelector = (state: RootStore) =>
  state.posts.isCreateLoading;

export const getIsShowAlertCreateSelector = (state: RootStore) =>
  state.posts.isShowCreateAlert;

export const getPostsSelector = (state: RootStore) => state.posts.results;

export const getIsCloseModal = (state: RootStore) =>
  state.posts.isCloseEditModal;

export const getIsEditLoading = (state: RootStore) => state.posts.isEditLoading;
