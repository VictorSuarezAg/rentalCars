import { View, Text } from 'react-native'
import { styles } from '../assets/styles/styles.js'
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import registerbg from '../assets/register-bg.png';

let usuarios = []

export default function Registro({navigation, route}) {
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            usuario: '',
            nombre: '',
            email: '',
            password: ''
        }
    })
    const [errormess, setErrormess] = useState('')
    
    const register = (data) => {
        let unicoUsuario = usuarios.find(usr => usr.usuario == data.usuario)
        let unicoMail = usuarios.find(usr => usr.email == data.email)
        if (unicoUsuario == undefined && unicoMail == undefined) {
            setErrormess('')
            usuarios.push(data)
            console.log(usuarios)
            navigation.navigate('Login', {usuarios: usuarios})
            reset()
        } else {
            setErrormess('Este usuario y/o correo ya se encuentran registrados')
        }
    }

    return (
        <View style={[styles.container, {backgroundImage: `url(${registerbg})`, backgroundSize: "cover"}]}>
            <Text style={styles.title}>Crear una</Text>
            <Text style={styles.subtitle}>Cuenta</Text>
            <Controller
                control={control}
                rules={{
                required: true,
                minLength: 2,
                maxLength: 30,
                pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput 
                    label="Usuario"
                    mode='outlined' 
                    left={<TextInput.Icon icon="account-cowboy-hat" />}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                />
                )}
                name="usuario"
            />
            {errors.usuario?.type == 'required' && <Text style={{color:'red'}}>Este campo es requerido</Text>}
            {errors.usuario?.type == 'maxLength' && <Text style={{color:'red'}}>El usuario debe tener menos de 30 caracteres</Text>}
            {errors.usuario?.type == 'minLength' && <Text style={{color:'red'}}>El usuario debe tener mas de 30 caracteres</Text>}
            {errors.usuario?.type == 'pattern' && <Text style={{color:'red'}}>Solo se permiten letras y espacios</Text>}
            
            <Controller
                control={control}
                rules={{
                required: true,
                minLength: 2,
                maxLength: 30,
                pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput 
                    label="Nombre"
                    mode='outlined' 
                    left={<TextInput.Icon icon="account" />}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                />
                )}
                name="nombre"
            />
            {errors.nombre?.type == 'required' && <Text style={{color:'red'}}>Este campo es requerido</Text>}
            {errors.nombre?.type == 'maxLength' && <Text style={{color:'red'}}>El nombre debe tener menos de 30 caracteres</Text>}
            {errors.nombre?.type == 'minLength' && <Text style={{color:'red'}}>El nombre debe tener mas de 30 caracteres</Text>}
            {errors.nombre?.type == 'pattern' && <Text style={{color:'red'}}>Solo se permiten letras y espacios</Text>}
            
            <Controller
                control={control}
                rules={{
                required: true,
                pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput 
                    label="Email"
                    mode='outlined' 
                    left={<TextInput.Icon icon="email-variant" />}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name="email"
            />
            {errors.email?.type == 'required' && <Text style={{color:'red'}}>Este campo es requerido</Text>}
            {errors.email?.type == 'pattern' && <Text style={{color:'red'}}>Formato de email incorrecto</Text>}

            <Controller
                control={control}
                rules={{
                required: true,
                pattern: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput 
                    label="Password"
                    mode='outlined'
                    secureTextEntry='true'
                    left={<TextInput.Icon icon="lock" />}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                />
                )}
                name="password"
            />
            {errors.password?.type == 'required' && <Text style={{color:'red'}}>Este campo es requerido</Text>}
            {errors.password?.type == 'pattern' && <Text style={{color:'red'}}>El password debe tener letras minusculas, letras mayusculas, numeros, caracteres especiales y minimo 8 digitos</Text>}

            <Button 
                icon="account-plus" 
                mode="contained" 
                dark="true"
                onPress={handleSubmit(register)}
                style={styles.buttonRegister}>
                Registarse
            </Button>
            <Text style={{color:'red'}}>{errormess}</Text>
        </View>
    )
}