import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    width: '50%',
  },
  title: {
    fontSize: 32,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    width: '100%',
  },
  imageStyles: {
    width: '100%',
    aspectRatio: 0.5,
    borderRadius: 10,
  },
  descriptionStyles: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 15,
  },
  userInfoWrapperStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  avatarUserStyles: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
  },
  usernameWrapper: {
    width: '60%',
  },
  likeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeIconStyles: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
