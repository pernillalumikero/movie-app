import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomNav from './components/BottomNav';
import DrawerNav from './components/DrawerNav';

export default function App() {
  return (
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
  );
}

