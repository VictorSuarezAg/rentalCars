import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './screens/Inicio';
import Login from './screens/Login';
import Registro from './screens/Registro';
import RentalCars from './screens/RentalCars';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'> 
         <Stack.Screen name="Inicio" component={Inicio} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Registro" component={Registro} />
         <Stack.Screen name="RentalCars" component={RentalCars} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
