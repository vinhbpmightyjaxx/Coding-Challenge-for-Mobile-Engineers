/* eslint-disable @typescript-eslint/no-explicit-any */
import { SLICE_NAME } from '@config/type';
import { MainUnsplashModel } from '@model/photos';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as Action from './actionType';
export interface LoginState {
  loading: boolean;
  showDialog: false;
  count: number;
  data: MainUnsplashModel[] | [];
}
const initialState: LoginState = {
  loading: false,
  showDialog: false,
  count: 0,
  data: [],
};
const loginSlice = createSlice({
  name: SLICE_NAME.LOGIN,
  initialState: initialState,
  reducers: {
    reset: () => {
      return { ...initialState };
    },
    onStart: () => {
      /// TODO
    },
    onSuccess: (state, { payload }: PayloadAction<any>) => {
      /// TODO
      state.data = payload;
      state.showDialog = false;
      return state;
    },
    onLoadMore: (state, { payload }: PayloadAction<any>) => {
      state.data = [...state.data, ...payload];
      state.showDialog = false;
      return state;
    },
  },
});
const onLogin = createAction(
  Action.LOGIN,
  (page: number, per_page: number) => ({
    payload: { page, per_page },
  }),
);
export const actions = { ...loginSlice.actions, onLogin };
export const loginReducer = loginSlice.reducer;
