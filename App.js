import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './module/home/HomeScreen';
import Login from './module/auth/Login';
import Restaurant from './module/restaurant/Restaurant';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Restaurant />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
