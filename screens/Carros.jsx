import {View, Text, Image} from 'react-native';
import { styles, list } from '../assets/styles/styles';
import { List } from 'react-native-paper';
import registerbg from '../assets/register-bg.png';

let carros = [
    {
        'foto': 'https://www.elcarrocolombiano.com/wp-content/uploads/2020/11/20201117-CHEVROLET-JOY-COLOMBIA-5-PUNTOS-CLAVE-01.jpg',
        'marca': 'Chevrolet',
        'linea': 'Joy',
        'placa': 'ABC123',
        'modelo': '2023',
        'precio': 200,
        'disponible': true
    }
]
export default function Carros({navigation, route}){
    for (let i = 0; i < carros.length; i++) {
        let carroFoto = carros[i].foto
        let carroMarca = carros[i].marca
        let carroLinea = carros[i].linea
        console.log(carroFoto);
        console.log(carroMarca);
        console.log(carroLinea);
    }
    return(
        <View style={[styles.container, {backgroundImage: `url(${registerbg})`, backgroundSize: "cover"}]}>
            <View style={list.container}>
                <Image source={{ uri: carroFoto }} style={list.photo} />
                <View style={list.container_text}>
                    <Text style={list.title}>
                        {carroMarca}
                    </Text>
                </View>
            </View>
        </View>
    );
}