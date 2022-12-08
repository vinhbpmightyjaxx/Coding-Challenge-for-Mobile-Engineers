import { ApiConstants, NetWorkResponseType, NetWorkService } from '@networking';
import { onEndProcess } from '@store/app-redux/reducer';
import { call, put } from '@typed-redux-saga';
import { Action } from 'redux';

import { actions } from '../redux/reducer';

export function* onLogin(action: Action) {
  console.log('actions: ', action);
  if (actions.onLogin.match(action)) {
    // const { body } = action.payload;
    // yield* put(onStartProcess());
    console.log(ApiConstants.LOGIN);

    const response = yield* call<NetWorkResponseType<unknown>>(
      NetWorkService.Get,
      {
        url:
          'https://api.unsplash.com/photos?page=' +
          action.payload.page +
          '&order_by=latest&per_page=' +
          action.payload.per_page,
      },
    );
    yield* put(onEndProcess());
    if (response?.data && action.payload.page === 1) {
      /// TODO
      yield put(actions.onSuccess(response.data));
    } else {
      console.log(action.payload.page);
      yield put(actions.onLoadMore(response?.data));
    }
  }
}
