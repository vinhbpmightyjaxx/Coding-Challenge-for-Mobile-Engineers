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

const LoginComponent = () => {
  // state
  const [page, setPage] = useState(1);

  // function
  useEffect(() => {
    dispatch(actions.onLogin(page, 10));
    // Alert.alert(JSON.stringify(data));
  }, [page]);

  const onLoadMore = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  const renderItem = ({ item }: { item: MainUnsplashModel }) => {
    console.log('id: ', item.id);
    return (
      <Fragment key={item.id}>
        <Item item={item} />
      </Fragment>
    );
  };

  const dataLogin = useSelector(x => x.login);
  // render
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onEndReached={() => onLoadMore()}
        onEndReachedThreshold={0.01}
        refreshing={false}
        onRefresh={() => dispatch(actions.onLogin(1, 10))}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          width: '100%',
        }}
        numColumns={2}
        data={dataLogin.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export const Login = memo(LoginComponent, isEqual);
