import { RootStore } from '../../redux/store';

export const getIsloadingPostSelector = (state: RootStore) =>
  state.posts.loading;

export const getIsShowAlertCreate = (state: RootStore) =>
  state.posts.isShowCreateAlert;
