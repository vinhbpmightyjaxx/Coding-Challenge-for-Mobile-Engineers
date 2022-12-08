import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from './app-redux/reducer';

import { loginReducer } from '../features/un-authentication/home/redux/reducer';

export const allReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
});

export type RootState = ReturnType<typeof allReducer>;
