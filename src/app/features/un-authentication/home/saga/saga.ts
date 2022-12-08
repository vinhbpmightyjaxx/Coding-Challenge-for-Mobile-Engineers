import { NetWorkResponseType, NetWorkService } from '@networking';
import { call, put } from '@typed-redux-saga';
import { Action } from 'redux';

import { actions } from '../redux/reducer';

export function* onGetImage(action: Action) {
  if (actions.onGetImage.match(action)) {
    console.log(action.payload.page);
    // const { body } = action.payload;
    yield* put(actions.onStart());
    const response = yield* call<NetWorkResponseType<unknown>>(
      NetWorkService.Get,
      {
        url:
          'https://api.unsplash.com/photos?page=' +
          action.payload.page +
          '&order_by=popular&per_page=' +
          action.payload.per_page,
      },
    );
    if (response?.data && action.payload.page === 1) {
      /// TODO
      yield put(actions.onSuccess(response.data));
    } else {
      yield put(actions.onLoadMore(response?.data));
    }
  }
}
