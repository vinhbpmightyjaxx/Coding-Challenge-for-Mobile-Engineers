import { all } from '@typed-redux-saga';

import { appSaga } from './app-saga/index';

import { GetImageSaga } from '../features/un-authentication/home/saga/index';

export const rootSaga = function* rootSaga() {
  yield* all([appSaga(), GetImageSaga()]);
};
