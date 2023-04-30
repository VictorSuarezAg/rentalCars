import { View, Text } from 'react-native'
import { styles } from '../assets/styles/styles.js'
import background from '../assets/fondo-app.png';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

export default function Login({navigation, route}) {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      usuario: '',
      password: ''
    }
  })

  const usuarios = route.params
  const listUsuarios = usuarios.usuarios

  const [errormess, setErrormess] = useState('')

  const onSubmit = (data) => {
    let usuarioCorrecto = listUsuarios.find(usr => usr.usuario == data.usuario)
    let passwordCorrecto = listUsuarios.find(usr => usr.password == data.password)
    if (usuarioCorrecto != undefined && passwordCorrecto != undefined) {
      setErrormess('')
      navigation.navigate('RentalCars', {usuarios: listUsuarios})
      reset()
    } else {
      setErrormess('Usuario o contraseña incorrectas')
      reset()
    }
  }
  return (
    <View style={[styles.container, {backgroundImage: `url(${background})`, backgroundSize: "cover"}]}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>a RentalCars</Text>
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
            left={<TextInput.Icon icon="account" />}
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
        icon="login" 
        mode="contained" 
        dark="true"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}>
          Login
      </Button>
      <Text style={{color:'red'}}>{errormess}</Text>
    </View>
  );
}