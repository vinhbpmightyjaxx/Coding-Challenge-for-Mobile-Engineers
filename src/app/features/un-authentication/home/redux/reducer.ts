/* eslint-disable @typescript-eslint/no-explicit-any */
import { SLICE_NAME } from '@config/type';
import { MainUnsplashModel } from '@model/photos';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as Action from './actionType';
export interface ImageState {
  loading: boolean;
  showDialog: boolean;
  showRefresh: boolean;
  count: number;
  data: MainUnsplashModel[] | [];
}
const initialState: ImageState = {
  loading: false,
  showDialog: false,
  showRefresh: false,
  count: 0,
  data: [],
};
const getImageSlice = createSlice({
  name: SLICE_NAME.GET_IMAGE,
  initialState: initialState,
  reducers: {
    reset: () => {
      return { ...initialState };
    },
    onStart: state => {
      state.showRefresh = true;
    },
    onSuccess: (state, { payload }: PayloadAction<any>) => {
      state.data = payload;
      state.showRefresh = false;
      return state;
    },
    onLoadMore: (state, { payload }: PayloadAction<any>) => {
      state.data = [...state.data, ...payload];
      state.showRefresh = false;
      return state;
    },
  },
});
const onGetImage = createAction(
  Action.GET_IMAGE,
  (page: number, per_page: number) => ({
    payload: { page, per_page },
  }),
);
export const actions = { ...getImageSlice.actions, onGetImage };
export const imageReducer = getImageSlice.reducer;
