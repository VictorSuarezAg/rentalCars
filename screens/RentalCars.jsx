import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Perfil from './Perfil.jsx';
import Renta  from './Renta.jsx';

const Tab = createBottomTabNavigator();

export default function RentalCars() {
  return (
    <Tab.Navigator
      initialRouteName='Perfil'
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Renta"
        component={Renta}
        options={{
          tabBarLabel: 'Renta',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="check" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}