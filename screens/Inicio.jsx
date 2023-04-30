import { View } from 'react-native'
import { styles } from '../assets/styles/styles.js'
import background from '../assets/home-bg.png';
import { Button } from 'react-native-paper';
import { useForm } from 'react-hook-form';

let usuarios = []

export default function Inicio({navigation}) {
    const {handleSubmit} = useForm()
    const onLogin = () => {
        navigation.navigate('Login', {usuarios: usuarios})
    }

    const onRegister = () => {
        navigation.navigate('Registro')
    }
    return (
        <View style={[styles.container, {backgroundImage: `url(${background})`, backgroundSize: "cover"}]}>
            <Button 
                icon="login" 
                mode="contained" 
                dark="true"
                onPress={handleSubmit(onLogin)}
                style={[styles.button, {marginTop: 370, marginBottom: 20}]}>
                Login
            </Button>
            <Button 
                icon="account-plus" 
                mode="contained"
                style={styles.buttonRegister}
                onPress={handleSubmit(onRegister)}>
                Registrarse
            </Button>
        </View>
    )
}