import { Home } from './pages/Home';
import { useFonts } from 'expo-font';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Forecast } from '@pages/Forecast';

const Stack = createNativeStackNavigator();
const fonts = {
  regular: 'Alata-Regular',
  medium: 'Alata-Regular',
  bold: 'Alata-Bold',
  heavy: 'Alata-Bold',
};

const navTheme: Theme = {
  dark: false,
  colors: {
    background: 'transparent',
    primary: 'transparent',
    card: 'transparent',
    text: 'transparent',
    border: 'transparent',
    notification: 'transparent',
  },
  // Ajout des polices personnalisées
  fonts,
};

export default function App() {
  const [loaded, error] = useFonts({
    'Alata-Regular': require('./assets/fonts/Alata-Regular.ttf'),
  });

  return (
    <NavigationContainer theme={navTheme}>
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
