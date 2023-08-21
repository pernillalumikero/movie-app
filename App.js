import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
  );
}

