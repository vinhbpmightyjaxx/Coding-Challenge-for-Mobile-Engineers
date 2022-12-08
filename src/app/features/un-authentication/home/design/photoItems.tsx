import React from 'react';
import { Image, Text, View } from 'react-native';

import { MainUnsplashModel } from '@model/photos';

import { styles } from './style';

const Item = ({ item }: { item: MainUnsplashModel }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: item.urls.regular }}
        style={{ width: '100%', aspectRatio: 0.5, borderRadius: 10 }}
      />
      {/* <Text style={{ position: 'absolute', top: 15 }}>{item.likes}</Text> */}
      <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 15 }}>
        {item.description}
      </Text>
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <Image
          source={{ uri: item.user.profile_image.medium }}
          style={{
            width: 50,
            aspectRatio: 1,
            borderRadius: 25,
            marginRight: 5,
          }}
        />
        <Text>
          {item.user.last_name} {item.user.first_name}
        </Text>
      </View> */}
    </View>
  );
};

export default Item;
