import React from 'react';
import { Image, Text, View } from 'react-native';

import { MainUnsplashModel } from '@model/photos';

import { styles } from './style';

const Item = ({ item }: { item: MainUnsplashModel }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.urls.regular }} style={styles.imageStyles} />
      {(() => {
        if (item.description === '' || item.description == null) {
          return (
            <>
              <View style={styles.userInfoWrapperStyles}>
                <Image
                  source={{ uri: item.user.profile_image.medium }}
                  style={styles.avatarUserStyles}
                />
                <View style={styles.usernameWrapper}>
                  <Text>
                    {item.user.last_name} {item.user.first_name}
                  </Text>
                </View>
              </View>
              <View style={styles.likeWrapper}>
                <Image
                  source={require('../../../../assets/icon/source/love.png')}
                  style={styles.likeIconStyles}
                />
                <Text>{item.likes}</Text>
              </View>
            </>
          );
        } else {
          return (
            <>
              <Text style={styles.descriptionStyles}>{item.description}</Text>
              <View style={styles.userInfoWrapperStyles}>
                <Image
                  source={{ uri: item.user.profile_image.medium }}
                  style={styles.avatarUserStyles}
                />
                <View style={styles.usernameWrapper}>
                  <Text>
                    {item.user.last_name} {item.user.first_name}
                  </Text>
                </View>
              </View>
            </>
          );
        }
      })()}
    </View>
  );
};

export default Item;
