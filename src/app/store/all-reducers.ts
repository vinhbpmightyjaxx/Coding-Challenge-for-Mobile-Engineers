import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from './app-redux/reducer';

import { imageReducer } from '../features/un-authentication/home/redux/reducer';

export const allReducer = combineReducers({
  app: appReducer,
  getImage: imageReducer,
});

export type RootState = ReturnType<typeof allReducer>;
