import React from 'react';
import {Image, Text, View} from 'react-native';
import estilo from './estilo'

const Foto = () => {
    return (
        <View>
            <Image
                source={require("../../../assets/images/jaja.jpg")}
                style={estilo.imagem}
            />
            <Text>Descrição do post</Text>
        
        </View>
    )
}
    

export default Foto;


