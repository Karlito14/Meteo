import { Home } from './pages/Home';
import { useFonts } from 'expo-font';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Forecast } from '@pages/Forecast';
import { NAV_THEME } from '@constants';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    'Alata-Regular': require('./assets/fonts/Alata-Regular.ttf'),
  });

  return (
    <NavigationContainer theme={NAV_THEME}>
      {loaded && (
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: 'fade' }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
