import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    width: '50%',
    // alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
});
