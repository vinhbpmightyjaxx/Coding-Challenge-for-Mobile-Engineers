/* eslint-disable import/order */
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import isEqual from 'react-fast-compare';

import { dispatch, useSelector } from '@common';
// import { onSetAppTheme } from '@store/app-redux/reducer';

import { MainUnsplashModel } from '@model/photos';

import Item from './photoItems';
import { styles } from './style';

import { actions } from '../redux/reducer';

/**
 * UI inspired by Pinterest
 */
const LoginComponent = () => {
  // state
  const [page, setPage] = useState(1);

  // function
  useEffect(() => {
    dispatch(actions.onGetImage(page, 10));
  }, [page]);

  // function call when user reached bottom
  const onLoadMore = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  const renderItem = ({ item }: { item: MainUnsplashModel }) => {
    return (
      <Fragment key={item.id}>
        <Item item={item} />
      </Fragment>
    );
  };

  const { data, showRefresh } = useSelector(x => x.getImage);
  // render
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onEndReached={() => onLoadMore()}
        onEndReachedThreshold={0.01}
        refreshing={showRefresh}
        onRefresh={() => dispatch(actions.onGetImage(1, 10))}
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export const Login = memo(LoginComponent, isEqual);
