import { takeLatest } from '@typed-redux-saga';

import * as Saga from './saga';

import { actions } from '../redux/reducer';
export function* GetImageSaga() {
  yield* takeLatest(actions.onGetImage.type, Saga.onGetImage);
}
