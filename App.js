import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import DrawerNav from './components/DrawerNav';

export default function App() {
  return (
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header1: {
    fontSize: 40,
    color: 'orange'
  },
  text: {
    fontSize: 20,
    padding: 30
  }

});
