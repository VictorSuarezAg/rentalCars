import { View } from 'react-native';
import { styles } from '../assets/styles/styles.js'
import { Avatar, Text } from 'react-native-paper';
import registerbg from '../assets/register-bg.png';

export default function Perfil({navigation, route}){
    const usuario = route.params
    console.log(usuario);
    return(
        <View style={[styles.container, {backgroundImage: `url(${registerbg})`, backgroundSize: "cover"}]}>
            <Avatar.Icon size={200} icon="account" />
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>nombre</Text>
        </View>
    );
}